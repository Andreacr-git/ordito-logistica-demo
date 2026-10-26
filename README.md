# Ordito: concept di sito corporate per la logistica

Sito dimostrativo per **Ordito**, azienda italiana di logistica e trasporti B2B **immaginaria**.
È pensato come progetto di portfolio: il sito funziona davvero, ma l’azienda, i servizi e i testi sono di fantasia
e il carattere dimostrativo è dichiarato in ogni pagina.

- Landing page completa: hero, azienda, servizi, settori, metodo, valore della logistica organizzata, call to action, footer.
- Pagine aggiuntive: note legali e privacy, pagina 404.
- Nessun backend, database, CMS, modulo, cookie, analytics o tracciamento.

## Identità

| Elemento | Scelta |
| --- | --- |
| Nome | Ordito: l’insieme dei fili tesi sul telaio, la struttura che regge il tessuto |
| Colori | Blu notte `#0C1B2E`, bianco, nebbia `#EEF1F4`, arancione segnale `#F26B1D` (su fondo chiaro `#B84A0C`) |
| Caratteri | Bodoni Moda per titoli e testi editoriali, Archivo per testo e interfaccia |
| Motivo | Fili verticali allineati alle colonne, attraversati da una trama arancione con nodi quadrati |

I token di colore e la tipografia sono definiti in `src/app/globals.css` (blocchi `@theme` di Tailwind CSS 4).

## Requisiti

- Node.js 20.9 o successivo (consigliato 22, indicato in `.nvmrc` e in `netlify.toml`)
- npm

## Comandi

```bash
npm install          # installa le dipendenze (versioni fissate + package-lock.json)
npm run dev          # sviluppo su http://localhost:3000
npm run typecheck    # genera i tipi delle route e controlla TypeScript
npm run build        # export statico nella cartella out/
npm run preview      # serve out/ su http://localhost:4173 con le intestazioni di netlify.toml
```

`npm run preview` non ha dipendenze: legge le intestazioni da `netlify.toml` (CSP compresa),
così è possibile verificarle in locale prima del deploy.

## Stack

| Pacchetto | Versione | Note |
| --- | --- | --- |
| next | 16.4.2 | Include le correzioni di sicurezza del 14 ottobre 2026 (patch minima: 16.4.1) |
| react / react-dom | 19.3.1 | Versioni corrette indicate negli avvisi React di ottobre 2026 |
| typescript | 5.9.3 | Serie 5, la stessa usata dal template ufficiale di Next.js 16.4 |
| tailwindcss / @tailwindcss/postcss | 4.3.3 | Configurazione nel CSS, senza `tailwind.config` |

Il sito usa l’App Router con **export statico** (`output: "export"`): ogni pagina è HTML generato in fase di build.
Non esistono funzioni server, API, Server Actions o ottimizzazione immagini lato server, quindi la superficie
d’attacco a runtime è quella di un sito statico.

Le immagini usano `next/image` con un loader personalizzato (`src/lib/unsplash-loader.ts`): la CDN di Unsplash
restituisce ogni foto alla larghezza richiesta e in AVIF/WebP quando il browser li supporta.

I font sono file locali (`src/fonts/`) caricati con `next/font/local`: nessuna richiesta a Google Fonts o ad altri servizi.

## Struttura

```
src/
  app/                  layout, pagine, stili globali, favicon, icona Apple
    note-legali/        note legali, privacy e crediti
  components/
    layout/             barra "concept", header con menu mobile, footer
    sections/           sezioni della home
    ui/                 componenti riutilizzabili (pulsanti, logo, foto, glifi)
  content/              testi e dati: site, servizi, settori, metodo, valore, foto
  fonts/                font variabili + licenze SIL OFL
  lib/                  loader immagini e utility
public/og-image.png     anteprima per i social (1200 × 630)
scripts/preview.mjs     anteprima locale dell'export
netlify.toml            build, intestazioni di sicurezza e cache
```

Tutti i testi stanno in `src/content/`: si possono modificare senza toccare i componenti.

## Pubblicazione

### GitHub

```bash
git init
git add .
git commit -m "Concept Ordito"
git branch -M main
git remote add origin <url-del-repository>
git push -u origin main
```

`node_modules/`, `.next/`, `out/` e i file `.env` sono esclusi da `.gitignore`.

### Netlify

1. Su Netlify: **Add new project → Import an existing project** e scegliere il repository.
2. Le impostazioni vengono lette da `netlify.toml`: comando `npm run build`, cartella pubblicata `out`, Node 22.
3. Avviare il deploy.

Netlify riconosce Next.js e attiva il proprio adapter, che gestisce l’export statico copiando `out/` così com’è.
La variabile `URL`, fornita da Netlify durante la build, viene usata solo per l’indirizzo assoluto dell’immagine
di anteprima social. **Non viene impostato alcun URL canonico.**

Variabili facoltative (vedi `.env.example`):

| Variabile | Effetto |
| --- | --- |
| `SITE_URL` | Indirizzo pubblico, solo per build eseguite fuori da Netlify |
| `SITE_ALLOW_INDEXING` | `true` per consentire l’indicizzazione; di default il sito è `noindex` |

Il `noindex` predefinito evita che un’azienda inesistente compaia nei risultati di ricerca per query reali
sulla logistica. Il link resta condivisibile e visitabile normalmente.

## Da fare prima della pubblicazione

- [ ] **Nome e marchio.** Verificare che “Ordito” non sia già usato da imprese del settore: Registro Imprese,
      banche dati marchi UIBM, EUIPO e WIPO, domini e social. Una ricerca web preliminare non ha trovato
      sovrapposizioni evidenti, ma non sostituisce queste verifiche.
