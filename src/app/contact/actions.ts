"use server";

import { site } from "@/lib/site";
import type { EtatFormulaire } from "@/lib/contact-state";
import {
  composerMessage,
  validerDemande,
  type ValeursDemande,
} from "@/lib/contact-validation";

function txt(data: FormData, cle: string) {
  const v = data.get(cle);
  return typeof v === "string" ? v.trim() : "";
}

export async function envoyerDemande(
  _precedent: EtatFormulaire,
  data: FormData,
): Promise<EtatFormulaire> {
  // Piège à robots : champ masqué qu'un humain ne remplit jamais.
  if (txt(data, "societe")) {
    return { statut: "succes" };
  }

  const valeurs: ValeursDemande = {
    nom: txt(data, "nom"),
    telephone: txt(data, "telephone"),
    email: txt(data, "email"),
    ville: txt(data, "ville"),
    projet: txt(data, "projet"),
    surface: txt(data, "surface"),
    message: txt(data, "message"),
  };

  const erreurs = validerDemande(valeurs, data.get("rgpd") === "on");

  if (Object.keys(erreurs).length > 0) {
    return {
      statut: "erreur",
      message: "Le formulaire contient des erreurs.",
      erreurs,
      valeurs,
    };
  }

  const corps = composerMessage(valeurs, site.name);

  const cle = process.env.RESEND_API_KEY;
  const destinataire = process.env.CONTACT_TO ?? site.email;
  const expediteur = process.env.CONTACT_FROM;

  // Pas d'e-mail configuré : on le dit franchement plutôt que de laisser
  // croire à un envoi. Voir README → « Activer le formulaire de contact ».
  if (!cle || !expediteur) {
    console.warn(
      "[contact] RESEND_API_KEY ou CONTACT_FROM absent — demande non envoyée :\n" +
        corps,
    );
    return {
      statut: "nonConfigure",
      message:
        "L'envoi automatique n'est pas encore activé sur ce site. Appelez-moi directement, je réponds tout de suite :",
      valeurs,
    };
  }

  try {
    const reponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${cle}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: expediteur,
        to: [destinataire],
        reply_to: valeurs.email || undefined,
        subject: `Devis parquet — ${valeurs.nom}${valeurs.ville ? ` (${valeurs.ville})` : ""}`,
        text: corps,
      }),
    });

    if (!reponse.ok) {
      throw new Error(`Resend ${reponse.status}: ${await reponse.text()}`);
    }
  } catch (e) {
    console.error("[contact] échec de l'envoi", e);
    return {
      statut: "erreur",
      message: `L'envoi a échoué. Appelez-moi au ${site.phone}, c'est plus rapide.`,
      valeurs,
    };
  }

  return {
    statut: "succes",
    message:
      "Demande bien reçue. Je vous rappelle sous 24 h ouvrées pour convenir d'une visite.",
  };
}
