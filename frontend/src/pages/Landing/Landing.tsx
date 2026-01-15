import { Link } from 'react-router-dom'
import CountdownTimer from './components/Countdown'
import TrackCard from './components/Tracks'
import logo from "../../assets/HackBelfast_logo.png";
import FAQs from "./components/FAQ"

const Landing = () => {
  const tracks = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Finance/Fintech',
      description: 'Build innovative financial technology solutions, from payment systems to trading platforms to personal finance apps.',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'AI & Machine Learning',
      description: 'Harness the power of artificial intelligence, LLMs, computer vision, and NLP to create intelligent applications that solve real-world problems.',
      gradient: 'from-pink-500 to-purple-500'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'MedTech',
      description: 'Innovate in healthcare technology with solutions for patient care, diagnostics, health monitoring, and medical data management.',
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Sustainability',
      description: 'Create solutions addressing climate change, renewable energy, waste management, or environmental conservation for a sustainable future.',
      gradient: 'from-green-400 to-emerald-500'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section with Logo */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        {/* Animated background blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-yellow-500/20 via-orange-500/20 to-pink-500/20 blur-3xl animate-pulse" />
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-pink-500/20 via-purple-500/20 to-indigo-500/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img 
              src={logo} 
              alt="HackBelfast Logo" 
              className="h-32 md:h-40 w-auto"
            />
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              HackBelfast
            </span>
          </h1>

          <p className="text-2xl md:text-3xl text-gray-300 mb-4">
            7-8 March 2026
          </p>

          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Northern Ireland's biggest hackathon bringing together students from across the island for 36 hours of innovation, collaboration, and competition.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/auth"
              className="px-8 py-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-white font-bold rounded-lg hover:scale-105 transition-transform duration-200 shadow-lg text-lg"
            >
              Register Now
            </Link>
            <Link
              to="/tracks"
              className="px-8 py-4 border-2 border-pink-500 text-white font-bold rounded-lg hover:bg-pink-500/10 hover:scale-105 transition-all duration-200 text-lg"
            >
              View Tracks
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-lg p-4">
              <div className="flex justify-center mb-2">
                <svg className="w-8 h-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                36hrs
              </div>
              <div className="text-sm text-gray-400">Duration</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-lg p-4">
              <div className="flex justify-center mb-2">
                <svg className="w-8 h-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                4
              </div>
              <div className="text-sm text-gray-400">Tracks</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-lg p-4">
              <div className="flex justify-center mb-2">
                <svg className="w-8 h-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                200+
              </div>
              <div className="text-sm text-gray-400">Participants</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-lg p-4">
              <div className="flex justify-center mb-2">
                <svg className="w-8 h-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
                10+
              </div>
              <div className="text-sm text-gray-400">Universities</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-gradient-to-b from-pink-500 to-purple-500 rounded-full" />
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <CountdownTimer />
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What is <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">HackBelfast?</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We are planning to organize a hackathon in Belfast, bringing together students from across the island of Ireland. 
              The hackathon will be general rather than niche-focused to appeal to a wider audience, 
              with 4-5 different tracks so students from different backgrounds and interests can get involved.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-pink-500/50 transition-colors">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">General Focus</h3>
              <p className="text-gray-400 text-center">
                Unlike niche hackathons, we welcome diverse projects to maximize participation and encourage innovation across multiple domains.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-pink-500/50 transition-colors">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Cross-University</h3>
              <p className="text-gray-400 text-center">
                Connect with talented students from universities across Ireland, forming teams with diverse perspectives and skills.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-pink-500/50 transition-colors">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">VCIC-Style Judging</h3>
              <p className="text-gray-400 text-center">
                Professional judging inspired by Venture Capital Investment Competition, with multiple rounds evaluating technical execution and business viability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tracks Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 text-transparent bg-clip-text">
            Choose Your Track
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pick the track that matches your interests and skills. Each track has dedicated mentors, resources, and prizes!
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {tracks.map((track, index) => (
            <TrackCard key={index} {...track} />
          ))}
        </div>
        <div className="text-center">
          <Link
            to="/tracks"
            className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-200 transition-colors text-lg font-semibold"
          >
            Learn More About Tracks
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* VCIC Callout Section for Finance Students */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-yellow-900/30 via-orange-900/30 to-amber-900/30 rounded-3xl p-12 border-2 border-yellow-500/40 backdrop-blur-sm overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <svg className="w-12 h-12 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-300 to-orange-300 text-transparent bg-clip-text">
                  Finance Students: Special Track
                </h2>
              </div>

              <p className="text-xl text-yellow-100/90 mb-6 leading-relaxed">
                If you're competing, you'll experience a unique judging format 
                inspired by the <strong>Venture Capital Investment Competition (VCIC)</strong>.
              </p>

              <div className="bg-slate-900/40 rounded-xl p-6 mb-6 border border-yellow-700/30">
                <h3 className="text-2xl font-bold text-yellow-300 mb-4">What's Different?</h3>
                <ul className="space-y-3 text-gray-200">
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 text-xl">•</span>
                    <span>Judges will think like <strong>venture capitalists</strong>, evaluating both technical execution and investment potential</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 text-xl">•</span>
                    <span>You'll pitch your project as a <strong>fundable startup</strong>, not just a prototype</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 text-xl">•</span>
                    <span>Focus on <strong>market opportunity, business model, and scalability</strong> alongside your tech</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/vcic"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-slate-900 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/50"
                >
                  Learn More About Judging
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  to="/tracks"
                  className="inline-flex items-center justify-center gap-2 bg-slate-800/80 hover:bg-slate-700/80 text-yellow-300 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 border-2 border-yellow-500/30 hover:border-yellow-500/50"
                >
                  View All Tracks
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FAQs />

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">Build Something Amazing?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join us on 7-8 March 2026 for 36 hours of non-stop innovation, collaboration, and fun!
          </p>
          <Link
            to="/register"
            className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-white text-lg font-bold rounded-lg hover:scale-105 transition-transform duration-200 shadow-lg"
          >
            <span>Register Your Team</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <p className="text-gray-500 mt-6 text-sm">
            Registration closes on TBD 2026
          </p>
        </div>
      </section>
    </div>
  )
}

export default Landing