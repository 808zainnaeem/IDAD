import React from 'react';
import { motion } from 'framer-motion';

export default function IDADLandingPage() {
  // Updated text arrays to reflect IDAD's expertise in Autocall Structured Products
  const headingWords = ['Proven', 'Performance', 'Through', 'Volatility'];
  const headerWords = 'AUTOCALLS'.split('');

  // Animation variants (kept clean and performant)
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.1, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const headingWordVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
    },
  };

  const headerWordVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
    },
  };

  const descVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
    },
    hover: {
      scale: 1.05,
      backgroundColor: '#01a96b',
      boxShadow: '0 8px 25px rgba(1, 169, 107, 0.3)',
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.98 },
  };

  return (
    <div 
      className="relative w-full min-h-screen" 
      style={{ 
        backgroundColor: '#0b3d62',
        color: 'white',
        overflow: 'hidden'
      }}
    >
      {/* Subtle animated background gradient */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{
          background: [
            'radial-gradient(circle at 20% 30%, rgba(1, 169, 107, 0.15), #0b3d62)',
            'radial-gradient(circle at 80% 70%, rgba(51, 117, 67, 0.1), #0b3d62)',
            'radial-gradient(circle at 40% 80%, rgba(1, 169, 107, 0.12), #0b3d62)',
          ],
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          repeatType: 'reverse',
          ease: 'easeInOut'
        }}
      />

      {/* UI accent lines */}
      <div className="absolute top-10 left-10 right-10 h-[1px] bg-[#01a96b]/20 z-0 hidden md:block"></div>
      <div className="absolute top-10 left-10 bottom-10 w-[1px] bg-[#01a96b]/20 z-0 hidden md:block"></div>
      <div className="absolute bottom-10 left-10 w-[60%] h-[1px] bg-[#01a96b]/20 z-0 hidden md:block"></div>

      <motion.div
        className="flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 py-12 md:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Main content - responsive layout */}
        <div className="flex flex-col lg:flex-row w-full max-w-7xl gap-12 lg:gap-20 items-center lg:items-end">
          {/* Left section - Big Typography */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-widest leading-tight"
              variants={containerVariants}
            >
              {headingWords.map((word, index) => (
                <motion.span
                  key={index}
                  variants={headingWordVariants}
                  style={{ display: 'block' }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          {/* Right section - Company Info */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8 lg:gap-10 max-w-lg">
            <motion.div variants={containerVariants}>
              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl tracking-widest mb-6"
                style={{ color: '#01a96b' }}
              >
                  <motion.span
                    variants={headerWordVariants}
                    style={{ display: 'inline-block', marginRight: '2px' }}
                  >
AUTOCALLS                  </motion.span>
              </motion.h2>
            </motion.div>

            <motion.div
              className="text-base sm:text-lg text-white/80 leading-relaxed"
              variants={descVariants}
            >
              <p>
                 Autocall Review analyzes the performance of FTSE-linked, capital-at-risk autocall structured products in the UK retail sector, specifically focusing on those maturing in 2025. The review also spans the decade-long performance from 2016 to 2025, providing insights into the resilience and performance of these products.
              </p>
            </motion.div>

            {/* Call-to-action button */}
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <button 
                className="group relative px-10 py-5 border border-[#01a96b]/40 text-white font-medium rounded-xl overflow-hidden transition-all duration-300"
                style={{
                  backgroundColor: '#337543',
                }}
              >
                <span className="relative z-10 flex items-center">
                  DISCOVER AUTOCALLS
                  <motion.span
                    className="ml-4 text-[#01a96b] font-bold"
                    animate={{ x: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    →
                  </motion.span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-[#01a96b]"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Diagonal accent line */}
      <div
        className="absolute bottom-20 right-[-20%] w-[120vw] h-[1px] bg-[#01a96b]/15 pointer-events-none z-0 hidden md:block"
        style={{ 
          transform: 'rotate(-25deg)', 
          transformOrigin: 'right center'
        }}
      />
    </div>
  );
}