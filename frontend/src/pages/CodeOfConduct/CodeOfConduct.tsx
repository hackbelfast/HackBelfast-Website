import { Link } from "react-router-dom";

const CodeOfConduct = () => {
  return (
    <div className="min-h-screen bg-black text-zinc-100">

      {/* Hero */}
      <section className="relative px-6 pt-24 pb-16 md:pt-28 md:pb-20">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-center text-4xl md:text-6xl font-semibold uppercase tracking-wide">
            Code of Conduct
          </h1>
          <p className="mt-6 max-w-4xl text-base text-zinc-300 md:text-lg text-center mx-auto">
            Be respectful. We’re here to build great things and have a great time.
            Harassment, abuse, discrimination, or intimidation are not tolerated.
            If something or someone makes you uncomfortable, report it and  we will take it seriously.
          </p>
        </div>
      </section>

      {/* Straight Text Body */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-6xl text-zinc-300">
          <div className="max-w-4xl mr-auto">
          <h2 className="mt-10 text-xl md:text-2xl font-semibold uppercase tracking-wide text-yellow-300">
            Our Commitment
          </h2>
          <p className="mt-3 leading-relaxed">
            HackBelfast is dedicated to providing a safe, welcoming, and inclusive
            experience for everyone. We believe every single person has the right
            to hack in a safe and welcoming environment.
          </p>

          <h2 className="mt-10 text-xl md:text-2xl font-semibold uppercase tracking-wide text-orange-300">
            Scope
          </h2>
          <p className="mt-3 leading-relaxed">
            This Code of Conduct applies to everyone involved with HackBelfast:
            participants, sponsors, mentors, judges, volunteers, organizers, staff,
            and guests.
          </p>
          <ul className="mt-3 space-y-2">
            <li className="flex items-start">
              <span className="text-orange-300 mr-2">•</span>
              <span>The hackathon venue and any sub-events</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-300 mr-2">•</span>
              <span>Sponsor booths and workshops</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-300 mr-2">•</span>
              <span>HackBelfast online spaces (Discord/Slack/social media)</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-300 mr-2">•</span>
              <span>HackBelfast-related social events and after-parties</span>
            </li>
          </ul>

          <h2 className="mt-10 text-xl md:text-2xl font-semibold uppercase tracking-wide text-yellow-300">
            Expected Behaviour
          </h2>
          <p className="mt-3 leading-relaxed">
            We expect all attendees to be respectful, inclusive, collaborative,
            professional, and considerate of everyone.
          </p>

          <h2 className="mt-10 text-xl md:text-2xl font-semibold uppercase tracking-wide text-pink-400">
            Unacceptable Behaviour
          </h2>
          <p className="mt-3 leading-relaxed">
            Any behaviour that makes someone feel unsafe, intimidated, or
            uncomfortable is enough reason to stop.
          </p>
          <ul className="mt-3 space-y-2">
            <li className="flex items-start">
              <span className="text-pink-300 mr-2">•</span>
              <span>
                Offensive verbal or written comments related to: gender, gender
                identity/expression, sexual orientation, disability, neurotype/mental
                health, physical appearance, body size, race, ethnicity, nationality,
                language, religion, age, social class, or economic status
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-300 mr-2">•</span>
              <span>Deliberate intimidation, stalking, following, or sustained disruption of talks/events</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-300 mr-2">•</span>
              <span>Harassing photography or recording</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-300 mr-2">•</span>
              <span>Unwelcome sexual attention, sexual comments, or sharing sexual images</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-300 mr-2">•</span>
              <span>Inappropriate physical contact (or simulated contact) without consent</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-300 mr-2">•</span>
              <span>Doxxing or threatening to publish someone’s private information</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-300 mr-2">•</span>
              <span>Brigading, targeted harassment, or retaliation against reporters</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-300 mr-2">•</span>
              <span>“Jokes” or behaviour that creates a hostile environment</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-300 mr-2">•</span>
              <span>Any sexualised imagery, activities, or material during the event</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-300 mr-2">•</span>
              <span>
                Any technical misconduct (e.g., accessing systems/data without authorization,
                IP violations, cheating/submitting work you don’t have rights to use, or
                writing/deploying harmful code)
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-300 mr-2">•</span>
              <span>
                Disruptive conduct (e.g., destruction of property, failure to comply with reasonable
                requests from organizers/venue staff, illegal substances, or violent behaviour)
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-300 mr-2">•</span>
              <span>Any weapons, including firearms, fireworks, or items intended to be used as weapons</span>
            </li>
          </ul>

          <h2 className="mt-10 text-xl md:text-2xl font-semibold uppercase tracking-wide text-indigo-300">
            Photography and Recording
          </h2>
          <p className="mt-3 leading-relaxed">
            Ask for consent before photographing or recording individuals. Do not
            share photos or recordings of others without their permission, and do not
            record in designated private spaces.
          </p>

          <h2 className="mt-10 text-xl md:text-2xl font-semibold uppercase tracking-wide text-yellow-300">
            Reporting
          </h2>
          <p className="mt-3 leading-relaxed">
            If you’re being harassed, see someone else being harassed, or have any
            safety or Code of Conduct concern, please report it as soon as possible.
          </p>
          <ul className="mt-3 space-y-2">
            <li className="flex items-start">
              <span className="text-yellow-300 mr-2">•</span>
              <span>Speak to our Safety Liaison Officer (Caitlin) on-site (or any HackBelfast organizer/volunteer)</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-300 mr-2">•</span>
              <span>Email us anytime at hackbelfast@gmail.com</span>
            </li>
          </ul>

          <h2 className="mt-10 text-xl md:text-2xl font-semibold uppercase tracking-wide text-orange-300">
            How Reports Are Handled
          </h2>
          <p className="mt-3 leading-relaxed">
            We take all reports seriously and act promptly. If the situation requires
            further escalation, we will contact the relevant authorities and fully
            cooperate with them.
          </p>
          <p className="mt-3 leading-relaxed">
            Reports will be handled discreetly, and we will not share your identity
            without your consent unless necessary for safety.
          </p>

          <h2 className="mt-10 text-xl md:text-2xl font-semibold uppercase tracking-wide text-purple-300">
            Conduct Expectations Beyond HackBelfast
          </h2>
          <p className="mt-3 leading-relaxed">
            HackBelfast also aligns with and follows the Queen’s University Belfast
            Students’ Union (QUBSU) Code of Conduct:
          </p>
          <a
            href="https://www.qubsu.org/AdviceSU/Conduct/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-purple-300 hover:text-purple-200"
          >
            View QUBSU Code of Conduct
            <span aria-hidden="true">→</span>
          </a>
          <p className="mt-4 leading-relaxed">
            HackBelfast is committed to upholding a positive environment aligned with
            the expectations of our venue/university partners. Queen’s guidance notes
            that student conduct issues can be investigated under university conduct
            regulations depending on circumstances.
          </p>

          <h2 className="mt-10 text-xl md:text-2xl font-semibold uppercase tracking-wide text-orange-300">
            If you want to report anything
          </h2>
          <p className="mt-3 leading-relaxed">
            Contact us: hackbelfast@gmail.com
          </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CodeOfConduct;
