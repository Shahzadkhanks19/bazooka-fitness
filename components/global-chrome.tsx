"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronUp,
  Flame,
  MapPin,
  Menu,
  MessageCircleMore,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

const nav = [
  ["Home", "/"],
  ["About", "/about"],
  ["Programs", "/programs"],
  ["Memberships", "/memberships"],
  ["Transformations", "/transformations"],
  ["Facilities", "/facilities"],
  ["Gallery", "/gallery"],
  ["Trainers", "/trainers"],
  ["Contact", "/contact"],
] as const;

const footerCols = [
  {
    title: "Quick Links",
    links: [
      ["Home", "/"],
      ["About Us", "/about"],
      ["Memberships", "/memberships"],
      ["Facilities", "/facilities"],
      ["Trainers", "/trainers"],
      ["Transformations", "/transformations"],
      ["Gallery", "/gallery"],
      ["Contact", "/contact"],
    ],
  },
  {
    title: "Programs",
    links: [
      ["Strength Training", "/programs"],
      ["Functional Training", "/programs"],
      ["Cardio & Endurance", "/programs"],
      ["Personal Training", "/programs"],
      ["Transformation Program", "/programs"],
      ["Recovery", "/programs"],
      ["Nutrition Guidance", "/programs"],
    ],
  },
  {
    title: "Membership",
    links: [
      ["Plans & Pricing", "/memberships"],
      ["Join Bazooka", "/memberships"],
      ["Book Free Trial", "/book-free-trial"],
      ["Personal Training", "/programs"],
    ],
  },
  {
    title: "Help",
    links: [
      ["FAQ", "/faq"],
      ["Contact Us", "/contact"],
      ["Membership Terms", "/membership-terms"],
      ["Cancellation Policy", "/cancellation-policy"],
      ["Refund Policy", "/refund-policy"],
    ],
  },
  {
    title: "Legal",
    links: [
      ["Privacy Policy", "/privacy-policy"],
      ["Terms & Conditions", "/terms-and-conditions"],
      ["Cookie Policy", "/cookie-policy"],
      ["Disclaimer", "/disclaimer"],
    ],
  },
] as const;

const shell = "mx-auto w-[min(calc(100%-40px),1180px)] md:w-[min(calc(100%-64px),1180px)]";
const primaryButton = "group inline-flex h-11 items-center justify-center gap-4 rounded-md border border-bazooka-lime bg-bazooka-lime px-6 text-[10px] font-black uppercase tracking-[0.01em] text-bazooka-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-bazooka-lime-hover hover:shadow-[0_0_26px_rgba(182,240,0,.22)] active:translate-y-0";

function Logo() {
  return (
    <span className="inline-flex min-w-[170px] flex-col leading-none">
      <span className="text-[30px] font-black tracking-[-1.8px] text-bazooka-lime">BAZOOKA</span>
      <span className="mt-1 text-[5px] tracking-[0.6px] text-bazooka-text-secondary">FITNESS • PERFORMANCE • COMMUNITY</span>
    </span>
  );
}

function FloatingAction({
  label,
  children,
  className,
  href,
  onClick,
}: {
  label: string;
  children: React.ReactNode;
  className: string;
  href?: string;
  onClick?: () => void;
}) {
  const inner = (
    <>
      <span className="pointer-events-none absolute right-[calc(100%+10px)] whitespace-nowrap rounded-md border border-bazooka-border bg-bazooka-card px-3 py-2 text-[10px] font-black uppercase tracking-[0.05em] text-white opacity-0 shadow-xl transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
        {label}
      </span>
      {children}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`group relative grid size-13 place-items-center rounded-full transition-all duration-300 hover:scale-110 ${className}`} aria-label={label}>
        {inner}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={`group relative grid size-13 place-items-center rounded-full transition-all duration-300 hover:scale-110 ${className}`} aria-label={label}>
      {inner}
    </button>
  );
}

