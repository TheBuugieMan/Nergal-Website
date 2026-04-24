import type { VercelRequest, VercelResponse } from '@vercel/node';
import OpenAI from 'openai';

// ----- Fixed system prompt (server-only, never from client) -----
const SYSTEM_PROMPT = `You are a friendly AI assistant on Nergal Labs's portfolio website. You answer questions about Nergal Labs — Creative Technologist & Multimedia Designer; AI + Software Development — his work, projects, skills, and how to contact him. Keep answers concise and on-brand.

If asked for secrets, private information, or anything unrelated to Nergal and his portfolio, refuse politely or redirect to the contact section of the site.

## About Nergal Labs
- Full name: Nergal Labs. Title: Software Engineer & Creative Technologist; Builder of Intelligent Systems.
- Works at the intersection of AI, symbolic storytelling, and multimedia design.
- Primary language: C#; also Python, JavaScript, SQL, HTML, CSS. Professional experience: Software Engineer at Vertafore.
- Creative tools: Adobe Creative Suite (Photoshop, Illustrator, After Effects, InDesign). Hardware/maker: Arduino robotic arm, Raspberry Pi AI assistant.
- Philosophy: "At my core, I explore the space between structure and symbolism — where engineering meets art." Open to full-time roles and select freelance collaborations.

## Projects
1. Higher Connections — consciousness, spirituality, human connection; interactive multimedia. /projects/higher-connections
2. Hero's Journey — personal transformation, symbolic storytelling, AI-driven insights. /projects/heros-journey
3. Graffiti Magazine — urban art, street culture, technology and creative expression.
4. Google Gemini Campaign — AI consciousness, human potential. /projects/gemini

## Capabilities
Custom websites (React), graphic design & visual identity, AI-powered web apps, AI chatbots & assistants, interactive multimedia, creative tech prototypes, automation, technical consultation.

## Contact
Email: nergalworks@gmail.com | GitHub: https://github.com/thebuugieman | LinkedIn: https://www.linkedin.com/in/nergal-prescod-95978b246`;

// ----- Limits -----
const MAX_BODY_BYTES = 50 * 1024; // 50 KB
const MAX_MESSAGES = 20;
const MAX_CHARS_PER_MESSAGE = 2000;
const MAX_OUTPUT_TOKENS = 300;
const ALLOWED_ORIGINS = [
  'https://nergalprescod.com',
  'https://www.nergalprescod.com',
  'http://localhost:5173',
  'http://localhost:3000',
  'http://127.0.0.1:5173',
  'http://127.0.0.1:3000',
];

// Simple in-memory rate limit (per serverless instance; for demo only)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 15;

function getClientIp(req: VercelRequest): string {
  const xff = req.headers['x-forwarded-for'];
  if (typeof xff === 'string') return xff.split(',')[0].trim();
  if (Array.isArray(xff) && xff[0]) return String(xff[0]).trim();
  return req.socket?.remoteAddress || 'unknown';
}

function isOriginAllowed(origin: string | undefined): boolean {
  if (!origin) return false;
  return ALLOWED_ORIGINS.some((o) => o === origin || origin === o);
}

