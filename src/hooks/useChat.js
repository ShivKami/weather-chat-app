import { useState, useRef, useEffect } from 'react';
import { sendMessageToAPI, parseAPIResponse } from '../services/weatherApi';
import { INITIAL_MESSAGE } from '../config/constants';
import { getUserFriendlyErrorMessage, logError } from '../utils/errorHandler';

export const useChat = () => {
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (userMessage) => {
    setIsLoading(true);
    setError(null);
    
    const userMsg = {
      id: Date.now(),
      type: 'user',
      content: userMessage,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');

    const agentMsgId = Date.now() + 1;
    setMessages(prev => [...prev, {
      id: agentMsgId,
      type: 'agent',
      content: '',
      timestamp: new Date()
    }]);

    try {
      const response = await sendMessageToAPI(userMessage);
      const agentResponse = await parseAPIResponse(response);

      setMessages(prev => prev.map(msg => 
        msg.id === agentMsgId 
          ? { ...msg, content: agentResponse || 'Weather information retrieved successfully.' }
          : msg
      ));

    } catch (error) {
      // Log technical error for developers (visible in browser console)
      logError('useChat.sendMessage', error);
      
      // Get user-friendly message
      const userFriendlyMessage = getUserFriendlyErrorMessage(error);
      
      // Don't set error state (removes the error banner)
      setError(null);
      
      // Update message with user-friendly error
      setMessages(prev => prev.map(msg => 
        msg.id === agentMsgId 
          ? { ...msg, content: userFriendlyMessage }
          : msg
      ));
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([INITIAL_MESSAGE]);
    setError(null);
  };

  return {
    messages,
    inputValue,
    setInputValue,
    isLoading,
    error,
    messagesEndRef,
    inputRef,
    sendMessage,
    clearChat
  };
};