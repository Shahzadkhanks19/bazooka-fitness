"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { primaryButton, reveal, shell } from "./facilities-shared";

export default function TourCtaSection() {
  return (
    <section className="border-b border-bazooka-border/70 bg-bazooka-black py-12">
      <div className={shell}>
        <motion.div {...reveal} className="relative overflow-hidden rounded-[6px] border border-bazooka-border-strong">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=90')] bg-cover bg-center grayscale" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/25" />
          <div className="relative z-10 grid min-h-[220px] gap-6 px-7 py-7 md:px-9 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="font-display text-[38px] font-black uppercase leading-[.9] sm:text-[48px]">See It. Feel It.<br /><span className="text-bazooka-lime">Live It.</span></h2>
              <p className="mt-4 max-w-[460px] text-[10px] leading-5 text-bazooka-text-secondary">Take a tour of Bazooka and experience the energy, environment and equipment first-hand.</p>
            </div>
            <Link href="/book-free-trial" className={primaryButton}>Schedule A Tour <ArrowRight className="size-4" /></Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
