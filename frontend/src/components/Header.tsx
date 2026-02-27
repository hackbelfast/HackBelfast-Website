import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/HackBelfast_logo.png';

const Header = () => {
  const location = useLocation()
  const useLandingNavbar =
    location.pathname === '/' ||
    location.pathname === '/register' ||
    location.pathname === '/auth'
  const sectionItems = [
    { to: "/#home", label: "Home" },
    { to: "/#tracks", label: "Tracks" },
    { to: "/#sponsors", label: "Sponsors" },
    { to: "/#faq", label: "FAQ" },
    { to: "/#team", label: "Team" },
  ]

  return (
    <header className="relative z-50 bg-transparent pt-0">
      <div className="mx-auto flex max-w-7xl items-center justify-between bg-[linear-gradient(to_bottom,rgba(9,9,11,0.95)_0%,rgba(9,9,11,0.88)_52%,rgba(9,9,11,0.35)_82%,rgba(9,9,11,0)_100%),radial-gradient(ellipse_at_center,rgba(9,9,11,0.92)_0%,rgba(9,9,11,0.75)_62%,rgba(9,9,11,0)_100%)] px-4 py-3 md:py-4">
        {/* Brand - only show logo when NOT on home page */}
        {!useLandingNavbar && (
          <NavLink to="/" className="flex items-center gap-3">
            <img src={logo} alt="HackBelfast Logo" className="h-10 w-auto md:h-11" />
          </NavLink>
        )}

        {/* Desktop nav */}
        <nav className={`hidden items-center gap-6 md:flex ${useLandingNavbar ? 'mx-auto' : 'ml-auto'}`}>
          {sectionItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-base font-medium text-zinc-300 transition hover:text-zinc-100"
            >
              {item.label}
            </Link>
          ))}
          <NavLink
            to="/register"
            className="rounded-lg bg-gradient-to-r from-orange-300 via-pink-300 to-violet-300 px-4 py-2 text-base font-semibold text-zinc-950 transition hover:from-orange-200 hover:via-pink-200 hover:to-violet-200"
          >
            Register
          </NavLink>
        </nav>

        <div className={`flex items-center gap-2 md:hidden ${useLandingNavbar ? 'ml-auto' : ''}`}>
          <Link
            to="/#tracks"
            className="rounded-lg border border-zinc-700 px-3 py-2 text-sm font-medium text-zinc-200"
          >
            Tracks
          </Link>
          <NavLink
            to="/register"
            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-orange-300 via-pink-300 to-violet-300 px-4 py-2 text-base font-semibold text-zinc-950 transition hover:from-orange-200 hover:via-pink-200 hover:to-violet-200"
          >
            Register
          </NavLink>
        </div>
      </div>
    </header>
  )
}

export default Header
