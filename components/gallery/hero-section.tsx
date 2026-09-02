"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { outlineButton, primaryButton, reveal, shell } from "./gallery-shared";

export default function GalleryHeroSection() {
  return <section className="border-b border-bazooka-border/70 bg-bazooka-black">
    <div className={`${shell} grid overflow-hidden lg:min-h-[400px] lg:grid-cols-[.72fr_1.28fr]`}>
      <motion.div {...reveal} className="relative z-10 flex min-w-0 flex-col justify-center py-10 lg:pr-10">
        <div className="flex flex-wrap items-center gap-2 text-[8px] font-bold uppercase text-bazooka-text-secondary sm:text-[9px]"><Link href="/" className="text-white transition hover:text-bazooka-lime focus-visible:text-bazooka-lime">Home</Link><span className="text-bazooka-lime">›</span><span>Gallery</span></div>
        <h1 className="font-display mt-6 max-w-full text-[40px] font-black uppercase leading-[.9] min-[380px]:text-[44px] sm:mt-7 sm:text-[58px] lg:text-[62px]"><span className="block">Moments That</span><span className="block text-bazooka-lime">Motivate.</span></h1>
        <p className="mt-5 max-w-[380px] text-[11px] leading-5 text-bazooka-text-secondary">A glimpse of the energy, dedication and community that defines Bazooka Fitness.</p>
        <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap"><Link href="/transformations" className={`${primaryButton} w-full sm:w-auto`}>View Transformations <ArrowRight className="size-4"/></Link><Link href="/memberships" className={`${outlineButton} w-full sm:w-auto`}>Explore Memberships <ArrowRight className="size-4"/></Link></div>
      </motion.div>
      <motion.div {...reveal} className="group relative min-h-[280px] overflow-hidden sm:min-h-[330px] lg:min-h-full"><div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=90')] bg-cover bg-[58%_center] transition-transform duration-700 group-hover:scale-[1.025] sm:bg-center"/><div className="absolute inset-0 bg-gradient-to-r from-black via-black/12 to-transparent"/><div className="absolute inset-0 bg-gradient-to-t from-black/38 via-transparent to-black/10"/></motion.div>
    </div>
  </section>;
}
