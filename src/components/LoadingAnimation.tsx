import React from 'react';

const LoadingAnimation: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
        <div className="mt-4 text-blue-600 font-semibold">Loading...</div>
      </div>
    </div>
  );
};

export default LoadingAnimation;