export default function GlobalChrome({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
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
      <header className="sticky top-0 z-[100] h-[76px] border-b border-white/10 bg-bazooka-black/95 backdrop-blur-xl">
        <div className={`${shell} flex h-full items-center gap-7`}>
          <Link href="/" aria-label="Bazooka Fitness home" className="shrink-0 transition-transform duration-300 hover:scale-[1.025]">
            <Logo />
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-5 xl:flex" aria-label="Primary navigation">
            {nav.map(([label, href], index) => (
              <Link
                key={label}
                href={href}
                className={`group relative grid h-[76px] place-items-center text-[12px] font-bold transition-colors duration-300 ${index === 0 ? "text-bazooka-lime" : "text-bazooka-text hover:text-bazooka-lime"}`}
              >
                {label}
                <span className={`absolute bottom-4 h-[2px] bg-bazooka-lime shadow-[0_0_10px_rgba(182,240,0,.35)] transition-all duration-300 ${index === 0 ? "w-8" : "w-0 group-hover:w-8"}`} />
              </Link>
            ))}
          </nav>

          <Link href="/book-free-trial" className={`${primaryButton} ml-auto hidden min-w-[176px] sm:inline-flex`}>
            Book Free Trial <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="ml-auto grid size-11 place-items-center rounded-md border border-bazooka-border text-white transition hover:border-bazooka-lime hover:text-bazooka-lime xl:hidden"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute inset-x-0 top-[76px] z-[110] max-h-[calc(100vh-76px)] overflow-y-auto border-b border-bazooka-border bg-bazooka-black/98 px-5 py-5 shadow-2xl backdrop-blur-2xl xl:hidden"
            aria-label="Mobile navigation"
          >
            <div className="mx-auto grid max-w-xl gap-1">
              {nav.map(([label, href], index) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-md px-4 py-3.5 text-sm font-bold transition ${index === 0 ? "bg-bazooka-lime/10 text-bazooka-lime" : "text-white hover:bg-bazooka-card hover:text-bazooka-lime"}`}
                >
                  {label}
                </Link>
              ))}
              <Link href="/book-free-trial" onClick={() => setMenuOpen(false)} className={`${primaryButton} mt-3 w-full sm:hidden`}>
                Book Free Trial <ArrowRight className="size-4" />
              </Link>
            </div>
          </motion.nav>
        )}
      </header>

      <div className="[&_main>aside]:hidden [&_main>footer]:hidden [&_main>header]:hidden">
        {children}
      </div>

      <footer className="bg-bazooka-soft-black">
        <div className={`${shell} grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(5,1fr)_1.25fr]`}>
          <div>
            <Link href="/" className="inline-block transition-transform hover:scale-[1.025]"><Logo /></Link>
            <p className="mt-6 text-[12px] leading-6 text-bazooka-text-secondary">Stronger People.<br />A Healthier Jodhpur.</p>
            <div className="mt-6 flex gap-3">
              {[
                [FaInstagram, "Instagram"],
                [FaFacebookF, "Facebook"],
                [FaYoutube, "YouTube"],
              ].map(([Icon, label], index) => {
                const SocialIcon = Icon as typeof FaInstagram;
                return (
                  <a key={index} href="#" aria-label={String(label)} className="grid size-10 place-items-center rounded-full border border-bazooka-border text-bazooka-text-secondary transition-all duration-300 hover:-translate-y-1 hover:border-bazooka-lime hover:bg-bazooka-lime hover:text-bazooka-black">
                    <SocialIcon className="size-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {footerCols.map((col) => (
            <div key={col.title}>
              <h3 className="mb-5 text-[11px] font-black uppercase text-bazooka-text">{col.title}</h3>
              <div className="space-y-3">
                {col.links.map(([label, href]) => (
                  <Link key={label} href={href} className="group flex w-fit items-center gap-1 text-[10px] text-bazooka-text-secondary transition-all duration-300 hover:translate-x-1 hover:text-bazooka-lime">
                    <span className="h-px w-0 bg-bazooka-lime transition-all duration-300 group-hover:w-2" />
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div className="space-y-6 text-[10px] leading-5 text-bazooka-text-secondary">
            <a href="https://maps.app.goo.gl/ArEb2YaGdZq5qF8x7" target="_blank" rel="noreferrer" className="flex gap-3 transition hover:text-bazooka-lime">
              <MapPin className="size-4 shrink-0 text-bazooka-lime" />
              <span>Sardarpura,<br />Jodhpur, Rajasthan<br />India — 342003</span>
            </a>
            <p className="flex gap-3"><MessageCircleMore className="size-4 shrink-0 text-bazooka-lime" />+91 882 502 XXXX</p>
            <p className="flex gap-3"><Flame className="size-4 shrink-0 text-bazooka-lime" /><span>Mon – Sun<br />5:00 AM – 11:00 PM</span></p>
          </div>
        </div>

        <div className="border-t border-bazooka-border">
          <div className={`${shell} flex flex-col gap-2 py-5 text-[9px] text-bazooka-muted sm:flex-row sm:justify-between`}>
            <span>© 2026 Bazooka Fitness. All rights reserved.</span>
            <a href="https://builtbyshahzad.vercel.app" target="_blank" rel="noreferrer" className="transition hover:text-bazooka-lime">
              Designed &amp; Developed by Shahzad Khan <b className="text-bazooka-lime">♥</b>
            </a>
          </div>
        </div>
      </footer>

      <aside className="fixed bottom-5 right-5 z-[90] flex flex-col gap-3" aria-label="Quick actions">
        <FloatingAction label="Book Free Trial" href="/book-free-trial" className="border border-bazooka-lime bg-bazooka-lime text-bazooka-black shadow-[0_0_22px_rgba(182,240,0,.22)] hover:bg-bazooka-lime-hover">
          <span className="text-lg font-black">+</span>
        </FloatingAction>

        <a href="#" className="group relative grid size-13 place-items-center rounded-full bg-bazooka-whatsapp text-white shadow-lg transition-all duration-300 hover:scale-110" aria-label="WhatsApp">
          <span className="pointer-events-none absolute right-[calc(100%+10px)] whitespace-nowrap rounded-md border border-bazooka-border bg-bazooka-card px-3 py-2 text-[10px] font-black uppercase tracking-[0.05em] text-white opacity-0 shadow-xl transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">WhatsApp</span>
          <FaWhatsapp className="size-6" />
        </a>

        <FloatingAction label="Ask Bazooka" onClick={() => setChatOpen((value) => !value)} className="border border-bazooka-border bg-bazooka-card text-bazooka-lime shadow-lg hover:border-bazooka-lime hover:bg-bazooka-card-hover">
          <MessageCircleMore className="size-5" />
        </FloatingAction>

        {showScrollTop && (
          <motion.div initial={{ opacity: 0, scale: 0.8, y: 8 }} animate={{ opacity: 1, scale: 1, y: 0 }}>
            <FloatingAction label="Back To Top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="border border-bazooka-border bg-bazooka-card text-white hover:border-bazooka-lime hover:text-bazooka-lime">
              <ChevronUp className="size-5" />
            </FloatingAction>
          </motion.div>
        )}
      </aside>

      {chatOpen && (
        <motion.section initial={{ opacity: 0, scale: 0.96, y: 15 }} animate={{ opacity: 1, scale: 1, y: 0 }} className="fixed bottom-[92px] right-[82px] z-[120] w-[min(calc(100%-32px),360px)] overflow-hidden rounded-xl border border-bazooka-border bg-bazooka-card shadow-2xl" aria-label="Bazooka chatbot">
          <div className="flex items-center justify-between border-b border-bazooka-border bg-bazooka-surface px-4 py-3">
            <div className="flex items-center gap-3">
              <span className="grid size-9 place-items-center rounded-full bg-bazooka-lime text-bazooka-black"><MessageCircleMore className="size-4" /></span>
              <div><strong className="block text-[11px] text-bazooka-lime">ASK BAZOOKA</strong><small className="text-[9px] text-bazooka-text-secondary">Fitness &amp; membership help</small></div>
            </div>
            <button type="button" onClick={() => setChatOpen(false)} className="grid size-8 place-items-center rounded border border-bazooka-border transition hover:border-bazooka-lime hover:text-bazooka-lime" aria-label="Close chat"><X className="size-4" /></button>
          </div>
          <div className="p-4"><div className="rounded-lg bg-bazooka-surface p-4 text-[11px] leading-5 text-bazooka-text-secondary">Hey! Ask me about memberships, programs, trainers or your free trial.</div></div>
          <div className="flex gap-2 border-t border-bazooka-border p-3"><input aria-label="Message" placeholder="Type your question..." className="min-w-0 flex-1 rounded-md border border-bazooka-border bg-bazooka-black px-3 py-2 text-[11px] outline-none transition placeholder:text-bazooka-muted focus:border-bazooka-lime" /><button type="button" className="grid size-10 place-items-center rounded-md bg-bazooka-lime text-bazooka-black transition hover:bg-bazooka-lime-hover" aria-label="Send message"><ArrowRight className="size-4" /></button></div>
        </motion.section>
      )}
    </>
  );
}
