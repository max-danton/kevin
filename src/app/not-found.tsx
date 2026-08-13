import { site } from "@/lib/site";
import { PhoneIcon } from "@/components/Icons";
import { ButtonAnchor, ButtonLink, Container } from "@/components/Ui";

export default function NotFound() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <p className="font-display text-6xl font-semibold text-oak">404</p>
          <h1 className="mt-6 font-display text-3xl font-semibold text-balance text-ink">
            Cette lame n&apos;existe pas
          </h1>
          <p className="mt-5 text-[1.02rem] leading-relaxed text-ink-soft">
            La page que vous cherchez a été déplacée ou n&apos;a jamais existé.
            Revenez à l&apos;accueil, ou appelez-moi directement : c&apos;est
            souvent plus rapide.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/">Retour à l&apos;accueil</ButtonLink>
            <ButtonAnchor href={`tel:${site.phoneHref}`} variant="secondaire">
              <PhoneIcon className="h-4.5 w-4.5" />
              {site.phone}
            </ButtonAnchor>
          </div>
        </div>
      </Container>
    </section>
  );
}
