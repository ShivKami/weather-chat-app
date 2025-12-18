// API Configuration
export const API_CONFIG = {
  ENDPOINT: 'https://brief-thousands-sunset-9fcb1c78-485f-4967-ac04-2759a8fa1462.mastra.cloud/api/agents/weatherAgent/stream',
  THREAD_ID: import.meta.env.VITE_THREAD_ID || 'YOUR_COLLEGE_ROLL_NUMBER',
  HEADERS: {
    'Accept': '*/*',
    'Content-Type': 'application/json',
    'x-mastra-dev-playground': 'true'
  }
};

// Default messages
export const INITIAL_MESSAGE = {
  id: 1,
  type: 'agent',
  content: 'Hello! I\'m your weather assistant. Ask me about weather conditions in any city!',
  timestamp: new Date()
};

// API Request Configuration
export const API_REQUEST_CONFIG = {
  runId: 'weatherAgent',
  maxRetries: 2,
  maxSteps: 5,
  temperature: 0.5,
  topP: 1,
  runtimeContext: {},
  resourceId: 'weatherAgent'
};