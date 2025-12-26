import { motion } from 'framer-motion';

export default function ContactDes() {
  return (
    <div className="min-h-screen bg-[#0b3d62] flex items-center justify-center px-6 py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-tight mb-12 md:mb-16 text-white">
          <motion.span
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="block overflow-hidden"
          >
            <span className="inline-block">Seeking consistent</span>
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="block overflow-hidden"
          >
            <span className="inline-block">
              returns with{' '}
              <motion.span
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
                className="inline-block origin-left text-[#01a96b]"
              >
                capital protection
              </motion.span>
            </span>
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="block overflow-hidden"
          >
            <span className="inline-block">
              in volatile markets?{' '}
              <motion.span
                initial={{ opacity: 0, scale: 0, rotate: -30 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 1,
                  duration: 0.8,
                  type: 'spring',
                  stiffness: 200,
                  damping: 15,
                }}
                className="inline-flex items-center justify-center w-14 h-14 md:w-20 md:h-20 border-4 border-[#01a96b] rounded-full ml-4 align-middle relative"
                style={{ top: '-10px' }}
              >
                <svg
                  className="w-9 h-9 md:w-12 md:h-12 text-[#01a96b]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </motion.span>
            </span>
          </motion.span>
        </h1>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 0.8, ease: 'easeOut' }}
          className="inline-block"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: 'rgba(1, 169, 107, 0.15)',
              borderColor: '#01a96b',
              color: '#01a96b',
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="px-10 py-5 md:px-12 md:py-6 border-2 border-white/40 rounded-full text-lg md:text-xl font-medium text-white transition-all duration-300 hover:border-[#01a96b]"
          >
            Speak to an Expert
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}