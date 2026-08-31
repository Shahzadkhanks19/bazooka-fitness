"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Dumbbell, MapPin, ShieldCheck, Star, Users } from "lucide-react";
import { outlineButton, primaryButton, shell } from "./home-shared";

export default function HeroSection() {
  return (
    <section className="relative min-h-[720px] overflow-hidden border-b border-bazooka-border/70">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438097545-a2c22c57f2ad?auto=format&fit=crop&w=2200&q=90')] bg-cover bg-[center_34%] grayscale" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,.96)_26%,rgba(5,5,5,.60)_49%,rgba(5,5,5,.08)_73%,rgba(5,5,5,.22)_100%),linear-gradient(0deg,#050505_0%,transparent_20%)]" />
      <div className={`${shell} relative min-h-[720px] pt-20`}>
        <motion.div initial={{ opacity: 0, x: -28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65 }} className="max-w-[440px]">
          <h1 className="font-display text-[68px] font-black uppercase leading-[.88] tracking-[-2px] sm:text-[78px] lg:text-[82px]">Build Your <span className="block italic text-bazooka-lime">Strongest</span> Self</h1>
          <h2 className="mt-5 text-[13px] font-black">STRONGER PEOPLE. A HEALTHIER JODHPUR.</h2>
          <p className="mt-3 max-w-[370px] text-[12px] leading-5 text-bazooka-text-secondary">Strength training, Cardio, Personal training,<br />Steam &amp; shower. More than a gym —<br />a community that pushes you forward.</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/book-free-trial" className={primaryButton}>Book Free Trial <ArrowRight className="size-4" /></Link>
            <Link href="/memberships" className={outlineButton}>Join Bazooka <ArrowRight className="size-4" /></Link>
          </div>
          <a href="https://maps.app.goo.gl/ArEb2YaGdZq5qF8x7" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-[11px] text-bazooka-text-secondary hover:text-bazooka-lime"><MapPin className="size-4 text-bazooka-lime" /> Sardarpura, Jodhpur</a>
        </motion.div>

        <div className="absolute bottom-7 left-0 right-0 grid grid-cols-2 overflow-hidden rounded-[6px] border border-bazooka-border-strong bg-black/78 backdrop-blur-sm md:grid-cols-4">
          {[[Users, "500+", "MEMBERS"], [Dumbbell, "3+", "TRAINING ZONES"], [ShieldCheck, "100%", "COMMITMENT"], [Star, "1", "STRONGER JODHPUR"]].map(([Icon, value, label], index) => {
            const StatIcon = Icon as typeof Users;
            return (
              <div key={String(label)} className="relative grid min-h-[98px] grid-cols-[48px_auto] items-center px-7">
                <StatIcon className="size-7 text-bazooka-lime" />
                <div><strong className="block text-[27px] leading-none">{String(value)}</strong><small className="mt-2 block text-[9px] text-bazooka-text-secondary">{String(label)}</small></div>
                {index < 3 && <span className="absolute right-0 top-1/2 hidden h-12 w-px -translate-y-1/2 bg-bazooka-border md:block" />}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
