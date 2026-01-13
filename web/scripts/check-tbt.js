#!/usr/bin/env node

/**
 * TBT (Total Blocking Time) Performance Checker
 * 
 * This script helps monitor and improve TBT performance
 * Run with: node scripts/check-tbt.js
 */

const fs = require('fs');
const path = require('path');

// TBT thresholds
const TBT_THRESHOLDS = {
  mobile: {
    good: 200,      // < 200ms
    needsImprovement: 600,  // 200-600ms
    poor: 600       // > 600ms
  },
  desktop: {
    good: 100,      // < 100ms
    needsImprovement: 300,  // 100-300ms
    poor: 300       // > 300ms
  }
};

// Performance tips for TBT improvement
const TBT_TIPS = [
  "🔧 Split long tasks into smaller chunks",
  "🎯 Use requestIdleCallback for non-critical tasks",
  "⚡ Optimize JavaScript execution",
  "🖼️ Lazy load non-critical resources",
  "🎨 Use CSS transforms instead of layout-triggering properties",
  "📦 Implement code splitting",
  "🔄 Use debounce/throttle for frequent events",
  "🎪 Avoid layout thrashing",
  "📱 Optimize for mobile devices",
  "🔍 Monitor long tasks with PerformanceObserver"
];

// Check if running in development
const isDevelopment = process.env.NODE_ENV === 'development';

console.log('🚀 TBT Performance Checker');
console.log('========================\n');

// Display TBT thresholds
console.log('📊 TBT Thresholds:');
console.log('Mobile:');
console.log(`  ✅ Good: < ${TBT_THRESHOLDS.mobile.good}ms`);
console.log(`  ⚠️  Needs Improvement: ${TBT_THRESHOLDS.mobile.good}-${TBT_THRESHOLDS.mobile.needsImprovement}ms`);
console.log(`  ❌ Poor: > ${TBT_THRESHOLDS.mobile.poor}ms`);
console.log('\nDesktop:');
console.log(`  ✅ Good: < ${TBT_THRESHOLDS.desktop.good}ms`);
console.log(`  ⚠️  Needs Improvement: ${TBT_THRESHOLDS.desktop.good}-${TBT_THRESHOLDS.desktop.needsImprovement}ms`);
console.log(`  ❌ Poor: > ${TBT_THRESHOLDS.desktop.poor}ms\n`);

// Check for performance monitoring setup
const performanceFile = path.join(__dirname, '../src/lib/performance/performance.ts');
const tbtOptimizerFile = path.join(__dirname, '../src/lib/performance/tbt-optimizer.ts');

console.log('🔍 Checking Performance Setup:');

if (fs.existsSync(performanceFile)) {
  console.log('  ✅ Performance monitoring configured');
} else {
  console.log('  ❌ Performance monitoring not found');
}

if (fs.existsSync(tbtOptimizerFile)) {
  console.log('  ✅ TBT optimizer configured');
} else {
  console.log('  ❌ TBT optimizer not found');
}

// Check for optimized icons
const iconsOptimizedFile = path.join(__dirname, '../src/components/atoms/Icons/IconsOptimized.jsx');
const lazyIconsFile = path.join(__dirname, '../src/components/atoms/Icons/LazyIcons.jsx');

console.log('\n🎨 Checking Icons Optimization:');

if (fs.existsSync(iconsOptimizedFile)) {
  console.log('  ✅ Optimized icons component found');
} else {
  console.log('  ❌ Optimized icons component not found');
}

if (fs.existsSync(lazyIconsFile)) {
  console.log('  ✅ Lazy icons component found');
} else {
  console.log('  ❌ Lazy icons component not found');
}

// Check Next.js config for performance optimizations
const nextConfigFile = path.join(__dirname, '../next.config.ts');

console.log('\n⚙️  Checking Next.js Configuration:');

if (fs.existsSync(nextConfigFile)) {
  const configContent = fs.readFileSync(nextConfigFile, 'utf8');
  
  if (configContent.includes('optimizePackageImports')) {
    console.log('  ✅ Package import optimization enabled');
  } else {
    console.log('  ❌ Package import optimization not found');
  }
  
  if (configContent.includes('images')) {
    console.log('  ✅ Image optimization configured');
  } else {
    console.log('  ❌ Image optimization not found');
  }
  
  if (configContent.includes('removeConsole') && configContent.includes('production')) {
    console.log('  ✅ Console removal in production enabled');
  } else {
    console.log('  ❌ Console removal in production not found');
  }
} else {
  console.log('  ❌ Next.js config not found');
}

// Display TBT improvement tips
console.log('\n💡 TBT Improvement Tips:');
TBT_TIPS.forEach((tip, index) => {
  console.log(`  ${index + 1}. ${tip}`);
});

// Recommendations based on current setup
console.log('\n📋 Recommendations:');

const recommendations = [];

if (!fs.existsSync(performanceFile)) {
  recommendations.push('Set up performance monitoring in src/lib/performance/performance.ts');
}

if (!fs.existsSync(tbtOptimizerFile)) {
  recommendations.push('Implement TBT optimizer in src/lib/performance/tbt-optimizer.ts');
}

if (!fs.existsSync(iconsOptimizedFile)) {
  recommendations.push('Create optimized icons component to reduce initial bundle size');
}

if (!fs.existsSync(lazyIconsFile)) {
  recommendations.push('Implement lazy loading for non-critical icons');
}

if (recommendations.length === 0) {
  console.log('  ✅ All TBT optimizations are in place!');
} else {
  recommendations.forEach((rec, index) => {
    console.log(`  ${index + 1}. ${rec}`);
  });
}

// Testing instructions
console.log('\n🧪 Testing Instructions:');
console.log('1. Run Lighthouse audit:');
console.log('   npm run lighthouse');
console.log('\n2. Use Chrome DevTools Performance tab:');
console.log('   - Open DevTools > Performance');
console.log('   - Record page load');
console.log('   - Check "Long Tasks" in the timeline');
console.log('\n3. Monitor in browser console:');
console.log('   - Check for TBT warnings');
console.log('   - Monitor long task detection');

// Development mode specific instructions
if (isDevelopment) {
  console.log('\n🔧 Development Mode:');
  console.log('- Performance monitoring is active');
  console.log('- Check browser console for TBT metrics');
  console.log('- Use React DevTools Profiler for component analysis');
}

console.log('\n📈 For detailed analysis, run:');
console.log('npm run analyze  # Bundle analysis');
console.log('npm run build    # Production build test');
console.log('npm run start    # Production server test');

console.log('\n✨ TBT Check Complete!'); 