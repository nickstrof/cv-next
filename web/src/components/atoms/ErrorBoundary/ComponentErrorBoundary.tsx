'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  componentName?: string;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ComponentErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    if (process.env.NODE_ENV === 'development') {
      console.error(
        `Error in component ${this.props.componentName || 'Unknown'}:`,
        error,
        errorInfo
      );
    }

    this.props.onError?.(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Inline fallback UI for component-level errors
      return (
        <div className="p-4 border border-red-200 dark:border-red-800 rounded-lg bg-red-50 dark:bg-red-900/20">
          <div className="flex items-center space-x-2 mb-2">
            <svg
              className="h-5 w-5 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
            <span className="text-sm font-medium text-red-800 dark:text-red-200">
              Σφάλμα στο {this.props.componentName || 'component'}
            </span>
          </div>
          <p className="text-sm text-red-600 dark:text-red-300 mb-3">
            Δεν ήταν δυνατή η φόρτωση αυτού του τμήματος.
          </p>
          <button
            onClick={() => {
              this.setState({ hasError: false, error: undefined });
            }}
            className="text-xs bg-red-100 hover:bg-red-200 dark:bg-red-800 dark:hover:bg-red-700 text-red-800 dark:text-red-200 px-2 py-1 rounded transition-colors"
          >
            Δοκιμάστε ξανά
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ComponentErrorBoundary; 