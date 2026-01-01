import { useState, useEffect } from 'react';

export default function Loader() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 3000; // 3 seconds total
    const target = 100;
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      // Calculate percentage based on time elapsed
      const percentage = Math.min((progress / duration) * target, target);

      // Update count (rounded down, but 100 exactly at the end)
      setCount(Math.floor(percentage));

      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        // Force final value to 100 to avoid any floating-point issues
        setCount(100);
      }
    };

    requestAnimationFrame(animate);

    // Cleanup not strictly needed with rAF, but good practice
    return () => {
      startTime = null;
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100000000] flex flex-col justify-end items-start bg-[#0b3d62] p-8 md:p-12 lg:p-20 overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#01a96b]/10 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 flex items-end">
        {/* Counter Number - Bottom Left */}
        <div className="text-[#01a96b] font-light tracking-tighter drop-shadow-2xl">
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