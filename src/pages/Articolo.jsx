import { useParams, Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import CTA from '../components/CTA.jsx'
import { posts } from '../data/content.js'

export default function Articolo() {
  const { slug } = useParams()
  const p = posts.find((x) => x.slug === slug)

  if (!p) {
    return (
      <div className="container-eppi py-24 text-center">
        <h1 className="h-section">Articolo non trovato</h1>
        <Link to="/insights" className="btn-outline-navy mt-6">Torna agli insights</Link>
      </div>
    )
  }

  return (
    <>
      <Seo title={`${p.title} | Eppi`} description={p.excerpt} />
      <article>
        <header className="bg-navy text-white">
          <div className="container-eppi py-16 sm:py-20">
            <Link to="/insights" className="text-sm text-gold hover:underline">← Tutti gli insights</Link>
            <p className="eyebrow mt-6">{p.category}</p>
            <h1 className="mt-3 max-w-3xl font-serif text-3xl font-bold leading-tight sm:text-5xl">{p.title}</h1>
            <p className="mt-5 text-sm text-cream/60">{p.read} lettura · {p.date}</p>
          </div>
        </header>

        <div className="bg-white">
          <div className="container-eppi max-w-3xl py-16 sm:py-20">
            {p.body.map((b, i) =>
              b.type === 'h' ? (
                <h2 key={i} className="mt-10 font-serif text-2xl font-bold text-navy">{b.text}</h2>
              ) : (
                <p key={i} className="mt-5 leading-relaxed text-navy/80">{b.text}</p>
              )
            )}
          </div>
        </div>
      </article>
      <CTA />
    </>
  )
}
