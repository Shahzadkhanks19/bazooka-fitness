"use client";

import Link from "next/link";
import { ArrowRight, Clock3, Headphones, ShieldCheck, UserRound } from "lucide-react";
import { shell } from "./faq-shared";

const support = [
  [Clock3, "Quick Response", "We respond within 24 hours"],
  [Headphones, "Expert Support", "Talk to our fitness experts"],
  [UserRound, "Personal Guidance", "Get the right plan for you"],
  [ShieldCheck, "100% Support", "We’re with you on your fitness journey"],
] as const;

export default function FaqCtaSection(){
  return <section className="bg-bazooka-soft-black py-8"><div className={shell}><div className="relative overflow-hidden rounded-[6px] border border-bazooka-border-strong bg-[url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1600&q=90')] bg-cover bg-center"><div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/35"/><div className="relative z-10 grid gap-6 px-6 py-7 lg:grid-cols-[260px_1fr] lg:items-center"><div><h2 className="font-display text-[30px] font-black uppercase">Still Have <span className="text-bazooka-lime">Questions?</span></h2><p className="mt-3 text-[9px] leading-5 text-bazooka-text-secondary">Our team is here to help you with anything you need. Just reach out!</p><Link href="/contact" className="group mt-5 inline-flex h-10 items-center justify-center gap-3 rounded-[4px] border border-bazooka-lime bg-bazooka-lime px-5 text-[8px] font-black uppercase text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-bazooka-lime-hover hover:shadow-[0_0_24px_rgba(255,181,46,.18)] active:scale-[.97]">Contact Us <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1"/></Link></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{support.map(([Icon,title,text],index)=><div key={title} className={`text-center transition-transform duration-300 hover:-translate-y-0.5 ${index>0?"lg:border-l lg:border-bazooka-border":""}`}><span className="mx-auto grid size-11 place-items-center rounded-full border border-bazooka-lime/30 bg-black/35 text-bazooka-lime backdrop-blur-sm"><Icon className="size-5"/></span><strong className="font-display mt-3 block text-[14px] uppercase">{title}</strong><span className="mx-auto mt-2 block max-w-[120px] text-[8px] leading-4 text-bazooka-text-secondary">{text}</span></div>)}</div></div></div></div></section>;
}
