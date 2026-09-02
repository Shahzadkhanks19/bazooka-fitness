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
      <div className={`${shell} grid gap-8 md:grid-cols-[210px_340px_1fr] md:items-stretch`}>
        <motion.div {...reveal} className="flex flex-col justify-center rounded-[6px] border border-bazooka-border bg-bazooka-black/35 p-5 md:rounded-none md:border-0 md:border-r md:bg-transparent md:p-0 md:pr-8">
          <div className="flex items-center gap-2"><FcGoogle className="size-6"/><span className="text-[20px] font-medium sm:text-[23px]">Google</span></div>
          <strong className="font-display mt-2 text-[42px] sm:text-[46px]">4.9</strong>
          <div className="flex gap-1 text-[#fbbc04]">{Array.from({ length: 5 }).map((_, index) => <Star key={index} className="size-4 fill-current" />)}</div>
          <p className="mt-2 text-[9px] text-bazooka-text-secondary">Based on 250+ reviews</p>
          <small className="mt-4 inline-flex items-center gap-2 text-[8px] text-bazooka-text-secondary"><ShieldCheck className="size-4 text-bazooka-lime" /> VERIFIED REVIEWS</small>
        </motion.div>

        <motion.div {...reveal} className="flex min-w-0 flex-col justify-center">
          <h2 className="font-display text-[28px] font-black uppercase">Meet Our Experts</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 md:grid-cols-1">
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

        <motion.article key={reviewIndex} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35, ease: "easeOut" }} drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={0.18} onDragEnd={(_, info) => { if (info.offset.x <= -45) nextReview(); if (info.offset.x >= 45) previousReview(); }} className="relative touch-pan-y cursor-grab rounded-[6px] border border-bazooka-border bg-[#111214] p-5 pb-14 sm:p-6 sm:pb-14 active:cursor-grabbing">
          <div className="flex items-start justify-between"><FcGoogle className="size-7" /><div className="flex gap-0.5 text-[#fbbc04]">{Array.from({ length: 5 }).map((_, index) => <Star key={index} className="size-3 fill-current" />)}</div></div>
          <p className="mt-5 min-h-[72px] text-[11px] leading-5 text-bazooka-text-secondary sm:text-[12px]">“{review.text}”</p>
          <div className="mt-5 flex min-w-0 items-center gap-3"><span className="grid size-10 shrink-0 place-items-center rounded-full bg-bazooka-surface text-sm font-black text-bazooka-lime">{review.name.charAt(0)}</span><div className="min-w-0"><strong className="block text-[10px]">{review.name}</strong><small className="text-[8px] text-bazooka-text-secondary">{review.meta}</small><span className="mt-1 flex items-center gap-1 text-[7px] text-bazooka-lime"><ShieldCheck className="size-3" /> Verified Google Review</span></div></div>
          <div className="absolute bottom-4 right-4 flex gap-2"><button type="button" onClick={previousReview} aria-label="Previous review" className="grid size-9 place-items-center rounded border border-bazooka-border transition-all duration-200 hover:border-bazooka-lime hover:text-bazooka-lime active:scale-90"><ChevronLeft className="size-4" /></button><button type="button" onClick={nextReview} aria-label="Next review" className="grid size-9 place-items-center rounded border border-bazooka-border transition-all duration-200 hover:border-bazooka-lime hover:text-bazooka-lime active:scale-90"><ChevronRight className="size-4" /></button></div>
          <div className="absolute bottom-5 left-5 flex gap-1.5">{reviews.map((_, index) => <button type="button" aria-label={`Show review ${index + 1}`} onClick={() => setReviewIndex(index)} key={index} className={`h-1.5 rounded-full transition-all ${index === reviewIndex ? "w-5 bg-bazooka-lime" : "w-1.5 bg-bazooka-border-strong hover:bg-bazooka-muted"}`} />)}</div>
        </motion.article>
      </div>
    </section>
  );
}
