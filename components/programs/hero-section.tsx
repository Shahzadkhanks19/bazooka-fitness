"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { outlineButton, primaryButton, shell } from "./programs-shared";

export default function ProgramsHeroSection() {
  return (
    <section className="group relative min-h-[450px] overflow-hidden border-b border-bazooka-border/70 bg-bazooka-black">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2200&q=90')] bg-cover bg-[64%_center] transition-transform duration-700 group-hover:scale-[1.015] sm:bg-center" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,.96)_28%,rgba(5,5,5,.72)_50%,rgba(5,5,5,.20)_78%,rgba(5,5,5,.32)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/20" />
      <div className={`${shell} relative flex min-h-[450px] items-center py-10 sm:py-14`}>
        <motion.div initial={{ opacity: 0, x: -26 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .6 }} className="w-full max-w-[640px]">
          <div className="mb-5 flex flex-wrap items-center gap-2 text-[8px] font-black uppercase text-bazooka-text-secondary sm:text-[9px]">
            <Link href="/" className="transition hover:text-bazooka-lime">Home</Link><ChevronRight className="size-3 text-bazooka-lime" /><span className="text-white">Programs</span>
          </div>
          <h1 className="font-display max-w-[640px] text-[38px] font-black uppercase leading-[.92] tracking-[-1px] min-[380px]:text-[44px] sm:text-[58px] sm:tracking-[-1.5px] lg:text-[68px]">
            <span className="block">Programs</span>
            <span className="block">Built For</span>
            <span className="block text-bazooka-lime">Real Results.</span>
          </h1>
          <span className="mt-4 block h-[2px] w-9 bg-bazooka-lime" />
          <p className="mt-5 max-w-[520px] text-[11px] leading-5 text-bazooka-text-secondary sm:text-[12px] sm:leading-6">Whether your goal is strength, fitness, transformation or performance — we have the right program to get you there.</p>
          <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap sm:gap-4">
            <Link href="/book-free-trial" className={`${primaryButton} w-full sm:w-auto`}>Book Free Trial <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></Link>
            <Link href="#program-list" className={`${outlineButton} w-full sm:w-auto`}>Explore Programs <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
