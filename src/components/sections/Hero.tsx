import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { photos } from "@/content/photos";
import { services } from "@/content/services";
import { cssVars } from "@/lib/css-vars";

const titleLines = ["Merci in movimento,", "con un ordine preciso."];

/**
 * Hero: fotografia aerea in bicromia blu notte, fili d'ordito verticali allineati
 * alle colonne dell'indice dei servizi e una trama arancione che li attraversa.
 * Unica sequenza animata della pagina (solo CSS, disattivata con "riduci movimento").
 */
export function Hero() {
  const photo = photos.docks;

  return (
    <section aria-labelledby="hero-title" className="hero on-dark">
      <div className="hero__media">
        <Image src={photo.src} alt={photo.alt} fill preload sizes="100vw" quality={60} className="hero__img" />
      </div>
      <div className="hero__shade" aria-hidden="true" />
      <div className="hero__warp" aria-hidden="true">
        <div className="container-x hero__warp-grid">
          {services.map((service, index) => (
            <span key={service.id} className="hero__warp-line" style={cssVars({ "--i": index })} />
          ))}
        </div>
      </div>

      <div className="container-x hero__body">
        <p className="hero__credit">
          Foto di <ExternalLink href={photo.pageUrl}>{photo.author}</ExternalLink>, Unsplash
        </p>

        <h1 id="hero-title" className="t-display hero__title">
          {titleLines.map((line, index) => (
            <span key={line} className="hero__line">
              <span style={cssVars({ "--i": index })}>{line}</span>
            </span>
          ))}
        </h1>

        <p className="hero__lead hero__fade" style={cssVars({ "--d": "650ms" })}>
          Ordito progetta e gestisce trasporti nazionali, magazzino e distribuzione per aziende che hanno bisogno di
          consegne puntuali e costi prevedibili.
        </p>

        <div className="hero__actions hero__fade" style={cssVars({ "--d": "800ms" })}>
          <ButtonLink href="#servizi" variant="primary">
            Scopri i servizi
          </ButtonLink>
          <ButtonLink href="#metodo" variant="outline-light">
            Come lavoriamo
          </ButtonLink>
        </div>
      </div>

      <nav aria-label="Servizi" className="hero__index">
        <span className="hero__thread" aria-hidden="true" />
        <ul className="container-x hero__index-grid">
          {services.map((service, index) => (
            <li key={service.id} className="hero__index-item" style={cssVars({ "--i": index })}>
              <a href={`#${service.id}`} className="hero__index-link">
                <span className="hero__index-title">{service.title}</span>
                <span className="hero__index-text">{service.short}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
