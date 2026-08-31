"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { outlineButton, primaryButton, shell } from "./programs-shared";

export default function ProgramsHeroSection() {
  return (
    <section className="relative min-h-[430px] overflow-hidden border-b border-bazooka-border/70">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2200&q=90')] bg-cover bg-center grayscale" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,.96)_30%,rgba(5,5,5,.68)_52%,rgba(5,5,5,.16)_76%,rgba(5,5,5,.30)_100%)]" />
      <div className={`${shell} relative flex min-h-[430px] items-center py-14`}>
        <motion.div initial={{ opacity: 0, x: -26 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .6 }} className="max-w-[620px]">
          <div className="mb-5 flex items-center gap-2 text-[9px] font-black uppercase text-bazooka-text-secondary">
            <Link href="/" className="text-bazooka-lime transition hover:text-bazooka-lime-hover">Home</Link>
            <ChevronRight className="size-3" />
            <span>Programs</span>
          </div>
          <h1 className="font-display text-[58px] font-black uppercase leading-[.92] tracking-[-1.5px] sm:text-[68px]">
            Programs<br />Built For <span className="text-bazooka-lime">Real Results.</span>
          </h1>
          <p className="mt-5 max-w-[520px] text-[12px] leading-5 text-bazooka-text-secondary">Whether your goal is strength, fitness, transformation or performance — we have the right program to get you there.</p>
          <div className="mt-7 flex flex-wrap gap-4">
            <Link href="/book-free-trial" className={primaryButton}>Book Free Trial <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></Link>
            <Link href="/memberships" className={outlineButton}>View Memberships <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
