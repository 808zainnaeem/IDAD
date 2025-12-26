import { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

export default function Performance({ onOpenModal }) {
  const issuerLogos = [
    "https://i.pravatar.cc/150?img=12",
    "https://i.pravatar.cc/150?img=33",
    "https://i.pravatar.cc/150?img=56",
    "https://i.pravatar.cc/150?img=68",
  ];

  const buttonVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: 'rgba(1, 169, 107, 0.15)',
      borderColor: '#01a96b',
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.98 },
  };

  return (
    <div className="bg-[#0b3d62] px-6 py-16 md:px-12 md:py-24 lg:px-24 lg:py-32 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-20">
          {/* Left Side - Headline */}
          <div className="w-full lg:w-7/12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight text-white mb-12 lg:mb-16">
              <motion.span
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                You don't have to
              </motion.span>

              <motion.span
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                take (
                <motion.span
                  className="inline-flex -space-x-3 md:-space-x-4 mx-2 align-middle relative"
                  style={{ top: '-6px' }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.5 }}
                >
                  {issuerLogos.map((src, i) => (
                    <motion.img
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.6 + i * 0.12,
                        duration: 0.6,
                        ease: 'easeOut',
                      }}
                      src={src}
                      alt="Issuer logo"
                      className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full bg-white p-3 border-4 md:border-6 border-[#0b3d62] object-contain"
                    />
                  ))}
                </motion.span>
                ) word for
              </motion.span>

              <motion.span
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                it.
              </motion.span>
            </h1>

            <motion.button
              onClick={onOpenModal}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 0.7 }}
              whileHover="hover"
              whileTap="tap"
              variants={buttonVariants}
              className="px-8 py-4 md:px-10 md:py-5 border border-white/40 rounded-full text-base md:text-lg font-medium text-white transition-all duration-300 hover:border-white/60"
            >
              View Performance Data
            </motion.button>
          </div>

          {/* Right Side - Performance Overview */}
          <div className="w-full lg:w-5/12">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="space-y-8"
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-white">
                Performance Overview
              </h2>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-white/80">
                Autocalls have demonstrated consistent performance across multiple market cycles, including periods of heightened volatility, economic uncertainty, and changing interest rate environments.
              </p>
              <ul className="space-y-4 text-sm sm:text-base md:text-lg text-white/70 list-disc list-inside">
                <li>
                  <span className="text-white font-medium">Average returns across 2016–2025</span> remained above <span className="text-green-400 font-semibold">7% p.a.</span>
                </li>
                <li>
                  <span className="text-white font-medium">No capital losses</span> were recorded when products were held to maturity
                </li>
                <li>
                  <span className="text-white font-medium">FTSE-linked autocalls</span> outperformed many traditional investment alternatives
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}