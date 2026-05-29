import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import CTA from '../components/CTA.jsx'
import { services } from '../data/content.js'

export default function Servizi() {
  return (
    <>
      <Seo
        title="AI Audit e strategia AI per PMI | Eppi"
        description="I 5 servizi Eppi per integrare l'AI nei processi: AI Audit, Roadmap, Implementazione, Formazione e Monitoraggio. Si parte da un processo e si cresce."
      />
      <section className="bg-navy text-white">
        <div className="container-eppi py-16 sm:py-20">
          <p className="eyebrow">Servizi</p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl font-bold leading-tight sm:text-5xl">
            Un percorso AI scalabile, processo per processo.
          </h1>
          <p className="mt-5 max-w-2xl text-cream/80">
            Si parte dall'AI Audit — l'entry point a basso impegno — e si cresce solo dove c'è valore reale e misurabile.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-eppi py-16 sm:py-20 space-y-5">
          {services.map((s, i) => (
            <Link
              key={s.slug}
              to={`/servizi/${s.slug}`}
              className={`block rounded-xl border p-7 transition hover:shadow-lg sm:p-9 ${
                s.entry ? 'border-gold bg-cream' : 'border-navy/10 bg-white'
              }`}
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-serif text-2xl font-bold text-gold/50">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-xs font-semibold uppercase tracking-widest text-gold">{s.tag}</span>
              </div>
              <h2 className="mt-2 font-serif text-2xl font-bold text-navy">{s.title}</h2>
              <p className="mt-2 max-w-2xl text-navy/70">{s.short}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-navy">Approfondisci →</span>
            </Link>
          ))}
        </div>
      </section>
      <CTA />
    </>
  )
}
