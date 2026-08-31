"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { outlineButton, primaryButton, reveal, shell } from "./programs-shared";

export default function AllProgramsHeroSection() {
  return (
    <section className="relative min-h-[510px] overflow-hidden border-b border-bazooka-border/70">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=90')] bg-cover bg-center grayscale" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/15" />

      <div className={`${shell} relative z-10 flex min-h-[510px] items-center py-14`}>
        <motion.div {...reveal} className="max-w-[760px]">
          <Link href="/programs" className="mb-8 inline-flex items-center gap-2 text-[9px] font-black uppercase text-bazooka-text-secondary transition hover:text-bazooka-lime">
            <ArrowLeft className="size-3.5" /> Back to Programs
          </Link>
          <span className="block text-[10px] font-black uppercase tracking-[.04em] text-bazooka-lime">All Bazooka Programs</span>
          <h1 className="font-display mt-3 max-w-[760px] text-[56px] font-black uppercase leading-[.88] md:text-[78px]">
            Choose Your <span className="text-bazooka-lime">Path.</span>
          </h1>
          <p className="mt-5 max-w-[590px] text-[12px] leading-6 text-bazooka-text-secondary">
            From strength and conditioning to body transformation, personal coaching and recovery — find the program built around your goal.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="#all-programs" className={primaryButton}>Explore Programs <ArrowRight className="size-4" /></Link>
            <Link href="/book-free-trial" className={outlineButton}>Book Free Trial <ArrowRight className="size-4" /></Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
