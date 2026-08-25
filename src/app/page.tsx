import Link from "next/link";
import { site } from "@/lib/site";
import { atouts, etapes, services } from "@/lib/services";
import { realisations, temoignages } from "@/lib/realisations";
import { listerChantiers } from "@/lib/galerie";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { ParquetScene } from "@/components/ParquetScene";
import { PhotoChantier } from "@/components/PhotoChantier";
import { ServiceCard } from "@/components/ServiceCard";
import { WoodPanel } from "@/components/WoodPanel";
import {
  ArrowIcon,
  CheckIcon,
  PhoneIcon,
  PinIcon,
  QuoteIcon,
} from "@/components/Icons";
import {
  ButtonAnchor,
  ButtonLink,
  Container,
  Eyebrow,
  SectionHeading,
} from "@/components/Ui";

const chiffres = [
  { valeur: `${site.rayonKm} km`, label: "rayon d'intervention" },
  { valeur: "Rapide", label: "réponse pour votre devis" },
  { valeur: "Décennale", label: "garantie sur les travaux" },
];

export default function Accueil() {
  const photos = listerChantiers().slice(0, 3);
  const demo = photos.length === 0 && site.afficherContenuDemo;

  return (
    <>
      {/* ───────────────────────── Hero ───────────────────────── */}
      <section className="relative overflow-hidden bg-cream">
        <ParquetScene className="pointer-events-none absolute inset-0 opacity-[0.32]" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cream via-cream/50 to-cream"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-sand/70 blur-3xl"
        />
        <Container className="relative py-16 sm:py-24 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
            <div className="animate-rise">
              <Eyebrow>{site.metier}</Eyebrow>

              <h1 className="mt-6 font-display text-[2.6rem] leading-[1.05] font-semibold tracking-tight text-balance text-ink sm:text-6xl">
                Le beau parquet,{" "}
                <span className="text-oak-dark">posé comme il faut.</span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-relaxed text-pretty text-ink-soft">
                Pose et rénovation de tout type de parquet — massif,
                contrecollé, stratifié. Un seul artisan du devis à la dernière
                plinthe, basé au Cailar et mobile {site.zone}.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <ButtonLink href="/contact">
                  Devis gratuit, réponse rapide
                  <ArrowIcon className="h-4 w-4" />
                </ButtonLink>
                <ButtonAnchor href={`tel:${site.phoneHref}`} variant="secondaire">
                  <PhoneIcon className="h-4.5 w-4.5" />
                  {site.phone}
                </ButtonAnchor>
              </div>

              <ul className="mt-11 flex flex-wrap gap-x-7 gap-y-3">
                {[
                  "Devis gratuit",
                  "Assurance décennale",
                  "Chantier propre",
                  "Prix fermes",
                ].map((t) => (
                  <li
                    key={t}
                    className="flex items-center gap-2 text-[0.9rem] font-medium text-ink-soft"
                  >
                    <CheckIcon className="h-4 w-4 text-oak-dark" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* Visuel */}
            <div className="relative">
              <div className="overflow-hidden rounded-[1.75rem] shadow-[0_40px_80px_-45px_rgba(27,22,19,0.65)]">
                <WoodPanel
                  ton={2}
                  seed={12}
                  sens="chevron"
                  className="aspect-[4/5] w-full sm:aspect-[5/4] lg:aspect-[4/5]"
                />
              </div>

              <div className="absolute -bottom-6 -left-4 max-w-[15rem] rounded-2xl border border-clay bg-cream p-5 shadow-[0_24px_50px_-30px_rgba(27,22,19,0.6)] sm:left-6">
                <p className="font-display text-3xl font-semibold text-ink">
                  {site.rayonKm} km
                </p>
                <p className="mt-1 text-[0.86rem] leading-snug text-ink-soft">
                  autour {site.villeDu} : Nîmes, Montpellier, Arles, Avignon
                  et au-delà.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ───────────────────── Bandeau chiffres ───────────────────── */}
      <section className="border-y border-clay/70 bg-sand/50">
        <Container>
          <dl className="grid grid-cols-1 divide-y divide-clay/70 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {chiffres.map((c) => (
              <div key={c.label} className="px-2 py-8 text-center sm:py-10">
                <dt className="sr-only">{c.label}</dt>
                <dd>
                  <span className="block font-display text-3xl font-semibold text-oak-dark sm:text-4xl">
                    {c.valeur}
                  </span>
                  <span className="mt-2 block text-[0.84rem] font-medium uppercase tracking-[0.12em] text-ink-faint">
                    {c.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* ───────────────────────── Prestations ───────────────────────── */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Prestations"
              titre="Tout ce qui touche au sol en bois"
              intro="Du parquet neuf posé au millimètre à la remise à neuf d'un plancher centenaire, je m'occupe de l'ensemble : préparation du support, pose, finitions et nettoyage."
            />
            <ButtonLink href="/prestations" variant="secondaire">
              Voir le détail
              <ArrowIcon className="h-4 w-4" />
            </ButtonLink>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </Container>
      </section>

      {/* ───────────────────── Pourquoi Kevin ───────────────────── */}
      <section className="bg-sand/40 py-20 sm:py-28">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <div className="relative order-2 lg:order-1">
              <div className="overflow-hidden rounded-[1.5rem] shadow-[0_36px_70px_-45px_rgba(27,22,19,0.6)]">
                <WoodPanel ton={4} seed={33} className="aspect-[5/4] w-full" />
              </div>
              <div className="absolute -right-3 -top-6 hidden rounded-2xl bg-ink px-6 py-5 text-cream shadow-xl sm:block">
                <p className="font-display text-[0.95rem] font-semibold">
                  Un seul interlocuteur
                </p>
                <p className="mt-1 text-[0.82rem] text-cream/60">
                  du devis à la réception
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <SectionHeading
                eyebrow="Pourquoi me confier votre sol"
                titre="Un artisan, pas une chaîne de sous-traitance"
                intro="Kevin Ducroux Services, c'est une entreprise individuelle. Celui qui vous conseille au téléphone est celui qui pose vos lames. Pas d'intermédiaire, pas de devis qui gonfle en cours de route."
              />

              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {atouts.map((a) => (
                  <div key={a.titre}>
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-oak/15 text-oak-dark">
                        <CheckIcon className="h-3.5 w-3.5" />
                      </span>
                      <h3 className="font-display text-[1.02rem] font-semibold text-ink">
                        {a.titre}
                      </h3>
                    </div>
                    <p className="mt-2.5 text-[0.92rem] leading-relaxed text-ink-soft">
                      {a.texte}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ───────────────────────── Réalisations ───────────────────────── */}
      {(photos.length > 0 || demo) && (
        <section className="py-20 sm:py-28">
          <Container>
            <SectionHeading
              eyebrow="Réalisations"
              titre="Quelques chantiers récents"
              intro="Chaque sol a son histoire, son support et ses contraintes. Voici comment ça se traduit dans la vraie vie."
            />

            <div className="mt-14 grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {photos.map((p, i) => (
                <PhotoChantier key={p.fichier} photo={p} priorite={i === 0} />
              ))}

              {demo &&
                realisations.slice(0, 3).map((r, i) => (
                  <article
                    key={r.titre}
                    className="group overflow-hidden rounded-2xl border border-clay/80 bg-white/60"
                  >
                    <div className="overflow-hidden">
                      <WoodPanel
                        ton={r.ton}
                        seed={40 + i * 13}
                        className="aspect-[4/3] w-full transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-oak-dark">
                        {r.type} · {r.surface}
                      </p>
                      <h3 className="mt-3 font-display text-lg font-semibold text-ink">
                        {r.titre}
                      </h3>
                      <p className="mt-2 text-[0.92rem] leading-relaxed text-ink-soft">
                        {r.texte}
                      </p>
                    </div>
                  </article>
                ))}
            </div>

            <div className="mt-12 text-center">
              <ButtonLink href="/realisations" variant="secondaire">
                Voir toutes les réalisations
                <ArrowIcon className="h-4 w-4" />
              </ButtonLink>
            </div>
          </Container>
        </section>
      )}

      {/* ───────────────────────── Processus ───────────────────────── */}
      <section className="bg-sand/40 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Comment ça se passe"
            titre="Quatre étapes, aucune mauvaise surprise"
            intro="Vous savez dès le premier appel ce qui va se passer, quand, et pour quel prix."
            align="center"
          />

          <ol className="mt-16 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {etapes.map((e, i) => (
              <li key={e.numero} className="relative">
                {i < etapes.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute left-14 right-0 top-6 hidden h-px bg-clay lg:block"
                  />
                )}
                <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-ink font-display text-[0.9rem] font-semibold text-oak">
                  {e.numero}
                </span>
                <h3 className="mt-6 font-display text-lg font-semibold text-ink">
                  {e.titre}
                </h3>
                <p className="mt-2.5 pr-4 text-[0.93rem] leading-relaxed text-ink-soft">
                  {e.texte}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* ───────────────────────── Témoignages ───────────────────────── */}
      {site.afficherContenuDemo && temoignages.length > 0 && (
        <section className="py-20 sm:py-28">
          <Container>
            <SectionHeading
              eyebrow="Ils ont fait appel à moi"
              titre="Ce qu'en disent mes clients"
              align="center"
            />

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {temoignages.map((t) => (
                <figure
                  key={t.auteur}
                  className="flex flex-col rounded-2xl border border-clay/80 bg-white/60 p-7"
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

      {/* ───────────────────── Zone d'intervention ───────────────────── */}
      <section className="border-y border-clay/70 bg-sand/50 py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-[1fr_1.3fr] md:items-center">
            <div>
              <Eyebrow>Zone d&apos;intervention</Eyebrow>
              <h2 className="mt-5 font-display text-2xl font-semibold text-balance text-ink sm:text-3xl">
                J&apos;interviens {site.zone} autour {site.villeDu}
              </h2>
              <p className="mt-4 text-[0.96rem] leading-relaxed text-ink-soft">
                Un doute sur votre commune ? Appelez-moi, on regarde ensemble.
                Le déplacement pour le devis reste gratuit.
              </p>
            </div>

            <ul className="flex flex-wrap gap-2.5">
              {site.villes.map((v) => (
                <li
                  key={v}
                  className="inline-flex items-center gap-2 rounded-full border border-clay bg-cream px-4 py-2 text-[0.88rem] font-medium text-ink-soft"
                >
                  <PinIcon className="h-3.5 w-3.5 text-oak-dark" />
                  {v}
                </li>
              ))}
              <li className="inline-flex items-center rounded-full bg-ink px-4 py-2 text-[0.88rem] font-medium text-cream">
                et les alentours
              </li>
            </ul>
          </div>
        </Container>
      </section>

      {/* ───────────────────────── FAQ ───────────────────────── */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <SectionHeading
                eyebrow="Questions fréquentes"
                titre="Les réponses aux questions qu'on me pose le plus"
                intro="Vous ne trouvez pas la vôtre ?"
              />
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center gap-2 font-semibold text-oak-dark underline-offset-4 hover:underline"
              >
                Posez-la moi directement
                <ArrowIcon className="h-4 w-4" />
              </Link>
            </div>
            <div>
              <Faq />
            </div>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
