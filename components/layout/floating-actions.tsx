"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck2, ChevronUp, MessageCircleMore, X } from "lucide-react";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

function FloatingAction({ label, children, className, href, onClick }: { label: string; children: React.ReactNode; className: string; href?: string; onClick?: () => void }) {
  const content = (
    <>
      <span className="pointer-events-none absolute right-[calc(100%+10px)] hidden whitespace-nowrap rounded-md border border-bazooka-border bg-bazooka-card px-3 py-2 text-[10px] font-black uppercase tracking-[0.05em] text-white opacity-0 shadow-xl transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100 sm:block">{label}</span>
      {children}
    </>
  );

  const shared = `group relative grid size-11 place-items-center rounded-full transition-all duration-300 hover:scale-105 sm:size-13 sm:hover:scale-110 ${className}`;
  if (href) return <Link href={href} className={shared} aria-label={label}>{content}</Link>;
  return <button type="button" onClick={onClick} className={shared} aria-label={label}>{content}</button>;
}

export default function FloatingActions() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <>
      <aside className="fixed bottom-3 right-3 z-[90] flex flex-col gap-2 sm:bottom-5 sm:right-5 sm:gap-3" aria-label="Quick actions">
        <FloatingAction label="Book Free Trial" href="/book-free-trial" className="border border-bazooka-lime bg-bazooka-lime text-bazooka-black shadow-[0_0_22px_rgba(182,240,0,.22)] hover:bg-bazooka-lime-hover"><CalendarCheck2 className="size-[18px] sm:size-5" /></FloatingAction>

        <a href="https://wa.me/919116405151" target="_blank" rel="noreferrer" className="group relative grid size-11 place-items-center rounded-full bg-bazooka-whatsapp text-white shadow-lg transition-all duration-300 hover:scale-105 sm:size-13 sm:hover:scale-110" aria-label="WhatsApp">
          <span className="pointer-events-none absolute right-[calc(100%+10px)] hidden whitespace-nowrap rounded-md border border-bazooka-border bg-bazooka-card px-3 py-2 text-[10px] font-black uppercase tracking-[0.05em] text-white opacity-0 shadow-xl transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100 sm:block">WhatsApp</span>
          <FaWhatsapp className="size-5 sm:size-6" />
        </a>

        <FloatingAction label="Ask Bazooka" onClick={() => setChatOpen((value) => !value)} className="border border-bazooka-border bg-bazooka-card text-bazooka-lime shadow-lg hover:border-bazooka-lime hover:bg-bazooka-card-hover"><MessageCircleMore className="size-[18px] sm:size-5" /></FloatingAction>

        <FloatingAction label="Back To Top" href="#site-top" className="border border-bazooka-border bg-bazooka-card text-white hover:border-bazooka-lime hover:text-bazooka-lime"><ChevronUp className="size-[18px] sm:size-5" /></FloatingAction>
      </aside>

      {chatOpen && (
        <motion.section initial={{ opacity: 0, scale: 0.96, y: 15 }} animate={{ opacity: 1, scale: 1, y: 0 }} className="fixed bottom-16 left-3 right-[66px] z-[120] max-h-[min(70dvh,520px)] overflow-hidden rounded-xl border border-bazooka-border bg-bazooka-card shadow-2xl sm:bottom-[92px] sm:left-auto sm:right-[82px] sm:w-[min(calc(100%-32px),360px)]" aria-label="Bazooka chatbot">
          <div className="flex min-w-0 items-center justify-between gap-3 border-b border-bazooka-border bg-bazooka-surface px-4 py-3">
            <div className="flex min-w-0 items-center gap-3"><span className="grid size-9 shrink-0 place-items-center rounded-full bg-bazooka-lime text-bazooka-black"><MessageCircleMore className="size-4" /></span><div className="min-w-0"><strong className="block truncate text-[11px] text-bazooka-lime">ASK BAZOOKA</strong><small className="block truncate text-[9px] text-bazooka-text-secondary">Fitness &amp; membership help</small></div></div>
            <button type="button" onClick={() => setChatOpen(false)} className="grid size-8 shrink-0 place-items-center rounded border border-bazooka-border transition hover:border-bazooka-lime hover:text-bazooka-lime" aria-label="Close chat"><X className="size-4" /></button>
          </div>
          <div className="p-4"><div className="rounded-lg bg-bazooka-surface p-4 text-[11px] leading-5 text-bazooka-text-secondary">Hey! Ask me about memberships, programs, trainers, Cafe Bazooka or your free trial.</div></div>
          <div className="flex min-w-0 gap-2 border-t border-bazooka-border p-3"><input aria-label="Message" placeholder="Type your question..." className="min-w-0 flex-1 rounded-md border border-bazooka-border bg-bazooka-black px-3 py-2 text-[16px] outline-none transition placeholder:text-bazooka-muted focus:border-bazooka-lime sm:text-[11px]" /><button type="button" className="grid size-10 shrink-0 place-items-center rounded-md bg-bazooka-lime text-bazooka-black transition hover:bg-bazooka-lime-hover" aria-label="Send message"><ArrowRight className="size-4" /></button></div>
        </motion.section>
      )}
    </>
  );
}
