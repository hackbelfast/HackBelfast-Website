import { Link } from "react-router-dom";
import TrackCard from "./components/Tracks";
import FAQs from "./components/FAQ";
import CountdownTimer from "./components/Countdown";
import PatchLogo from "../../assets/sponsor_logos/Patch.png";
import EquipmentShareLogo from "../../assets/sponsor_logos/EquipmentShare_Logo_DIGITAL_Stacked_White.svg";
import TechstarsLogo from "../../assets/sponsor_logos/Techstars_Logo_Primary_White-9941x3975-5e16c90.png";
import SponsorLogoWhite from "../../assets/sponsor_logos/logowhite.svg";
import OptionsLogo from "../../assets/sponsor_logos/optionslogo.svg";
import KainosLogo from "../../assets/sponsor_logos/Kainos.webp";
import OpenAILogo from "../../assets/sponsor_logos/OpenAI-white-monoblossom.svg";
import OrmeauLabsLogo from "../../assets/sponsor_logos/ormeau-labs-white.svg";
import TrinityLogo from "../../assets/sponsor_logos/Trinity-logo-White.png";
import Nazzal from "../../assets/team/Nazzal.png";
import Raj from "../../assets/team/Raj.png";
import Abdul from "../../assets/team/abdul.jpeg";
import Catlin from "../../assets/team/Catlin.jpeg";
import TimChan from "../../assets/team/timchan.jpeg";
import OisinImg from "../../assets/team/Oisin.jpeg";
import OlliverBilling from "../../assets/team/Oliver Billing.jpeg";
import KyanCassidy from "../../assets/team/Kyan Cassidy.jpeg";
import Mayukh from "../../assets/team/mayukh.jpg";
import Christy from "../../assets/team/christy.jpg";
import Catherine from "../../assets/team/catherine.jpg";
import Grace from "../../assets/team/grace.jpg";

