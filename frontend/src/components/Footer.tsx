const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-20 mt-20 border-t border-zinc-700 bg-zinc-950">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <h3 className="mb-4 text-xl font-semibold text-zinc-100">HackBelfast</h3>
          <p className="text-sm text-zinc-400">
            Northern Ireland's premier student hackathon bringing together founders, builders, and operators.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-semibold text-zinc-100">Quick Links</h4>
          <ul className="space-y-2 text-sm text-zinc-400">
            <li><a href="/tracks" className="transition hover:text-zinc-100">Tracks</a></li>
            <li><a href="/judging" className="transition hover:text-zinc-100">Judging</a></li>
            <li><a href="/about" className="transition hover:text-zinc-100">About</a></li>
            <li><a href="/auth" className="transition hover:text-zinc-100">Register</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-semibold text-zinc-100">Event Details</h4>
          <p className="mb-4 text-sm text-zinc-400">
            7-8 March 2026
            <br />
            Queen's University Belfast
            <br />
            24-36 Hour Hackathon
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/company/hack-belfast"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="HackBelfast on LinkedIn"
              className="text-zinc-400 transition hover:text-zinc-100"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/hack-belfast"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="HackBelfast on Instagram"
              className="text-zinc-400 transition hover:text-zinc-100"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-zinc-800 py-6 text-center text-sm text-zinc-500">
        &copy; {year} HackBelfast. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
