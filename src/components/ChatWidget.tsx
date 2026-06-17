"use client";

import { useState, useRef, useEffect } from "react";
import { X, Send } from "lucide-react";
import { siteConfig } from "@/data/config";

interface Message {
  role: "user" | "bot";
  text: string;
}

const botReplies: Record<string, string> = {
  hello: `Hi! Welcome to ${siteConfig.brand.name}. How can I help you today?`,
  hi: `Hey! How can we help you at ${siteConfig.brand.name}?`,
  membership: "We offer flexible membership plans. Please visit us in person or call for the latest pricing.",
  price: "Our membership plans vary. Call us at " + siteConfig.contact.phones[0] + " for a personalized quote.",
  location: `We have two locations:\n• ${siteConfig.locations[0].label}\n• ${siteConfig.locations[1].label}`,
  trial: "Yes! We offer a free trial session. Just drop by any of our locations or message us on WhatsApp!",
  trainer: "Our trainers are internationally certified. They design programs tailored to your specific goals.",
  timing: `${siteConfig.contact.hours.weekdays}\n${siteConfig.contact.hours.weekend}`,
  hours: `${siteConfig.contact.hours.weekdays}\n${siteConfig.contact.hours.weekend}`,
  contact: `You can reach us at:\n📞 ${siteConfig.contact.phones[0]}\n📧 ${siteConfig.contact.email}`,
};

function getBotReply(input: string): string {
  const lower = input.toLowerCase();
  for (const key of Object.keys(botReplies)) {
    if (lower.includes(key)) return botReplies[key];
  }
  return `Thanks for reaching out! For detailed information, please contact us at ${siteConfig.contact.phones[0]} or email ${siteConfig.contact.email}.`;
}

export default function ChatWidget({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: `Hi! I'm the ${siteConfig.brand.name} assistant. How can I help you today?` },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    setMessages((prev) => [...prev, { role: "user", text }]);
    setInput("");
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "bot", text: getBotReply(text) }]);
    }, 600);
  };

  if (!isOpen) return null;

  return (
    <div className="chat-widget-enter fixed bottom-28 right-5 z-[9998] w-80 rounded-2xl border border-white/10 bg-[rgba(15,15,15,0.98)] shadow-[0_24px_64px_rgba(0,0,0,0.7)] backdrop-blur-xl xl:bottom-[140px] xl:right-8">
      {/* Header */}
      <div className="flex items-center justify-between rounded-t-2xl border-b border-white/10 px-5 py-4">
        <div>
          <p className="font-rebelton text-[11px] uppercase tracking-[0.15em] text-white">{siteConfig.brand.name}</p>
          <p className="mt-0.5 font-poppins text-[10px] text-white/50">Chat with us · Usually replies instantly</p>
        </div>
        <button onClick={onClose} className="rounded-full p-1 text-white/40 hover:text-white transition">
          <X size={18} />
        </button>
      </div>

      {/* Messages */}
      <div className="scrollbar-hide flex h-64 flex-col gap-3 overflow-y-auto px-4 py-4">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-2.5 font-poppins text-xs leading-relaxed ${
                msg.role === "user"
                  ? "rounded-br-sm bg-white text-black"
                  : "rounded-bl-sm bg-white/10 text-white"
              }`}
              style={{ whiteSpace: "pre-line" }}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="border-t border-white/10 px-4 py-3">
        <form
          onSubmit={(e) => { e.preventDefault(); send(); }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="min-w-0 flex-1 rounded-xl bg-white/8 px-4 py-2.5 font-poppins text-xs text-white outline-none placeholder:text-white/30 focus:ring-1 focus:ring-white/20"
          />
          <button
            type="submit"
            className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-white text-black transition hover:bg-white/90"
          >
            <Send size={15} />
          </button>
        </form>
      </div>
    </div>
  );
}
