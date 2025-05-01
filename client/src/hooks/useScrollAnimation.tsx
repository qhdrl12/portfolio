import { useCallback } from 'react';

export const useScrollAnimation = () => {
  const setupScrollAnimation = useCallback(() => {
    const revealSections = document.querySelectorAll('.section-fade-in');
    
    const revealSection = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    };
    
    const sectionObserver = new IntersectionObserver(revealSection, {
      root: null,
      threshold: 0.15
    });
    
    revealSections.forEach(section => {
      sectionObserver.observe(section);
    });

    return () => {
      revealSections.forEach(section => {
        sectionObserver.unobserve(section);
      });
    };
  }, []);

  return { setupScrollAnimation };
};
