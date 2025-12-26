import { motion } from 'framer-motion';
import { TrendingUp, Calendar, CheckCircle, Clock } from 'lucide-react';

const steps = [
  {
    icon: TrendingUp,
    title: "Investment linked to an index",
    desc: "Your capital is linked to the performance of a major index, typically the FTSE 100 or FTSE CSDI.",
  },
  {
    icon: Calendar,
    title: "Observation dates are set",
    desc: "Pre-defined dates (usually annually or semi-annually) where the index level is checked.",
  },
  {
    icon: CheckCircle,
    title: "Early maturity if conditions met",
    desc: "If the index is at or above a predetermined level, the product 'autocalls' — maturing early with a fixed attractive return.",
  },
  {
    icon: Clock,
    title: "Continues if not triggered",
    desc: "If the condition isn't met, the investment continues to the next observation date, up to final maturity.",
  },
];

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

const titleVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: 'easeOut' },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: 'easeOut',
    },
  },
};

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 15,
      delay: 0.2,
    },
  },
};

const cardHoverVariants = {
  hover: {
    y: -12,
    boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.1)',
    transition: { duration: 0.4 },
  },
};

export default function HowAutocallsWorkSection() {
  return (
    <section className="bg-gray-50 px-6 py-16 md:px-12 md:py-24 lg:px-24 lg:py-32 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto">
        {/* Title Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight text-gray-900 mb-6">
            Understanding Autocall Investments
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-600 max-w-5xl mx-auto">
            Autocalls are structured investments designed to deliver predefined returns based on the performance of an underlying index, most commonly the FTSE 100 or FTSE CSDI.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              // variants={stepVariants}
              whileHover="hover"
              variants={{ ...stepVariants, ...cardHoverVariants }}
              className="relative bg-white rounded-3xl p-8 lg:p-10 flex flex-col items-center text-center shadow-lg hover:shadow-2xl transition-shadow duration-500 border border-gray-100"
            >
              {/* Icon Circle */}
              <motion.div
                variants={iconVariants}
                className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-full mb-8 shadow-xl"
              >
                <step.icon className="w-12 h-12 md:w-14 md:h-14 text-white" />
              </motion.div>

              {/* Step Number (subtle) */}
              <span className="absolute top-4 right-6 text-6xl font-bold text-green-100 opacity-30 select-none">
                0{index + 1}
              </span>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}