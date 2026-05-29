import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import { CALENDLY_URL } from '../data/content.js'

const links = [
  { to: '/servizi', label: 'Servizi' },
  { to: '/case-study', label: 'Case study' },
  { to: '/chi-siamo', label: 'Chi siamo' },
  { to: '/insights', label: 'Insights' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-white/90 backdrop-blur">
      <nav className="container-eppi flex h-16 items-center justify-between">
        <Logo />
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm font-medium transition hover:text-gold ${isActive ? 'text-gold' : 'text-navy'}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-gold !px-5 !py-2 text-sm">
            Prenota una call
          </a>
        </div>
        <button
          className="md:hidden p-2 text-navy"
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </nav>
      {open && (
        <div className="border-t border-navy/10 bg-white md:hidden">
          <div className="container-eppi flex flex-col gap-1 py-3">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded px-2 py-2 text-sm font-medium ${isActive ? 'text-gold' : 'text-navy'}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="btn-gold mt-2 text-sm">
              Prenota una call
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
