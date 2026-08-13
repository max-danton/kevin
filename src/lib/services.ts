export type Service = {
  slug: string;
  titre: string;
  accroche: string;
  description: string;
  points: string[];
  icon: "plank" | "sander" | "renovation" | "stairs" | "terrace" | "skirting";
};

export const services: Service[] = [
  {
    slug: "pose-parquet-massif",
    titre: "Pose de parquet massif",
    accroche: "Le vrai bois, posé pour durer un siècle.",
    description:
      "Chêne, châtaignier, noyer ou bois exotique : je pose votre parquet massif en pose collée, clouée sur lambourdes ou flottante selon votre support et votre budget. Chaque chantier commence par un contrôle d'hygrométrie et de planéité du sol.",
    points: [
      "Pose collée, clouée ou flottante",
      "Point de Hongrie, bâtons rompus, à l'anglaise",
      "Contrôle d'humidité du support avant pose",
      "Découpes soignées autour des seuils et radiateurs",
    ],
    icon: "plank",
  },
  {
    slug: "pose-parquet-contrecolle",
    titre: "Pose de parquet contrecollé",
    accroche: "L'aspect du bois massif, la stabilité en plus.",
    description:
      "Le contrecollé garde l'aspect et le toucher du bois véritable, avec une meilleure stabilité face aux variations d'humidité. C'est la solution la plus sûre sur plancher chauffant et la plus rapide à mettre en œuvre.",
    points: [
      "Compatible plancher chauffant",
      "Pose collée en plein ou flottante",
      "Parement chêne, frêne ou essences exotiques",
      "Sous-couche acoustique adaptée au logement",
    ],
    icon: "plank",
  },
  {
    slug: "pose-parquet-stratifie",
    titre: "Pose de parquet stratifié",
    accroche: "Résistant, économique, posé proprement.",
    description:
      "Le stratifié encaisse le passage, les chaises et les griffes de chien mieux que n'importe quel autre sol bois. Bien posé, avec les bons joints de dilatation et une sous-couche correcte, il tient des années sans broncher.",
    points: [
      "Idéal pièces à fort passage et locations",
      "Joints de dilatation respectés en périphérie",
      "Sous-couche isolante ou acoustique",
      "Remise en service immédiate",
    ],
    icon: "plank",
  },
  {
    slug: "poncage-vitrification",
    titre: "Ponçage & vitrification",
    accroche: "Un parquet ancien retrouve son éclat d'origine.",
    description:
      "Ponçage sans poussière grâce à un système d'aspiration intégré, puis finition au choix : vitrificateur mat, satiné ou brillant, huile dure ou cire. Votre vieux parquet redevient la plus belle pièce de la maison.",
    points: [
      "Ponceuse à aspiration intégrée : quasiment zéro poussière",
      "Rebouchage des fentes et des trous de clous",
      "Finition vitrifiée, huilée ou cirée",
      "Teinte sur mesure possible",
    ],
    icon: "sander",
  },
  {
    slug: "renovation-reparation",
    titre: "Rénovation & réparation",
    accroche: "Une lame abîmée ne condamne pas tout le parquet.",
    description:
      "Remplacement de lames cassées ou tachées, reprise après dégât des eaux, traitement des grincements, rebouchage des jeux entre lames. J'interviens aussi sur les parquets anciens à clous forgés.",
    points: [
      "Remplacement de lames à l'identique",
      "Traitement des grincements et du jeu",
      "Reprise après dégât des eaux",
      "Parquets anciens et planchers de caractère",
    ],
    icon: "renovation",
  },
  {
    slug: "finitions",
    titre: "Plinthes & finitions",
    accroche: "Le détail qui fait la différence.",
    description:
      "Plinthes assorties ou peintes, barres de seuil, quarts-de-rond, nez de marche. C'est ce qui distingue un chantier bien fini d'un chantier bâclé — et c'est compris dans la pose.",
    points: [
      "Plinthes assorties au parquet ou peintes",
      "Barres de seuil et profils de finition",
      "Nez de marche et habillage de nez de dalle",
      "Ajustage au millimètre",
    ],
    icon: "skirting",
  },
];

