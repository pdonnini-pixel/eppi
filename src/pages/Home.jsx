import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import CTA from '../components/CTA.jsx'
import { numbers, steps, services, sectors, bivio, aiExamples, faqs, CALENDLY_URL } from '../data/content.js'

export default function Home() {
  return (
    <>
      <Seo
        title="Consulenza AI per imprese italiane | Eppi"
        description="Eppi aiuta le imprese italiane — soprattutto le piccole — a capire dove l'AI crea valore e a metterlo a terra, processo per processo. Nati da imprenditori, non da un laboratorio."
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle at 18% 20%, #2563EB 0, transparent 42%), radial-gradient(circle at 82% 0%, #2563EB 0, transparent 38%)' }} />
        <div className="container-eppi relative py-20 sm:py-28">
          <p className="eyebrow">Per chi guida un'impresa. Non per chi smanetta.</p>
          <h1 className="mt-5 max-w-4xl font-serif text-4xl font-bold leading-[1.1] sm:text-6xl">
            Capisci l'<span className="text-gold">AI</span> prima della tua concorrenza.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/85">
            L'intelligenza artificiale sta cambiando come si organizza il lavoro e dove si fanno
            i margini. Aiutiamo le imprese italiane — soprattutto le piccole — a capirlo per prime
            e a metterlo a terra, processo per processo. Senza tecnicismi, con esempi che si toccano.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-gold">Prenota la tua AI Readiness Call — gratuita</a>
            <a href="#cosa-cambia" className="btn-ghost">Guarda cosa cambia</a>
          </div>

          <dl className="mt-16 grid grid-cols-2 gap-6 border-t border-white/10 pt-10 sm:grid-cols-4">
            {numbers.map((n) => (
              <div key={n.label}>
                <dt className="font-serif text-3xl font-bold text-gold sm:text-4xl">{n.value}</dt>
                <dd className="mt-1 text-sm text-cream/70">{n.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* IL BIVIO */}
      <section className="bg-white">
        <div className="container-eppi py-20">
          <p className="eyebrow">{bivio.eyebrow}</p>
          <h2 className="mt-3 h-section max-w-3xl">{bivio.title}</h2>
          <div className="mt-6 max-w-3xl space-y-5">
            {bivio.body.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed text-navy/75">{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* COSA CAMBIA DAVVERO */}
      <section id="cosa-cambia" className="scroll-mt-20 bg-cream">
        <div className="container-eppi py-20">
          <p className="eyebrow">Esempi concreti</p>
          <h2 className="mt-3 h-section max-w-2xl">Non teoria. Cose che succedono in azienda.</h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-navy/75">
            Il punto non è togliere persone. È togliere alle persone le cose ripetitive — con un'AI
            che ragiona <strong className="text-navy">con te e per te</strong>, non fredda. Dove prima
            servivano più mani, oggi ne basta una ben affiancata.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {aiExamples.map((e, i) => (
              <div key={i} className="rounded-xl border border-navy/10 bg-white p-7">
                <span className="font-serif text-4xl font-bold text-gold/40">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-3 font-serif text-xl font-bold text-navy">{e.title}</h3>
                <p className="mt-3 leading-relaxed text-navy/70">{e.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-lg leading-relaxed text-navy/75">
            Un'unica logica: l'AI non sostituisce le persone, le libera. E intanto fa girare
            l'azienda con più ordine e margini migliori.
          </p>
        </div>
      </section>

      {/* COME LAVORIAMO */}
      <section className="bg-white">
        <div className="container-eppi py-20">
          <p className="eyebrow">Come lavoriamo</p>
          <h2 className="mt-3 h-section max-w-2xl">Diagnosi, strategia, implementazione.</h2>
          <p className="mt-4 max-w-2xl text-navy/70">
            Partiamo da dove sei oggi e da quello che già funziona. Niente rivoluzioni: un processo
            alla volta, con il ritorno sempre sotto gli occhi.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className="rounded-xl border border-navy/10 bg-cream/60 p-7">
                <span className="font-serif text-4xl font-bold text-gold/40">{s.n}</span>
                <h3 className="mt-3 font-serif text-xl font-bold text-navy">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy/70">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVIZI */}
      <section className="bg-cream">
        <div className="container-eppi py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Cosa facciamo</p>
              <h2 className="mt-3 h-section max-w-xl">Dall'audit al monitoraggio continuo.</h2>
            </div>
            <Link to="/servizi" className="btn-outline-navy !py-2.5 text-sm">Tutti i servizi</Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                to={`/servizi/${s.slug}`}
                className={`group rounded-xl border p-7 transition hover:-translate-y-1 hover:shadow-lg ${
                  s.entry ? 'border-gold bg-navy text-white' : 'border-navy/10 bg-white'
                }`}
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-gold">{s.tag}</span>
                <h3 className={`mt-3 font-serif text-xl font-bold ${s.entry ? 'text-white' : 'text-navy'}`}>{s.title}</h3>
                <p className={`mt-3 text-sm leading-relaxed ${s.entry ? 'text-cream/80' : 'text-navy/70'}`}>{s.short}</p>
                <span className={`mt-4 inline-block text-sm font-semibold ${s.entry ? 'text-gold' : 'text-navy group-hover:text-gold'}`}>Scopri →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PER CHI SIAMO */}
      <section className="bg-white">
        <div className="container-eppi py-20">
          <p className="eyebrow">Per chi siamo</p>
          <h2 className="mt-3 h-section max-w-2xl">Pensata per le imprese italiane reali.</h2>
          <p className="mt-4 max-w-2xl text-navy/70">Non serve essere una multinazionale per usare l'AI bene.</p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {sectors.map((s) => (
              <div key={s.name} className="rounded-xl border border-navy/10 bg-cream/60 p-7">
                <h3 className="font-serif text-lg font-bold text-navy">{s.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/70">
                  <span className="font-semibold text-gold">Esempio: </span>{s.example}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — utile anche per la GEO */}
      <section className="bg-cream">
        <div className="container-eppi py-20">
          <p className="eyebrow">Domande frequenti</p>
          <h2 className="mt-3 h-section max-w-2xl">Le risposte che cercano gli imprenditori.</h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {faqs.map((f, i) => (
              <div key={i} className="rounded-xl border border-navy/10 bg-white p-7">
                <h3 className="font-serif text-lg font-bold text-navy">{f.q}</h3>
                <p className="mt-3 leading-relaxed text-navy/70">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
