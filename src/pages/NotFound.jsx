import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'

export default function NotFound() {
  return (
    <>
      <Seo title="Pagina non trovata | Eppi" description="La pagina che cerchi non esiste." />
      <div className="container-eppi flex flex-col items-center py-32 text-center">
        <p className="font-serif text-6xl font-bold text-gold">404</p>
        <h1 className="mt-4 h-section">Questa pagina non esiste.</h1>
        <p className="mt-3 text-navy/70">Torniamo dove l'AI crea valore.</p>
        <Link to="/" className="btn-gold mt-8">Torna alla home</Link>
      </div>
    </>
  )
}
