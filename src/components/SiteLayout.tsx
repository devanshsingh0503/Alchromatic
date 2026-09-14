"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/config";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import BackToTop from "@/components/BackToTop";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const nav = siteConfig.navigation;

  return (
    <>
      {/* Desktop Nav — fixed floating bottom bar */}
      <header className="pointer-events-none fixed inset-x-0 bottom-0 z-[999] hidden xl:block">
        <div className="relative mx-auto w-full max-w-full">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 bottom-8 h-12 w-[640px] max-w-[90vw] -translate-x-1/2 rounded-2xl border border-white/30 bg-[rgba(20,20,20,0.92)] shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-[14px]"
          />
          <nav className="pointer-events-auto absolute left-1/2 bottom-8 flex h-12 w-[640px] max-w-[90vw] -translate-x-1/2 items-center justify-center gap-6 rounded-2xl px-6">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-poppins text-xs uppercase text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] transition hover:text-white/80 focus:outline-none focus:ring-2 focus:ring-white/20 rounded-lg px-2 py-1"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Mobile Menu Popup */}
      <div
        className={`fixed left-1/2 z-30 w-[calc(100%-64px)] max-w-[300px] -translate-x-1/2 rounded-3xl border border-white/12 bg-[rgba(10,10,10,0.96)] px-5 py-5 shadow-[0_20px_48px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-all duration-300 ease-out xl:hidden ${
          mobileMenuOpen
            ? "pointer-events-auto translate-y-0 opacity-100 visible"
            : "pointer-events-none translate-y-4 opacity-0 invisible"
        }`}
        style={{ bottom: "112px" }}
      >
        <div className="space-y-1 font-poppins uppercase tracking-[0.08em] text-white">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`flex min-h-[52px] items-center justify-between rounded-2xl px-4 py-3 text-[13px] transition-all duration-150 active:scale-[0.97] ${
                pathname === item.href
                  ? "bg-white/15 text-white"
                  : "bg-transparent text-white/75 active:bg-white/10 active:text-white"
              } focus:outline-none focus:ring-2 focus:ring-white/20`}
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              <span>{item.label}</span>
              {pathname === item.href && (
                <span className="size-1.5 rounded-full bg-white/60" />
              )}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Bottom Bar */}
      <div className="pointer-events-none fixed bottom-5 left-1/2 z-40 w-[calc(100%-64px)] max-w-[300px] -translate-x-1/2 xl:hidden sm:bottom-7">
        <div className="pointer-events-auto flex items-center justify-between rounded-3xl border border-white/10 bg-[rgba(20,20,20,0.92)] px-5 py-4 shadow-[0_18px_44px_rgba(0,0,0,0.45)] backdrop-blur-lg">
          <a
            href={siteConfig.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="flex flex-1 items-center justify-between rounded-2xl bg-[#d9d9d9] px-6 py-3 font-poppins text-xs uppercase tracking-[0.12em] text-black shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] transition-all duration-150 active:scale-[0.97] active:bg-[#c4c4c4] focus:outline-none focus:ring-2 focus:ring-white/20"
            style={{ WebkitTapHighlightColor: "transparent" }}
          >
            <span>WhatsApp</span>
            <span className="ml-3 flex size-8 items-center justify-center rounded-full bg-black/85 text-[#d9d9d9]">
              <WhatsAppIcon className="size-[18px]" />
            </span>
          </a>
          <button
            type="button"
            onClick={() => setChatOpen(!chatOpen)}
            aria-label={chatOpen ? "Close chat" : "Open chat"}
            style={{ WebkitTapHighlightColor: "transparent" }}
            className={`ml-3 flex min-h-[44px] min-w-[44px] items-center justify-center rounded-2xl border border-white/12 text-white transition-all duration-150 active:scale-[0.93] focus:outline-none focus:ring-2 focus:ring-white/20 ${
              chatOpen ? "bg-[#d9d9d9] text-black" : "bg-black/70 active:bg-black/90"
            }`}
          >
            <MessageCircle className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            style={{ WebkitTapHighlightColor: "transparent" }}
            className={`ml-3 flex min-h-[44px] min-w-[44px] items-center justify-center rounded-2xl border border-white/12 text-white transition-all duration-150 active:scale-[0.93] focus:outline-none focus:ring-2 focus:ring-white/20 ${
              mobileMenuOpen ? "bg-white/15" : "bg-black/70 active:bg-black/90"
            }`}
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Desktop floating action buttons */}
      <div className="hidden 2xl:flex fixed bottom-8 right-8 flex-col gap-4 z-[9999]">
        <a
          href={siteConfig.contact.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex size-14 items-center justify-center rounded-full bg-black/90 text-white shadow-lg transition-all duration-200 hover:scale-110 hover:bg-black"
          aria-label="Chat on WhatsApp"
        >
          <WhatsAppIcon className="size-7" />
        </a>
        <button
          type="button"
          onClick={() => setChatOpen(!chatOpen)}
          aria-label={chatOpen ? "Close chat" : "Open chat"}
          className={`flex size-14 items-center justify-center rounded-full shadow-lg transition-all duration-200 hover:scale-110 ${
            chatOpen ? "bg-[#d9d9d9] text-black" : "bg-black/90 text-white hover:bg-black"
          }`}
        >
          <MessageCircle className="size-6" />
        </button>
      </div>

      {/* Chat Widget */}
      <ChatWidget isOpen={chatOpen} onClose={() => setChatOpen(false)} />

      {/* Floating Back to Top Button */}
      <BackToTop />

      {/* Page content */}
      <main className="bg-black text-white">{children}</main>

      {/* Footer */}
      <Footer />
    </>
  );
}
