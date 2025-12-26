import { useState, useEffect } from 'react';

export default function Loader() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 100;
    const increment = 100 / steps;
    const stepDuration = duration / steps;

    let currentCount = 0;
    const timer = setInterval(() => {
      currentCount += increment;
      if (currentCount >= 100) {
        setCount(100);
        clearInterval(timer);
      } else {
        setCount(Math.floor(currentCount));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-[100000000] flex flex-col justify-end items-start bg-[#0b3d62] p-8 md:p-12 lg:p-20 overflow-hidden">
      {/* New dark blue background */}

      {/* Subtle gradient overlay with new accent */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#01a96b]/10 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 flex items-end">
        {/* Counter Number - Bottom Left */}
        <div className="text-[#01a96b] font-light tracking-tighter drop-shadow-2xl">
          {/* Bright teal accent */}
          <span className="text-7xl sm:text-8xl md:text-[10rem] lg:text-[14rem] xl:text-[16rem] leading-none block">
            {String(count).padStart(3, '0')}
          </span>
        </div>

        {/* "%" label */}
        <div className="mb-4 md:mb-8 text-[#01a96b]/60 font-light text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-wide">
          %
        </div>
      </div>

      {/* Loading text - Top Right */}
      <div className="absolute top-8 right-8 md:top-16 md:right-16 text-white/40 font-light text-base sm:text-lg md:text-xl tracking-wider">
        Loading experience...
      </div>
    </div>
  );
}