import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/ButtonLink";

export const metadata: Metadata = {
  title: "Pagina non trovata",
};

export default function NotFound() {
  return (
    <section className="page-hero page-hero--full on-dark" aria-labelledby="notfound-title">
      <div className="container-x">
        <p className="t-label page-hero__label">Errore 404</p>
        <h1 id="notfound-title" className="t-h2 mt-4 max-w-[18ch]">
          Questa pagina non esiste.
        </h1>
        <p className="page-hero__text">
          L’indirizzo potrebbe essere sbagliato o la pagina potrebbe essere stata spostata. Dalla home trovate tutte le
          sezioni del sito.
        </p>
        <div className="mt-10">
          <ButtonLink href="/" variant="primary">
            Vai alla home
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
