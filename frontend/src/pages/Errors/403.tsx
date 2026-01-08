import { Link } from 'react-router-dom'

const Forbidden = () => {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Animated gradient background blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-red-500/20 to-orange-500/20 blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tl from-pink-500/20 to-red-500/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Lock Icon */}
        <div className="relative mb-8 flex justify-center">
          <svg className="w-32 h-32 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>

        {/* 403 Number */}
        <div className="relative mb-8">
          <h1 className="text-[8rem] md:text-[12rem] font-bold leading-none">
            <span className="bg-gradient-to-r from-red-500 via-orange-500 to-pink-500 bg-clip-text text-transparent">
              403
            </span>
          </h1>
        </div>

        {/* Error message */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Access Forbidden
        </h2>
        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-lg mx-auto">
          Whoa there! This area is more locked down than the judging room during deliberations. You don't have permission to access this page.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-500 via-orange-500 to-pink-500 text-white font-bold rounded-lg hover:scale-105 transition-transform duration-200 shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>Back to Home</span>
          </Link>

          <Link
            to="/register"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-red-500 text-white font-bold rounded-lg hover:bg-red-500/10 hover:scale-105 transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
            <span>Register Instead</span>
          </Link>
        </div>

        {/* Subtle hint */}
        <p className="mt-8 text-sm text-gray-600">
          Error Code: ACCESS_DENIED | HackBelfast 2026
        </p>
      </div>
    </div>
  )
}

export default Forbidden