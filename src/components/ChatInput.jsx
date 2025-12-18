import React from 'react';
import { Send } from 'lucide-react';

const ChatInput = ({ 
  value, 
  onChange, 
  onSubmit, 
  onKeyPress, 
  disabled, 
  inputRef 
}) => {
  return (
    <div className="border-t border-gray-200 px-6 py-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            value={value}
            onChange={onChange}
            onKeyPress={onKeyPress}
            placeholder="Ask about weather in any city..."
            disabled={disabled}
            className="w-full px-5 py-4 pr-14 text-sm bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed transition-all placeholder:text-gray-400"
          />
          <button
            type="button"
            onClick={onSubmit}
            disabled={!value.trim() || disabled}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white p-2.5 rounded-lg hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            title="Send message"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;