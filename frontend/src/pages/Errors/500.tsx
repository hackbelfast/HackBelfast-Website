import { Link } from 'react-router-dom'

const ServerError = () => {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Animated gradient background blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tl from-blue-500/20 to-purple-500/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Fire/Error Icon */}
        <div className="relative mb-8 flex justify-center">
          <svg className="w-32 h-32 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>

        {/* 500 Number */}
        <div className="relative mb-8">
          <h1 className="text-[8rem] md:text-[12rem] font-bold leading-none">
            <span className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
              500
            </span>
          </h1>

          {/* Glitch effect overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20 mix-blend-overlay">
            <div className="text-[8rem] md:text-[12rem] font-bold text-purple-500 blur-sm animate-pulse">
              500
            </div>
          </div>
        </div>

        {/* Error message */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Server Error
        </h2>
        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-lg mx-auto">
          Our servers are having a moment... probably debugging at 3am on too much coffee. We're on it!
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-white font-bold rounded-lg hover:scale-105 transition-transform duration-200 shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span>Try Again</span>
          </button>

          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-purple-500 text-white font-bold rounded-lg hover:bg-purple-500/10 hover:scale-105 transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Developer humor */}
        <div className="mt-12 bg-gray-900/50 border border-gray-800 rounded-lg p-6 text-left max-w-lg mx-auto">
          <div className="flex items-start gap-3 mb-3">
            <span className="text-2xl">💻</span>
            <div>
              <h3 className="font-mono text-sm text-purple-400 mb-2">Stack Trace (kidding)</h3>
              <pre className="text-xs text-gray-500 font-mono overflow-x-auto">
                {`Error: Cannot read property 'hackathon' of undefined
  at organizeEvent (HackBelfast.js:42:0)
  at deployWebsite (Vercel.ts:69:10)
  at caffeine.overload (Developer.tsx:404)`}
              </pre>
            </div>
          </div>
        </div>

        {/* Subtle hint */}
        <p className="mt-8 text-sm text-gray-600">
          Error Code: INTERNAL_SERVER_ERROR | HackBelfast 2026
        </p>
      </div>
    </div>
  )
}

export default ServerError