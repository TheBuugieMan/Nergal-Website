import { FormEvent, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { BriefcaseBusiness, Mail, MessageCircle, Send } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/app/components/ui/sheet';

type ContactMode = 'quick' | 'project';

const CONTACT_EMAIL = 'nergalworks@gmail.com';

export function ChatBot() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<ContactMode>('quick');
  const [quickMessage, setQuickMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('Website / Web Application');
  const [projectMessage, setProjectMessage] = useState('');

  useEffect(() => {
    const openPanel = () => {
      setMode('quick');
      setOpen(true);
    };

    window.addEventListener('open-contact-panel', openPanel);
    return () => window.removeEventListener('open-contact-panel', openPanel);
  }, []);

  const openEmailDraft = (subject: string, body: string) => {
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const submitQuickMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = quickMessage.trim();
    if (!message) return;

    openEmailDraft('Quick message from NergalLabs', message);
  };

  const submitProjectBrief = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const message = projectMessage.trim();
    if (!trimmedName || !trimmedEmail || !message) return;

    openEmailDraft(
      `Project inquiry from ${trimmedName}`,
      `Name: ${trimmedName}\nEmail: ${trimmedEmail}\nProject type: ${projectType}\n\nMessage:\n${message}`,
    );
  };

  return (
    <>
      <motion.button
        type="button"
        aria-label="Open contact composer"
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#8B0000] to-[#FFD700] text-white shadow-lg shadow-[#FFD700]/20 transition-shadow hover:shadow-[#FFD700]/40"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle className="h-6 w-6" />
      </motion.button>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="right"
          className="flex w-full flex-col overflow-y-auto border-[#FFD700]/25 bg-[#050505] p-0 sm:max-w-md"
        >
          <SheetHeader className="border-b border-[#1a1a1a] bg-gradient-to-r from-[#0a0a0a] to-[#050505] px-5 py-5">
            <p className="text-left font-mono text-xs tracking-[0.2em] text-[#8B0000]">&gt; contact_init.sh</p>
            <SheetTitle className="text-left font-mono text-xl text-[#FFD700]">SEND A MESSAGE</SheetTitle>
            <p className="text-left text-sm leading-relaxed text-gray-400">
              Start with a quick note or share the details behind what you want to build.
            </p>
          </SheetHeader>

          <div className="flex-1 px-5 py-5">
            <div className="grid grid-cols-2 gap-2 rounded-lg border border-[#1a1a1a] bg-[#0a0a0a] p-1">
              <button
                type="button"
                onClick={() => setMode('quick')}
                className={`flex items-center justify-center gap-2 rounded-md px-3 py-2.5 font-mono text-xs transition-colors ${
                  mode === 'quick'
                    ? 'bg-[#FFD700]/15 text-[#FFD700]'
                    : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                <MessageCircle className="h-4 w-4" />
                QUICK NOTE
              </button>
              <button
                type="button"
                onClick={() => setMode('project')}
                className={`flex items-center justify-center gap-2 rounded-md px-3 py-2.5 font-mono text-xs transition-colors ${
                  mode === 'project'
                    ? 'bg-[#FFD700]/15 text-[#FFD700]'
                    : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                <BriefcaseBusiness className="h-4 w-4" />
                PROJECT BRIEF
              </button>
            </div>

            {mode === 'quick' ? (
              <form onSubmit={submitQuickMessage} className="mt-6 space-y-4">
                <div>
                  <label htmlFor="quick-message" className="font-mono text-xs text-gray-400">
                    YOUR MESSAGE
                  </label>
                  <textarea
                    id="quick-message"
                    value={quickMessage}
                    onChange={(event) => setQuickMessage(event.target.value)}
                    required
                    rows={7}
                    placeholder="Tell me what you're thinking..."
                    className="mt-2 w-full resize-none rounded-lg border border-[#FFD700]/20 bg-[#0a0a0a] px-4 py-3 text-sm leading-relaxed text-white placeholder:text-gray-600 focus:border-[#FFD700]/60 focus:outline-none focus:ring-1 focus:ring-[#FFD700]/30"
                  />
                </div>
                <button
                  type="submit"
                  disabled={!quickMessage.trim()}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#8B0000] to-[#FFD700] px-5 py-3 font-mono text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <Send className="h-4 w-4" />
                  COMPOSE QUICK MESSAGE
                </button>
              </form>
            ) : (
              <form onSubmit={submitProjectBrief} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className="font-mono text-xs text-gray-400">NAME</label>
                    <input
                      id="contact-name"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      required
                      autoComplete="name"
                      className="mt-2 w-full rounded-lg border border-[#FFD700]/20 bg-[#0a0a0a] px-3 py-3 text-sm text-white focus:border-[#FFD700]/60 focus:outline-none focus:ring-1 focus:ring-[#FFD700]/30"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="font-mono text-xs text-gray-400">EMAIL</label>
                    <input
                      id="contact-email"
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      required
                      autoComplete="email"
                      className="mt-2 w-full rounded-lg border border-[#FFD700]/20 bg-[#0a0a0a] px-3 py-3 text-sm text-white focus:border-[#FFD700]/60 focus:outline-none focus:ring-1 focus:ring-[#FFD700]/30"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="project-type" className="font-mono text-xs text-gray-400">PROJECT TYPE</label>
                  <select
                    id="project-type"
                    value={projectType}
                    onChange={(event) => setProjectType(event.target.value)}
                    className="mt-2 w-full rounded-lg border border-[#FFD700]/20 bg-[#0a0a0a] px-3 py-3 text-sm text-white focus:border-[#FFD700]/60 focus:outline-none focus:ring-1 focus:ring-[#FFD700]/30"
                  >
                    <option>Website / Web Application</option>
                    <option>AI Integration / Automation</option>
                    <option>Creative Technology</option>
                    <option>Design / Multimedia</option>
                    <option>Technical Consultation</option>
                    <option>Something Else</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="project-message" className="font-mono text-xs text-gray-400">WHAT ARE WE BUILDING?</label>
                  <textarea
                    id="project-message"
                    value={projectMessage}
                    onChange={(event) => setProjectMessage(event.target.value)}
                    required
                    rows={6}
                    placeholder="Share the idea, goal, timeline, or anything useful..."
                    className="mt-2 w-full resize-none rounded-lg border border-[#FFD700]/20 bg-[#0a0a0a] px-4 py-3 text-sm leading-relaxed text-white placeholder:text-gray-600 focus:border-[#FFD700]/60 focus:outline-none focus:ring-1 focus:ring-[#FFD700]/30"
                  />
                </div>
                <button
                  type="submit"
                  disabled={!name.trim() || !email.trim() || !projectMessage.trim()}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#8B0000] to-[#FFD700] px-5 py-3 font-mono text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <Mail className="h-4 w-4" />
                  COMPOSE PROJECT INQUIRY
                </button>
              </form>
            )}

            <p className="mt-5 border-t border-[#1a1a1a] pt-4 text-xs leading-relaxed text-gray-600">
              Submitting opens your email app with the message prepared for {CONTACT_EMAIL}, so you can review it before sending.
            </p>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
