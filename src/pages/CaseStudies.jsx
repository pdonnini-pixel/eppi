import Seo from '../components/Seo.jsx'
import CTA from '../components/CTA.jsx'
import { caseStudies } from '../data/content.js'

export default function CaseStudies() {
  return (
    <>
      <Seo
        title="Risultati e case study AI per imprese | Eppi"
        description="Casi reali di integrazione AI nelle imprese italiane: settore, problema, intervento e risultato misurato. Tempo risparmiato e qualità migliorata."
      />
      <section className="bg-navy text-white">
        <div className="container-eppi py-16 sm:py-20">
          <p className="eyebrow">Risultati</p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl font-bold leading-tight sm:text-5xl">
            Numeri, non promesse.
          </h1>
          <p className="mt-5 max-w-2xl text-cream/80">
            Ogni intervento si misura: tempo risparmiato, costi ridotti, qualità migliorata. Alcuni
            casi sono anonimi per riservatezza, i risultati sono reali.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-eppi py-16 sm:py-20 space-y-6">
          {caseStudies.map((c, i) => (
            <div key={i} className="grid gap-6 rounded-xl border border-navy/10 bg-cream/60 p-7 sm:p-9 md:grid-cols-12">
              <div className="md:col-span-3">
                <span className="text-xs font-semibold uppercase tracking-widest text-gold">Settore</span>
                <p className="mt-1 font-serif text-xl font-bold text-navy">{c.sector}</p>
              </div>
              <div className="md:col-span-5">
                <span className="text-xs font-semibold uppercase tracking-widest text-gold">Problema → Intervento</span>
                <p className="mt-1 text-sm leading-relaxed text-navy/75">{c.problem}</p>
                <p className="mt-2 text-sm leading-relaxed text-navy/75">{c.intervention}</p>
              </div>
              <div className="md:col-span-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-gold">Risultato</span>
                <p className="mt-1 font-serif text-lg font-bold leading-snug text-navy">{c.result}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <CTA />
    </>
  )
}
