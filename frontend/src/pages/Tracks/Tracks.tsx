import { Link } from 'react-router-dom'

type Track = {
  id: string
  title: string
  gradient: string
  description: string
  longDescription: string
  examples: string[]
  tools: string[]
  prizes: string
  vcicNote?: boolean
}

const tracks: Track[] = [
  {
    id: 'fintech',
    title: 'Finance/Fintech',
    gradient: 'from-yellow-400 to-orange-500',
    description:
      'Build innovative financial technology solutions that revolutionize how we interact with money.',
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
    id: 'nocode',
    title: 'Non-Technical (No-Code & AI)',
    gradient: 'from-orange-500 to-pink-500',
    description:
      'Create powerful applications without writing a single line of code using modern no‑code and AI tools.',
    longDescription:
      'This track is designed for entrepreneurs, designers, and students from non-technical backgrounds. Using no-code platforms and AI tools such as Lovable, you can build production-ready products without touching traditional code.',
    examples: [
      'Startup MVPs built with no-code tools',
      'Business automation workflows',
      'Internal tools and dashboards',
      'E‑commerce or booking platforms',
      'AI‑assisted content and marketing tools',
      'Community or education platforms',
    ],
    tools: ['Lovable', 'Bubble', 'Webflow', 'Zapier', 'Airtable', 'Notion'],
    prizes:
      'Winners receive no‑code/AI tool credits and 1:1 product sessions to take their MVP to the next stage.',
  },
  {
    id: 'ai',
    title: 'AI & Machine Learning',
    gradient: 'from-pink-500 to-purple-500',
    description:
      'Use AI, LLMs, and machine learning models to solve complex real‑world problems.',
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
    prizes:
      'Top AI projects receive API credits, GPU time, and mentorship from ML engineers.',
  },
  {
    id: 'medtech',
    title: 'MedTech',
    gradient: 'from-purple-500 to-indigo-500',
    description:
      'Build healthcare technology that improves patient outcomes and clinical workflows.',
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
    title: 'Sustainability',
    gradient: 'from-green-400 to-emerald-500',
    description:
      'Create solutions that tackle climate, energy, and environmental challenges.',
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
]

const Tracks = () => {
  return (
    <div className="min-h-screen bg-gray-950 py-20 px-4">
      <div className="mx-auto max-w-7xl">
        {/* Page header */}
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Hackathon{' '}
            <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Tracks
            </span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-gray-400">
            Dive deeper into each track, understand what you can build, and choose the one
            that best fits your team. You will select a single track to compete in.
          </p>
        </div>

        {/* Tracks list */}
        <div className="space-y-16">
          {tracks.map((track) => (
            <section key={track.id} id={track.id} className="scroll-mt-24">
              <div className="overflow-hidden rounded-2xl border border-gray-800 bg-gray-900">
                {/* Track header */}
                <div className={`bg-gradient-to-r ${track.gradient} p-[1px]`}>
                  <div className="bg-gray-900 p-8">
                    <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-black/20">
                        {/* Simple generic icon per track */}
                        <span className="text-2xl font-semibold text-white">
                          {track.title[0]}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h2 className="mb-3 text-2xl font-bold md:text-3xl">
                          {track.title}
                        </h2>
                        <p className="text-gray-300">{track.description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Track body */}
                <div className="space-y-8 p-8">
                  {/* About */}
                  <div>
                    <h3 className="mb-3 text-xl font-semibold">About this track</h3>
                    <p className="leading-relaxed text-gray-400">
                      {track.longDescription}
                    </p>
                  </div>

                  {/* Examples */}
                  <div>
                    <h3 className="mb-4 text-xl font-semibold">What you can build</h3>
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                      {track.examples.map((example) => (
                        <div key={example} className="flex items-start gap-3">
                          <span className="mt-1 h-2 w-2 rounded-full bg-pink-500" />
                          <span className="text-gray-300">{example}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tools */}
                  <div>
                    <h3 className="mb-4 text-xl font-semibold">Recommended tools & APIs</h3>
                    <div className="flex flex-wrap gap-2">
                      {track.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-sm text-gray-200"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Prizes */}
                  <div className="rounded-xl border border-gray-700 bg-gradient-to-r from-gray-900 to-gray-900/80 p-6">
                    <h4 className="mb-2 text-lg font-semibold">Track prizes</h4>
                    <p className="text-gray-300">{track.prizes}</p>
                  </div>

                  {/* VCIC note for fintech */}
                  {track.vcicNote && (
                    <div className="rounded-xl border border-purple-500/40 bg-purple-900/20 p-6">
                      <h4 className="mb-2 text-lg font-semibold text-purple-200">
                        Interested in venture-style judging?
                      </h4>
                      <p className="mb-3 text-sm text-gray-200">
                        Fintech teams will be evaluated using a VCIC‑inspired framework that
                        looks at both technical execution and investment readiness. If you
                        want to understand how judges think like venture capitalists, you
                        should review the judging rubric in advance.
                      </p>
                      <Link
                        to="/judging"
                        className="inline-flex items-center gap-2 text-sm font-medium text-purple-300 underline-offset-4 hover:underline"
                      >
                        Learn more about VCIC‑style judging
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Helper + CTA */}
        <section className="mt-16 rounded-xl border border-gray-800 bg-gray-900 p-8 text-center">
          <h2 className="mb-4 text-2xl font-semibold">Not sure which track to pick?</h2>
          <p className="mx-auto mb-6 max-w-2xl text-sm text-gray-400">
            Choose the track that best aligns with your team’s skills and the problem you
            are most excited to solve. You will confirm your track during team formation
            at the start of the event.
          </p>
          <Link
            to="/register"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 px-8 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
          >
            Register your team
            <span aria-hidden="true">→</span>
          </Link>
        </section>
      </div>
    </div>
  )
}

export default Tracks
