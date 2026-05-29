// Contenuti centralizzati — Eppi, Be happy with AI

export const numbers = [
  { value: '15+', label: 'Anni di esperienza' },
  { value: '80+', label: 'Clienti seguiti' },
  { value: '95%', label: 'Clienti fidelizzati' },
  { value: '3', label: 'Software proprietari' },
]

export const steps = [
  {
    n: '01',
    title: 'Diagnosi',
    text: "Mappiamo i tuoi processi reali e individuiamo dove l'AI può creare valore. Nessuna soluzione prima di aver capito il problema.",
  },
  {
    n: '02',
    title: 'Strategia',
    text: 'Costruiamo una roadmap prioritizzata per ROI: cosa fare prima, con quali tempi, con quale ritorno atteso.',
  },
  {
    n: '03',
    title: 'Implementazione',
    text: "Mettiamo l'AI al lavoro, processo per processo. Ti affianchiamo finché i risultati sono misurabili — non consegniamo slide.",
  },
]

export const services = [
  {
    slug: 'ai-audit-aziendale',
    entry: true,
    title: 'AI Audit Aziendale',
    tag: 'Entry level',
    short: "La diagnosi da cui parte tutto: dove l'AI può farti risparmiare tempo e denaro, oggi.",
    problem:
      "Senti la pressione dell'AI ma non sai da dove cominciare — o hai avviato qualcosa senza una direzione chiara.",
    how: 'Analizziamo i tuoi processi ad alto volume e bassa variabilità, quantifichiamo il costo attuale di ciascuno e mappiamo le opportunità AI concrete.',
    result: 'Un quadro chiaro delle 3-5 opportunità a più alto ritorno, con stima di tempo e risparmio per ciascuna.',
    useCase:
      'Uno studio professionale scopre che la classificazione documentale gli costa 9 ore/settimana: è la prima cosa da automatizzare.',
  },
  {
    slug: 'ai-strategy-roadmap',
    title: 'AI Strategy Roadmap',
    tag: 'Strategia',
    short: 'Un piano di adozione su misura, ordinato per ritorno e fattibilità.',
    problem: 'Le opportunità ci sono, ma manca un ordine: cosa fare prima, con quale budget, con quali rischi.',
    how: 'Trasformiamo le opportunità emerse dall’audit in una roadmap a tappe, con obiettivi, KPI, tempi e responsabilità definiti.',
    result: 'Un documento operativo che il management può eseguire — e con cui giustificare ogni investimento al board.',
    useCase: "Una PMI manifatturiera pianifica 3 interventi in 6 mesi, partendo da quello con payback più rapido.",
  },
  {
    slug: 'implementazione-guidata',
    title: 'Implementazione guidata',
    tag: 'Esecuzione',
    short: "Mettiamo l'AI al lavoro nei tuoi processi, affiancando il tuo team.",
    problem: 'Molti progetti AI falliscono non per la tecnologia, ma per mancanza di ownership e accompagnamento.',
    how: 'Integriamo la soluzione un processo alla volta, con pilot circoscritti, metriche prestabilite e revisione continua.',
    result: 'Processi che funzionano in produzione, non prototipi che restano nel cassetto.',
    useCase: 'Un team commerciale automatizza la prima risposta alle richieste standard, liberando tempo per le trattative.',
  },
  {
    slug: 'formazione-team-interno',
    title: 'Formazione del team interno',
    tag: 'Autonomia',
    short: "Rendiamo la tua azienda capace di usare l'AI da sola.",
    problem: "L'AI introdotta dall'esterno senza competenze interne non scala e crea dipendenza.",
    how: 'Formiamo le persone sui casi d’uso reali della loro azienda — non teoria, ma pratica sui processi che già conoscono.',
    result: 'Un team che sa riconoscere nuove opportunità e gestire gli strumenti in autonomia.',
    useCase: "Il management impara a valutare le richieste AI dei fornitori senza farsi vendere fumo.",
  },
  {
    slug: 'monitoraggio-ottimizzazione',
    title: 'Monitoraggio e ottimizzazione continua',
    tag: 'Continuità',
    short: 'Misuriamo, aggiustiamo e capitalizziamo. Il valore cresce nel tempo.',
    problem: "Un processo migliorato oggi va mantenuto: dati, contesto e obiettivi cambiano.",
    how: 'Monitoriamo le metriche di ogni intervento, correggiamo la rotta e individuiamo il processo successivo da affrontare.',
    result: "Efficienza che si consolida e si estende, anno dopo anno.",
    useCase: "Dopo il primo processo automatizzato, ne segue un secondo e un terzo — la competitività composta.",
  },
]

