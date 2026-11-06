import { useState } from 'react'
import { DiCode } from 'react-icons/di';
import { NavLink, Link } from "react-router-dom";
import { FiMenu, FiX } from 'react-icons/fi'

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { to: '/', label: 'Home', end: true },
    { to: '/about', label: 'About Me' },
    { to: '/projects', label: 'Projects' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/50">
      <nav className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-yellow-700 to-red-800 border border-slate-700 flex items-center justify-center">
              <DiCode />
            </div>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-6">
          {links.map(l => (
            <NavLink key={l.to} to={l.to} end={l.end}
              className={({ isActive }) =>
                isActive ? 'text-white font-medium' : 'text-slate-400 hover:text-slate-300'}>
              {l.label}
            </NavLink>
          ))}
        </div>

        {/* Hamburger — visible below md only */}
        <button
          className="md:hidden text-white"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div id="mobile-menu" className="md:hidden px-6 pb-4 flex flex-col gap-3">
          {links.map(l => (
            <NavLink key={l.to} to={l.to} end={l.end}
              onClick={() => setIsOpen(false)}   // close on selection!
              className={({ isActive }) =>
                isActive ? 'text-white font-medium' : 'text-slate-400 hover:text-slate-300'}>
              {l.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  )
}
