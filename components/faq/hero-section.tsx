"use client";

import { Search } from "lucide-react";
import { shell } from "./faq-shared";

export default function FaqHeroSection({ search, onSearch }: { search: string; onSearch: (value: string) => void }) {
  return <section className="relative min-h-[460px] overflow-hidden border-b border-bazooka-border/70 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=90')] bg-cover bg-[62%_center] sm:bg-center">
    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/84 to-black/18"/>
    <div className={`${shell} relative z-10 flex min-h-[460px] items-center py-10 sm:py-12`}><div className="w-full max-w-[540px]">
      <p className="text-[8px] uppercase text-bazooka-text-secondary sm:text-[9px]">Home <span className="mx-2 text-bazooka-lime">›</span> FAQ</p>
      <h1 className="font-display mt-6 text-[38px] font-black uppercase leading-[.9] min-[380px]:text-[42px] sm:text-[60px] lg:text-[66px]">Frequently<br/><span className="text-bazooka-lime">Asked Questions</span></h1>
      <p className="mt-5 max-w-[470px] text-[10px] leading-5 text-bazooka-text-secondary sm:text-[11px]">Everything you need to know about Bazooka Fitness. Can’t find the answer you’re looking for? Reach out to us.</p>
      <div className="relative mt-6 w-full max-w-[430px]"><Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-bazooka-text-muted"/><input value={search} onChange={(e)=>onSearch(e.target.value)} className="h-12 w-full rounded-[4px] border border-bazooka-border-strong bg-black/60 pl-11 pr-4 text-[10px] text-white outline-none backdrop-blur-sm transition placeholder:text-bazooka-text-muted focus:border-bazooka-lime" placeholder="Search your question here..."/></div>
    </div></div>
  </section>;
}
