"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, Dumbbell, Target } from "lucide-react";
import { primaryButton, outlineButton, reveal, shell } from "./trainers-shared";

const points = [
  [Dumbbell, "Meet The Coaches", "Explore trainer profiles before choosing who you want to work with."],
  [Target, "Talk About Your Goal", "Start with your current level, priorities and preferred training style."],
  [BadgeCheck, "Choose Your Next Step", "Book a session, try the gym or compare memberships when you are ready."],
] as const;

export default function TrainerReviewsCtaSection() {
  return (
    <section className="border-b border-bazooka-border/70 bg-bazooka-black py-14 sm:py-16">
      <div className={shell}>
        <motion.div {...reveal} className="mx-auto max-w-[760px] text-center">
          <span className="text-[10px] font-black uppercase text-bazooka-lime">Start With The Right Fit</span>
          <h2 className="font-display mt-2 max-w-full text-[32px] font-black uppercase leading-[.94] min-[380px]:text-[36px] sm:text-[46px]">Find A Coach Who Matches <span className="text-bazooka-lime">Your Goal.</span></h2>
          <p className="mx-auto mt-4 max-w-[580px] text-[10px] leading-5 text-bazooka-text-secondary sm:text-[11px]">Explore the trainer profiles, understand their focus areas and take the next step when you find the coaching style that feels right for you.</p>
        </motion.div>

        <div className="mt-8 grid gap-3 md:grid-cols-3">
          {points.map(([Icon, title, text], index) => (
            <motion.article key={title} {...reveal} transition={{ duration: .45, delay: index * .05 }} className="group min-w-0 rounded-[6px] border border-bazooka-border-strong bg-bazooka-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-bazooka-lime sm:p-6">
              <span className="grid size-11 place-items-center rounded-full border border-bazooka-lime/50 bg-bazooka-lime/10 text-bazooka-lime transition-transform duration-300 group-hover:scale-105"><Icon className="size-5" /></span>
              <h3 className="font-display mt-5 text-[17px] font-black uppercase text-white">{title}</h3>
              <p className="mt-2 text-[9px] leading-4 text-bazooka-text-secondary">{text}</p>
            </motion.article>
          ))}
        </div>

        <motion.div {...reveal} className="relative mt-8 overflow-hidden rounded-[6px] border border-bazooka-border-strong bg-[url('https://images.unsplash.com/photo-1549476464-37392f717541?auto=format&fit=crop&w=1800&q=90')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/30" />
          <div className="relative z-10 grid min-h-[245px] gap-6 px-5 py-8 sm:px-8 sm:py-9 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-[620px]">
              <span className="text-[9px] font-black uppercase tracking-[.04em] text-bazooka-lime">Ready When You Are</span>
              <h2 className="font-display mt-3 max-w-full text-[31px] font-black uppercase leading-[.94] min-[380px]:text-[35px] sm:text-[43px]">Experience The Coaching <span className="text-bazooka-lime">First-Hand.</span></h2>
              <p className="mt-3 max-w-[520px] text-[10px] leading-5 text-bazooka-text-secondary">Book a free trial to experience the gym or schedule a session when you are ready for more focused coaching.</p>
            </div>
            <div className="grid w-full gap-3 sm:flex sm:flex-wrap lg:w-auto lg:shrink-0">
              <Link href="/book-free-trial" className={`${primaryButton} w-full sm:w-auto`}>Book Free Trial <ArrowRight className="size-4" /></Link>
              <Link href="/book-session" className={`${outlineButton} w-full sm:w-auto`}>Book A Session <ArrowRight className="size-4" /></Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
