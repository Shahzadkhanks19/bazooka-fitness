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
    <section className="relative min-h-[610px] overflow-hidden border-b border-bazooka-border/70">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=2200&q=92')] bg-cover bg-[center_36%] grayscale" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,.98)_27%,rgba(5,5,5,.77)_46%,rgba(5,5,5,.18)_73%,rgba(5,5,5,.28)_100%),linear-gradient(0deg,#050505_0%,transparent_22%)]" />
      <div className={`${shell} relative min-h-[610px] pt-16`}>
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .65 }} className="max-w-[520px]">
          <span className="text-[10px] font-black uppercase text-bazooka-lime">About Bazooka Fitness</span>
          <h1 className="font-display mt-4 text-[58px] font-black uppercase leading-[.9] tracking-[-1.8px] sm:text-[68px] lg:text-[74px]">Built On Passion.<br /><span className="text-bazooka-lime">Driven By Purpose.</span></h1>
          <p className="mt-6 max-w-[455px] text-[12px] leading-5 text-bazooka-text-secondary">Bazooka Fitness is more than a gym. It&apos;s a high-energy community built for real people with real goals. We combine world-class training, science-backed methods and a culture that pushes you to become your strongest self.</p>
          <Link href="#our-story" className={`${outlineButton} mt-7`}>Our Story <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></Link>
        </motion.div>

        <div className="absolute bottom-6 left-0 right-0 grid grid-cols-2 overflow-hidden rounded-[5px] border border-bazooka-border-strong bg-black/82 backdrop-blur-sm md:grid-cols-5">
          {stats.map(([Icon, value, label], index) => (
            <div key={label} className="relative grid min-h-[88px] grid-cols-[42px_auto] items-center px-5 transition-colors hover:bg-bazooka-lime/[0.04]">
              <Icon className="size-6 text-bazooka-lime" />
              <div><strong className="block text-[24px] leading-none">{value}</strong><small className="mt-1 block text-[8px] text-bazooka-text-secondary">{label}</small></div>
              {index < stats.length - 1 && <span className="absolute right-0 top-1/2 hidden h-10 w-px -translate-y-1/2 bg-bazooka-border md:block" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
