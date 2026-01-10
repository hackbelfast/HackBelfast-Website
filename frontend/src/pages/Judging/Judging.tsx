import { Link } from 'react-router-dom'
import { useState } from 'react'

const Judging = () => {
  const [activeView, setActiveView] = useState<'hacker' | 'judge'>('hacker')

  const judgingCriteria = [
    {
      title: 'Technical Execution',
      weight: '30%',
      icon: null,
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
      icon: null,
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
      icon: null,
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
      icon: null,
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
      icon: null,
      description: 'Communication clarity and demo effectiveness',
      points: [
        'Clear problem articulation',
        'Solution explanation',
        'Live demo quality',
        'Presentation skills',
        'Q&A responses'
      ],
      gradient: 'from-indigo-500 to-purple-600'
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
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-12 -left-12 w-full h-full bg-gradient-to-br from-yellow-500/20 via-orange-500/20 to-pink-500/20 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-12 -right-12 w-full h-full bg-gradient-to-tl from-pink-500/20 via-purple-500/20 to-indigo-500/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            VCIC-Style Investment Evaluation
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Our judging framework mirrors the Venture Capital Investment Competition (VCIC) — the world's largest VC competition where students become investors. HackBelfast adopts this rigorous, finance-forward methodology to assess your venture's technical execution and commercial viability.
          </p>

          {/* View Switcher */}
          <div className="flex justify-center gap-4 mt-10">
            <button
              onClick={() => setActiveView('hacker')}
              className={`px-8 py-3 rounded-lg font-bold transition-all ${
                activeView === 'hacker'
                  ? 'bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 border border-gray-700'
              }`}
            >
              For Hackers
            </button>
            <button
              onClick={() => setActiveView('judge')}
              className={`px-8 py-3 rounded-lg font-bold transition-all ${
                activeView === 'judge'
                  ? 'bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 border border-gray-700'
              }`}
            >
              For Judges
            </button>
          </div>
        </div>
      </section>

      {/* HACKER VIEW */}
      {activeView === 'hacker' && (
        <>
          {/* Understanding VCIC Section */}
          <section className="px-6 py-16 bg-gray-900/50">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                What Makes This Different?
              </h2>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  Unlike traditional hackathons where judges just check if your project works, HackBelfast uses a <span className="text-pink-500 font-semibold">VCIC-inspired framework</span>. This means judges will evaluate your project like venture capitalists evaluate startups seeking funding.
                </p>
                <p>
                  You'll be assessed not just on <span className="text-yellow-400 font-semibold">technical execution</span>, but also on <span className="text-orange-500 font-semibold">market opportunity</span>, <span className="text-pink-500 font-semibold">business viability</span>, and <span className="text-purple-500 font-semibold">real-world impact</span>. Think of it as pitching to investors who want to fund your idea — because that's exactly what our finance student judges will be thinking.
                </p>
                <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border border-yellow-500/30 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-yellow-400 mb-3">What is VCIC?</h4>
                  <p className="text-gray-300">
                    The Venture Capital Investment Competition (VCIC) is a global competition where students from top business schools act as VCs evaluating real startups. At HackBelfast, we've adapted this framework so finance students from <span className="text-yellow-400 font-semibold">Irish Student Managed Fund (ISMF)</span> and <span className="text-orange-400 font-semibold">Queen's Student Managed Fund (QSMF)</span> will judge your projects using the same lens investors use when deciding what to fund.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Investment Evaluation Criteria */}
          <section className="px-6 py-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                How You'll Be Evaluated
              </h2>
              <p className="text-center text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
                Your project will be scored across five categories with different weights. Here's what judges will be looking for:
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {judgingCriteria.map((criteria, index) => (
                  <div
                    key={index}
                    className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-pink-500/30 transition-all hover:transform hover:scale-105"
                  >
                    <div className={`w-16 h-16 mb-4 rounded-lg bg-gradient-to-r ${criteria.gradient} flex items-center justify-center text-white font-bold text-2xl`}>
                      {criteria.icon || index + 1}
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-white">{criteria.title}</h3>
                      <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                        {criteria.weight}
                      </span>
                    </div>
                    <p className="text-gray-400 mb-4 text-sm">{criteria.description}</p>
                    <ul className="space-y-2">
                      {criteria.points.map((point, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-start">
                          <span className="text-pink-500 mr-2">→</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Evaluation Process */}
          <section className="px-6 py-16 bg-gray-900/50">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                The Judging Process
              </h2>
              <p className="text-center text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
                You'll go through three rounds of evaluation. Each round narrows down the field until we find the most fundable ventures:
              </p>

              <div className="space-y-6">
                {judgingRounds.map((round, index) => (
                  <div
                    key={index}
                    className="bg-gray-900 border border-gray-800 p-8 rounded-xl hover:border-pink-500/30 transition-all"
                  >
                    <div className="flex flex-wrap items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full font-bold text-sm">
                          {round.round}
                        </span>
                        <h3 className="text-2xl font-bold text-white">{round.title}</h3>
                      </div>
                      <span className="text-pink-500 font-semibold">{round.time}</span>
                    </div>
                    <p className="text-gray-300 mb-3">{round.description}</p>
                    <p className="text-gray-400 text-sm">
                      <span className="text-yellow-400 font-semibold">Format:</span> {round.format}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pitch Tips */}
          <section className="px-6 py-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                How to Pitch Like a Fundable Founder
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-yellow-500/50 transition-all">
                  <h4 className="text-lg font-bold text-yellow-400 mb-3">Articulate the Opportunity</h4>
                  <p className="text-gray-300 text-sm">
                    Lead with the market failure or inefficiency. Quantify the pain point with data — judges need to see compelling unit economics and addressable market size.
                  </p>
                </div>

                <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-orange-500/50 transition-all">
                  <h4 className="text-lg font-bold text-orange-500 mb-3">Demo &gt; Deck</h4>
                  <p className="text-gray-300 text-sm">
                    Live product demonstrations signal execution capability. Even a buggy prototype demonstrates technical validation and de-risks the investment thesis.
                  </p>
                </div>

                <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-pink-500/50 transition-all">
                  <h4 className="text-lg font-bold text-pink-500 mb-3">Know Your Numbers</h4>
                  <p className="text-gray-300 text-sm">
                    Be prepared to defend TAM/SAM/SOM, CAC:LTV ratios, gross margins, contribution margins, payback periods, and projected burn rate. Finance-focused judges will probe your assumptions.
                  </p>
                </div>

                <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-purple-500/50 transition-all">
                  <h4 className="text-lg font-bold text-purple-500 mb-3">Rehearse Under Pressure</h4>
                  <p className="text-gray-300 text-sm">
                    Time-box your delivery and simulate Q&A sessions. The best founders know their metrics cold and can pivot narratives based on investor questions.
                  </p>
                </div>

                <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-indigo-500/50 transition-all">
                  <h4 className="text-lg font-bold text-indigo-500 mb-3">Be Intellectually Honest</h4>
                  <p className="text-gray-300 text-sm">
                    Acknowledge risks, technical debt, and competitive threats transparently. Investors value founders who understand their blind spots and have mitigation strategies.
                  </p>
                </div>

                <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-yellow-500/50 transition-all">
                  <h4 className="text-lg font-bold text-yellow-400 mb-3">Show Traction or Validation</h4>
                  <p className="text-gray-300 text-sm">
                    Early user acquisition, letters of intent, pilot agreements, or beta waitlists signal demand validation. Metrics trump vision in VC diligence.
                  </p>
                </div>

                <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-orange-500/50 transition-all">
                  <h4 className="text-lg font-bold text-orange-500 mb-3">Communicate Clearly Across Disciplines</h4>
                  <p className="text-gray-300 text-sm">
                    Judges span technical and commercial backgrounds. Translate complex architectures into business value drivers — explain how tech moats create pricing power or network effects.
                  </p>
                </div>

                <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-pink-500/50 transition-all">
                  <h4 className="text-lg font-bold text-pink-500 mb-3">Anticipate Due Diligence Questions</h4>
                  <p className="text-gray-300 text-sm">
                    Expect deep dives into: scalability constraints, regulatory hurdles, IP defensibility, team composition, competitive response, and exit scenarios. Prepare robust answers.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* JUDGE VIEW */}
      {activeView === 'judge' && (
        <>
          {/* Finance Student Intro */}
          <section className="px-6 py-16 bg-gray-900/50">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                Welcome, Finance Students
              </h2>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  As a judge at HackBelfast, you'll be applying the same analytical frameworks you use in portfolio management, but in a live startup evaluation context. This is your opportunity to conduct real due diligence, build investment theses, and defend your decisions — just like VCIC, but with hackathon teams.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border border-yellow-500/30 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-yellow-400 mb-3 flex items-center gap-3">
                      <span className="text-3xl">🇮🇪</span>
                      Irish Student Managed Fund (ISMF)
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Ireland's first national student-managed fund. Your experience in equity research, valuation, and investment committee deliberations directly translates to evaluating these ventures.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-orange-900/20 to-pink-900/20 border border-orange-500/30 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-orange-400 mb-3 flex items-center gap-3">
                      <span className="text-3xl">👑</span>
                      Queen's Student Managed Fund (QSMF)
                    </h4>
                    <p className="text-gray-300 text-sm">
                      QUB's premier student investment society. Your portfolio analysis skills and sector expertise will help identify the most fundable ventures at HackBelfast.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Your Role as a Judge */}
          <section className="px-6 py-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                Your Role as a Judge
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gray-900 border border-gray-800 p-8 rounded-xl hover:border-pink-500/30 transition-all">
                  <h3 className="text-2xl font-bold text-yellow-400 mb-4">Pre-Event Preparation</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-3 mt-1">•</span>
                      <span>Review the VCIC scoring rubric and evaluation criteria (provided in advance)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-3 mt-1">•</span>
                      <span>Familiarize yourself with the five judging categories and their weightings</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-3 mt-1">•</span>
                      <span>Prepare standard due diligence questions (market sizing, unit economics, competitive moats)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-900 border border-gray-800 p-8 rounded-xl hover:border-pink-500/30 transition-all">
                  <h3 className="text-2xl font-bold text-orange-500 mb-4">During Round 1: Initial Screening (2 min/team)</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-3 mt-1">→</span>
                      <span><strong>Listen:</strong> Teams give quick elevator pitches. Focus on clarity of problem statement and solution.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-3 mt-1">→</span>
                      <span><strong>Score:</strong> Rate on a 1-5 scale for each category. This is a gut-check round.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-3 mt-1">→</span>
                      <span><strong>Questions:</strong> Ask 1-2 clarifying questions max. Examples: "Who's your target customer?" "What's your MVP?"</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-3 mt-1">→</span>
                      <span><strong>Deliberate:</strong> After all teams, judges convene to select top 50% for Round 2.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-900 border border-gray-800 p-8 rounded-xl hover:border-pink-500/30 transition-all">
                  <h3 className="text-2xl font-bold text-pink-500 mb-4">During Round 2: Technical Deep Dive (5 min/team)</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-3 mt-1">→</span>
                      <span><strong>Technical Review:</strong> Teams walk through architecture, code, and demo. Technical judges lead here.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-3 mt-1">→</span>
                      <span><strong>Your Focus:</strong> As a finance judge, probe business model viability alongside technical feasibility.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-3 mt-1">→</span>
                      <span><strong>Key Questions:</strong> "How will you acquire users?" "What's your CAC payback period?" "Who are your competitors and why will you win?"</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-3 mt-1">→</span>
                      <span><strong>Scoring:</strong> Update your scores with more detail. Look for data-backed assumptions, not just vibes.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-3 mt-1">→</span>
                      <span><strong>Deliberate:</strong> Select top 10 teams for final pitch round.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-900 border border-gray-800 p-8 rounded-xl hover:border-pink-500/30 transition-all">
                  <h3 className="text-2xl font-bold text-purple-500 mb-4">During Round 3: Final Pitch (10 min/team)</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-3 mt-1">→</span>
                      <span><strong>Pitch Format:</strong> 7 minutes presentation + 3 minutes Q&A. This is the full VC pitch experience.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-3 mt-1">→</span>
                      <span><strong>Evaluate Like an Investor:</strong> Would you write a check? Why or why not? Build your investment thesis.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-3 mt-1">→</span>
                      <span><strong>Ask Hard Questions:</strong> Challenge assumptions on TAM/SAM/SOM, burn rate, revenue model, go-to-market strategy.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-3 mt-1">→</span>
                      <span><strong>Final Scoring:</strong> Complete detailed scorecards across all five categories.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-3 mt-1">→</span>
                      <span><strong>Judge Deliberation:</strong> Defend your top picks to other judges. This is where your investment thesis matters.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Evaluation Framework */}
          <section className="px-6 py-16 bg-gray-900/50">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                Your Evaluation Framework
              </h2>
              <p className="text-center text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
                Score each team across these five weighted categories. Think like an investor reviewing a deal memo:
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {judgingCriteria.map((criteria, index) => (
                  <div
                    key={index}
                    className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-pink-500/30 transition-all"
                  >
                    <div className={`w-16 h-16 mb-4 rounded-lg bg-gradient-to-r ${criteria.gradient} flex items-center justify-center text-white font-bold text-2xl`}>
                      {criteria.icon || index + 1}
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-white">{criteria.title}</h3>
                      <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                        {criteria.weight}
                      </span>
                    </div>
                    <p className="text-gray-400 mb-4 text-sm">{criteria.description}</p>
                    <div className="border-t border-gray-700 pt-4">
                      <p className="text-xs text-gray-500 mb-2 font-semibold">What to look for:</p>
                      <ul className="space-y-2">
                        {criteria.points.map((point, idx) => (
                          <li key={idx} className="text-gray-300 text-xs flex items-start">
                            <span className="text-pink-500 mr-2">✓</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Questions to Ask */}
          <section className="px-6 py-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                Due Diligence Questions to Ask
              </h2>
              <p className="text-center text-gray-300 mb-10 max-w-3xl mx-auto">
                Use these questions to probe the investment thesis. The best judges ask open-ended questions that reveal how deeply teams have thought about their business:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
                  <h4 className="text-lg font-bold text-yellow-400 mb-4">Market & Opportunity</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start"><span className="text-yellow-400 mr-2">•</span>What's your TAM/SAM/SOM? How did you calculate it?</li>
                    <li className="flex items-start"><span className="text-yellow-400 mr-2">•</span>Who is your ideal customer profile (ICP)?</li>
                    <li className="flex items-start"><span className="text-yellow-400 mr-2">•</span>What customer discovery have you done?</li>
                    <li className="flex items-start"><span className="text-yellow-400 mr-2">•</span>Why now? What's changed in the market?</li>
                  </ul>
                </div>

                <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
                  <h4 className="text-lg font-bold text-orange-500 mb-4">Business Model</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start"><span className="text-orange-500 mr-2">•</span>How do you make money? What's your pricing model?</li>
                    <li className="flex items-start"><span className="text-orange-500 mr-2">•</span>What are your unit economics (CAC, LTV, margins)?</li>
                    <li className="flex items-start"><span className="text-orange-500 mr-2">•</span>What's your CAC payback period?</li>
                    <li className="flex items-start"><span className="text-orange-500 mr-2">•</span>How will you achieve profitability?</li>
                  </ul>
                </div>

                <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
                  <h4 className="text-lg font-bold text-pink-500 mb-4">Competition & Moat</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start"><span className="text-pink-500 mr-2">•</span>Who are your direct and indirect competitors?</li>
                    <li className="flex items-start"><span className="text-pink-500 mr-2">•</span>What's your unfair advantage or defensible moat?</li>
                    <li className="flex items-start"><span className="text-pink-500 mr-2">•</span>Why can't incumbents just copy you?</li>
                    <li className="flex items-start"><span className="text-pink-500 mr-2">•</span>What prevents customer churn?</li>
                  </ul>
                </div>

                <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
                  <h4 className="text-lg font-bold text-purple-500 mb-4">Go-to-Market & Traction</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start"><span className="text-purple-500 mr-2">•</span>How will you acquire your first 100 customers?</li>
                    <li className="flex items-start"><span className="text-purple-500 mr-2">•</span>What are your customer acquisition channels?</li>
                    <li className="flex items-start"><span className="text-purple-500 mr-2">•</span>Do you have any early validation (LOIs, pilots, waitlist)?</li>
                    <li className="flex items-start"><span className="text-purple-500 mr-2">•</span>What are your distribution advantages?</li>
                  </ul>
                </div>

                <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
                  <h4 className="text-lg font-bold text-indigo-500 mb-4">Execution & Team</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start"><span className="text-indigo-500 mr-2">•</span>What are your biggest risks and how will you mitigate them?</li>
                    <li className="flex items-start"><span className="text-indigo-500 mr-2">•</span>What's your 6-month roadmap?</li>
                    <li className="flex items-start"><span className="text-indigo-500 mr-2">•</span>Why is your team uniquely positioned to build this?</li>
                    <li className="flex items-start"><span className="text-indigo-500 mr-2">•</span>What technical or operational challenges do you foresee?</li>
                  </ul>
                </div>

                <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
                  <h4 className="text-lg font-bold text-purple-600 mb-4">Financials & Exit</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start"><span className="text-purple-600 mr-2">•</span>What are your projected revenues for Year 1-3?</li>
                    <li className="flex items-start"><span className="text-purple-600 mr-2">•</span>How much capital do you need to reach profitability?</li>
                    <li className="flex items-start"><span className="text-purple-600 mr-2">•</span>What's your burn rate and runway?</li>
                    <li className="flex items-start"><span className="text-purple-600 mr-2">•</span>What are potential exit scenarios (acquisition, IPO)?</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Day-of Logistics */}
          <section className="px-6 py-16 bg-gray-900/50">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                What to Expect on Event Day
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border border-yellow-500/30 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-yellow-400 mb-4">Morning Briefing (9:00 AM)</h3>
                  <p className="text-gray-300 mb-3">All judges attend a 30-minute orientation covering:</p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start"><span className="text-yellow-400 mr-2">•</span>Scoring rubric walkthrough</li>
                    <li className="flex items-start"><span className="text-yellow-400 mr-2">•</span>Round-by-round logistics and timing</li>
                    <li className="flex items-start"><span className="text-yellow-400 mr-2">•</span>How to use the digital scoring platform</li>
                    <li className="flex items-start"><span className="text-yellow-400 mr-2">•</span>Q&A with head judges</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-orange-900/20 to-pink-900/20 border border-orange-500/30 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-orange-500 mb-4">Round 1: Initial Screening (10:00 AM - 12:00 PM)</h3>
                  <p className="text-gray-300 mb-3">You'll be assigned to a judging panel (4-5 judges). Teams rotate through in 2-minute slots.</p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start"><span className="text-orange-500 mr-2">•</span>Expect 30-40 teams in quick succession</li>
                    <li className="flex items-start"><span className="text-orange-500 mr-2">•</span>Take brief notes on each team</li>
                    <li className="flex items-start"><span className="text-orange-500 mr-2">•</span>Score immediately after each pitch</li>
                    <li className="flex items-start"><span className="text-orange-500 mr-2">•</span>Deliberation session afterward to select top 50%</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-pink-900/20 to-purple-900/20 border border-pink-500/30 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-pink-500 mb-4">Lunch Break (12:00 PM - 1:00 PM)</h3>
                  <p className="text-gray-300">Provided. Network with other judges, discuss standout teams, refine your evaluation approach.</p>
                </div>

                <div className="bg-gradient-to-r from-purple-900/20 to-indigo-900/20 border border-purple-500/30 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-purple-500 mb-4">Round 2: Technical Deep Dive (1:00 PM - 4:00 PM)</h3>
                  <p className="text-gray-300 mb-3">Split across technical and finance judges. You'll see ~15-20 teams.</p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start"><span className="text-purple-500 mr-2">•</span>5 minutes per team (3 min demo + 2 min Q&A)</li>
                    <li className="flex items-start"><span className="text-purple-500 mr-2">•</span>Deep dive into business model and market assumptions</li>
                    <li className="flex items-start"><span className="text-purple-500 mr-2">•</span>Update scores with more granular feedback</li>
                    <li className="flex items-start"><span className="text-purple-500 mr-2">•</span>Select top 10 for finals</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-indigo-900/20 to-purple-900/20 border border-indigo-500/30 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-indigo-500 mb-4">Round 3: Final Pitch (4:30 PM - 6:30 PM)</h3>
                  <p className="text-gray-300 mb-3">Full judging panel reconvenes. This is the big show.</p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start"><span className="text-indigo-500 mr-2">•</span>10 teams present (7 min pitch + 3 min Q&A each)</li>
                    <li className="flex items-start"><span className="text-indigo-500 mr-2">•</span>All judges score and take detailed notes</li>
                    <li className="flex items-start"><span className="text-indigo-500 mr-2">•</span>Final deliberation: judges defend their top 3 picks</li>
                    <li className="flex items-start"><span className="text-indigo-500 mr-2">•</span>Winners announced at closing ceremony</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* What You'll Gain */}
          <section className="px-6 py-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                What You'll Gain as a Judge
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-yellow-500/30 transition-all">
                  <div className="text-4xl mb-4">💼</div>
                  <h4 className="text-xl font-bold text-yellow-400 mb-3">Real VC Experience</h4>
                  <p className="text-gray-300 text-sm">
                    Apply your ISMF/QSMF portfolio management skills in live deal evaluation. This is what analysts do at venture funds.
                  </p>
                </div>

                <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-orange-500/30 transition-all">
                  <div className="text-4xl mb-4">🎯</div>
                  <h4 className="text-xl font-bold text-orange-500 mb-3">Sharpen Your Analysis</h4>
                  <p className="text-gray-300 text-sm">
                    Practice due diligence, valuation frameworks, and investment thesis construction under time pressure.
                  </p>
                </div>

                <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-pink-500/30 transition-all">
                  <div className="text-4xl mb-4">🤝</div>
                  <h4 className="text-xl font-bold text-pink-500 mb-3">Network with VCs</h4>
                  <p className="text-gray-300 text-sm">
                    Judge alongside industry VCs and angel investors. Make connections that matter for your career.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* CTA Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-yellow-900/20 via-orange-900/20 to-pink-900/20 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            {activeView === 'hacker' 
              ? 'Ready to Present Your Investment Thesis?' 
              : 'Ready to Evaluate the Next Generation of Startups?'}
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            {activeView === 'hacker'
              ? "Now that you understand our VC-style evaluation framework, select your track and start building a venture that institutional investors would fund."
              : "Apply to be a judge and gain real-world experience evaluating early-stage ventures using institutional frameworks."}
          </p>
          <Link
            to={activeView === 'hacker' ? '/tracks' : '/register'}
            className="inline-block bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 hover:from-yellow-500 hover:via-orange-600 hover:to-pink-600 text-white font-bold px-8 py-4 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            {activeView === 'hacker' ? 'Explore Competition Tracks' : 'Apply to Judge'}
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Judging