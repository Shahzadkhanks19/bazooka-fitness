"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Dumbbell, MapPin, Sparkles } from "lucide-react";
import { outlineButton, primaryButton, reveal, shell } from "./facilities-shared";

export default function TourCtaSection() {
  return (
    <section className="border-b border-bazooka-border/70 bg-bazooka-black py-12 sm:py-14">
      <div className={shell}>
        <motion.div {...reveal} className="group relative overflow-hidden rounded-[6px] border border-bazooka-border-strong transition-all duration-300 hover:border-bazooka-lime/70">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=90')] bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.02]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/78 to-black/22" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/15" />
          <div className="relative z-10 grid min-h-[260px] gap-7 px-5 py-8 sm:px-7 md:px-9 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="min-w-0">
              <span className="inline-flex items-center gap-2 text-[8px] font-black uppercase tracking-[.08em] text-bazooka-lime"><MapPin className="size-3.5" /> Visit Bazooka Fitness</span>
              <h2 className="font-display mt-3 max-w-full text-[33px] font-black uppercase leading-[.9] min-[380px]:text-[37px] sm:text-[48px]">See It. Feel It.<br /><span className="text-bazooka-lime">Train In It.</span></h2>
              <p className="mt-4 max-w-[500px] text-[10px] leading-5 text-bazooka-text-secondary sm:text-[11px]">Walk through the training zones, experience the environment and see how Bazooka fits into your routine before you decide.</p>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[8px] font-bold uppercase text-white/80">
                <span className="inline-flex items-center gap-2"><Dumbbell className="size-3.5 text-bazooka-lime" /> Explore the training floor</span>
                <span className="inline-flex items-center gap-2"><Sparkles className="size-3.5 text-bazooka-lime" /> Meet the team</span>
              </div>
            </div>
            <div className="grid w-full gap-3 sm:flex sm:flex-wrap lg:w-auto lg:flex-col">
              <Link href="/book-free-trial" className={`${primaryButton} w-full sm:w-auto lg:min-w-[190px]`}>Book Free Trial <ArrowRight className="size-4" /></Link>
              <Link href="/contact" className={`${outlineButton} w-full sm:w-auto lg:min-w-[190px]`}>Contact Us <ArrowRight className="size-4" /></Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
