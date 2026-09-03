"use client";

import Link from "next/link";
import { ArrowRight, Clock3, Headphones, MapPin, Phone } from "lucide-react";
import { shell } from "./faq-shared";

const support = [
  [Phone, "Call The Club", "+91 91164 05151"],
  [Headphones, "Ask The Team", "Membership and training questions"],
  [MapPin, "Visit Bazooka", "Sardarpura, Jodhpur"],
  [Clock3, "Club Hours", "Mon–Sat · 5:30 AM–10 PM"],
] as const;

export default function FaqCtaSection(){
  return <section className="bg-bazooka-soft-black py-8 sm:py-10"><div className={shell}><div className="relative overflow-hidden rounded-[6px] border border-bazooka-border-strong bg-[url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1600&q=90')] bg-cover bg-center"><div className="absolute inset-0 bg-gradient-to-r from-black via-black/92 to-black/40"/><div className="relative z-10 grid gap-8 px-5 py-8 sm:px-7 lg:grid-cols-[270px_1fr] lg:items-center lg:px-8"><div><span className="text-[8px] font-black uppercase tracking-[.12em] text-bazooka-lime">Need A Specific Answer?</span><h2 className="font-display mt-2 text-[30px] font-black uppercase leading-[.95] sm:text-[34px]">Still Have <span className="text-bazooka-lime">Questions?</span></h2><p className="mt-3 max-w-[280px] text-[9px] leading-5 text-bazooka-text-secondary">Talk directly with the Bazooka team about memberships, facilities, training or your visit.</p><div className="mt-5 grid gap-2 sm:flex lg:grid"><Link href="/contact" className="group inline-flex h-10 w-full items-center justify-center gap-3 rounded-[4px] border border-bazooka-lime bg-bazooka-lime px-5 text-[8px] font-black uppercase text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-bazooka-lime-hover active:scale-[.97] sm:w-auto">Contact Us <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1"/></Link><a href="tel:+919116405151" className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-[4px] border border-white/20 bg-black/40 px-5 text-[8px] font-black uppercase text-white backdrop-blur-sm transition hover:border-bazooka-lime hover:text-bazooka-lime active:scale-[.97] sm:w-auto"><Phone className="size-3.5"/> Call Club</a></div></div><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{support.map(([Icon,title,text],index)=><div key={title} className={`rounded-[5px] border border-white/10 bg-black/25 p-4 text-left backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-bazooka-lime/50 ${index>0?"lg:border-l-white/10":""}`}><span className="grid size-10 place-items-center rounded-full border border-bazooka-lime/30 bg-bazooka-lime/5 text-bazooka-lime"><Icon className="size-[18px]"/></span><strong className="font-display mt-3 block text-[14px] uppercase">{title}</strong><span className="mt-2 block text-[8px] leading-4 text-bazooka-text-secondary">{text}</span></div>)}</div></div></div></div></section>;
}
