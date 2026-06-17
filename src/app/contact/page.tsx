"use client";

import { useState } from "react";
import { siteConfig } from "@/data/config";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import StackSection from "@/components/StackSection";
import ParallaxElement from "@/components/ParallaxElement";

const subjects = [
  "Free Trial Session",
  "Membership Enquiry",
  "Personal Training",
  "Apex-90 Program",
  "Corporate Wellness",
  "Other",
];

export default function ContactPage() {
  const [activeLocation, setActiveLocation] = useState(siteConfig.locations[0].id);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: subjects[0],
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const currentLocation = siteConfig.locations.find((l) => l.id === activeLocation)!;

  return (
    <div className="bg-black text-white">

      {/* ── SECTION 1 · HERO ─────────────────────────────── */}
      <StackSection index={0} bg="#000" className="pt-24 pb-14 xl:pt-32 min-h-[55vh] flex items-center">
        <ParallaxElement speed={105} className="pointer-events-none absolute -top-24 left-1/3 w-[560px] h-[560px] rounded-full bg-white/[0.025] blur-3xl" />
        <ParallaxElement speed={60} className="pointer-events-none absolute bottom-0 right-0 w-[260px] h-[260px] rounded-full bg-white/[0.015] blur-2xl" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full">
          <ParallaxElement speed={22}>
            <p className="font-poppins text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4">Get In Touch</p>
            <h1 className="font-rebelton text-[clamp(3rem,8vw,7rem)] leading-[0.9] text-white">Contact Us</h1>
          </ParallaxElement>
          <p className="mt-5 font-poppins text-sm text-white/60 max-w-xl leading-relaxed">
            Ready to begin your transformation? Drop us a message and we&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </StackSection>

      {/* ── SECTION 2 · FORM + SIDEBAR ───────────────────── */}
      <StackSection index={1} bg="#050505" className="py-20">
        <ParallaxElement speed={80} className="pointer-events-none absolute top-0 right-0 w-[380px] h-[380px] rounded-full bg-white/[0.018] blur-3xl" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-5 gap-10">

            {/* Form */}
            <div className="xl:col-span-3">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-20 rounded-3xl border border-white/10 bg-white/4">
                  <CheckCircle size={48} className="text-white/60 mb-5" />
                  <h2 className="font-rebelton text-3xl text-white mb-3">Message Sent!</h2>
                  <p className="font-poppins text-sm text-white/50 max-w-sm leading-relaxed">
                    Thanks for reaching out! Our team will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", subject: subjects[0], message: "" }); }}
                    className="mt-8 rounded-full border border-white/20 px-8 py-3 font-poppins text-sm text-white/60 hover:text-white hover:border-white transition"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="mb-2 block font-poppins text-[10px] uppercase tracking-[0.15em] text-white/40">Full Name *</label>
                      <input required type="text" value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full rounded-2xl border border-white/10 bg-white/6 px-5 py-4 font-poppins text-sm text-white outline-none placeholder:text-white/25 focus:border-white/30 transition"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block font-poppins text-[10px] uppercase tracking-[0.15em] text-white/40">Phone Number *</label>
                      <input required type="tel" value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full rounded-2xl border border-white/10 bg-white/6 px-5 py-4 font-poppins text-sm text-white outline-none placeholder:text-white/25 focus:border-white/30 transition"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block font-poppins text-[10px] uppercase tracking-[0.15em] text-white/40">Email Address</label>
                    <input type="email" value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full rounded-2xl border border-white/10 bg-white/6 px-5 py-4 font-poppins text-sm text-white outline-none placeholder:text-white/25 focus:border-white/30 transition"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block font-poppins text-[10px] uppercase tracking-[0.15em] text-white/40">I&apos;m Interested In</label>
                    <select value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full rounded-2xl border border-white/10 bg-[#111] px-5 py-4 font-poppins text-sm text-white outline-none focus:border-white/30 transition"
                    >
                      {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="mb-2 block font-poppins text-[10px] uppercase tracking-[0.15em] text-white/40">Message</label>
                    <textarea rows={5} value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your goals, experience level, or anything else..."
                      className="w-full resize-none rounded-2xl border border-white/10 bg-white/6 px-5 py-4 font-poppins text-sm text-white outline-none placeholder:text-white/25 focus:border-white/30 transition"
                    />
                  </div>
                  <button type="submit"
                    className="w-full rounded-2xl bg-white py-4 font-poppins text-sm font-medium tracking-wide text-black transition hover:bg-white/90 active:scale-[0.99]"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar with subtle parallax */}
            <ParallaxElement speed={18} className="xl:col-span-2 space-y-6">
              <div className="rounded-3xl border border-white/10 bg-white/4 p-7">
                <h3 className="font-poppins text-xs uppercase tracking-[0.15em] text-white/40 mb-6">Contact Info</h3>
                <ul className="space-y-5">
                  {siteConfig.contact.phones.map((phone) => (
                    <li key={phone} className="flex items-start gap-4">
                      <Phone size={15} className="mt-0.5 shrink-0 text-white/30" />
                      <a href={`tel:${phone}`} className="font-poppins text-sm text-white/70 hover:text-white transition">{phone}</a>
                    </li>
                  ))}
                  <li className="flex items-start gap-4">
                    <Mail size={15} className="mt-0.5 shrink-0 text-white/30" />
                    <a href={`mailto:${siteConfig.contact.email}`} className="font-poppins text-sm text-white/70 hover:text-white transition">
                      {siteConfig.contact.email}
                    </a>
                  </li>
                  <li className="flex items-start gap-4">
                    <Clock size={15} className="mt-0.5 shrink-0 text-white/30" />
                    <div className="font-poppins text-sm text-white/70">
                      <div>{siteConfig.contact.hours.weekdays}</div>
                      <div>{siteConfig.contact.hours.weekend}</div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/4 p-7">
                <h3 className="font-poppins text-xs uppercase tracking-[0.15em] text-white/40 mb-4">Locations</h3>
                <div className="flex gap-2 mb-5">
                  {siteConfig.locations.map((loc) => (
                    <button key={loc.id} onClick={() => setActiveLocation(loc.id)}
                      className={`flex-1 rounded-xl py-2.5 font-poppins text-[10px] uppercase tracking-[0.1em] transition ${
                        activeLocation === loc.id
                          ? "bg-white text-black"
                          : "border border-white/10 text-white/50 hover:text-white hover:border-white/30"
                      }`}
                    >
                      {loc.label.split(" ")[0]}
                    </button>
                  ))}
                </div>
                <div className="flex items-start gap-3 mb-4">
                  <MapPin size={14} className="mt-0.5 shrink-0 text-white/30" />
                  <p className="font-poppins text-sm text-white/60" style={{ whiteSpace: "pre-line" }}>
                    {currentLocation.address}
                  </p>
                </div>
                <p className="font-poppins text-sm text-white/60 mb-5">📞 {currentLocation.phone}</p>
                <div className="overflow-hidden rounded-2xl">
                  <iframe
                    src={currentLocation.mapEmbed}
                    width="100%" height="200"
                    style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                    allowFullScreen loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${currentLocation.label} map`}
                  />
                </div>
              </div>
            </ParallaxElement>

          </div>
        </div>
      </StackSection>

    </div>
  );
}
