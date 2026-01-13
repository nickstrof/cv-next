'use client'
import React, { useEffect, useRef, useState } from 'react';
interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  // Add a prop to disable animation for critical content
  disableAnimation?: boolean;
}
const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  className = '', 
  delay = 0,
  disableAnimation = false 
}) => {
  const [isVisible, setIsVisible] = useState(disableAnimation);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // If animation is disabled, show content immediately
    if (disableAnimation) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reduce the delay significantly for better performance
          setTimeout(() => setIsVisible(true), Math.min(delay, 100));
        }
      },
      { 
        threshold: 0.1,
        // Add rootMargin to trigger earlier
        rootMargin: '50px'
      }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, [delay, disableAnimation]);
  
  return (
    <div
      ref={ref}
      className={`scroll-reveal ${isVisible ? 'revealed' : ''} ${className}`}
    >
      {children}
    </div>
  );
};
export default ScrollReveal;