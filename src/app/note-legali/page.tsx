import type { Metadata } from "next";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { allPhotos } from "@/content/photos";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Note legali e privacy",
  description:
    "Natura dimostrativa del sito, dati tecnici di navigazione, assenza di cookie e strumenti di tracciamento, crediti fotografici e tipografici.",
};

export default function NoteLegaliPage() {
  const { author } = site;

  return (
    <>
      <section className="page-hero on-dark" aria-labelledby="note-title">
        <div className="container-x">
          <h1 id="note-title" className="t-h2 max-w-[18ch]">
            Note legali e privacy
          </h1>
          <p className="page-hero__text">
            Che cosa è questo sito, quali dati passano durante la navigazione e a chi si devono fotografie e caratteri
            tipografici.
          </p>
        </div>
      </section>

      <div className="container-x section legal">
        <article className="legal__body">
          <section aria-labelledby="natura">
            <h2 id="natura">Natura del sito</h2>
            <p>
              Questo sito è un concept dimostrativo, realizzato per presentare un lavoro di progettazione e sviluppo
              web. Ordito è un nome di fantasia: non corrisponde a un’azienda esistente, non offre servizi, non stipula
              contratti e non può essere contattata. Eventuali somiglianze con denominazioni o marchi esistenti sono
              involontarie.
            </p>
            <p>
              I testi descrivono un modello di servizio plausibile. Non sono riportati clienti, recensioni,
              certificazioni, sedi operative o dati aziendali.
            </p>
            {author.name ? (
              <p>
                Il concept è stato progettato e sviluppato da {author.name}
                {author.url ? (
                  <>
                    {" "}
                    (<ExternalLink href={author.url}>portfolio</ExternalLink>)
                  </>
                ) : null}
                .
              </p>
            ) : null}
          </section>

          <section aria-labelledby="dati">
            <h2 id="dati">Dati personali</h2>
            <p>
              Il sito non contiene moduli, non prevede registrazioni o aree riservate e non raccoglie direttamente dati
              personali dei visitatori.
            </p>
          </section>

          <section aria-labelledby="cookie">
            <h2 id="cookie">Cookie e tracciamento</h2>
            <p>
              Il sito non installa cookie, non salva informazioni nel browser e non utilizza strumenti di analisi
              statistica, pubblicità, profilazione o pixel di terze parti.
            </p>
          </section>

          <section aria-labelledby="tecnici">
            <h2 id="tecnici">Dati tecnici di navigazione</h2>
            <p>
              Come per qualsiasi sito web, per mostrare le pagine il browser invia ai server che ospitano i contenuti
              alcuni dati tecnici, come l’indirizzo IP, il tipo di browser e la pagina richiesta.
            </p>
            <ul>
              <li>
                <strong>Hosting.</strong> Il sito è pubblicato su Netlify, che può registrare questi dati nei log del
                servizio per finalità di sicurezza e di funzionamento. Maggiori informazioni nell’
                <ExternalLink href="https://www.netlify.com/privacy/">informativa privacy di Netlify</ExternalLink>.
              </li>
              <li>
                <strong>Fotografie.</strong> Le immagini sono caricate dalla rete di distribuzione di Unsplash
                (images.unsplash.com), che riceve i dati tecnici della richiesta. Maggiori informazioni nell’
                <ExternalLink href="https://unsplash.com/privacy">informativa privacy di Unsplash</ExternalLink>.
              </li>
              <li>
                <strong>Caratteri tipografici.</strong> Sono ospitati sullo stesso sito: non vengono effettuate
                richieste a servizi di font esterni.
              </li>
            </ul>
          </section>

          <section aria-labelledby="crediti" id="crediti-sezione">
            <h2 id="crediti" tabIndex={-1}>
              Crediti
            </h2>
            <p>
              Fotografie pubblicate su Unsplash e utilizzate secondo la{" "}
              <ExternalLink href="https://unsplash.com/license">Licenza Unsplash</ExternalLink>:
            </p>
            <ul>
              {allPhotos.map((photo) => (
                <li key={photo.src}>
                  <ExternalLink href={photo.pageUrl}>{photo.alt}</ExternalLink>, foto di{" "}
                  <ExternalLink href={photo.authorUrl}>{photo.author}</ExternalLink>
                  {photo.place ? ` (${photo.place})` : null}.
                </li>
              ))}
            </ul>
            <p>
              Caratteri tipografici: Bodoni Moda (The Bodoni Moda Project Authors) e Archivo (The Archivo Project
              Authors, Omnibus-Type), distribuiti con licenza SIL Open Font License 1.1.
            </p>
          </section>
        </article>
      </div>
    </>
  );
}
