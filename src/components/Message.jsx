import React from 'react';
import { formatTime } from '../utils/dateFormatter';

const Message = ({ message }) => {
  return (
    <div className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[80%] ${
          message.type === 'user'
            ? 'bg-gray-900 text-white'
            : 'bg-gray-50 text-gray-900 border border-gray-200'
        } rounded-2xl px-5 py-4`}
      >
        <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">
          {message.content}
        </p>
        <p
          className={`text-xs mt-2 ${
            message.type === 'user' ? 'text-gray-300' : 'text-gray-400'
          }`}
        >
          {formatTime(message.timestamp)}
        </p>
      </div>
    </div>
  );
};

export default Message;