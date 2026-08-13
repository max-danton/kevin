/**
 * État du formulaire de contact.
 * Fichier séparé de `actions.ts` : un module « use server » ne peut
 * exporter que des fonctions asynchrones.
 */

export type Champ =
  | "nom"
  | "telephone"
  | "email"
  | "ville"
  | "projet"
  | "surface"
  | "message"
  | "rgpd";

export type EtatFormulaire = {
  statut: "vide" | "succes" | "erreur" | "nonConfigure";
  message?: string;
  erreurs?: Partial<Record<Champ, string>>;
  valeurs?: Partial<Record<Champ, string>>;
};

export const etatInitial: EtatFormulaire = { statut: "vide" };
