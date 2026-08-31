"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { ProgramDetail } from "./program-data";
import { reveal, shell } from "./programs-shared";

export default function DetailProcessSection({ program }: { program: ProgramDetail }) {
  return (
    <section className="border-b border-bazooka-border/70 bg-bazooka-soft-black py-16">
      <div className={shell}>
        <motion.div {...reveal} className="max-w-[720px]">
          <span className="text-[10px] font-black uppercase text-bazooka-lime">How It Works</span>
          <h2 className="font-display mt-3 text-[38px] font-black uppercase leading-[.95] sm:text-[46px]">Simple System. <span className="text-bazooka-lime">Serious Results.</span></h2>
        </motion.div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {program.steps.map((step, index) => (
            <motion.article key={step.title} {...reveal} transition={{ duration: .5, delay: index * .06 }} className="group relative overflow-hidden rounded-[5px] border border-bazooka-border-strong bg-bazooka-surface px-6 py-7 transition-all duration-300 hover:-translate-y-1 hover:border-bazooka-lime">
              <span className="font-display text-[52px] font-black leading-none text-bazooka-lime/20">0{index + 1}</span>
              <h3 className="font-display mt-5 text-[24px] font-black uppercase">{step.title}</h3>
              <p className="mt-3 max-w-[320px] text-[10px] leading-5 text-bazooka-text-secondary">{step.text}</p>
              {index < program.steps.length - 1 && <ArrowRight className="absolute right-5 top-6 hidden size-5 text-bazooka-lime/45 lg:block" />}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
