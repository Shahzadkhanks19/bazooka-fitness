"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Activity, ArrowRight, Dumbbell, HeartPulse, Leaf, Target, UserRound } from "lucide-react";
import { outlineButton, reveal, shell } from "./programs-shared";

const programs = [
  { title: "Strength Training", text: "Build strength through progressive, structured resistance training.", icon: Dumbbell, href: "/programs/strength-training", image: "bg-[url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1100&q=90')]" },
  { title: "Functional Training", text: "Improve movement, stability and everyday physical performance.", icon: Activity, href: "/programs/functional-training", image: "bg-[url('https://images.unsplash.com/photo-1534368420009-621bfab424a8?auto=format&fit=crop&w=1100&q=90')]" },
  { title: "Cardio & Endurance", text: "Improve stamina, conditioning and cardiovascular fitness.", icon: HeartPulse, href: "/programs/cardio-endurance", image: "bg-[url('https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1100&q=90')]" },
  { title: "Personal Training", text: "Get one-to-one coaching built around your individual goals.", icon: UserRound, href: "/programs/personal-training", image: "bg-[url('https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=1100&q=90')]" },
  { title: "Transformation Program", text: "Follow a structured approach to fitness, strength and body composition goals.", icon: Target, href: "/programs/transformation-program", image: "bg-[url('https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1100&q=90')]" },
  { title: "Recovery & Wellness", text: "Support training with mobility, recovery and wellness-focused sessions.", icon: Leaf, href: "/programs/recovery-wellness", image: "bg-[url('https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1100&q=90')]" },
] as const;

export default function ProgramGridSection() {
  return (
    <section className="border-b border-bazooka-border/70 py-14 sm:py-16">
      <div className={shell}>
        <motion.div {...reveal} className="grid gap-6 lg:grid-cols-[320px_1fr] lg:items-end">
          <div className="min-w-0">
            <span className="text-[10px] font-black uppercase text-bazooka-lime">Our Programs</span>
            <h2 className="font-display mt-2 max-w-full text-[34px] font-black uppercase leading-[.95] min-[380px]:text-[38px] sm:text-[42px]">Train Smart.<br /><span className="text-bazooka-lime">Go Further.</span></h2>
            <span className="mt-3 block h-[2px] w-8 bg-bazooka-lime" />
          </div>
          <p className="max-w-[560px] justify-self-start text-[10px] leading-5 text-bazooka-text-secondary sm:text-[11px] lg:justify-self-end">Choose a training path based on what you want to improve. Each program has its own focus, structure and detailed page.</p>
        </motion.div>

        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.article key={program.title} {...reveal} transition={{ duration: .5, delay: index * .05 }} className={`group relative min-h-[270px] min-w-0 overflow-hidden rounded-[6px] border border-bazooka-border-strong bg-cover bg-center ${program.image} transition-all duration-500 hover:-translate-y-1 hover:border-bazooka-lime`}>
                <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/20 to-black/95" />
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <span className="grid size-11 place-items-center rounded-full border border-bazooka-lime bg-black/45 text-bazooka-lime transition-all duration-300 group-hover:bg-bazooka-lime group-hover:text-black"><Icon className="size-5" /></span>
                  <h3 className="font-display mt-4 text-[20px] font-black uppercase leading-none sm:text-[22px]">{program.title}</h3>
                  <p className="mt-2 max-w-[280px] text-[9px] leading-4 text-bazooka-text-secondary">{program.text}</p>
                  <Link href={program.href} className="mt-4 inline-flex items-center gap-2 text-[9px] font-black uppercase text-bazooka-lime transition hover:text-bazooka-lime-hover">Explore Program <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" /></Link>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-6 flex justify-center"><Link href="/programs/all" className={`${outlineButton} h-10 w-full sm:w-auto`}>View All Programs <ArrowRight className="size-4" /></Link></div>
      </div>
    </section>
  );
}
