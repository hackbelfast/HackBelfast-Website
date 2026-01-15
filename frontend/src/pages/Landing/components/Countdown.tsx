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
    <div className="w-full max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Hackathon Starts In
        </h2>
        <p className="text-gray-400">7-8 March 2026</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-xl p-6 text-center">
          <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-2">
            {timeLeft.days}
          </div>
          <div className="text-sm md:text-base text-gray-400 uppercase tracking-wider">
            Days
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-xl p-6 text-center">
          <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2">
            {timeLeft.hours}
          </div>
          <div className="text-sm md:text-base text-gray-400 uppercase tracking-wider">
            Hours
          </div>
        </div>

        <div className="bg-gradient-to-br from-red-500/10 to-pink-500/10 border border-pink-500/30 rounded-xl p-6 text-center">
          <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent mb-2">
            {timeLeft.minutes}
          </div>
          <div className="text-sm md:text-base text-gray-400 uppercase tracking-wider">
            Minutes
          </div>
        </div>

        <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-purple-500/30 rounded-xl p-6 text-center">
          <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-2">
            {timeLeft.seconds}
          </div>
          <div className="text-sm md:text-base text-gray-400 uppercase tracking-wider">
            Seconds
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
