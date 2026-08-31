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
    <section className="grid border-b border-bazooka-border/70 bg-bazooka-soft-black lg:grid-cols-[38%_62%]">
      <motion.div {...reveal} className="min-h-[430px] bg-[url('https://images.unsplash.com/photo-1533681904393-9ab6eee7e408?auto=format&fit=crop&w=1300&q=90')] bg-cover bg-center" />
      <div className="flex items-center px-8 py-14 lg:px-14">
        <motion.div {...reveal} className="w-full max-w-[720px]">
          <span className="text-[10px] font-black uppercase text-bazooka-lime">Our Training Methodology</span>
          <h2 className="font-display mt-3 text-[38px] font-black uppercase leading-[.96]">Science. Strategy.<br /><span className="text-bazooka-lime">Stronger Results.</span></h2>
          <p className="mt-4 max-w-[590px] text-[11px] leading-5 text-bazooka-text-secondary">We blend proven training methods, expert guidance and advanced recovery to deliver sustainable results that go beyond the mirror.</p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {methods.map(([Icon, title, text], index) => (
              <motion.article key={title} {...reveal} transition={{ duration: .45, delay: index * .06 }} className="group rounded-[5px] border border-bazooka-border-strong bg-bazooka-surface p-4 transition hover:-translate-y-1 hover:border-bazooka-lime">
                <span className="grid size-9 place-items-center rounded-full border border-bazooka-lime text-bazooka-lime transition group-hover:bg-bazooka-lime group-hover:text-black"><Icon className="size-4" /></span>
                <h3 className="mt-4 text-[9px] font-black uppercase">{title}</h3>
                <p className="mt-3 text-[8px] leading-4 text-bazooka-text-secondary">{text}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
