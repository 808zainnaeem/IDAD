import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Loader from '../Components/Loader';
import ReviewSec from '../Components/Home/About';
import KeyFindings from '../Components/Home/Marquee';
import CompetenciesSection from '../Components/Home/CircleSec';
import ContactDes from '../Components/Home/ContactDes';
import Performance from '../Components/Home/Performance';
import HowAutocallsWorkSection from '../Components/Home/HowAutocallsWorkSection';
import AboutSection from '../Components/Home/Aboutus';
import PerformanceModal from '../Components/Home/PerformanceModal';
import TestimonialSection from '../Components/Home/Testiminal';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const [logos, setLogos] = useState([]);

  const logoData = [
    { name: '338 Autocalls Analysed', angle: 15 },
    { name: '100% Positive Outcomes in 2025', angle: -20 },
    { name: '7.85% Average Annualised Return', angle: 0 },
    { name: '1.98 Year Average Term', angle: 25 },
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
    // Loader for 5 seconds
    const timer = setTimeout(() => setIsLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Animate dropping logos
    const shuffled = [...logoData].sort(() => Math.random() - 0.5);
    shuffled.forEach((logo, index) => {
      const delay = index * 300 + Math.random() * 400;
      setTimeout(() => {
        setLogos((prev) => [
          ...prev,
          {
            ...logo,
            id: index,
            left: 10 + Math.random() * 80,
            rotateStart: Math.random() * 60 - 30,
            rotateEnd: logo.angle,
          },
        ]);
      }, delay);
    });
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const dropVariants = {
    initial: {
      y: -500,
      opacity: 0,
      rotate: (custom) => custom.rotateStart || 0,
    },
    animate: (custom) => ({
      y: window.innerHeight - 220,
      opacity: 1,
      rotate: custom.rotateEnd,
      transition: {
        y: { type: 'spring', stiffness: 60, damping: 20, mass: 1.5 },
        opacity: { duration: 0.8, delay: 0.3 },
        rotate: { type: 'spring', stiffness: 80, damping: 25, delay: 0.2 },
      },
    }),
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3 + 2,
        duration: 1.4,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {/* HERO SECTION WITH ANIMATED BACKGROUND & DROPPING LOGOS */}
      <section id="overview" className="relative w-full min-h-screen overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://assets.weforum.org/article/image/responsive_big_88hn1MXZpFiLa4BcyfaqpyV-Q3l6j3i-GRb1Xfdb0mw.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-black/50" />

        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[#0b3d62]/80 via-[#0f4a75]/80 to-[#0b3d62]/80"
            animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
          />

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-40">
            {Array(20)
              .fill()
              .map((_, i) => (
                <motion.div
                  key={`h-${i}`}
                  className="absolute bg-white/20 h-px w-full"
                  style={{ top: `${i * 5}%` }}
                  animate={{ opacity: [0.15, 0.35, 0.15] }}
                  transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse', delay: i * 0.15 }}
                />
              ))}
            {Array(20)
              .fill()
              .map((_, i) => (
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

        {/* Header Logo */}
        <header className="absolute top-0 left-0 right-0 flex justify-between items-center p-6 z-30">
          <div className="flex items-center gap-3 p-2 rounded-lg">
            <img src="/logow.png" alt="Company Logo" className="h-10 md:h-14" />
          </div>
        </header>

        {/* Dropping Logos - Desktop */}
        {logos.map((logo) => (
          <motion.div
            key={logo.id}
            className="absolute hidden lg:block z-10 pointer-events-auto"
            style={{ left: `${logo.left}%`, transform: 'translateX(-50%)' }}
            variants={dropVariants}
            initial="initial"
            animate="animate"
            custom={logo}
          >
            <motion.div
  className="rounded-full flex items-center justify-center shadow-2xl border-4 border-[#337543] bg-[#337543] overflow-hidden"
  style={{ width: '160px', height: '160px' }}
  whileHover={{
    scale: 1.2,
    y: -10,
    boxShadow: '0 0 40px rgba(1, 169, 107, 0.8)',
    borderColor: '#01ff8a',
  }}
  animate={{
    y: [0, -15, 0],                  // gentle floating up and down
    boxShadow: [
      '0 0 20px rgba(1, 169, 107, 0.4)',
      '0 0 35px rgba(1, 169, 107, 0.7)',
      '0 0 20px rgba(1, 169, 107, 0.4)',
    ],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    repeatType: 'reverse',
    ease: 'easeInOut',
  }}
>
  <span className="text-lg md:text-xl font-black text-white text-center leading-tight px-6">
    {logo.name}
  </span>
</motion.div>
          </motion.div>
        ))}

        {/* Tablet Logos */}
        {logos.slice(0, 5).map((logo) => (
          <motion.div
            key={`sm-${logo.id}`}
            className="absolute hidden md:block lg:hidden z-10"
            style={{ left: `${logo.left}%`, transform: 'translateX(-50%)' }}
            variants={dropVariants}
            initial="initial"
            animate="animate"
            custom={logo}
          >
            <motion.div
              className="rounded-full flex items-center justify-center shadow-xl border-4 border-[#337543] bg-[#337543]"
              style={{ width: '120px', height: '120px' }}
              whileHover={{ scale: 1.2, y: -8, boxShadow: '0 0 30px rgba(1, 169, 107, 0.7)', borderColor: '#01ff8a' }}
            >
              <span className="text-sm font-bold text-white text-center leading-tight px-3">
                {logo.name}
              </span>
            </motion.div>
          </motion.div>
        ))}

        {/* Main Hero Content */}
        <div className="h-screen flex flex-col items-center justify-center text-center px-6 relative z-10">
          <div className="space-y-6 md:space-y-8 max-w-5xl mx-auto">
            <motion.h1
              custom={0}
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-none"
            >
              The 2026 UK Autocall Review
            </motion.h1>
            <motion.h2
              custom={1}
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              className="text-3xl sm:text-4xl md:text-5xl font-light text-[#01a96b] tracking-tight leading-none"
            >
              Evidence-based insight into the performance of FTSE-linked autocall investments.
            </motion.h2>
            <motion.p
              custom={2}
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mt-8"
            >
              An independent review of UK retail autocalls maturing in 2025,
              <br className="hidden sm:block" />
              supported by over a decade of performance data.
            </motion.p>
          </div>
        </div>

        {/* Functional Navbar */}
        <nav className="fixed z-50 bg-white/10 backdrop-blur-lg rounded-2xl py-4 px-6 shadow-2xl bottom-4 left-1/2 -translate-x-1/2 w-max max-w-[90vw] md:top-10 md:bottom-auto">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 text-xs md:text-sm font-medium transition-colors ${
                  activeSection === item.id ? 'text-[#01a96b]' : 'text-white/70 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="absolute inset-0 rounded-full bg-white/10"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1.3, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                />
                <span className="relative z-10">{item.label.toUpperCase()}</span>
              </motion.button>
            ))}
          </div>
        </nav>
      </section>

      {/* OTHER SECTIONS WITH IDs */}
      <section id="review"><ReviewSec /></section>
      <section id="findings"><KeyFindings /></section>
      <section id="competencies"><CompetenciesSection /></section>
      <section id="performance">
        <Performance onOpenModal={() => setIsModalOpen(true)} />
      </section>
      <section id="how-it-works"><HowAutocallsWorkSection /></section>
      <section id="about"><AboutSection /></section>
      <TestimonialSection/>
      <section id="contact"><ContactDes /></section>

      {/* Performance Modal */}
      <PerformanceModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Home;