import type { Metadata } from "next";
import { services, etapes } from "@/lib/services";
import { site } from "@/lib/site";
import { CtaBand } from "@/components/CtaBand";
import { WoodPanel } from "@/components/WoodPanel";
import { serviceIcons, CheckIcon } from "@/components/Icons";
import { Container, Eyebrow, SectionHeading } from "@/components/Ui";

export const metadata: Metadata = {
  title: "Prestations — pose, ponçage et rénovation de parquet",
  description: `Pose de parquet massif, contrecollé et stratifié, ponçage, vitrification et rénovation. ${site.name}, parqueteur ${site.villeA}.`,
};

export default function Prestations() {
  return (
    <>
      <section className="border-b border-clay/70 bg-sand/40 py-16 sm:py-20">
        <Container>
          <Eyebrow>Prestations</Eyebrow>
          <h1 className="mt-6 max-w-3xl font-display text-[2.4rem] leading-[1.1] font-semibold tracking-tight text-balance text-ink sm:text-5xl">
            Le sol en bois, de la préparation du support à la dernière plinthe
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-ink-soft">
            Chaque chantier commence par le même réflexe : contrôler le support.
            L&apos;hygrométrie, la planéité et la nature du sol décident du type
            de pose. C&apos;est cette étape, invisible une fois le parquet posé,
            qui fait qu&apos;un sol tient trente ans ou trois hivers.
          </p>
        </Container>
      </section>

      {/* Détail des prestations */}
      <div className="divide-y divide-clay/70">
        {services.map((s, i) => {
          const Icon = serviceIcons[s.icon];
          const inverse = i % 2 === 1;

          return (
            <section key={s.slug} id={s.slug} className="scroll-mt-24 py-16 sm:py-20">
              <Container>
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                  <div className={inverse ? "lg:order-2" : ""}>
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sand text-oak-dark">
                      <Icon className="h-7 w-7" />
                    </span>

                    <h2 className="mt-7 font-display text-2xl font-semibold text-balance text-ink sm:text-3xl">
                      {s.titre}
                    </h2>
                    <p className="mt-3 text-[1.02rem] font-medium text-oak-dark">
                      {s.accroche}
                    </p>
                    <p className="mt-5 text-[1rem] leading-relaxed text-pretty text-ink-soft">
                      {s.description}
                    </p>

                    <ul className="mt-8 space-y-3.5">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-start gap-3">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-oak/15 text-oak-dark">
                            <CheckIcon className="h-3 w-3" />
                          </span>
                          <span className="text-[0.96rem] leading-relaxed text-ink-soft">
                            {p}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={inverse ? "lg:order-1" : ""}>
                    <div className="overflow-hidden rounded-[1.5rem] shadow-[0_32px_64px_-45px_rgba(27,22,19,0.55)]">
                      <WoodPanel
                        ton={([1, 3, 5, 2, 4, 0] as const)[i % 6]}
                        seed={100 + i * 27}
                        sens={i % 3 === 0 ? "chevron" : "horizontal"}
                        className="aspect-[4/3] w-full"
                      />
                    </div>
                  </div>
                </div>
              </Container>
            </section>
          );
        })}
      </div>

      {/* Déroulé */}
      <section className="border-t border-clay/70 bg-sand/40 py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Déroulé type"
            titre="Ce qui se passe entre votre appel et le premier pas sur le parquet"
            align="center"
          />

          <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {etapes.map((e) => (
              <li
                key={e.numero}
                className="rounded-2xl border border-clay/80 bg-cream p-7"
              >
                <span className="font-display text-2xl font-semibold text-oak">
                  {e.numero}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                  {e.titre}
                </h3>
                <p className="mt-2.5 text-[0.92rem] leading-relaxed text-ink-soft">
                  {e.texte}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <CtaBand
        titre="Vous hésitez sur le type de pose ?"
        texte="Collée, clouée, flottante, sur plancher chauffant ou sur ancien carrelage : dites-moi ce que vous avez, je vous dis ce qui est possible et à quel prix."
      />
    </>
  );
}
