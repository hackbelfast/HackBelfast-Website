import { Link } from "react-router-dom";
import logo from "../../assets/HackBelfast_logo.png";

const RegisterClosed = () => {
  return (
    <div className="relative isolate min-h-[72vh] overflow-hidden text-zinc-100">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-zinc-950" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-38 [background-image:radial-gradient(circle,rgba(255,255,255,0.85)_1.8px,transparent_2.2px)] [background-size:18px_18px] [mask-image:radial-gradient(54rem_30rem_at_50%_38%,black_0%,transparent_80%)] [animation:matrix-drift_20s_linear_infinite]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-22 [background-image:radial-gradient(circle,rgba(251,146,60,0.85)_1.9px,transparent_2.3px)] [background-size:20px_20px] [mask-image:radial-gradient(34rem_20rem_at_74%_22%,black_0%,transparent_82%)] [animation:matrix-float_15s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-22 [background-image:radial-gradient(circle,rgba(126,34,206,0.8)_1.9px,transparent_2.3px)] [background-size:20px_20px] [mask-image:radial-gradient(34rem_20rem_at_20%_76%,black_0%,transparent_82%)] [animation:matrix-orbit_22s_ease-in-out_infinite]" />

      <section className="mx-auto flex min-h-[72vh] max-w-5xl items-center px-4 py-14 md:py-20">
        <div className="w-full border border-zinc-800 bg-zinc-950/82 p-7 md:p-11">
          <img
            src={logo}
            alt="HackBelfast"
            className="mb-8 h-16 w-auto opacity-85 saturate-[0.85] md:h-20"
          />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 md:text-sm">
            HackBelfast Applications
          </p>
          <h1 className="mt-4 text-3xl font-semibold uppercase leading-tight md:text-5xl">
            Applications are Not Open Yet.
          </h1>
          <p className="mt-6 max-w-3xl text-zinc-300 md:text-lg">
            Thank you for your interest in HackBelfast. Registration is not open
            just yet. Please check back soon for updates!
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/" className="btn-primary px-8 py-3">
              Back to Home
            </Link>
            <a
              href="https://calendly.com/ahmednazzal1710/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary px-8 py-3"
            >
              Sponsor Enquiry
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegisterClosed;
