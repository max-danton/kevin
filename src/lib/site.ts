/**
 * Configuration centrale du site.
 * ⚠️ C'est LE seul fichier à modifier pour changer les coordonnées, la zone
 * d'intervention ou les mentions légales. Tout le site lit ces valeurs.
 */

export const site = {
  name: "Kevin Ducroux Services",
  legalName: "KEVIN DUCROUX SERVICES",
  shortName: "KDS",
  metier: "Parqueteur professionnel",
  baseline: "Pose et rénovation de tout type de parquet",
  // Utilisé pour les URL absolues (SEO, sitemap, données structurées).
  // ⚠️ À remplacer par le vrai nom de domaine une fois acheté.
  url: "https://www.kevinducrouxservices.fr",

  /**
   * Masque les chantiers et avis de démonstration (contenu inventé, présent
   * uniquement pour montrer le rendu). Passer à `false` avant la mise en
   * ligne : afficher de faux avis clients est une pratique commerciale
   * trompeuse. Dès qu'une photo est déposée dans public/images/chantiers,
   * la galerie réelle prend le relais automatiquement.
   */
  afficherContenuDemo: true,

  // ─── Coordonnées ────────────────────────────────────────────────
  phone: "07 69 06 98 83",
  phoneHref: "+33769069883",
  email: "kevinducrouxservices@gmail.com",

  address: {
    street: "",
    postalCode: "30740",
    city: "Le Cailar",
    region: "Gard",
    country: "FR",
  },

  /**
   * Formes contractées du nom de la ville, pour écrire « au Cailar » et
   * « du Cailar » plutôt que « à Le Cailar ». À adapter en cas de
   * déménagement : « à Nîmes » / « de Nîmes », « au Grau-du-Roi »…
   */
  villeA: "au Cailar",
  villeDu: "du Cailar",

  // Coordonnées GPS du Cailar (Gard). À affiner si besoin via Google Maps.
  geo: { lat: 43.6789, lng: 4.2264 },

  // ─── Activité ───────────────────────────────────────────────────
  zone: "jusqu'à 150 km",
  rayonKm: 150,
  villes: [
    "Le Cailar",
    "Vauvert",
    "Lunel",
    "Aigues-Mortes",
    "Nîmes",
    "Montpellier",
    "Arles",
    "Beaucaire",
    "Avignon",
    "Alès",
    "Sète",
    "Béziers",
  ],
  horaires: "Du lundi au vendredi, 8h – 20h",

  // ─── Mentions légales (obligatoire pour une EI) ─────────────────
  // ⚠️ À compléter avant la mise en ligne.
  siret: "000 000 000 00000",
  tva: "Non applicable, art. 293 B du CGI", // ou le n° de TVA intracommunautaire
  assurance: {
    nom: "Nom de l'assureur",
    contrat: "N° de contrat",
    couverture: "France métropolitaine",
  },
  hebergeur: {
    nom: "Vercel Inc.",
    adresse: "440 N Barranca Ave #4133, Covina, CA 91723, USA",
    site: "https://vercel.com",
  },
  mediateur: {
    nom: "Nom du médiateur de la consommation",
    site: "https://www.economie.gouv.fr/mediation-conso",
  },

  // ─── Réseaux (laisser vide pour masquer le lien) ────────────────
  social: {
    facebook: "",
    instagram: "",
  },
} as const;

export type Site = typeof site;
