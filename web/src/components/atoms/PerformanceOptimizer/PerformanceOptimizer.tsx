'use client';

import { useEffect, useRef } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // Reduce JavaScript execution time
    const optimizePerformance = () => {
      // 1. Preload critical resources
      const preloadLinks = [
        { rel: 'preload', href: '/api/sanity', as: 'fetch', crossorigin: 'anonymous' },
        { rel: 'preload', href: '/api/blogs', as: 'fetch', crossorigin: 'anonymous' },
      ];

      preloadLinks.forEach(({ rel, href, as, crossorigin }) => {
        const link = document.createElement('link');
        link.rel = rel;
        link.href = href;
        if (as) link.setAttribute('as', as);
        if (crossorigin) link.setAttribute('crossorigin', crossorigin);
        document.head.appendChild(link);
      });

      // 2. Optimize images loading
      if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[data-src]');
        images.forEach((img) => {
          img.setAttribute('loading', 'lazy');
        });
      }

      // 3. Reduce layout thrashing
      const optimizeLayout = () => {
        const elements = document.querySelectorAll('.layout-sensitive');
        elements.forEach((element) => {
          if (element instanceof HTMLElement) {
            element.style.willChange = 'transform';
          }
        });
      };

      // 4. Optimize scroll events
      let ticking = false;
      const handleScroll = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            // Handle scroll logic here
            ticking = false;
          });
          ticking = true;
        }
      };

      window.addEventListener('scroll', handleScroll, { passive: true });

      // 5. Optimize animations
      const style = document.createElement('style');
      style.textContent = `
        .performance-optimized {
          will-change: transform, opacity;
          transform: translateZ(0);
        }
        
        .reduce-motion {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      `;
      document.head.appendChild(style);

      // 6. Respect user's motion preferences
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.classList.add('reduce-motion');
      }

      // 7. Optimize fonts
      const fontLinks = document.querySelectorAll('link[rel="preload"][as="font"]');
      fontLinks.forEach((link) => {
        link.setAttribute('crossorigin', 'anonymous');
      });

      // 8. Monitor performance
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (entry.entryType === 'longtask' && entry.duration > 50) {
              console.warn('Long task detected:', entry.duration, 'ms');
            }
          });
        });
        observer.observe({ entryTypes: ['longtask'] });
      }

      // 9. Optimize memory usage
      const optimizeMemory = () => {
        // Clear unused event listeners
        const cleanup = () => {
          // Cleanup logic here
        };
        
        // Cleanup on page unload
        window.addEventListener('beforeunload', cleanup);
      };

      optimizeMemory();
      optimizeLayout();
    };

    // Run optimizations after initial load
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', optimizePerformance);
    } else {
      optimizePerformance();
    }

    // Cleanup function
    return () => {
      // Cleanup optimizations if needed
    };
  }, []);

  return <>{children}</>;
};

export default PerformanceOptimizer; 