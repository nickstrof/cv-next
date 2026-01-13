'use client';

import { Suspense, lazy, ComponentType } from 'react';

interface LazyComponentProps {
  component: () => Promise<{ default: ComponentType<Record<string, unknown>> }>;
  fallback?: React.ReactNode;
  props?: Record<string, unknown>;
}

const LazyComponent = ({ component, fallback, props }: LazyComponentProps) => {
  const LazyLoadedComponent = lazy(component);

  return (
    <Suspense fallback={fallback || <div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-32 rounded"></div>}>
      <LazyLoadedComponent {...props} />
    </Suspense>
  );
};

export default LazyComponent; 