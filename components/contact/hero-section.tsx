"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Headphones, UserRound, Zap } from "lucide-react";
import { reveal, shell } from "./contact-shared";

const benefits = [[Zap,"Quick Response","We reply within 24 hours"],[Headphones,"Expert Support","Talk to our fitness experts"],[UserRound,"Personal Guidance","Get the right plan for you"]] as const;

export default function ContactHeroSection() {
  return <section className="group relative min-h-[520px] overflow-hidden border-b border-bazooka-border/70 bg-bazooka-black">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=90')] bg-cover bg-[62%_center] transition-transform duration-700 group-hover:scale-[1.015] sm:bg-center"/>
    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/82 to-black/18"/>
    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/18"/>
    <div className={`${shell} relative z-10 flex min-h-[520px] items-center py-10 sm:py-12`}><motion.div {...reveal} className="w-full max-w-[590px]">
      <div className="flex flex-wrap items-center gap-2 text-[8px] font-black uppercase text-bazooka-text-secondary sm:text-[9px]"><Link href="/" className="transition hover:text-bazooka-lime">Home</Link><ChevronRight className="size-3 text-bazooka-lime"/><span className="text-white">Contact Us</span></div>
      <h1 className="font-display mt-6 text-[38px] font-black uppercase leading-[.9] min-[380px]:text-[44px] sm:text-[60px] lg:text-[68px]"><span className="block">We’d Love To</span><span className="block text-bazooka-lime">Hear From You.</span></h1>
      <span className="mt-4 block h-[2px] w-9 bg-bazooka-lime"/>
      <p className="mt-5 max-w-[470px] text-[11px] leading-5 text-bazooka-text-secondary sm:text-[12px] sm:leading-6">Have a question, want to join, or need more information? Our team is here to help you start your fitness journey with Bazooka.</p>
      <div className="mt-7 grid gap-3 sm:mt-8 sm:grid-cols-3 sm:gap-4">{benefits.map(([Icon,title,text])=><div key={title} className="group/benefit flex min-w-0 gap-3 rounded-[5px] border border-bazooka-border/70 bg-black/40 p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-bazooka-lime/50 hover:bg-black/55 sm:rounded-none sm:border-0 sm:border-r sm:bg-transparent sm:p-0 sm:pr-4 sm:hover:translate-y-0 sm:hover:bg-transparent last:border-r-0"><Icon className="mt-0.5 size-5 shrink-0 text-bazooka-lime transition-transform duration-300 group-hover/benefit:scale-110"/><div className="min-w-0"><strong className="font-display block text-[14px] uppercase text-white">{title}</strong><span className="mt-1 block text-[8px] leading-4 text-bazooka-text-secondary">{text}</span></div></div>)}</div>
    </motion.div></div>
  </section>;
}
