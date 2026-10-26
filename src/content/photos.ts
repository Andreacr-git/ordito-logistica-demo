/**
 * Fotografie utilizzate nel sito.
 *
 * Tutte provengono da Unsplash e sono pubblicate con la Licenza Unsplash
 * (https://unsplash.com/license), che ne consente l'uso gratuito anche commerciale.
 * Sono escluse le immagini "Unsplash+", soggette a una licenza diversa.
 * L'attribuzione non è obbligatoria, ma il sito la riporta in didascalia e nei crediti.
 *
 * Prima della pubblicazione verificare a vista che le immagini non mostrino
 * marchi, loghi aziendali o persone riconoscibili (vedi README).
 */

export type Photo = {
  src: string;
  alt: string;
  author: string;
  authorUrl: string;
  pageUrl: string;
  /** Luogo indicato dall'autore sulla pagina della foto, se presente. */
  place?: string;
};

export const photos = {
  docks: {
    src: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492",
    alt: "Vista aerea di camion e semirimorchi fermi davanti alle baie di carico di un magazzino",
    author: "Marcin Jozwiak",
    authorUrl: "https://unsplash.com/@marcinjozwiak",
    pageUrl: "https://unsplash.com/photos/parked-trucks-kGoPcmpPT7c",
    place: "Jankowice, Polonia",
  },
  road: {
    src: "https://images.unsplash.com/photo-1695222833131-54ee679ae8e5",
    alt: "Autoarticolato bianco in movimento su una strada di campagna al tramonto",
    author: "Artem Balashevsky",
    authorUrl: "https://unsplash.com/@abalashevsky",
    pageUrl: "https://unsplash.com/photos/a-white-semi-truck-driving-down-a-rural-road-ZhNYKwjRMh4",
    place: "Vitebsk, Bielorussia",
  },
  racks: {
    src: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866",
    alt: "Scatole di cartone ordinate su scaffalature metalliche in un magazzino",
    author: "CHUTTERSNAP",
    authorUrl: "https://unsplash.com/@chuttersnap",
    pageUrl: "https://unsplash.com/photos/brown-cardboard-boxes-on-white-metal-rack-BNBA1h-NgdY",
  },
  yard: {
    src: "https://images.unsplash.com/photo-1565891741441-64926e441838",
    alt: "Vista aerea del piazzale di un centro logistico con mezzi pesanti alle baie di carico",
    author: "Marcin Jozwiak",
    authorUrl: "https://unsplash.com/@marcinjozwiak",
    pageUrl: "https://unsplash.com/photos/aerial-view-of-vehicles-in-parking-area-oh0DITWoHi4",
    place: "Jankowice, Polonia",
  },
} satisfies Record<string, Photo>;

export const allPhotos: Photo[] = Object.values(photos);
