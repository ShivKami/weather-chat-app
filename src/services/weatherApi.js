import { API_CONFIG, API_REQUEST_CONFIG } from '../config/constants';

export const sendMessageToAPI = async (userMessage) => {
  console.log('Sending request to:', API_CONFIG.ENDPOINT);
  console.log('Thread ID:', API_CONFIG.THREAD_ID);
  
  const requestBody = {
    messages: [{ role: 'user', content: userMessage }],
    ...API_REQUEST_CONFIG,
    threadId: API_CONFIG.THREAD_ID
  };
  
  console.log('Request body:', JSON.stringify(requestBody, null, 2));

  const response = await fetch(API_CONFIG.ENDPOINT, {
    method: 'POST',
    headers: API_CONFIG.HEADERS,
    body: JSON.stringify(requestBody)
  });

  console.log('Response status:', response.status);

  if (!response.ok) {
    const errorText = await response.text();
    console.error('Error response:', errorText);
    // Throw error with status code for better error handling
    throw new Error(`API_ERROR_${response.status}`);
  }

  return response;
};

export const parseAPIResponse = async (response) => {
  const responseText = await response.text();
  console.log('Full response:', responseText);

  try {
    const jsonData = JSON.parse(responseText);
    return jsonData.content || jsonData.text || jsonData.message || JSON.stringify(jsonData);
  } catch (e) {
    return responseText || 'Weather information retrieved.';
  }
};