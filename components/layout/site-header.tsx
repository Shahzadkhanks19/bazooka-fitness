"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const nav = [
  ["Home", "/"],
  ["About", "/about"],
  ["Memberships", "/memberships"],
  ["Programs", "/programs"],
  ["Trainers", "/trainers"],
  ["Facilities", "/facilities"],
  ["Transformations", "/transformations"],
  ["Gallery", "/gallery"],
  ["Cafe", "/cafe-bazooka"],
  ["Contact", "/contact"],
] as const;

const shell = "mx-auto w-[min(calc(100%-32px),1180px)] sm:w-[min(calc(100%-40px),1180px)] md:w-[min(calc(100%-64px),1180px)]";
const trialButton = "group min-h-11 items-center justify-center gap-4 rounded-md border border-bazooka-lime bg-bazooka-lime px-6 text-center text-[10px] font-black uppercase text-bazooka-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-bazooka-lime-hover hover:shadow-[0_0_22px_rgba(255,181,46,.18)] active:translate-y-0 active:scale-[.98]";

function Logo() {
  return <span className="inline-flex min-w-0 flex-col leading-none"><span className="text-[25px] font-black tracking-[-1.5px] text-bazooka-lime sm:text-[30px]">BAZOOKA</span><span className="mt-1 whitespace-nowrap text-[4px] tracking-[0.45px] text-bazooka-text-secondary sm:text-[5px]">FITNESS • PERFORMANCE • COMMUNITY</span></span>;
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const isActive = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return <header id="site-top" className="sticky top-0 z-[100] h-[68px] border-b border-white/10 bg-bazooka-black/95 backdrop-blur-xl sm:h-[76px]">
    <div className={`${shell} flex h-full min-w-0 items-center gap-4 sm:gap-7`}>
      <Link href="/" onClick={() => setMenuOpen(false)} aria-label="Bazooka Fitness home" className="min-w-0 shrink transition-transform duration-300 hover:scale-[1.02]"><Logo /></Link>
      <nav className="hidden flex-1 items-center justify-center gap-4 xl:flex" aria-label="Primary navigation">{nav.map(([label,href]) => <Link key={label} href={href} aria-current={isActive(href)?"page":undefined} className={`group relative grid h-[76px] place-items-center text-[12px] font-bold transition-colors duration-300 ${isActive(href)?"text-bazooka-lime":"text-bazooka-text hover:text-bazooka-lime"}`}>{label}<span className={`absolute bottom-4 h-[2px] bg-bazooka-lime transition-all duration-300 ${isActive(href)?"w-8":"w-0 group-hover:w-8"}`}/></Link>)}</nav>
      <Link href="/book-free-trial" className={`${trialButton} ml-auto hidden min-w-[176px] xl:inline-flex`}>Book Free Trial <ArrowRight className="size-4 transition-transform group-hover:translate-x-1"/></Link>
      <button type="button" onClick={() => setMenuOpen(v => !v)} className={`ml-auto grid size-10 shrink-0 place-items-center rounded-md border text-white transition-all duration-300 xl:hidden ${menuOpen?"border-bazooka-lime bg-bazooka-lime/10 text-bazooka-lime":"border-bazooka-border hover:border-bazooka-lime hover:text-bazooka-lime"}`} aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen?"Close navigation":"Open navigation"}>{menuOpen?<X className="size-5"/>:<Menu className="size-5"/>}</button>
    </div>
    <AnimatePresence initial={false}>
      {menuOpen && <motion.div id="mobile-navigation" key="mobile-navigation" initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}} transition={{duration:.2}} className="fixed inset-x-0 top-[68px] z-[150] h-[calc(100dvh-68px)] overflow-y-auto overscroll-contain border-t border-bazooka-border bg-bazooka-black/98 px-4 py-4 shadow-2xl backdrop-blur-xl sm:top-[76px] sm:h-[calc(100dvh-76px)] sm:px-5 xl:hidden">
        <nav className="mx-auto grid w-full max-w-xl gap-1" aria-label="Mobile navigation">{nav.map(([label,href],index) => <motion.div key={label} initial={{opacity:0,x:12}} animate={{opacity:1,x:0}} transition={{duration:.2,delay:index*.02}}><Link href={href} onClick={() => setMenuOpen(false)} aria-current={isActive(href)?"page":undefined} className={`group flex min-h-12 items-center justify-between rounded-md px-4 py-3 text-[13px] font-bold transition-all duration-300 ${isActive(href)?"bg-bazooka-lime/10 text-bazooka-lime":"text-white hover:bg-bazooka-card hover:text-bazooka-lime"}`}><span>{label}</span><span className={`h-1.5 w-1.5 rounded-full transition ${isActive(href)?"bg-bazooka-lime":"bg-transparent group-hover:bg-bazooka-lime"}`}/></Link></motion.div>)}<Link href="/book-free-trial" onClick={() => setMenuOpen(false)} className={`${trialButton} mt-3 inline-flex w-full`}>Book Free Trial <ArrowRight className="size-4"/></Link></nav>
      </motion.div>}
    </AnimatePresence>
  </header>;
}
