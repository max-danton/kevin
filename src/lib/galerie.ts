/**
 * Galerie de chantiers alimentée par le dossier `public/images/chantiers/`.
 *
 * Kevin dépose ses photos dans ce dossier : elles apparaissent sur le site
 * sans toucher au code. Les légendes sont facultatives et se renseignent
 * dans `public/images/chantiers/legendes.json`.
 *
 * ⚠️ Module serveur uniquement (il lit le disque au moment du build).
 * Ne pas l'importer depuis un composant « use client ».
 */

import fs from "node:fs";
import path from "node:path";

export type Photo = {
  /** Nom du fichier, ex. « chene-massif-nimes.jpg » */
  fichier: string;
  /** Chemin public, ex. « /images/chantiers/chene-massif-nimes.jpg » */
  src: string;
  titre: string;
  lieu?: string;
  surface?: string;
  type?: string;
  description?: string;
};

type Legende = Omit<Photo, "fichier" | "src" | "titre"> & { titre?: string };

const DOSSIER = path.join(process.cwd(), "public", "images", "chantiers");
const EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".avif"];

/** « 01-chene-massif-nimes.jpg » → « Chêne massif nimes » (repli sans légende) */
function titreDepuisFichier(fichier: string) {
  const sansExt = fichier.replace(/\.[^.]+$/, "");
  const sansPrefixe = sansExt.replace(/^\d+[-_\s]*/, "");
  const mots = sansPrefixe.replace(/[-_]+/g, " ").trim();
  if (!mots) return "Chantier";
  return mots.charAt(0).toUpperCase() + mots.slice(1);
}

function lireLegendes(): Record<string, Legende> {
  const chemin = path.join(DOSSIER, "legendes.json");
  try {
    return JSON.parse(fs.readFileSync(chemin, "utf8")) as Record<string, Legende>;
  } catch {
    // Fichier absent ou JSON invalide : on se rabat sur les noms de fichiers.
    return {};
  }
}

/**
 * Liste les photos présentes, triées par nom de fichier — préfixer les
 * fichiers par « 01- », « 02- »… suffit donc à choisir l'ordre d'affichage.
 */
export function listerChantiers(): Photo[] {
  let fichiers: string[];
  try {
    fichiers = fs.readdirSync(DOSSIER);
  } catch {
    return []; // dossier absent : la galerie se masque d'elle-même
  }

  const legendes = lireLegendes();

  return fichiers
    .filter((f) => EXTENSIONS.includes(path.extname(f).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, "fr", { numeric: true }))
    .map((fichier) => {
      const l = legendes[fichier] ?? {};
      return {
        fichier,
        src: `/images/chantiers/${fichier}`,
        titre: l.titre ?? titreDepuisFichier(fichier),
        lieu: l.lieu,
        surface: l.surface,
        type: l.type,
        description: l.description,
      };
    });
}
