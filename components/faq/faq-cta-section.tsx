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
  return <section className="bg-bazooka-soft-black py-8"><div className={shell}><div className="relative overflow-hidden rounded-[6px] border border-bazooka-border-strong bg-[url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1600&q=90')] bg-cover bg-center"><div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/55"/><div className="relative z-10 grid gap-6 px-6 py-7 lg:grid-cols-[260px_1fr] lg:items-center"><div><h2 className="font-display text-[30px] font-black uppercase">Still Have <span className="text-bazooka-lime">Questions?</span></h2><p className="mt-3 text-[9px] leading-5 text-bazooka-text-secondary">Our team is here to help you with anything you need. Just reach out!</p><Link href="/contact" className="mt-5 inline-flex h-10 items-center justify-center gap-3 rounded-[4px] bg-bazooka-lime px-5 text-[8px] font-black uppercase text-black transition hover:bg-bazooka-lime-hover">Contact Us <ArrowRight className="size-3.5"/></Link></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{support.map(([Icon,title,text],index)=><div key={title} className={`text-center ${index>0?"lg:border-l lg:border-bazooka-border":""}`}><Icon className="mx-auto size-7 text-bazooka-lime"/><strong className="font-display mt-3 block text-[14px] uppercase">{title}</strong><span className="mx-auto mt-2 block max-w-[120px] text-[8px] leading-4 text-bazooka-text-secondary">{text}</span></div>)}</div></div></div></div></section>;
}
