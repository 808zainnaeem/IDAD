import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Placeholder issuer logos
  const issuerLogos = [
    "https://i.pravatar.cc/150?img=12",
    "https://i.pravatar.cc/150?img=33",
    "https://i.pravatar.cc/150?img=56",
    "https://i.pravatar.cc/150?img=68",
  ];

  // Animation variants
  const lineVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.9,
        delay: 0.6,
        ease: 'easeOut',
      },
    },
  };

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
    <>
      {/* Hero Section */}
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
                        custom={i}
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
                onClick={() => setIsModalOpen(true)}
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

            {/* Right Side - Description */}
            <div className="w-full lg:w-5/12">
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={descriptionVariants}
                className="text-sm sm:text-base md:text-lg uppercase tracking-widest leading-relaxed text-white/60"
              >
                Over a decade of proven resilience: 99.7% positive returns, no capital losses when held to maturity, 
                and consistent outperformance through Brexit, COVID-19, and market volatility — delivered by the world's leading investment banks.
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* Dark Theme Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 bg-[#0b3d62]/80 z-50 flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0b3d62] rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto relative border border-gray-800"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-gray-400 hover:text-white transition z-10 bg-gray-800/50 rounded-full p-2 hover:bg-gray-700"
              >
                <X size={32} />
              </button>

              <div className="p-8 md:p-12 lg:p-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-10 text-center">
                  Overall Performance Summary
                </h2>

                {/* Performance List */}
                <ul className="space-y-5 text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                  <li><strong className="text-white">Total matured plans:</strong> 338</li>
                  <li><strong className="text-white">All matured positively</strong> in line with their stated terms</li>
                  <li><strong className="text-white">Average annualised return:</strong> 7.85% over average term of 1.98 years</li>
                  <li><strong className="text-white">Bottom quartile average annualised return:</strong> 6.54% p.a.</li>
                  <li><strong className="text-white">Top quartile average annualised return:</strong> 9.33% p.a.</li>
                  <li><strong className="text-white">At the money / flat contracts</strong> deliver 8.78% p.a. average over average 1.89 years</li>
                  <li><strong className="text-white">Step-down shapes</strong> dominated representing 60% of all maturities</li>
                  <li><strong className="text-white">HSBC Bank</strong> dominated as counterparty – representing 32% of maturities</li>
                  <li><strong className="text-white">FTSE CSDI linked contracts</strong> deliver 1.84% per annum average performance premium over those using FTSE 100</li>
                </ul>

                {/* Highlight Cards - Dark Style */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16">
                  <div className="bg-gradient-to-br from-green-900/50 to-green-800/30 backdrop-blur-sm rounded-2xl p-8 text-center border border-green-700/30 shadow-xl">
                    <p className="text-5xl md:text-6xl font-bold text-green-400">7.85%</p>
                    <p className="text-gray-300 mt-4 text-base md:text-lg">Average Annualised Return</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/30 backdrop-blur-sm rounded-2xl p-8 text-center border border-blue-700/30 shadow-xl">
                    <p className="text-5xl md:text-6xl font-bold text-blue-400">100%</p>
                    <p className="text-gray-300 mt-4 text-base md:text-lg">Positive Maturities</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 backdrop-blur-sm rounded-2xl p-8 text-center border border-purple-700/30 shadow-xl">
                    <p className="text-5xl md:text-6xl font-bold text-purple-400">+1.84%</p>
                    <p className="text-gray-300 mt-4 text-base md:text-lg">FTSE CSDI Premium</p>
                  </div>
                </div>

                {/* Image Section */}
                <div className="mt-16 flex justify-center">
                  <img
                    src="/per.jpg"
                    alt="Performance chart"
                    className="max-w-full h-auto rounded-xl shadow-2xl border border-gray-700"
                  />
                </div>

                <div className="mt-10 text-center text-gray-500 text-sm">
                  Data accurate as of latest maturity records
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}