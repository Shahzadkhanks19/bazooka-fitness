"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, Dumbbell, Sparkles } from "lucide-react";
import { outlineButton, primaryButton, reveal, shell } from "./memberships-shared";

const benefits = [
  [Dumbbell, "Explore the training floor"],
  [BadgeCheck, "Speak with the Bazooka team"],
  [Sparkles, "Compare membership options"],
] as const;

export default function MembershipCtaSection() {
  return (
    <section className="border-b border-bazooka-border/70 bg-bazooka-black py-12 sm:py-14">
      <div className={shell}>
        <motion.div {...reveal} className="group relative overflow-hidden rounded-[7px] border border-bazooka-border-strong transition-all duration-300 hover:border-bazooka-lime/70">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1600&q=90')] bg-cover bg-[58%_center] transition-transform duration-[900ms] group-hover:scale-[1.02] sm:bg-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/96 via-black/74 to-black/18" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />
          <div className="relative z-10 grid min-h-[260px] gap-7 px-5 py-8 sm:px-7 sm:py-10 md:px-9 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="min-w-0">
              <span className="text-[9px] font-black uppercase tracking-[.06em] text-bazooka-lime">Experience Bazooka First</span>
              <h2 className="font-display mt-3 max-w-full text-[30px] font-black uppercase leading-[.92] min-[380px]:text-[33px] sm:text-[42px]">
                <span className="block">Find The Membership</span>
                <span className="block text-bazooka-lime">That Fits You.</span>
              </h2>
              <p className="mt-3 max-w-[520px] text-[10px] leading-5 text-bazooka-text-secondary">Visit the club, see the training environment and compare the available membership options before deciding.</p>

              <div className="mt-5 grid gap-2 sm:grid-cols-3 lg:max-w-[640px]">
                {benefits.map(([Icon, label]) => (
                  <div key={label} className="flex min-h-11 items-center gap-2 rounded-[4px] border border-white/10 bg-black/25 px-3 py-2 backdrop-blur-[2px]">
                    <Icon className="size-4 shrink-0 text-bazooka-lime" />
                    <span className="text-[8px] font-black uppercase tracking-[.02em] text-white">{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid w-full gap-3 sm:flex sm:flex-wrap lg:w-auto lg:flex-col">
              <Link href="/book-free-trial" className={`${primaryButton} w-full sm:w-auto lg:min-w-[190px]`}>Book Free Trial <ArrowRight className="size-4" /></Link>
              <Link href="/contact" className={`${outlineButton} w-full sm:w-auto lg:min-w-[190px]`}>Contact Bazooka <ArrowRight className="size-4" /></Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
