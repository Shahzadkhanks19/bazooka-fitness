"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CalendarCheck2, ChevronUp, MessageCircleMore, X } from "lucide-react";
import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { FaWhatsapp } from "react-icons/fa";

type ChatMessage = { id: number; role: "user" | "assistant"; text: string };

const tooltipClass = "pointer-events-none absolute right-[calc(100%+10px)] top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-md border border-bazooka-border bg-bazooka-black/95 px-3 py-2 text-[9px] font-black uppercase tracking-[.04em] text-white opacity-0 shadow-xl backdrop-blur-md transition-all duration-200 group-hover:-translate-x-1 group-hover:opacity-100 group-focus-visible:-translate-x-1 group-focus-visible:opacity-100 sm:block";

function FloatingAction({ label, children, className, href, onClick }: { label: string; children: ReactNode; className: string; href?: string; onClick?: () => void }) {
  const shared = `group relative grid size-11 place-items-center rounded-full transition-all duration-300 hover:scale-105 active:scale-95 sm:size-13 sm:hover:scale-110 ${className}`;
  const content = <>{children}<span aria-hidden="true" className={tooltipClass}>{label}</span></>;
  if (href) return <Link href={href} className={shared} aria-label={label}>{content}</Link>;
  return <button type="button" onClick={onClick} className={shared} aria-label={label}>{content}</button>;
}

function getBazookaReply(message: string) {
  const text = message.toLowerCase();
  if (text.includes("membership") || text.includes("price") || text.includes("plan")) return "You can explore Bazooka membership plans on the Memberships page. For the latest offer or exact pricing, our team can help you directly.";
  if (text.includes("trial") || text.includes("free")) return "You can book a free trial directly from the Book Free Trial page. Choose your preferred date and available time slot there.";
  if (text.includes("trainer") || text.includes("coach") || text.includes("personal training") || text.includes("pt")) return "You can browse our trainers and book a session with your preferred coach from the Trainers page.";
  if (text.includes("program") || text.includes("strength") || text.includes("fat loss") || text.includes("muscle")) return "Bazooka offers strength, functional, cardio, personal training, transformation, recovery, fat-loss and muscle-gain programs. Open Programs to compare them.";
  if (text.includes("cafe") || text.includes("food") || text.includes("nutrition") || text.includes("meal")) return "Cafe Bazooka has its own dedicated page with healthy meals, protein-focused options, shakes and refreshments.";
  if (text.includes("time") || text.includes("open") || text.includes("hour")) return "Bazooka Fitness is open Monday to Saturday from 5:30 AM to 10:00 PM and is closed on Sunday.";
  if (text.includes("location") || text.includes("address") || text.includes("where")) return "Bazooka Fitness is at Floor 6, Shanti One, Plot No. 39, 11th A Road, Sardarpura, Jodhpur, Rajasthan 342001.";
  if (text.includes("contact") || text.includes("phone") || text.includes("call") || text.includes("whatsapp")) return "You can call or WhatsApp Bazooka at +91 91164 05151, or use the Contact page to send your query.";
  return "I can help with memberships, programs, trainers, Cafe Bazooka, timings, location and free trials. For anything more specific, use the Contact page or WhatsApp our team.";
}

