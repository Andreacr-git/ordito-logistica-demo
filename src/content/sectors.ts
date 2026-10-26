export type Sector = {
  name: string;
  /** Che cosa conta di più per le aziende del settore. */
  need: string;
  /** Come il servizio viene organizzato di conseguenza. */
  approach: string;
};

export const sectors: Sector[] = [
  {
    name: "Industria e manifattura",
    need: "Linee di produzione che non si fermano: componenti e semilavorati devono arrivare nella sequenza giusta.",
    approach:
      "Consegne programmate sui turni di produzione, scorte di sicurezza vicino agli stabilimenti, ritiro dei resi verso i fornitori.",
  },
  {
    name: "Alimentare e bevande",
    need: "Rotazione per data di scadenza e finestre di consegna strette presso le piattaforme della distribuzione.",
    approach:
      "Gestione di lotti e scadenze in magazzino, prenotazione degli scarichi, trasporto di prodotti a temperatura ambiente.",
  },
  {
    name: "Retail ed e-commerce",
    need: "Molte referenze, picchi stagionali e resi frequenti da gestire senza rallentare le vendite.",
    approach:
      "Preparazione ordini a pezzo e a collo, capacità aggiuntiva nei periodi di punta, procedura strutturata per i resi.",
  },
  {
    name: "Arredo e design",
    need: "Colli voluminosi e delicati, consegne su appuntamento presso negozi, studi e cantieri.",
    approach:
      "Imballi e movimentazione dedicati, mezzi con sponda idraulica, consegne concordate con il destinatario.",
  },
  {
    name: "Ricambi e componentistica",
    need: "Migliaia di codici e richieste urgenti: un pezzo mancante può fermare un’officina o un impianto.",
    approach:
      "Ubicazioni riservate agli articoli ad alta rotazione e spedizione in giornata degli ordini ricevuti entro un orario concordato.",
  },
  {
    name: "Edilizia e materiali",
    need: "Carichi pesanti e cantieri con accessi difficili, dove ritardi e attese costano cari.",
    approach:
      "Pianificazione delle consegne con l’impresa, mezzi adatti al tipo di accesso, scarico coordinato con il responsabile di cantiere.",
  },
];
