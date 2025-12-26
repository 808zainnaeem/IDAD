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

const stepContainerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.25 } },
};

const stepVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export default function HowAutocallsWorkSection() {
  return (
    <section className="bg-[#0b3d62] px-6 py-16 md:px-12 md:py-24 lg:px-24 lg:py-0 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight text-white mb-8">
            Understanding Autocall Investments
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-white/80 max-w-5xl mx-auto">
            Autocalls are structured investments designed to deliver predefined returns based on the performance of an underlying index, most commonly the FTSE 100 or FTSE CSDI.
          </p>
        </motion.div>

        <motion.div
          variants={stepContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={stepVariants}
              className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 flex flex-col items-center text-center border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-500"
            >
              <div className="bg-white/20 p-6 rounded-full mb-6">
                <step.icon className="w-14 h-14 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                {step.title}
              </h3>
              <p className="text-base md:text-lg text-white/75 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}