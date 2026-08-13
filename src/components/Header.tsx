"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { CloseIcon, MenuIcon, PhoneIcon } from "@/components/Icons";
import { Container } from "@/components/Ui";

const liens = [
  { href: "/", label: "Accueil" },
  { href: "/prestations", label: "Prestations" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [ouvert, setOuvert] = useState(false);
  const [compact, setCompact] = useState(false);
  const [cheminPrecedent, setCheminPrecedent] = useState(pathname);

  // On referme le menu dès que la route change (y compris via le bouton
  // « précédent » du navigateur), en ajustant l'état pendant le rendu.
  if (cheminPrecedent !== pathname) {
    setCheminPrecedent(pathname);
    setOuvert(false);
  }

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = ouvert ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [ouvert]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        compact
          ? "border-b border-clay/70 bg-cream/90 backdrop-blur-md"
          : "border-b border-transparent bg-cream"
      }`}
    >
      <Container>
        <div className="flex h-[4.75rem] items-center justify-between gap-6">
          <Link
            href="/"
            className="group flex items-center gap-3"
            aria-label={`${site.name} — accueil`}
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ink font-display text-[0.95rem] font-semibold tracking-tight text-oak transition-colors group-hover:bg-walnut">
              KD
            </span>
            <span className="leading-tight">
              <span className="block font-display text-[1.05rem] font-semibold tracking-tight text-ink">
                Kevin Ducroux
              </span>
              <span className="block text-[0.68rem] font-medium uppercase tracking-[0.2em] text-ink-faint">
                Services · Parquet
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {liens.map((l) => {
              const actif =
                l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={actif ? "page" : undefined}
                  className={`relative rounded-full px-4 py-2 text-[0.92rem] font-medium transition-colors ${
                    actif
                      ? "text-oak-dark"
                      : "text-ink-soft hover:text-ink"
                  }`}
                >
                  {l.label}
                  {actif && (
                    <span
                      aria-hidden
                      className="absolute inset-x-4 -bottom-0.5 h-px bg-oak"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${site.phoneHref}`}
              className="hidden items-center gap-2.5 rounded-full bg-ink px-5 py-3 text-[0.9rem] font-semibold text-cream transition-colors hover:bg-walnut sm:inline-flex"
            >
              <PhoneIcon className="h-4 w-4" />
              {site.phone}
            </a>

            <button
              type="button"
              onClick={() => setOuvert((v) => !v)}
              aria-expanded={ouvert}
              aria-controls="menu-mobile"
              aria-label={ouvert ? "Fermer le menu" : "Ouvrir le menu"}
              className="rounded-lg p-2.5 text-ink transition-colors hover:bg-sand lg:hidden"
            >
              {ouvert ? (
                <CloseIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Menu mobile */}
      <div
        id="menu-mobile"
        hidden={!ouvert}
        className="border-t border-clay/70 bg-cream lg:hidden"
      >
        <Container className="py-4">
          <nav className="flex flex-col">
            {liens.map((l) => {
              const actif =
                l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={actif ? "page" : undefined}
                  className={`border-b border-clay/50 py-4 font-display text-lg font-medium ${
                    actif ? "text-oak-dark" : "text-ink"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>
          <a
            href={`tel:${site.phoneHref}`}
            className="mt-5 flex items-center justify-center gap-2.5 rounded-full bg-ink px-6 py-3.5 font-semibold text-cream"
          >
            <PhoneIcon className="h-4.5 w-4.5" />
            {site.phone}
          </a>
        </Container>
      </div>
    </header>
  );
}
