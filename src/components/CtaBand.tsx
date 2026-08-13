import { site } from "@/lib/site";
import { PhoneIcon } from "@/components/Icons";
import { ButtonAnchor, ButtonLink, Container, Eyebrow } from "@/components/Ui";
import { WoodPanel } from "@/components/WoodPanel";

export function CtaBand({
  titre = "Un projet de parquet ? Parlons-en.",
  texte = "Déplacement, prise de mesures et devis détaillé : c'est gratuit et sans engagement. Vous savez exactement ce que vous payez avant que le premier outil ne sorte du camion.",
}: {
  titre?: string;
  texte?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div aria-hidden className="absolute inset-0 opacity-[0.14]">
        <WoodPanel ton={5} seed={91} className="h-full w-full" />
      </div>
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-ink via-ink/95 to-ink/70"
      />

      <Container className="relative py-20 sm:py-24">
        <div className="max-w-2xl">
          <Eyebrow tone="light">Devis gratuit</Eyebrow>
          <h2 className="mt-5 font-display text-3xl leading-[1.15] font-semibold text-balance text-cream sm:text-[2.6rem]">
            {titre}
          </h2>
          <p className="mt-5 text-[1.02rem] leading-relaxed text-pretty text-cream/70">
            {texte}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonAnchor href={`tel:${site.phoneHref}`} variant="clair">
              <PhoneIcon className="h-4.5 w-4.5" />
              {site.phone}
            </ButtonAnchor>
            <ButtonLink href="/contact" variant="contourClair">
              Demander un devis en ligne
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
