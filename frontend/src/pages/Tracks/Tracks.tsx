import { Link } from 'react-router-dom';

type Track = {
  id: string;
  icon: JSX.Element;
  title: string;
  gradient: string;
  description: string;
  longDescription: string;
  examples: string[];
  tools: string[];
  prizes: string;
  vcicNote?: boolean;
};

const tracks: Track[] = [
  {
    id: 'fintech',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Finance/Fintech',
    gradient: 'from-yellow-400 to-orange-500',
    description: 'Build innovative financial technology solutions that revolutionize how we interact with money.',
    longDescription:
      "The finance/fintech track is perfect for teams interested in transforming the financial services industry. Whether you're building payment platforms, trading algorithms, personal finance apps, or blockchain-based solutions, this track welcomes all financial innovation.",
    examples: [
      'Payment processing systems',
      'Robo-advisors and investment platforms',
      'Cryptocurrency and DeFi applications',
      'Personal budgeting and expense tracking apps',
      'Trading bots and algorithmic trading systems',
      'Credit scoring and lending platforms',
    ],
    tools: ['Stripe', 'Plaid', 'Alpaca API', 'Web3.js', 'Ethers.js', 'Firebase'],
    prizes:
      'Top fintech projects receive mentorship from investors and operators, plus fast-tracked consideration for VCIC-style showcase slots.',
    vcicNote: true,
  },
  {
    id: 'ai',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'AI & Machine Learning',
    gradient: 'from-pink-500 to-purple-500',
    description: 'Use AI, LLMs, and machine learning models to solve complex real‑world problems.',
    longDescription:
      'The AI & ML track is for teams building intelligent systems using LLMs, computer vision, recommendation engines, or predictive models. Focus on clear problem statements, explainability, and responsible AI.',
    examples: [
      'LLM‑powered assistants or copilots',
      'Computer vision for healthcare or safety',
      'Recommendation systems for content or products',
      'Fraud detection and anomaly detection',
      'Predictive analytics dashboards',
      'AI‑driven productivity tools',
    ],
    tools: ['OpenAI API', 'Hugging Face', 'LangChain', 'Pinecone', 'TensorFlow', 'PyTorch'],
    prizes: 'Top AI projects receive API credits, GPU time, and mentorship from ML engineers.',
  },
  {
    id: 'medtech',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'MedTech',
    gradient: 'from-purple-500 to-indigo-500',
    description: 'Build healthcare technology that improves patient outcomes and clinical workflows.',
    longDescription:
      'The MedTech track focuses on digital health solutions for diagnostics, monitoring, telemedicine, and operational efficiency. Teams should consider regulatory constraints, data privacy, and clinical validation paths.',
    examples: [
      'Telemedicine and remote consultation platforms',
      'Wearable health monitoring dashboards',
      'Medical image triage tools',
      'Electronic health record (EHR) extensions',
      'Mental health and wellbeing apps',
      'Medication adherence and reminders',
    ],
    tools: ['FHIR APIs', 'Twilio', 'health‑focused datasets', 'OAuth providers', 'Supabase'],
    prizes:
      'Winners get intros to healthcare founders, plus feedback from MedTech operators and clinicians.',
  },
  {
    id: 'sustainability',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Sustainability',
    gradient: 'from-green-400 to-emerald-500',
    description: 'Create solutions that tackle climate, energy, and environmental challenges.',
    longDescription:
      'The sustainability track is dedicated to projects addressing climate change, renewable energy, circular economy, and environmental education. Strong projects combine measurable impact with realistic implementation paths.',
    examples: [
      'Carbon footprint tracking tools',
      'Smart energy or grid optimisation dashboards',
      'Waste sorting and recycling optimisation',
      'Sustainable supply‑chain visibility',
      'Climate risk visualisation tools',
      'Community‑driven sustainability platforms',
    ],
    tools: ['OpenWeather', 'Mapbox', 'IoT sensor APIs', 'public climate datasets'],
    prizes:
      'Top projects receive visibility with sustainability partners and intros to climate‑focused organisations.',
  },
];

const Tracks = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {/* Header with back button */}
      <div className="container mx-auto px-4 py-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-200 transition-colors mb-8"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Home
        </Link>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 text-transparent bg-clip-text">
            Competition Tracks
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Dive deeper into each track, understand what you can build, and choose the one that best fits your team. 
            You will select a single track to compete in.
          </p>
        </div>

        {/* Tracks Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {tracks.map((track) => (
            <div
              key={track.id}
              className="group relative bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              {/* Icon and Title */}
              <div className="flex items-start gap-4 mb-4">
                {track.icon}
                <div className="flex-1">
                  <h2 className={`text-3xl font-bold mb-2 bg-gradient-to-r ${track.gradient} text-transparent bg-clip-text`}>
                    {track.title}
                  </h2>
                  <p className="text-gray-300">{track.description}</p>
                </div>
              </div>

              {/* Long Description */}
              <div className="mb-6">
                <p className="text-gray-400 leading-relaxed">{track.longDescription}</p>
              </div>

              {/* Example Projects */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-purple-300 mb-3">Example Projects:</h3>
                <ul className="space-y-2">
                  {track.examples.map((example, idx) => (
                    <li key={idx} className="text-gray-400 flex items-start gap-2">
                      <span className="text-purple-400 mt-1">→</span>
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recommended Tools */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-purple-300 mb-3">Recommended Tools:</h3>
                <div className="flex flex-wrap gap-2">
                  {track.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-800/80 rounded-full text-sm text-gray-300 border border-slate-700"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Prizes */}
              <div className="border-t border-slate-700 pt-6">
                <h3 className="text-lg font-semibold text-purple-300 mb-2">Prizes & Benefits:</h3>
                <p className="text-gray-400">{track.prizes}</p>
              </div>

            </div>
          ))}
        </div>

        {/* Additional Prizes Section */}
        <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700/50 mb-16">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-pink-400 text-transparent bg-clip-text">
            Special Prize Categories
          </h2>
          <p className="text-gray-300 mb-4">
            In addition to track-specific prizes, we're awarding special recognition for:
          </p>
          <div className="space-y-4">
            <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
            <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <h3 className="text-xl font-semibold text-purple-300 mb-2"> Best Use of No-Code Tools</h3>
            <p className="text-gray-400">
              Awarded to the team that best leverages no-code and AI-powered tools (like Lovable, Budibase, Webflow, etc.) 
              to build a functional product. Perfect for non-technical students or teams wanting to move fast!
            </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-xl text-gray-300 mb-6">
            Choose the track that best aligns with your team's skills and the problem you are most excited to solve. 
            You will confirm your track during team formation at the start of the event.
          </p>
          <Link
            to="/register"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
          >
            Register your team
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tracks;