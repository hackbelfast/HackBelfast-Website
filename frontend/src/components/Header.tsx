import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import logo from '../assets/HackBelfast_logo.png'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { path: '/tracks', label: 'Tracks' },
    { path: '/schedule', label: 'Schedule' },
    { path: '/judging', label: 'Judging' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur border-b border-gray-800">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:py-4">
        {/* Brand */}
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="HackBelfast Logo"
            className="h-10 w-auto md:h-12"
          />
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                [
                  'text-sm font-medium transition-colors',
                  isActive
                    ? 'text-white'
                    : 'text-gray-300 hover:text-white',
                ].join(' ')
              }
            >
              {item.label}
            </NavLink>
          ))}

          <NavLink
            to="/register"
            className="rounded-lg bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 px-4 py-2 text-sm font-semibold text-white shadow-md hover:scale-105 transition-transform"
          >
            Register
          </NavLink>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:bg-gray-800 hover:text-white md:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className="sr-only">Open main menu</span>
          {menuOpen ? (
            <span className="text-2xl">✕</span>
          ) : (
            <span className="text-2xl">☰</span>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="border-t border-gray-800 bg-gray-900 md:hidden">
          <div className="space-y-1 px-4 py-3">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  [
                    'block rounded-md px-3 py-2 text-base font-medium',
                    isActive
                      ? 'bg-gray-800 text-white'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white',
                  ].join(' ')
                }
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink
              to="/register"
              onClick={() => setMenuOpen(false)}
              className="mt-2 block rounded-md bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 px-3 py-2 text-center text-base font-semibold text-white"
            >
              Register
            </NavLink>
          </div>
        </nav>
      )}
    </header>
  )
}

export default Header