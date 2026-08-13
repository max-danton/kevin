import Image from "next/image";
import type { Photo } from "@/lib/galerie";

export function PhotoChantier({
  photo,
  priorite = false,
}: {
  photo: Photo;
  priorite?: boolean;
}) {
  const legende = [photo.lieu, photo.surface].filter(Boolean).join(" · ");

  return (
    <figure className="group overflow-hidden rounded-2xl border border-clay/80 bg-white/60 transition-shadow duration-300 hover:shadow-[0_28px_60px_-40px_rgba(27,22,19,0.6)]">
      <div className="relative aspect-[16/11] overflow-hidden bg-sand">
        <Image
          src={photo.src}
          alt={photo.titre}
          fill
          priority={priorite}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {photo.type && (
          <span className="absolute left-4 top-4 rounded-full bg-cream/95 px-3.5 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-ink">
            {photo.type}
          </span>
        )}
      </div>

      <figcaption className="p-6">
        <h3 className="font-display text-lg font-semibold text-balance text-ink">
          {photo.titre}
        </h3>
        {legende && (
          <p className="mt-1.5 text-[0.85rem] text-ink-faint">{legende}</p>
        )}
        {photo.description && (
          <p className="mt-3 text-[0.94rem] leading-relaxed text-ink-soft">
            {photo.description}
          </p>
        )}
      </figcaption>
    </figure>
  );
}
