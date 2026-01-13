#!/usr/bin/env node

/**
 * JavaScript Performance Checker
 * 
 * This script helps identify and fix JavaScript execution time issues
 * Run with: node scripts/check-js-performance.js
 */

const fs = require('fs');
const path = require('path');

// Performance thresholds
const PERFORMANCE_THRESHOLDS = {
  jsExecution: {
    good: 1000,        // < 1s
    needsImprovement: 2000,  // 1-2s
    poor: 2000         // > 2s
  },
  mainThreadWork: {
    good: 1500,        // < 1.5s
    needsImprovement: 2500,  // 1.5-2.5s
    poor: 2500         // > 2.5s
  }
};

// JavaScript optimization tips
const JS_OPTIMIZATION_TIPS = [
  "🔧 Implement code splitting with dynamic imports",
  "📦 Use lazy loading for non-critical components",
  "⚡ Optimize bundle size with tree shaking",
  "🎯 Use React.memo for expensive components",
  "🔄 Implement proper memoization (useMemo, useCallback)",
  "📱 Optimize for mobile devices",
  "🎪 Avoid layout thrashing",
  "🔍 Monitor long tasks with PerformanceObserver",
  "📊 Use bundle analyzer to identify large packages",
  "🚀 Implement critical CSS inlining"
];

console.log('⚡ JavaScript Performance Checker');
console.log('================================\n');

// Display performance thresholds
console.log('📊 Performance Thresholds:');
console.log('JavaScript Execution Time:');
console.log(`  ✅ Good: < ${PERFORMANCE_THRESHOLDS.jsExecution.good}ms`);
console.log(`  ⚠️  Needs Improvement: ${PERFORMANCE_THRESHOLDS.jsExecution.good}-${PERFORMANCE_THRESHOLDS.jsExecution.needsImprovement}ms`);
console.log(`  ❌ Poor: > ${PERFORMANCE_THRESHOLDS.jsExecution.poor}ms`);
console.log('\nMain Thread Work:');
console.log(`  ✅ Good: < ${PERFORMANCE_THRESHOLDS.mainThreadWork.good}ms`);
console.log(`  ⚠️  Needs Improvement: ${PERFORMANCE_THRESHOLDS.mainThreadWork.good}-${PERFORMANCE_THRESHOLDS.mainThreadWork.needsImprovement}ms`);
console.log(`  ❌ Poor: > ${PERFORMANCE_THRESHOLDS.mainThreadWork.poor}ms\n`);

// Check for performance optimizations
const homePageFile = path.join(__dirname, '../src/components/pages/HomePage.tsx');
const layoutFile = path.join(__dirname, '../src/app/[locale]/layout.tsx');
const nextConfigFile = path.join(__dirname, '../next.config.ts');
const performanceOptimizerFile = path.join(__dirname, '../src/components/atoms/PerformanceOptimizer/PerformanceOptimizer.tsx');

console.log('🔍 Checking JavaScript Performance Setup:');

// Check HomePage for code splitting
if (fs.existsSync(homePageFile)) {
  const content = fs.readFileSync(homePageFile, 'utf8');
  if (content.includes('dynamic(') && content.includes('import(')) {
    console.log('  ✅ Code splitting implemented in HomePage');
  } else {
    console.log('  ❌ Code splitting not found in HomePage');
  }
  
  if (content.includes('ssr: false')) {
    console.log('  ✅ SSR disabled for non-critical components');
  } else {
    console.log('  ❌ SSR not optimized for performance');
  }
} else {
  console.log('  ❌ HomePage component not found');
}

// Check layout for critical CSS
if (fs.existsSync(layoutFile)) {
  const content = fs.readFileSync(layoutFile, 'utf8');
  if (content.includes('criticalCSS') && content.includes('dangerouslySetInnerHTML')) {
    console.log('  ✅ Critical CSS inlining implemented');
  } else {
    console.log('  ❌ Critical CSS inlining not found');
  }
} else {
  console.log('  ❌ Layout file not found');
}

// Check Next.js config
if (fs.existsSync(nextConfigFile)) {
  const content = fs.readFileSync(nextConfigFile, 'utf8');
  
  if (content.includes('swcMinify: true')) {
    console.log('  ✅ SWC minification enabled');
  } else {
    console.log('  ❌ SWC minification not found');
  }
  
  if (content.includes('optimizeCss: true')) {
    console.log('  ✅ CSS optimization enabled');
  } else {
    console.log('  ❌ CSS optimization not found');
  }
  
  if (content.includes('compress: true')) {
    console.log('  ✅ Compression enabled');
  } else {
    console.log('  ❌ Compression not found');
  }
} else {
  console.log('  ❌ Next.js config not found');
}

// Check PerformanceOptimizer
if (fs.existsSync(performanceOptimizerFile)) {
  console.log('  ✅ PerformanceOptimizer component found');
} else {
  console.log('  ❌ PerformanceOptimizer component not found');
}

// Check for large dependencies
const packageJsonFile = path.join(__dirname, '../package.json');
if (fs.existsSync(packageJsonFile)) {
  const packageJson = JSON.parse(fs.readFileSync(packageJsonFile, 'utf8'));
  const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
  
  console.log('\n📦 Checking Dependencies:');
  
  // Check for known heavy packages
  const heavyPackages = ['lodash', 'moment', 'date-fns', 'ramda', 'underscore'];
  heavyPackages.forEach(pkg => {
    if (dependencies[pkg]) {
      console.log(`  ⚠️  Heavy package detected: ${pkg}`);
    }
  });
  
  if (Object.keys(dependencies).length > 20) {
    console.log('  ⚠️  Many dependencies detected - consider bundle analysis');
  } else {
    console.log('  ✅ Reasonable number of dependencies');
  }
}

// Display optimization tips
console.log('\n💡 JavaScript Optimization Tips:');
JS_OPTIMIZATION_TIPS.forEach((tip, index) => {
  console.log(`  ${index + 1}. ${tip}`);
});

// Recommendations
console.log('\n📋 Recommendations:');

const recommendations = [];

if (!fs.existsSync(performanceOptimizerFile)) {
  recommendations.push('Implement PerformanceOptimizer component');
}

if (fs.existsSync(homePageFile)) {
  const content = fs.readFileSync(homePageFile, 'utf8');
  if (!content.includes('dynamic(')) {
    recommendations.push('Implement code splitting in HomePage');
  }
}

if (fs.existsSync(layoutFile)) {
  const content = fs.readFileSync(layoutFile, 'utf8');
  if (!content.includes('criticalCSS')) {
    recommendations.push('Implement critical CSS inlining');
  }
}

if (recommendations.length === 0) {
  console.log('  ✅ All JavaScript optimizations are in place!');
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
console.log('   - Check "JavaScript" section in timeline');
console.log('\n3. Bundle analysis:');
console.log('   npm run analyze');
console.log('\n4. Monitor in browser console:');
console.log('   - Check for long task warnings');
console.log('   - Monitor JavaScript execution time');

console.log('\n📈 For detailed analysis, run:');
console.log('npm run build    # Production build');
console.log('npm run start    # Production server');
console.log('npm run analyze  # Bundle analysis');

console.log('\n✨ JavaScript Performance Check Complete!'); 