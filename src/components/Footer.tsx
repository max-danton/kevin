import Link from "next/link";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { ClockIcon, MailIcon, PhoneIcon, PinIcon } from "@/components/Icons";
import { Container } from "@/components/Ui";

export function Footer() {
  const annee = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-ink text-cream/70">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-oak font-display font-semibold text-ink">
                KD
              </span>
              <span className="font-display text-lg font-semibold text-cream">
                {site.name}
              </span>
            </div>
            <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed">
              Parqueteur professionnel {site.villeA}, dans le{" "}
              {site.address.region}. Pose et rénovation de tout type de
              parquet, chez les particuliers comme chez les professionnels,{" "}
              {site.zone}.
            </p>
            <p className="mt-5 text-[0.82rem] uppercase tracking-[0.16em] text-cream/40">
              Entreprise individuelle · Assurance décennale
            </p>
          </div>

          <div>
            <h3 className="font-display text-[0.95rem] font-semibold tracking-wide text-cream">
              Prestations
            </h3>
            <ul className="mt-5 space-y-3 text-[0.93rem]">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/prestations#${s.slug}`}
                    className="transition-colors hover:text-oak"
                  >
                    {s.titre}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-[0.95rem] font-semibold tracking-wide text-cream">
              Contact
            </h3>
            <ul className="mt-5 space-y-4 text-[0.93rem]">
              <li>
                <a
                  href={`tel:${site.phoneHref}`}
                  className="flex items-start gap-3 transition-colors hover:text-oak"
                >
                  <PhoneIcon className="mt-0.5 h-4.5 w-4.5 shrink-0 text-oak" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-start gap-3 break-all transition-colors hover:text-oak"
                >
                  <MailIcon className="mt-0.5 h-4.5 w-4.5 shrink-0 text-oak" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <PinIcon className="mt-0.5 h-4.5 w-4.5 shrink-0 text-oak" />
                <span>
                  {site.address.city} ({site.address.postalCode}) — déplacement{" "}
                  {site.zone}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ClockIcon className="mt-0.5 h-4.5 w-4.5 shrink-0 text-oak" />
                <span>{site.horaires}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-cream/10 pt-7">
          <div className="flex flex-col gap-4 text-[0.85rem] text-cream/45 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {annee} {site.legalName} — Tous droits réservés.
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <Link
                href="/mentions-legales"
                className="transition-colors hover:text-oak"
              >
                Mentions légales
              </Link>
              <Link href="/contact" className="transition-colors hover:text-oak">
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
