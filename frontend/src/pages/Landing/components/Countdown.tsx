import { useEffect, useState } from "react";
import logo from "../../../assets/HackBelfast_logo.png";

const TARGET_DATE_MS = new Date("2026-04-11T10:00:00+01:00").getTime();

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const getTimeLeft = (): TimeLeft => {
  const distance = TARGET_DATE_MS - Date.now();

  if (distance <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000),
  };
};

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => getTimeLeft());

  useEffect(() => {
    setTimeLeft(getTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const countdownBlocks = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="w-full">
      <div className="mb-7 flex items-end justify-between gap-4 border-b border-zinc-800 pb-4">
        <div>
          <h2 className="text-2xl font-semibold uppercase tracking-wide md:text-3xl">
            Starts In
          </h2>
          <p className="mt-1 text-sm uppercase tracking-[0.18em] text-zinc-400">
            11-12 April 2026 | 10:00 AM
          </p>
        </div>
        <img
          src={logo}
          alt="HackBelfast"
          className="h-12 w-auto opacity-90 saturate-[0.85] md:h-14"
        />
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {countdownBlocks.map((block) => (
          <div key={block.label} className="bg-zinc-950 p-4 text-center md:p-5">
            <div className="text-4xl font-semibold text-zinc-100 md:text-5xl">
              {String(block.value).padStart(2, "0")}
            </div>
            <div className="mt-2 text-xs uppercase tracking-[0.18em] text-zinc-500">
              {block.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;

