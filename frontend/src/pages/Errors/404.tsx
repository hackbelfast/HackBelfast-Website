import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Animated gradient background blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tl from-pink-500/20 to-purple-500/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* 404 Number */}
        <div className="relative mb-8">
          <h1 className="text-[12rem] md:text-[16rem] font-bold leading-none">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              404
            </span>
          </h1>

          {/* Glitch effect overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-30 mix-blend-overlay">
            <div className="text-[12rem] md:text-[16rem] font-bold text-pink-500 blur-sm animate-pulse">
              404
            </div>
          </div>
        </div>

        {/* Error message */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Page Not Found
        </h2>
        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-lg mx-auto">
          Looks like this page got lost in the hackathon chaos. Maybe it's still being built by a sleep-deprived team somewhere?
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-white font-bold rounded-lg hover:scale-105 transition-transform duration-200 shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>Back to Home</span>
          </Link>

          <Link
            to="/tracks"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-purple-500 text-white font-bold rounded-lg hover:bg-purple-500/10 hover:scale-105 transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
            <span>View Tracks</span>
          </Link>
        </div>

        {/* Fun status codes */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-xl mx-auto">
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
            <div className="text-2xl font-bold text-yellow-500 mb-1">418</div>
            <div className="text-xs text-gray-500">I'm a teapot</div>
          </div>
          <div className="bg-gray-900/50 border border-pink-500 rounded-lg p-4">
            <div className="text-2xl font-bold text-pink-500 mb-1">404</div>
            <div className="text-xs text-gray-500">Not Found</div>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
            <div className="text-2xl font-bold text-purple-500 mb-1">500</div>
            <div className="text-xs text-gray-500">Server Error</div>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
            <div className="text-2xl font-bold text-orange-500 mb-1">403</div>
            <div className="text-xs text-gray-500">Forbidden</div>
          </div>
        </div>

        {/* Subtle hint */}
        <p className="mt-8 text-sm text-gray-600">
          Error Code: PAGE_NOT_FOUND | HackBelfast 2026
        </p>
      </div>
    </div>
  )
}

export default NotFound