"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { outlineButton, reveal } from "./home-shared";

export default function ExperienceSection() {
  return (
    <section className="grid min-h-[430px] border-b border-bazooka-border/70 bg-bazooka-soft-black md:grid-cols-[49%_51%]">
      <motion.div {...reveal} className="flex items-center justify-end bg-[linear-gradient(90deg,#050505,#090909)]">
        <div className="w-full max-w-[590px] px-8 py-16 md:pr-24">
          <span className="text-[10px] font-black text-bazooka-lime">THE BAZOOKA EXPERIENCE</span>
          <h2 className="font-display mt-4 text-[40px] font-black uppercase leading-[.98]">It’s Not Just A Gym.<br /><span className="text-bazooka-lime">It’s A Movement.</span></h2>
          <p className="mt-5 max-w-[360px] text-[12px] leading-5 text-bazooka-text-secondary">We combine world-class equipment, expert coaches and a powerful community to help you become the best version of yourself.</p>
          <Link href="/about" className={`${outlineButton} mt-7 border-bazooka-lime/70`}>Discover Bazooka <ArrowRight className="size-4" /></Link>
        </div>
      </motion.div>
      <motion.div {...reveal} className="relative min-h-[430px] bg-[url('https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1500&q=90')] bg-cover bg-center grayscale">
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent" />
        <div className="font-display relative z-10 flex h-full items-center px-14 text-[44px] font-black uppercase leading-[.92] text-black/90">BETTER<br />PEOPLE.<br />A STRONGER<br />JODHPUR.</div>
      </motion.div>
    </section>
  );
}
