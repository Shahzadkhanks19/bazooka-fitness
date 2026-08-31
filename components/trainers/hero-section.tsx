"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { primaryButton, reveal, shell } from "./trainers-shared";

export default function TrainersHeroSection() {
  return (
    <section className="relative min-h-[560px] overflow-hidden border-b border-bazooka-border/70 bg-[url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1800&q=90')] bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20" />
      <div className={`${shell} relative z-10 flex min-h-[560px] items-center py-14`}>
        <motion.div {...reveal} className="max-w-[520px]">
          <div className="text-[9px] font-bold uppercase text-bazooka-text-secondary">Home <span className="mx-2 text-bazooka-lime">›</span> Trainers</div>
          <h1 className="font-display mt-7 text-[54px] font-black uppercase leading-[.88] sm:text-[68px] lg:text-[78px]">Expert Coaches.<br /><span className="text-bazooka-lime">Real Results.</span></h1>
          <span className="mt-5 block h-0.5 w-10 bg-bazooka-lime" />
          <p className="mt-4 max-w-[390px] text-[12px] leading-6 text-bazooka-text-secondary">Our certified trainers bring experience, passion and a personalized approach to help you become your strongest self.</p>
          <Link href="/book-free-trial" className={`${primaryButton} mt-7`}>Book Free Trial <ArrowRight className="size-4" /></Link>
        </motion.div>
      </div>
    </section>
  );
}
