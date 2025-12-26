import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import SmoothScroll from 'smooth-scroll';  // This is the anchor-focused library

const Root = () => {
  useEffect(() => {
    const scroll = new SmoothScroll('a[href*="#"]', {
      speed: 800,              // Duration in ms (better than your custom speed:1)
      speedAsDuration: true,
      easing: 'easeInOutCubic',
      // Remove frameRate – not a valid option here
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <StrictMode>
      <App />
    </StrictMode>
  );
};

createRoot(document.getElementById('root')).render(<Root />);