export default function FloatingActions() {
  const [chatOpen, setChatOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([{ id: 1, role: "assistant", text: "Hey! Ask me about memberships, programs, trainers, Cafe Bazooka or your free trial." }]);

  useEffect(() => {
    const topMarker = document.getElementById("site-top");
    if (!topMarker || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(([entry]) => setShowBackToTop(!entry.isIntersecting), { threshold: 0.01 });
    observer.observe(topMarker);
    return () => observer.disconnect();
  }, []);

  const sendMessage = (event?: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    const trimmed = message.trim();
    if (!trimmed) return;
    const now = Date.now();
    setMessages(current => [...current, { id: now, role: "user", text: trimmed }, { id: now + 1, role: "assistant", text: getBazookaReply(trimmed) }]);
    setMessage("");
  };

  return <>
    <aside className="fixed bottom-3 right-3 z-[90] flex flex-col gap-2 sm:bottom-5 sm:right-5 sm:gap-3" aria-label="Quick actions">
      <FloatingAction label="Book Free Trial" href="/book-free-trial" className="border border-bazooka-lime bg-bazooka-lime text-bazooka-black shadow-[0_0_22px_rgba(255,181,46,.22)]"><CalendarCheck2 className="size-[18px] sm:size-5" /></FloatingAction>

      <a href="https://wa.me/919116405151" target="_blank" rel="noreferrer" className="group relative grid size-11 place-items-center rounded-full bg-bazooka-whatsapp text-white shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 sm:size-13 sm:hover:scale-110" aria-label="WhatsApp">
        <FaWhatsapp className="size-5 sm:size-6" />
        <span aria-hidden="true" className={tooltipClass}>WhatsApp</span>
      </a>

      <FloatingAction label="Ask Bazooka" onClick={() => setChatOpen(v => !v)} className="border border-bazooka-border bg-bazooka-card text-bazooka-lime shadow-lg hover:border-bazooka-lime"><MessageCircleMore className="size-[18px] sm:size-5" /></FloatingAction>

      <AnimatePresence initial={false}>{showBackToTop && <motion.div key="back-to-top" initial={{ opacity: 0, scale: .8, y: 8 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: .8, y: 8 }} transition={{ duration: .2 }}>
        <Link href="#site-top" aria-label="Back To Top" className="group relative grid size-11 place-items-center rounded-full border border-bazooka-border bg-bazooka-card text-white shadow-lg transition-all duration-300 hover:scale-105 hover:border-bazooka-lime hover:text-bazooka-lime active:scale-95 sm:size-13 sm:hover:scale-110">
          <ChevronUp className="size-[18px] sm:size-5" />
          <span aria-hidden="true" className={tooltipClass}>Back To Top</span>
        </Link>
      </motion.div>}</AnimatePresence>
    </aside>

    <AnimatePresence>{chatOpen && <motion.section initial={{ opacity: 0, scale: .96, y: 15 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: .96, y: 15 }} className="fixed bottom-16 left-3 right-[66px] z-[120] flex max-h-[min(70dvh,520px)] flex-col overflow-hidden rounded-xl border border-bazooka-border bg-bazooka-card shadow-2xl sm:bottom-[92px] sm:left-auto sm:right-[82px] sm:w-[min(calc(100%-32px),360px)]">
      <div className="flex items-center justify-between border-b border-bazooka-border bg-bazooka-surface px-4 py-3"><div><strong className="block text-[11px] text-bazooka-lime">ASK BAZOOKA</strong><span className="text-[8px] text-bazooka-muted">Quick website assistant</span></div><button type="button" onClick={() => setChatOpen(false)} className="grid size-8 place-items-center rounded-full transition hover:bg-bazooka-card-hover active:scale-95" aria-label="Close chat"><X className="size-4" /></button></div>
      <div className="flex-1 space-y-3 overflow-y-auto p-4">{messages.map(item => <div key={item.id} className={`flex ${item.role === "user" ? "justify-end" : "justify-start"}`}><p className={`max-w-[88%] rounded-[8px] px-3 py-2 text-[10px] leading-5 ${item.role === "user" ? "bg-bazooka-lime text-black" : "border border-bazooka-border bg-bazooka-black text-bazooka-text-secondary"}`}>{item.text}</p></div>)}</div>
      <div className="flex flex-wrap gap-1.5 border-t border-bazooka-border px-3 pt-3">{["Memberships", "Free trial", "Trainers", "Cafe Bazooka"].map(prompt => <button key={prompt} type="button" onClick={() => { setMessage(prompt); const now = Date.now(); setMessages(current => [...current, { id: now, role: "user", text: prompt }, { id: now + 1, role: "assistant", text: getBazookaReply(prompt) }]); }} className="rounded-full border border-bazooka-border px-2.5 py-1.5 text-[8px] text-bazooka-text-secondary transition hover:border-bazooka-lime hover:text-bazooka-lime active:scale-95">{prompt}</button>)}</div>
      <form onSubmit={sendMessage} className="flex gap-2 p-3"><input value={message} onChange={event => setMessage(event.target.value)} aria-label="Message" placeholder="Type your question..." className="min-w-0 flex-1 rounded-md border border-bazooka-border bg-bazooka-black px-3 py-2 text-[16px] outline-none transition focus:border-bazooka-lime" /><button type="submit" disabled={!message.trim()} className="grid size-10 shrink-0 place-items-center rounded-md bg-bazooka-lime text-black transition hover:bg-bazooka-lime-hover active:scale-95 disabled:cursor-not-allowed disabled:opacity-45" aria-label="Send message"><ArrowRight className="size-4" /></button></form>
    </motion.section>}</AnimatePresence>
  </>;
}
