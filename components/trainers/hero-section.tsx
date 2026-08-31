"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { primaryButton, reveal, shell } from "./trainers-shared";

export default function TrainersHeroSection() {
  return <section className="relative min-h-[560px] overflow-hidden border-b border-bazooka-border/70 bg-[url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1800&q=90')] bg-cover bg-[62%_center] sm:bg-center">
    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20"/>
    <div className={`${shell} relative z-10 flex min-h-[560px] items-center py-10 sm:py-14`}><motion.div {...reveal} className="w-full max-w-[520px]">
      <div className="text-[8px] font-bold uppercase text-bazooka-text-secondary sm:text-[9px]">Home <span className="mx-2 text-bazooka-lime">›</span> Trainers</div>
      <h1 className="font-display mt-6 text-[40px] font-black uppercase leading-[.88] min-[380px]:text-[44px] sm:mt-7 sm:text-[62px] lg:text-[78px]">Expert Coaches.<br/><span className="text-bazooka-lime">Real Results.</span></h1>
      <span className="mt-5 block h-0.5 w-10 bg-bazooka-lime"/>
      <p className="mt-4 max-w-[390px] text-[11px] leading-5 text-bazooka-text-secondary sm:text-[12px] sm:leading-6">Our certified trainers bring experience, passion and a personalized approach to help you become your strongest self.</p>
      <Link href="/book-free-trial" className={`${primaryButton} mt-7 w-full sm:w-fit`}>Book Free Trial <ArrowRight className="size-4"/></Link>
    </motion.div></div>
  </section>;
}
