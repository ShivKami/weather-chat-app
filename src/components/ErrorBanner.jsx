import React from 'react';
import { API_CONFIG } from '../config/constants';

const ErrorBanner = ({ error }) => {
  const showWarning = API_CONFIG.THREAD_ID === 'YOUR_COLLEGE_ROLL_NUMBER';

  return (
    <>
      {showWarning && (
        <div className="bg-yellow-50 border-b border-yellow-200 px-6 py-3">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs text-yellow-800">
              ⚠️ Please update your college roll number in src/config/constants.js
            </p>
          </div>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border-b border-red-200 px-6 py-3">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs text-red-800">
              <strong>Error:</strong> {error}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ErrorBanner;