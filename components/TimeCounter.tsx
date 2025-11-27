import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const TimeCounter: React.FC = () => {
  // Set a start date (mocked as 2 years ago for demo)
  const [startDate] = useState(() => {
    return new Date(2023, 11, 28);

  });

  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTime({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [startDate]);

  return (
    <div className="w-full glass-panel rounded-2xl p-6 md:p-8 shadow-lg text-center transform hover:scale-[1.02] transition-transform duration-500">
      <div className="flex items-center justify-center space-x-2 mb-6 text-rose-800">
        <Clock className="w-5 h-5" />
        <h3 className="font-serif text-xl tracking-wider uppercase">Ti amo da</h3>
      </div>

      <div className="grid grid-cols-4 gap-2 md:gap-4">
        <div className="flex flex-col">
          <span className="text-3xl md:text-5xl font-bold text-rose-600 tabular-nums">{time.days}</span>
          <span className="text-xs md:text-sm text-rose-400 uppercase tracking-widest mt-1">Giorni</span>
        </div>
        <div className="flex flex-col">
          <span className="text-3xl md:text-5xl font-bold text-rose-600 tabular-nums">{time.hours}</span>
          <span className="text-xs md:text-sm text-rose-400 uppercase tracking-widest mt-1">Ore</span>
        </div>
        <div className="flex flex-col">
          <span className="text-3xl md:text-5xl font-bold text-rose-600 tabular-nums">{time.minutes}</span>
          <span className="text-xs md:text-sm text-rose-400 uppercase tracking-widest mt-1">Minuti</span>
        </div>
        <div className="flex flex-col">
          <span className="text-3xl md:text-5xl font-bold text-rose-600 tabular-nums">{time.seconds}</span>
          <span className="text-xs md:text-sm text-rose-400 uppercase tracking-widest mt-1">Secondi</span>
        </div>
      </div>

    </div>
  );
};

export default TimeCounter;