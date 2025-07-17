
export const API_BASE_URL = 'http://localhost:8000';

export const API_ENDPOINTS = {
  chat: `${API_BASE_URL}/chat`,
  history: `${API_BASE_URL}/history`,
} as const;


export type ApiEndpoint = keyof typeof API_ENDPOINTS; 