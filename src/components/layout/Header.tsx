"use client";

import { useCallback, useEffect, useRef, useState, type MouseEvent } from "react";
import { Logo } from "@/components/ui/Logo";
import { contactNavItem, mainNav } from "@/content/site";

const DESKTOP_QUERY = "(min-width: 64rem)";

/**
 * Header sticky con navigazione desktop e menu mobile.
 *
 * Il menu mobile è un <dialog> aperto con showModal(): viene mostrato nel "top layer"
 * del browser, quindi non dipende da z-index, overflow o contesti di impilamento.
 * È inoltre reso come fratello dell'<header> (non al suo interno) e l'effetto
 * backdrop-filter è applicato solo a un livello di sfondo dedicato: nessun antenato
 * del menu crea un containing block che possa limitare un elemento position: fixed.
 * Il dialog nativo gestisce focus iniziale, tasto Esc e inerzia del resto della pagina.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Sfondo dell'header visibile solo dopo un breve scorrimento.
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 24);
    };
    const onScroll = () => {
      if (frame === 0) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame !== 0) window.cancelAnimationFrame(frame);
    };
  }, []);

  // Se la finestra passa al layout desktop con il menu aperto, il menu si chiude.
  useEffect(() => {
    const media = window.matchMedia(DESKTOP_QUERY);
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) dialogRef.current?.close();
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const openMenu = useCallback(() => {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;
    dialog.showModal();
    setMenuOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  // Chiude il menu e porta alla sezione scelta, spostando anche il focus.
  const handleMenuLink = useCallback(
    (event: MouseEvent<HTMLAnchorElement>, href: string) => {
      const id = href.split("#")[1];
      const target = id ? document.getElementById(id) : null;

      if (!target) {
        // Ancora su un'altra pagina: navigazione normale.
        closeMenu();
        return;
      }

      event.preventDefault();
      closeMenu();

      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
      if (window.location.hash !== `#${id}`) {
        window.history.pushState(null, "", `#${id}`);
      }
      target.focus({ preventScroll: true });
    },
    [closeMenu],
  );

  return (
    <>
      <header className="site-header on-dark" data-scrolled={scrolled}>
        <div className="site-header__bg" aria-hidden="true" />
        <div className="container-x site-header__inner">
          <Logo href="/" />

          <nav aria-label="Principale" className="site-nav">
            <ul className="site-nav__list">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="site-nav__link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-header__actions">
            <a href={contactNavItem.href} className="btn btn--outline-light btn--compact site-header__cta">
              {contactNavItem.label}
            </a>
            <button
              type="button"
              className="menu-toggle"
              aria-haspopup="dialog"
              aria-expanded={menuOpen}
              aria-controls="menu-mobile"
              onClick={openMenu}
            >
              <span>Menu</span>
              <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true" focusable="false">
                <path d="M3 8h18M3 16h18" stroke="currentColor" strokeWidth="1.75" fill="none" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <dialog
        ref={dialogRef}
        id="menu-mobile"
        className="mobile-menu on-dark"
        aria-label="Menu di navigazione"
        onClose={() => setMenuOpen(false)}
      >
        <div className="mobile-menu__inner">
          <div className="mobile-menu__top">
            <Logo />
            <button type="button" className="menu-toggle" onClick={closeMenu}>
              <span>Chiudi</span>
              <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true" focusable="false">
                <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="1.75" fill="none" />
              </svg>
            </button>
          </div>

          <nav aria-label="Principale" className="mobile-menu__nav">
            <ul>
              {[...mainNav, contactNavItem].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="mobile-menu__link"
                    onClick={(event) => handleMenuLink(event, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <p className="mobile-menu__note">
            <span className="demo-bar__tag">Concept</span>
            Ordito è un’azienda immaginaria: questo sito è un progetto dimostrativo.
          </p>
        </div>
      </dialog>
    </>
  );
}
