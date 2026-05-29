import { Link } from 'react-router-dom'
import { CALENDLY_URL } from '../data/content.js'

export default function CTA() {
  return (
    <section className="bg-navy">
      <div className="container-eppi py-16 text-center sm:py-20">
        <p className="eyebrow">Iniziamo a lavorare insieme</p>
        <h2 className="mt-3 font-serif text-3xl font-bold text-white sm:text-4xl">
          Prenota la tua AI Readiness Call
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-cream/80">
          30 minuti, gratuiti e senza impegno. Valutiamo insieme dove l'AI può creare
          valore reale nella tua azienda — e da quale processo conviene partire.
        </p>
        <div className="mt-8">
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-gold">
            Prenota la call gratuita
          </a>
        </div>
        <p className="mt-4 text-sm text-cream/60">
          Preferisci scrivere prima? <Link to="/contatti" className="text-gold underline">Contattaci</Link>
        </p>
      </div>
    </section>
  )
}
