import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function ContactDes() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div className="min-h-screen bg-[#0b3d62] flex items-center justify-center px-6 py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight mb-12 md:mb-16 text-white">
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
              onClick={openModal}
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

      {/* Custom Popup Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition z-10"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Form Content */}
              <div className="p-8 md:p-10">
                <h2 className="text-3xl font-semibold text-[#0b3d62] mb-2">Get in Touch</h2>
                <p className="text-gray-600 mb-8">Speak to an expert about your investment goals.</p>

                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#01a96b] focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#01a96b] focus:border-transparent"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#01a96b] focus:border-transparent"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message (Optional)</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#01a96b] focus:border-transparent resize-none"
                      placeholder="Tell us about your investment interests..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#01a96b] text-white font-medium rounded-lg hover:bg-[#018a57] transition duration-300 shadow-lg hover:shadow-xl"
                  >
                    Submit Inquiry
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}