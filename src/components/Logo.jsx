import { Link } from 'react-router-dom'

export default function Logo({ light = false }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 group">
      <span className="flex h-9 w-9 items-center justify-center rounded-md bg-gold font-serif text-xl font-bold text-navy">
        e
      </span>
      <span className="leading-none">
        <span className={`block font-serif text-lg font-bold ${light ? 'text-white' : 'text-navy'}`}>
          Eppi
        </span>
        <span className={`block text-[10px] font-medium uppercase tracking-[0.16em] ${light ? 'text-gold' : 'text-gold'}`}>
          Be happy with AI
        </span>
      </span>
    </Link>
  )
}
