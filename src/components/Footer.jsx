import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/70">
      <div className="container-eppi grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo light />
          <p className="mt-4 max-w-sm text-sm leading-relaxed">
            La AI Strategy Firm per le imprese italiane. Non vendiamo tecnologia:
            scopriamo dove l'AI crea valore reale e la mettiamo al lavoro, processo per processo.
          </p>
          <p className="mt-4 text-sm">
            Sede legale: Viale Spartaco Lavagnini, 20 — 50129 Firenze<br />
            Operativa: Via di Ritortoli, 8 — 50126 Firenze<br />
            <a className="hover:text-gold" href="tel:+393342061486">+39 334 206 1486</a> ·{' '}
            <a className="hover:text-gold" href="mailto:info@eppiflorence.it">info@eppiflorence.it</a>
          </p>
        </div>
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-gold">Servizi</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link className="hover:text-gold" to="/servizi/ai-audit-aziendale">AI Audit Aziendale</Link></li>
            <li><Link className="hover:text-gold" to="/servizi/ai-strategy-roadmap">AI Strategy Roadmap</Link></li>
            <li><Link className="hover:text-gold" to="/servizi/implementazione-guidata">Implementazione guidata</Link></li>
            <li><Link className="hover:text-gold" to="/servizi/formazione-team-interno">Formazione team</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-gold">Azienda</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link className="hover:text-gold" to="/chi-siamo">Chi siamo</Link></li>
            <li><Link className="hover:text-gold" to="/case-study">Case study</Link></li>
            <li><Link className="hover:text-gold" to="/insights">Insights</Link></li>
            <li><Link className="hover:text-gold" to="/contatti">Contatti</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-eppi flex flex-col gap-2 py-5 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} EPPI S.r.l. — P.IVA 07355140489 — REA FI-697723</p>
          <p>Eppi — Be happy with AI</p>
        </div>
      </div>
    </footer>
  )
}
