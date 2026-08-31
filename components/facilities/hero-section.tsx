"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Dumbbell, Music2, ShieldCheck, Sparkles, UsersRound } from "lucide-react";
import { outlineButton, primaryButton, reveal, shell } from "./facilities-shared";

const stats = [
  [UsersRound, "25,000+", "Sq. Ft. Area"],
  [Dumbbell, "100+", "Premium Equipment"],
  [Sparkles, "20+", "Training Zones"],
  [ShieldCheck, "100%", "Hygienic & Safe"],
  [Music2, "Music", "High Energy Vibes"],
] as const;

export default function FacilitiesHeroSection() {
  return (
    <section className="border-b border-bazooka-border/70 bg-bazooka-black">
      <div className="relative min-h-[560px] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=90')] bg-cover bg-center grayscale" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/78 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/30" />

        <div className={`${shell} relative z-10 flex min-h-[560px] items-center py-14`}>
          <motion.div {...reveal} className="max-w-[660px]">
            <div className="mb-6 flex items-center gap-2 text-[9px] font-black uppercase">
              <Link href="/" className="text-white transition hover:text-bazooka-lime">Home</Link>
              <ChevronRight className="size-3 text-bazooka-lime" />
              <span className="text-bazooka-text-secondary">Facilities</span>
            </div>

            <span className="text-[10px] font-black uppercase tracking-[.04em] text-bazooka-lime">Premium Equipment. Premium Experience.</span>
            <h1 className="font-display mt-3 max-w-[720px] text-[58px] font-black uppercase leading-[.88] sm:text-[72px] lg:text-[82px]">
              Facilities
              <br />
              <span className="text-bazooka-lime">That Inspire.</span>
            </h1>
            <p className="mt-6 max-w-[520px] text-[12px] leading-6 text-bazooka-text-secondary">
              World-class equipment, modern amenities and a high-energy environment — everything you need to train smarter, recover better and live stronger.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/book-free-trial" className={primaryButton}>Book Free Trial <ArrowRight className="size-4" /></Link>
              <Link href="#facility-zones" className={outlineButton}>Take A Tour <ArrowRight className="size-4" /></Link>
            </div>
          </motion.div>
        </div>
      </div>

      <div className={`${shell} relative z-20 -mt-7 pb-8`}>
        <div className="grid overflow-hidden rounded-[5px] border border-bazooka-border-strong bg-bazooka-soft-black sm:grid-cols-2 lg:grid-cols-5">
          {stats.map(([Icon, value, label], index) => (
            <motion.div key={String(label)} {...reveal} transition={{ duration: .45, delay: index * .04 }} className="relative flex min-h-[92px] items-center justify-center gap-4 px-4 py-4">
              <Icon className="size-6 shrink-0 text-bazooka-lime" />
              <div>
                <strong className="font-display block text-[22px] font-black uppercase leading-none">{value}</strong>
                <small className="mt-1 block text-[7px] font-bold uppercase text-bazooka-text-secondary">{label}</small>
              </div>
              {index < stats.length - 1 && <span className="absolute right-0 top-1/2 hidden h-10 w-px -translate-y-1/2 bg-bazooka-border lg:block" />}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
