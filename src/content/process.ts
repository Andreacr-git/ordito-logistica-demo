export type ProcessStep = {
  title: string;
  text: string;
  /** Che cosa riceve il cliente al termine del passaggio. */
  output: string;
};

export const processSteps: ProcessStep[] = [
  {
    title: "Analisi dei flussi",
    text: "Partiamo dai dati che avete già: volumi, destinazioni, stagionalità, vincoli di consegna. Visitiamo il magazzino e ascoltiamo chi lo gestisce ogni giorno.",
    output: "Una descrizione condivisa della situazione attuale e dei punti critici.",
  },
  {
    title: "Progetto operativo",
    text: "Definiamo tratte, frequenze, livelli di servizio e regole di magazzino. Ogni scelta ha una motivazione scritta e un costo leggibile.",
    output: "Un piano operativo con responsabilità, tempi e tariffe.",
  },
  {
    title: "Avvio graduale",
    text: "Il passaggio avviene per fasi, con un periodo di affiancamento al vostro personale, senza interrompere le consegne in corso.",
    output: "Un calendario di avvio concordato, fase per fase.",
  },
  {
    title: "Gestione quotidiana",
    text: "Un referente unico coordina trasporti e magazzino. Le anomalie vi vengono segnalate subito, insieme alla soluzione che proponiamo.",
    output: "Aggiornamenti regolari e un contatto diretto per ogni necessità.",
  },
  {
    title: "Revisione periodica",
    text: "A intervalli concordati confrontiamo i risultati con gli obiettivi e correggiamo ciò che non funziona come previsto.",
    output: "Un rapporto di revisione con le azioni per il periodo successivo.",
  },
];
