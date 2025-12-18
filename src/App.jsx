import React from 'react';
import Header from './components/Header';
import ErrorBanner from './components/ErrorBanner';
import MessageList from './components/MessageList';
import ChatInput from './components/ChatInput';
import { useChat } from './hooks/useChat';
import { exportChatToFile } from './utils/exportChat';

const App = () => {
  const {
    messages,
    inputValue,
    setInputValue,
    isLoading,
    messagesEndRef,
    inputRef,
    sendMessage,
    clearChat
  } = useChat();

  const handleSubmit = () => {
    if (inputValue.trim() && !isLoading) {
      sendMessage(inputValue.trim());
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleExport = () => {
    exportChatToFile(messages);
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      <Header onClear={clearChat} onExport={handleExport} />
      <ErrorBanner />
      <MessageList 
        messages={messages} 
        isLoading={isLoading} 
        messagesEndRef={messagesEndRef} 
      />
      <ChatInput
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onSubmit={handleSubmit}
        onKeyPress={handleKeyPress}
        disabled={isLoading}
        inputRef={inputRef}
      />
    </div>
  );
};

export default App;
