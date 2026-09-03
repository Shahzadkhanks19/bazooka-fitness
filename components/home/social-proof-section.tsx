"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { outlineButton, reveal, shell } from "./home-shared";

const reviews = [
  { name: "Rishabh", meta: "Local Guide · 46 reviews", text: "This is a fantastic gym!! By far the best facility around. Bazooka Fitness is an amazing state-of-the-art facility and the staff is super helpful, encouraging, and friendly." },
  { name: "Lovejeet Verma", meta: "Google reviewer", text: "Spacious, well-maintained, clean and motivating atmosphere. Most importantly, trainers are incredibly helpful, friendly and motivating." },
  { name: "Ashok Pareek", meta: "Google reviewer", text: "A team that transformed my life from a sedentary person to a marathon runner in my 60s. Every aspect of this club is consumer centric." },
];

const featuredTrainers = [
  { name: "Ankit Rathore", role: "Head Strength Coach", href: "/trainers/ankit-rathore", image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=300&q=90" },
  { name: "Priya Sharma", role: "Transformation Coach", href: "/trainers/priya-sharma", image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=300&q=90" },
] as const;

export default function SocialProofSection() {
  const [reviewIndex, setReviewIndex] = useState(0);
  const review = reviews[reviewIndex];
  const previousReview = () => setReviewIndex((current) => (current - 1 + reviews.length) % reviews.length);
  const nextReview = () => setReviewIndex((current) => (current + 1) % reviews.length);

  useEffect(() => {
    const timer = setInterval(() => setReviewIndex((current) => (current + 1) % reviews.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="border-b border-bazooka-border/70 bg-bazooka-soft-black py-12 sm:py-14">
      <div className={`${shell} grid gap-8 lg:grid-cols-[310px_360px_1fr] lg:items-stretch`}>
        <motion.div {...reveal} className="flex min-h-[300px] flex-col justify-between rounded-[6px] border border-bazooka-border bg-bazooka-black/35 p-7 sm:p-8 lg:min-h-0">
          <div>
            <div className="flex items-center gap-3"><FcGoogle className="size-8 shrink-0"/><span className="text-[24px] font-medium sm:text-[27px]">Google</span></div>
            <div className="mt-7 flex items-end gap-3"><strong className="font-display text-[58px] leading-none sm:text-[64px]">4.9</strong><span className="pb-1 text-[9px] font-bold uppercase tracking-[.04em] text-bazooka-text-secondary">out of 5</span></div>
            <div className="mt-5 flex gap-2 text-[#fbbc04]">{Array.from({ length: 5 }).map((_, index) => <Star key={index} className="size-5 fill-current" />)}</div>
            <p className="mt-5 max-w-[220px] text-[10px] leading-5 text-bazooka-text-secondary">Based on 250+ Google reviews from members and visitors.</p>
          </div>
          <small className="mt-7 flex items-center gap-2.5 border-t border-bazooka-border/70 pt-5 text-[8px] font-black uppercase tracking-[.08em] text-white"><ShieldCheck className="size-[18px] shrink-0 text-bazooka-lime" /> Verified Reviews</small>
        </motion.div>

        <motion.div {...reveal} className="flex min-w-0 flex-col justify-center">
          <h2 className="font-display text-[28px] font-black uppercase">Meet Our Experts</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {featuredTrainers.map((trainer) => (
              <Link key={trainer.name} href={trainer.href} className="group flex min-w-0 items-center gap-3 rounded-[5px] border border-bazooka-border bg-bazooka-black/30 p-3 transition-all duration-300 hover:border-bazooka-lime/70 hover:bg-bazooka-lime/[.04] active:scale-[.985]">
                <span className="size-12 shrink-0 rounded-full bg-cover bg-center" style={{ backgroundImage: `url(${trainer.image})` }} />
                <div className="min-w-0"><strong className="block text-[10px] uppercase">{trainer.name}</strong><small className="text-[8px] text-bazooka-text-secondary">{trainer.role}</small></div>
                <ArrowRight className="ml-auto size-3.5 shrink-0 text-bazooka-lime transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
          <Link href="/trainers" className={`${outlineButton} mt-5 h-9 w-full border-bazooka-lime/70 px-5 text-[9px] sm:w-fit`}>Meet All Trainers <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" /></Link>
        </motion.div>

        <motion.article key={reviewIndex} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35, ease: "easeOut" }} drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={0.18} onDragEnd={(_, info) => { if (info.offset.x <= -45) nextReview(); if (info.offset.x >= 45) previousReview(); }} className="relative min-h-[300px] touch-pan-y cursor-grab rounded-[6px] border border-bazooka-border bg-[#111214] p-6 pb-16 sm:p-8 sm:pb-16 active:cursor-grabbing">
          <div className="flex items-start justify-between"><FcGoogle className="size-8" /><div className="flex gap-1 text-[#fbbc04]">{Array.from({ length: 5 }).map((_, index) => <Star key={index} className="size-3.5 fill-current" />)}</div></div>
          <p className="mt-7 min-h-[88px] text-[12px] leading-6 text-bazooka-text-secondary sm:text-[13px]">“{review.text}”</p>
          <div className="mt-7 flex min-w-0 items-center gap-3"><span className="grid size-11 shrink-0 place-items-center rounded-full bg-bazooka-surface text-sm font-black text-bazooka-lime">{review.name.charAt(0)}</span><div className="min-w-0"><strong className="block text-[10px]">{review.name}</strong><small className="text-[8px] text-bazooka-text-secondary">{review.meta}</small><span className="mt-1 flex items-center gap-1 text-[7px] text-bazooka-lime"><ShieldCheck className="size-3" /> Verified Google Review</span></div></div>
          <div className="absolute bottom-4 right-4 flex gap-2"><button type="button" onClick={previousReview} aria-label="Previous review" className="grid size-10 place-items-center rounded border border-bazooka-border transition-all duration-200 hover:border-bazooka-lime hover:text-bazooka-lime active:scale-90"><ChevronLeft className="size-4" /></button><button type="button" onClick={nextReview} aria-label="Next review" className="grid size-10 place-items-center rounded border border-bazooka-border transition-all duration-200 hover:border-bazooka-lime hover:text-bazooka-lime active:scale-90"><ChevronRight className="size-4" /></button></div>
          <div className="absolute bottom-5 left-6 flex gap-1.5 sm:left-8">{reviews.map((_, index) => <button type="button" aria-label={`Show review ${index + 1}`} onClick={() => setReviewIndex(index)} key={index} className={`h-1.5 rounded-full transition-all ${index === reviewIndex ? "w-5 bg-bazooka-lime" : "w-1.5 bg-bazooka-border-strong hover:bg-bazooka-muted"}`} />)}</div>
        </motion.article>
      </div>
    </section>
  );
}
