"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { outlineButton, primaryButton, reveal, shell } from "./memberships-shared";

export default function MembershipsHeroSection() {
  return (
    <section className="relative min-h-[560px] overflow-hidden border-b border-bazooka-border/70">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1800&q=90')] bg-cover bg-center grayscale" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/82 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/25" />

      <div className={`${shell} relative z-10 flex min-h-[560px] items-center py-14`}>
        <motion.div {...reveal} className="max-w-[690px]">
          <div className="mb-6 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.04em]">
            <Link href="/" className="text-bazooka-lime">Home</Link>
            <ChevronRight className="size-3 text-bazooka-text-muted" />
            <span className="text-white">Memberships</span>
          </div>

          <h1 className="font-display text-[48px] font-black uppercase leading-[.9] sm:text-[64px] lg:text-[76px]">
            Memberships That<br />Fuel Your<br /><span className="text-bazooka-lime">Transformation.</span>
          </h1>
          <span className="mt-4 block h-[2px] w-8 bg-bazooka-lime" />
          <p className="mt-5 max-w-[560px] text-[12px] leading-6 text-bazooka-text-secondary">
            Choose the membership that fits your goals and lifestyle.<br />One commitment today. A stronger you for life.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/book-free-trial" className={primaryButton}>Book Free Trial <ArrowRight className="size-4" /></Link>
            <Link href="#membership-plans" className={outlineButton}>Join Bazooka <ArrowRight className="size-4" /></Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
