import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import CTA from '../components/CTA.jsx'
import { posts } from '../data/content.js'

export default function Insights() {
  return (
    <>
      <Seo
        title="Insights — AI per le imprese italiane | Eppi"
        description="Articoli pratici sull'AI applicata alle imprese italiane. Niente tecnicismi: esempi concreti, processi reali e ROI misurabile."
      />
      <section className="bg-navy text-white">
        <div className="container-eppi py-16 sm:py-20">
          <p className="eyebrow">Insights</p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl font-bold leading-tight sm:text-5xl">
            AI per le imprese, spiegata bene.
          </h1>
          <p className="mt-5 max-w-2xl text-cream/80">
            Contenuti pratici, senza tecnicismi, pensati per chi deve decidere.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-eppi grid gap-6 py-16 sm:py-20 md:grid-cols-3">
          {posts.map((p) => (
            <Link
              key={p.slug}
              to={`/insights/${p.slug}`}
              className="group flex flex-col rounded-xl border border-navy/10 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold">
                <span>{p.category}</span>
                {p.pillar && <span className="rounded bg-gold/15 px-2 py-0.5 text-gold">Pilastro</span>}
              </div>
              <h2 className="mt-3 font-serif text-xl font-bold leading-snug text-navy group-hover:text-gold">
                {p.title}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-navy/70">{p.excerpt}</p>
              <p className="mt-5 text-xs text-navy/50">{p.read} lettura · {p.date}</p>
            </Link>
          ))}
        </div>
      </section>
      <CTA />
    </>
  )
}
