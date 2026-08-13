/**
 * Validation du formulaire de contact.
 * Module pur, sans dépendance : il est appelé par la server action
 * (`src/app/contact/actions.ts`) et peut être testé isolément.
 */

import type { Champ } from "./contact-state";

export type ValeursDemande = {
  nom: string;
  telephone: string;
  email: string;
  ville: string;
  projet: string;
  surface: string;
  message: string;
};

const emailRe = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
const telRe = /^\+?\d{9,15}$/;

export function validerDemande(
  v: ValeursDemande,
  rgpd: boolean,
): Partial<Record<Champ, string>> {
  const erreurs: Partial<Record<Champ, string>> = {};

  if (v.nom.length < 2) {
    erreurs.nom = "Indiquez votre nom.";
  }

  // On tolère espaces, points et tirets dans la saisie du numéro.
  if (!telRe.test(v.telephone.replace(/[\s.\-()]/g, ""))) {
    erreurs.telephone = "Numéro de téléphone invalide.";
  }

  if (v.email && !emailRe.test(v.email)) {
    erreurs.email = "Adresse e-mail invalide.";
  }

  if (v.message.length < 10) {
    erreurs.message =
      "Décrivez votre projet en quelques mots (10 caractères minimum).";
  }

  if (!rgpd) {
    erreurs.rgpd =
      "Merci d'accepter d'être recontacté pour traiter la demande.";
  }

  return erreurs;
}

/** Corps de l'e-mail envoyé à l'artisan. */
export function composerMessage(v: ValeursDemande, nomEntreprise: string) {
  return [
    `Nouvelle demande de devis — ${nomEntreprise}`,
    "",
    `Nom       : ${v.nom}`,
    `Téléphone : ${v.telephone}`,
    `E-mail    : ${v.email || "non renseigné"}`,
    `Ville     : ${v.ville || "non renseignée"}`,
    `Projet    : ${v.projet || "non précisé"}`,
    `Surface   : ${v.surface || "non précisée"}`,
    "",
    "Message :",
    v.message,
  ].join("\n");
}
