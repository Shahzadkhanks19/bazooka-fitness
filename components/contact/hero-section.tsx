"use client";

import { motion } from "framer-motion";
import { Headphones, UserRound, Zap } from "lucide-react";
import { reveal, shell } from "./contact-shared";

const benefits = [
  [Zap, "Quick Response", "We reply within 24 hours"],
  [Headphones, "Expert Support", "Talk to our fitness experts"],
  [UserRound, "Personal Guidance", "Get the right plan for you"],
] as const;

export default function ContactHeroSection() {
  return (
    <section className="relative min-h-[520px] overflow-hidden border-b border-bazooka-border/70 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=90')] bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/82 to-black/20" />
      <div className={`${shell} relative z-10 flex min-h-[520px] items-center py-12`}>
        <motion.div {...reveal} className="max-w-[560px]">
          <p className="text-[9px] uppercase text-bazooka-text-secondary">Home <span className="mx-2 text-bazooka-lime">›</span> Contact Us</p>
          <h1 className="font-display mt-6 text-[52px] font-black uppercase leading-[.9] sm:text-[68px]">We’d Love To<br /><span className="text-bazooka-lime">Hear From You.</span></h1>
          <p className="mt-5 max-w-[470px] text-[12px] leading-6 text-bazooka-text-secondary">Have a question, want to join, or need more information? Our team is here to help you start your fitness journey with Bazooka.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {benefits.map(([Icon, title, text]) => <div key={title} className="flex gap-3 sm:border-r sm:border-bazooka-border sm:pr-4 last:border-r-0"><Icon className="mt-0.5 size-5 shrink-0 text-bazooka-lime" /><div><strong className="font-display block text-[14px] uppercase">{title}</strong><span className="mt-1 block text-[8px] leading-4 text-bazooka-text-secondary">{text}</span></div></div>)}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
