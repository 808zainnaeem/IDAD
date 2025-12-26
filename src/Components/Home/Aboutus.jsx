import { motion } from 'framer-motion';
import { Info } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="bg-[#0b3d62] px-6 py-16 md:px-12 md:py-24 lg:px-24 lg:py-32 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto">
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

          {/* Right Side – Risk Warning */}
          <div className="w-full lg:w-5/12">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.9 }}
              className="bg-amber-900/20 backdrop-blur-md border border-amber-600/30 rounded-2xl p-8 md:p-12"
            >
              <p className="text-sm md:text-base leading-relaxed text-amber-200 italic">
                <strong className="text-amber-100 text-lg non-italic">Risk Warning:</strong><br /><br />
                Autocall investments are not suitable for everyone. Capital is at risk and you may get back less than you originally invested. Past performance is not a guide to future performance. These products are not capital-protected unless held to maturity and may involve counterparty risk.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Governance Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-white/10 w-full backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20 mt-16"
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