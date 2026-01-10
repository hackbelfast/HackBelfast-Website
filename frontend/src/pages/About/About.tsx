import { Link } from 'react-router-dom'
import Nazzal from "../../assets/team/Nazzal.png"
import Raj from "../../assets/team/Raj.png"
// import Abdul from "../../assets/team/Abdul.png"

const About = () => {
  const teamMembers = [
    {
      name: 'Ahmed Nazzal',
      role: 'Lead Organiser',
      university: "Queen's University Belfast",
      image: Nazzal,
      linkedin: 'https://www.linkedin.com/in/a-nazzal/',
    },
    {
      name: "Abdulrahman Dessisa",
      role: 'Marketing Lead',
      university: "Queen's University Belfast",
      //image: Abdul,
      linkedin: 'https://www.linkedin.com/in/abdulrahman-desissa-615b2a225/',
    },
    {
      name: "Raj Aryan Upadhyaya",
      role: 'Tech Lead',
      university: "Trinity College Dublin",
      image: Raj,
      linkedin: 'https://linkedin.com/in/raupadhyaya04',
    },
    {
      name: "Caitlin O'Neill",
      role: 'Logistics Lead',
      university: "Queen's University Belfast",
      //image: Caitlin,
      linkedin: 'https://www.linkedin.com/in/',
    },
  ]

  const stats = [
    { number: '200+', label: 'Participants' },
    { number: '48', label: 'Hours of Hacking' },
    { number: '£15K+', label: 'in Prizes' },
    { number: '20+', label: 'Sponsors & Partners' },
  ]

  const values = [
    {
      title: 'Student-Led, Student-First',
      description: "HackBelfast is organized entirely by students, for students. We understand what you need because we've been in your shoes.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      title: 'Build Real Solutions',
      description: "We're not just about coding for 48 hours. Our VCIC-style judging means your project could become a real startup.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: 'Community Over Competition',
      description: "Yes, there are prizes. But more importantly, you'll meet founders, developers, and future co-founders who share your passion.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ]

  return (
    <div className="min-h-screen bg-gray-950 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About{' '}
            <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              HackBelfast
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Northern Ireland's premier student hackathon, bringing together the brightest minds to build, 
            learn, and launch the next generation of tech startups.
          </p>
        </div>

        {/* Collaboration Callout */}
        <div className="mb-16 bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border border-yellow-500/30 rounded-xl p-8">
          <div className="flex items-start gap-4">
            <svg className="w-12 h-12 text-yellow-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <div>
              <h2 className="text-2xl font-bold mb-3 text-yellow-300">A Collaboration of Student Societies</h2>
              <p className="text-gray-300 mb-3">
                HackBelfast is brought to you by a unique partnership between three leading student organizations:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong className="text-yellow-300">Irish Student Managed Fund (ISMF)</strong> - The first ever National Student Managed Fund</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong className="text-yellow-300">Queen's Student Managed Fund (QSMF)</strong> - QUB's student investment society</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong className="text-yellow-300">Queen's Computing Society</strong> - The tech community at Queen's University Belfast</span>
                </li>
              <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong className="text-yellow-300">Queen's Data Science & AI Society</strong> - The data-driven community at Queen's University Belfast</span>
                </li>
              </ul>
              <p className="text-gray-300 mt-3">
                This cross-border, cross-discipline collaboration brings together finance and tech expertise 
                to create Northern Ireland's most innovative student hackathon.
              </p>
            </div>
          </div>
        </div>

        {/* Why HackBelfast */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why <span className="bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">HackBelfast?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-pink-500/30 transition-all">
                <div className="text-pink-500 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>

          {/* Story Section */}
          <div className="bg-gradient-to-r from-purple-900/20 to-indigo-900/20 border border-purple-500/30 rounded-xl p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-6">Our Story</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                HackBelfast started with a simple idea: The ISMF, QSMF, and Queen's wanted to build a hackathon together,
                and in doing so, improve the hackathon ecosystem of Belfast with a hackathon that focuses on real startup building
                alongside the intersection of Finance and Tech towards building further than just the hackathon
              </p>
              <p>
                So we built something different. Inspired by the Venture Capital Investment Competition (VCIC), 
                we created a hackathon where judges think like investors. Where teams pitch like founders. 
                Where the goal isn't just to win, but to walk away with a validated idea and a network to build it.
              </p>
              <p>
                Through the partnership between ISMF, QSMF, and Queen's Computing Society, we're bridging the gap 
                between technical innovation and business viability. Our unique cross-border collaboration brings 
                together the best of Ireland's student tech and finance communities.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center hover:border-pink-500/30 transition-all">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Meet the Team */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-4">
            Meet the <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            We're a group of students who love building things, organizing events, and connecting people. 
            HackBelfast is our passion project, and we can't wait to see what you build.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-pink-500/30 transition-all">
                {/* Profile Image */}
                <div className="aspect-square bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-500 p-[2px]">
                  <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-6xl font-bold text-gray-700">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    )}
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:via-pink-500 group-hover:to-purple-500 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                    {member.name}
                  </h3>
                  <div className="text-sm text-pink-500 mb-2">{member.role}</div>
                  <div className="text-xs text-gray-500 mb-4">{member.university}</div>

                  {/* LinkedIn */}
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Get Involved */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Get Involved?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Whether you're a hacker ready to build, a student judge excited to evaluate projects, 
            or a company looking to sponsor, we'd love to have you at HackBelfast 2026.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-white font-bold rounded-lg hover:scale-105 transition-transform duration-200 shadow-lg"
            >
              <span>Register Now</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <a
              href="mailto:team@hackbelfast.org"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-purple-500 text-white font-bold rounded-lg hover:bg-purple-500/10 hover:scale-105 transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Contact Us</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
