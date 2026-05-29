import Seo from '../components/Seo.jsx'
import CTA from '../components/CTA.jsx'
import { values, numbers } from '../data/content.js'

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
      <CTA />
    </>
  )
}
