"use client";

import { motion } from "framer-motion";
import { Headphones, UserRound, Zap } from "lucide-react";
import { reveal, shell } from "./contact-shared";

const benefits = [[Zap,"Quick Response","We reply within 24 hours"],[Headphones,"Expert Support","Talk to our fitness experts"],[UserRound,"Personal Guidance","Get the right plan for you"]] as const;

export default function ContactHeroSection() {
  return <section className="relative min-h-[520px] overflow-hidden border-b border-bazooka-border/70 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=90')] bg-cover bg-[62%_center] sm:bg-center">
    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/82 to-black/20"/>
    <div className={`${shell} relative z-10 flex min-h-[520px] items-center py-10 sm:py-12`}><motion.div {...reveal} className="w-full max-w-[560px]">
      <p className="text-[8px] uppercase text-bazooka-text-secondary sm:text-[9px]">Home <span className="mx-2 text-bazooka-lime">›</span> Contact Us</p>
      <h1 className="font-display mt-6 text-[40px] font-black uppercase leading-[.9] min-[380px]:text-[44px] sm:text-[62px] lg:text-[68px]">We’d Love To<br/><span className="text-bazooka-lime">Hear From You.</span></h1>
      <p className="mt-5 max-w-[470px] text-[11px] leading-5 text-bazooka-text-secondary sm:text-[12px] sm:leading-6">Have a question, want to join, or need more information? Our team is here to help you start your fitness journey with Bazooka.</p>
      <div className="mt-7 grid gap-3 sm:mt-8 sm:grid-cols-3 sm:gap-4">{benefits.map(([Icon,title,text])=><div key={title} className="flex gap-3 rounded-[4px] border border-bazooka-border/70 bg-black/35 p-3 sm:rounded-none sm:border-0 sm:border-r sm:bg-transparent sm:p-0 sm:pr-4 last:border-r-0"><Icon className="mt-0.5 size-5 shrink-0 text-bazooka-lime"/><div><strong className="font-display block text-[14px] uppercase">{title}</strong><span className="mt-1 block text-[8px] leading-4 text-bazooka-text-secondary">{text}</span></div></div>)}</div>
    </motion.div></div>
  </section>;
}
