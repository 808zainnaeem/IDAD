import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function AutocallLanding() {
  const [logos, setLogos] = useState([]);

  const logoData = [
    { name: 'HSBC', angle: 15 },
    { name: 'MORGAN\nSTANLEY', angle: -20 },
    { name: 'CITIGROUP', angle: 0 },
    { name: 'BNP\nPARIBAS', angle: 25 },
    { name: 'BARCLAYS', angle: -15 },
    { name: 'FTSE\n100', angle: 10 },
  ];

  useEffect(() => {
    const shuffled = [...logoData].sort(() => Math.random() - 0.5);

    shuffled.forEach((logo, index) => {
      const delay = index * 300 + Math.random() * 400;

      setTimeout(() => {
        setLogos((prev) => [
          ...prev,
          {
            ...logo,
            id: index,
            left: 10 + Math.random() * 80,
            rotateStart: Math.random() * 60 - 30,
            rotateEnd: logo.angle,
          },
        ]);
      }, delay);
    });
  }, []);

  const dropVariants = {
    initial: {
      y: -500,
      opacity: 0,
      rotate: (custom) => custom.rotateStart || 0,
    },
    animate: (custom) => ({
      y: window.innerHeight - 280,
      opacity: 1,
      rotate: custom.rotateEnd,
      transition: {
        y: { type: "spring", stiffness: 60, damping: 20, mass: 1.5 },
        opacity: { duration: 0.8, delay: 0.3 },
        rotate: { type: "spring", stiffness: 80, damping: 25, delay: 0.2 },
      },
    }),
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3 + 2,
        duration: 1.4,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <div
      className="relative w-full min-h-screen overflow-hidden"
      style={{ backgroundColor: '#0b3d62' }}
    >
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#0b3d62] via-[#0f4a75] to-[#0b3d62]"
          animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
        />

        {/* Fixed Animated Grid Pattern - Now pulses gently without disappearing */}
        <div className="absolute inset-0 opacity-50">
          {Array(20)
            .fill()
            .map((_, i) => (
              <motion.div
                key={`horizontal-${i}`}
                className="absolute bg-white/20 h-px w-full"
                style={{ top: `${i * 5}%` }}
                animate={{ opacity: [0.15, 0.35, 0.15] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  delay: i * 0.15,
                }}
              />
            ))}
          {Array(20)
            .fill()
            .map((_, i) => (
              <motion.div
                key={`vertical-${i + 20}`}
                className="absolute bg-white/20 w-px h-full"
                style={{ left: `${i * 5}%` }}
                animate={{ opacity: [0.15, 0.35, 0.15] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  delay: i * 0.15,
                }}
              />
            ))}
        </div>
      </div>

      {/* HEADER */}
      <header className="absolute top-0 left-0 right-0 flex justify-between items-center p-6 z-30">
        <div className="flex items-center gap-3 p-2 rounded-lg">
          <img src="/logow.png" alt="Company Logo" className="h-10 md:h-14" />
        </div>
      </header>

      {/* DROPPING LOGOS - Desktop */}
      {logos.map((logo) => (
        <motion.div
          key={logo.id}
          className="absolute pointer-events-none hidden lg:block z-1000"
          style={{ left: `${logo.left}%`, transform: 'translateX(-50%)' }}
          variants={dropVariants}
          initial="initial"
          animate="animate"
          custom={logo}
        >
          <motion.div
            className="rounded-full flex items-center justify-center shadow-2xl border-white/10"
            style={{ width: '180px', height: '180px', background: '#337543' }}
            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
          >
            <span className="text-lg md:text-xl font-black text-white text-center leading-tight whitespace-pre-line px-6">
              {logo.name}
            </span>
          </motion.div>
        </motion.div>
      ))}

      {/* Smaller logos for tablet */}
      {logos.slice(0, 5).map((logo) => (
        <motion.div
          key={`sm-${logo.id}`}
          className="absolute pointer-events-none hidden md:block lg:hidden"
          style={{ left: `${logo.left}%`, transform: 'translateX(-50%)' }}
          variants={dropVariants}
          initial="initial"
          animate="animate"
          custom={logo}
        >
          <motion.div
            className="rounded-full flex items-center justify-center shadow-xl"
            style={{ width: '120px', height: '120px', background: '#337543' }}
          >
            <span className="text-sm font-bold text-white text-center leading-tight whitespace-pre-line px-3">
              {logo.name}
            </span>
          </motion.div>
        </motion.div>
      ))}

      {/* INSET FRAME LINES */}
      <div className="absolute top-10 left-10 right-10 h-[1px] bg-[#01a96b]/20 z-0 hidden md:block"></div>
      <div className="absolute top-10 left-10 bottom-10 w-[1px] bg-[#01a96b]/20 z-0 hidden md:block"></div>
      <div className="absolute bottom-10 left-10 w-[60%] h-[1px] bg-[#01a96b]/20 z-0 hidden md:block"></div>
      <div className="absolute top-[30%] right-10 h-[40%] w-[1px] bg-[#01a96b]/20 z-0 hidden md:block"></div>

      {/* MAIN CONTENT */}
      <div className="h-screen flex flex-col items-center justify-center text-center px-6 pointer-events-none relative ">
        <div className="space-y-4 md:space-y-6 max-w-6xl mx-auto">
          <motion.h1
            custom={0}
            variants={titleVariants}
            initial="hidden"
            animate="visible"
className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-white tracking-tight leading-none mt-0 sm:mt-[-120px]"
          >
            Consistent Returns
          </motion.h1>
          <motion.h2
            custom={1}
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-[#01a96b] tracking-tight leading-none"
          >
             in Volatile Markets.
          </motion.h2>
          <motion.h3
            custom={2}
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-white tracking-tight leading-none"
          >
           
          </motion.h3>
        </div>
      </div>

      {/* DIAGONAL LINE */}
      <div
        className="absolute bottom-20 right-[-40px] w-[880px] h-[1px] bg-[#01a96b]/15 pointer-events-none z-0 hidden md:block"
        style={{ transform: 'rotate(-35deg)', transformOrigin: 'center' }}
      ></div>
    </div>
  );
}