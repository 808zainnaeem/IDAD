import React from 'react';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 80, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 16,
    },
  },
};

const hoverVariants = {
  hover: {
    scale: 1.08,
    y: -16,
    transition: { type: 'spring', stiffness: 350, damping: 14 },
  },
};

const glowVariants = {
  hover: {
    opacity: [0.25, 0.6, 0.25],
    scale: [1, 1.15, 1],
    transition: { duration: 2.5, repeat: Infinity },
  },
};

const featuresData = [
  {
    title: 'Shapes',
    highlight: 'Flexible Structures',
    items: [
      '<strong>At-the-money/Level:</strong> Trigger at the initial index level throughout.',
      '<strong>Hurdle:</strong> Trigger above the initial level (e.g., 105%) throughout.',
      '<strong>Initial Hurdle:</strong> Trigger above initial level early, then at initial level.',
      '<strong>Defensive:</strong> Trigger below the initial level (e.g., 95%) flat throughout.',
      '<strong>Step-down:</strong> Trigger reduces over time, increasing maturity chance.',
    ],
  },
  {
    title: 'Counterparty Risk',
    highlight: 'Managed Exposure',
    content:
      'Returns depend on the solvency of the issuing financial institution. Diversification across counterparties helps mitigate this risk.',
  },
  {
    title: 'Defined Returns',
    highlight: 'Predictable Coupons',
    content:
      'Investors receive a fixed coupon at maturity (e.g., 8% per annum) if early maturity parameters are met.',
  },
  {
    title: 'Early Maturity Triggers',
    highlight: 'Multiple Exit Points',
    content:
      'Observation dates are usually annual, starting from year one or two. If the index is at or above the trigger level, the plan “kicks out,” returning capital plus accumulated coupon.',
  },
  {
    title: 'Capital Protection Barriers',
    highlight: 'End-of-Term Safety',
    content:
      'Modern autocalls use barriers tested only at maturity, typically 60–70% of initial level. Capital is protected unless the index falls below this level at final maturity — loss then mirrors the index decline.',
  },
];

export default function AboutSection() {
  return (
    <section className="relative w-full py-20 lg:py-32 overflow-hidden bg-[#0b3d62]">
      {/* Deep gradient background */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b3d62] via-[#001f33] to-[#0b3d62]" />
      </div>
      <div className="container mx-auto px-6 relative z-10 max-w-screen-2xl">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-20">
          {/* Left Side */}
          <div className="w-full lg:w-7/12">
            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-white mb-12"
            >
              About Autocalls
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.9 }}
              className="text-lg md:text-xl lg:text-2xl leading-relaxed text-white/90 mb-16"
            >
              Autocalls.uk is a digital platform dedicated to improving transparency and understanding of structured investments in the UK market.
            </motion.p>
          </div>
          {/* Right Side – Benefits Card */}
          <div className="w-full lg:w-5/12">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.9 }}
              className="bg-amber-900/20 backdrop-blur-md border border-amber-600/30 rounded-2xl p-8 md:p-12 relative overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
                style={{
                  backgroundImage: "url('https://www.ey.com/content/dam/ey-unified-site/ey-com/en-us/services/consulting/images/ey-reflective-skyscrapers-business-office-buildings11.jpg')",
                }}
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="relative z-10">
                <p className="text-lg md:text-xl leading-relaxed text-amber-100 font-medium mb-6">
                  Autocalls appeal because they combine:
                </p>
                <ul className="text-sm md:text-base leading-relaxed text-white/85 space-y-4 list-disc list-inside">
                  <li>Equity-like returns from limited or no market growth</li>
                  <li>Defined outcomes that can be modelled and understood.</li>
                  <li>Resilience in volatile markets, thanks to capital protection barriers and multiple maturity opportunities.</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Key Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.9 }}
          className="mt-24"
        >
          <motion.h3
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center text-4xl md:text-5xl lg:text-6xl font-light text-white mb-20 tracking-tight"
          >
            Key Features
          </motion.h3>

          {/* First three cards (normal 1/3 layout) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 max-w-7xl mx-auto mb-10 lg:mb-14"
          >
            {featuresData.slice(0, 3).map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                className="group relative bg-white/8 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-white/15 overflow-hidden cursor-pointer"
              >
                <motion.div
                  variants={glowVariants}
                  initial={{ opacity: 0 }}
                  whileHover="hover"
                  className="absolute inset-0 bg-gradient-to-br from-amber-400/20 via-emerald-500/20 to-transparent rounded-3xl"
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                  className="absolute -top-40 -right-40 w-96 h-96 rounded-full border-8 border-amber-300/8"
                />
                <div className="relative z-10">
                  <span className="inline-block px-5 py-2.5 bg-amber-500/25 text-amber-100 text-sm font-semibold rounded-full mb-8 border border-amber-400/30">
                    {feature.highlight}
                  </span>
                  <h4 className="text-2xl md:text-3xl font-semibold text-white mb-8">
                    {feature.title}
                  </h4>
                  {feature.items ? (
                    <ul className="space-y-4 text-white/90 text-lg leading-relaxed">
                      {feature.items.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-amber-300 mr-3 mt-1.5">•</span>
                          <span dangerouslySetInnerHTML={{ __html: item }} />
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-white/90 text-lg leading-relaxed">
                      {feature.content}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Last two cards – 50/50 layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 max-w-7xl mx-auto">
            {featuresData.slice(3, 5).map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover="hover"
                className="group relative bg-white/8 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-white/15 overflow-hidden cursor-pointer"
              >
                <motion.div
                  variants={glowVariants}
                  initial={{ opacity: 0 }}
                  whileHover="hover"
                  className="absolute inset-0 bg-gradient-to-br from-amber-400/20 via-emerald-500/20 to-transparent rounded-3xl"
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                  className="absolute -top-40 -right-40 w-96 h-96 rounded-full border-8 border-amber-300/8"
                />
                <div className="relative z-10">
                  <span className="inline-block px-5 py-2.5 bg-amber-500/25 text-amber-100 text-sm font-semibold rounded-full mb-8 border border-amber-400/30">
                    {feature.highlight}
                  </span>
                  <h4 className="text-2xl md:text-3xl font-semibold text-white mb-8">
                    {feature.title}
                  </h4>
                  <p className="text-white/90 text-lg leading-relaxed">
                    {feature.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Governance Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20 mt-24"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6 flex items-center">
            <Info className="w-10 h-10 mr-4 text-white/80" />
            Governance
          </h3>
          <p className="text-base md:text-lg leading-relaxed text-white/85">
            The review is produced in collaboration with IDAD Limited, ensuring regulatory awareness and responsible communication.
          </p>
        </motion.div>
      </div>
    </section>
  );
}