'use client';

// Performance monitoring utilities
export const measurePerformance = () => {
  if (typeof window === 'undefined') return;

  // Core Web Vitals
  if ('PerformanceObserver' in window) {
    // Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log('LCP:', lastEntry.startTime);
      
      // Send to analytics if needed
      if (lastEntry.startTime > 2500) {
        console.warn('LCP is too slow:', lastEntry.startTime);
      }
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        const fidEntry = entry as PerformanceEventTiming;
        console.log('FID:', fidEntry.processingStart - fidEntry.startTime);
        
        if (fidEntry.processingStart - fidEntry.startTime > 100) {
          console.warn('FID is too slow:', fidEntry.processingStart - fidEntry.startTime);
        }
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });
  }

  // Navigation Timing API
  if ('performance' in window) {
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        console.log('Page Load Time:', navigation.loadEventEnd - navigation.loadEventStart);
        console.log('DOM Content Loaded:', navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart);
      }
    });
  }
};

// Resource timing
export const measureResourceTiming = () => {
  if (typeof window === 'undefined') return;

  const observer = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    entries.forEach((entry) => {
      if (entry.duration > 1000) {
        console.warn('Slow resource:', entry.name, entry.duration);
      }
    });
  });
  
  observer.observe({ entryTypes: ['resource'] });
};

// Memory usage (if available)
export const measureMemoryUsage = () => {
  if ('memory' in performance) {
    const memory = (performance as { memory: { usedJSHeapSize: number; totalJSHeapSize: number; jsHeapSizeLimit: number } }).memory;
    console.log('Memory Usage:', {
      used: Math.round(memory.usedJSHeapSize / 1048576) + ' MB',
      total: Math.round(memory.totalJSHeapSize / 1048576) + ' MB',
      limit: Math.round(memory.jsHeapSizeLimit / 1048576) + ' MB'
    });
  }
};

// Initialize all performance monitoring
export const initPerformanceMonitoring = () => {
  measurePerformance();
  measureResourceTiming();
  
  // Measure memory usage every 30 seconds
  setInterval(measureMemoryUsage, 30000);
}; 