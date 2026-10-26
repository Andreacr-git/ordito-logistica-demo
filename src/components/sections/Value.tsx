import { PhotoFigure } from "@/components/ui/PhotoFigure";
import { photos } from "@/content/photos";
import { valueRows } from "@/content/value";

export function Value() {
  return (
    <section id="valore" tabIndex={-1} aria-labelledby="valore-title" className="section bg-white">
      <div className="container-x">
        <h2 id="valore-title" className="t-h2 value__title">
          Una logistica organizzata non si nota. Si nota quando manca.
        </h2>
        <p className="value__intro">
          Organizzare non significa aggiungere burocrazia, ma rendere prevedibili consegne, spazi e spese. Ecco che
          cosa cambia, in concreto, quando ogni passaggio segue una regola chiara.
        </p>

        <PhotoFigure
          className="value__photo"
          photo={photos.yard}
          aspectClassName="aspect-[4/3] md:aspect-[21/9]"
          sizes="(min-width: 1376px) 1264px, 100vw"
          caption="Baie di carico di un centro logistico"
        />

        <div className="compare">
          <div className="compare__head" aria-hidden="true">
            <span />
            <span>Senza un metodo</span>
            <span>Con un metodo</span>
          </div>
          <dl className="compare__list">
            {valueRows.map((row) => (
              <div key={row.topic} className="compare__row">
                <dt className="compare__topic">{row.topic}</dt>
                <dd className="compare__cell compare__cell--without">
                  <span className="compare__label">Senza un metodo</span>
                  {row.without}
                </dd>
                <dd className="compare__cell compare__cell--with">
                  <span className="compare__label">Con un metodo</span>
                  {row.with}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
