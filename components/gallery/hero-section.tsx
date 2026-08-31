"use client";

import { motion } from "framer-motion";
import { Images, PlaySquare, UsersRound } from "lucide-react";
import { reveal, shell } from "./gallery-shared";

const stats = [
  [Images, "500+", "Photos"],
  [PlaySquare, "100+", "Videos"],
  [UsersRound, "50K+", "Members"],
] as const;

export default function GalleryHeroSection() {
  return (
    <section className="relative min-h-[540px] overflow-hidden border-b border-bazooka-border/70 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=90')] bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/25" />
      <div className={`${shell} relative z-10 flex min-h-[540px] items-center py-14`}>
        <motion.div {...reveal} className="max-w-[520px]">
          <div className="text-[9px] font-bold uppercase text-bazooka-text-secondary">Home <span className="mx-2 text-bazooka-lime">›</span> Gallery</div>
          <h1 className="font-display mt-7 text-[54px] font-black uppercase leading-[.88] sm:text-[68px] lg:text-[78px]">
            Train Hard.
            <br />
            <span className="text-bazooka-lime">Live Inspired.</span>
          </h1>
          <span className="mt-5 block h-0.5 w-10 bg-bazooka-lime" />
          <p className="mt-4 max-w-[360px] text-[12px] leading-6 text-bazooka-text-secondary">
            Moments of passion, dedication and progress — captured at Bazooka.
          </p>

          <div className="mt-8 flex flex-wrap gap-8">
            {stats.map(([Icon, value, label]) => (
              <div key={label} className="flex items-center gap-3">
                <Icon className="size-7 text-bazooka-lime" />
                <div>
                  <strong className="font-display block text-[24px] font-black leading-none">{value}</strong>
                  <span className="mt-1 block text-[8px] font-bold uppercase text-bazooka-text-secondary">{label}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
