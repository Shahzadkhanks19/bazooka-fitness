"use client";

import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";

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

const shell = "mx-auto w-[min(calc(100%-32px),1180px)] sm:w-[min(calc(100%-40px),1180px)] md:w-[min(calc(100%-64px),1180px)]";
const trialButton = "group inline-flex min-h-11 items-center justify-center gap-4 rounded-md border border-bazooka-lime bg-bazooka-lime px-6 text-center text-[10px] font-black uppercase tracking-[0.01em] text-bazooka-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-bazooka-lime-hover hover:shadow-[0_0_26px_rgba(182,240,0,.22)] active:translate-y-0";

function Logo() {
  return (
    <span className="inline-flex min-w-0 flex-col leading-none">
      <span className="text-[25px] font-black tracking-[-1.5px] text-bazooka-lime sm:text-[30px] sm:tracking-[-1.8px]">BAZOOKA</span>
      <span className="mt-1 whitespace-nowrap text-[4px] tracking-[0.45px] text-bazooka-text-secondary sm:text-[5px] sm:tracking-[0.6px]">FITNESS • PERFORMANCE • COMMUNITY</span>
    </span>
  );
}

export default function SiteHeader() {
  const pathname = usePathname();
  const isActive = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href);
  const closeMobileMenu = (event: MouseEvent<HTMLAnchorElement>) => event.currentTarget.closest("details")?.removeAttribute("open");

  return (
    <header id="site-top" className="sticky top-0 z-[100] h-[68px] border-b border-white/10 bg-bazooka-black/95 backdrop-blur-xl sm:h-[76px]">
      <div className={`${shell} flex h-full min-w-0 items-center gap-4 sm:gap-7`}>
        <Link href="/" aria-label="Bazooka Fitness home" className="min-w-0 shrink transition-transform duration-300 hover:scale-[1.025]"><Logo /></Link>

        <nav className="hidden flex-1 items-center justify-center gap-5 xl:flex" aria-label="Primary navigation">
          {nav.map(([label, href]) => {
            const active = isActive(href);
            return <Link key={label} href={href} className={`group relative grid h-[76px] place-items-center text-[12px] font-bold transition-colors duration-300 ${active ? "text-bazooka-lime" : "text-bazooka-text hover:text-bazooka-lime"}`}>{label}<span className={`absolute bottom-4 h-[2px] bg-bazooka-lime shadow-[0_0_10px_rgba(182,240,0,.35)] transition-all duration-300 ${active ? "w-8" : "w-0 group-hover:w-8"}`} /></Link>;
          })}
        </nav>

        <Link href="/book-free-trial" className={`${trialButton} ml-auto hidden min-w-[176px] xl:inline-flex`}>Book Free Trial <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></Link>

        <details className="group ml-auto xl:hidden">
          <summary className="grid size-10 cursor-pointer list-none place-items-center rounded-md border border-bazooka-border text-white transition hover:border-bazooka-lime hover:text-bazooka-lime sm:size-11 [&::-webkit-details-marker]:hidden" aria-label="Toggle navigation">
            <Menu className="size-5 group-open:hidden" />
            <X className="hidden size-5 group-open:block" />
          </summary>

          <nav className="absolute inset-x-0 top-[68px] z-[110] max-h-[calc(100dvh-68px)] overflow-y-auto overscroll-contain border-b border-bazooka-border bg-bazooka-black/98 px-4 py-4 shadow-2xl backdrop-blur-2xl sm:top-[76px] sm:max-h-[calc(100dvh-76px)] sm:px-5 sm:py-5" aria-label="Mobile navigation">
            <div className="mx-auto grid w-full max-w-xl gap-1">
              {nav.map(([label, href]) => {
                const active = isActive(href);
                return <Link key={label} href={href} onClick={closeMobileMenu} className={`rounded-md px-4 py-3 text-[13px] font-bold transition sm:py-3.5 sm:text-sm ${active ? "bg-bazooka-lime/10 text-bazooka-lime" : "text-white hover:bg-bazooka-card hover:text-bazooka-lime"}`}>{label}</Link>;
              })}
              <Link href="/book-free-trial" onClick={closeMobileMenu} className={`${trialButton} mt-3 w-full`}>Book Free Trial <ArrowRight className="size-4" /></Link>
            </div>
          </nav>
        </details>
      </div>
    </header>
  );
}
