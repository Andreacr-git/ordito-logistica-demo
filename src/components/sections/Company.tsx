import { PhotoFigure } from "@/components/ui/PhotoFigure";
import { photos } from "@/content/photos";

export function Company() {
  return (
    <section id="azienda" tabIndex={-1} aria-labelledby="azienda-title" className="section bg-white">
      <div className="container-x company">
        <div className="company__text">
          <h2 id="azienda-title" className="t-h2 max-w-[17ch]">
            La struttura che regge il movimento delle merci.
          </h2>
          <p className="t-lead mt-8">
            Ordito progetta e gestisce la logistica di aziende che producono, vendono e distribuiscono in Italia.
            Trasporti, magazzino e consegne rispondono a un unico referente e seguono le stesse regole.
          </p>

          <div className="company__columns">
            <p>
              Il nome viene dalla tessitura. L’ordito è l’insieme dei fili tesi sul telaio: la parte che dà forma e
              resistenza al tessuto. Nel nostro lavoro corrisponde a ciò che si vede poco ma decide tutto:
              pianificazione, procedure, controlli.
            </p>
            <p>
              Lavoriamo con imprese che vogliono occuparsi del proprio prodotto, non di camion e scaffali. Non siamo un
              corriere espresso né una piattaforma di spedizioni: costruiamo servizi continuativi, misurati sui volumi
              e sui tempi di ogni cliente.
            </p>
          </div>

          <p className="concept-note">
            <span className="concept-note__tag">Concept</span>
            Ordito è un’azienda immaginaria, creata per questo progetto dimostrativo. Servizi, metodo e testi descrivono
            un modello plausibile, non un’attività reale.
          </p>
        </div>

        <PhotoFigure
          className="company__photo"
          photo={photos.road}
          aspectClassName="aspect-[4/3] lg:aspect-[4/5]"
          sizes="(min-width: 1024px) 36vw, 100vw"
          caption="Trasporto su gomma"
        />
      </div>
    </section>
  );
}
