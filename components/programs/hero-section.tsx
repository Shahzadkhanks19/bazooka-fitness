"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { outlineButton, primaryButton, shell } from "./programs-shared";

export default function ProgramsHeroSection() {
  return (
    <section className="relative min-h-[430px] overflow-hidden border-b border-bazooka-border/70">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2200&q=90')] bg-cover bg-[62%_center] grayscale sm:bg-center" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,.96)_30%,rgba(5,5,5,.68)_52%,rgba(5,5,5,.16)_76%,rgba(5,5,5,.30)_100%)]" />
      <div className={`${shell} relative flex min-h-[430px] items-center py-10 sm:py-14`}>
        <motion.div initial={{ opacity: 0, x: -26 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .6 }} className="w-full max-w-[620px]">
          <div className="mb-5 flex flex-wrap items-center gap-2 text-[8px] font-black uppercase text-bazooka-text-secondary sm:text-[9px]">
            <Link href="/" className="text-bazooka-lime transition hover:text-bazooka-lime-hover">Home</Link><ChevronRight className="size-3" /><span>Programs</span>
          </div>
          <h1 className="font-display text-[40px] font-black uppercase leading-[.92] tracking-[-1px] min-[380px]:text-[44px] sm:text-[60px] sm:tracking-[-1.5px] lg:text-[68px]">Programs<br />Built For <span className="text-bazooka-lime">Real Results.</span></h1>
          <p className="mt-5 max-w-[520px] text-[11px] leading-5 text-bazooka-text-secondary sm:text-[12px]">Whether your goal is strength, fitness, transformation or performance — we have the right program to get you there.</p>
          <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap sm:gap-4">
            <Link href="/book-free-trial" className={`${primaryButton} w-full sm:w-auto`}>Book Free Trial <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></Link>
            <Link href="/memberships" className={`${outlineButton} w-full sm:w-auto`}>View Memberships <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
