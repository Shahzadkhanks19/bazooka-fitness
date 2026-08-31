"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Dumbbell, ShieldCheck, UsersRound } from "lucide-react";
import { primaryButton, reveal, shell } from "./gallery-shared";

const points = [
  [UsersRound, "Expert Trainers"],
  [Dumbbell, "Premium Equipment"],
  [ShieldCheck, "Supportive Community"],
] as const;

export default function GalleryFinalCtaSection() {
  return (
    <section className="border-b border-bazooka-border/70 bg-bazooka-black py-4 md:pb-8">
      <div className={shell}>
        <motion.div {...reveal} className="grid gap-6 rounded-[5px] border border-bazooka-border-strong bg-bazooka-surface px-6 py-6 lg:grid-cols-[1.15fr_1fr_auto] lg:items-center">
          <div>
            <h2 className="font-display text-[28px] font-black uppercase leading-[.95] text-white">Be Part Of The Energy.<br /><span className="text-bazooka-lime">Be Part Of Bazooka.</span></h2>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {points.map(([Icon, label]) => (
              <div key={label} className="text-center">
                <Icon className="mx-auto size-5 text-bazooka-lime" />
                <span className="mt-2 block text-[7px] text-bazooka-text-secondary">{label}</span>
              </div>
            ))}
          </div>
          <div className="lg:text-right">
            <Link href="/book-free-trial" className={primaryButton}>Book Your Free Trial <ArrowRight className="size-4" /></Link>
            <p className="mt-2 text-[7px] text-bazooka-text-secondary">Your strongest version starts here.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
