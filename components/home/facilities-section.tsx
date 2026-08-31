"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Dumbbell, Flame, HeartPulse } from "lucide-react";
import { outlineButton, reveal, shell } from "./home-shared";

const facilities = [
  { title: "Strength Floor", icon: Dumbbell, image: "bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=90')]" },
  { title: "Cardio Zone", icon: HeartPulse, image: "bg-[url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1000&q=90')]" },
  { title: "Steam & Shower", icon: Flame, image: "bg-[url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=90')]" },
];

export default function FacilitiesSection() {
  return (
    <section className="border-b border-bazooka-border/70 bg-bazooka-soft-black py-16">
      <div className={`${shell} grid gap-8 lg:grid-cols-[260px_1fr] lg:items-center`}>
        <motion.div {...reveal}>
          <h2 className="font-display text-[38px] font-black uppercase leading-[.95]">World-Class<br /><span className="text-bazooka-lime">Facilities</span></h2>
          <p className="mt-4 max-w-[230px] text-[11px] leading-5 text-bazooka-text-secondary">Premium equipment, dedicated zones and a clean, motivating environment to train your best.</p>
          <Link href="/facilities" className={`${outlineButton} mt-6 border-bazooka-lime/70`}>Explore Our Gym <ArrowRight className="size-4" /></Link>
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-3">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <motion.article key={facility.title} {...reveal} transition={{ duration: 0.5, delay: index * 0.07 }} className={`group relative min-h-[220px] overflow-hidden rounded-[6px] border border-bazooka-border-strong bg-cover bg-center ${facility.image} transition hover:border-bazooka-lime`}>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90" />
                <div className="absolute bottom-5 left-5 flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-[5px] border border-bazooka-lime bg-black/30 text-bazooka-lime"><Icon className="size-5" /></span>
                  <h3 className="font-display text-[17px] font-black uppercase">{facility.title}</h3>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
