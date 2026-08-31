"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Award, Dumbbell, TimerReset } from "lucide-react";
import { useMemo, useState } from "react";
import { trainers } from "./trainer-data";
import { reveal, shell } from "./trainers-shared";

const filters = ["All", "Strength", "Transformation", "Nutrition", "Yoga"] as const;
type Filter = (typeof filters)[number];

export default function TrainersGridSection() {
  const [active, setActive] = useState<Filter>("All");
  const visible = useMemo(() => active === "All" ? trainers : trainers.filter((trainer) => trainer.category === active), [active]);

  return (
    <section className="border-b border-bazooka-border/70 bg-bazooka-black py-14 md:py-16">
      <div className={shell}>
        <div className="grid gap-4 rounded-[5px] border border-bazooka-border-strong bg-bazooka-surface px-5 py-5 sm:grid-cols-2 lg:grid-cols-5">
          {[["12+","Expert Trainers"],["50+","Specializations"],["Years","Combined Experience"],["1000+","Transformations"],["1 Goal","Your Progress"]].map(([value,label]) => <div key={label} className="text-center"><strong className="font-display text-[24px] font-black">{value}</strong><span className="mt-1 block text-[8px] uppercase text-bazooka-text-secondary">{label}</span></div>)}
        </div>

        <div className="mt-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div><span className="text-[10px] font-black uppercase text-bazooka-lime">Meet Our Experts</span><h2 className="font-display mt-2 text-[40px] font-black uppercase leading-none sm:text-[48px]">Meet Our <span className="text-bazooka-lime">Experts</span></h2></div>
          <div className="flex flex-wrap gap-2">{filters.map((filter) => <button key={filter} type="button" onClick={() => setActive(filter)} className={`h-9 rounded-[4px] border px-4 text-[8px] font-black uppercase transition ${active === filter ? "border-bazooka-lime bg-bazooka-lime text-black" : "border-bazooka-border-strong bg-bazooka-surface text-white hover:border-bazooka-lime hover:text-bazooka-lime"}`}>{filter}</button>)}</div>
        </div>

        <motion.div layout className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {visible.map((trainer, index) => <motion.article layout key={trainer.slug} {...reveal} transition={{ duration: .45, delay: index * .04 }} className="overflow-hidden rounded-[5px] border border-bazooka-border-strong bg-bazooka-surface transition hover:-translate-y-1 hover:border-bazooka-lime">
            <div className="min-h-[260px] bg-cover bg-center grayscale" style={{ backgroundImage: `url(${trainer.image})` }} />
            <div className="p-4"><h3 className="font-display text-[19px] font-black uppercase">{trainer.name}</h3><p className="mt-1 text-[9px] font-black uppercase text-bazooka-lime">{trainer.role}</p><div className="mt-4 space-y-2 text-[8px] text-bazooka-text-secondary"><p className="flex gap-2"><Dumbbell className="size-3.5 text-bazooka-lime" />{trainer.specialties[0]}</p><p className="flex gap-2"><Award className="size-3.5 text-bazooka-lime" />{trainer.specialties[1]}</p><p className="flex gap-2"><TimerReset className="size-3.5 text-bazooka-lime" />{trainer.experience} Exp.</p></div><Link href={`/trainers/${trainer.slug}`} className="mt-5 inline-flex h-9 w-full items-center justify-center gap-2 rounded-[4px] border border-bazooka-border-strong text-[8px] font-black uppercase transition hover:border-bazooka-lime hover:text-bazooka-lime">View Profile <ArrowRight className="size-3.5" /></Link></div>
          </motion.article>)}
        </motion.div>
      </div>
    </section>
  );
}
