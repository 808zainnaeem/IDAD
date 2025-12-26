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
    { name: 'FTSE\nCSDI', angle: -25 },
    { name: 'GOLDMAN\nSACHS', angle: 20 },
    { name: 'SOCIÉTÉ\nGÉNÉRALE', angle: -10 },
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
            left: 5 + Math.random() * 90,
            rotateStart: Math.random() * 60 - 30,
            rotateEnd: logo.angle,
          },
        ]);
      }, delay);
    });
  }, []);

  const dropVariants = {
    initial: {
      y: -400,
      opacity: 0,
      rotate: (custom) => custom.rotateStart || 0,
    },
    animate: (custom) => ({
      y: window.innerHeight - 240,
      opacity: 1,
      rotate: custom.rotateEnd,
      transition: {
        y: {
          type: "spring",
          stiffness: 60,
          damping: 20,
          mass: 1.5,
          delay: 0,
        },
        opacity: { duration: 0.8, delay: 0.3 },
        rotate: {
          type: "spring",
          stiffness: 80,
          damping: 25,
          delay: 0.2,
        },
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
      style={{ backgroundColor: '#0b3d62' }} /* Dark blue background retained for premium feel */
    >
      {/* HEADER */}
      <header className="absolute top-0 left-0 right-0 flex justify-between items-center p-6 z-30">
        <div className="flex items-center gap-3 p-2 rounded-lg">
          <img
            src='/logow.png' /* Replace with your actual company logo path, e.g., '/autocall-logo.png' */
            alt="Company Logo"
            className="w-26 md:w-50" /* Responsive logo size */
          />
        </div>
        {/* <button className="px-6 md:px-8 py-2.5 border border-white/50 text-white rounded-lg hover:bg-white/10 transition-all text-sm md:text-base"> */}
          {/* Contact Us */}
        {/* </button> */}
      </header>
     
      {/* DROPPING LOGOS - Updated to major issuers and indices from your content */}
      {logos.map((logo) => (
        <motion.div
          key={logo.id}
          className="absolute pointer-events-none hidden md:block"
          style={{ left: `${logo.left}%` }}
          variants={dropVariants}
          initial="initial"
          animate="animate"
          custom={logo}
        >
          <motion.div
            className="rounded-full flex items-center justify-center shadow-2xl"
            style={{
              width: '200px',
              height: '200px',
              background: '#337543', /* Primary green retained */
            }}
            whileHover={{ scale: 1.08, transition: { duration: 0.3 } }}
          >
            <span className="text-lg font-black text-white text-center leading-tight whitespace-pre-line px-4">
              {logo.name}
            </span>
          </motion.div>
        </motion.div>
      ))}

      {/* INSET FRAME UI LINES */}
      <div className="absolute top-10 left-10 right-10 h-[1px] bg-[#01a96b]/20 z-0 hidden md:block"></div>
      <div className="absolute top-10 left-10 bottom-10 w-[1px] bg-[#01a96b]/20 z-0 hidden md:block"></div>
      <div className="absolute bottom-10 left-10 w-[60%] h-[1px] bg-[#01a96b]/20 z-0 hidden md:block"></div>
      <div className="absolute top-[30%] right-10 h-[40%] w-[1px] bg-[#01a96b]/20 z-0 hidden md:block"></div>

      {/* MAIN CONTENT - Updated title to reflect Autocall strengths */}
      <div className="h-screen flex flex-col items-center justify-center text-center px-6 md:px-4 pointer-events-none">
        <div className="space-y-4 md:space-y-2 max-w-5xl mx-auto">
          <motion.h1
            custom={0}
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            className="text-6xl md:text-8xl font-light text-white tracking-tight leading-tight"
          >
            Consistent
          </motion.h1>
          <motion.h2
            custom={1}
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            className="text-6xl md:text-8xl font-light text-[#01a96b] tracking-tight leading-tight"
          >
            Returns
          </motion.h2>
          <motion.h3
            custom={2}
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            className="text-6xl md:text-8xl font-light text-white tracking-tight leading-tight"
          >
            in Volatile Markets.
          </motion.h3>
        </div>
      </div>

      {/* BOTTOM NAV */}
      {/* <nav className="fixed h-15 bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-md md:w-[30%] md:top-0 md:bottom-auto md:mt-10 flex justify-center gap-6 md:gap-12 z-20 bg-white/10 backdrop-blur-lg rounded-xl py-4 md:py-0 px-6">
        <button className="text-white font-medium text-sm hover:text-[#01a96b] transition-colors">
          HOME
        </button>
        <button className="text-white/50 font-medium text-sm hover:text-[#01a96b] transition-colors">
          PERFORMANCE
        </button>
        <button className="text-white/50 font-medium text-sm hover:text-[#01a96b] transition-colors">
          ABOUT AUTOCALLS
        </button>
      </nav> */}

      {/* DIAGONAL LINE */}
      <div
        className="absolute bottom-20 right-[-40px] w-[880px] h-[1px] bg-[#01a96b]/15 pointer-events-none z-0 hidden md:block"
        style={{ transform: 'rotate(-35deg)', transformOrigin: 'center' }}
      ></div>
    </div>
  );
}