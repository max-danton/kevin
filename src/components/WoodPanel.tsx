/**
 * Visuel de remplacement : un panneau de parquet dessiné en SVG.
 * Sert tant qu'il n'y a pas de vraie photo de chantier. Le rendu est
 * déterministe (PRNG à graine fixe) pour éviter tout écart d'hydratation.
 */

const palettes = [
  { fond: "#f0e2cd", lame: "#e7d3b6", veine: "#cdb086", ombre: "#d6c0a0" },
  { fond: "#e8d2b0", lame: "#dcc199", veine: "#bb9764", ombre: "#c9ab7f" },
  { fond: "#d9bd93", lame: "#cba97c", veine: "#a37e4e", ombre: "#b9955f" },
  { fond: "#c19a6b", lame: "#b08655", veine: "#8a6236", ombre: "#9c7444" },
  { fond: "#9a734b", lame: "#8a6440", veine: "#66452a", ombre: "#775435" },
  { fond: "#6f5138", lame: "#61452f", veine: "#432e1e", ombre: "#523a27" },
] as const;

/** PRNG déterministe (mulberry32) */
function makeRandom(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Props = {
  ton?: 0 | 1 | 2 | 3 | 4 | 5;
  seed?: number;
  /** Orientation des lames */
  sens?: "horizontal" | "chevron";
  className?: string;
};

export function WoodPanel({
  ton = 2,
  seed = 7,
  sens = "horizontal",
  className,
}: Props) {
  const p = palettes[ton];
  const rand = makeRandom(seed * 2654435761);

  const largeur = 400;
  const hauteur = 300;
  // Lames fines et allongées : c'est ce rapport-là qui fait lire « parquet »
  // plutôt que « dalles ».
  const hauteurLame = 23;
  const rangs = Math.ceil(hauteur / hauteurLame);

  /** Arrondi à 0,1 : le rendu est identique, le HTML deux fois plus léger. */
  const r1 = (n: number) => Math.round(n * 10) / 10;

  const lames: {
    x: number;
    y: number;
    w: number;
    h: number;
    teinte: string;
    veines: number[];
    noeud: { cx: number; cy: number; r: number } | null;
  }[] = [];

  for (let r = 0; r < rangs; r++) {
    const y = r * hauteurLame;
    // Décalage des joints d'un rang à l'autre, comme en pose réelle
    let x = -((r * 97) % 150) - 20;
    while (x < largeur) {
      const w = r1(95 + rand() * 105);
      const melange = rand();
      const teinte = melange < 0.34 ? p.lame : melange < 0.7 ? p.fond : p.ombre;
      const veines = [r1(5 + rand() * (hauteurLame - 11))];
      const noeud =
        rand() > 0.88
          ? {
              cx: r1(x + 20 + rand() * (w - 40)),
              cy: r1(y + 7 + rand() * (hauteurLame - 14)),
              r: r1(1.2 + rand() * 1.6),
            }
          : null;
      lames.push({ x: r1(x), y, w, h: hauteurLame, teinte, veines, noeud });
      x += w;
    }
  }

  const gid = `wp-${ton}-${seed}`;

  return (
    <svg
      viewBox={`0 0 ${largeur} ${hauteur}`}
      preserveAspectRatio="xMidYMid slice"
      className={className}
      role="img"
      aria-label="Exemple de parquet posé"
    >
      <defs>
        <linearGradient id={`${gid}-lum`} x1="0" y1="0" x2="0.6" y2="1">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.22" />
          <stop offset="55%" stopColor="#fff" stopOpacity="0" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.2" />
        </linearGradient>
        {sens === "chevron" && (
          <clipPath id={`${gid}-clip`}>
            <rect width={largeur} height={hauteur} />
          </clipPath>
        )}
      </defs>

      <rect width={largeur} height={hauteur} fill={p.fond} />

      <g
        clipPath={sens === "chevron" ? `url(#${gid}-clip)` : undefined}
        // Rotation + agrandissement autour du centre : le facteur 1.35 garantit
        // que les lames inclinées couvrent encore les quatre coins du cadre.
        transform={
          sens === "chevron"
            ? `translate(${largeur / 2} ${hauteur / 2}) rotate(-12) scale(1.35) translate(${-largeur / 2} ${-hauteur / 2})`
            : undefined
        }
      >
        {lames.map((l, i) => (
          <g key={i}>
            <rect
              x={l.x}
              y={l.y}
              width={r1(l.w - 1)}
              height={l.h - 1}
              fill={l.teinte}
              rx="1"
            />
            {l.veines.map((vy, j) => (
              <path
                key={j}
                d={`M${r1(l.x + 4)} ${r1(l.y + vy)}q${r1(l.w * 0.3)} ${j % 2 ? -2.2 : 2.2} ${r1(l.w * 0.55)} 0t${r1(l.w * 0.4)} 0`}
                stroke={p.veine}
                strokeWidth={j % 2 ? 0.55 : 0.85}
                strokeOpacity={0.5}
                fill="none"
              />
            ))}
            {l.noeud && (
              <ellipse
                cx={l.noeud.cx}
                cy={l.noeud.cy}
                rx={l.noeud.r * 1.4}
                ry={l.noeud.r}
                fill={p.veine}
                fillOpacity={0.55}
              />
            )}
          </g>
        ))}
      </g>

      <rect
        width={largeur}
        height={hauteur}
        fill={`url(#${gid}-lum)`}
        style={{ mixBlendMode: "overlay" }}
      />
    </svg>
  );
}
