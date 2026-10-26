import { PhotoFigure } from "@/components/ui/PhotoFigure";
import { ServiceGlyph } from "@/components/ui/ServiceGlyph";
import { photos } from "@/content/photos";
import { services } from "@/content/services";

export function Services() {
  return (
    <section id="servizi" tabIndex={-1} aria-labelledby="servizi-title" className="section bg-nebbia">
      <div className="container-x">
        <div className="section-intro">
          <h2 id="servizi-title" className="t-h2 section-intro__title">
            Quattro servizi, un solo interlocutore.
          </h2>
          <p className="section-intro__text">
            Ogni servizio funziona anche da solo, ma rende di più insieme agli altri: quando trasporto e magazzino
            condividono pianificazione e dati, i passaggi di consegna smettono di essere un rischio.
          </p>
        </div>

        <div className="services">
          <div className="services__aside">
            <PhotoFigure
              photo={photos.racks}
              aspectClassName="aspect-[3/2] lg:aspect-[4/5]"
              sizes="(min-width: 1024px) 36vw, 100vw"
              caption="Magazzino e preparazione degli ordini"
            />
          </div>

          <ul className="services__list">
            {services.map((service) => (
              <li key={service.id} id={service.id} tabIndex={-1} className="service">
                <div className="service__head">
                  <ServiceGlyph name={service.glyph} className="service__glyph" />
                  <h3 className="t-h3">{service.title}</h3>
                </div>
                <p className="service__summary">{service.summary}</p>
                <p className="service__text">{service.description}</p>
                <p className="t-label service__label" id={`${service.id}-comprende`}>
                  Comprende
                </p>
                <ul className="service__includes" aria-labelledby={`${service.id}-comprende`}>
                  {service.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
