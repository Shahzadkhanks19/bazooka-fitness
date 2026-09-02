"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { outlineButton, primaryButton, reveal, shell } from "./about-shared";

export default function AboutCtaSection() {
  return (
    <section className="relative overflow-hidden border-b border-bazooka-border/70 py-12">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1900&q=90')] bg-cover bg-center grayscale" />
      <div className="absolute inset-0 bg-black/72" />
      <motion.div {...reveal} className={`${shell} relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between`}>
        <h2 className="font-display text-[38px] font-black uppercase leading-[.94]">Ready To Start<br /><span className="text-bazooka-lime">Your Strongest Chapter?</span></h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/book-free-trial" className={primaryButton}>Book Free Trial <ArrowRight className="size-4" /></Link>
          <Link href="/memberships" className={outlineButton}>Join Bazooka <ArrowRight className="size-4" /></Link>
        </div>
      </motion.div>
    </section>
  );
}
