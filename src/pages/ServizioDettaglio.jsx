import { useParams, Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import CTA from '../components/CTA.jsx'
import { services } from '../data/content.js'

const blocks = [
  { key: 'problem', label: 'Il problema' },
  { key: 'how', label: 'Come lo risolviamo' },
  { key: 'result', label: 'Risultato atteso' },
]

export default function ServizioDettaglio() {
  const { slug } = useParams()
  const s = services.find((x) => x.slug === slug)

  if (!s) {
    return (
      <div className="container-eppi py-24 text-center">
        <h1 className="h-section">Servizio non trovato</h1>
        <Link to="/servizi" className="btn-outline-navy mt-6">Torna ai servizi</Link>
      </div>
    )
  }

  return (
    <>
      <Seo title={`${s.title} | Eppi`} description={s.short} />
      <section className="bg-navy text-white">
        <div className="container-eppi py-16 sm:py-20">
          <Link to="/servizi" className="text-sm text-gold hover:underline">← Tutti i servizi</Link>
          <p className="eyebrow mt-6">{s.tag}</p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl font-bold leading-tight sm:text-5xl">{s.title}</h1>
          <p className="mt-5 max-w-2xl text-cream/80">{s.short}</p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-eppi grid gap-6 py-16 sm:py-20 md:grid-cols-3">
          {blocks.map((b) => (
            <div key={b.key} className="rounded-xl border border-navy/10 bg-cream/60 p-7">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-gold">{b.label}</h2>
              <p className="mt-3 leading-relaxed text-navy/80">{s[b.key]}</p>
            </div>
          ))}
        </div>
        <div className="container-eppi pb-16 sm:pb-20">
          <div className="rounded-xl border-l-4 border-gold bg-navy p-8 text-white">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-gold">Caso d'uso</h2>
            <p className="mt-3 max-w-3xl text-lg leading-relaxed text-cream/90">{s.useCase}</p>
          </div>
        </div>
      </section>
      <CTA />
    </>
  )
}
