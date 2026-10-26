export type ValueRow = {
  topic: string;
  without: string;
  with: string;
};

export const valueRows: ValueRow[] = [
  {
    topic: "Consegne",
    without: "Le date si confermano all’ultimo momento e i clienti chiamano per sapere dov’è la merce.",
    with: "Ogni spedizione ha una data concordata e uno stato che si può verificare in qualsiasi momento.",
  },
  {
    topic: "Magazzino",
    without: "Scorte ferme accanto ad articoli esauriti, spazi pieni ma usati male.",
    with: "Ubicazioni assegnate in base alla rotazione e inventari che corrispondono a ciò che c’è sugli scaffali.",
  },
  {
    topic: "Costi",
    without: "Il costo reale del trasporto si scopre a fine mese, tra supplementi e urgenze.",
    with: "Tariffe concordate e costi distinti per voce, prevedibili prima di spedire.",
  },
  {
    topic: "Persone",
    without: "Il personale interno passa le giornate a rincorrere vettori e imprevisti.",
    with: "Il team si concentra su prodotto e clienti; le eccezioni arrivano già con una proposta di soluzione.",
  },
  {
    topic: "Decisioni",
    without: "Si interviene sulla base di impressioni e lamentele.",
    with: "Rapporti periodici indicano dove intervenire e con quali priorità.",
  },
];
