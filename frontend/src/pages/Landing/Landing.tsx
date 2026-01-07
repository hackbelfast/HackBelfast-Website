import { Link } from 'react-router-dom'
import CountdownTimer from './components/Countdown'
import TrackCard from './components/Tracks'

const Landing = () => {
  const tracks = [
    {
      icon: '💰',
      title: 'Finance/Fintech',
      description: 'Build innovative financial technology solutions, from payment systems to trading platforms to personal finance apps.',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      icon: '🎨',
      title: 'Non-Technical Track',
      description: 'Using no-code and AI tools such as Lovable, perfect for students from all backgrounds to get involved and build without writing a single line of code.',
      gradient: 'from-orange-500 to-pink-500'
    },
    {
      icon: '🤖',
      title: 'AI & Machine Learning',
      description: 'Harness the power of artificial intelligence, LLMs, computer vision, and NLP to create intelligent applications that solve real-world problems.',
      gradient: 'from-pink-500 to-purple-500'
    },
    {
      icon: '🏥',
      title: 'MedTech',
      description: 'Innovate in healthcare technology with solutions for patient care, diagnostics, health monitoring, and medical data management.',
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      icon: '🌱',
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
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-pink-500/20 via-purple-500/20 to-indigo-500/20 blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          {/* Logo placeholder - you can replace with actual logo */}
          <div className="mb-8 flex justify-center">
            <div className="text-8xl md:text-9xl">🚀</div>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              HackBelfast
            </span>
          </h1>

          <p className="text-2xl md:text-3xl text-gray-300 mb-4">
            14-15 February 2026
          </p>

          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Ireland's premier hackathon bringing together students from across the island for 24-36 hours of innovation, collaboration, and competition.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/register"
              className="px-8 py-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-white font-bold rounded-lg hover:scale-105 transition-transform duration-200 shadow-lg text-lg"
            >
              Register Now 🎯
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
              <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                24-36hrs
              </div>
              <div className="text-sm text-gray-400">Duration</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-lg p-4">
              <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                5
              </div>
              <div className="text-sm text-gray-400">Tracks</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-lg p-4">
              <div className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                200+
              </div>
              <div className="text-sm text-gray-400">Participants</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-lg p-4">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
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
              We are planning to organize a hackathon in Belfast, bringing together students from across Ireland. 
              The hackathon will be general rather than niche-focused to appeal to a wider audience, 
              with 4-5 different tracks so students from different backgrounds and interests can get involved.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3">General Focus</h3>
              <p className="text-gray-400">
                Unlike niche hackathons, we welcome diverse projects to maximize participation and encourage innovation across multiple domains.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold mb-3">Cross-University</h3>
              <p className="text-gray-400">
                Connect with talented students from universities across Ireland, forming teams with diverse perspectives and skills.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-3">VCIC-Style Judging</h3>
              <p className="text-gray-400">
                Professional judging inspired by Venture Capital Investment Competition, with multiple rounds evaluating technical execution and business viability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tracks Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Choose Your <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">Track</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Pick the track that matches your interests and skills. Each track has dedicated mentors, resources, and prizes!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {tracks.map((track, index) => (
              <TrackCard
                key={index}
                icon={track.icon}
                title={track.title}
                description={track.description}
                gradient={track.gradient}
              />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/tracks"
              className="inline-block px-8 py-4 border-2 border-purple-500 text-white font-bold rounded-lg hover:bg-purple-500/10 hover:scale-105 transition-all duration-200"
            >
              Learn More About Tracks →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">Build Something Amazing?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join us on 14-15 February 2026 for 24-36 hours of non-stop innovation, collaboration, and fun!
          </p>
          <Link
            to="/register"
            className="inline-block px-10 py-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-white text-lg font-bold rounded-lg hover:scale-105 transition-transform duration-200 shadow-lg"
          >
            Register Your Team 🚀
          </Link>
          <p className="text-gray-500 mt-6 text-sm">
            Registration closes on 10th February 2026
          </p>
        </div>
      </section>
    </div>
  )
}

export default Landing