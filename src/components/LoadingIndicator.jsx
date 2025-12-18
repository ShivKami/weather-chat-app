import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingIndicator = () => {
  return (
    <div className="flex justify-start">
      <div className="bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 flex items-center gap-3">
        <Loader2 className="w-4 h-4 animate-spin text-gray-600" />
        <p className="text-sm text-gray-600">Analyzing weather data...</p>
      </div>
    </div>
  );
};

export default LoadingIndicator;