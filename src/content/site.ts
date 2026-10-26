/**
 * Configurazione generale del concept.
 *
 * Prima della pubblicazione: compilare `author` con i propri dati reali
 * (vengono mostrati nel footer, nella call to action finale e nelle note legali)
 * e completare le verifiche elencate nel README.
 */

export type Author = {
  /** Nome dello sviluppatore o dello studio che pubblica il concept. Lasciare vuoto per non mostrarlo. */
  name: string;
  /** Indirizzo del portfolio (https://…). Lasciare vuoto per non mostrare alcun link. */
  url: string;
};

const author: Author = {
  name: "Andrea Cristofoli",
  url: "https://andreacristofoli.it/",
};

export const site = {
  name: "Ordito",
  /** Nome esteso, usato nei titoli delle pagine. */
  fullName: "Ordito Logistica",
  description:
    "Concept dimostrativo di sito corporate per Ordito, azienda immaginaria di logistica e trasporti per le imprese: trasporti nazionali, logistica integrata, distribuzione e soluzioni su misura.",
  author,
};

export type NavItem = {
  label: string;
  href: string;
};

/** Le ancore iniziano con "/" così funzionano anche dalle pagine interne. */
export const mainNav: NavItem[] = [
  { label: "Azienda", href: "/#azienda" },
  { label: "Servizi", href: "/#servizi" },
  { label: "Settori", href: "/#settori" },
  { label: "Metodo", href: "/#metodo" },
  { label: "Valore", href: "/#valore" },
];

export const contactNavItem: NavItem = { label: "Contatti", href: "/#contatti" };
