const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent mb-4">
              HackBelfast
            </h3>
            <p className="text-gray-400 text-sm">
              Ireland's premier hackathon bringing together innovators from across the island.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="/tracks" className="hover:text-pink-500 transition-colors">
                  Tracks
                </a>
              </li>
              <li>
                <a href="/schedule" className="hover:text-pink-500 transition-colors">
                  Schedule
                </a>
              </li>
              <li>
                <a href="/judging" className="hover:text-pink-500 transition-colors">
                  Judging
                </a>
              </li>
              <li>
                <a href="/register" className="hover:text-pink-500 transition-colors">
                  Register
                </a>
              </li>
            </ul>
          </div>

          {/* Event Details & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Event Details</h4>
            <p className="text-gray-400 text-sm mb-4">
              📅 14-15 February 2026<br/>
              📍 Belfast, Northern Ireland<br/>
              ⏱️ 24-36 Hour Hackathon
            </p>

            <div className="flex gap-4 mt-4">
              <a
                href="https://www.linkedin.com/company/hack-belfast"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="HackBelfast on LinkedIn"
                className="text-gray-400 hover:text-pink-500 transition-colors"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.2 8.98h4.56V24H.2V8.98zM8.98 8.98h4.37v2.05h.06c.61-1.16 2.11-2.39 4.34-2.39 4.64 0 5.5 3.05 5.5 7.02V24h-4.56v-6.42c0-1.53-.03-3.5-2.13-3.5-2.13 0-2.46 1.66-2.46 3.39V24H8.98V8.98z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/hack-belfast"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="HackBelfast on Instagram"
                className="text-gray-400 hover:text-pink-500 transition-colors"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M12 7.2a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {year} HackBelfast. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer