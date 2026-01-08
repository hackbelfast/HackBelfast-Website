import { Link } from 'react-router-dom'

const Teapot = () => {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Animated gradient background blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-green-500/20 to-teal-500/20 blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tl from-cyan-500/20 to-green-500/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Teapot Emoji */}
        <div className="relative mb-8 flex justify-center">
          <div className="text-[10rem] animate-bounce">
            🫖
          </div>
        </div>

        {/* 418 Number */}
        <div className="relative mb-8">
          <h1 className="text-[8rem] md:text-[12rem] font-bold leading-none">
            <span className="bg-gradient-to-r from-green-400 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
              418
            </span>
          </h1>
        </div>

        {/* Error message */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          I'm a Teapot
        </h2>
        <p className="text-lg md:text-xl text-gray-400 mb-4 max-w-lg mx-auto">
          You've discovered the legendary HTTP 418 status code! This server refuses to brew coffee because it is, permanently, a teapot.
        </p>
        <p className="text-sm text-gray-500 mb-8 max-w-md mx-auto">
          Easter egg achievement unlocked! This is a real HTTP status code from RFC 2324 (1998 April Fools' joke). Absolute legend behaviour if you found this organically.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-400 via-teal-500 to-cyan-500 text-white font-bold rounded-lg hover:scale-105 transition-transform duration-200 shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>Brew Some Code Instead</span>
          </Link>

          <Link
            to="/tracks"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-teal-500 text-white font-bold rounded-lg hover:bg-teal-500/10 hover:scale-105 transition-all duration-200"
          >
            <span>View Tracks</span>
          </Link>
        </div>

        {/* Fun facts about 418 */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl mx-auto">
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
            <div className="text-3xl mb-2">🎭</div>
            <h3 className="font-bold text-sm mb-1">April Fools'</h3>
            <p className="text-xs text-gray-500">Created as a joke in 1998 for Hyper Text Coffee Pot Control Protocol</p>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
            <div className="text-3xl mb-2">📜</div>
            <h3 className="font-bold text-sm mb-1">RFC 2324</h3>
            <p className="text-xs text-gray-500">Official IETF document defining the HTCPCP protocol</p>
          </div>
        </div>

        {/* Subtle hint */}
        <p className="mt-8 text-sm text-gray-600">
          Error Code: IM_A_TEAPOT | HackBelfast 2026 🫖
        </p>
      </div>
    </div>
  )
}

export default Teapot