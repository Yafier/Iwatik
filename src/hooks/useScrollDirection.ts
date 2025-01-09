import { useState, useEffect } from 'react';

export function useScrollDirection() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const threshold = 100; // Minimum scroll before hiding
    let ticking = false;

    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      // Only hide nav after scrolling down threshold amount
      if (currentScrollY > threshold) {
        if (currentScrollY > lastScrollY && isVisible) {
          // Scrolling down
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY && !isVisible) {
          // Scrolling up
          setIsVisible(true);
        }
      } else {
        // Always show nav at top of page
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          controlNavbar();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastScrollY, isVisible]);

  return isVisible;
} 