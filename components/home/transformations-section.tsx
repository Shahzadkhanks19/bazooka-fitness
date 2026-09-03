"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Dumbbell, Route, Target } from "lucide-react";
import { outlineButton, reveal, shell } from "./home-shared";

const journeyPoints = [
  [Target, "Choose A Goal", "Start with a clear training direction."],
  [Dumbbell, "Train With Structure", "Build a routine around consistent work."],
  [Route, "Track Progress", "Review your journey and keep moving forward."],
] as const;

export default function TransformationsSection() {
  return (
    <section className="border-b border-bazooka-border/70 py-14 sm:py-16">
      <div className={`${shell} grid gap-7 lg:grid-cols-[270px_1fr] lg:items-center lg:gap-10`}>
        <motion.div {...reveal} className="min-w-0">
          <span className="text-[8px] font-black uppercase tracking-[.14em] text-bazooka-lime">Build Your Journey</span>
          <h2 className="font-display mt-2 text-[34px] font-black uppercase leading-[.95] sm:text-[39px]">Progress Starts<br /><span className="text-bazooka-lime">With A Plan.</span></h2>
          <p className="mt-4 max-w-[300px] text-[9px] leading-5 text-bazooka-text-secondary">Explore training goals and the approach behind building consistent, measurable progress at Bazooka Fitness.</p>
          <Link href="/transformations" className={`${outlineButton} mt-6 w-full border-bazooka-lime/70 sm:w-auto`}>Explore Progress Paths <ArrowRight className="size-4" /></Link>
        </motion.div>

        <motion.div {...reveal} className="relative overflow-hidden rounded-[6px] border border-bazooka-border-strong bg-bazooka-surface">
          <div className="grid min-h-[230px] lg:grid-cols-[1.15fr_.85fr]">
            <div className="relative min-h-[250px] overflow-hidden bg-[url('https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1000&q=90')] bg-cover bg-center sm:min-h-[290px]">
              <div className="absolute inset-0 bg-gradient-to-r from-black/15 via-black/20 to-black/80" />
              <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6">
                <span className="inline-flex rounded-full border border-white/15 bg-black/55 px-3 py-1.5 text-[8px] font-black uppercase tracking-[.1em] text-white backdrop-blur-sm">Training Focus</span>
                <strong className="font-display mt-3 block max-w-[330px] text-[24px] font-black uppercase leading-[.95] text-white sm:text-[29px]">Consistency Before Claims.</strong>
              </div>
            </div>

            <div className="grid gap-px bg-bazooka-border/70 sm:grid-cols-3 lg:grid-cols-1">
              {journeyPoints.map(([Icon, title, text]) => (
                <div key={title} className="group bg-bazooka-soft-black p-5 transition-colors duration-300 hover:bg-bazooka-surface sm:p-6">
                  <span className="grid size-10 place-items-center rounded-full border border-bazooka-lime/30 bg-bazooka-lime/5 text-bazooka-lime transition-transform duration-300 group-hover:scale-105"><Icon className="size-[17px]" /></span>
                  <strong className="font-display mt-4 block text-[15px] font-black uppercase text-white">{title}</strong>
                  <span className="mt-2 block text-[8px] leading-4 text-bazooka-text-secondary">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
