"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { outlineButton, reveal, shell } from "./about-shared";

const founders = [
  {
    name: "Kunal Rathore",
    role: "Co-Founder & Head Coach",
    copy: "Certified strength coach with 10+ years of experience in transforming lives through science-backed training.",
    image: "bg-[url('https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=900&q=90')]",
  },
  {
    name: "Vikram Singh",
    role: "Co-Founder",
    copy: "Fitness entrepreneur and performance specialist passionate about building stronger communities.",
    image: "bg-[url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=900&q=90')]",
  },
] as const;

export default function FoundersSection() {
  return (
    <section className="border-b border-bazooka-border/70 bg-bazooka-black py-14 sm:py-16">
      <div className={`${shell} grid gap-9 lg:grid-cols-[275px_1fr] lg:items-center lg:gap-12`}>
        <motion.div {...reveal} className="min-w-0">
          <span className="text-[9px] font-black uppercase tracking-[.08em] text-bazooka-lime sm:text-[10px]">Meet The Founders</span>
          <h2 className="font-display mt-3 text-[34px] font-black uppercase leading-[.94] sm:text-[39px]">The Minds Behind<br /><span className="text-bazooka-lime">The Movement.</span></h2>
          <p className="mt-4 max-w-[310px] text-[10px] leading-5 text-bazooka-text-secondary sm:text-[11px]">Bazooka was founded by fitness professionals with a mission to create a world-class training culture in Jodhpur.</p>
          <Link href="/trainers" className={`${outlineButton} mt-6 w-full sm:w-fit`}>Meet Our Experts <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" /></Link>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          {founders.map((founder, index) => (
            <motion.article
              key={founder.name}
              {...reveal}
              transition={{ duration: .5, delay: index * .08 }}
              className="group grid overflow-hidden rounded-[6px] border border-bazooka-border-strong bg-bazooka-surface transition-all duration-300 hover:-translate-y-1 hover:border-bazooka-lime sm:min-h-[260px] sm:grid-cols-[44%_56%]"
            >
              <div className={`${founder.image} relative aspect-[4/3] bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.025] sm:aspect-auto`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent sm:bg-gradient-to-r sm:from-transparent sm:to-black/12" />
              </div>
              <div className="flex flex-col justify-center p-5 sm:p-6">
                <span className="mb-3 h-0.5 w-9 bg-bazooka-lime" />
                <h3 className="font-display text-[20px] font-black uppercase sm:text-[22px]">{founder.name}</h3>
                <span className="mt-1 text-[8px] font-black uppercase tracking-[.04em] text-bazooka-lime">{founder.role}</span>
                <p className="mt-4 text-[9px] leading-[1.75] text-bazooka-text-secondary sm:text-[10px]">{founder.copy}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
