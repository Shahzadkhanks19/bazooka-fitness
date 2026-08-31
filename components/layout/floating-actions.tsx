"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck2, ChevronUp, MessageCircleMore, X } from "lucide-react";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

function FloatingAction({ label, children, className, href, onClick }: { label: string; children: React.ReactNode; className: string; href?: string; onClick?: () => void }) {
  const content = (
    <>
      <span className="pointer-events-none absolute right-[calc(100%+10px)] whitespace-nowrap rounded-md border border-bazooka-border bg-bazooka-card px-3 py-2 text-[10px] font-black uppercase tracking-[0.05em] text-white opacity-0 shadow-xl transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">{label}</span>
      {children}
    </>
  );

  if (href) {
    return <Link href={href} className={`group relative grid size-13 place-items-center rounded-full transition-all duration-300 hover:scale-110 ${className}`} aria-label={label}>{content}</Link>;
  }

  return <button type="button" onClick={onClick} className={`group relative grid size-13 place-items-center rounded-full transition-all duration-300 hover:scale-110 ${className}`} aria-label={label}>{content}</button>;
}

export default function FloatingActions() {
  const [chatOpen, setChatOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <aside className="fixed bottom-5 right-5 z-[90] flex flex-col gap-3" aria-label="Quick actions">
        <FloatingAction label="Book Free Trial" href="/book-free-trial" className="border border-bazooka-lime bg-bazooka-lime text-bazooka-black shadow-[0_0_22px_rgba(182,240,0,.22)] hover:bg-bazooka-lime-hover"><CalendarCheck2 className="size-5" /></FloatingAction>

        <a href="https://wa.me/919116405151" target="_blank" rel="noreferrer" className="group relative grid size-13 place-items-center rounded-full bg-bazooka-whatsapp text-white shadow-lg transition-all duration-300 hover:scale-110" aria-label="WhatsApp">
          <span className="pointer-events-none absolute right-[calc(100%+10px)] whitespace-nowrap rounded-md border border-bazooka-border bg-bazooka-card px-3 py-2 text-[10px] font-black uppercase tracking-[0.05em] text-white opacity-0 shadow-xl transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">WhatsApp</span>
          <FaWhatsapp className="size-6" />
        </a>

        <FloatingAction label="Ask Bazooka" onClick={() => setChatOpen((value) => !value)} className="border border-bazooka-border bg-bazooka-card text-bazooka-lime shadow-lg hover:border-bazooka-lime hover:bg-bazooka-card-hover"><MessageCircleMore className="size-5" /></FloatingAction>

        {showScrollTop && (
          <motion.div initial={{ opacity: 0, scale: 0.8, y: 8 }} animate={{ opacity: 1, scale: 1, y: 0 }}>
            <FloatingAction label="Back To Top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="border border-bazooka-border bg-bazooka-card text-white hover:border-bazooka-lime hover:text-bazooka-lime"><ChevronUp className="size-5" /></FloatingAction>
          </motion.div>
        )}
      </aside>

      {chatOpen && (
        <motion.section initial={{ opacity: 0, scale: 0.96, y: 15 }} animate={{ opacity: 1, scale: 1, y: 0 }} className="fixed bottom-[92px] right-[82px] z-[120] w-[min(calc(100%-32px),360px)] overflow-hidden rounded-xl border border-bazooka-border bg-bazooka-card shadow-2xl" aria-label="Bazooka chatbot">
          <div className="flex items-center justify-between border-b border-bazooka-border bg-bazooka-surface px-4 py-3">
            <div className="flex items-center gap-3"><span className="grid size-9 place-items-center rounded-full bg-bazooka-lime text-bazooka-black"><MessageCircleMore className="size-4" /></span><div><strong className="block text-[11px] text-bazooka-lime">ASK BAZOOKA</strong><small className="text-[9px] text-bazooka-text-secondary">Fitness &amp; membership help</small></div></div>
            <button type="button" onClick={() => setChatOpen(false)} className="grid size-8 place-items-center rounded border border-bazooka-border transition hover:border-bazooka-lime hover:text-bazooka-lime" aria-label="Close chat"><X className="size-4" /></button>
          </div>
          <div className="p-4"><div className="rounded-lg bg-bazooka-surface p-4 text-[11px] leading-5 text-bazooka-text-secondary">Hey! Ask me about memberships, programs, trainers or your free trial.</div></div>
          <div className="flex gap-2 border-t border-bazooka-border p-3"><input aria-label="Message" placeholder="Type your question..." className="min-w-0 flex-1 rounded-md border border-bazooka-border bg-bazooka-black px-3 py-2 text-[11px] outline-none transition placeholder:text-bazooka-muted focus:border-bazooka-lime" /><button type="button" className="grid size-10 place-items-center rounded-md bg-bazooka-lime text-bazooka-black transition hover:bg-bazooka-lime-hover" aria-label="Send message"><ArrowRight className="size-4" /></button></div>
        </motion.section>
      )}
    </>
  );
}
