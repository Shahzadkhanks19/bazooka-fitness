"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

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

const shell = "mx-auto w-[min(calc(100%-40px),1180px)] md:w-[min(calc(100%-64px),1180px)]";
const trialButton = "group inline-flex h-11 items-center justify-center gap-4 rounded-md border border-bazooka-lime bg-bazooka-lime px-6 text-[10px] font-black uppercase tracking-[0.01em] text-bazooka-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-bazooka-lime-hover hover:shadow-[0_0_26px_rgba(182,240,0,.22)] active:translate-y-0";

function Logo() {
  return (
    <span className="inline-flex min-w-[170px] flex-col leading-none">
      <span className="text-[30px] font-black tracking-[-1.8px] text-bazooka-lime">BAZOOKA</span>
      <span className="mt-1 text-[5px] tracking-[0.6px] text-bazooka-text-secondary">FITNESS • PERFORMANCE • COMMUNITY</span>
    </span>
  );
}

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[100] h-[76px] border-b border-white/10 bg-bazooka-black/95 backdrop-blur-xl">
      <div className={`${shell} flex h-full items-center gap-7`}>
        <Link href="/" aria-label="Bazooka Fitness home" className="shrink-0 transition-transform duration-300 hover:scale-[1.025]"><Logo /></Link>
        <nav className="hidden flex-1 items-center justify-center gap-5 xl:flex" aria-label="Primary navigation">
          {nav.map(([label, href], index) => (
            <Link key={label} href={href} className={`group relative grid h-[76px] place-items-center text-[12px] font-bold transition-colors duration-300 ${index === 0 ? "text-bazooka-lime" : "text-bazooka-text hover:text-bazooka-lime"}`}>
              {label}
              <span className={`absolute bottom-4 h-[2px] bg-bazooka-lime shadow-[0_0_10px_rgba(182,240,0,.35)] transition-all duration-300 ${index === 0 ? "w-8" : "w-0 group-hover:w-8"}`} />
            </Link>
          ))}
        </nav>
        <Link href="/book-free-trial" className={`${trialButton} ml-auto hidden min-w-[176px] sm:inline-flex`}>Book Free Trial <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></Link>
        <button type="button" onClick={() => setMenuOpen((value) => !value)} className="ml-auto grid size-11 place-items-center rounded-md border border-bazooka-border text-white transition hover:border-bazooka-lime hover:text-bazooka-lime xl:hidden" aria-label="Toggle navigation" aria-expanded={menuOpen}>{menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}</button>
      </div>

      {menuOpen && (
        <motion.nav initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} className="absolute inset-x-0 top-[76px] z-[110] max-h-[calc(100vh-76px)] overflow-y-auto border-b border-bazooka-border bg-bazooka-black/98 px-5 py-5 shadow-2xl backdrop-blur-2xl xl:hidden" aria-label="Mobile navigation">
          <div className="mx-auto grid max-w-xl gap-1">
            {nav.map(([label, href], index) => (
              <Link key={label} href={href} onClick={() => setMenuOpen(false)} className={`rounded-md px-4 py-3.5 text-sm font-bold transition ${index === 0 ? "bg-bazooka-lime/10 text-bazooka-lime" : "text-white hover:bg-bazooka-card hover:text-bazooka-lime"}`}>{label}</Link>
            ))}
            <Link href="/book-free-trial" onClick={() => setMenuOpen(false)} className={`${trialButton} mt-3 w-full sm:hidden`}>Book Free Trial <ArrowRight className="size-4" /></Link>
          </div>
        </motion.nav>
      )}
    </header>
  );
}
