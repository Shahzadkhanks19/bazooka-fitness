"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { primaryButton, outlineButton, reveal, shell } from "./trainers-shared";

const reviews = [
  ["Saurabh Mehta", "The trainers at Bazooka are amazing! They truly care about your progress and push you to be better every day."],
  ["Kavya Shekhawat", "I transformed my lifestyle with the guidance of my coach. Best gym and best team in Jodhpur!"],
  ["Arjun Solanki", "Nutrition guidance and structured coaching changed the game for me. Highly recommended!"],
] as const;

export default function TrainerReviewsCtaSection() {
  return <>
    <section className="border-b border-bazooka-border/70 bg-bazooka-black py-14 md:py-16"><div className={shell}><motion.h2 {...reveal} className="font-display text-center text-[34px] font-black uppercase sm:text-[42px]">Hear From Our <span className="text-bazooka-lime">Members</span></motion.h2><div className="mt-7 grid gap-4 md:grid-cols-3">{reviews.map(([name,text],index)=><motion.article key={name} {...reveal} transition={{duration:.45,delay:index*.05}} className="rounded-[6px] border border-bazooka-border-strong bg-bazooka-surface p-5"><div className="flex items-center gap-3"><span className="grid size-8 place-items-center rounded-full bg-white font-black text-[#4285F4]">G</span><span className="tracking-[.12em] text-bazooka-lime">★★★★★</span></div><p className="mt-4 text-[10px] leading-5 text-bazooka-text-secondary">{text}</p><strong className="font-display mt-5 block text-[13px] font-black uppercase">{name}</strong><span className="text-[8px] text-bazooka-text-secondary">Bazooka Member</span></motion.article>)}</div></div></section>
    <section className="border-b border-bazooka-border/70 bg-bazooka-soft-black py-10"><div className={shell}><motion.div {...reveal} className="relative overflow-hidden rounded-[6px] border border-bazooka-border-strong bg-[url('https://images.unsplash.com/photo-1637666062717-1c6bcfa4a4df?auto=format&fit=crop&w=1800&q=90')] bg-cover bg-center px-6 py-10 sm:px-9"><div className="absolute inset-0 bg-gradient-to-r from-black via-black/92 to-black/35"/><div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between"><div><h2 className="font-display text-[34px] font-black uppercase leading-[.95]">Ready To Train With <span className="text-bazooka-lime">The Best?</span></h2><p className="mt-2 text-[10px] text-bazooka-text-secondary">Join thousands who trust our expert trainers.</p></div><div className="flex flex-wrap gap-3"><Link href="/book-free-trial" className={primaryButton}>Book Free Trial <ArrowRight className="size-4"/></Link><Link href="/memberships" className={outlineButton}>View Memberships <ArrowRight className="size-4"/></Link></div></div></motion.div></div></section>
  </>;
}
