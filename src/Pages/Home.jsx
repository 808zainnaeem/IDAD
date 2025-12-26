import React, { useState, useEffect } from 'react';
import HeroSection from '../Components/Home/Hero';
import AristoLandingPage from '../Components/Home/About';
import Marquee from '../Components/Home/Marquee';
import CompetenciesSection from '../Components/Home/CircleSec';
import Quote from '../Components/Home/Quote';
import TestimonialSection from '../Components/Home/Testiminal';
import ContactDes from '../Components/Home/ContactDes';
import Loader from '../Components/Loader';
import ContentBox from '../Components/Home/ContentBox';



const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show loader for 5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    // Cleanup timer if component unmounts early
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <HeroSection />
          <AristoLandingPage />
          <Marquee />
          <CompetenciesSection />
          <ContentBox/>
          <Quote />
          <TestimonialSection />
          <ContactDes />
        </>
      )}
    </>
  );
};

export default Home;