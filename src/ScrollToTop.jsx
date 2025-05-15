import React, { useEffect, useState } from 'react';
import { ArrowUpward } from '@mui/icons-material';

const ScrollToTop = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;

      setScrollProgress(progress);
      setVisible(scrollTop > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    visible && (
      <div
        className="fixed bottom-6 right-6 z-50 cursor-pointer"
        onClick={scrollToTop}
      >
        {/* Scroll Progress Ring */}
        <div
          className="relative w-14 h-14 rounded-full p-1"
          style={{
            background: `conic-gradient(#000 ${scrollProgress}%, #e5e7eb ${scrollProgress}%)`,
          }}
        >
          {/* Inner Circle with thin border */}
          <div className="flex items-center justify-center w-full h-full bg-white rounded-full border border-gray-300">
            <ArrowUpward className="text-black" />
          </div>
        </div>
      </div>
    )
  );
};

export default ScrollToTop;
