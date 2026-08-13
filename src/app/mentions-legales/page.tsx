import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { Container, Eyebrow } from "@/components/Ui";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: `Mentions légales et politique de confidentialité de ${site.legalName}.`,
  robots: { index: false, follow: true },
};

function Bloc({
  titre,
  children,
}: {
  titre: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-clay/70 py-9 first:border-t-0 first:pt-0">
      <h2 className="font-display text-xl font-semibold text-ink">{titre}</h2>
      <div className="mt-4 space-y-3 text-[0.96rem] leading-relaxed text-ink-soft">
        {children}
      </div>
    </section>
  );
}

export default function MentionsLegales() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>Informations légales</Eyebrow>
          <h1 className="mt-6 font-display text-[2.2rem] leading-tight font-semibold tracking-tight text-ink sm:text-4xl">
            Mentions légales
          </h1>
          <p className="mt-5 text-[1.02rem] leading-relaxed text-ink-soft">
            Dernière mise à jour : à compléter lors de la mise en ligne.
          </p>

          <div className="mt-12">
            <Bloc titre="Éditeur du site">
              <p>
                <strong className="font-semibold text-ink">
                  {site.legalName}
                </strong>
                <br />
                Entreprise individuelle — {site.metier}
                <br />
                {site.address.street && (
                  <>
                    {site.address.street}
                    <br />
                  </>
                )}
                {site.address.postalCode} {site.address.city}
              </p>
              <p>
                SIRET : {site.siret}
                <br />
                TVA : {site.tva}
                <br />
                Téléphone :{" "}
                <a
                  href={`tel:${site.phoneHref}`}
                  className="text-oak-dark underline-offset-4 hover:underline"
                >
                  {site.phone}
                </a>
                <br />
                E-mail :{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="text-oak-dark underline-offset-4 hover:underline"
                >
                  {site.email}
                </a>
              </p>
              <p>
                Directeur de la publication : Kevin Ducroux, en qualité
                d&apos;entrepreneur individuel.
              </p>
            </Bloc>

            <Bloc titre="Assurance professionnelle">
              <p>
                Assurance de responsabilité civile professionnelle et garantie
                décennale souscrites auprès de {site.assurance.nom} — contrat{" "}
                {site.assurance.contrat}.
                <br />
                Couverture géographique : {site.assurance.couverture}.
              </p>
            </Bloc>

            <Bloc titre="Hébergement">
              <p>
                Le site est hébergé par {site.hebergeur.nom},{" "}
                {site.hebergeur.adresse} —{" "}
                <a
                  href={site.hebergeur.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-oak-dark underline-offset-4 hover:underline"
                >
                  {site.hebergeur.site.replace("https://", "")}
                </a>
                .
              </p>
            </Bloc>

            <Bloc titre="Propriété intellectuelle">
              <p>
                L&apos;ensemble des contenus de ce site — textes, photographies
                de chantiers, illustrations, logo et structure — est la
                propriété de {site.legalName}, sauf mention contraire. Toute
                reproduction, même partielle, est interdite sans autorisation
                écrite préalable.
              </p>
            </Bloc>

            <Bloc titre="Données personnelles">
              <p>
                Les informations saisies dans le formulaire de contact (nom,
                téléphone, e-mail, commune, description du projet) sont
                utilisées uniquement pour répondre à votre demande et établir un
                devis. Elles ne sont ni cédées, ni vendues, ni utilisées à des
                fins publicitaires.
              </p>
              <p>
                Base légale : votre consentement, recueilli lors de l&apos;envoi
                du formulaire. Durée de conservation : 3 ans à compter du
                dernier contact.
              </p>
              <p>
                Conformément au RGPD et à la loi Informatique et Libertés, vous
                disposez d&apos;un droit d&apos;accès, de rectification,
                d&apos;effacement, de limitation et d&apos;opposition. Pour
                l&apos;exercer, écrivez à{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="text-oak-dark underline-offset-4 hover:underline"
                >
                  {site.email}
                </a>
                . Vous pouvez également introduire une réclamation auprès de la{" "}
                <a
                  href="https://www.cnil.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-oak-dark underline-offset-4 hover:underline"
                >
                  CNIL
                </a>
                .
              </p>
            </Bloc>

            <Bloc titre="Cookies">
              <p>
                Ce site ne dépose aucun cookie de mesure d&apos;audience ni de
                traceur publicitaire. Aucune bannière de consentement n&apos;est
                donc nécessaire.
              </p>
            </Bloc>

            <Bloc titre="Médiation de la consommation">
              <p>
                Conformément à l&apos;article L.612-1 du Code de la
                consommation, tout consommateur peut recourir gratuitement à un
                médiateur de la consommation en vue de la résolution amiable
                d&apos;un litige : {site.mediateur.nom} —{" "}
                <a
                  href={site.mediateur.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-oak-dark underline-offset-4 hover:underline"
                >
                  {site.mediateur.site.replace("https://", "")}
                </a>
                .
              </p>
            </Bloc>

            <Bloc titre="Droit applicable">
              <p>
                Le présent site et ses conditions d&apos;utilisation sont régis
                par le droit français. Tout litige relatif à leur interprétation
                ou à leur exécution relève des tribunaux français compétents.
              </p>
            </Bloc>
          </div>

          <div className="mt-12 rounded-2xl border border-oak/40 bg-sand/60 p-6">
            <p className="text-[0.92rem] leading-relaxed text-ink-soft">
              <strong className="font-semibold text-ink">
                À compléter avant la mise en ligne :
              </strong>{" "}
              SIRET, régime de TVA, assureur et numéro de contrat, médiateur de
              la consommation et adresse de l&apos;entreprise. Ces mentions sont
              obligatoires pour une entreprise individuelle du bâtiment. Tout se
              modifie dans le fichier{" "}
              <code className="rounded bg-cream px-1.5 py-0.5 font-mono text-[0.85em] text-ink">
                src/lib/site.ts
              </code>
              .
            </p>
          </div>

          <Link
            href="/"
            className="mt-10 inline-flex font-semibold text-oak-dark underline-offset-4 hover:underline"
          >
            ← Retour à l&apos;accueil
          </Link>
        </div>
      </Container>
    </section>
  );
}
