import { Link } from 'react-router-dom'

const Judging = () => {
  const judgingCriteria = [
    {
      title: 'Technical Execution',
      weight: '30%',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      description: 'Quality of code, architecture, and technical implementation',
      points: [
        'Code quality and organization',
        'Technical complexity and innovation',
        'Use of appropriate technologies',
        'Scalability and performance',
        'Security considerations'
      ],
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'Innovation & Creativity',
      weight: '25%',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      description: 'Originality of concept and creative problem-solving approach',
      points: [
        'Novelty of the solution',
        'Creative use of technology',
        'Unique approach to the problem',
        'Design and user experience',
        'Wow factor and polish'
      ],
      gradient: 'from-orange-500 to-pink-500'
    },
    {
      title: 'Business Viability',
      weight: '20%',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      description: 'Market potential and path to real-world implementation',
      points: [
        'Clear value proposition',
        'Market opportunity and size',
        'Revenue model potential',
        'Go-to-market strategy',
        'Competitive advantage'
      ],
      gradient: 'from-pink-500 to-purple-500'
    },
    {
      title: 'Impact & Purpose',
      weight: '15%',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      description: 'Real-world problem solving and potential positive impact',
      points: [
        'Addresses a genuine problem',
        'Potential social or environmental impact',
        'Target user benefits',
        'Feasibility of deployment',
        'Long-term sustainability'
      ],
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Presentation & Demo',
      weight: '10%',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      ),
      description: 'Communication clarity and demo effectiveness',
      points: [
        'Clear problem articulation',
        'Solution explanation',
        'Live demo quality',
        'Presentation skills',
        'Q&A responses'
      ],
      gradient: 'from-indigo-500 to-blue-500'
    }
  ]

  const judgingRounds = [
    {
      round: 'Round 1',
      title: 'Initial Screening',
      time: '2 minutes per team',
      description: 'Quick pitch to all judges. Teams demonstrate their project and answer basic questions.',
      format: 'All teams present to the full judging panel in quick succession.'
    },
    {
      round: 'Round 2',
      title: 'Technical Deep Dive',
      time: '5 minutes per team',
      description: 'Top 50% of teams advance. Detailed technical walkthrough and code review with technical judges.',
      format: 'Teams are split across technical judges for in-depth evaluation.'
    },
    {
      round: 'Round 3',
      title: 'Final Pitch',
      time: '10 minutes per team',
      description: 'Top 10 teams present to the full panel. VCIC-style evaluation combining technical merit and business viability.',
      format: '7 min pitch + 3 min Q&A, followed by judge deliberation.'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-950 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Judging
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our judging process is inspired by Venture Capital Investment Competitions (VCIC), 
            evaluating both technical execution and business viability. Here's how we assess your project.
          </p>
        </div>

        {/* VCIC Callout */}
        <div className="mb-16 bg-gradient-to-r from-purple-900/20 to-indigo-900/20 border border-purple-500/30 rounded-xl p-8">
          <div className="flex items-start gap-4">
            <svg className="w-12 h-12 text-purple-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <div>
              <h2 className="text-2xl font-bold mb-3 text-purple-300">What is VCIC-Style Judging?</h2>
              <p className="text-gray-300 mb-4">
                The Venture Capital Investment Competition (VCIC) is a global competition where students act as VCs. 
                We've adapted this framework for HackBelfast, meaning judges evaluate projects like investors would - 
                looking at technical feasibility, market opportunity, team execution, and scalability.
              </p>
              <p className="text-gray-300">
                This means your pitch should answer: <span className="text-purple-400 font-semibold">Is this technically sound? 
                Does it solve a real problem? Can it become a viable product?</span>
              </p>
            </div>
          </div>
        </div>

        {/* Judging Criteria */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Evaluation Criteria
          </h2>

          <div className="space-y-8">
            {judgingCriteria.map((criteria, index) => (
              <div key={index} className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-pink-500/30 transition-all">
                {/* Header */}
                <div className={`bg-gradient-to-r ${criteria.gradient} p-[2px]`}>
                  <div className="bg-gray-900 p-6">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                      <div className="text-white">
                        {criteria.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                          <h3 className="text-2xl font-bold">{criteria.title}</h3>
                          <span className={`inline-block px-4 py-1 rounded-full text-sm font-bold bg-gradient-to-r ${criteria.gradient} text-white`}>
                            {criteria.weight}
                          </span>
                        </div>
                        <p className="text-gray-400">{criteria.description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Points */}
                <div className="p-6">
                  <h4 className="font-semibold mb-3 text-gray-300">What judges look for:</h4>
                  <ul className="space-y-2">
                    {criteria.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-300">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Judging Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Judging Rounds
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {judgingRounds.map((round, index) => (
              <div key={index} className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-pink-500/30 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">{round.round}</div>
                    <h3 className="text-xl font-bold">{round.title}</h3>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-purple-900/30 border border-purple-500/30 rounded-full text-sm text-purple-300 font-medium">
                    {round.time}
                  </span>
                </div>

                <p className="text-gray-400 text-sm mb-3">{round.description}</p>
                <p className="text-gray-500 text-xs">{round.format}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tips Section */}
        <div className="mb-16 bg-gray-900 border border-gray-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Tips for Success</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">✅</span>
                <div>
                  <h4 className="font-bold mb-1">Do: Focus on the problem</h4>
                  <p className="text-sm text-gray-400">Clearly articulate the pain point your solution addresses</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✅</span>
                <div>
                  <h4 className="font-bold mb-1">Do: Show working code</h4>
                  <p className="text-sm text-gray-400">Live demos are more impressive than slides - even if buggy!</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✅</span>
                <div>
                  <h4 className="font-bold mb-1">Do: Know your numbers</h4>
                  <p className="text-sm text-gray-400">Market size, user acquisition costs, potential revenue</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✅</span>
                <div>
                  <h4 className="font-bold mb-1">Do: Practice your pitch</h4>
                  <p className="text-sm text-gray-400">Time yourself and rehearse with your team</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">❌</span>
                <div>
                  <h4 className="font-bold mb-1">Don't: Oversell the tech</h4>
                  <p className="text-sm text-gray-400">Judges can tell - be honest about limitations</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">❌</span>
                <div>
                  <h4 className="font-bold mb-1">Don't: Ignore edge cases</h4>
                  <p className="text-sm text-gray-400">Acknowledge technical debt and future improvements</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">❌</span>
                <div>
                  <h4 className="font-bold mb-1">Don't: Use jargon excessively</h4>
                  <p className="text-sm text-gray-400">Explain your tech clearly - judges come from diverse backgrounds</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">❌</span>
                <div>
                  <h4 className="font-bold mb-1">Don't: Wing the Q&A</h4>
                  <p className="text-sm text-gray-400">Prepare for common questions about scalability, monetization, competition</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gray-900 border border-gray-800 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Compete?</h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Now that you understand how we judge, pick your track and start building something amazing!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/tracks"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-purple-500 text-white font-bold rounded-lg hover:bg-purple-500/10 hover:scale-105 transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <span>View Tracks</span>
            </Link>
            <Link
              to="/register"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-white font-bold rounded-lg hover:scale-105 transition-transform duration-200 shadow-lg"
            >
              <span>Register Your Team</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Judging