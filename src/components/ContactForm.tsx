"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { envoyerDemande } from "@/app/contact/actions";
import { etatInitial } from "@/lib/contact-state";
import { site } from "@/lib/site";
import { ArrowIcon, CheckIcon } from "@/components/Icons";

const champBase =
  "w-full rounded-xl border border-clay bg-cream px-4 py-3 text-[0.95rem] text-ink placeholder:text-ink-faint/70 transition-colors focus:border-oak-dark focus:outline-none";

const typesProjet = [
  "Pose de parquet neuf",
  "Ponçage / vitrification",
  "Rénovation ou réparation",
  "Escalier ou finitions",
  "Terrasse bois",
  "Je ne sais pas encore",
];

function BoutonEnvoi() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex shrink-0 items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-oak-dark px-7 py-3.5 text-[0.95rem] font-semibold text-cream shadow-[0_10px_28px_-14px_rgba(107,74,42,0.9)] transition-colors hover:bg-walnut disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? "Envoi en cours…" : "Envoyer ma demande"}
      {!pending && <ArrowIcon className="h-4 w-4" />}
    </button>
  );
}

function Erreur({ texte }: { texte?: string }) {
  if (!texte) return null;
  return (
    <p role="alert" className="mt-1.5 text-[0.83rem] font-medium text-red-700">
      {texte}
    </p>
  );
}

export function ContactForm() {
  const [etat, action] = useActionState(envoyerDemande, etatInitial);

  if (etat.statut === "succes") {
    return (
      <div className="rounded-2xl border border-oak/40 bg-sand/60 p-9 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-oak text-white">
          <CheckIcon className="h-7 w-7" />
        </span>
        <h3 className="mt-6 font-display text-2xl font-semibold text-ink">
          Merci !
        </h3>
        <p className="mx-auto mt-3 max-w-md text-[0.98rem] leading-relaxed text-ink-soft">
          {etat.message}
        </p>
        <a
          href={`tel:${site.phoneHref}`}
          className="mt-6 inline-block font-semibold text-oak-dark underline-offset-4 hover:underline"
        >
          Besoin d&apos;une réponse immédiate ? {site.phone}
        </a>
      </div>
    );
  }

  const v = etat.valeurs ?? {};
  const e = etat.erreurs ?? {};

  return (
    <form action={action} className="space-y-5" noValidate>
      {(etat.statut === "erreur" || etat.statut === "nonConfigure") &&
        etat.message && (
          <div
            role="alert"
            className={`rounded-xl border px-5 py-4 text-[0.92rem] leading-relaxed ${
              etat.statut === "nonConfigure"
                ? "border-oak/40 bg-sand/70 text-ink-soft"
                : "border-red-300 bg-red-50 text-red-800"
            }`}
          >
            {etat.message}
            {etat.statut === "nonConfigure" && (
              <a
                href={`tel:${site.phoneHref}`}
                className="ml-1 font-semibold text-oak-dark underline-offset-4 hover:underline"
              >
                {site.phone}
              </a>
            )}
          </div>
        )}

      {/* Piège à robots */}
      <div className="absolute left-[-9999px]" aria-hidden>
        <label htmlFor="societe">Ne pas remplir</label>
        <input id="societe" name="societe" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nom" className="mb-2 block text-[0.88rem] font-semibold text-ink">
            Nom et prénom <span className="text-oak-dark">*</span>
          </label>
          <input
            id="nom"
            name="nom"
            required
            autoComplete="name"
            defaultValue={v.nom}
            aria-invalid={!!e.nom}
            className={champBase}
            placeholder="Camille Rousseau"
          />
          <Erreur texte={e.nom} />
        </div>

        <div>
          <label
            htmlFor="telephone"
            className="mb-2 block text-[0.88rem] font-semibold text-ink"
          >
            Téléphone <span className="text-oak-dark">*</span>
          </label>
          <input
            id="telephone"
            name="telephone"
            type="tel"
            required
            autoComplete="tel"
            defaultValue={v.telephone}
            aria-invalid={!!e.telephone}
            className={champBase}
            placeholder="06 12 34 56 78"
          />
          <Erreur texte={e.telephone} />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-[0.88rem] font-semibold text-ink">
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            defaultValue={v.email}
            aria-invalid={!!e.email}
            className={champBase}
            placeholder="camille@exemple.fr"
          />
          <Erreur texte={e.email} />
        </div>

        <div>
          <label htmlFor="ville" className="mb-2 block text-[0.88rem] font-semibold text-ink">
            Commune du chantier
          </label>
          <input
            id="ville"
            name="ville"
            autoComplete="address-level2"
            defaultValue={v.ville}
            className={champBase}
            placeholder={site.address.city}
          />
        </div>

        <div>
          <label htmlFor="projet" className="mb-2 block text-[0.88rem] font-semibold text-ink">
            Type de projet
          </label>
          <select
            id="projet"
            name="projet"
            defaultValue={v.projet ?? ""}
            className={champBase}
          >
            <option value="">Choisir…</option>
            {typesProjet.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="surface" className="mb-2 block text-[0.88rem] font-semibold text-ink">
            Surface approximative
          </label>
          <input
            id="surface"
            name="surface"
            defaultValue={v.surface}
            className={champBase}
            placeholder="45 m²"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-[0.88rem] font-semibold text-ink">
          Votre projet <span className="text-oak-dark">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          defaultValue={v.message}
          aria-invalid={!!e.message}
          className={`${champBase} resize-y`}
          placeholder="Type de sol actuel, essence souhaitée, délais, contraintes… Tout détail m'aide à chiffrer juste."
        />
        <Erreur texte={e.message} />
      </div>

      <div>
        <label htmlFor="rgpd" className="flex items-start gap-3 text-[0.87rem] leading-relaxed text-ink-soft">
          <input
            id="rgpd"
            name="rgpd"
            type="checkbox"
            className="mt-0.5 h-4.5 w-4.5 shrink-0 rounded border-clay accent-oak-dark"
          />
          <span>
            J&apos;accepte que mes coordonnées soient utilisées pour être
            recontacté au sujet de ma demande. Elles ne sont ni revendues ni
            utilisées à d&apos;autres fins.{" "}
            <span className="text-oak-dark">*</span>
          </span>
        </label>
        <Erreur texte={e.rgpd} />
      </div>

      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <BoutonEnvoi />
        <p className="text-[0.82rem] text-ink-faint">
          Réponse sous 24 h ouvrées · Devis gratuit
        </p>
      </div>
    </form>
  );
}
