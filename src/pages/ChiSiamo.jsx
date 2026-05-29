import Seo from '../components/Seo.jsx'
import CTA from '../components/CTA.jsx'
import { values, numbers, team, copilots } from '../data/content.js'

export default function ChiSiamo() {
  return (
    <>
      <Seo
        title="Chi siamo — la AI Strategy Firm italiana | Eppi"
        description="Eppi unisce la solidità della consulenza di management a competenze AI strategist reali. Non una software house travestita da consulente."
      />
      <section className="bg-navy text-white">
        <div className="container-eppi py-16 sm:py-20">
          <p className="eyebrow">Chi siamo</p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl font-bold leading-tight sm:text-5xl">
            Una boutique di consulenza con una marcia in più.
          </h1>
          <p className="mt-6 max-w-2xl leading-relaxed text-cream/85">
            Eppi nasce dall'esperienza di professionisti con background in strategy consulting,
            management e innovazione tecnologica. Non siamo una software house travestita da
            consulente, né un consulente tradizionale che ha messo "AI" nel logo. Siamo una realtà
            ibrida autentica: la solidità della consulenza classica, amplificata da strumenti
            proprietari e competenze AI strategist reali.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-eppi py-16 sm:py-20">
          <h2 className="h-section">Perché esistiamo</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-navy/75">
            Troppe imprese italiane sentono la pressione dell'AI ma non sanno da dove partire — o
            hanno avviato qualcosa senza una strategia chiara. Eppi esiste per dare loro un punto di
            riferimento concreto: partiamo dai processi reali, troviamo dove l'AI crea economia ed
            efficienza, e la mettiamo al lavoro. Un processo migliorato oggi è competitività domani.
          </p>

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
            Volti reali, competenze concrete. È a loro che metti la sfida della tua impresa.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m) => (
              <div key={m.name} className="overflow-hidden rounded-xl border border-navy/10 bg-white">
                <img
                  src={m.img}
                  alt={`${m.name} — ${m.role}`}
                  className="aspect-square w-full object-cover"
                  loading="lazy"
                />
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
          <p className="eyebrow">E i nostri copiloti</p>
          <h2 className="mt-3 h-section max-w-2xl">I copiloti AI</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-navy/75">
            Claude, ChatGPT, Gemini & co. Non sostituiscono il team: gli fanno guadagnare ore.
            Noi ci mettiamo la testa e la responsabilità, loro la potenza di calcolo.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {copilots.map((c) => (
              <div key={c.name} className="flex items-center gap-4 rounded-xl border border-navy/10 bg-cream/60 p-6">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl font-serif text-2xl font-bold text-white" style={{ backgroundColor: c.color }}>
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
