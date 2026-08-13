import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({
  children,
  tone = "dark",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.22em] ${
        tone === "dark" ? "text-oak-dark" : "text-oak"
      }`}
    >
      <span
        aria-hidden
        className={`h-px w-7 ${tone === "dark" ? "bg-oak" : "bg-oak/60"}`}
      />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  titre,
  intro,
  tone = "dark",
  align = "left",
}: {
  eyebrow?: string;
  titre: ReactNode;
  intro?: ReactNode;
  tone?: "dark" | "light";
  align?: "left" | "center";
}) {
  const light = tone === "light";
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <h2
        className={`mt-5 font-display text-3xl leading-[1.15] font-semibold text-balance sm:text-4xl ${
          light ? "text-cream" : "text-ink"
        }`}
      >
        {titre}
      </h2>
      {intro && (
        <p
          className={`mt-5 text-[1.02rem] leading-relaxed text-pretty ${
            light ? "text-cream/70" : "text-ink-soft"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

type ButtonVariant = "primaire" | "secondaire" | "clair" | "contourClair";

const variants: Record<ButtonVariant, string> = {
  primaire:
    "bg-oak-dark text-cream hover:bg-walnut shadow-[0_10px_28px_-14px_rgba(107,74,42,0.9)]",
  secondaire:
    "border border-ink/20 text-ink hover:border-oak-dark hover:text-oak-dark",
  clair: "bg-cream text-ink hover:bg-sand",
  contourClair:
    "border border-cream/25 text-cream hover:border-oak hover:text-oak",
};

const buttonBase =
  "inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3.5 text-[0.93rem] font-semibold transition-colors duration-200";

export function ButtonLink({
  variant = "primaire",
  className = "",
  ...props
}: ComponentProps<typeof Link> & { variant?: ButtonVariant }) {
  return (
    <Link
      {...props}
      className={`${buttonBase} ${variants[variant]} ${className}`}
    />
  );
}

export function ButtonAnchor({
  variant = "primaire",
  className = "",
  ...props
}: ComponentProps<"a"> & { variant?: ButtonVariant }) {
  return (
    <a {...props} className={`${buttonBase} ${variants[variant]} ${className}`} />
  );
}
