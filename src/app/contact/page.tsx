import type { Metadata } from "next";
import { site } from "@/lib/site";
import { ContactForm } from "@/components/ContactForm";
import { Faq } from "@/components/Faq";
import { faq } from "@/lib/services";
import {
  ClockIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
} from "@/components/Icons";
import { Container, Eyebrow, SectionHeading } from "@/components/Ui";

export const metadata: Metadata = {
  title: "Contact & devis gratuit",
  description: `Demandez votre devis gratuit à ${site.name}, parqueteur ${site.villeA}. Réponse sous 24 h ouvrées, déplacement offert ${site.zone}.`,
};

const coordonnees = [
  {
    icon: PhoneIcon,
    label: "Téléphone",
    valeur: site.phone,
    href: `tel:${site.phoneHref}`,
    aide: "Le plus rapide. Je décroche entre deux chantiers.",
  },
  {
    icon: MailIcon,
    label: "E-mail",
    valeur: site.email,
    href: `mailto:${site.email}`,
    aide: "Joignez des photos de votre sol, ça aide beaucoup.",
  },
  {
    icon: PinIcon,
    label: "Zone d'intervention",
    valeur: `${site.address.city}, déplacement ${site.zone}`,
    aide: "Déplacement gratuit pour l'établissement du devis.",
  },
  {
    icon: ClockIcon,
    label: "Disponibilités",
    valeur: site.horaires,
    aide: "Interventions en soirée possibles pour les commerces.",
  },
];

export default function Contact() {
  return (
    <>
      <section className="border-b border-clay/70 bg-sand/40 py-16 sm:py-20">
        <Container>
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-6 max-w-3xl font-display text-[2.4rem] leading-[1.1] font-semibold tracking-tight text-balance text-ink sm:text-5xl">
            Parlons de votre parquet
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-ink-soft">
            Décrivez-moi votre projet en quelques lignes. Je vous rappelle sous
            24 h ouvrées pour affiner et convenir d&apos;une visite. Le
            déplacement et le devis sont gratuits, sans engagement.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
            {/* Coordonnées */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-ink">
                Directement, sans formulaire
              </h2>

              <ul className="mt-8 space-y-7">
                {coordonnees.map((c) => {
                  const Icon = c.icon;
                  const contenu = (
                    <>
                      <span className="block text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-ink-faint">
                        {c.label}
                      </span>
                      <span className="mt-1.5 block font-display text-[1.12rem] font-semibold text-ink">
                        {c.valeur}
                      </span>
                      <span className="mt-1 block text-[0.88rem] leading-relaxed text-ink-soft">
                        {c.aide}
                      </span>
                    </>
                  );

                  return (
                    <li key={c.label} className="flex gap-4">
                      <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sand text-oak-dark">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div className="min-w-0">
                        {c.href ? (
                          <a
                            href={c.href}
                            className="block break-words transition-colors hover:text-oak-dark"
                          >
                            {contenu}
                          </a>
                        ) : (
                          <div className="break-words">{contenu}</div>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-10 rounded-2xl border border-clay/80 bg-sand/50 p-6">
                <h3 className="font-display text-[1.05rem] font-semibold text-ink">
                  Pour un devis précis du premier coup
                </h3>
                <ul className="mt-4 space-y-2.5 text-[0.92rem] leading-relaxed text-ink-soft">
                  <li>· La surface approximative en m²</li>
                  <li>· La nature du sol actuel (carrelage, dalle, ancien parquet…)</li>
                  <li>· S&apos;il y a un plancher chauffant</li>
                  <li>· Quelques photos, même prises au téléphone</li>
                </ul>
              </div>
            </div>

            {/* Formulaire */}
            <div className="rounded-[1.5rem] border border-clay/80 bg-white/60 p-7 sm:p-9">
              <h2 className="font-display text-2xl font-semibold text-ink">
                Demander un devis gratuit
              </h2>
              <p className="mt-2 text-[0.93rem] text-ink-soft">
                Les champs marqués d&apos;une <span className="text-oak-dark">*</span>{" "}
                sont obligatoires.
              </p>

              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-clay/70 bg-sand/40 py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Avant de m'écrire"
            titre="Vous trouverez peut-être déjà la réponse ici"
            align="center"
          />
          <div className="mx-auto mt-12 max-w-3xl">
            <Faq items={faq.slice(0, 5)} />
          </div>
        </Container>
      </section>
    </>
  );
}
