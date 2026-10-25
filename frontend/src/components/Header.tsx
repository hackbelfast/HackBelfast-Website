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
    { to: "/#about", label: "About" },
    { to: "/#sponsors", label: "Sponsors" },
    { to: "/#faq", label: "FAQ" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-0 outline-none">
      <div
        className={`mx-auto flex items-center justify-between px-4 py-3 transition-all duration-500 outline-none border ${
          isScrolled
            ? "w-3/4 rounded-2xl border-white/10 bg-[#191919]/70 backdrop-blur-xl shadow-2xl my-4 mx-auto md:py-4"
            : "w-full border-transparent bg-[#191919] md:py-4"
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

        {useLandingNavbar && (
          <nav
            className="hidden items-center gap-6 md:flex absolute left-1/2 transform -translate-x-1/2"
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
        )}

      </div>
    </header>
  );
};

export default Header;
