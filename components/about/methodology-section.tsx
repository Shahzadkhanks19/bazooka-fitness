"use client";

import { motion } from "framer-motion";
import { Activity, Dumbbell, Salad, ShieldCheck } from "lucide-react";
import { reveal } from "./about-shared";

const methods = [
  [Dumbbell, "SMART TRAINING", "Structured programs designed by experts for maximum results."],
  [Salad, "NUTRITION FOCUSED", "Personalized nutrition guidance to fuel your transformation."],
  [Activity, "RECOVERY FIRST", "Steam, recovery zones and programs that keep you injury-free."],
  [ShieldCheck, "TRACK & IMPROVE", "Regular assessments to track progress and keep you accountable."],
] as const;

export default function MethodologySection() {
  return (
    <section className="grid border-b border-bazooka-border/70 bg-bazooka-soft-black lg:grid-cols-[40%_60%]">
      <motion.div {...reveal} className="relative min-h-[300px] overflow-hidden bg-[url('https://images.unsplash.com/photo-1533681904393-9ab6eee7e408?auto=format&fit=crop&w=1300&q=90')] bg-cover bg-center sm:min-h-[380px] lg:min-h-[470px]">
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-black/5 lg:to-bazooka-soft-black/45" />
        <div className="absolute bottom-5 left-5 rounded-[5px] border border-white/10 bg-black/45 px-4 py-3 backdrop-blur-sm sm:bottom-7 sm:left-7">
          <span className="text-[8px] font-black uppercase tracking-[.12em] text-bazooka-lime">Built Around Progress</span>
          <strong className="font-display mt-1 block text-[20px] uppercase text-white sm:text-[24px]">Train With Purpose.</strong>
        </div>
      </motion.div>
      <div className="flex items-center px-5 py-12 sm:px-8 sm:py-14 lg:px-12 xl:px-14">
        <motion.div {...reveal} className="w-full max-w-[760px] min-w-0">
          <span className="text-[10px] font-black uppercase tracking-[.08em] text-bazooka-lime">Our Training Methodology</span>
          <h2 className="font-display mt-3 text-[34px] font-black uppercase leading-[.94] min-[380px]:text-[38px] sm:text-[42px]">Science. Strategy.<br /><span className="text-bazooka-lime">Stronger Results.</span></h2>
          <p className="mt-4 max-w-[610px] text-[10px] leading-5 text-bazooka-text-secondary sm:text-[11px]">We blend proven training methods, expert guidance and advanced recovery to deliver sustainable results that go beyond the mirror.</p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {methods.map(([Icon, title, text], index) => (
              <motion.article key={title} {...reveal} transition={{ duration: .45, delay: index * .06 }} className="group rounded-[6px] border border-bazooka-border-strong bg-bazooka-surface p-4 transition-all duration-300 hover:-translate-y-1 hover:border-bazooka-lime hover:bg-bazooka-card-hover active:scale-[.99]">
                <span className="grid size-10 place-items-center rounded-full border border-bazooka-lime text-bazooka-lime transition-all duration-300 group-hover:bg-bazooka-lime group-hover:text-black"><Icon className="size-4" /></span>
                <h3 className="mt-4 text-[9px] font-black uppercase tracking-[.03em]">{title}</h3>
                <p className="mt-3 text-[8px] leading-4 text-bazooka-text-secondary">{text}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
