import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import Servizi from './pages/Servizi.jsx'
import ServizioDettaglio from './pages/ServizioDettaglio.jsx'
import ChiSiamo from './pages/ChiSiamo.jsx'
import CaseStudies from './pages/CaseStudies.jsx'
import Insights from './pages/Insights.jsx'
import Articolo from './pages/Articolo.jsx'
import Contatti from './pages/Contatti.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servizi" element={<Servizi />} />
          <Route path="/servizi/:slug" element={<ServizioDettaglio />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/case-study" element={<CaseStudies />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:slug" element={<Articolo />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
