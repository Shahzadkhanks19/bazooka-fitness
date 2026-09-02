"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { outlineButton, primaryButton, reveal, shell } from "./memberships-shared";

export default function MembershipsHeroSection() {
  return (
    <section className="relative min-h-[540px] overflow-hidden border-b border-bazooka-border/70 sm:min-h-[560px]">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1800&q=90')] bg-cover bg-[62%_center] transition-transform duration-700 sm:bg-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/78 to-black/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-transparent to-black/20" />
      <div className={`${shell} relative z-10 flex min-h-[540px] items-center py-12 sm:min-h-[560px] sm:py-14`}>
        <motion.div {...reveal} className="w-full max-w-[720px] min-w-0">
          <div className="mb-6 flex flex-wrap items-center gap-2 text-[8px] font-black uppercase tracking-[0.04em] sm:text-[9px]">
            <Link href="/" className="text-bazooka-lime transition hover:text-bazooka-lime-hover">Home</Link>
            <ChevronRight className="size-3 text-bazooka-muted" />
            <span className="text-white">Memberships</span>
          </div>
          <h1 className="font-display max-w-full text-[38px] font-black uppercase leading-[.9] tracking-[-1px] min-[380px]:text-[42px] sm:text-[58px] lg:text-[72px] xl:text-[76px]">
            <span className="block">Memberships That</span>
            <span className="block">Fuel Your</span>
            <span className="block text-bazooka-lime">Transformation.</span>
          </h1>
          <span className="mt-4 block h-[2px] w-8 bg-bazooka-lime" />
          <p className="mt-5 max-w-[560px] text-[11px] leading-5 text-bazooka-text-secondary sm:text-[12px] sm:leading-6">Choose the membership that fits your goals and lifestyle. One commitment today. A stronger you for life.</p>
          <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap">
            <Link href="/book-free-trial" className={`${primaryButton} w-full sm:w-auto`}>Book Free Trial <ArrowRight className="size-4" /></Link>
            <Link href="#membership-plans" className={`${outlineButton} w-full sm:w-auto`}>View Memberships <ArrowRight className="size-4" /></Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
