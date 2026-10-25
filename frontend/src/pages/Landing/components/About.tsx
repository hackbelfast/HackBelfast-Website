import teamPhoto from "../../../assets/team-2026.jpg";
import { JOIN_TEAM_URL } from "../../../constants/register";

const stats = [
  { value: "175+", label: "Participants" },
  { value: "£10K+", label: "In prizes" },
  { value: "3", label: "Competition tracks" },
];

const About = () => {
  return (
    <section
      id="about"
      className="w-full border-t border-white/10 bg-[#191919] text-white"
    >
      <div className="mx-auto max-w-[1600px] px-4 py-20 sm:px-[7.25vw] md:py-28">
        <h2 className="max-w-5xl font-display text-3xl font-bold leading-[1.15] tracking-[-0.02em] md:text-5xl">
          We started HackBelfast with a simple belief: Belfast has the talent
          to build incredible things. It just needs the stage.
        </h2>

        <dl className="mt-14 grid gap-10 sm:grid-cols-3 md:mt-16">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse">
              <dt className="mt-2 text-base text-zinc-400 md:text-lg">
                {stat.label}
              </dt>
              <dd className="font-display text-5xl font-bold leading-none tracking-[-0.02em] md:text-6xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-16 grid gap-12 md:mt-20 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:items-center lg:gap-[4vw]">
          <img
            src={teamPhoto}
            alt="The HackBelfast team in front of the sponsor banner"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-lg object-cover"
          />

          <div className="space-y-5 text-base leading-relaxed text-zinc-300 md:text-lg">
            <p>
              Last year, we brought together some of the most ambitious student
              builders from across the UK and Ireland for Northern Ireland's
              largest student-led hackathon. Over 175 participants, three
              competition tracks, and more than £10,000 in prizes. What started
              as an idea became something real.
            </p>
            <p>
              Now, we're building the next HackBelfast, and{" "}
              <strong className="font-semibold text-white">
                we need your help to make it happen.
              </strong>
            </p>
            <p>
              We're looking for ambitious people who want to be part of
              something bigger. Whether you're into engineering, design,
              partnerships, marketing, or simply making things happen, there's a
              place for you on the team.
            </p>
            <p className="font-semibold text-white">
              No previous experience needed. Just initiative, ideas, and the
              drive to build something worth remembering.
            </p>

            <div className="pt-5">
              <a
                href={JOIN_TEAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-orange-300 via-pink-300 to-violet-300 px-8 py-4 font-display text-lg font-semibold text-zinc-950 transition hover:from-orange-200 hover:via-pink-200 hover:to-violet-200"
              >
                Join the team
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