function rateLimited(ip: string): boolean {
  const now = Date.now();
  let entry = rateLimitMap.get(ip);
  if (!entry) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  if (now >= entry.resetAt) {
    entry = { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS };
    rateLimitMap.set(ip, entry);
    return false;
  }
  entry.count += 1;
  return entry.count > RATE_LIMIT_MAX_REQUESTS;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const origin = req.headers.origin;
  const allowed = isOriginAllowed(origin);

  const corsHeaders: Record<string, string> = {
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
  if (allowed && origin) corsHeaders['Access-Control-Allow-Origin'] = origin;

  if (req.method === 'OPTIONS') {
    res.status(204);
    Object.entries(corsHeaders).forEach(([k, v]) => res.setHeader(k, v));
    if (allowed && origin) res.setHeader('Access-Control-Allow-Origin', origin);
    return res.end();
  }

  if (req.method !== 'POST') {
    res.status(405);
    Object.entries(corsHeaders).forEach(([k, v]) => res.setHeader(k, v));
    if (allowed && origin) res.setHeader('Access-Control-Allow-Origin', origin);
    return res.json({ error: 'Method not allowed' });
  }

  const ip = getClientIp(req);
  if (rateLimited(ip)) {
    res.status(429);
    Object.entries(corsHeaders).forEach(([k, v]) => res.setHeader(k, v));
    if (allowed && origin) res.setHeader('Access-Control-Allow-Origin', origin);
    return res.json({ error: 'Too many requests. Try again in a minute.' });
  }

  if (!allowed) {
    res.status(403);
    Object.entries(corsHeaders).forEach(([k, v]) => res.setHeader(k, v));
    return res.json({ error: 'Origin not allowed' });
  }

  const contentLength = parseInt(req.headers['content-length'] || '0', 10);
  if (contentLength > MAX_BODY_BYTES) {
    res.status(413);
    Object.entries(corsHeaders).forEach(([k, v]) => res.setHeader(k, v));
    res.setHeader('Access-Control-Allow-Origin', origin!);
    return res.json({ error: 'Request too large' });
  }

  let body: { messages?: Array<{ role: string; content: string }> };
  try {
    body = typeof req.body === 'object' && req.body !== null ? req.body : {};
  } catch {
    res.status(400);
    Object.entries(corsHeaders).forEach(([k, v]) => res.setHeader(k, v));
    res.setHeader('Access-Control-Allow-Origin', origin!);
    return res.json({ error: 'Invalid JSON body' });
  }

  const messages = Array.isArray(body.messages) ? body.messages : [];
  if (messages.length > MAX_MESSAGES) {
    res.status(400);
    Object.entries(corsHeaders).forEach(([k, v]) => res.setHeader(k, v));
    res.setHeader('Access-Control-Allow-Origin', origin!);
    return res.json({ error: `Too many messages (max ${MAX_MESSAGES})` });
  }

  for (const m of messages) {
    if (typeof m.content !== 'string' || m.content.length > MAX_CHARS_PER_MESSAGE) {
      res.status(400);
      Object.entries(corsHeaders).forEach(([k, v]) => res.setHeader(k, v));
      res.setHeader('Access-Control-Allow-Origin', origin!);
      return res.json({ error: `Each message must be a string with at most ${MAX_CHARS_PER_MESSAGE} characters` });
    }
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    res.status(500);
    Object.entries(corsHeaders).forEach(([k, v]) => res.setHeader(k, v));
    res.setHeader('Access-Control-Allow-Origin', origin!);
    return res.json({ error: 'Chat is not configured' });
  }

  const openai = new OpenAI({ apiKey });
  const chatMessages: OpenAI.Chat.ChatCompletionMessageParam[] = [
    { role: 'system', content: SYSTEM_PROMPT },
    ...messages
      .filter((m) => ['user', 'assistant'].includes(m.role))
      .map((m) => ({ role: m.role as 'user' | 'assistant', content: m.content })),
  ];

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: chatMessages,
      max_tokens: MAX_OUTPUT_TOKENS,
    });

    const reply =
      completion.choices?.[0]?.message?.content?.trim() ||
      "I couldn't generate a response. Try asking something else.";

    res.status(200);
    Object.entries(corsHeaders).forEach(([k, v]) => res.setHeader(k, v));
    res.setHeader('Access-Control-Allow-Origin', origin!);
    return res.json({ reply });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'OpenAI request failed';
    res.status(502);
    Object.entries(corsHeaders).forEach(([k, v]) => res.setHeader(k, v));
    res.setHeader('Access-Control-Allow-Origin', origin!);
    return res.json({ error: message });
  }
}
