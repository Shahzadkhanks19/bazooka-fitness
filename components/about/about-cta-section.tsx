"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { outlineButton, primaryButton, reveal, shell } from "./about-shared";

const points = ["No commitment", "Expert guidance", "Experience Bazooka first-hand"] as const;

export default function AboutCtaSection() {
  return (
    <section className="relative overflow-hidden border-b border-bazooka-border/70 py-14 sm:py-16">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1900&q=90')] bg-cover bg-[58%_center] sm:bg-center" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,.94)_0%,rgba(5,5,5,.80)_48%,rgba(5,5,5,.48)_100%)]" />
      <motion.div {...reveal} className={`${shell} relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center md:gap-12`}>
        <div className="min-w-0">
          <span className="text-[9px] font-black uppercase tracking-[.08em] text-bazooka-lime sm:text-[10px]">Your Next Step</span>
          <h2 className="font-display mt-3 text-[35px] font-black uppercase leading-[.94] sm:text-[43px]">Ready To Start<br /><span className="text-bazooka-lime">Your Strongest Chapter?</span></h2>
          <p className="mt-4 max-w-[520px] text-[10px] leading-5 text-bazooka-text-secondary sm:text-[11px]">Come experience the training floor, meet the team and see what makes Bazooka different before choosing your membership.</p>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
            {points.map(point => <span key={point} className="inline-flex items-center gap-2 text-[8px] font-bold uppercase text-white/85 sm:text-[9px]"><CheckCircle2 className="size-3.5 text-bazooka-lime" />{point}</span>)}
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 md:min-w-[220px] md:grid-cols-1">
          <Link href="/book-free-trial" className={`${primaryButton} w-full`}>Book Free Trial <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" /></Link>
          <Link href="/memberships" className={`${outlineButton} w-full`}>View Memberships <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" /></Link>
        </div>
      </motion.div>
    </section>
  );
}
