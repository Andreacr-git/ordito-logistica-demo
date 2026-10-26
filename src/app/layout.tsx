import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { DemoBar } from "@/components/layout/DemoBar";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { site } from "@/content/site";
import { archivo, bodoni } from "./fonts";
import "./globals.css";

/**
 * Indirizzo pubblico, usato solo per risolvere l'immagine di anteprima social.
 * Su Netlify la variabile URL è fornita automaticamente durante la build.
 * Non viene impostato alcun URL canonico.
 */
const siteUrl = process.env.SITE_URL || process.env.URL || undefined;

/** Il concept è escluso dall'indicizzazione salvo scelta esplicita (vedi README). */
const allowIndexing = process.env.SITE_ALLOW_INDEXING === "true";

const defaultTitle = `${site.fullName}: trasporti e logistica per le imprese (concept)`;
const ogImage = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "Ordito, concept di sito per un’azienda di logistica immaginaria",
};

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: {
    default: defaultTitle,
    template: `%s | ${site.name} (concept)`,
  },
  description: site.description,
  applicationName: `${site.name} (concept)`,
  authors: site.author.name ? [{ name: site.author.name, url: site.author.url || undefined }] : undefined,
  robots: allowIndexing
    ? { index: true, follow: true }
    : { index: false, follow: true, googleBot: { index: false, follow: true } },
  formatDetection: { telephone: false, email: false, address: false },
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: `${site.name} (concept)`,
    title: defaultTitle,
    description: site.description,
    images: siteUrl ? [ogImage] : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: site.description,
    images: siteUrl ? [ogImage.url] : undefined,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#08121f",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="it" className={`${bodoni.variable} ${archivo.variable}`}>
      <body>
        <a href="#contenuto" className="skip-link">
          Vai al contenuto
        </a>
        <DemoBar />
        <Header />
        <main id="contenuto" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
