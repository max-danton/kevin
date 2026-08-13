import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.metier} ${site.villeA}`,
    template: `%s | ${site.name}`,
  },
  description: `Parqueteur professionnel ${site.villeA} (${site.address.region}). Pose et rénovation de tout type de parquet : massif, contrecollé, stratifié, ponçage et vitrification. Devis gratuit, déplacement ${site.zone}.`,
  keywords: [
    "parqueteur",
    "poseur de parquet",
    "pose parquet",
    "ponçage parquet",
    "vitrification parquet",
    "parquet massif",
    "rénovation parquet",
    "artisan parquet",
    ...site.villes.map((v) => `parqueteur ${v}`),
  ],
  authors: [{ name: site.legalName }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.metier} ${site.villeA}`,
    description: `Pose et rénovation de tout type de parquet ${site.villeA} et ${site.zone} : Nîmes, Montpellier, Arles, Avignon. Devis gratuit.`,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#1b1613",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: site.legalName,
  alternateName: site.name,
  description:
    "Parqueteur professionnel : pose et rénovation de tout type de parquet — massif, contrecollé, stratifié — ponçage et vitrification.",
  url: site.url,
  telephone: site.phoneHref,
  email: site.email,
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    postalCode: site.address.postalCode,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    addressCountry: site.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.geo.lat,
    longitude: site.geo.lng,
  },
  // Zone d'intervention : le rayon réel + les villes principales, pour que
  // Google comprenne qu'il s'agit d'un artisan mobile et pas d'une boutique.
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    geoRadius: site.rayonKm * 1000,
  },
  areaServed: site.villes.map((v) => ({ "@type": "City", name: v })),
  openingHours: "Mo-Fr 08:00-18:00",
  knowsAbout: [
    "Pose de parquet massif",
    "Pose de parquet contrecollé",
    "Pose de parquet stratifié",
    "Ponçage et vitrification",
    "Rénovation de parquet ancien",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream">
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-cream"
        >
          Aller au contenu
        </a>
        <Header />
        <main id="contenu" className="flex-1">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