export const sectors = [
  {
    name: 'PMI manifatturiere e di servizi',
    example: "Riduzione dei tempi di preventivazione e controllo qualità assistito.",
  },
  {
    name: 'Studi professionali',
    example: 'Classificazione documentale, ricerca e prima bozza di pratiche standard.',
  },
  {
    name: 'Immobiliare, hospitality e retail',
    example: 'Gestione delle richieste clienti e analisi della domanda.',
  },
  {
    name: 'Imprese familiari in digitalizzazione',
    example: 'Primo passo strutturato verso processi data-driven.',
  },
]

export const caseStudies = [
  {
    sector: 'Manifatturiero',
    problem: "Un'azienda con 45 dipendenti perdeva ~12 ore/settimana nella preparazione dei preventivi tecnici.",
    intervention: 'AI Audit, poi automazione assistita della raccolta dati e della prima bozza di preventivo.',
    result: '-70% sul tempo di preventivazione, +30% di accuratezza sulle stime.',
  },
  {
    sector: 'Studi professionali',
    problem: 'Uno studio commercialista gestiva manualmente la classificazione di centinaia di documenti al mese.',
    intervention: 'Pilot di 60 giorni su un singolo flusso documentale, con metriche prestabilite.',
    result: '9 ore/settimana liberate, riassegnate ad attività a maggior valore per i clienti.',
  },
  {
    sector: 'Servizi B2B',
    problem: 'Il team commerciale rispondeva a mano a richieste standard ripetitive, con tempi di risposta lenti.',
    intervention: 'Prima risposta assistita dall’AI con supervisione umana sui casi non standard.',
    result: 'Tempo di prima risposta da ore a minuti, senza aumentare l’organico.',
  },
]

export const posts = [
  {
    slug: 'azienda-pronta-per-ai',
    category: 'AI & Business',
    date: 'Maggio 2026',
    read: '6 min',
    title: 'Come capire se la tua azienda è pronta per l’AI',
    excerpt:
      "Tre domande semplici dicono più di mille convegni. Una guida pragmatica per capire se è il momento giusto — e da quale processo partire.",
    pillar: true,
    body: [
      { type: 'p', text: "Tutti parlano di AI. Pochi sanno da dove cominciare. E molti, per non restare indietro, bruciano risorse in progetti che non portano da nessuna parte. La buona notizia: capire se la tua azienda è pronta non richiede un reparto IT, richiede tre domande oneste." },
      { type: 'h', text: '1. Quale problema specifico vuoi risolvere?' },
      { type: 'p', text: "Se la risposta è vaga (“essere più innovativi”, “sfruttare i dati”), il progetto non è pronto. L'AI non è una soluzione in cerca di un problema: funziona quando la applichi al problema giusto. Parti da un processo che conosci e che ti costa tempo o denaro ogni settimana." },
      { type: 'h', text: '2. Hai i dati per farlo?' },
      { type: 'p', text: 'Quantità, qualità, accessibilità. Se la risposta non è sì su tutti e tre, spesso il vero progetto da fare prima dell’AI è mettere ordine nei dati. Non è un fallimento: è il punto di partenza corretto.' },
      { type: 'h', text: '3. Chi è il responsabile del risultato?' },
      { type: 'p', text: 'Non il consulente, non il fornitore di software: il manager che userà i risultati e ne risponde. Senza un owner interno, anche il miglior progetto si ferma al pilota.' },
      { type: 'h', text: 'Il modo giusto di iniziare' },
      { type: 'p', text: "Inizia piccolo e misura tutto. Un pilot circoscritto in 60-90 giorni, con obiettivi chiari, ti dice più di qualsiasi analisi preliminare. Se funziona, scali. Se non funziona, hai speso poco e imparato molto. È esattamente da qui che parte il nostro AI Audit." },
    ],
  },
  {
    slug: 'ai-da-dove-iniziare',
    category: 'AI & Business',
    date: 'Febbraio 2026',
    read: '7 min',
    title: 'AI in azienda: da dove iniziare senza sprecare risorse',
    excerpt:
      "Il primo errore è partire dalla tecnologia. Una guida per approcciare l'AI in modo serio, strutturato e orientato ai risultati.",
    body: [
      { type: 'p', text: "La maggior parte delle aziende che inizia un percorso AI commette lo stesso errore: si chiede “quale tecnologia possiamo adottare?” invece di “quali problemi vogliamo risolvere?”. Il punto di partenza corretto è sempre il problema di business, non la tecnologia." },
      { type: 'h', text: 'Mappa i processi ad alto volume e bassa variabilità' },
      { type: 'p', text: "L'AI eccelle dove ci sono grandi volumi, attività ripetitive e pattern riconoscibili: classificazione documenti, risposte standard, analisi di report, controllo qualità." },
      { type: 'h', text: 'Calcola il costo del problema attuale' },
      { type: 'p', text: 'Ore/uomo, tasso di errore, tempo di risposta, costo di non-qualità. Senza questa baseline non potrai mai misurare il ROI né giustificarlo al board.' },
      { type: 'h', text: 'Inizia piccolo e misura tutto' },
      { type: 'p', text: "I progetti AI falliscono raramente per ragioni tecnologiche. Falliscono per dati scadenti, resistenza al cambiamento, assenza di ownership. Sono problemi manageriali, non tecnici — ed è lì che facciamo la differenza." },
    ],
  },
  {
    slug: 'ai-non-sostituisce-le-persone',
    category: 'Opinione',
    date: 'Aprile 2026',
    read: '4 min',
    title: "L'AI non sostituisce le persone — le libera dai compiti che le bloccano",
    excerpt:
      'Il vero ritorno dell’AI non è tagliare l’organico. È restituire alle persone le ore che oggi sprecano in attività ripetitive.',
    body: [
      { type: 'p', text: "C'è una narrazione comoda e sbagliata: l'AI serve a sostituire le persone. Nelle imprese italiane che seguiamo, il valore è esattamente l'opposto." },
      { type: 'h', text: 'Il tempo è il vero ROI' },
      { type: 'p', text: 'Quando un processo ripetitivo viene automatizzato, le persone non spariscono: tornano a fare il lavoro per cui sono brave. La trattativa, la relazione, la decisione. Le cose che un algoritmo non fa.' },
      { type: 'h', text: 'Una competenza, non un acquisto' },
      { type: 'p', text: "L'AI non è uno strumento da comprare una volta. È una competenza da costruire nel tempo. Per questo non ci limitiamo a installare: formiamo, affianchiamo, misuriamo." },
    ],
  },
]

