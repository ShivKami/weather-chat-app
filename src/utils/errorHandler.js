/**
 * Converts technical errors into user-friendly messages
 * @param {Error} error - The error object
 * @returns {string} - User-friendly error message
 */
export const getUserFriendlyErrorMessage = (error) => {
  const errorMessage = error.message || '';

  // Network/Connection errors
  if (errorMessage.includes('Failed to fetch') || 
      errorMessage.includes('NetworkError') ||
      errorMessage.includes('Network request failed')) {
    return '🌐 Unable to connect to weather service. Please check your internet connection and try again.';
  }

  // API Status Code errors
  if (errorMessage.includes('404')) {
    return '☁️ Weather service is temporarily unavailable. Please try again later.';
  }

  if (errorMessage.includes('401') || errorMessage.includes('403')) {
    return '🔒 Access denied. Please contact support if this problem persists.';
  }

  if (errorMessage.includes('429')) {
    return '⏱️ Too many requests. Please wait a moment and try again.';
  }

  if (errorMessage.includes('500') || 
      errorMessage.includes('502') || 
      errorMessage.includes('503') || 
      errorMessage.includes('504')) {
    return '⚠️ Weather service is experiencing issues. Please try again in a few minutes.';
  }

  // Timeout errors
  if (errorMessage.includes('timeout') || errorMessage.includes('timed out')) {
    return '⏳ Request timed out. Please try again.';
  }

  // Generic fallback message
  return '😔 Sorry, I\'m having trouble getting weather information right now. Please try again in a moment.';
};

/**
 * Logs error for developers while keeping user messages clean
 * @param {string} context - Where the error occurred
 * @param {Error} error - The error object
 */
export const logError = (context, error) => {
  console.error(`[${context}] Error:`, {
    message: error.message,
    stack: error.stack,
    timestamp: new Date().toISOString()
  });
};