"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, Dumbbell, Sparkles, Users } from "lucide-react";
import { outlineButton, primaryButton, reveal, shell } from "./home-shared";

const benefits = [
  [Check, "No commitments", "Just show up"],
  [Dumbbell, "Expert guidance", "From day one"],
  [Users, "Feel the community", "Train together"],
  [Sparkles, "Start your", "transformation"],
] as const;

export default function TrialCtaSection() {
  return (
    <section className="relative overflow-hidden border-b border-bazooka-border/70 py-16">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1900&q=90')] bg-cover bg-center grayscale" />
      <div className="absolute inset-0 bg-black/72" />
      <motion.div {...reveal} className={`${shell} relative flex flex-col gap-10 md:flex-row md:items-center md:justify-between`}>
        <div className="md:pl-[220px]">
          <h2 className="font-display text-[38px] font-black uppercase leading-[.96]">Your First<br /><span className="text-bazooka-lime">Workout Is On Us.</span></h2>
          <div className="mt-6 grid grid-cols-2 gap-5 text-[9px] text-bazooka-text-secondary sm:grid-cols-4">
            {benefits.map(([Icon, title, subtitle]) => (
              <span key={title} className="flex gap-2"><Icon className="size-4 shrink-0 text-bazooka-lime" /><span><b className="block text-white">{title}</b><small>{subtitle}</small></span></span>
            ))}
          </div>
        </div>
        <div className="flex min-w-[205px] flex-col gap-3">
          <Link href="/book-free-trial" className={primaryButton}>Book Free Trial <ArrowRight className="size-4" /></Link>
          <Link href="/memberships" className={outlineButton}>Join Bazooka <ArrowRight className="size-4" /></Link>
        </div>
      </motion.div>
    </section>
  );
}
