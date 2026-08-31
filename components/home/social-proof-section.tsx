"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck, Star } from "lucide-react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { outlineButton, reveal, shell } from "./home-shared";

const reviews = [
  { name: "Rishabh", meta: "Local Guide · 46 reviews", text: "This is a fantastic gym!! By far the best facility around. Bazooka Fitness is an amazing state-of-the-art facility and the staff is super helpful, encouraging, and friendly." },
  { name: "Lovejeet Verma", meta: "Google reviewer", text: "Spacious, well-maintained, clean and motivating atmosphere. Most importantly, trainers are incredibly helpful, friendly and motivating." },
  { name: "Ashok Pareek", meta: "Google reviewer", text: "A team that transformed my life from a sedentary person to a marathon runner in my 60s. Every aspect of this club is consumer centric." },
];

export default function SocialProofSection() {
  const [reviewIndex, setReviewIndex] = useState(0);
  const review = reviews[reviewIndex];

  return (
    <section className="border-b border-bazooka-border/70 bg-bazooka-soft-black py-12">
      <div className={`${shell} grid gap-8 md:grid-cols-[210px_340px_1fr] md:items-stretch`}>
        <motion.div {...reveal} className="flex flex-col justify-center border-bazooka-border md:border-r md:pr-8">
          <span className="text-[23px] font-medium">Google</span>
          <strong className="font-display mt-1 text-[46px]">4.9</strong>
          <div className="flex gap-1 text-[#fbbc04]">{Array.from({ length: 5 }).map((_, index) => <Star key={index} className="size-4 fill-current" />)}</div>
          <p className="mt-2 text-[9px] text-bazooka-text-secondary">Based on 250+ reviews</p>
          <small className="mt-4 inline-flex items-center gap-2 text-[8px] text-bazooka-text-secondary"><ShieldCheck className="size-4 text-bazooka-lime" /> VERIFIED REVIEWS</small>
        </motion.div>

        <motion.div {...reveal} className="flex flex-col justify-center">
          <h2 className="font-display text-[28px] font-black uppercase">Meet Our Experts</h2>
          <div className="mt-5 flex gap-5">
            <div className="flex items-center gap-3"><span className="size-12 rounded-full bg-[url('https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=300&q=90')] bg-cover bg-center" /><div><strong className="block text-[10px]">VIKRAM SINGH</strong><small className="text-[8px] text-bazooka-text-secondary">Strength Coach</small></div></div>
            <div className="flex items-center gap-3"><span className="size-12 rounded-full bg-[url('https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=300&q=90')] bg-cover bg-center" /><div><strong className="block text-[10px]">PRIYA SHARMA</strong><small className="text-[8px] text-bazooka-text-secondary">Nutrition Coach</small></div></div>
          </div>
          <Link href="/trainers" className={`${outlineButton} mt-5 h-9 w-fit border-bazooka-lime/70 px-5 text-[9px]`}>Meet All Trainers <ArrowRight className="size-3.5" /></Link>
        </motion.div>

        <motion.article key={reviewIndex} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="relative rounded-[6px] border border-bazooka-border bg-[#111214] p-6">
          <div className="flex items-start justify-between"><FcGoogle className="size-7" /><div className="flex gap-0.5 text-[#fbbc04]">{Array.from({ length: 5 }).map((_, index) => <Star key={index} className="size-3 fill-current" />)}</div></div>
          <p className="mt-5 min-h-[72px] text-[12px] leading-5 text-bazooka-text-secondary">“{review.text}”</p>
          <div className="mt-5 flex items-center gap-3"><span className="grid size-10 place-items-center rounded-full bg-bazooka-surface text-sm font-black text-bazooka-lime">{review.name.charAt(0)}</span><div><strong className="block text-[10px]">{review.name}</strong><small className="text-[8px] text-bazooka-text-secondary">{review.meta}</small><span className="mt-1 flex items-center gap-1 text-[7px] text-bazooka-lime"><ShieldCheck className="size-3" /> Verified Google Review</span></div></div>
          <div className="absolute bottom-5 right-5 flex gap-2">
            <button type="button" onClick={() => setReviewIndex((reviewIndex - 1 + reviews.length) % reviews.length)} aria-label="Previous review" className="grid size-9 place-items-center rounded border border-bazooka-border hover:border-bazooka-lime"><ChevronLeft className="size-4" /></button>
            <button type="button" onClick={() => setReviewIndex((reviewIndex + 1) % reviews.length)} aria-label="Next review" className="grid size-9 place-items-center rounded border border-bazooka-border hover:border-bazooka-lime"><ChevronRight className="size-4" /></button>
          </div>
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">{reviews.map((_, index) => <span key={index} className={`size-1.5 rounded-full ${index === reviewIndex ? "bg-bazooka-lime" : "bg-bazooka-border-strong"}`} />)}</div>
        </motion.article>
      </div>
    </section>
  );
}
