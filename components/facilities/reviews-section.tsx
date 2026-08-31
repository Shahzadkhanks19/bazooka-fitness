"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { reveal, shell } from "./facilities-shared";

const reviews = [
  { name: "Rahul Mehta", text: "The facilities at Bazooka are top-notch! Every zone is well-designed and super clean. Love the vibe!" },
  { name: "Sneha Sharma", text: "From equipment to recovery area, everything is premium. Best gym I’ve ever trained at!" },
  { name: "Aman Verma", text: "The functional training area and cardio zone are amazing. Highly recommended!" },
] as const;

export default function FacilitiesReviewsSection() {
  return (
    <section className="border-b border-bazooka-border/70 bg-bazooka-soft-black py-14">
      <div className={shell}>
        <motion.div {...reveal} className="flex items-center justify-center gap-4">
          <span className="h-px w-24 bg-bazooka-border-strong" />
          <h2 className="font-display text-center text-[30px] font-black uppercase sm:text-[36px]">What Our <span className="text-bazooka-lime">Members</span> Say</h2>
          <span className="h-px w-24 bg-bazooka-border-strong" />
        </motion.div>

        <div className="relative mt-8">
          <button type="button" aria-label="Previous reviews" className="absolute -left-3 top-1/2 z-10 hidden size-10 -translate-x-full -translate-y-1/2 place-items-center rounded-full border border-bazooka-border-strong bg-bazooka-surface text-white transition hover:border-bazooka-lime hover:text-bazooka-lime xl:grid"><ChevronLeft className="size-4" /></button>
          <div className="grid gap-4 md:grid-cols-3">
            {reviews.map((review, index) => (
              <motion.article key={review.name} {...reveal} transition={{ duration: .5, delay: index * .05 }} className="rounded-[5px] border border-bazooka-border-strong bg-bazooka-surface px-6 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-bazooka-lime">
                <div className="flex items-center gap-3">
                  <span className="grid size-8 place-items-center rounded-full bg-white font-black text-[#4285F4]">G</span>
                  <div className="flex gap-1 text-bazooka-lime">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-3 fill-current" />)}</div>
                </div>
                <p className="mt-5 min-h-[66px] text-[10px] leading-5 text-bazooka-text-secondary">{review.text}</p>
                <div className="mt-5 flex items-center gap-3">
                  <span className="grid size-9 place-items-center rounded-full border border-bazooka-border-strong bg-bazooka-soft-black font-display text-[12px] font-black text-bazooka-lime">{review.name.charAt(0)}</span>
                  <div>
                    <strong className="block text-[9px] text-white">{review.name}</strong>
                    <small className="mt-0.5 block text-[8px] text-bazooka-text-muted">Bazooka Member</small>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          <button type="button" aria-label="Next reviews" className="absolute -right-3 top-1/2 z-10 hidden size-10 translate-x-full -translate-y-1/2 place-items-center rounded-full border border-bazooka-border-strong bg-bazooka-surface text-white transition hover:border-bazooka-lime hover:text-bazooka-lime xl:grid"><ChevronRight className="size-4" /></button>
        </div>
        <div className="mt-6 flex justify-center gap-2"><span className="size-1.5 rounded-full bg-bazooka-lime" /><span className="size-1.5 rounded-full bg-bazooka-border-strong" /><span className="size-1.5 rounded-full bg-bazooka-border-strong" /><span className="size-1.5 rounded-full bg-bazooka-border-strong" /></div>
      </div>
    </section>
  );
}
