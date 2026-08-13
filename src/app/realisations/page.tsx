import type { Metadata } from "next";
import { realisations, temoignages } from "@/lib/realisations";
import { listerChantiers } from "@/lib/galerie";
import { site } from "@/lib/site";
import { CtaBand } from "@/components/CtaBand";
import { PhotoChantier } from "@/components/PhotoChantier";
import { WoodPanel } from "@/components/WoodPanel";
import { PhoneIcon, QuoteIcon } from "@/components/Icons";
import {
  ButtonAnchor,
  Container,
  Eyebrow,
  SectionHeading,
} from "@/components/Ui";

export const metadata: Metadata = {
  title: "Réalisations — chantiers de parquet dans le Gard et l'Hérault",
  description: `Chantiers réalisés par ${site.name}, parqueteur au Cailar : pose de parquet massif, contrecollé et stratifié, ponçage, vitrification et rénovation.`,
};

export default function Realisations() {
  // Les photos déposées dans public/images/chantiers/ ont toujours la
  // priorité sur les exemples de démonstration.
  const photos = listerChantiers();
  const demo = photos.length === 0 && site.afficherContenuDemo;

  return (
    <>
      <section className="border-b border-clay/70 bg-sand/40 py-16 sm:py-20">
        <Container>
          <Eyebrow>Réalisations</Eyebrow>
          <h1 className="mt-6 max-w-3xl font-display text-[2.4rem] leading-[1.1] font-semibold tracking-tight text-balance text-ink sm:text-5xl">
            Des chantiers, pas des images de catalogue
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-ink-soft">
            Pose neuve, ponçage, rénovation de plancher ancien : voici le
            travail tel qu&apos;il sort du chantier, dans le Gard, l&apos;Hérault
            et tout autour.
          </p>
        </Container>
      </section>

      {photos.length > 0 && (
        <section className="py-16 sm:py-20">
          <Container>
            {/* items-start : chaque carte épouse son contenu plutôt que
                de s'étirer sur la hauteur de la plus longue du rang. */}
            <div className="grid items-start gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {photos.map((p, i) => (
                <PhotoChantier key={p.fichier} photo={p} priorite={i < 3} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {demo && (
        <section className="py-16 sm:py-20">
          <Container>
            <div className="grid gap-7 sm:grid-cols-2">
              {realisations.map((r, i) => (
                <article
                  key={r.titre}
                  className="group overflow-hidden rounded-2xl border border-clay/80 bg-white/60 transition-shadow duration-300 hover:shadow-[0_28px_60px_-40px_rgba(27,22,19,0.6)]"
                >
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <WoodPanel
                      ton={r.ton}
                      seed={200 + i * 19}
                      sens={i % 3 === 1 ? "chevron" : "horizontal"}
                      className="h-full w-full transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-cream/95 px-3.5 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-ink">
                      {r.type}
                    </span>
                  </div>

                  <div className="p-7">
                    <div className="flex items-baseline justify-between gap-4">
                      <h2 className="font-display text-xl font-semibold text-ink">
                        {r.titre}
                      </h2>
                      <span className="shrink-0 text-[0.85rem] font-semibold text-oak-dark">
                        {r.surface}
                      </span>
                    </div>
                    <p className="mt-1.5 text-[0.85rem] text-ink-faint">
                      {r.lieu}
                    </p>
                    <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-soft">
                      {r.texte}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Ni photos ni démo : on ne laisse pas un trou, on appelle à l'action */}
      {photos.length === 0 && !demo && (
        <section className="py-16 sm:py-20">
          <Container>
            <div className="mx-auto max-w-2xl rounded-[1.5rem] border border-clay/80 bg-white/60 p-9 text-center sm:p-12">
              <h2 className="font-display text-2xl font-semibold text-balance text-ink">
                Les photos de mes derniers chantiers arrivent bientôt
              </h2>
              <p className="mt-4 text-[1rem] leading-relaxed text-ink-soft">
                En attendant, appelez-moi : je vous décris volontiers des
                chantiers comparables au vôtre et je peux vous envoyer des
                photos par message.
              </p>
              <div className="mt-8 flex justify-center">
                <ButtonAnchor href={`tel:${site.phoneHref}`}>
                  <PhoneIcon className="h-4.5 w-4.5" />
                  {site.phone}
                </ButtonAnchor>
              </div>
            </div>
          </Container>
        </section>
      )}

      {site.afficherContenuDemo && temoignages.length > 0 && (
        <section className="border-t border-clay/70 bg-sand/40 py-20 sm:py-24">
          <Container>
            <SectionHeading
              eyebrow="Avis clients"
              titre="Le retour de ceux qui marchent dessus tous les jours"
              align="center"
            />

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {temoignages.map((t) => (
                <figure
                  key={t.auteur}
                  className="flex flex-col rounded-2xl border border-clay/80 bg-cream p-7"
                >
                  <QuoteIcon className="h-7 w-7 text-oak/45" />
                  <blockquote className="mt-5 flex-1 text-[0.98rem] leading-relaxed text-ink-soft">
                    {t.texte}
                  </blockquote>
                  <figcaption className="mt-6 border-t border-clay/70 pt-5">
                    <span className="block font-display text-[1rem] font-semibold text-ink">
                      {t.auteur}
                    </span>
                    <span className="mt-0.5 block text-[0.85rem] text-ink-faint">
                      {t.detail}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CtaBand
        titre="Votre chantier sera le prochain"
        texte="Envoyez-moi quelques photos de votre sol actuel et la surface approximative : je vous donne une première estimation avant même de me déplacer."
      />
    </>
  );
}
