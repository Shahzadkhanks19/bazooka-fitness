"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Dumbbell, Target } from "lucide-react";
import { outlineButton, primaryButton, reveal, shell } from "./programs-shared";

export default function AllProgramsHeroSection() {
  return (
    <section className="relative min-h-[510px] overflow-hidden border-b border-bazooka-border/70 sm:min-h-[540px]">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=90')] bg-cover bg-[62%_center] transition-transform duration-700 sm:bg-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/78 to-black/18" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-transparent to-black/15" />
      <div className={`${shell} relative z-10 flex min-h-[510px] items-center py-10 sm:min-h-[540px] sm:py-14`}>
        <motion.div {...reveal} className="w-full max-w-[760px] min-w-0">
          <Link href="/programs" className="mb-7 inline-flex items-center gap-2 text-[8px] font-black uppercase text-bazooka-text-secondary transition hover:text-bazooka-lime sm:mb-8 sm:text-[9px]"><ArrowLeft className="size-3.5" /> Back to Programs</Link>
          <span className="block text-[9px] font-black uppercase tracking-[.06em] text-bazooka-lime sm:text-[10px]">All Bazooka Programs</span>
          <h1 className="font-display mt-3 max-w-full text-[38px] font-black uppercase leading-[.88] min-[380px]:text-[44px] sm:text-[60px] md:text-[76px]">Choose Your <span className="text-bazooka-lime">Path.</span></h1>
          <span className="mt-4 block h-[2px] w-8 bg-bazooka-lime" />
          <p className="mt-5 max-w-[590px] text-[11px] leading-5 text-bazooka-text-secondary sm:text-[12px] sm:leading-6">Explore strength, conditioning, personal coaching, transformation and recovery programs, then open the details to find the right fit for your goals.</p>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[8px] font-bold uppercase text-white/80 sm:text-[9px]">
            <span className="inline-flex items-center gap-2"><Dumbbell className="size-3.5 text-bazooka-lime" /> Structured training</span>
            <span className="inline-flex items-center gap-2"><Target className="size-3.5 text-bazooka-lime" /> Goal-focused options</span>
          </div>
          <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap">
            <Link href="#all-programs" className={`${primaryButton} w-full sm:w-auto`}>Explore Programs <ArrowRight className="size-4" /></Link>
            <Link href="/book-free-trial" className={`${outlineButton} w-full sm:w-auto`}>Book Free Trial <ArrowRight className="size-4" /></Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
