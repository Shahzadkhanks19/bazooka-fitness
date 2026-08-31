"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Dumbbell, ShieldCheck, Star, Trophy, Users } from "lucide-react";
import { outlineButton, shell } from "./about-shared";

const stats = [
  [Users, "500+", "MEMBERS"],
  [Dumbbell, "3+", "TRAINING ZONES"],
  [ShieldCheck, "20+", "EXPERT TRAINERS"],
  [Trophy, "100%", "COMMITMENT"],
  [Star, "1", "STRONGER JODHPUR"],
] as const;

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden border-b border-bazooka-border/70">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=2200&q=92')] bg-cover bg-[62%_center] grayscale sm:bg-[center_36%]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,.98)_27%,rgba(5,5,5,.77)_46%,rgba(5,5,5,.18)_73%,rgba(5,5,5,.28)_100%),linear-gradient(0deg,#050505_0%,transparent_22%)]" />
      <div className={`${shell} relative flex min-h-[610px] flex-col pb-6 pt-10 sm:pt-14 lg:pt-16`}>
        <motion.div initial={false} animate={{ opacity: 1, x: 0 }} transition={{ duration: .65 }} className="max-w-[520px]">
          <span className="text-[9px] font-black uppercase text-bazooka-lime sm:text-[10px]">About Bazooka Fitness</span>
          <h1 className="font-display mt-4 text-[40px] font-black uppercase leading-[.9] tracking-[-1px] min-[380px]:text-[44px] sm:text-[60px] sm:tracking-[-1.8px] lg:text-[74px]">Built On Passion.<br /><span className="text-bazooka-lime">Driven By Purpose.</span></h1>
          <p className="mt-5 max-w-[455px] text-[11px] leading-5 text-bazooka-text-secondary sm:mt-6 sm:text-[12px]">Bazooka Fitness is more than a gym. It&apos;s a high-energy community built for real people with real goals. We combine world-class training, science-backed methods and a culture that pushes you to become your strongest self.</p>
          <Link href="#our-story" className={`${outlineButton} mt-6 w-full sm:mt-7 sm:w-fit`}>Our Story <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></Link>
        </motion.div>

        <div className="mt-8 grid grid-cols-2 overflow-hidden rounded-[5px] border border-bazooka-border-strong bg-black/82 backdrop-blur-sm sm:mt-10 md:grid-cols-5 lg:mt-auto">
          {stats.map(([Icon, value, label], index) => (
            <div key={label} className="relative grid min-h-[82px] grid-cols-[34px_auto] items-center gap-1 px-3 transition-colors hover:bg-bazooka-lime/[0.04] sm:min-h-[88px] sm:grid-cols-[42px_auto] sm:px-5">
              <Icon className="size-5 text-bazooka-lime sm:size-6" />
              <div><strong className="block text-[20px] leading-none sm:text-[24px]">{value}</strong><small className="mt-1 block text-[7px] leading-3 text-bazooka-text-secondary sm:text-[8px]">{label}</small></div>
              {index < stats.length - 1 && <span className="absolute right-0 top-1/2 hidden h-10 w-px -translate-y-1/2 bg-bazooka-border md:block" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
