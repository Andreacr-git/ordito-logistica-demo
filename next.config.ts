import type { NextConfig } from "next";

/**
 * Export completamente statico: `next build` genera la cartella `out/`,
 * pubblicata da Netlify come sito statico (nessuna funzione server).
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // Lo static export non include l'ottimizzazione immagini di Next.js:
    // il loader delega ridimensionamento e conversione AVIF/WebP alla CDN di Unsplash.
    loader: "custom",
    loaderFile: "./src/lib/unsplash-loader.ts",
    qualities: [60, 70],
  },
};

export default nextConfig;
