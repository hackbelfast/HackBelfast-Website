const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-20 mt-20 border-t border-zinc-700 bg-zinc-950">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <h3 className="mb-4 text-xl font-semibold text-zinc-100">
            HackBelfast
          </h3>
          <p className="text-sm text-zinc-400">
            Northern Ireland's premier student hackathon bringing together
            founders, builders, and operators.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-semibold text-zinc-100">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm text-zinc-400">
            <li>
              <a href="/register" className="transition hover:text-zinc-100">
                Register
              </a>
            </li>
            <li>
              <a
                href="https://calendly.com/ahmednazzal1710/30min"
                className="transition hover:text-zinc-100"
              >
                Sponsor
              </a>
            </li>
            <li>
              <a href="/code-of-conduct" className="transition hover:text-zinc-100">
                Code of Conduct
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-semibold text-zinc-100">
            Socials
          </h4>
          <ul className="space-y-2 text-sm text-zinc-400">
            <li>
              <a
                href="https://discord.gg/FK9KUZyHC7"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-zinc-100"
              >
                Discord
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/hackbelfast"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-zinc-100"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/hackbelfast"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-zinc-100"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-zinc-800 py-6 text-center text-sm text-zinc-500">
        &copy; {year} HackBelfast. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
