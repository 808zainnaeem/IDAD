import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, TrendingUp, Calendar, CheckCircle, Clock, Shield } from 'lucide-react';

export default function HowWorks() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Placeholder issuer logos
  const issuerLogos = [
    "https://i.pravatar.cc/150?img=12",
    "https://i.pravatar.cc/150?img=33",
    "https://i.pravatar.cc/150?img=56",
    "https://i.pravatar.cc/150?img=68",
  ];

  // Animation variants (existing)
  const descriptionVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, delay: 0.6, ease: 'easeOut' },
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

  // New stagger animation for how-it-works steps
  const stepContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  const steps = [
    {
      icon: TrendingUp,
      title: "Defined Returns",
      desc: "Fixed coupons (typically 6-10% p.a.) paid at maturity if conditions are met",
    },
    {
      icon: Calendar,
      title: "Multiple Maturity Opportunities",
      desc: "Annual, or more frequent observation dates from year 1, 2 or 3",
    },
    {
      icon: Shield,
      title: "Capital Protection Barriers",
      desc: "European-style barriers (60-70% of initial level) observed only at final maturity",
    },
    {
      icon: CheckCircle,
      title: "Early Maturity Potential",
      desc: "Plans 'kick out' when index reaches trigger level, returning capital plus accumulated coupons",
    },
    {
      icon: Clock,
      title: "Market Resilience",
      desc: "Typically designed to mature in flat, modestly positive or, even falling markets, never requiring strong growth",
    },
  ];

  return (
    <>
      {/* Hero Section (unchanged left side) */}
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

            {/* Right Side - Performance Overview (previous update) */}
            <div className="w-full lg:w-5/12">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={descriptionVariants}
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

      {/* NEW SECTION 5: HOW AUTOCALLS WORK */}
      <section className="bg-gray-50 py-16 md:py-24 lg:py-32">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0b3d62] mb-6">
              Understanding Autocall Investments
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Autocalls are structured investments designed to deliver predefined returns based on the performance of an underlying index, most commonly the FTSE 100 or FTSE CSDI.
            </p>
          </motion.div>

          {/* Steps with Icons */}
          <motion.div
            variants={stepContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={stepVariants}
                className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="bg-[#0b3d62] p-6 rounded-full mb-6">
                  <step.icon className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#0b3d62] mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.desc}
                </p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <svg className="w-8 h-8 text-[#0b3d62]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Closing Line */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-20 text-center"
          >
            <div className="inline-flex items-center bg-green-50 px-8 py-6 rounded-2xl border border-green-200">
              <Shield className="w-10 h-10 text-green-600 mr-4" />
              <p className="text-xl md:text-2xl font-medium text-gray-800">
                This structure allows investors to benefit even in <strong className="text-[#0b3d62]">flat or moderately declining markets</strong>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Existing Modal (unchanged) */}
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