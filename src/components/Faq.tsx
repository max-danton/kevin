import { faq } from "@/lib/services";
import { ChevronIcon } from "@/components/Icons";

export function Faq({ items = faq }: { items?: typeof faq }) {
  return (
    <>
      <div className="divide-y divide-clay/80 border-y border-clay/80">
        {items.map((item) => (
          <details key={item.q} className="group py-1">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left font-display text-[1.06rem] font-semibold text-ink transition-colors hover:text-oak-dark [&::-webkit-details-marker]:hidden">
              {item.q}
              <ChevronIcon className="h-5 w-5 shrink-0 text-oak-dark transition-transform duration-300 group-open:rotate-180" />
            </summary>
            <p className="pb-6 pr-10 text-[0.96rem] leading-relaxed text-ink-soft">
              {item.r}
            </p>
          </details>
        ))}
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: items.map((i) => ({
              "@type": "Question",
              name: i.q,
              acceptedAnswer: { "@type": "Answer", text: i.r },
            })),
          }),
        }}
      />
    </>
  );
}
