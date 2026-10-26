export type ServiceGlyph = "route" | "warehouse" | "branch" | "weave";

export type Service = {
  id: string;
  title: string;
  /** Riga breve usata nell'indice dei servizi dell'hero. */
  short: string;
  summary: string;
  description: string;
  includes: string[];
  glyph: ServiceGlyph;
};

export const services: Service[] = [
  {
    id: "trasporti-nazionali",
    title: "Trasporti nazionali",
    short: "Carichi completi e groupage",
    summary: "Collegamenti su gomma in tutta Italia, a carico completo o in groupage.",
    description:
      "Pianifichiamo tratte e frequenze sui vostri volumi reali e scegliamo il mezzo adatto a ogni carico. Ogni spedizione parte con una data di ritiro e una finestra di consegna già concordate.",
    includes: [
      "Carichi completi e parziali",
      "Groupage su linee programmate",
      "Consegne su appuntamento",
      "Documenti di trasporto digitali",
    ],
    glyph: "route",
  },
  {
    id: "logistica-integrata",
    title: "Logistica integrata",
    short: "Magazzino e preparazione ordini",
    summary: "Magazzino, scorte e preparazione degli ordini in un unico flusso.",
    description:
      "Riceviamo e controlliamo la merce, la stocchiamo e la prepariamo secondo i vostri ordini. Magazzino e trasporti seguono le stesse regole, così le informazioni non si perdono tra un passaggio e l’altro.",
    includes: [
      "Ricevimento e controllo merci",
      "Stoccaggio per lotti e scadenze",
      "Preparazione ordini a collo e a pezzo",
      "Inventari periodici",
    ],
    glyph: "warehouse",
  },
  {
    id: "distribuzione",
    title: "Distribuzione",
    short: "Negozi, piattaforme e cantieri",
    summary: "Dal magazzino ai punti vendita, alle piattaforme e ai clienti professionali.",
    description:
      "Organizziamo giri di consegna regolari verso negozi, piattaforme della grande distribuzione e clienti professionali, nel rispetto degli orari di scarico e dei vincoli di accesso di ogni destinazione.",
    includes: [
      "Giri di consegna programmati",
      "Scarichi su prenotazione",
      "Gestione delle mancate consegne",
      "Ritiro dei resi",
    ],
    glyph: "branch",
  },
  {
    id: "soluzioni-su-misura",
    title: "Soluzioni su misura",
    short: "Progetti per flussi particolari",
    summary: "Servizi progettati per i flussi che non rientrano negli schemi standard.",
    description:
      "Lanci di prodotto, stagionalità marcate, trasferimenti di magazzino, merce voluminosa o delicata: quando il flusso è particolare progettiamo un servizio dedicato, con regole e costi definiti prima di partire.",
    includes: [
      "Studio di fattibilità",
      "Trasferimenti di magazzino",
      "Allestimento di kit e confezioni",
      "Gestione dei picchi stagionali",
    ],
    glyph: "weave",
  },
];
