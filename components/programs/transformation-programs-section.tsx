"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Dumbbell, Target, Users } from "lucide-react";
import { reveal, shell } from "./programs-shared";

const transformationPrograms = [
  { title: "Fat Loss Program", text: "Build sustainable training habits around fat loss, fitness and strength.", href: "/programs/fat-loss", image: "bg-[url('https://images.unsplash.com/photo-1581009137042-c552e485697a?auto=format&fit=crop&w=1000&q=90')]" },
  { title: "Muscle Gain Program", text: "Build size, strength and power through structured progressive training.", href: "/programs/muscle-gain", image: "bg-[url('https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1000&q=90')]" },
  { title: "Lean & Fit Program", text: "Improve conditioning, strength and everyday fitness with a balanced approach.", href: "/programs/lean-fit", image: "bg-[url('https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=1000&q=90')]" },
] as const;

const highlights = [
  [Target, "Goal Focused", "Training built around a clear objective"],
  [Dumbbell, "Structured", "Progressive sessions with purpose"],
  [Users, "Coach Supported", "Guidance throughout your training journey"],
] as const;

export default function TransformationProgramsSection() {
  return (
    <section id="transformation-programs" className="scroll-mt-24 border-b border-bazooka-border/70 py-14 sm:py-16">
      <div className={shell}>
        <motion.div {...reveal} className="grid gap-5 lg:grid-cols-[360px_1fr] lg:items-end">
          <div className="min-w-0">
            <span className="text-[10px] font-black uppercase text-bazooka-lime">Transformation Programs</span>
            <h2 className="font-display mt-2 max-w-full text-[32px] font-black uppercase leading-[.95] min-[380px]:text-[35px] sm:text-[40px]">Train With A Clear <span className="text-bazooka-lime">Goal.</span></h2>
            <span className="mt-3 block h-[2px] w-8 bg-bazooka-lime" />
          </div>
          <p className="max-w-[540px] text-[10px] leading-5 text-bazooka-text-secondary sm:text-[11px] lg:justify-self-end">Choose a focused program based on what you want to improve. Our team helps you train with structure, consistency and progression.</p>
        </motion.div>

        <div className="mt-7 grid gap-4 lg:grid-cols-3">
          {transformationPrograms.map((program, index) => (
            <motion.article key={program.title} {...reveal} transition={{ duration: .5, delay: index * .06 }} className="group grid min-w-0 overflow-hidden rounded-[6px] border border-bazooka-border-strong bg-bazooka-surface transition-all duration-300 hover:-translate-y-1 hover:border-bazooka-lime sm:grid-cols-[42%_58%] lg:grid-cols-1">
              <div className={`${program.image} relative min-h-[190px] bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.02] sm:min-h-[210px] lg:min-h-[220px]`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
              </div>
              <div className="flex min-w-0 flex-col justify-center p-5 sm:p-6">
                <h3 className="font-display text-[20px] font-black uppercase leading-none sm:text-[22px]">{program.title}</h3>
                <p className="mt-3 text-[9px] leading-4 text-bazooka-text-secondary">{program.text}</p>
                <Link href={program.href} className="mt-5 inline-flex w-fit items-center gap-2 text-[9px] font-black uppercase text-bazooka-lime transition hover:text-bazooka-lime-hover">Explore Program <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" /></Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {highlights.map(([Icon, title, text], index) => (
            <motion.div key={String(title)} {...reveal} transition={{ duration: .45, delay: index * .05 }} className="group flex min-h-[96px] min-w-0 items-center gap-4 rounded-[5px] border border-bazooka-border-strong bg-bazooka-soft-black px-5 py-4 transition-all duration-300 hover:border-bazooka-lime/70">
              <span className="grid size-10 shrink-0 place-items-center rounded-full border border-bazooka-lime/50 bg-bazooka-lime/10 text-bazooka-lime transition-transform duration-300 group-hover:scale-105"><Icon className="size-5" /></span>
              <div className="min-w-0"><strong className="font-display block text-[14px] font-black uppercase">{title}</strong><small className="mt-1 block text-[8px] leading-4 text-bazooka-text-secondary">{text}</small></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
