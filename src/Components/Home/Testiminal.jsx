import { motion } from 'framer-motion';

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Private Investor",
      title: "HIGH NET WORTH CLIENT",
      quote: "IDAD's autocall structures have been a cornerstone of my portfolio for years. The combination of strong annualised returns and robust capital protection has delivered consistent performance even through turbulent markets like COVID and recent volatility.",
    },
    {
      name: "Wealth Manager",
      title: "INDEPENDENT FINANCIAL ADVISOR",
      quote: "I recommend IDAD autocalls to clients seeking equity-like returns with significantly reduced downside risk. The early maturity feature and high historical kick-out rate have proven extremely reliable, with no capital losses across hundreds of matured plans.",
    },
    {
      name: "Institutional Client",
      title: "FAMILY OFFICE PORTFOLIO MANAGER",
      quote: "The transparency and track record of IDAD's products are unmatched. FTSE CSDI-linked autocalls have consistently outperformed traditional FTSE 100 plans, adding meaningful alpha while maintaining defensive barriers that protect capital in falling markets.",
    },
    {
      name: "Retirement Planner",
      title: "SENIOR FINANCIAL PLANNER",
      quote: "For clients in or nearing retirement, IDAD's defensive and step-down autocalls offer the perfect balance: attractive potential returns without exposing capital to full market risk. The 99.7% positive return rate over the past decade speaks for itself.",
    },
    {
      name: "Sophisticated Investor",
      title: "EXPERIENCED STRUCTURED PRODUCTS INVESTOR",
      quote: "What sets IDAD apart is their expertise in product design and issuer diversification. Working with top-tier counterparties like HSBC, Morgan Stanley and Citigroup, combined with innovative shapes like memory income and phoenix structures, delivers superior risk-adjusted returns.",
    },
    {
      name: "Long-Term Holder",
      title: "BUY-AND-HOLD INVESTOR",
      quote: "I've held multiple IDAD autocalls to full maturity and every single one returned capital plus profit. In an era of low bond yields and volatile equities, these products have provided resilient, predictable growth — exactly what I need for long-term wealth preservation.",
    },
  ];

  return (
    <div className="w-full bg-[#0b3d62] py-16 md:py-24 lg:py-32 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white tracking-tight">
            Investor<br className="sm:hidden" /> Testimonials
          </h2>
        </motion.div>

        {/* Horizontal scroll container - responsive & touch-friendly */}
        <div className="overflow-x-auto hide-scrollbar cursor-grab active:cursor-grabbing select-none scrollbar-hide">
          <style jsx>{`
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
            .hide-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}</style>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.15, delayChildren: 0.3 }}
            className="flex gap-8 md:gap-12 pb-8 min-w-max"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -16, transition: { duration: 0.4 } }}
                className="bg-[#337543]/20 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-2xl flex-shrink-0 w-80 sm:w-96 md:w-[380px] h-auto min-h-[520px] flex flex-col border border-[#01a96b]/20"
              >
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-2xl md:text-3xl font-light text-white mb-8"
                >
                  {testimonial.name}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="text-white/80 text-base md:text-lg leading-relaxed italic flex-1"
                >
                  "{testimonial.quote}"
                </motion.p>

                <div className="mt-10 flex items-center justify-between">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9 }}
                    className="text-right"
                  >
                    <p className="text-sm md:text-base font-medium text-[#01a96b]">
                      {testimonial.title}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}