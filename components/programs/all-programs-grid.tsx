"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { programDetails } from "./program-data";
import { reveal, shell } from "./programs-shared";

const imageClasses: Record<string, string> = {
  "strength-training": "bg-[url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1100&q=90')]",
  "functional-training": "bg-[url('https://images.unsplash.com/photo-1534368420009-621bfab424a8?auto=format&fit=crop&w=1100&q=90')]",
  "cardio-endurance": "bg-[url('https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1100&q=90')]",
  "personal-training": "bg-[url('https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=1100&q=90')]",
  "transformation-program": "bg-[url('https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1100&q=90')]",
  "recovery-wellness": "bg-[url('https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1100&q=90')]",
  "fat-loss": "bg-[url('https://images.unsplash.com/photo-1581009137042-c552e485697a?auto=format&fit=crop&w=1100&q=90')]",
  "muscle-gain": "bg-[url('https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1100&q=90')]",
  "lean-fit": "bg-[url('https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=1100&q=90')]",
};

export default function AllProgramsGrid() {
  return (
    <section className="border-b border-bazooka-border/70 py-14 md:py-16">
      <div className={shell}>
        <motion.div {...reveal} className="grid gap-5 lg:grid-cols-[360px_1fr] lg:items-end">
          <div>
            <span className="text-[10px] font-black uppercase text-bazooka-lime">Complete Program Library</span>
            <h2 className="font-display mt-2 text-[38px] font-black uppercase leading-[.96] md:text-[46px]">Every Goal.<br /><span className="text-bazooka-lime">One Place.</span></h2>
          </div>
          <p className="max-w-[560px] text-[11px] leading-5 text-bazooka-text-secondary lg:justify-self-end">Explore every Bazooka program, compare the focus of each option and open the full details page to find the right fit for your goal.</p>
        </motion.div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {programDetails.map((program, index) => (
            <motion.article
              key={program.slug}
              {...reveal}
              transition={{ duration: .5, delay: index * .04 }}
              className={`group relative min-h-[280px] overflow-hidden rounded-[5px] border border-bazooka-border-strong bg-cover bg-center ${imageClasses[program.slug] ?? "bg-bazooka-surface"} transition-all duration-500 hover:-translate-y-1 hover:border-bazooka-lime hover:shadow-[0_0_26px_rgba(182,240,0,.08)]`}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/30 to-black/95" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <span className="text-[9px] font-black uppercase tracking-[.08em] text-bazooka-lime">{program.eyebrow}</span>
                <h3 className="font-display mt-2 text-[23px] font-black uppercase leading-[.95] text-white">{program.title}</h3>
                <p className="mt-3 max-w-[300px] text-[9px] leading-4 text-bazooka-text-secondary">{program.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2 text-[8px] uppercase text-bazooka-text-secondary">
                  <span className="rounded-[3px] border border-bazooka-border-strong bg-black/40 px-2.5 py-1.5">{program.duration}</span>
                  <span className="rounded-[3px] border border-bazooka-border-strong bg-black/40 px-2.5 py-1.5">{program.level}</span>
                </div>
                <Link href={`/programs/${program.slug}`} className="mt-5 inline-flex items-center gap-2 text-[9px] font-black uppercase text-bazooka-lime transition hover:text-bazooka-lime-hover">View Program <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" /></Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
