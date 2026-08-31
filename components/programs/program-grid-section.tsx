"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Activity, ArrowRight, Dumbbell, HeartPulse, Leaf, Target, UserRound } from "lucide-react";
import { outlineButton, reveal, shell } from "./programs-shared";

const programs = [
  { title: "Strength Training", text: "Build real strength with progressive training and proven methods.", icon: Dumbbell, href: "/programs/strength-training", image: "bg-[url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1100&q=90')]" },
  { title: "Functional Training", text: "Improve movement, stability and performance for everyday life.", icon: Activity, href: "/programs/functional-training", image: "bg-[url('https://images.unsplash.com/photo-1534368420009-621bfab424a8?auto=format&fit=crop&w=1100&q=90')]" },
  { title: "Cardio & Endurance", text: "Boost stamina, burn fat and elevate your cardiovascular fitness.", icon: HeartPulse, href: "/programs/cardio-endurance", image: "bg-[url('https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1100&q=90')]" },
  { title: "Personal Training", text: "1-on-1 coaching tailored to your goals with expert guidance.", icon: UserRound, href: "/programs/personal-training", image: "bg-[url('https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=1100&q=90')]" },
  { title: "Transformation Program", text: "Complete program for body transformation and lifestyle change.", icon: Target, href: "/programs/transformation-program", image: "bg-[url('https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1100&q=90')]" },
  { title: "Recovery & Wellness", text: "Recover better with steam, mobility work and wellness therapies.", icon: Leaf, href: "/programs/recovery-wellness", image: "bg-[url('https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1100&q=90')]" },
] as const;

export default function ProgramGridSection() {
  return (
    <section className="border-b border-bazooka-border/70 py-16">
      <div className={shell}>
        <motion.div {...reveal} className="grid gap-6 lg:grid-cols-[300px_1fr] lg:items-end">
          <div>
            <span className="text-[10px] font-black uppercase text-bazooka-lime">Our Programs</span>
            <h2 className="font-display mt-2 text-[38px] font-black uppercase leading-[.96]">Train Smart.<br /><span className="text-bazooka-lime">Go Further.</span></h2>
            <span className="mt-3 block h-[2px] w-8 bg-bazooka-lime" />
          </div>
          <p className="max-w-[540px] justify-self-start text-[11px] leading-5 text-bazooka-text-secondary lg:justify-self-end">Expert-led programs designed for every goal and fitness level.<br />Choose your path. We’ll guide you to the finish line.</p>
        </motion.div>

        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.article key={program.title} {...reveal} transition={{ duration: .5, delay: index * .05 }} className={`group relative min-h-[245px] overflow-hidden rounded-[5px] border border-bazooka-border-strong bg-cover bg-center ${program.image} transition-all duration-500 hover:-translate-y-1 hover:border-bazooka-lime`}>
                <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/20 to-black/95" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="grid size-11 place-items-center rounded-full border border-bazooka-lime bg-black/45 text-bazooka-lime transition group-hover:bg-bazooka-lime group-hover:text-black"><Icon className="size-5" /></span>
                  <h3 className="font-display mt-4 text-[21px] font-black uppercase leading-none">{program.title}</h3>
                  <p className="mt-2 max-w-[260px] text-[9px] leading-4 text-bazooka-text-secondary">{program.text}</p>
                  <Link href={program.href} className="mt-4 inline-flex items-center gap-2 text-[9px] font-black uppercase text-bazooka-lime transition hover:text-bazooka-lime-hover">Learn More <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" /></Link>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-6 flex justify-center"><Link href="/programs" className={`${outlineButton} h-10`}>View All Programs <ArrowRight className="size-4" /></Link></div>
      </div>
    </section>
  );
}
