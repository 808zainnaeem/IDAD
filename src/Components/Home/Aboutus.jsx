import { motion } from 'framer-motion';
import { Info } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="bg-[#0b3d62] px-6 py-16 md:px-12 md:py-24 lg:px-24 lg:py-32 overflow-hidden relative">
      {/* Section Background (kept subtle) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          // backgroundImage: "url('https://images.stockcake.com/public/7/3/6/7365175a-d350-4118-8346-351d2c84319d_large/digital-trading-patterns-stockcake.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-[#0b3d62]/70" />

      <div className="max-w-screen-2xl mx-auto relative z-10">
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

          {/* Right Side – Benefits Card with Background Image */}
          <div className="w-full lg:w-5/12">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.9 }}
              className="bg-amber-900/20 backdrop-blur-md border border-amber-600/30 rounded-2xl p-8 md:p-12 relative overflow-hidden"
            >
              {/* Card-specific Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
                style={{
                  backgroundImage: "url('https://www.ey.com/content/dam/ey-unified-site/ey-com/en-us/services/consulting/images/ey-reflective-skyscrapers-business-office-buildings11.jpg')",
                }}
              />
              <div className="absolute inset-0 bg-BLACK-900/40" /> {/* Darker overlay for better text contrast */}

              <div className="relative z-10">
                <p className="text-lg md:text-xl leading-relaxed text-amber-100 font-medium mb-6">
                  Autocalls appeal because they combine:
                </p>
                <ul className="text-sm md:text-base leading-relaxed text-white/85 space-y-4 list-disc list-inside">
                  <li>Equity like returns from limited or no market growth</li>
                  <li>Defined outcomes that can be modelled and understood.</li>
                  <li>Resilience in volatile markets, thanks to capital protection barriers and multiple maturity opportunities.</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>

        {/* New Key Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.9 }}
          className="mt-24"
        >
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-12">
            Key Features
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Shapes */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h4 className="text-xl md:text-2xl font-semibold text-white mb-6">Shapes</h4>
              <ul className="text-base leading-relaxed text-white/85 space-y-3 list-disc list-inside">
                <li><strong>At-the-money/Level:</strong> Trigger at the initial index level throughout.</li>
                <li><strong>Hurdle:</strong> Trigger above the initial level (e.g., 105%) throughout.</li>
                <li><strong>Initial Hurdle:</strong> Trigger above initial index level in the beginning then at the initial level for most of the term</li>
                <li><strong>Defensive:</strong> Trigger below the initial level (e.g., 95%) flat throughout.</li>
                <li><strong>Step-down:</strong> Trigger reduces over time, increasing the chance of maturity.</li>
              </ul>
            </div>

            {/* Counterparty Risk */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h4 className="text-xl md:text-2xl font-semibold text-white mb-6">Counterparty Risk</h4>
              <p className="text-base leading-relaxed text-white/85">
                Returns depend on the solvency of the issuing financial institution. Diversification across counterparties helps mitigate this risk.
              </p>
            </div>

            {/* Defined Returns */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h4 className="text-xl md:text-2xl font-semibold text-white mb-6">Defined Returns</h4>
              <p className="text-base leading-relaxed text-white/85">
                Investors receive a fixed coupon at maturity (e.g., 8% per annum) if early maturity parameters are met.
              </p>
            </div>

            {/* Early Maturity Triggers */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h4 className="text-xl md:text-2xl font-semibold text-white mb-6">Early Maturity Triggers</h4>
              <p className="text-base leading-relaxed text-white/85">
                Observation dates are usually annual, starting from year one or two. If the index is at or above the trigger level, the plan “kicks out,” returning capital plus the accumulated coupon.
              </p>
            </div>

            {/* Capital Protection Barriers */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 md:col-span-2">
              <h4 className="text-xl md:text-2xl font-semibold text-white mb-6">Capital Protection Barriers</h4>
              <p className="text-base leading-relaxed text-white/85">
                Modern autocalls use barriers that are only tested at the end of the term, typically 60–70% of the initial index level. This means capital is protected unless an early maturity is not triggered and the index is below this level on the final maturity date. In such a case the loss will be in line with the fall in the index over the term.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Governance Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-white/10 w-full backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20 mt-24"
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