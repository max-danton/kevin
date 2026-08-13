/**
 * ⚠️ CONTENU DE DÉMONSTRATION — chantiers et avis inventés, présents
 * uniquement pour montrer le rendu du site.
 *
 * Ils ne s'affichent que tant que `afficherContenuDemo` vaut `true` dans
 * `src/lib/site.ts`, et ils s'effacent dès qu'une vraie photo est déposée
 * dans `public/images/chantiers/`.
 *
 * Les avis clients, eux, doivent être remplacés par de vrais témoignages
 * (ou supprimés) : publier de faux avis est une pratique commerciale
 * trompeuse au sens du Code de la consommation.
 */

export type Realisation = {
  titre: string;
  lieu: string;
  type: string;
  surface: string;
  texte: string;
  /**
   * Photo du chantier. Déposez le fichier dans `public/realisations/`
   * puis indiquez `/realisations/mon-fichier.jpg` ici.
   * Laissé vide → une texture bois est affichée à la place.
   */
  image?: string;
  /** Teinte du visuel de remplacement : 0 = clair, 5 = très foncé */
  ton: 0 | 1 | 2 | 3 | 4 | 5;
};

export const realisations: Realisation[] = [
  {
    titre: "Chêne massif en point de Hongrie",
    lieu: "Appartement haussmannien",
    type: "Pose collée",
    surface: "62 m²",
    texte:
      "Dépose de l'ancienne moquette, ragréage fibré puis pose collée d'un chêne massif 14 mm en point de Hongrie. Finition huilée mate.",
    ton: 2,
  },
  {
    titre: "Rénovation d'un plancher 1900",
    lieu: "Maison de ville",
    type: "Ponçage & vitrification",
    surface: "48 m²",
    texte:
      "Rebouchage des fentes à la pâte de bois teintée, triple ponçage et vitrification satinée. Le plancher d'origine a été intégralement conservé.",
    ton: 4,
  },
  {
    titre: "Contrecollé sur plancher chauffant",
    lieu: "Maison neuve",
    type: "Pose collée",
    surface: "95 m²",
    texte:
      "Chêne contrecollé 14 mm collé en plein sur chape anhydrite, après contrôle d'hygrométrie. Plinthes assorties et barres de seuil inox.",
    ton: 1,
  },
  {
    titre: "Bâtons rompus teinte fumée",
    lieu: "Loft",
    type: "Pose collée",
    surface: "37 m²",
    texte:
      "Pose en bâtons rompus avec frise périphérique. Teinte fumée appliquée sur place pour s'accorder à la menuiserie existante.",
    ton: 5,
  },
  {
    titre: "Escalier et palier assortis",
    lieu: "Maison individuelle",
    type: "Habillage",
    surface: "16 marches",
    texte:
      "Habillage complet d'un escalier béton en chêne, nez de marche arrondis et contremarches laquées, assortis au parquet de l'étage.",
    ton: 3,
  },
  {
    titre: "Terrasse en ipé",
    lieu: "Extérieur, jardin clos",
    type: "Terrasse bois",
    surface: "28 m²",
    texte:
      "Lames d'ipé sur plots réglables, fixation invisible par clips inox, avec gestion de la pente pour l'évacuation des eaux de pluie.",
    ton: 3,
  },
];

export const temoignages = [
  {
    texte:
      "Travail impeccable et chantier d'une propreté remarquable. Kevin a pris le temps de nous expliquer chaque étape et le résultat dépasse ce qu'on imaginait.",
    auteur: "Camille R.",
    detail: "Pose de chêne massif, 62 m²",
  },
  {
    texte:
      "Notre vieux plancher était condamné selon deux autres artisans. Il l'a poncé et vitrifié, on a l'impression d'avoir un parquet neuf pour trois fois moins cher.",
    auteur: "Marc et Sylvie D.",
    detail: "Rénovation d'un plancher ancien",
  },
  {
    texte:
      "Devis clair, délais tenus au jour près, aucun supplément à la fin. C'est suffisamment rare pour être signalé.",
    auteur: "Julien P.",
    detail: "Contrecollé sur plancher chauffant, 95 m²",
  },
];
