import Link from "next/link";
import type { Service } from "@/lib/services";
import { serviceIcons, ArrowIcon } from "@/components/Icons";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = serviceIcons[service.icon];

  return (
    <Link
      href={`/prestations#${service.slug}`}
      className="group relative flex flex-col rounded-2xl border border-clay/80 bg-white/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-oak/60 hover:bg-white hover:shadow-[0_22px_50px_-30px_rgba(107,74,42,0.55)]"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sand text-oak-dark transition-colors group-hover:bg-oak group-hover:text-white">
        <Icon className="h-6 w-6" />
      </span>

      <h3 className="mt-6 font-display text-xl font-semibold text-ink">
        {service.titre}
      </h3>
      <p className="mt-2.5 text-[0.93rem] font-medium text-oak-dark">
        {service.accroche}
      </p>
      <p className="mt-4 flex-1 text-[0.94rem] leading-relaxed text-ink-soft">
        {service.description}
      </p>

      <span className="mt-6 inline-flex items-center gap-2 text-[0.88rem] font-semibold text-ink transition-colors group-hover:text-oak-dark">
        En savoir plus
        <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