const Landing = () => {
  const tracks = [
    {
      icon: (
        <svg
          className="h-10 w-10 text-purple-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Builder",
      description:
        "For technical teams building software-first products with code. Builder teams are expected to design a working MVP, implement core logic, and demonstrate technical depth through architecture, execution quality, and product thinking. Strong submissions typically combine reliable engineering with clear user value and a credible path to real-world deployment.",
    },
    {
      icon: (
        <svg
          className="h-10 w-10 text-purple-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Non-Builder",
      description:
        "For participants with limited coding experience who still want to build and ship strong solutions. Teams can use tools like Lovable and other low-code/no-code platforms to prototype quickly, validate ideas, and present a functional product without deep engineering overhead. Judging focuses on problem clarity, usability, creativity, and practical impact rather than raw code complexity.",
    },
    {
      icon: (
        <svg
          className="h-10 w-10 text-purple-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Finance",
      description:
        " The Fintech challenge is a quant styled model and portfolio engineering competition. Teams receive a custom dataset containing daily features for a UK large and mid cap equity universe across roughly 10 to 15 years. Submissions are evaluated on a hidden out-of-sample period, and final judging blends quantitative performance with the clarity, credibility, and communication of the team’s model rationale and analysis.",
    },
  ];

  const sponsors = [
    { name: "Patch", logo: PatchLogo, logoClass: "h-10 md:h-11" },
    {
      name: "EquipmentShare",
      logo: EquipmentShareLogo,
      logoClass: "h-14 md:h-16",
    },
    {
      name: "Techstars",
      logo: TechstarsLogo,
      logoClass: "h-[7.3125rem] md:h-[8.775rem]",
    },
    { name: "OpenAI", logo: OpenAILogo, logoClass: "h-24 md:h-[7.5rem]" },
    { name: "Ormeau Labs", logo: OrmeauLabsLogo, logoClass: "h-16 md:h-20" },
    { name: "Trinity", logo: TrinityLogo, logoClass: "h-24 md:h-28" },
    { name: "Logo White", logo: SponsorLogoWhite, logoClass: "h-8 md:h-10" },
    { name: "Options IT", logo: OptionsLogo, logoClass: "h-16 md:h-20" },
    { name: "Kainos", logo: KainosLogo, logoClass: "h-20 md:h-24" },
  ];

  const team = [
    {
      name: "Ahmed Nazzal",
      role: "Lead Organiser",
      image: Nazzal,
      linkedin: "https://www.linkedin.com/in/a-nazzal/",
    },
    {
      name: "Caitlin O'Neill",
      role: "Logistics Lead",
      image: Catlin,
      linkedin: "https://www.linkedin.com/in/caitlin-o%E2%80%99neill-83baa229b/",
    },
    {
      name: "Abdulrahman Dessisa",
      role: "Marketing Lead",
      image: Abdul,
      linkedin: "https://www.linkedin.com/in/abdulrahman-desissa-615b2a225/",
    },
    {
      name: "Raj Aryan Upadhyaya",
      role: "Advisor",
      image: Raj,
      linkedin: "https://www.linkedin.com/in/raupadhyaya04/",
    },
    {
      name: "Oisin McAlinden",
      role: "Head of Partnership and Finance",
      image: OisinImg,
      linkedin: "https://www.linkedin.com/in/oisin-mcalinden-3b6a8a2a4/",
    },
    {
      name: "Tim Chan",
      role: "Advisor",
      image: TimChan,
      linkedin: "https://www.linkedin.com/in/chuntimchan/",
    },
    {
      name: "Oliver Billing",
      role: "Fintech Track Head",
      image: OlliverBilling,
      linkedin: "https://www.linkedin.com/in/oliver-billing49161205/",
    },
    {
      name: "Kyan Cassidy",
      role: "Fintech Track Head",
      image: KyanCassidy,
      linkedin: "https://www.linkedin.com/in/kyan-cassidy/",
    },
    {
      name: "Mayukh Banerjee",
      role: "Logistics",
      image: Mayukh,
      linkedin: "https://www.linkedin.com/in/baneerjem/",
    },
    {
      name: "Christy Chovalloor",
      role: "Logistics",
      image: Christy,
      linkedin: "https://www.linkedin.com/in/cchovalloor/",
    },
    {
      name: "Catherine Kane",
      role: "Logistics",
      image: Catherine,
      linkedin: "https://www.linkedin.com/in/catherine-kane-90bb82238/",
    },
    {
      name: "Grace Coyle",
      role: "Logistics",
      image: Grace,
      linkedin: "https://www.linkedin.com/in/grace-coyle-671718270/",
    },
  ];

  return (
    <div className="relative isolate min-h-screen text-zinc-100">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-zinc-950" />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-36 md:opacity-52 [background-image:radial-gradient(circle,rgba(255,255,255,0.9)_2.1px,transparent_2.5px)] [background-size:28px_28px] md:[background-size:18px_18px] [mask-image:radial-gradient(60rem_34rem_at_52%_34%,black_0%,transparent_76%)] [animation:matrix-drift_32s_linear_infinite]" />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-14 md:opacity-24 [background-image:radial-gradient(circle,rgba(255,255,255,0.82)_1.9px,transparent_2.3px)] [background-size:34px_34px] md:[background-size:24px_24px] [mask-image:radial-gradient(34rem_22rem_at_18%_72%,black_0%,transparent_80%)]" />
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-[160vh] -z-10 opacity-16 md:opacity-30 [background-image:radial-gradient(circle,rgba(251,146,60,0.95)_2px,transparent_2.4px)] [background-size:30px_30px] md:[background-size:18px_18px] [mask-image:radial-gradient(44rem_26rem_at_78%_22%,black_0%,transparent_82%)] [animation:matrix-drift_24s_linear_infinite]" />
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-[160vh] -z-10 opacity-14 md:opacity-26 [background-image:radial-gradient(circle,rgba(217,70,239,0.94)_2px,transparent_2.4px)] [background-size:32px_32px] md:[background-size:20px_20px] [mask-image:radial-gradient(40rem_24rem_at_20%_78%,black_0%,transparent_84%)] [animation:matrix-drift_36s_linear_infinite]" />
      <div className="pointer-events-none absolute top-0 left-0 right-0 hidden h-[160vh] -z-10 opacity-24 md:block [background-image:radial-gradient(circle,rgba(244,63,94,0.92)_1.9px,transparent_2.3px)] [background-size:16px_16px] [mask-image:radial-gradient(38rem_22rem_at_50%_54%,black_0%,transparent_86%)] [animation:matrix-drift_28s_linear_infinite_reverse]" />
      <div className="pointer-events-none absolute top-0 left-0 right-0 hidden h-[160vh] -z-10 opacity-22 md:block [background-image:radial-gradient(circle,rgba(253,224,71,0.92)_1.9px,transparent_2.3px)] [background-size:19px_19px] [mask-image:radial-gradient(34rem_20rem_at_66%_72%,black_0%,transparent_86%)] [animation:matrix-drift_34s_linear_infinite]" />
      <div className="pointer-events-none absolute top-0 left-0 right-0 hidden h-[160vh] -z-10 opacity-18 md:block [background-image:radial-gradient(circle,rgba(126,34,206,0.9)_1.8px,transparent_2.2px)] [background-size:21px_21px] [mask-image:radial-gradient(34rem_20rem_at_14%_30%,black_0%,transparent_84%)] [animation:matrix-drift_42s_linear_infinite_reverse]" />
      <section id="home" className="relative isolate w-full overflow-hidden">
        <div className="mx-auto flex min-h-[680px] max-w-7xl items-center px-4 pt-20 pb-16 lg:min-h-[780px] lg:pt-24 lg:pb-20">
          <div className="relative z-10 grid w-full gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-300 md:text-base">
                11-12 April 2026 | Queen's University Belfast
                <br />
                Computer Science Building | 16A Malone Rd
              </p>
              <h1 className="text-5xl font-semibold uppercase leading-[0.94] md:text-7xl lg:text-8xl">
                Build hard.
                <br />
                Ship real.
                <br />
                Win{" "}
                <span className="bg-gradient-to-r from-orange-300 via-pink-300 to-violet-300 bg-clip-text text-transparent">
                  Belfast.
                </span>
              </h1>
              <p className="mt-7 max-w-xl border-l-2 border-zinc-600 pl-4 text-base text-zinc-300 md:text-lg">
                HackBelfast is Northern Ireland's largest student-led hackathon,
                bringing together 175+ students from universities across Ireland
                for a high-energy 24-hour innovation sprint to tackle real-world
                challenges.
              </p>
              <div className="mt-12 flex flex-wrap gap-4">
                <Link to="/register" className="btn-primary px-8 py-3">
                  Register
                </Link>
                <a
                  href="https://calendly.com/ahmednazzal1710/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary px-8 py-3"
                >
                  Sponsor
                </a>
              </div>
            </div>
            <div className="bg-zinc-950 p-6 md:p-8">
              <CountdownTimer />
            </div>
          </div>
        </div>
      </section>

      {/* Why HackBelfast section disabled for now
      <section className="w-full border-y border-zinc-800 bg-zinc-900 py-10 lg:py-12">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="text-3xl font-semibold uppercase tracking-wide md:text-4xl">
            Why HackBelfast
          </h2>
          <div className="mt-6 space-y-6">
            <div className="border-l-2 border-zinc-700 pl-4">
              <p className="max-w-4xl text-zinc-300">
                HackBelfast is built to connect ambitious student teams with
                real commercial feedback. You get a focused weekend to build,
                pitch, and prove execution quality in front of judges and
                partners.
              </p>
            </div>
            <div className="grid gap-3 md:grid-cols-3">
              {sideStats.map((stat) => (
                <div key={stat.label} className="border border-zinc-800 bg-zinc-950 p-5">
                  <p className="text-xs uppercase tracking-[0.12em] text-zinc-500">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-4xl font-semibold">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      */}

      <section
        id="tracks"
        className="mt-32 w-full bg-zinc-950 py-10 lg:mt-40 lg:py-12"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-8 flex items-end justify-between gap-6 md:mb-10">
            <div>
              <h2 className="text-3xl font-semibold uppercase tracking-wide md:text-4xl">
                Competition Tracks
              </h2>
              <p className="mt-3 max-w-3xl text-zinc-400">
                Choose Builder, Non-Builder, or Finance. Each major track
                includes sub-track prizes like Best Medicine Solution, Best
                Sustainability Solution, and other category awards.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 md:gap-8 xl:grid-cols-3 xl:gap-10">
            {tracks.map((track, index) => (
              <TrackCard key={index} {...track} />
            ))}
          </div>
        </div>
      </section>

      <section id="sponsors" className="relative w-full py-14 lg:py-20">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,transparent_0%,rgba(9,9,11,0.97)_10%,rgba(9,9,11,0.97)_92%,transparent_100%)]" />
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="text-3xl font-semibold uppercase tracking-wide md:text-4xl">
            Sponsors
          </h2>
          <p className="mt-4 max-w-3xl text-zinc-400">
            Sponsors and community partners support the event with tooling,
            mentorship, and opportunities.
          </p>
          <div className="mt-10 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.name}
                className="flex min-h-[104px] items-center justify-center px-6 py-4"
              >
                <img
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  className={`mx-auto w-auto object-contain ${sponsor.logoClass ?? "h-10 md:h-11"}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQs />

      <section id="team" className="mx-auto mt-6 max-w-7xl px-4 pb-6">
        <h2 className="text-center text-3xl font-semibold uppercase tracking-wide md:text-4xl">
          Organising Team
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {team.map((member) => (
            <article
              key={member.name}
              className="overflow-hidden border border-zinc-800 bg-zinc-950"
            >
              <div className="aspect-square bg-zinc-950">
                {member.image ? (
                  member.linkedin ? (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} LinkedIn profile`}
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="h-full w-full object-cover"
                        style={
                          member.name === "Kyan Cassidy"
                            ? { objectPosition: "50% 42%" }
                            : undefined
                        }
                      />
                    </a>
                  ) : (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover"
                      style={
                        member.name === "Kyan Cassidy"
                          ? { objectPosition: "50% 42%" }
                          : undefined
                      }
                    />
                  )
                ) : (
                  <div className="flex h-full items-center justify-center text-5xl font-semibold text-zinc-700">
                    {member.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </div>
                )}
              </div>
              <div className="p-5">
                <p className="font-semibold">{member.name}</p>
                <p className="text-sm text-zinc-500">{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Landing;
