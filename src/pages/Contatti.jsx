import { useState } from 'react'
import Seo from '../components/Seo.jsx'

function encode(data) {
  return Object.keys(data)
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
    .join('&')
}

export default function Contatti() {
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)
  const [form, setForm] = useState({ nome: '', azienda: '', email: '', messaggio: '' })

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setError(false)
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...form }),
    })
      .then(() => setSent(true))
      .catch(() => setError(true))
  }

  return (
    <>
      <Seo
        title="Contatti — Prenota la tua AI Readiness Call | Eppi"
        description="Prenota una call gratuita di 30 minuti. Valutiamo insieme dove l'AI può creare valore reale nella tua azienda. Senza impegno."
      />
      <section className="bg-navy text-white">
        <div className="container-eppi py-16 sm:py-20">
          <p className="eyebrow">Contatti</p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl font-bold leading-tight sm:text-5xl">
            Raccontaci la sfida della tua impresa.
          </h1>
          <p className="mt-5 max-w-2xl text-cream/80">
            Prima call gratuita di 30 minuti, senza impegno. Valutiamo insieme se e come l'AI può
            creare valore per la tua azienda.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-eppi grid gap-12 py-16 sm:py-20 md:grid-cols-2">
          <div>
            {sent ? (
              <div className="rounded-xl border border-gold bg-cream/60 p-8">
                <h2 className="font-serif text-2xl font-bold text-navy">Grazie!</h2>
                <p className="mt-3 text-navy/75">
                  Abbiamo ricevuto la tua richiesta. Ti rispondiamo entro un giorno lavorativo per
                  fissare la tua AI Readiness Call.
                </p>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>Non compilare: <input name="bot-field" onChange={update} /></label>
                </p>
                <Field label="Nome e cognome" name="nome" value={form.nome} onChange={update} required />
                <Field label="Azienda" name="azienda" value={form.azienda} onChange={update} required />
                <Field label="Email" name="email" type="email" value={form.email} onChange={update} required />
                <div>
                  <label className="block text-sm font-semibold text-navy">In breve, la tua sfida</label>
                  <textarea
                    name="messaggio"
                    rows={5}
                    value={form.messaggio}
                    onChange={update}
                    className="mt-2 w-full rounded-md border border-navy/20 px-4 py-3 outline-none focus:border-gold"
                  />
                </div>
                <button type="submit" className="btn-gold w-full sm:w-auto">Prenota la call gratuita</button>
                {error && <p className="text-sm text-red-600">Si è verificato un errore. Scrivici a info@eppiflorence.it.</p>}
              </form>
            )}
          </div>

          <div className="rounded-xl bg-cream/60 p-8">
            <h2 className="font-serif text-xl font-bold text-navy">Oppure scrivici direttamente</h2>
            <ul className="mt-5 space-y-3 text-navy/80">
              <li><span className="font-semibold text-gold">Email:</span> <a className="hover:underline" href="mailto:info@eppiflorence.it">info@eppiflorence.it</a></li>
              <li><span className="font-semibold text-gold">Telefono:</span> <a className="hover:underline" href="tel:+393342061486">+39 334 206 1486</a></li>
              <li><span className="font-semibold text-gold">Sede:</span> Viale Spartaco Lavagnini, 20 — 50129 Firenze</li>
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-navy/60">
              Rispondiamo entro un giorno lavorativo. Nessuna pressione commerciale: prima capiamo se possiamo esserti utili davvero.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

function Field({ label, name, value, onChange, type = 'text', required }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-navy">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="mt-2 w-full rounded-md border border-navy/20 px-4 py-3 outline-none focus:border-gold"
      />
    </div>
  )
}
