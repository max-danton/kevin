# Kevin Ducroux Services — site vitrine

Site vitrine de l'entreprise individuelle **KEVIN DUCROUX SERVICES**, artisan
poseur de parquet. Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4.

## Démarrer

```bash
npm install       # déjà fait
npm run dev       # http://localhost:3000
npm run build     # build de production
npm start         # servir le build
npm run lint      # vérification ESLint
```

---

## ✅ À personnaliser avant la mise en ligne

Les coordonnées réelles sont en place (Le Cailar, 07 69 06 98 83,
kevinducrouxservices@gmail.com, rayon de 150 km). Il reste ceci :

### 1. Les mentions légales — `src/lib/site.ts` ⚠️ obligatoire

| Champ | À remplacer par |
|---|---|
| `siret` | le numéro SIRET de l'entreprise individuelle |
| `tva` | le régime réel (franchise en base ou n° de TVA intracom.) |
| `assurance` | l'assureur et le n° de contrat décennale |
| `mediateur` | le médiateur de la consommation (obligatoire en B2C) |
| `url` | le nom de domaine, une fois acheté |
| `address.street` | l'adresse, si Kevin accepte de la publier |

### 2. Le contenu de démonstration — `afficherContenuDemo`

En haut de `src/lib/site.ts` :

```ts
afficherContenuDemo: true,   // ← passer à false avant la mise en ligne
```

Tant que ce réglage vaut `true`, le site affiche des exemples de chantiers et
**trois avis clients inventés**, uniquement pour ne pas paraître vide.

**Il faut le passer à `false` avant de publier**, ou remplacer les avis de
`src/lib/realisations.ts` par de vrais témoignages : publier de faux avis est
une pratique commerciale trompeuse au sens du Code de la consommation.

Les exemples de chantiers, eux, s'effacent tout seuls dès la première photo
déposée (voir ci-dessous).

### 3. Les prestations et la FAQ — `src/lib/services.ts`

Six prestations sont décrites : pose massif, contrecollé, stratifié, ponçage &
vitrification, rénovation, plinthes & finitions. Kevin doit les relire, retirer
ce qu'il ne fait pas et vérifier les délais annoncés (« 20 à 30 m² par jour »,
« devis sous 48 h », « réponse sous 24 h »).

### 4. Les réseaux sociaux — `site.social`

Vides pour l'instant. Une page Facebook ou Instagram de chantiers vaut
beaucoup pour un artisan : les remplir affichera les liens.

---

## 📸 Les photos de chantiers

**Kevin dépose ses photos dans `public/images/chantiers/` et c'est tout.**
Elles s'affichent automatiquement sur la page Réalisations, et les trois
premières remontent sur la page d'accueil. Aucun code à modifier.

- Formats : `.jpg` `.jpeg` `.png` `.webp` `.avif`
- L'ordre suit le nom du fichier → préfixer par `01-`, `02-`, `03-`…
- Sans légende, le nom du fichier sert de titre :
  `01-chene-massif-nimes.jpg` → « Chêne massif nimes »
- Pour de vraies légendes (titre, lieu, surface, type, description) :
  renommer `legendes.exemple.json` en `legendes.json` et le remplir.

Les instructions complètes sont dans `public/images/chantiers/LISEZ-MOI.txt`,
écrites pour quelqu'un qui ne code pas.

Tant qu'aucune photo n'est déposée, le site affiche des visuels de parquet
dessinés en SVG (`src/components/WoodPanel.tsx`) pour ne pas paraître vide.

Le dossier `public/images/` contient aussi `logo/` et `partage/` (image de
partage pour WhatsApp, Facebook, SMS). Ces deux-là demandent une ligne de code
en plus une fois les fichiers déposés.

**Après avoir ajouté des photos en ligne, il faut redéployer le site** — les
photos sont lues au moment de la construction des pages.

---

## Activer le formulaire de contact

Sans configuration, le formulaire valide la saisie puis affiche un message
invitant à appeler directement — et la demande est écrite dans les logs du
serveur. Rien n'est perdu en silence, mais aucun e-mail ne part.

Pour recevoir les demandes par e-mail :

1. créer un compte gratuit sur [resend.com](https://resend.com) (3 000 e-mails
   par mois offerts) ;
2. y vérifier le domaine du site ;
3. copier `.env.example` en `.env.local` et renseigner `RESEND_API_KEY`,
   `CONTACT_FROM` et `CONTACT_TO` ;
4. redémarrer le serveur.

Le formulaire comprend déjà une validation côté serveur, un piège à robots
(champ masqué) et une case de consentement RGPD.

---

## Mettre en ligne

Le plus simple est [Vercel](https://vercel.com), l'hébergeur de Next.js :

```bash
git init && git add . && git commit -m "Site KDS"
# créer un dépôt GitHub, y pousser, puis « Import Project » sur Vercel
```

Penser à reporter les variables d'environnement dans les réglages Vercel, et à
brancher le nom de domaine.

Après la mise en ligne : créer une **fiche Google Business Profile** pour
l'entreprise. Pour un artisan local, c'est ce qui apporte le plus d'appels — le
site sert de vitrine derrière.

---

## Structure

```
public/
└── images/
    ├── chantiers/     📸 LES PHOTOS DE CHANTIERS (galerie automatique)
    ├── logo/          le logo, s'il y en a un
    └── partage/       l'aperçu affiché quand on partage le lien

src/
├── app/
│   ├── layout.tsx              en-tête, pied de page, SEO, données structurées
│   ├── page.tsx                accueil
│   ├── prestations/page.tsx    les 6 prestations en détail
│   ├── realisations/page.tsx   galerie de chantiers + avis
│   ├── contact/
│   │   ├── page.tsx            coordonnées + formulaire
│   │   └── actions.ts          server action d'envoi (validation + Resend)
│   ├── mentions-legales/page.tsx
│   ├── not-found.tsx           page 404
│   ├── sitemap.ts / robots.ts  SEO technique
│   └── globals.css             palette et styles de base
├── components/                 Header, Footer, ContactForm, WoodPanel, Ui…
└── lib/
    ├── site.ts                 ⚠️ coordonnées, zone, mentions légales
    ├── galerie.ts              lecture du dossier public/images/chantiers
    ├── services.ts             prestations, étapes, atouts, FAQ
    ├── realisations.ts         exemples et avis de démonstration
    ├── contact-validation.ts   validation du formulaire (module pur)
    └── contact-state.ts        typage du formulaire
```

## Accessibilité et SEO

- Navigation au clavier, lien d'évitement, contrastes conformes AA.
- Respect de `prefers-reduced-motion`.
- Données structurées `HomeAndConstructionBusiness` (avec la zone de 150 km
  en `GeoCircle`) et `FAQPage`, au format Schema.org.
- `sitemap.xml` et `robots.txt` générés automatiquement.
- Aucun cookie, aucun traceur : pas de bannière de consentement nécessaire.

## Référencement local — le plus important

Le site est optimisé pour « parqueteur Le Cailar », « pose parquet Nîmes »,
« ponçage parquet Montpellier », etc. Mais pour un artisan, **la fiche Google
Business Profile rapporte plus d'appels que le site lui-même**. À créer dès la
mise en ligne, avec les mêmes coordonnées exactement (nom, téléphone, zone) —
Google recoupe les deux.
