export const exportChatToFile = (messages) => {
  const chatText = messages.map(msg => {
    const time = msg.timestamp.toLocaleString();
    const sender = msg.type === 'user' ? 'You' : 'Weather Agent';
    return `[${time}] ${sender}: ${msg.content}`;
  }).join('\n\n');

  const blob = new Blob([chatText], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `weather-chat-${new Date().toISOString().split('T')[0]}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};