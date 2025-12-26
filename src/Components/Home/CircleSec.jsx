import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 100, scale: 0.85 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 16,
      mass: 1,
    },
  },
};

const hoverVariants = {
  hover: {
    scale: 1.10,
    y: -20,
    transition: { type: 'spring', stiffness: 350, damping: 14 },
  },
};

const glowVariants = {
  hover: {
    opacity: [0.3, 0.7, 0.3],
    scale: [1, 1.2, 1],
    transition: { duration: 2.5, repeat: Infinity },
  },
};

export default function PerformanceHighlightsSection() {
  const performanceData = [
    {
      title: '2025 Performance',
      stats: [
        '338 maturities',
        '100% positive outcomes – all plans returned capital plus profit',
        'Average annualised return: 7.85% over 1.98 years',
        'Top quartile: 9.33% p.a. | Bottom quartile: 6.54% p.a.',
        'By shape: Level: 8.78% | Step-down: 7.34% | Defensive: 7.47% | Hurdle: 9.77%',
      ],
      highlight: 'Strong & Consistent Returns',
    },
    {
      title: 'Decade Performance (2016–2025)',
      stats: [
        'Over 2,000 maturities analysed',
        '99.7% delivered positive returns',
        'Zero capital losses when held to term',
        'Average annualised return: 7.44% p.a. | Average term: 2.3 years',
        'Consistent performance through Brexit, COVID-19, and market volatility',
      ],
      highlight: 'Proven Resilience',
    },
    {
      title: 'FTSE CSDI & Counterparty Insights',
      stats: [
        'FTSE CSDI-linked plans outperformed FTSE 100-linked by +1.84% p.a. in 2025',
        'Designed for structured products to reduce issuer cost and enhance coupons',
        'Leading issuers: HSBC (32% of maturities), Morgan Stanley, Citigroup, BNP Paribas, Barclays',
      ],
      highlight: 'Strategic Advantages',
    },
  ];

  return (
    <section className="relative w-full py-20 lg:py-32 overflow-hidden bg-[#0b3d62]">
      {/* Deep gradient background */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b3d62] via-[#001f33] to-[#0b3d62]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-5xl md:text-6xl lg:text-7xl font-light text-white mb-24 tracking-tight"
        >
          Historical Performance Highlights
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 max-w-7xl mx-auto"
        >
          {performanceData.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="group relative bg-white/8 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-white/15 overflow-hidden cursor-default"
            >
              {/* Animated glow on hover */}
              <motion.div
                variants={glowVariants}
                initial={{ opacity: 0 }}
                whileHover="hover"
                className="absolute inset-0 bg-gradient-to-br from-amber-400/20 via-emerald-500/20 to-transparent rounded-3xl"
              />

              {/* Rotating subtle ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-40 -right-40 w-96 h-96 rounded-full border-8 border-amber-300/8"
              />

              <div className="relative z-10">
                <span className="inline-block px-5 py-2.5 bg-amber-500/25 text-amber-100 text-sm font-semibold rounded-full mb-8 border border-amber-400/30">
                  {item.highlight}
                </span>
                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-8">
                  {item.title}
                </h3>
                <ul className="space-y-4 text-white/90 text-lg leading-relaxed">
                  {item.stats.map((stat, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-amber-300 mr-3 mt-1.5">•</span>
                      {stat}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 1.5 }}
          className="mt-20 text-center"
        >
          <p className="text-xl md:text-2xl text-white/80 font-medium italic max-w-4xl mx-auto">
            Past performance is not indicative of future performance.<br />
            Investing means exposing capital to risk of loss.
          </p>
        </motion.div>
      </div>
    </section>
  );
}