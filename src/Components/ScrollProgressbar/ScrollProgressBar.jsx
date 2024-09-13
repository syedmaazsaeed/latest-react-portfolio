import React, { useState, useEffect } from 'react';
import './ScrollProgressBar.css';

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="scroll-progress-bar">
      <div className="scroll-progress-bar-filler" style={{ width: `${scrollProgress}%` }} />
    </div>
  );
};

export default ScrollProgressBar;