export const etapes = [
  {
    numero: "01",
    titre: "Premier contact",
    texte:
      "Vous m'appelez ou vous remplissez le formulaire. On parle de votre projet, de la surface et de vos délais. Réponse sous 24 h ouvrées.",
  },
  {
    numero: "02",
    titre: "Visite & devis gratuit",
    texte:
      "Je viens sur place mesurer, contrôler le support et vous conseiller sur l'essence et la pose. Vous recevez un devis détaillé, sans engagement.",
  },
  {
    numero: "03",
    titre: "Le chantier",
    texte:
      "Protection des lieux, pose dans les règles de l'art, et nettoyage complet en fin de journée. Vous savez toujours où on en est.",
  },
  {
    numero: "04",
    titre: "Réception & garantie",
    texte:
      "On fait le tour ensemble. Je vous laisse les conseils d'entretien et vous êtes couvert par l'assurance décennale.",
  },
];

export const atouts = [
  {
    titre: "Devis gratuit sous 48 h",
    texte:
      "Déplacement et chiffrage offerts. Un prix clair, détaillé, sans surprise à la fin du chantier.",
  },
  {
    titre: "Artisan, pas sous-traitant",
    texte:
      "C'est moi qui viens, c'est moi qui pose. Vous avez un seul interlocuteur du premier appel à la réception.",
  },
  {
    titre: "Assurance décennale",
    texte:
      "Entreprise individuelle déclarée et assurée. Votre chantier est couvert pendant 10 ans.",
  },
  {
    titre: "Chantier propre",
    texte:
      "Ponçage sans poussière, protection des meubles et des murs, et on repart en laissant les lieux nets.",
  },
];

export const faq = [
  {
    q: "Le devis est-il vraiment gratuit ?",
    r: "Oui. Le déplacement, la prise de mesures et le devis détaillé sont offerts et sans engagement, partout dans ma zone d'intervention.",
  },
  {
    q: "Combien de temps dure un chantier ?",
    r: "Comptez environ une journée pour 20 à 30 m² de pose flottante, deux à trois jours pour une pose collée avec finitions. Pour un ponçage-vitrification, prévoyez 2 à 4 jours en comptant le séchage entre les couches.",
  },
  {
    q: "Peut-on poser du parquet sur un plancher chauffant ?",
    r: "Oui, à condition de choisir la bonne essence et la bonne épaisseur. Le contrecollé en pose collée est la solution la plus sûre. J'écarte les essences trop nerveuses comme le hêtre.",
  },
  {
    q: "Faut-il déposer l'ancien sol ?",
    r: "Pas toujours. On peut souvent poser par-dessus un carrelage sain et plan. Je contrôle la planéité et l'hygrométrie lors de la visite et je vous dis clairement ce qui est possible.",
  },
  {
    q: "Le ponçage fait-il beaucoup de poussière ?",
    r: "Je travaille avec des ponceuses à aspiration intégrée. Il reste toujours un peu de poussière fine, mais on est très loin des chantiers d'autrefois. Les meubles et les ouvertures sont protégés.",
  },
  {
    q: "Fournissez-vous le parquet ?",
    r: "Je peux vous le fournir à prix négocié chez mes fournisseurs, ou poser celui que vous avez acheté. Dans les deux cas, je vous conseille en amont pour éviter les mauvaises surprises.",
  },
  {
    q: "Intervenez-vous chez les professionnels ?",
    r: "Oui : bureaux, commerces, locations saisonnières et syndics. Je m'adapte aux contraintes d'horaires pour limiter la gêne.",
  },
  {
    q: "Jusqu'où vous déplacez-vous ?",
    r: "Je suis basé au Cailar, dans le Gard, et j'interviens jusqu'à 150 km : tout le Gard et l'Hérault, les Bouches-du-Rhône, le Vaucluse et une partie de l'Aude. Nîmes, Montpellier, Arles, Avignon, Alès, Sète ou Béziers sont dans ma zone habituelle.",
  },
];
