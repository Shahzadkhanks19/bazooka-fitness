"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Award, Dumbbell, TimerReset } from "lucide-react";
import { useMemo, useState } from "react";
import { trainers } from "./trainer-data";
import { reveal, shell } from "./trainers-shared";

const filters = ["All", "Strength", "Transformation", "Nutrition", "Conditioning"] as const;
type Filter = (typeof filters)[number];

export default function TrainersGridSection() {
  const [active, setActive] = useState<Filter>("All");
  const visible = useMemo(() => active === "All" ? trainers : trainers.filter((trainer) => trainer.category === active), [active]);

  return (
    <section className="border-b border-bazooka-border/70 bg-bazooka-black py-14 sm:py-16">
      <div className={shell}>
        <motion.div {...reveal} className="grid gap-5 lg:grid-cols-[420px_1fr] lg:items-end">
          <div className="min-w-0">
            <span className="text-[10px] font-black uppercase text-bazooka-lime">Meet Our Coaches</span>
            <h2 className="font-display mt-2 max-w-full text-[32px] font-black uppercase leading-[.94] min-[380px]:text-[36px] sm:text-[46px]">Find The Coach For <span className="text-bazooka-lime">Your Goal.</span></h2>
            <span className="mt-3 block h-[2px] w-8 bg-bazooka-lime" />
          </div>
          <p className="max-w-[560px] text-[10px] leading-5 text-bazooka-text-secondary sm:text-[11px] lg:justify-self-end">Explore the coaching profiles currently listed at Bazooka and choose the training style that best matches what you want to work on.</p>
        </motion.div>

        <div className="mt-7 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:flex-wrap sm:overflow-visible sm:pb-0">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              aria-pressed={active === filter}
              className={`h-10 shrink-0 rounded-[4px] border px-4 text-[8px] font-black uppercase transition-all duration-200 active:scale-[.97] ${active === filter ? "border-bazooka-lime bg-bazooka-lime text-black" : "border-bazooka-border-strong bg-bazooka-surface text-white hover:border-bazooka-lime hover:text-bazooka-lime"}`}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {visible.map((trainer, index) => (
            <motion.article
              layout
              key={trainer.slug}
              {...reveal}
              transition={{ duration: .45, delay: index * .04 }}
              className="group min-w-0 overflow-hidden rounded-[6px] border border-bazooka-border-strong bg-bazooka-surface transition-all duration-300 hover:-translate-y-1 hover:border-bazooka-lime"
            >
              <Link href={`/trainers/${trainer.slug}`} className="block">
                <div className="relative min-h-[275px] bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.025]" style={{ backgroundImage: `url(${trainer.image})` }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 rounded-[3px] border border-white/15 bg-black/55 px-2.5 py-1.5 text-[7px] font-black uppercase text-white backdrop-blur-sm">{trainer.category}</span>
                </div>
              </Link>
              <div className="p-4 sm:p-5">
                <h3 className="font-display text-[19px] font-black uppercase leading-none">{trainer.name}</h3>
                <p className="mt-2 text-[9px] font-black uppercase text-bazooka-lime">{trainer.role}</p>
                <div className="mt-4 space-y-2.5 text-[8px] leading-4 text-bazooka-text-secondary">
                  <p className="flex items-start gap-2"><Dumbbell className="mt-0.5 size-3.5 shrink-0 text-bazooka-lime" /><span>{trainer.specialties[0]}</span></p>
                  <p className="flex items-start gap-2"><Award className="mt-0.5 size-3.5 shrink-0 text-bazooka-lime" /><span>{trainer.specialties[1]}</span></p>
                  <p className="flex items-start gap-2"><TimerReset className="mt-0.5 size-3.5 shrink-0 text-bazooka-lime" /><span>{trainer.experience} experience</span></p>
                </div>
                <Link href={`/trainers/${trainer.slug}`} className="mt-5 inline-flex h-10 w-full items-center justify-center gap-2 rounded-[4px] border border-bazooka-border-strong text-[8px] font-black uppercase transition-all duration-200 hover:border-bazooka-lime hover:bg-bazooka-lime/10 hover:text-bazooka-lime active:scale-[.98]">View Profile <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" /></Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {visible.length === 0 && <div className="mt-8 rounded-[6px] border border-bazooka-border-strong bg-bazooka-surface p-8 text-center text-[10px] text-bazooka-text-secondary">No trainer profiles are listed in this category yet.</div>}
      </div>
    </section>
  );
}
