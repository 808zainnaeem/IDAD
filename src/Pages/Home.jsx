import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Loader from '../Components/Loader';
import ReviewSec from '../Components/Home/About';
import KeyFindings from '../Components/Home/Marquee';
import CompetenciesSection from '../Components/Home/CircleSec';
import ContactDes from '../Components/Home/ContactDes';
import Performance from '../Components/Home/Performance';
import HowAutocallsWorkSection from '../Components/Home/HowAutocallsWorkSection';
import AboutSection from '../Components/Home/Aboutus';
import TestimonialSection from '../Components/Home/Testiminal';
import FTSECharts from '../Components/Home/TableGraph';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('overview');
  const [logos, setLogos] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // New state for Full Report Modal
  const [isFullReportOpen, setIsFullReportOpen] = useState(false);

  const logoData = [
    { name: '2,000+ Maturities Over Decade', left: 8, angle: -15 },
    { name: '100% Positive Outcomes in 2025', left: 22, angle: 20 },
    { name: '7.85% Average Annualised Return', left: 36, angle: -10 },
    { name: '1.98 Year Average Term', left: 50, angle: 12 },
    { name: '338 Maturities in 2025', left: 64, angle: -18 },

  ];


  const navItems = [
    { label: 'Overview', id: 'overview' },
    { label: 'The Review', id: 'review' },
    { label: 'Key Findings', id: 'findings' },
    { label: 'Performance', id: 'performance' },
    { label: 'How Autocalls Work', id: 'how-it-works' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    logoData.forEach((logo, index) => {
      const delay = index * 300 + Math.random() * 400;
      setTimeout(() => {
        setLogos((prev) => [
          ...prev,
          { ...logo, id: index },
        ]);
      }, delay);
    });
  }, []);

  useEffect(() => {
    const updateActiveSection = () => {
      const hash = window.location.hash.slice(1);
      if (hash) setActiveSection(hash);
      else setActiveSection('overview');
    };
    updateActiveSection();
    window.addEventListener('hashchange', updateActiveSection);

    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPos = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollPos) {
          const id = navItems[i].id;
          if (window.location.hash !== `#${id}`) {
            window.history.replaceState(null, '', `#${id}`);
            setActiveSection(id);
          }
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('hashchange', updateActiveSection);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    if (window.lenis) {
      window.lenis.scrollTo(`#${sectionId}`, {
        offset: -100, // optional: adjust for fixed navbar height (tune as needed)
        duration: 1.5, // matches your Lenis duration feel
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        // lock: true, // optional: prevents user interrupting the scroll
      });
    }
    // Still update active state (your scroll listener will handle it too)
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  const dropVariants = {
    initial: { y: -800, opacity: 0 },
    animate: (custom) => ({
      y: 0,
      opacity: 1,
      transition: {
        y: {
          duration: 1,
          ease: [0.2, 0.8, 0.4, 1], // smooth drop
          delay: custom.index * 0.25, // This creates sequential drop: 1st → 2nd → 3rd...
        },
        opacity: {
          duration: 0.6,
          delay: custom.index * 0.25 + 0.3,
        },
      },
    }),
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3 + 1,
        duration: 1.4,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  // if (isLoading) return <Loader />;

  return (
    <>
      {/* ==================== FULL REPORT MODAL ==================== */}
      <AnimatePresence>
        {isFullReportOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            onClick={() => setIsFullReportOpen(false)}
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
                  The 2026 UK Autocall Review - Full Report
                </h3>
                <button
                  onClick={() => setIsFullReportOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100 transition"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="flex-1">
                <iframe
                  src="/fullpdf.pdf"
                  className="w-full h-full border-0"
                  title="Full Report PDF"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ==================== MOBILE SIDEBAR MENU ==================== */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed left-0 top-0 h-full w-72 bg-black/90 backdrop-blur-xl shadow-2xl z-50 lg:hidden flex flex-col"
            >
              <div className="p-6 flex justify-between items-center border-b border-white/10">
                <img src="/logow.png" alt="Logo" className="h-10" />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white hover:text-[#01a96b] transition"
                >
                  <X size={28} />
                </button>
              </div>
              <nav className="flex-1 p-6">
                <ul className="space-y-4">
                  {navItems.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(item.id);
                        }}
                        className={`block text-lg font-medium transition-colors ${activeSection === item.id
                          ? 'text-[#01a96b]'
                          : 'text-white/80 hover:text-white'
                          }`}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                  <li>
                    <button
                      onClick={() => {
                        setIsFullReportOpen(true);
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full text-left text-lg font-medium text-white  transition"
                    >
                      View Full Report
                    </button>
                  </li>
                </ul>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ==================== DESKTOP NAV ==================== */}
      <nav className="hidden lg:flex fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto w-full px-6 py-4 flex items-center justify-between ">
          <div className="flex items-center">
            <img src="/logow.png" alt="Company Logo" className="h-12" />
          </div>
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                className={`text-sm font-medium transition-colors ${activeSection === item.id ? 'text-[#01a96b]' : 'text-white/70 hover:text-white'
                  }`}
              >
                {item.label.toUpperCase()}
              </a>
            ))}
            <button
              onClick={() => setIsFullReportOpen(true)}
              className="px-6 py-3 bg-[#01a96b] text-white  rounded-full  transition shadow-lg "
            >
              VIEW FULL REPORT
            </button>
          </div>
        </div>
      </nav>

      {/* ==================== MOBILE HEADER ==================== */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-black/40 backdrop-blur-xl border-b border-white/10 px-6 py-4 flex justify-between items-center">
        <img src="/logow.png" alt="Company Logo" className="h-10" />
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="text-white hover:text-[#01a96b] transition"
        >
          <Menu size={32} />
        </button>
      </header>

      {/* ==================== HERO SECTION ==================== */}
      <section id="overview" className="relative w-full min-h-screen overflow-hidden pt-0 lg:pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://assets.weforum.org/article/image/responsive_big_88hn1MXZpFiLa4BcyfaqpyV-Q3l6j3i-GRb1Xfdb0mw.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[#0b3d62]/80 via-[#0f4a75]/80 to-[#0b3d62]/80"
            animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
          />
          {/* Grid animation lines... */}
          <div className="absolute inset-0 opacity-40">
            {Array(20).fill().map((_, i) => (
              <motion.div
                key={`h-${i}`}
                className="absolute bg-white/20 h-px w-full"
                style={{ top: `${i * 5}%` }}
                animate={{ opacity: [0.15, 0.35, 0.15] }}
                transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse', delay: i * 0.15 }}
              />
            ))}
            {Array(20).fill().map((_, i) => (
              <motion.div
                key={`v-${i}`}
                className="absolute bg-white/20 w-px h-full"
                style={{ left: `${i * 5}%` }}
                animate={{ opacity: [0.15, 0.35, 0.15] }}
                transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse', delay: i * 0.15 }}
              />
            ))}
          </div>
        </div>


        {/* ==================== FLOATING CIRCLES – RESPONSIVE ==================== */}
        {/* ==================== FLOATING CIRCLES – RESPONSIVE ==================== */}
        <div className="absolute inset-0 pointer-events-none z-10">
          <div className="relative w-full h-full">

            {/* ---------- MOBILE: 2 on top, 3 on bottom ---------- */}
            <div className="lg:hidden absolute bottom-8 left-0 right-0 px-4">
              <div className="flex flex-col items-center gap-4">
                {/* Top row: 2 circles */}
                <div className="flex justify-center gap-6">
                  {logos.slice(0, 2).map((logo, idx) => (
                    <motion.div
                      key={logo.id ?? idx}
                      className="pointer-events-auto"
                      variants={dropVariants}
                      initial="initial"
                      animate="animate"
                      custom={{ index: idx }}  // ← Fixed: pass index 0 and 1
                    >
                      <motion.div
                        className="rounded-full flex items-center justify-center border-4 border-[#337543] bg-[#337543]/95 backdrop-blur-sm shadow-xl overflow-hidden"
                        style={{ width: '80px', height: '80px' }}
                        whileHover={{
                          scale: 1.18,
                          y: -8,
                          boxShadow: '0 0 30px rgba(1,169,107,0.8)',
                          borderColor: '#01ff8a',
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="text-[10px] leading-[1.15] font-black text-white text-center px-2">
                          {logo.name}
                        </span>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom row: 3 circles */}
                <div className="flex justify-center gap-5">
                  {logos.slice(2, 5).map((logo, idx) => (
                    <motion.div
                      key={logo.id ?? idx + 2}
                      className="pointer-events-auto"
                      variants={dropVariants}
                      initial="initial"
                      animate="animate"
                      custom={{ index: idx + 2 }}  // ← Fixed: index 2, 3, 4
                    >
                      <motion.div
                        className="rounded-full flex items-center justify-center border-4 border-[#337543] bg-[#337543]/95 backdrop-blur-sm shadow-xl overflow-hidden"
                        style={{ width: '80px', height: '80px' }}
                        whileHover={{
                          scale: 1.18,
                          y: -8,
                          boxShadow: '0 0 30px rgba(1,169,107,0.8)',
                          borderColor: '#01ff8a',
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="text-[10px] leading-[1.15] font-black text-white text-center px-2">
                          {logo.name}
                        </span>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* ---------- DESKTOP: Horizontal row ---------- */}
            <div className="hidden lg:flex justify-center items-end gap-10 px-8 absolute bottom-12 left-0 right-0 h-48">
              {logos.map((logo, index) => (
                <motion.div
                  key={logo.id ?? index}
                  className="pointer-events-auto flex-shrink-0"
                  variants={dropVariants}
                  initial="initial"
                  animate="animate"
                  custom={{ index }}  // ← Fixed: pass index 0 to 4
                >
                  <motion.div
                    className="rounded-full flex items-center justify-center border-4 border-[#337543] bg-[#337543] shadow-2xl overflow-hidden"
                    style={{ width: '160px', height: '160px' }}
                    whileHover={{
                      scale: 1.2,
                      y: -20,
                      boxShadow: '0 0 40px rgba(1,169,107,0.8)',
                      borderColor: '#01ff8a',
                    }}
                    animate={{
                      y: [0, -15, 0],
                      boxShadow: [
                        '0 0 20px rgba(1,169,107,0.4)',
                        '0 0 35px rgba(1,169,107,0.7)',
                        '0 0 20px rgba(1,169,107,0.4)',
                      ],
                    }}
                    transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
                  >
                    <span className="text-lg font-black text-white text-center leading-tight px-6">
                      {logo.name}
                    </span>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 h-screen flex flex-col items-center justify-center text-center px-6">
          <div className="space-y-5 sm:space-y-6 md:space-y-8 max-w-5xl mx-auto">
            {/* Main Title - Smaller on mobile */}
            <motion.h1
              custom={0}
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              className="text-2xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-tight"
            >
              The 2026 UK Autocall Review
            </motion.h1>

            {/* Subtitle - Reduced on mobile */}
            <motion.h2
              custom={1}
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              className="text-1xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[#01a96b] tracking-tight leading-tight mt-2"
            >
              Evidence-based insight into the performance of FTSE-linked autocall investments.
            </motion.h2>

            {/* Description Paragraph - Compact on mobile */}
            <motion.p
              custom={2}
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              className="text-[14px] sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mt-6 sm:mt-8"
            >
              An independent review of UK retail autocalls maturing in 2025,
              <br className="hidden xs:block" />
              supported by over a decade of performance data.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <section id="review"><ReviewSec /></section>
      <section id="findings"><KeyFindings /></section>
      <section id="competencies"><CompetenciesSection /></section>
      <section id="performance">
        <Performance onOpenModal={() => {/* your existing modal logic */ }} />
      </section>
      <section id="how-it-works"><HowAutocallsWorkSection /></section>

      <section id="charts"><FTSECharts /></section>

      <section id="about"><AboutSection /></section>
      <TestimonialSection />
      <section id="contact"><ContactDes /></section>
    </>
  );
};

export default Home;





// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";

// const AutocallsLogoExact = () => {
//   const ref = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {

//       /* ========= OUTER RING — 8 YEAR OBSERVATION ROTATION ========= */
//       gsap.to("#outer-ring", {
//         rotation: 360,
//         duration: 64,              // 8 years × 8s
//         repeat: -1,
//         ease: "steps(8)",          // 👈 yearly tick feel
//         transformOrigin: "50% 50%"
//       });

//       /* ========= INNER RING — 65% BARRIER PULSE ========= */
//       gsap.to("#inner-ring", {
//         scale: 1.015,
//         duration: 3.5,
//         yoyo: true,
//         repeat: -1,
//         ease: "sine.inOut",
//         transformOrigin: "50% 50%"
//       });

//       /* ========= A POINTER — MARKET POSITION ========= */
//       gsap.fromTo(
//         "#logo-a",
//         { rotation: -14, scale: 1 },
//         {
//           rotation: -8,            // 👈 slightly rotated
//           scale: 1.015,
//           duration: 2.8,
//           yoyo: true,
//           repeat: -1,
//           ease: "sine.inOut",
//           transformOrigin: "50% 50%"
//         }
//       );

//       /* ========= YEARLY DIAMOND OBSERVATION GLOW ========= */
//       gsap.fromTo(
//         "rect",
//         { opacity: 0.35 },
//         {
//           opacity: 1,
//           duration: 0.6,
//           stagger: {
//             each: 1,
//             repeat: -1
//           },
//           ease: "power1.inOut"
//         }
//       );

//     }, ref);

//     return () => ctx.revert();
//   }, []);


//   return (
//     <svg
//       ref={ref}
//       viewBox="0 0 400 460"
//       width="400"
//       style={{ display: "block", margin: "auto" }}
//     >
//       {/* ========= OUTER GREEN DASHED SEGMENTS (now with larger gaps for clearer dashed look) ========= */}
//       <g id="outer-ring">
//         {[...Array(10)].map((_, i) => (
//           <circle
//             cx="200"
//             cy="200"
//             r="158"
//             fill="none"
//             stroke="#1B7F4A"
//             strokeWidth="26"
//             strokeLinecap="butt"
//             strokeDasharray="80 32"
//           />

//         ))}
//       </g>

//       {/* ========= BLUE INNER RING ========= */}
//       <g id="inner-ring">
//         <circle
//           cx="200"
//           cy="200"
//           r="124"
//           fill="none"
//           stroke="#153A63"
//           strokeWidth="14"
//         />
//       </g>

//       {/* ========= 8 DIAMOND TICKS ========= */}
//       <g>
//         {[...Array(8)].map((_, i) => (
//           <rect
//             key={i}
//             x="196"
//             y="92"
//             width="8"
//             height="8"

//             fill="#1B7F4A"
//             transform={`rotate(${i * 45} 200 200) rotate(45 200 96)`}
//           />
//         ))}
//       </g>
//       <polygon
//         points="200,275 190,295 210,295"
//         fill="#153A63"
//         transform="translate(0,-160)"
//       />



//       {/* ========= CENTRAL "A" ========= */}
//       <g id="logo-a">
//         {/* A body with wider center space */}
//         <path
//           d="
//       M200 115
//       L165 240
//       H190
//       L200 180
//       L210 240
//       H235
//       Z
//     "
//           fill="#153A63"
//         />

//         {/* Cut-out circle */}
//         <circle cx="200" cy="210" r="9" fill="#ffffff" />
//         <circle cx="200" cy="210" r="6" fill="#153A63" />
//       </g>




//       {/* ========= BOTTOM ARROW ========= */}
//       <polygon
//         points="200,290 188,308 212,308"
//         fill="#1B7F4A"
//         transform="translate(0,-50)"
//       />


//       {/* ========= TEXT ========= */}
//       <div>

//         <text
//           x="200"
//           y="375"
//           textAnchor="middle"
//           fontSize="36"
//           fontWeight="700"
//           marginTop="20"
//           fill="#153A63"
//         >
//           Autocalls<tspan fill="#1B7F4A">.uk</tspan>
//         </text>

//         <text
//           x="200"
//           y="410"
//           textAnchor="middle"
//           fontSize="22"
//           fill="#153A63"
//         >
//           Precision Investing
//         </text>
//       </div>

//     </svg>
//   );
// };

// export default AutocallsLogoExact;