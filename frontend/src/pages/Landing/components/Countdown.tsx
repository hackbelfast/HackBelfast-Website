import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-03-07T09:00:00+00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full">
      <div className="mb-7 border-b border-zinc-800 pb-4">
        <h2 className="text-2xl font-semibold uppercase tracking-wide md:text-3xl">
          Starts In
        </h2>
        <p className="mt-1 text-sm uppercase tracking-[0.18em] text-zinc-400">
          7-8 March 2026
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        <div className="border border-zinc-800 bg-zinc-950 p-4 text-center">
          <div className="text-4xl font-semibold text-zinc-100 md:text-5xl">
            {timeLeft.days}
          </div>
          <div className="mt-2 text-xs uppercase tracking-[0.18em] text-zinc-500">Days</div>
        </div>

        <div className="border border-zinc-800 bg-zinc-950 p-4 text-center">
          <div className="text-4xl font-semibold text-zinc-100 md:text-5xl">
            {timeLeft.hours}
          </div>
          <div className="mt-2 text-xs uppercase tracking-[0.18em] text-zinc-500">Hours</div>
        </div>

        <div className="border border-zinc-800 bg-zinc-950 p-4 text-center">
          <div className="text-4xl font-semibold text-zinc-100 md:text-5xl">
            {timeLeft.minutes}
          </div>
          <div className="mt-2 text-xs uppercase tracking-[0.18em] text-zinc-500">Minutes</div>
        </div>

        <div className="border border-zinc-800 bg-zinc-950 p-4 text-center">
          <div className="text-4xl font-semibold text-zinc-100 md:text-5xl">
            {timeLeft.seconds}
          </div>
          <div className="mt-2 text-xs uppercase tracking-[0.18em] text-zinc-500">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;