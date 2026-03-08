import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/HackBelfast_logo.png";

const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const useLandingNavbar =
    location.pathname === "/" ||
    location.pathname === "/register" ||
    location.pathname === "/auth";
  const sectionItems = [
    { to: "/#home", label: "Home" },
    { to: "/#tracks", label: "Tracks" },
    { to: "/#sponsors", label: "Sponsors" },
    { to: "/#faq", label: "FAQ" },
    { to: "/#team", label: "Team" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-0 outline-none">
      <div
        className={`mx-auto flex items-center justify-between px-4 py-3 transition-all duration-500 outline-none border ${
          isScrolled
            ? "w-3/4 rounded-2xl border-zinc-700/30 bg-zinc-950/40 backdrop-blur-xl shadow-2xl my-4 mx-auto md:py-4"
            : "w-full border-transparent bg-[linear-gradient(to_bottom,rgba(9,9,11,0.95)_0%,rgba(9,9,11,0.88)_52%,rgba(9,9,11,0.35)_82%,rgba(9,9,11,0)_100%),radial-gradient(ellipse_at_center,rgba(9,9,11,0.92)_0%,rgba(9,9,11,0.75)_62%,rgba(9,9,11,0)_100%)] md:py-4"
        }`}
      >
        <NavLink to="/" className="flex items-center gap-3 flex-shrink-0">
          <img
            src={logo}
            alt="HackBelfast Logo"
            className="h-10 w-auto md:h-11"
          />
        </NavLink>

        {!useLandingNavbar && (
          <span className="text-zinc-300 font-medium text-sm md:text-base hidden sm:inline">
            HackBelfast
          </span>
        )}

        <nav
          className={`hidden items-center gap-6 md:flex absolute left-1/2 transform -translate-x-1/2`}
        >
          {sectionItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-base font-medium text-zinc-300 transition hover:text-zinc-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <NavLink
            to="/register"
            className="hidden md:inline-block rounded-lg bg-gradient-to-r from-orange-300 via-pink-300 to-violet-300 px-4 py-2 text-base font-semibold text-zinc-950 transition hover:from-orange-200 hover:via-pink-200 hover:to-violet-200"
          >
            Register
          </NavLink>

          <Link
            to="/#tracks"
            className="rounded-lg border border-zinc-700 px-3 py-2 text-sm font-medium text-zinc-200 md:hidden"
          >
            Tracks
          </Link>
          <NavLink
            to="/register"
            className="inline-flex md:hidden items-center justify-center rounded-lg bg-gradient-to-r from-orange-300 via-pink-300 to-violet-300 px-4 py-2 text-base font-semibold text-zinc-950 transition hover:from-orange-200 hover:via-pink-200 hover:to-violet-200"
          >
            Register
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
