/**
 * Client for the portfolio chat API. Calls the Vercel serverless proxy;
 * no API keys are used in the frontend.
 */

const CHAT_API_BASE_URL = import.meta.env.VITE_CHAT_API_BASE_URL ?? '';

export type ChatMessage = { role: 'user' | 'assistant'; content: string };

export interface ChatResponse {
  reply: string;
}

export interface ChatError {
  error: string;
}

/**
 * Send messages to the chat API and return the assistant reply.
 * The server adds the system prompt; only user/assistant messages are sent.
 */
export async function sendChatMessages(messages: ChatMessage[]): Promise<string> {
  const base = CHAT_API_BASE_URL.replace(/\/$/, '');
  const url = base ? `${base}/api/chat` : '/api/chat';

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages }),
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    const err = (data as ChatError).error ?? `Request failed: ${res.status}`;
    throw new Error(err);
  }

  return (data as ChatResponse).reply ?? "I couldn't get a response.";
}

/** Whether the chat API is configured (base URL set). */
export function isChatConfigured(): boolean {
  return Boolean(CHAT_API_BASE_URL && CHAT_API_BASE_URL.trim());
}
