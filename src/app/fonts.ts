import localFont from "next/font/local";

/**
 * Font self-hosted (SIL Open Font License, licenze in src/fonts/).
 * Nessuna richiesta a servizi esterni: i file vengono serviti dal sito stesso.
 */

/** Bodoni Moda: titoli e testi editoriali. Asse ottico (opsz) attivo automaticamente. */
export const bodoni = localFont({
  src: "../fonts/bodoni-moda-variable-latin.woff2",
  variable: "--font-bodoni",
  weight: "400 900",
  style: "normal",
  display: "swap",
  adjustFontFallback: "Times New Roman",
});

/** Archivo: testo corrente e interfaccia. Assi di peso (wght) e larghezza (wdth). */
export const archivo = localFont({
  src: "../fonts/archivo-variable-latin.woff2",
  variable: "--font-archivo",
  weight: "100 900",
  style: "normal",
  display: "swap",
  adjustFontFallback: "Arial",
  declarations: [{ prop: "font-stretch", value: "62% 125%" }],
});
