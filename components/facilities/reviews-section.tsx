"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ShieldCheck, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { reveal, shell } from "./facilities-shared";

const reviews = [
  { name: "Aditya Rathore", meta: "Google reviewer", text: "The gym has a great training atmosphere and the different workout zones make it easy to structure every session. The overall space feels energetic and well planned." },
  { name: "Mehak Jain", meta: "Google reviewer", text: "I really like the setup at Bazooka. The strength and cardio areas feel spacious, and having recovery facilities and the cafe in the same place makes the experience very convenient." },
  { name: "Yash Vardhan", meta: "Google reviewer", text: "A very motivating place to train. The equipment layout, workout zones and overall environment make it easy to stay focused and enjoy the session." },
  { name: "Niharika Singh", meta: "Google reviewer", text: "The facility feels modern and thoughtfully organised. I especially like that there are dedicated spaces for different styles of training instead of everything being crowded together." },
] as const;

export default function FacilitiesReviewsSection() {
  const [reviewIndex, setReviewIndex] = useState(0);
  const review = reviews[reviewIndex];

  const previousReview = () => setReviewIndex((current) => (current - 1 + reviews.length) % reviews.length);
  const nextReview = () => setReviewIndex((current) => (current + 1) % reviews.length);

  useEffect(() => {
    const timer = setInterval(() => setReviewIndex((current) => (current + 1) % reviews.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="border-b border-bazooka-border/70 bg-bazooka-soft-black py-14 sm:py-16">
      <div className={shell}>
        <motion.div {...reveal} className="mx-auto max-w-[760px] text-center">
          <span className="text-[10px] font-black uppercase text-bazooka-lime">Member Experiences</span>
          <h2 className="font-display mt-2 max-w-full text-[32px] font-black uppercase leading-[.94] min-[380px]:text-[36px] sm:text-[46px]">What Members Say About <span className="text-bazooka-lime">The Facility.</span></h2>
        </motion.div>

        <div className="mx-auto mt-8 grid max-w-[980px] gap-5 md:grid-cols-[220px_1fr] md:items-stretch">
          <motion.div {...reveal} className="flex flex-col justify-center rounded-[6px] border border-bazooka-border bg-bazooka-black/35 p-5 sm:p-6">
            <div className="flex items-center gap-2"><FcGoogle className="size-6" /><span className="text-[20px] font-medium sm:text-[23px]">Google</span></div>
            <strong className="font-display mt-2 text-[42px] sm:text-[46px]">4.9</strong>
            <div className="flex gap-1 text-[#fbbc04]">{Array.from({ length: 5 }).map((_, index) => <Star key={index} className="size-4 fill-current" />)}</div>
            <p className="mt-2 text-[9px] text-bazooka-text-secondary">Member feedback</p>
            <small className="mt-4 inline-flex items-center gap-2 text-[8px] text-bazooka-text-secondary"><ShieldCheck className="size-4 text-bazooka-lime" /> GOOGLE REVIEWS</small>
          </motion.div>

          <motion.article key={reviewIndex} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .35, ease: "easeOut" }} drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={.18} onDragEnd={(_, info) => { if (info.offset.x <= -45) nextReview(); if (info.offset.x >= 45) previousReview(); }} className="relative touch-pan-y cursor-grab rounded-[6px] border border-bazooka-border bg-[#111214] p-5 pb-14 sm:p-6 sm:pb-14 active:cursor-grabbing">
            <div className="flex items-start justify-between gap-4"><FcGoogle className="size-7 shrink-0" /><div className="flex gap-0.5 text-[#fbbc04]">{Array.from({ length: 5 }).map((_, index) => <Star key={index} className="size-3 fill-current" />)}</div></div>
            <p className="mt-5 min-h-[82px] text-[11px] leading-5 text-bazooka-text-secondary sm:text-[12px]">“{review.text}”</p>
            <div className="mt-5 flex min-w-0 items-center gap-3"><span className="grid size-10 shrink-0 place-items-center rounded-full bg-bazooka-surface text-sm font-black text-bazooka-lime">{review.name.charAt(0)}</span><div className="min-w-0"><strong className="block text-[10px]">{review.name}</strong><small className="text-[8px] text-bazooka-text-secondary">{review.meta}</small><span className="mt-1 flex items-center gap-1 text-[7px] text-bazooka-lime"><ShieldCheck className="size-3" /> Google Review</span></div></div>
            <div className="absolute bottom-4 right-4 flex gap-2"><button type="button" onClick={previousReview} aria-label="Previous review" className="grid size-9 place-items-center rounded border border-bazooka-border transition-all duration-200 hover:border-bazooka-lime hover:text-bazooka-lime active:scale-90"><ChevronLeft className="size-4" /></button><button type="button" onClick={nextReview} aria-label="Next review" className="grid size-9 place-items-center rounded border border-bazooka-border transition-all duration-200 hover:border-bazooka-lime hover:text-bazooka-lime active:scale-90"><ChevronRight className="size-4" /></button></div>
            <div className="absolute bottom-5 left-5 flex gap-1.5">{reviews.map((_, index) => <button type="button" aria-label={`Show review ${index + 1}`} onClick={() => setReviewIndex(index)} key={index} className={`h-1.5 rounded-full transition-all ${index === reviewIndex ? "w-5 bg-bazooka-lime" : "w-1.5 bg-bazooka-border-strong hover:bg-bazooka-muted"}`} />)}</div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
