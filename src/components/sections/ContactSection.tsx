import React, { useState } from 'react';
import { PERSONAL_INFO } from '../../data';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFeedback('Thank you! Message queued. I will get back to you shortly.');
      setName('');
      setEmail('');
      setMessage('');
      setTimeout(() => {
        setFeedback(null);
      }, 5000);
    }, 900);
  };

  return (
    <section className="flex flex-col gap-4 scroll-mt-20" id="contact">
      <div className="flex flex-col gap-1">
        <span className="font-['JetBrains_Mono'] text-[13px] text-[#7bd0ff] uppercase tracking-wider font-semibold">
          Get In Touch
        </span>
        <h2 className="font-['Plus_Jakarta_Sans'] text-[28px] sm:text-[32px] text-[#dfe2f1] font-bold tracking-tight">
          Let's Build Something Meaningful
        </h2>
      </div>

      {/* Contact Quick Action Cards */}
      <div className="flex flex-col gap-2.5">
        <a
          href={`tel:${PERSONAL_INFO.phone}`}
          className="p-3.5 sm:p-4 rounded-xl bg-[#1c1f2a] border border-white/5 flex items-center justify-between group active:scale-[0.99] transition-all hover:border-[#7bd0ff]/30 cursor-pointer"
        >
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-lg bg-[#7bd0ff]/15 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[#7bd0ff] text-[20px]">call</span>
            </div>
            <div className="flex flex-col truncate">
              <span className="font-['Plus_Jakarta_Sans'] text-[10px] text-[#908fa0] uppercase font-bold tracking-wider">
                Direct Phone
              </span>
              <span className="font-['Plus_Jakarta_Sans'] text-[15px] sm:text-[16px] font-semibold text-[#dfe2f1] truncate">
                {PERSONAL_INFO.phone}
              </span>
            </div>
          </div>
          <span className="material-symbols-outlined text-[#908fa0] group-hover:text-[#7bd0ff] transition-colors text-[20px]">
            chevron_right
          </span>
        </a>

        <a
          href={`mailto:${PERSONAL_INFO.email}`}
          className="p-3.5 sm:p-4 rounded-xl bg-[#1c1f2a] border border-white/5 flex items-center justify-between group active:scale-[0.99] transition-all hover:border-[#c0c1ff]/30 cursor-pointer"
        >
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-lg bg-[#c0c1ff]/15 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[#c0c1ff] text-[20px]">mail</span>
            </div>
            <div className="flex flex-col truncate">
              <span className="font-['Plus_Jakarta_Sans'] text-[10px] text-[#908fa0] uppercase font-bold tracking-wider">
                Primary Email
              </span>
              <span className="font-['Plus_Jakarta_Sans'] text-[15px] sm:text-[16px] font-semibold text-[#dfe2f1] truncate">
                {PERSONAL_INFO.email}
              </span>
            </div>
          </div>
          <span className="material-symbols-outlined text-[#908fa0] group-hover:text-[#c0c1ff] transition-colors text-[20px]">
            chevron_right
          </span>
        </a>
      </div>

      {/* Action Buttons Row */}
      <div className="grid grid-cols-2 gap-2.5">
        <a
          href={`mailto:${PERSONAL_INFO.email}`}
          className="h-11 rounded-lg bg-[#c0c1ff] text-[#1000a9] font-['Plus_Jakarta_Sans'] text-[14px] font-bold flex items-center justify-center gap-1.5 shadow-md active:scale-[0.98] hover:brightness-105 transition-all"
        >
          <span className="material-symbols-outlined text-[18px]">send</span>
          <span>Email Me</span>
        </a>
        <a
          href={`tel:${PERSONAL_INFO.phone}`}
          className="h-11 rounded-lg bg-[#262a35] text-[#dfe2f1] hover:bg-[#313540] font-['Plus_Jakarta_Sans'] text-[14px] font-semibold flex items-center justify-center gap-1.5 active:scale-[0.98] transition-all border border-white/5"
        >
          <span className="material-symbols-outlined text-[18px] text-[#7bd0ff]">phone_forwarded</span>
          <span>Call Me</span>
        </a>
      </div>

      {/* Interactive Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="p-4 sm:p-5 rounded-2xl bg-[#171b26] border border-white/5 flex flex-col gap-3.5 shadow-md mt-1"
        id="portfolio-contact-form"
      >
        <div className="flex flex-col gap-1">
          <label
            htmlFor="contact-name"
            className="font-['JetBrains_Mono'] text-[12px] text-[#c7c4d7] font-medium"
          >
            Your Name
          </label>
          <input
            id="contact-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Alex Mercer"
            className="w-full h-11 px-3.5 rounded-lg bg-[#0a0e18] text-[#dfe2f1] placeholder:text-[#908fa0] font-['Plus_Jakarta_Sans'] text-[15px] border border-white/5 focus:border-[#c0c1ff] focus:outline-none transition-colors"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="contact-email"
            className="font-['JetBrains_Mono'] text-[12px] text-[#c7c4d7] font-medium"
          >
            Your Email Address
          </label>
          <input
            id="contact-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="alex@company.com"
            className="w-full h-11 px-3.5 rounded-lg bg-[#0a0e18] text-[#dfe2f1] placeholder:text-[#908fa0] font-['Plus_Jakarta_Sans'] text-[15px] border border-white/5 focus:border-[#c0c1ff] focus:outline-none transition-colors"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="contact-msg"
            className="font-['JetBrains_Mono'] text-[12px] text-[#c7c4d7] font-medium"
          >
            Message or Opportunity
          </label>
          <textarea
            id="contact-msg"
            required
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Discuss an internship, hackathon collaboration, or project inquiry..."
            className="w-full p-3.5 rounded-lg bg-[#0a0e18] text-[#dfe2f1] placeholder:text-[#908fa0] font-['Plus_Jakarta_Sans'] text-[15px] border border-white/5 focus:border-[#c0c1ff] focus:outline-none resize-none transition-colors"
          ></textarea>
        </div>

        <button
          id="submit-btn"
          type="submit"
          disabled={isSubmitting}
          className="w-full h-12 mt-1 rounded-lg bg-[#c0c1ff] text-[#1000a9] font-['Plus_Jakarta_Sans'] text-[15px] font-bold flex items-center justify-center gap-2 active:scale-[0.98] hover:brightness-105 transition-all shadow-md cursor-pointer disabled:opacity-60"
        >
          <span id="btn-text">
            {isSubmitting ? 'Sending Message...' : 'Send Message'}
          </span>
          <span className="material-symbols-outlined text-[18px]">forward_to_inbox</span>
        </button>

        {/* Feedback Banner */}
        {feedback && (
          <div
            id="form-feedback"
            className="p-3 rounded-lg bg-[#8083ff]/20 border border-[#c0c1ff]/30 text-[#dfe2f1] font-['Plus_Jakarta_Sans'] text-[13px] text-center animate-fadeIn"
          >
            {feedback}
          </div>
        )}
      </form>
    </section>
  );
};
