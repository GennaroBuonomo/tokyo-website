# ⛩️ Tokyo Explorer

Una Single Page Application (SPA) interattiva sviluppata in React per esplorare i quartieri iconici, le attrazioni storiche e lo street food tradizionale di Tokyo.

Questo progetto nasce come guida digitale e dimostra l'implementazione pratica di concetti fondamentali dello sviluppo Frontend moderno, come il routing dinamico, la gestione dello stato, il rendering di liste e il web design responsivo.

## 🚀 Funzionalità Principali (Cosa ho fatto)

- **Routing Avanzato:** Navigazione fluida tra le pagine (Home, Luoghi, Cibo) senza ricaricare il browser, utilizzando React Router.
- **Pagine di Dettaglio Dinamiche:** Generazione di viste uniche per ogni singolo luogo o piatto tramite parametri URL (`useParams`), estrapolando i dati da un mock database.
- **Motore di Ricerca e Filtri:** Implementazione di una barra di ricerca testuale e pulsanti di categoria (es. "Quartiere", "Tempio", "Street Food") che aggiornano lo stato e filtrano i risultati in tempo reale.
- **Integrazioni Esterne:** Link diretti a Google Maps per geolocalizzare i ristoranti consigliati e collegamenti per l'acquisto di biglietti per le attrazioni.
- **UI/UX Moderna e Custom:**
  - Layout completamente responsivo costruito con CSS Grid e Flexbox.
  - Palette colori personalizzata (urban gray, tokyo red, neon gold) gestita tramite variabili CSS (`:root`).
  - Effetti di overlay, background fissi in trasparenza e animazioni fluide per un'esperienza immersiva.
- **Dati Modulari:** Architettura basata su file JSON separato per simulare una risposta API e mantenere i componenti puliti.

## 🛠️ Tecnologie Usate

- **React.js:** Libreria core per la costruzione dell'interfaccia a componenti.
- **Vite:** Build tool di nuova generazione per un ambiente di sviluppo rapido e ottimizzato.
- **React Router DOM (v6):** Per la gestione delle rotte (Route, Routes, Link, useParams).
- **JavaScript (ES6+):** Utilizzo massiccio di array methods (`map`, `filter`, `find`, `slice`), destrutturazione e arrow functions.
- **CSS3:** Stile puro (no framework) per un controllo totale (Pixel-perfect), animazioni keyframes, variabili e media queries.
- **HTML5 & JSON:** Struttura semantica e database locale mockato.
