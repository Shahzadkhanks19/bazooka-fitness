"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Dumbbell, MapPin, ShieldCheck, Star, Users } from "lucide-react";
import { outlineButton, primaryButton, shell } from "./home-shared";

const stats = [
  [Users, "500+", "MEMBERS"],
  [Dumbbell, "3+", "TRAINING ZONES"],
  [ShieldCheck, "100%", "COMMITMENT"],
  [Star, "1", "STRONGER JODHPUR"],
] as const;

export default function HeroSection() {
  return (
    <section className="group relative overflow-hidden border-b border-bazooka-border/70 bg-bazooka-black">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438097545-a2c22c57f2ad?auto=format&fit=crop&w=2200&q=90')] bg-cover bg-[65%_center] transition-transform duration-[900ms] group-hover:scale-[1.01] sm:bg-[center_34%]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,.96)_26%,rgba(5,5,5,.60)_49%,rgba(5,5,5,.08)_73%,rgba(5,5,5,.22)_100%),linear-gradient(0deg,#050505_0%,transparent_20%)]" />
      <div className={`${shell} relative flex min-h-[700px] flex-col pb-6 pt-10 min-[380px]:pt-12 sm:min-h-[720px] sm:pt-16 lg:pt-20`}>
        <motion.div initial={false} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65 }} className="max-w-[460px] min-w-0">
          <span className="inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-[.08em] text-bazooka-lime sm:text-[10px]"><span className="size-1.5 rounded-full bg-bazooka-lime shadow-[0_0_12px_rgba(255,181,46,.7)]" /> Bazooka Fitness · Jodhpur</span>
          <h1 className="font-display mt-4 max-w-full text-[42px] font-black uppercase leading-[.88] tracking-[-1px] min-[380px]:text-[50px] sm:text-[70px] sm:tracking-[-2px] lg:text-[82px]">Build Your <span className="block italic text-bazooka-lime">Strongest</span> Self</h1>
          <h2 className="mt-5 text-[11px] font-black sm:text-[13px]">STRONGER PEOPLE. A HEALTHIER JODHPUR.</h2>
          <p className="mt-3 max-w-[390px] text-[11px] leading-5 text-bazooka-text-secondary sm:text-[12px]">Strength training, cardio, personal training, steam &amp; shower. More than a gym — a community that pushes you forward.</p>
          <div className="mt-6 grid gap-3 sm:flex sm:flex-wrap sm:gap-4">
            <Link href="/book-free-trial" className={`${primaryButton} w-full sm:w-auto`}>Book Free Trial <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" /></Link>
            <Link href="/memberships" className={`${outlineButton} w-full sm:w-auto`}>View Memberships <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" /></Link>
          </div>
          <a href="https://maps.app.goo.gl/ArEb2YaGdZq5qF8x7" target="_blank" rel="noreferrer" className="mt-5 inline-flex min-h-10 items-center gap-2 rounded-[4px] border border-transparent px-1 text-[10px] text-bazooka-text-secondary transition-all duration-300 hover:border-bazooka-border hover:bg-black/25 hover:text-bazooka-lime sm:text-[11px]"><MapPin className="size-4 shrink-0 text-bazooka-lime" /> Sardarpura, Jodhpur</a>
        </motion.div>

        <div className="mt-8 grid grid-cols-2 overflow-hidden rounded-[6px] border border-bazooka-border-strong bg-black/78 backdrop-blur-sm sm:mt-10 md:grid-cols-4 lg:mt-auto">
          {stats.map(([Icon, value, label], index) => {
            const StatIcon = Icon as typeof Users;
            return (
              <div key={label} className="group/stat relative grid min-h-[84px] grid-cols-[34px_auto] items-center gap-2 px-3 transition-colors duration-300 hover:bg-bazooka-lime/[0.06] sm:min-h-[98px] sm:grid-cols-[48px_auto] sm:px-7">
                <StatIcon className="size-5 text-bazooka-lime transition-transform duration-300 group-hover/stat:scale-110 sm:size-7" />
                <div className="min-w-0"><strong className="font-display block text-[20px] leading-none text-white sm:text-[27px]">{value}</strong><small className="mt-1 block text-[7px] leading-3 text-bazooka-text-secondary sm:mt-2 sm:text-[9px]">{label}</small></div>
                {index < stats.length - 1 && <span className="absolute right-0 top-1/2 hidden h-12 w-px -translate-y-1/2 bg-bazooka-border md:block" />}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
