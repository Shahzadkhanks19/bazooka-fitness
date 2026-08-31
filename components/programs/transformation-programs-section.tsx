"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Award, Dumbbell, Star, Users } from "lucide-react";
import { reveal, shell } from "./programs-shared";

const transformationPrograms = [
  { title: "Fat Loss Program", text: "Burn fat, build lean muscle and achieve a shredded physique.", href: "/programs/fat-loss", image: "bg-[url('https://images.unsplash.com/photo-1581009137042-c552e485697a?auto=format&fit=crop&w=1000&q=90')]" },
  { title: "Muscle Gain Program", text: "Build size, strength and power with structured progression.", href: "/programs/muscle-gain", image: "bg-[url('https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1000&q=90')]" },
  { title: "Lean & Fit Program", text: "Tone your body, improve fitness and feel your absolute best.", href: "/programs/lean-fit", image: "bg-[url('https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=1000&q=90')]" },
] as const;

const stats = [
  [Users, "500+", "Happy Members"],
  [Dumbbell, "3+", "Training Zones"],
  [Award, "20+", "Expert Trainers"],
  [Star, "100%", "Commitment"],
] as const;

export default function TransformationProgramsSection() {
  return (
    <section id="transformation-programs" className="scroll-mt-24 border-b border-bazooka-border/70 py-14">
      <div className={shell}>
        <motion.div {...reveal} className="grid gap-5 lg:grid-cols-[340px_1fr] lg:items-end">
          <div>
            <span className="text-[10px] font-black uppercase text-bazooka-lime">Transformation Programs</span>
            <h2 className="font-display mt-2 text-[34px] font-black uppercase">Real People. Real Results.</h2>
          </div>
          <p className="max-w-[520px] text-[11px] leading-5 text-bazooka-text-secondary lg:justify-self-end">Specialized programs to help you transform your body, mind and lifestyle.</p>
        </motion.div>

        <div className="mt-7 grid gap-4 lg:grid-cols-3">
          {transformationPrograms.map((program, index) => (
            <motion.article key={program.title} {...reveal} transition={{ duration: .5, delay: index * .06 }} className="grid min-h-[176px] overflow-hidden rounded-[5px] border border-bazooka-border-strong bg-bazooka-surface sm:grid-cols-[42%_58%] transition hover:border-bazooka-lime">
              <div className={`${program.image} min-h-[176px] bg-cover bg-center grayscale`} />
              <div className="flex flex-col justify-center p-5">
                <h3 className="font-display text-[20px] font-black uppercase leading-none">{program.title}</h3>
                <p className="mt-3 text-[9px] leading-4 text-bazooka-text-secondary">{program.text}</p>
                <Link href={program.href} className="mt-4 inline-flex items-center gap-2 text-[9px] font-black uppercase text-bazooka-lime">Learn More <ArrowRight className="size-3.5" /></Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-6 grid overflow-hidden rounded-[5px] border border-bazooka-border-strong bg-bazooka-soft-black sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([Icon, value, label], index) => (
            <motion.div key={String(label)} {...reveal} transition={{ duration: .45, delay: index * .05 }} className="relative flex min-h-[84px] items-center justify-center gap-4 px-5">
              <Icon className="size-6 text-bazooka-lime" />
              <div><strong className="font-display block text-[24px] leading-none">{value}</strong><small className="mt-1 block text-[8px] uppercase text-bazooka-text-secondary">{label}</small></div>
              {index < stats.length - 1 && <span className="absolute right-0 top-1/2 hidden h-10 w-px -translate-y-1/2 bg-bazooka-border lg:block" />}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
