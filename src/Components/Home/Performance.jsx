import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Tooltip, Legend, ArcElement, Title, CategoryScale, LinearScale } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
  Tooltip,
  Legend,
  ArcElement,
  Title,
  CategoryScale,
  LinearScale,
  ChartDataLabels
);

const AnimatedPieChart = () => {
  const [isInView, setIsInView] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);

  const chartRef = useRef(null);

  // Original order for final display
  const originalLabels = ['Stepdown', 'Defensive', 'Hurdle', 'Level'];
  const originalData = [60, 8, 2, 30];
  const originalColors = ['#01a96b', '#017555', '#2d8a6b', '#45b88f'];

  // Reverse data for clockwise animation effect
  const labels = [...originalLabels].reverse();
  const dataValues = [...originalData].reverse();
  const colors = [...originalColors].reverse();

  const data = {
    labels,
    datasets: [
      {
        label: '2025 Maturities',
        data: startAnimation ? dataValues : [0, 0, 0, 0], // Key fix: start with 0s
        backgroundColor: colors,
        borderColor: ['#fff', '#fff', '#fff', '#fff'],
        borderWidth: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (tooltipItem) =>
            `${originalLabels[originalData.length - 1 - tooltipItem.dataIndex]}: ${tooltipItem.raw}%`,
        },
      },
      datalabels: {
        color: '#fff',
        font: { weight: 'bold', size: 14 },
        formatter: (value, context) => {
          if (value === 0) return '';
          const originalIndex = originalData.length - 1 - context.dataIndex;
          const label = originalLabels[originalIndex];
          return `${label}\n${value}%`;
        },
        textAlign: 'center',
        display: (context) => context.dataset.data[context.dataIndex] >= 5,
      },
    },
    animation: {
      duration: 2400,
      easing: 'easeOutQuart',
      animateRotate: true,
      animateScale: true,
    },
    rotation: 0,
    circumference: 360,
  };

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setStartAnimation(true);
      }, 50); // 1 second delay

      return () => clearTimeout(timer);
    } else {
      setStartAnimation(false);
    }
  }, [isInView]);

  return (
    <motion.div
      className="relative w-full h-full"
      onViewportEnter={() => setIsInView(true)}
      onViewportLeave={() => setIsInView(false)}
      viewport={{ once: false, margin: '-100px' }}
    >
      {/* Render chart only when in view */}
      {isInView && (
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 1 }} // Sync with delay
          className="w-full h-full"
        >
          <Pie ref={chartRef} data={data} options={options} />
        </motion.div>
      )}

      {/* Spinner placeholder during delay */}
      {isInView && !startAnimation && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 border-8 border-gray-200 border-t-[#01a96b] rounded-full animate-spin" />
        </div>
      )}

      {/* Glow effect */}
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.8, delay: 1.5 }}
        className="absolute inset-0 bg-gradient-to-br from-[#01a96b]/40 to-transparent rounded-full blur-2xl pointer-events-none"
      />
    </motion.div>
  );
};
// Card hover lift + entrance
const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
  hover: {
    y: -12,
    scale: 1.03,
    boxShadow: '0 20px 40px -10px rgba(1, 169, 107, 0.25)',
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

// Text fade-up
const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

// Button pulse + hover
const buttonVariants = {
  hover: {
    scale: 1.08,
    boxShadow: '0 15px 35px -5px rgba(1, 169, 107, 0.5)',
  },
  tap: { scale: 0.96 },
};

export default function Performance() {
  const [isPdfOpen, setIsPdfOpen] = useState(false);
  const pdfUrls = ['/Performance.pdf'];

  return (
    <>
      <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-150px' }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-center mb-20"
          >
            <motion.h1
              className="text-5xl md:text-5xl bg-gradient-to-r from-[#01a96b] via-[#017555] to-[#018a5a] bg-clip-text text-transparent mb-6 "
              initial={{ backgroundPosition: '0% 50%' }}
              whileInView={{ backgroundPosition: ['0% 50%', '100% 50%'] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
            >
              2025 Performance Overview
            </motion.h1>
            {/* <motion.p
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
            >
              Autocalls have demonstrated consistent performance across multiple market cycles, including periods of heightened volatility, economic uncertainty, and changing interest rate environments.
            </motion.p> */}
          </motion.div>

          {/* Key Statistics Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.1,
                },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {[
              { title: 'Total Matured Plans', value: '338', desc: 'All matured positively in line with their stated terms', color: '#01a96b' },
              { title: 'Average Return', value: '7.85%', desc: 'Annualised over average term of 1.98 years', color: '#017555' },
              { title: 'Bottom Quartile', value: '6.54%', desc: 'Average annualised return p.a.', color: '#018a5a' },
              { title: 'Top Quartile', value: '9.33%', desc: 'Average annualised return p.a.', color: '#01a96b' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover="hover"
                className="bg-white rounded-2xl shadow-lg p-8 border-t-4 hover:shadow-2xl transition-shadow duration-500"
                style={{ borderTopColor: stat.color }}
              >
                <div className="text-sm font-semibold uppercase tracking-wide mb-3" style={{ color: stat.color }}>
                  {stat.title}
                </div>
                <div className="text-5xl font-bold text-gray-900 mb-3">{stat.value}</div>
                <div className="text-sm text-gray-600 leading-relaxed">{stat.desc}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Insights + Chart Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Left: Key Metrics */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="bg-white rounded-2xl shadow-lg p-10"
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-8 border-b-2 border-[#01a96b] pb-4 inline-block">
                Key Performance Metrics
              </h3>
              <div className="space-y-6">
                {[
                  { label: 'At the Money Contracts', value: '8.78% p.a.', desc: 'average over 1.89 years' },
                  { label: 'Step-Down Dominance', value: '60%', desc: 'of all maturities' },
                  { label: 'Leading Counterparty', value: '32%', desc: 'HSBC Bank of all maturities' },
                  { label: 'Index Performance Premium', value: '+1.84% p.a.', desc: 'FTSE CSDI over FTSE 100' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.7 }}
                    className="flex items-start"
                  >
                    <div className="w-3 h-3 bg-[#01a96b] rounded-full mt-2 mr-5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900">{item.label}</div>
                      <div className="text-gray-600">
                        <span className="font-bold text-[#01a96b]">{item.value}</span> {item.desc}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Chart */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="bg-white rounded-2xl shadow-lg p-10"
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-8 border-b-2 border-[#01a96b] pb-4 inline-block">
                Maturity Distribution by Shape
              </h3>
              <div className="h-96">
                <AnimatedPieChart />
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.3, ease: "easeOut", delay: 0.2 }}
            className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-6 sm:p-8 mt-10 mb-10"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8 border-b-2 border-[#01a96b] pb-4 inline-block">
              2025 Maturity Performance by Shape
            </h3>


            <img src="/chart3.jpg" alt="" className='w-full h-auto lg:h-120 object-contain' />
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.button
              onClick={() => setIsPdfOpen(true)}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="px-10 py-5 bg-gradient-to-r from-[#01a96b] via-[#017555] to-[#018a5a] text-white rounded-full text-xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-500"
            >
              View Full Performance Data
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* PDF Modal */}
      <AnimatePresence>
        {isPdfOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 bg-opacity-70 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
            onClick={() => setIsPdfOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl shadow-3xl w-full max-w-5xl max-h-[92vh] overflow-hidden"
            >
              <div className="flex items-center justify-between p-6 bg-gradient-to-r from-[#01a96b] to-[#017555]">
                <h2 className="text-3xl font-bold text-white">Full Performance Data</h2>
                <button
                  onClick={() => setIsPdfOpen(false)}
                  className="p-3 rounded-full hover:bg-white hover:bg-opacity-20 transition text-white"
                >
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="overflow-auto h-[calc(92vh-88px)]">
                {pdfUrls.map((url, index) => (
                  <iframe key={index} src={url} className="w-full h-full border-0" title={`Report ${index + 1}`} />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}