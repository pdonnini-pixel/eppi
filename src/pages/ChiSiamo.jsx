import Seo from '../components/Seo.jsx'
import CTA from '../components/CTA.jsx'
import { values, numbers, team, copilots } from '../data/content.js'

export default function ChiSiamo() {
  return (
    <>
      <Seo
        title="Chi siamo — nati in azienda, non in laboratorio | Eppi"
        description="Eppi nasce da un imprenditore e da un team con oltre 20 anni di gestione aziendale. Parliamo di AI da imprenditori a imprenditori, con la tecnologia al servizio dei margini."
      />
      <section className="bg-navy text-white">
        <div className="container-eppi py-16 sm:py-20">
          <p className="eyebrow">Chi siamo</p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl font-bold leading-tight sm:text-5xl">
            Nati in azienda, non in un laboratorio.
          </h1>
          <p className="mt-6 max-w-2xl leading-relaxed text-cream/85">
            Eppi non nasce dall'entusiasmo per l'ultima tecnologia. Nasce da una domanda che si fa
            ogni imprenditore davanti all'AI: <em>"questa cosa qui mi serve davvero, o sto solo
            correndo dietro alla moda?"</em>
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-eppi py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <p className="eyebrow">La nostra storia</p>
              <h2 className="mt-3 h-section">Da imprenditori, a imprenditori.</h2>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-navy/75 lg:col-span-2">
            <p>
              A farsi quella domanda per primo è stato <strong className="text-navy">Patrizio Donnini Gallo</strong>,
              che imprenditore lo è sempre stato — in settori diversi, con difficoltà diverse, di
              quelle che capisci solo quando i conti li firmi tu. Da lì l'intuizione: l'AI non è un
              tema da tecnici, è un tema di <strong className="text-navy">modello di business</strong>.
              E come ogni cambio di modello, premia chi lo capisce per primo e penalizza chi arriva tardi.
            </p>
            <p>
              Per questo Patrizio si è circondato non di smanettoni, ma di persone con
              <strong className="text-navy"> oltre 20 anni di gestione aziendale</strong> alle spalle:
              marketing, finanza, operations. Gente che i problemi delle imprese li ha già risolti —
              anche senza AI — e che oggi usa l'AI per risolverli meglio, più in fretta, con margini
              migliori.
            </p>
            <p>
              È questa la differenza: <strong className="text-navy">ti parliamo da imprenditori a
              imprenditori</strong>, con la tecnologia al servizio del numero in fondo alla pagina,
              mai il contrario. Aiutiamo le imprese italiane — soprattutto le piccole — a non arrivare
              tardi a capire come l'AI sta cambiando organizzazione e marginalità.
            </p>
            </div>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="rounded-xl border border-navy/10 bg-cream/60 p-7">
                <h3 className="font-serif text-lg font-bold text-navy">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/70">{v.text}</p>
              </div>
            ))}
          </div>

          <dl className="mt-14 grid grid-cols-2 gap-6 rounded-xl bg-navy p-10 text-white sm:grid-cols-4">
            {numbers.map((n) => (
              <div key={n.label}>
                <dt className="font-serif text-3xl font-bold text-gold">{n.value}</dt>
                <dd className="mt-1 text-sm text-cream/70">{n.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* IL TEAM */}
      <section className="bg-cream">
        <div className="container-eppi py-16 sm:py-20">
          <p className="eyebrow">Il team</p>
          <h2 className="mt-3 h-section max-w-2xl">Le persone dietro Eppi.</h2>
          <p className="mt-4 max-w-2xl text-navy/70">
            Volti reali, competenze concrete, oltre 20 anni di azienda. È a loro che affidi la sfida della tua impresa.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m) => (
              <div key={m.name} className="overflow-hidden rounded-xl border border-navy/10 bg-white">
                <img src={m.img} alt={`${m.name} — ${m.role}`} className="aspect-square w-full object-cover" loading="lazy" />
                <div className="p-5">
                  <h3 className="font-serif text-lg font-bold text-navy">{m.name}</h3>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gold">{m.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-navy/70">{m.context}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* I COPILOTI AI */}
      <section className="bg-white">
        <div className="container-eppi py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <p className="eyebrow">E i nostri copiloti</p>
              <h2 className="mt-3 h-section">I copiloti AI</h2>
            </div>
            <div className="lg:col-span-2">
              <p className="text-lg leading-relaxed text-navy/75">
                Usiamo ogni giorno i migliori modelli sul mercato, ognuno per cio che sa fare meglio.{' '}
                <strong className="text-navy">Non sostituiscono il team: gli fanno guadagnare ore.</strong>{' '}
                Noi ci mettiamo la testa, l'esperienza e la responsabilita; loro la potenza di calcolo.
                Tu ottieni il risultato — quale strumento usare e un problema nostro.
              </p>
            </div>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {copilots.map((c) => (
              <div
                key={c.name}
                className="group flex items-center gap-4 rounded-xl border border-navy/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                style={{ borderTop: `3px solid ${c.color}` }}
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl font-serif text-2xl font-bold text-white shadow-sm" style={{ backgroundColor: c.color }}>
                  {c.mark}
                </span>
                <div>
                  <h3 className="font-serif text-lg font-bold text-navy">{c.name}</h3>
                  <p className="text-sm text-navy/60">{c.context}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
