// Marquee.jsx
import { motion } from "framer-motion";

const items = [
  "Standard Autocall",
  "Step-Down",
  "Defensive Autocall",
  "Memory Income",
  "Classic Autocall",
  "Income Autocall",
  "FTSE CSDI Linked",
  "Capital Protected",
  "Phoenix Autocall",
];

export default function AutocallMarquee() {
  return (
    <div 
      className="overflow-hidden whitespace-nowrap"
      style={{
        backgroundColor: '#0b3d62',
        paddingTop: '100px',
        paddingBottom: '130px',
      }}
    >
      {/* Top row - left to right */}
      <motion.div
        className="flex gap-16"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
      >
        {[...items, ...items].map((item, index) => (
          <span
            key={index}
            className="text-4xl font-medium uppercase tracking-wider text-gray-200 
                       transition-all duration-500 
                       hover:text-[#01a96b] hover:drop-shadow-[0_0_20px_rgba(1,169,107,0.6)]"
          >
            {item}
          </span>
        ))}
      </motion.div>

      {/* Bottom row - right to left */}
      <motion.div
        className="flex gap-16 mt-8"
        animate={{ x: ["-100%", "0%"] }}
        transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
      >
        {[...items, ...items].map((item, index) => (
          <span
            key={index}
            className="text-4xl font-medium uppercase tracking-wider text-gray-300/80 
                       transition-all duration-500 
                       hover:text-[#01a96b] hover:drop-shadow-[0_0_20px_rgba(1,169,107,0.6)]"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}