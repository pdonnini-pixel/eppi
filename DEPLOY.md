# Deploy — Sito Eppi su Netlify

Sito **React + Vite + Tailwind + React Router**. Build statica, pronta per Netlify.

## 1. Avvio in locale
```bash
cd eppi
npm install        # solo la prima volta
npm run dev        # apre http://localhost:5173
```

## 2. Build di test
```bash
npm run build      # genera /dist
npm run preview    # anteprima del build di produzione
```

## 3. Deploy su Netlify

### Opzione A — Da Git (consigliata)
1. Crea un repository (GitHub/GitLab) e fai push della cartella `eppi/`.
2. Su Netlify: **Add new site → Import an existing project** → seleziona il repo.
3. Netlify legge `netlify.toml` in automatico:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy. Ad ogni push parte un nuovo deploy.

### Opzione B — Da CLI
```bash
npx netlify-cli login
npx netlify-cli init        # collega o crea il sito
npx netlify-cli deploy --prod --dir=dist
npx netlify-cli open
```

### Opzione C — Drag & drop (immediata, senza Git)
Trascina la cartella `dist/` su https://app.netlify.com/drop.

## 4. Dominio e HTTPS
- Su Netlify: **Domain settings** → aggiungi `eppiflorence.it` e `www.eppiflorence.it`.
- Imposta i record DNS come indicato da Netlify (o usa Netlify DNS).
- HTTPS (Let's Encrypt) si attiva da solo.
- Redirect `www → non-www` (o viceversa): **Domain settings → Redirects**.

## 5. Form contatti (Netlify Forms)
Già configurato:
- Form `contact` con campi `nome`, `azienda`, `email`, `messaggio` + honeypot anti-spam.
- Un form statico nascosto in `index.html` permette a Netlify di rilevarlo in build.
- Le richieste arrivano in **Netlify → Forms**. Imposta lì le notifiche email verso `info@eppiflorence.it`.

## 6. SEO già incluso
- `public/robots.txt` e `public/sitemap.xml` (aggiorna gli URL se il dominio cambia).
- `title` < 60 e `meta description` < 160 per ogni pagina (componente `Seo`).
- URL descrittivi in italiano: `/servizi/ai-audit-aziendale`, `/insights/...`.

## 7. Da fare dopo (opzionale)
- Analytics: aggiungi lo snippet Plausible o GA4 in `index.html`.
- Immagini reali del team/clienti in `public/assets/` (WebP, < 200KB).
- Collega la CTA "Prenota la call" a Calendly al posto del form, se preferisci.

## Dove si modificano i testi
Quasi tutto il copy è centralizzato in **`src/data/content.js`** (servizi, case study, articoli, settori, valori). Le pagine leggono da lì: per cambiare un testo non serve toccare i componenti.
