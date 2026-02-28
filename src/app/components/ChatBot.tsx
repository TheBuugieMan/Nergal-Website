import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Send, Loader2 } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/app/components/ui/sheet';
import { ScrollArea } from '@/app/components/ui/scroll-area';
import { sendChatMessages, isChatConfigured, type ChatMessage } from '@/lib/chatClient';

/** Set to false when the chat API is live and you want to allow real replies. */
const CHAT_IN_PROGRESS = true;

const WELCOME_MESSAGE =
  "This AI chat is still in the workshop — I'm wiring it up so it can answer questions about Nergal, his work, and how to get in touch. For now, wander the site or drop a line in the contact section. I'll be here when the circuits are ready.";

const IN_PROGRESS_REPLY =
  "Message received, but the bot is still training on the good stuff. In the meantime: scroll down to the contact section, or just enjoy the portfolio. The AI will be online soon.";

const NOT_CONFIGURED_MESSAGE =
  "Chat isn't configured yet. Set VITE_CHAT_API_BASE_URL to your Vercel API URL (see README). You can still browse the site and use the contact links.";

export function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: WELCOME_MESSAGE },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

    if (CHAT_IN_PROGRESS) {
      setInput('');
      setMessages((prev) => [
        ...prev,
        { role: 'user', content: text },
        { role: 'assistant', content: IN_PROGRESS_REPLY },
      ]);
      return;
    }

    if (!isChatConfigured()) {
      setInput('');
      setMessages((prev) => [
        ...prev,
        { role: 'user', content: text },
        { role: 'assistant', content: NOT_CONFIGURED_MESSAGE },
      ]);
      return;
    }

    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: text }]);
    setLoading(true);
    setApiError(null);

    try {
      const allMessages: ChatMessage[] = [
        ...messages,
        { role: 'user', content: text },
      ];
      const reply = await sendChatMessages(allMessages);
      setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
    } catch (e) {
      const message =
        e instanceof Error ? e.message : 'Something went wrong. Try again.';
      setApiError(message);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: `Sorry, I couldn't get a response right now. (${message}) Try again or use the contact section to reach Nergal directly.`,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating chat button */}
      <motion.button
        type="button"
        aria-label={CHAT_IN_PROGRESS ? 'Open chat (in progress)' : 'Open AI chat'}
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#8B0000] to-[#FFD700] text-white shadow-lg shadow-[#FFD700]/20 transition-shadow hover:shadow-[#FFD700]/40"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle className="h-6 w-6" />
      </motion.button>

      {/* Chat panel */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="right"
          className="flex w-full flex-col border-[#1a1a1a] bg-[#050505] p-0 sm:max-w-md"
        >
          <SheetHeader className="border-b border-[#1a1a1a] px-4 py-4">
            <SheetTitle className="text-left text-lg text-[#FFD700]">
              Ask about Nergal
            </SheetTitle>
            <p className="text-left text-sm text-gray-400">
              {CHAT_IN_PROGRESS
                ? 'In the workshop — coming soon'
                : 'Questions about his work, projects, and contact'}
            </p>
          </SheetHeader>

          <ScrollArea className="flex-1 px-4 py-4">
            <div className="flex flex-col gap-4 pr-4">
              <AnimatePresence initial={false}>
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={
                      msg.role === 'user'
                        ? 'ml-8 rounded-2xl rounded-tr-sm bg-gradient-to-r from-[#8B0000]/80 to-[#FFD700]/30 px-4 py-3 text-white'
                        : 'mr-8 rounded-2xl rounded-tl-sm border border-[#1a1a1a] bg-[#0a0a0a] px-4 py-3 text-gray-200'
                    }
                  >
                    <p className="whitespace-pre-wrap text-sm leading-relaxed">
                      {msg.content}
                    </p>
                  </motion.div>
                ))}
              </AnimatePresence>
              {loading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mr-8 flex items-center gap-2 rounded-2xl rounded-tl-sm border border-[#1a1a1a] bg-[#0a0a0a] px-4 py-3"
                >
                  <Loader2 className="h-4 w-4 animate-spin text-[#FFD700]" />
                  <span className="text-sm text-gray-400">Thinking...</span>
                </motion.div>
              )}
              <div ref={scrollRef} />
            </div>
          </ScrollArea>

          {apiError && (
            <p className="px-4 py-1 text-xs text-amber-500/90">{apiError}</p>
          )}

          <div className="border-t border-[#1a1a1a] p-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={CHAT_IN_PROGRESS ? 'Say hi — replies coming soon' : 'Ask about Nergal, projects, contact...'}
                className="flex-1 rounded-lg border border-[#1a1a1a] bg-[#0a0a0a] px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-[#FFD700]/50 focus:outline-none focus:ring-1 focus:ring-[#FFD700]/30"
                disabled={loading}
              />
              <button
                type="button"
                onClick={sendMessage}
                disabled={loading || !input.trim()}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-[#8B0000] to-[#FFD700] text-white transition-opacity hover:opacity-90 disabled:opacity-50"
              >
                {loading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <Send className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
