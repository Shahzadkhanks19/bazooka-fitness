"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Dumbbell, HeartPulse, Zap } from "lucide-react";
import { outlineButton, reveal, shell } from "./home-shared";

const programs = [
  { title: "Strength Training", slug: "strength-training", text: "Build real strength and a powerful physique.", icon: Dumbbell, image: "bg-[url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=90')]" },
  { title: "Functional Training", slug: "functional-training", text: "Move better, perform better in everyday life.", icon: Zap, image: "bg-[url('https://images.unsplash.com/photo-1534368420009-621bfab424a8?auto=format&fit=crop&w=1200&q=90')]" },
  { title: "Personal Training", slug: "personal-training", text: "Guided by experts. Built around you.", icon: HeartPulse, image: "bg-[url('https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=90')]" },
];

export default function ProgramsSection() {
  return (
    <section className="border-b border-bazooka-border/70 py-16 sm:py-20">
      <div className={shell}>
        <motion.div {...reveal} className="text-center">
          <h2 className="font-display text-[32px] font-black uppercase sm:text-[34px]">Our Programs</h2>
          <p className="mt-1 text-[10px] font-extrabold text-bazooka-text-secondary"><span className="text-bazooka-lime">TRAIN SMART.</span> GO FURTHER.</p>
        </motion.div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.article key={program.title} {...reveal} transition={{ duration: 0.5, delay: index * 0.07 }} className={`group relative min-h-[300px] overflow-hidden rounded-[6px] border border-bazooka-border-strong bg-cover bg-center ${program.image} transition-all duration-500 hover:-translate-y-1 hover:border-bazooka-lime hover:shadow-[0_18px_42px_rgba(0,0,0,.28)] sm:min-h-[320px]`}>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/15 to-black/95" />
                <div className="absolute bottom-5 left-5 right-5 min-w-0">
                  <span className="grid size-12 place-items-center rounded-full border border-bazooka-lime bg-black/25 text-bazooka-lime transition group-hover:bg-bazooka-lime group-hover:text-black"><Icon className="size-5" /></span>
                  <h3 className="font-display mt-4 text-[21px] font-black uppercase sm:text-[22px]">{program.title}</h3>
                  <p className="mt-1 max-w-[220px] text-[10px] leading-4 text-bazooka-text-secondary">{program.text}</p>
                  <Link href={`/programs/${program.slug}`} className="mt-4 inline-flex min-h-10 items-center gap-2 text-[10px] font-black uppercase text-bazooka-lime transition hover:text-bazooka-lime-hover focus-visible:text-bazooka-lime-hover">Explore Program <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" /></Link>
                </div>
              </motion.article>
            );
          })}
        </div>
        <div className="mt-7 text-center"><Link href="/programs" className={`${outlineButton} h-10 w-full sm:w-auto`}>Explore All Programs <ArrowRight className="size-4" /></Link></div>
      </div>
    </section>
  );
}
