import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import CTA from '../components/CTA.jsx'
import { numbers, steps, services, sectors, CALENDLY_URL } from '../data/content.js'

export default function Home() {
  return (
    <>
      <Seo
        title="Consulenza AI per imprese italiane | Eppi"
        description="Eppi è la AI Strategy Firm per le imprese italiane. Scopriamo dove l'AI crea valore reale e la mettiamo al lavoro, processo per processo."
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, #2563EB 0, transparent 40%), radial-gradient(circle at 80% 0%, #2563EB 0, transparent 35%)' }} />
        <div className="container-eppi relative py-20 sm:py-28">
          <p className="eyebrow">AI Strategy Firm · per le imprese italiane</p>
          <h1 className="mt-5 max-w-4xl font-serif text-4xl font-bold leading-[1.1] sm:text-6xl">
            Mettiamo l'<span className="text-gold">AI</span> al lavoro nella tua impresa.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/85">
            Non vendiamo tecnologia. Aiutiamo le imprese a capire dove l'AI crea valore
            reale — e poi la mettiamo al lavoro, processo per processo.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-gold">Prenota la tua AI Readiness Call — gratuita</a>
            <Link to="/servizi" className="btn-ghost">I nostri servizi</Link>
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

      {/* COME LAVORIAMO */}
      <section className="bg-cream">
        <div className="container-eppi py-20">
          <p className="eyebrow">Come lavoriamo</p>
          <h2 className="mt-3 h-section max-w-2xl">Diagnosi, strategia, implementazione.</h2>
          <p className="mt-4 max-w-2xl text-navy/70">
            Un percorso, non uno shock. Si parte da dove hai già qualcosa che funziona e si cresce, un processo alla volta.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className="rounded-xl border border-navy/10 bg-white p-7">
                <span className="font-serif text-4xl font-bold text-gold/40">{s.n}</span>
                <h3 className="mt-3 font-serif text-xl font-bold text-navy">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy/70">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVIZI */}
      <section className="bg-white">
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
                <span className={`text-xs font-semibold uppercase tracking-widest ${s.entry ? 'text-gold' : 'text-gold'}`}>
                  {s.tag}
                </span>
                <h3 className={`mt-3 font-serif text-xl font-bold ${s.entry ? 'text-white' : 'text-navy'}`}>
                  {s.title}
                </h3>
                <p className={`mt-3 text-sm leading-relaxed ${s.entry ? 'text-cream/80' : 'text-navy/70'}`}>
                  {s.short}
                </p>
                <span className={`mt-4 inline-block text-sm font-semibold ${s.entry ? 'text-gold' : 'text-navy group-hover:text-gold'}`}>
                  Scopri →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PER CHI SIAMO */}
      <section className="bg-cream">
        <div className="container-eppi py-20">
          <p className="eyebrow">Per chi siamo</p>
          <h2 className="mt-3 h-section max-w-2xl">Pensata per le imprese italiane reali.</h2>
          <p className="mt-4 max-w-2xl text-navy/70">
            Non serve essere una multinazionale per usare l'AI bene.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {sectors.map((s) => (
              <div key={s.name} className="rounded-xl border border-navy/10 bg-white p-7">
                <h3 className="font-serif text-lg font-bold text-navy">{s.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/70">
                  <span className="font-semibold text-gold">Esempio: </span>{s.example}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
