"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { outlineButton, primaryButton, reveal, shell } from "./gallery-shared";

export default function GalleryHeroSection() {
  return (
    <section className="border-b border-bazooka-border/70 bg-bazooka-black">
      <div className={`${shell} grid min-h-[380px] overflow-hidden lg:grid-cols-[.7fr_1.3fr]`}>
        <motion.div {...reveal} className="relative z-10 flex flex-col justify-center py-10 lg:pr-8">
          <div className="text-[9px] font-bold uppercase text-bazooka-text-secondary">
            Home <span className="mx-2 text-bazooka-lime">›</span> Gallery
          </div>
          <h1 className="font-display mt-7 text-[48px] font-black uppercase leading-[.9] sm:text-[62px]">
            Moments That
            <br />
            <span className="text-bazooka-lime">Motivate.</span>
          </h1>
          <p className="mt-5 max-w-[360px] text-[11px] leading-5 text-bazooka-text-secondary">
            A glimpse of the energy, dedication and community that defines Bazooka Fitness.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/transformations" className={primaryButton}>View Transformations <ArrowRight className="size-4" /></Link>
            <Link href="/memberships" className={outlineButton}>Join Bazooka <ArrowRight className="size-4" /></Link>
          </div>
        </motion.div>

        <motion.div
          {...reveal}
          className="relative min-h-[340px] bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=90')] bg-cover bg-center lg:min-h-full"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/15 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />
        </motion.div>
      </div>
    </section>
  );
}
