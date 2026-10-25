import { isValidElement } from "react";
import FAQs from "./components/FAQ";
import About from "./components/About";
import BelfastMark from "./components/BelfastMark";
import * as Images from "./assets";
import topography from "../../assets/belfast-topography.jpg";
import { JOIN_TEAM_URL } from "../../constants/register";

const SPONSOR_URL = "https://calendly.com/ahmednazzal1710/30min";

const Landing = () => {
  const sponsors = [
    {
      name: "Patch",
      logo: Images.PatchLogo,
      logoClass: "h-15 md:h-16",
      cellClass: "lg:col-start-1 lg:row-start-3",
    },
    {
      name: "Hudson River Trading",
      logo: Images.HudsonRiverTradingLogo,
      logoClass: "h-20 md:h-24",
      cellClass: "lg:col-start-3 lg:row-start-2",
    },
    {
      name: "Techstars",
      logo: Images.TechstarsLogo,
      logoClass: "h-[8.5rem] md:h-[10.5rem]",
    },
    {
      name: "Ormeau Labs",
      logo: Images.OrmeauLabsLogo,
      logoClass: "h-16 md:h-20",
      cellClass: "lg:col-start-1 lg:row-start-4",
    },
    {
      name: "Allstate",
      logo: Images.AllstateLogo,
      logoClass: "h-22 md:h-28",
    },
    {
      name: "Options IT",
      logo: Images.OptionsLogo,
      logoClass: "h-16 md:h-20",
      cellClass: "lg:col-start-3 lg:row-start-1",
    },
    { name: "Kainos", logo: Images.KainosLogo, logoClass: "h-20 md:h-24" },
    {
      name: "EquipmentShare",
      logo: Images.EquipmentShareLogo,
      logoClass: "h-14 md:h-16",
    },
    {
      name: "ElevenLabs",
      logo: Images.ElevenLabsLogo,
      logoClass: "h-24 md:h-28",
      cellClass: "lg:col-start-1 lg:row-start-1",
    },
    {
      name: "Virtu Financial",
      logo: Images.VirtuFinancialLogo,
      logoClass: "h-16 md:h-20",
      cellClass: "lg:col-start-1 lg:row-start-2",
    },
    {
      name: "StIreland",
      logo: Images.StIrelandLogo,
      logoClass: "h-24 md:h-32",
      cellClass: "lg:col-start-5 lg:row-start-2",
    },
    {
      name: "Featherless",
      logo: (
        <div className="flex items-center gap-3">
          <img
            src={Images.FeatherlessIcon}
            alt="Featherless icon"
            className="h-10 w-auto object-contain md:h-12"
          />
          <img
            src={Images.FeatherlessText}
            alt="Featherless wordmark"
            className="h-7 w-auto object-contain md:h-8"
          />
        </div>
      ),
    },
    {
      name: "OpenAI",
      logo: Images.OpenAILogo,
      logoClass: "h-20 md:h-24",
      cellClass: "lg:col-start-5 lg:row-start-3",
    },
    {
      name: "Queen's University Belfast",
      logo: Images.QUBLogo,
      logoClass: "h-20 md:h-24",
    },
  ];

  return (
    <div className="relative isolate min-h-screen text-zinc-100 bg-transparent">
      {/* Hero is sized entirely in vw on md+ so it scales as one fixed
          composition and nothing drifts when the browser zoom changes. */}
      <section
        id="home"
        className="relative isolate flex min-h-[calc(100vh-5rem)] items-center overflow-hidden bg-[#191919] text-white md:h-[52.8vw] md:min-h-0"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-cover bg-[position:65%_center] opacity-30 mix-blend-screen md:bg-[length:100%_100%] md:bg-center"
          style={{ backgroundImage: `url(${topography})` }}
        />

        {/* Crosshair pinned on Belfast */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 hidden md:block"
        >
          <div className="absolute inset-y-0 left-[71.07vw] w-px bg-white/25" />
          <div className="absolute inset-x-0 top-[38.95vw] h-px bg-white/25" />
          <div className="absolute left-[71.07vw] top-[38.95vw] h-[0.79vw] w-[0.79vw] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-[#F89F2F] via-[#E03FAE] to-[#6E2BC8]" />
          <p className="absolute left-[71.92vw] top-[39.3vw] whitespace-nowrap font-mono text-[0.62vw] tracking-wide text-white/40">
            X: 5.9301° · Y: 54.5973°
          </p>
        </div>

        <div className="w-full px-4 py-24 md:absolute md:left-[7.33vw] md:top-[16.3vw] md:w-auto md:p-0">
          <h1 className="whitespace-nowrap font-wordmark text-[12.5vw] font-bold leading-none tracking-[-0.02em] md:text-[9.27vw]">
            HackBelfast
            <BelfastMark className="ml-[0.08em] inline-block h-[1em] w-[1.08em] align-[-0.15em]" />
          </h1>
          <div className="mt-14 flex flex-col gap-5 sm:flex-row md:mt-[6.05vw] md:gap-[3.04vw]">
            <a
              href={JOIN_TEAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-lg border-[3px] border-transparent [background-origin:border-box] bg-gradient-to-r from-orange-300 via-pink-300 to-violet-300 px-8 py-5 font-display text-lg font-semibold text-zinc-950 transition hover:from-orange-200 hover:via-pink-200 hover:to-violet-200 sm:min-w-[14rem] md:h-[4.56vw] md:w-[17.45vw] md:min-w-0 md:gap-[0.6vw] md:rounded-[0.42vw] md:border-[0.15vw] md:p-0 md:text-[1.15vw]"
            >
              Join the team
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1.5"
              >
                →
              </span>
            </a>
            <a
              href={SPONSOR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border-[3px] border-white bg-transparent px-8 py-5 font-display text-lg font-semibold text-white transition hover:bg-white hover:text-black sm:min-w-[14rem] md:h-[4.56vw] md:w-[17.45vw] md:min-w-0 md:rounded-[0.42vw] md:border-[0.15vw] md:p-0 md:text-[1.15vw]"
            >
              Sponsor
            </a>
          </div>
        </div>
      </section>

      <About />

      <section
        id="sponsors"
        className="relative w-full py-14 lg:py-20 flex items-center justify-center bg-transparent"
      >
        <div className="pointer-events-none absolute inset-0 -z-10 bg-transparent" />
        <div className="relative z-20 mx-auto w-full lg:w-[65%] px-4 md:px-8 py-8 md:py-12 rounded-2xl border border-white/10 bg-[#202020]">
          <h2 className="text-3xl font-semibold uppercase tracking-wide md:text-4xl">
            Sponsors
          </h2>
          <p className="mt-4 max-w-3xl text-zinc-400">
            Sponsors and community partners support the event with tooling,
            mentorship, and opportunities.
          </p>
          <div className="mt-10 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-6">
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.name}
                className={`flex min-h-[104px] items-center justify-center px-6 py-4 lg:col-span-2 ${sponsor.cellClass ?? ""}`}
              >
                {typeof sponsor.logo === "string" ? (
                  <img
                    src={sponsor.logo}
                    alt={`${sponsor.name} logo`}
                    className={`mx-auto w-auto object-contain ${sponsor.logoClass ?? "h-10 md:h-11"}`}
                  />
                ) : isValidElement(sponsor.logo) ? (
                  <div
                    className={`mx-auto flex items-center justify-center ${sponsor.logoClass ?? ""}`}
                  >
                    {sponsor.logo}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQs />
    </div>
  );
};

export default Landing;