- [ ] **Fotografie.** Controllare a vista le quattro immagini (elenco in `src/content/photos.ts`):
      non devono mostrare marchi, loghi di aziende reali, targhe leggibili o persone riconoscibili.
      Durante lo sviluppo non è stato possibile visualizzarle (vedi “Verifiche effettuate”).
      Per sostituirne una basta cambiare `src`, autore e link nello stesso file; il dominio deve restare
      `images.unsplash.com` oppure va aggiornata la direttiva `img-src` della CSP.
- [ ] **Autore.** Compilare `author` in `src/content/site.ts` con nome e portfolio reali: compaiono nel footer,
      nella call to action finale e nelle note legali. Se restano vuoti, il sito non mostra alcun riferimento.
- [ ] **Note legali.** Rileggere `src/app/note-legali/page.tsx`. Il testo descrive il funzionamento tecnico reale
      del sito (hosting su Netlify, foto dalla CDN di Unsplash, nessun cookie). Se cambia l’hosting o si aggiungono
      servizi esterni, il testo va aggiornato. Per un inquadramento giuridico completo rivolgersi a un professionista.
- [ ] **Indicizzazione.** Decidere se mantenere il `noindex` predefinito.
- [ ] **Dopo il deploy.** Controllare le intestazioni (ad esempio con gli strumenti per sviluppatori del browser)
      e la console: non devono comparire violazioni della Content Security Policy.

## Sicurezza

- Export statico: nessun codice server eseguito a runtime.
- Intestazioni in `netlify.toml`: Content-Security-Policy, HSTS, `X-Content-Type-Options`, `X-Frame-Options`,
  `Referrer-Policy`, `Permissions-Policy`, `Cross-Origin-Opener-Policy`.
- La CSP ammette `'unsafe-inline'` per script e stili: l’export statico di Next.js inserisce script inline
  per l’idratazione e non può usare nonce generati a ogni richiesta. Tutte le altre sorgenti sono limitate
  al sito stesso, più `images.unsplash.com` per le immagini.
- Versioni delle dipendenze fissate e `package-lock.json` incluso. Per gli aggiornamenti futuri:
  `npm audit`, poi aggiornamenti di patch dentro la stessa minor (`next@16.4.x`), seguendo gli avvisi su
  https://nextjs.org/blog.

## Accessibilità e prestazioni

- Link “Vai al contenuto”, landmark corretti, gerarchia dei titoli, focus visibile su ogni elemento interattivo.
- Menu mobile basato su `<dialog>` aperto con `showModal()`: viene mostrato nel top layer del browser, con
  sfondo pieno, focus iniziale sul pulsante di chiusura, tasto Esc, resto della pagina inerte e scroll bloccato.
  È reso fuori dall’`<header>` e il `backdrop-filter` è applicato a un livello di sfondo separato: nessun
  antenato crea un containing block per elementi `position: fixed` e non servono z-index.
- Animazioni solo in CSS, disattivate con “riduci movimento”. La linea del metodo si completa durante lo
  scorrimento dove le scroll-driven animations sono supportate; altrove è mostrata già completa.
- Contrasti verificati sui colori del tema; l’arancione per testo su fondo chiaro usa la variante scura.
- Hero con immagine precaricata e `sizes` corretti; le altre foto sono caricate in modo differito.

## Verifiche effettuate

Eseguite il 26 ottobre 2026 nell’ambiente di sviluppo:

- `npm install` e `npm audit`: 0 vulnerabilità.
- `npm run typecheck`: nessun errore.
- `npm run build`: export statico riuscito (home, note legali, 404, icone).
- Test in Chromium headless (Playwright) su 1440 × 900, 768 × 1024, 390 × 844 e 320 × 640:
  - a tutte le dimensioni: nessun errore in console e nessuno scorrimento orizzontale;
  - a 1440 e 390 px: nessuna violazione della CSP, servita con le intestazioni di `netlify.toml`;
  - menu mobile aperto dopo lo scroll: occupa l’intera finestra, sfondo opaco, contenuti sottostanti non
    raggiungibili, scroll della pagina bloccato; Esc lo chiude e riporta il focus sul pulsante;
    un link del menu lo chiude e porta alla sezione esatta sotto l’header;
  - primo Tab sul link “Vai al contenuto”; nessuna animazione attiva con “riduci movimento”;
  - nessun cookie e nessun dato in `localStorage`; metadata `noindex` presenti, nessun link canonico.
- Build di prova con la variabile `URL` impostata: `og:image` e `twitter:image` risolti correttamente.

**Limiti dei test.** Dall’ambiente di sviluppo il dominio `images.unsplash.com` non era raggiungibile:
nei test le foto sono state sostituite da un’immagine segnaposto, quindi resa e contenuto delle fotografie
reali vanno controllati dopo il primo deploy. I test sono stati eseguiti solo su Chromium (non su Safari o
Firefox, né su dispositivi fisici) e il deploy su Netlify non è stato eseguito: è stato verificato solo che la
build produca i file richiesti dall’adapter Netlify per l’export statico.

## Licenze e crediti

- **Fotografie:** Unsplash, Licenza Unsplash (https://unsplash.com/license). Autori e link in
  `src/content/photos.ts` e nella pagina note legali.
- **Caratteri:** Bodoni Moda e Archivo, SIL Open Font License 1.1 (testi completi in `src/fonts/`).
- **Codice:** di proprietà dell’autore del concept.
