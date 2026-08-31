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
    <section className="border-b border-bazooka-border/70 bg-bazooka-black py-14">
      <div className={`${shell} grid gap-8 lg:grid-cols-[260px_1fr] lg:items-center`}>
        <motion.div {...reveal}>
          <span className="text-[10px] font-black uppercase text-bazooka-lime">Meet The Founders</span>
          <h2 className="font-display mt-3 text-[36px] font-black uppercase leading-[.95]">The Minds Behind<br /><span className="text-bazooka-lime">The Movement.</span></h2>
          <p className="mt-4 max-w-[250px] text-[10px] leading-5 text-bazooka-text-secondary">Bazooka was founded by fitness professionals with a mission to create a world-class training culture in Jodhpur.</p>
          <Link href="/trainers" className={`${outlineButton} mt-6 h-10`}>Meet Our Experts <ArrowRight className="size-4" /></Link>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          {founders.map((founder, index) => (
            <motion.article key={founder.name} {...reveal} transition={{ duration: .5, delay: index * .08 }} className="grid overflow-hidden rounded-[5px] border border-bazooka-border-strong bg-bazooka-surface sm:min-h-[240px] sm:grid-cols-[42%_58%]">
              <div className={`${founder.image} aspect-[4/3] bg-cover bg-center grayscale sm:aspect-auto`} />
              <div className="flex flex-col justify-center p-6">
                <h3 className="font-display text-[20px] font-black uppercase">{founder.name}</h3>
                <span className="mt-1 text-[8px] font-black uppercase text-bazooka-lime">{founder.role}</span>
                <p className="mt-4 text-[9px] leading-4 text-bazooka-text-secondary">{founder.copy}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
