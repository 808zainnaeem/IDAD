import { motion } from 'framer-motion';
import { TrendingUp, Calendar, CheckCircle, Clock, Shield } from 'lucide-react';

const steps = [
  {
    icon: TrendingUp,
    title: "Defined Returns",
    desc: "Fixed coupons (typically 6-10% p.a.) paid at maturity if conditions are met",
  },
  {
    icon: Calendar,
    title: "Multiple Maturity Opportunities",
    desc: "Annual, or more frequent observation dates from year 1, 2 or 3",
  },
  {
    icon: Shield,
    title: "Capital Protection Barriers",
    desc: "European-style barriers (60-70% of initial level) observed only at final maturity",
  },
  {
    icon: CheckCircle,
    title: "Early Maturity Potential",
    desc: "Plans 'kick out' when index reaches trigger level, returning capital plus accumulated coupons",
  },
  {
    icon: Clock,
    title: "Market Resilience",
    desc: "Typically designed to mature in flat, modestly positive or even falling markets, never requiring strong growth",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const iconVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.2,
    },
  },
};

export default function HowAutocallsWorkSection() {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50 px-4 py-20 md:px-8 md:py-28 lg:px-16 lg:py-36 overflow-hidden">
      {/* Subtle background decoration - updated to new primary color #01a96b */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#01a96b] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Title Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
          className="text-center mb-16 md:mb-20 lg:mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#01a96b]/10 text-[#01a96b] rounded-full text-sm font-medium border border-[#01a96b]/20">
              <TrendingUp className="w-4 h-4" />
              Investment Insights
            </span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl  leading-tight text-slate-900 mb-6 tracking-tight">
            Understanding Autocall
            <span className="block mt-2 bg-gradient-to-r from-[#01a96b] to-[#017555] bg-clip-text text-transparent">
              Investments
            </span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl leading-relaxed text-slate-600 max-w-3xl mx-auto">
            Structured investments designed to deliver predefined returns based on the performance of an underlying index, most commonly the FTSE 100 or FTSE CSDI.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={stepVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: 'easeOut' }
              }}
              className="group relative bg-white rounded-2xl p-6 lg:p-8 flex flex-col shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-[#01a96b]/30"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#01a96b]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  variants={iconVariants}
                  className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#01a96b] to-[#017555] rounded-xl mb-6 shadow-lg shadow-[#01a96b]/20 group-hover:shadow-xl group-hover:shadow-[#01a96b]/30 transition-shadow duration-300"
                >
                  <step.icon className="w-7 h-7 text-white" strokeWidth={2} />
                </motion.div>

                {/* Step Number */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-[#01a96b]/10 transition-colors duration-300">
                  <span className="text-xs font-bold text-slate-600 group-hover:text-[#01a96b]">
                    {index + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-3 leading-snug">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#01a96b] to-[#017555] rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Digital Revolution Section - Added at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-24 max-w-7xl mx-auto bg-gradient-to-br from-[#01a96b]/5 to-[#01a96b]/10 rounded-3xl p-8 md:p-12 border border-[#01a96b]/20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 text-center">
            <span className="bg-gradient-to-r from-[#01a96b] to-[#017555] bg-clip-text text-transparent">
              The Digital Revolution
            </span>
          </h3>
          <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-6">
            This review supports a broader vision: democratising access to structured investments through digital platforms. For decades, autocalls remained locked behind paper-based processes and limited distribution.
          </p>
          <p className="text-base md:text-lg font-semibold text-slate-800 mb-6">
            The future involves:
          </p>
          <ul className="space-y-4 text-slate-700">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-[#01a96b] mt-0.5 flex-shrink-0" />
              <span>Digital transaction capabilities</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-[#01a96b] mt-0.5 flex-shrink-0" />
              <span>Lower minimum investments (targeting reduction from £5,000)</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-[#01a96b] mt-0.5 flex-shrink-0" />
              <span>Enhanced transparency and accessibility</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-[#01a96b] mt-0.5 flex-shrink-0" />
              <span>Mainstream adoption in diversified portfolios</span>
            </li>
          </ul>
        </motion.div>


      </div>
    </section>
  );
}