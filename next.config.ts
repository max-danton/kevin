import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

// Le dossier du projet contient un espace et se trouve sous OneDrive :
// on fixe explicitement la racine pour que Turbopack n'aille pas chercher
// un package-lock.json plus haut dans l'arborescence.
const racine = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: { root: racine },
};

export default nextConfig;
