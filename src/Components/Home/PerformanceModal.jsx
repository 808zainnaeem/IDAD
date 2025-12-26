import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

export default function PerformanceModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
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
              onClick={onClose}
              className="absolute top-6 right-6 text-gray-400 hover:text-white transition z-10 bg-gray-800/50 rounded-full p-2 hover:bg-gray-700"
            >
              <X size={32} />
            </button>

            <div className="p-8 md:p-12 lg:p-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-10 text-center">
                Overall Performance Summary
              </h2>
              <p className="text-center text-white/70 text-lg">
              <img src='/per.jpg' alt='Performance Summary' className='mx-auto mb-6 rounded-lg shadow-lg' />
              </p>
              {/* Add charts/tables here later */}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}