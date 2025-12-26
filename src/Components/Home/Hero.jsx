import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function AutocallLanding() {
  const [logos, setLogos] = useState([]);

  const logoData = [
    { name: '338 Autocalls Analysed', angle: 15 },
    { name: '100% Positive Outcomes in 2025', angle: -20 },
    { name: '7.85% Average Annualised Return', angle: 0 },
    { name: '1.98 Year Average Term', angle: 25 },

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
      y: window.innerHeight - 220,
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

  const navItems = [
    { label: 'Overview', active: true },
    { label: 'The Review', active: false },
    { label: 'Key Findings', active: false },
    { label: 'Performance', active: false },
    { label: 'How Autocalls Work', active: false },
    { label: 'About', active: false },
    { label: 'Contact', active: false },
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image with Black Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://assets.weforum.org/article/image/responsive_big_88hn1MXZpFiLa4BcyfaqpyV-Q3l6j3i-GRb1Xfdb0mw.jpg')`,
        }}
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#0b3d62]/80 via-[#0f4a75]/80 to-[#0b3d62]/80"
          animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
        />

        {/* Fixed Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-40">
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

      {/* DROPPING LOGOS - Desktop with enhanced hover */}
      {logos.map((logo) => (
        <motion.div
          key={logo.id}
          className="absolute pointer-events-auto hidden lg:block z-10"
          style={{ left: `${logo.left}%`, transform: 'translateX(-50%)' }}
          variants={dropVariants}
          initial="initial"
          animate="animate"
          custom={logo}
        >
          <motion.div
            className="rounded-full flex items-center justify-center shadow-2xl border-4 border-[#337543] bg-[#337543] relative overflow-hidden"
            style={{ width: '160px', height: '160px' }}
            whileHover={{
              scale: 1.2,
              y: -10,
              boxShadow: '0 0 40px rgba(1, 169, 107, 0.8)',
              borderColor: '#01ff8a',
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* Glow ring on hover */}
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-transparent"
              whileHover={{
                boxShadow: 'inset 0 0 60px rgba(1, 169, 107, 0.4), 0 0 60px rgba(1, 169, 107, 0.6)',
              }}
            />
            <span className="relative z-10 text-lg md:text-xl font-black text-white text-center leading-tight whitespace-pre-line px-6">
              {logo.name}
            </span>
          </motion.div>
        </motion.div>
      ))}

      {/* Tablet version */}
      {logos.slice(0, 5).map((logo) => (
        <motion.div
          key={`sm-${logo.id}`}
          className="absolute pointer-events-auto hidden md:block lg:hidden z-10"
          style={{ left: `${logo.left}%`, transform: 'translateX(-50%)' }}
          variants={dropVariants}
          initial="initial"
          animate="animate"
          custom={logo}
        >
          <motion.div
            className="rounded-full flex items-center justify-center shadow-xl border-4 border-[#337543] bg-[#337543]"
            style={{ width: '120px', height: '120px' }}
            whileHover={{
              scale: 1.2,
              y: -8,
              boxShadow: '0 0 30px rgba(1, 169, 107, 0.7)',
              borderColor: '#01ff8a',
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
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
      <div className="h-screen flex flex-col items-center justify-center text-center px-6 relative z-10">
        <div className="space-y-6 md:space-y-8 max-w-5xl mx-auto">
          <div>
            <motion.h1
              custom={0}
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-none"
            >
            The 2026 UK Autocall Review
            </motion.h1>
            <motion.h2
              custom={1}
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[#01a96b] tracking-tight leading-none"
            >
            Evidence-based insight into the performance of FTSE-linked autocall investments.

            </motion.h2>
          </div>

          <motion.p
            custom={2}
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            className="text-lg sm:text-xl md:text-1xl text-white/80 max-w-3xl mx-auto leading-relaxed mt-8"
          >
      An independent review of UK retail autocalls maturing in 2025, 
            <br className="hidden sm:block" />
supported by over a decade of performance data.
          </motion.p>
        </div>
      </div>

      {/* DIAGONAL LINE */}
      <div
        className="absolute bottom-20 right-[-40px] w-[880px] h-[1px] bg-[#01a96b]/15 pointer-events-none z-0 hidden md:block"
        style={{ transform: 'rotate(-35deg)', transformOrigin: 'center' }}
      ></div>

      {/* CENTERED NAVIGATION - Responsive */}
      <nav className="fixed z-50 bg-white/10 backdrop-blur-lg rounded-2xl py-4 px-6 shadow-2xl
        bottom-4 left-1/2 -translate-x-1/2 w-max max-w-[90vw] 
        md:top-10 md:bottom-auto md:left-1/2 md:-translate-x-1/2">
        <div className="flex flex-wrap justify-center gap-4 md:gap-1">
          {navItems.map((item) => (
            <motion.button
              key={item.label}
              className={`relative px-6 py-3 text-[10px] md:text-xs font-medium transition-colors ${
                item.active ? 'text-[#01a96b]' : 'text-white/70 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="absolute inset-0 rounded-full bg-white/10"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.3, opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
              <span className="relative z-10">{item.label.toUpperCase()}</span>
            </motion.button>
          ))}
        </div>
      </nav>
    </div>
  );
}