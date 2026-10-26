import { ButtonLink } from "@/components/ui/ButtonLink";
import { site } from "@/content/site";

/**
 * Call to action finale. Il concept non ha recapiti né moduli:
 * il pannello lo dichiara apertamente e offre solo collegamenti reali.
 */
export function FinalCta() {
  const { author } = site;

  return (
    <section id="contatti" tabIndex={-1} aria-labelledby="contatti-title" className="cta on-dark">
      <span className="cta__thread" aria-hidden="true" />
      <div className="container-x section cta__grid">
        <div className="cta__main">
          <h2 id="contatti-title" className="cta__title">
            Raccontateci come si muovono le vostre merci.
          </h2>
          <p className="cta__text">
            Una prima conversazione serve a capire volumi, destinazioni e punti critici. Da lì valutiamo insieme se e
            come possiamo esservi utili.
          </p>
        </div>

        <aside className="cta__panel" aria-labelledby="contatti-demo-title">
          <p className="t-label cta__panel-label">Concept dimostrativo</p>
          <h3 id="contatti-demo-title" className="t-h3">
            Recapiti non attivi
          </h3>
          <p className="cta__panel-text">
            Ordito non esiste: questo sito non raccoglie richieste e non riporta email o numeri di telefono. In un
            progetto reale, qui troverebbero posto i recapiti dell’azienda e un modulo collegato al team commerciale.
          </p>
          <div className="cta__actions">
            {author.url ? (
              <ButtonLink href={author.url} external variant="primary">
                Contatta chi ha realizzato il sito
              </ButtonLink>
            ) : null}
            <ButtonLink href="/note-legali/" variant="outline-light">
              Leggi le note legali
            </ButtonLink>
          </div>
        </aside>
      </div>
    </section>
  );
}
