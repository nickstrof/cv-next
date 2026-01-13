'use client';

import { useState } from 'react';

interface ErrorExampleProps {
  shouldThrow?: boolean;
}

const ErrorExample = ({ shouldThrow = false }: ErrorExampleProps) => {
  const [count, setCount] = useState(0);

  // This will throw an error when count reaches 5
  if (shouldThrow || count >= 5) {
    throw new Error('This is a test error to demonstrate ErrorBoundary!');
  }

  return (
    <div className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg">
      <h3 className="text-lg font-semibold mb-2">Error Example Component</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
        Click the button 5 times to trigger an error and see the ErrorBoundary in action.
      </p>
      <div className="space-y-2">
        <p className="text-sm">Count: {count}</p>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
        >
          Increment Count
        </button>
        <button
          onClick={() => setCount(0)}
          className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded text-sm ml-2"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default ErrorExample; 