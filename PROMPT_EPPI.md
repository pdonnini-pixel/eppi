# PROMPT EPPI — Stato del progetto e istruzioni operative

> All'apertura di una sessione Claude Code in questa cartella:
> *"Leggi PROMPT_EPPI.md e prosegui dalla fase in cui ci siamo fermati."*

## Brand
- Nome: **Eppi** · Claim: **Be happy with AI** (mai tradotto, "Florence" non compare mai).
- Palette: navy `#0D1B2A` · gold `#C9A84C` · cream `#F5F0E8`.
- Posizionamento: **AI Strategy Firm** per le imprese italiane.
- UVP: *"Non vendiamo tecnologia. Aiutiamo le imprese a capire dove l'AI crea valore reale — e poi la mettiamo al lavoro, processo per processo."*

## Stato di avanzamento (29 mag 2026)
- [x] **Fase 0 — Audit** del sito attuale → `../audit_sito.md`
- [x] **Fase 1 — Strategia** → `../strategia.md`
- [x] **Fase 2 — Copy** → centralizzato in `src/data/content.js`
- [x] **Fase 3 — Sviluppo** → sito React+Vite+Tailwind+Router (questa cartella). Build verificata.
- [x] **Fase 4 — Social** → piano lancio LinkedIn + Instagram in `../social_lancio.md`
- [x] **Fase 5 — Deploy** → istruzioni in `DEPLOY.md`. **Deploy su Netlify ancora da eseguire** (serve login Netlify dell'utente).

## Struttura sito
- Pagine: `/`, `/servizi`, `/servizi/:slug`, `/chi-siamo`, `/case-study`, `/insights`, `/insights/:slug`, `/contatti`, 404.
- Tutto il copy in `src/data/content.js`. SEO via componente `src/components/Seo.jsx`.
- Form contatti: Netlify Forms (`contact`), detection statica in `index.html`.

## Stack & comandi
React 18 · Vite 5 · Tailwind 3 · React Router 6.
```bash
npm install
npm run dev        # sviluppo
npm run build      # produzione → /dist
npx netlify-cli deploy --prod --dir=dist
```

## Regole operative
1. Prima l'audit, poi l'azione. 2. Copy prima del codice. 3. Output intermedi.
4. Coerenza brand su tutti i canali. 5. Documenta ogni scelta in 1 riga.
6. Nessun tecnicismo nel copy. 7. Mobile-first.

## Prossimi passi suggeriti
- Eseguire il deploy su Netlify e collegare il dominio `eppiflorence.it` (vedi `DEPLOY.md`).
- Sostituire i case study anonimi con casi reali appena disponibili.
- Aggiungere foto reali del team in `public/assets/`.
- Decidere se i 3 software proprietari (eppi Strategia™/Process™/AI Radar™) vanno reintrodotti come sezione dedicata.
