/**
 * Loader per next/image compatibile con l'export statico.
 *
 * Le fotografie sono servite dalla CDN di Unsplash (imgix), che ridimensiona
 * l'immagine alla larghezza richiesta e restituisce AVIF/WebP ai browser che li supportano.
 * Per qualsiasi altra sorgente l'URL viene restituito invariato.
 */
type LoaderParams = {
  src: string;
  width: number;
  quality?: number;
};

const UNSPLASH_HOST = "images.unsplash.com";

export default function unsplashLoader({ src, width, quality }: LoaderParams): string {
  if (!src.startsWith(`https://${UNSPLASH_HOST}/`)) {
    return src;
  }

  const url = new URL(src);
  url.searchParams.set("auto", "format");
  url.searchParams.set("fit", "max");
  url.searchParams.set("w", String(width));
  url.searchParams.set("q", String(quality ?? 70));
  return url.toString();
}
