import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 12,
    },
  },
};

const hoverVariants = {
  hover: {
    scale: 1.05,
    y: -10,
    transition: { type: 'spring', stiffness: 300 },
  },
};

export default function KeyFindingsSection() {
  const findings = [
    {
      title: 'Online Gaming Expertise',
      description: 'Deep experience in building scalable platforms and engaging user experiences for gaming audiences.',
    },
    {
      title: 'Digital Media Mastery',
      description: 'Proven track record in content creation, distribution, and monetization across digital channels.',
    },
    {
      title: 'Marketing Excellence',
      description: 'Strategic campaigns that drive growth, engagement, and brand loyalty in competitive markets.',
    },
  ];

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#0b3d62] py-20">
      {/* Subtle accent overlay for depth */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(1,169,107,0.25)_0%,transparent_70%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center text-5xl md:text-6xl font-bold text-white mb-16"
        >
          Key Expertise Areas
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-150px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto"
        >
          {findings.map((finding, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20 overflow-hidden"
            >
              {/* Accent glow on hover */}
              <motion.div
                variants={hoverVariants}
                className="absolute inset-0 bg-gradient-to-br from-[#01a96b]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />

              <div className="relative z-10">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {finding.title}
                </h3>
                <p className="text-lg text-white/80 leading-relaxed">
                  {finding.description}
                </p>
              </div>

              {/* Subtle rotating accent ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full border-4 border-[#01a96b]/30"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Center Logo Overlay (adjusted to bottom center) */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 pointer-events-none">
          <motion.img
            src="/logow.png"
            alt="Logo"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
            className="w-32"
          />
        </div>
      </div>
    </section>
  );
}