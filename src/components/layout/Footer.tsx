import Link from "next/link";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { Logo } from "@/components/ui/Logo";
import { services } from "@/content/services";
import { contactNavItem, mainNav, site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();
  const { author } = site;

  return (
    <footer className="site-footer on-dark">
      <div className="container-x site-footer__inner">
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <Logo href="/" />
            <p className="site-footer__intro">
              Trasporti nazionali, logistica integrata e distribuzione per le imprese. Un’azienda di fantasia,
              progettata per presentare un sito corporate.
            </p>
          </div>

          <nav aria-label="Piè di pagina" className="site-footer__nav">
            <div>
              <h2 className="site-footer__heading">Esplora</h2>
              <ul className="site-footer__list">
                {[...mainNav, contactNavItem].map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="site-footer__link">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="site-footer__heading">Servizi</h2>
              <ul className="site-footer__list">
                {services.map((service) => (
                  <li key={service.id}>
                    <a href={`/#${service.id}`} className="site-footer__link">
                      {service.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="site-footer__heading">Informazioni</h2>
              <ul className="site-footer__list">
                <li>
                  <Link href="/note-legali/" className="site-footer__link">
                    Note legali e privacy
                  </Link>
                </li>
                <li>
                  <Link href="/note-legali/#crediti" className="site-footer__link">
                    Crediti fotografici
                  </Link>
                </li>
                {author.url ? (
                  <li>
                    <ExternalLink href={author.url} className="site-footer__link">
                      {author.name ? `Portfolio di ${author.name}` : "Portfolio dell’autore"}
                    </ExternalLink>
                  </li>
                ) : null}
              </ul>
            </div>
          </nav>
        </div>

        <div className="site-footer__bottom">
          <p>
            © {year} {author.name || "Concept dimostrativo"}. Ordito è un nome di fantasia: l’azienda e i suoi servizi
            non esistono.
          </p>
          <p>Nessun cookie, nessuno strumento di tracciamento.</p>
          <a href="#top" className="site-footer__link">
            Torna all’inizio
          </a>
        </div>
      </div>
    </footer>
  );
}
