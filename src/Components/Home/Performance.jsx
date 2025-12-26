import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  ArcElement,
  Title,
  CategoryScale,
  LinearScale,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels'; // ← Add this import

// Register core components + datalabels plugin
ChartJS.register(
  Tooltip,
  Legend,
  ArcElement,
  Title,
  CategoryScale,
  LinearScale,
  ChartDataLabels // ← Register the plugin
);

const AnimatedPieChart = () => {
  const data = {
    labels: ['Stepdown', 'Defensive', 'Hurdle', 'Level'],
    datasets: [
      {
        label: '2025 Maturities',
        data: [60, 8, 2, 30],
        backgroundColor: ['#1e7e34', '#2e8b57', '#95a5a6', '#34495e'],
        borderColor: ['#fff', '#fff', '#fff', '#fff'],
        borderWidth: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // We hide the external legend since labels are on the chart
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw}%`,
        },
      },
      datalabels: {
        color: '#fff',              // Text color (white for good contrast on dark slices)
        font: {
          weight: 'bold',
          size: 14,
        },
        formatter: (value, context) => {
          const label = context.chart.data.labels[context.dataIndex];
          return `${label}\n${value}%`; // Label on top line, percentage below
        },
        textAlign: 'center',
        // Optional: hide labels on very small slices to avoid clutter
        display: (context) => {
          const value = context.dataset.data[context.dataIndex];
          return value >= 5; // Only show if slice is 5% or larger
        },
      },
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  };

  return (
    <div className="w-full h-full">
      <Pie data={data} options={options} plugins={[ChartDataLabels]} />
    </div>
  );
};

// ... rest of your component (containerVariants, Performance function, etc.) remains unchanged

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
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const chartVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 1.2, ease: 'easeOut' },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.08,
    boxShadow: '0 10px 25px -5px rgba(1, 169, 107, 0.3)',
    transition: { duration: 0.3 },
  },
  tap: { scale: 0.95 },
};

export default function Performance() {
  const [isPdfOpen, setIsPdfOpen] = useState(false);

  const pdfUrls = [
    '/Performance.pdf',
  ];

  return (
    <>
      <section className="bg-white px-6 py-16 md:px-12 md:py-24 lg:px-24 lg:py-32 overflow-hidden">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-10">
            <motion.div
              variants={itemVariants}
              className="w-full lg:w-5/12 flex flex-col items-center"
            >
              <motion.div
                variants={chartVariants}
                className="w-full aspect-square max-w-lg lg:max-w-2xl"
              >
                <AnimatedPieChart />
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="w-full lg:w-5/12 space-y-8"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Performance Overview
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-gray-700">
                Autocalls have demonstrated consistent performance across multiple market cycles, including periods of heightened volatility, economic uncertainty, and changing interest rate environments.
              </p>
              <ul className="space-y-6 text-base md:text-lg text-gray-600">
                <motion.li whileHover={{ x: 10 }} className="flex items-start gap-4">
                  <span className="text-green-600 font-bold text-2xl">•</span>
                  <span>
                    <span className="text-gray-900 font-semibold">Average returns across 2016–2025</span>{' '}
                    remained above <span className="text-green-600 font-bold">7% p.a.</span>
                  </span>
                </motion.li>
                <motion.li whileHover={{ x: 10 }} className="flex items-start gap-4">
                  <span className="text-green-600 font-bold text-2xl">•</span>
                  <span>
                    <span className="text-gray-900 font-semibold">No capital losses</span> were recorded when products were held to maturity
                  </span>
                </motion.li>
                <motion.li whileHover={{ x: 10 }} className="flex items-start gap-4">
                  <span className="text-green-600 font-bold text-2xl">•</span>
                  <span>
                    <span className="text-gray-900 font-semibold">FTSE-linked autocalls</span> outperformed many traditional investment alternatives
                  </span>
                </motion.li>
              </ul>

              <motion.button
                onClick={() => setIsPdfOpen(true)}
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
                className="mt-12 px-3 py-3 md:px-14 md:py-3 border-1 rounded-full text-lg md:text-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                View Full Performance Data
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* PDF Modal remains unchanged */}
      <AnimatePresence>
        {isPdfOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            onClick={() => setIsPdfOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl h-[90vh] flex flex-col overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-6 py-4 border-b">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Full Performance Data
                </h3>
                <button
                  onClick={() => setIsPdfOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100 transition"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex border-b">
                {pdfUrls.map((_, index) => (
                  <button
                    key={index}
                    className="px-6 py-3 text-sm font-medium border-b-2 border-transparent hover:bg-gray-50 transition"
                  >
                    Report 1
                  </button>
                ))}
              </div>

              <div className="flex-1">
                <iframe
                  src={pdfUrls[0]}
                  className="w-full h-full border-0"
                  title="Performance PDF"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}