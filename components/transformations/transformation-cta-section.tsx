"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ClipboardCheck, Target, Trophy, UsersRound } from "lucide-react";
import { primaryButton, reveal, shell } from "./transformations-shared";

const points = [
  [UsersRound, "Expert Coaches", "Guiding You"],
  [ClipboardCheck, "Personalized", "Training Plans"],
  [Target, "Nutrition", "Support"],
  [Trophy, "Results You", "Can See"],
] as const;

export default function TransformationCtaSection() {
  return (
    <section className="border-b border-bazooka-border/70 bg-bazooka-black py-8">
      <div className={shell}>
        <motion.div {...reveal} className="grid overflow-hidden rounded-[5px] border border-bazooka-border-strong bg-bazooka-surface lg:grid-cols-[1.15fr_1fr]">
          <div className="relative overflow-hidden px-7 py-8">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1100&q=90')] bg-cover bg-center grayscale opacity-25"/>
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/35"/>
            <div className="relative z-10">
              <h2 className="font-display text-[30px] font-black uppercase leading-[.92] sm:text-[38px]">Your Transformation Story<br/>Could <span className="text-bazooka-lime">Inspire Others.</span></h2>
              <p className="mt-3 max-w-[430px] text-[10px] leading-5 text-bazooka-text-secondary">Start your journey with Bazooka today and become our next success story.</p>
              <Link href="/book-free-trial" className={`${primaryButton} mt-5`}>Book Free Trial <ArrowRight className="size-4"/></Link>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2">
            {points.map(([Icon,title,sub],index) => <div key={title} className={`flex min-h-[120px] items-center justify-center gap-3 px-4 text-center ${index % 2 === 0 ? "border-r border-bazooka-border" : ""} ${index < 2 ? "border-b border-bazooka-border" : ""}`}><Icon className="size-6 shrink-0 text-bazooka-lime"/><div><strong className="font-display block text-[12px] uppercase">{title}</strong><span className="text-[8px] text-bazooka-text-secondary">{sub}</span></div></div>)}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