export const values = [
  { title: 'Indipendenza', text: "Nessun conflitto d'interesse. Raccomandiamo solo ciò che è giusto per il cliente." },
  { title: 'Rigore', text: 'Ogni analisi è supportata da dati. Ogni raccomandazione è misurabile.' },
  { title: 'Pragmatismo', text: 'Soluzioni applicabili, non teorie. Il cliente deve poter eseguire.' },
  { title: 'Accessibilità', text: "Linguaggio chiaro, mai tecnicismi inutili. L'AI spiegata in modo che il management decida." },
]

export const CALENDLY_URL = 'https://calendly.com/eppiflorence/30min'

export const team = [
  {
    img: '/assets/team/pd.jpg',
    name: 'Patrizio Donnini',
    role: 'Founder & AI Strategist',
    context: "Traduce le potenzialità dell'AI in strategie concrete per le imprese.",
  },
  {
    img: '/assets/team/ea.jpg',
    name: 'Elena Arsenio',
    role: 'Marketing & Comunicazione',
    context: "Dà voce al metodo Eppi: posizionamento, contenuti, relazioni.",
  },
  {
    img: '/assets/team/lm.jpg',
    name: 'Lilian Mammoliti',
    role: 'Finance & Amministrazione',
    context: "Tiene i conti in ordine e ogni progetto sostenibile nel tempo.",
  },
  {
    img: '/assets/team/cs.jpg',
    name: 'Claudia Scopino',
    role: 'Head of Execution',
    context: "Trasforma la strategia in risultati: tempi, qualità, consegna.",
  },
]

export const copilots = [
  { mark: 'C',  name: 'Claude',         context: 'Ragionamento e scrittura lunga', color: '#D97757' },
  { mark: 'G',  name: 'ChatGPT',        context: 'Analisi, sintesi e produttività', color: '#10A37F' },
  { mark: '✦',  name: 'Gemini',         context: 'Ricerca multimodale e dati',       color: '#4285F4' },
  { mark: 'M',  name: 'Midjourney',     context: 'Immagini e creatività visiva',     color: '#7C3AED' },
  { mark: 'P',  name: 'Perplexity',     context: 'Ricerca con fonti citate',         color: '#14B8C6' },
  { mark: '⌘',  name: 'GitHub Copilot', context: 'Codice e automazioni',             color: '#111827' },
]
