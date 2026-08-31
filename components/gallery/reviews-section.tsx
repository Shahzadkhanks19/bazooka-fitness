"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, BadgeCheck, Star } from "lucide-react";
import { reveal, shell } from "./gallery-shared";

const reviews = [
  { name: "Rahul Mehta", text: "Amazing atmosphere and top-notch equipment. Bazooka is my second home now!" },
  { name: "Sneha Verma", text: "The trainers here are knowledgeable and supportive. Helped me transform mentally and physically." },
  { name: "Aman Sharma", text: "Clean, energetic and motivating environment. Best fitness community in Jodhpur!" },
] as const;

export default function GalleryReviewsSection() {
  return (
    <section className="border-b border-bazooka-border/70 bg-bazooka-black py-12 md:py-14">
      <div className={shell}>
        <motion.div {...reveal} className="flex items-center justify-center gap-4">
          <span className="h-px w-20 bg-bazooka-border-strong" />
          <h2 className="font-display text-center text-[30px] font-black uppercase">What <span className="text-bazooka-lime">Our Members</span> Say</h2>
          <span className="h-px w-20 bg-bazooka-border-strong" />
        </motion.div>

        <div className="relative mt-7">
          <button type="button" aria-label="Previous reviews" className="absolute -left-4 top-1/2 z-10 hidden size-10 -translate-y-1/2 place-items-center rounded-full border border-bazooka-border-strong bg-bazooka-surface text-white transition hover:border-bazooka-lime hover:text-bazooka-lime lg:grid"><ArrowLeft className="size-4" /></button>
          <button type="button" aria-label="Next reviews" className="absolute -right-4 top-1/2 z-10 hidden size-10 -translate-y-1/2 place-items-center rounded-full border border-bazooka-border-strong bg-bazooka-surface text-white transition hover:border-bazooka-lime hover:text-bazooka-lime lg:grid"><ArrowRight className="size-4" /></button>

          <div className="grid gap-4 md:grid-cols-3">
            {reviews.map((review, index) => (
              <motion.article key={review.name} {...reveal} transition={{ duration: .45, delay: index * .05 }} className="rounded-[5px] border border-bazooka-border-strong bg-bazooka-surface p-5">
                <div className="flex items-center gap-2 text-[18px] font-black text-white"><span className="text-[#4285F4]">G</span><div className="flex gap-0.5 text-bazooka-lime">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-3 fill-current" />)}</div></div>
                <p className="mt-4 min-h-[72px] text-[10px] leading-5 text-bazooka-text-secondary">{review.text}</p>
                <div className="mt-5 flex items-center gap-3">
                  <span className="grid size-9 place-items-center rounded-full bg-bazooka-border text-[10px] font-black text-white">{review.name.charAt(0)}</span>
                  <div><strong className="block text-[9px] text-white">{review.name}</strong><span className="mt-0.5 flex items-center gap-1 text-[8px] text-bazooka-text-muted">Bazooka Member <BadgeCheck className="size-3 text-bazooka-lime" /></span></div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="mt-5 flex justify-center gap-1.5"><span className="size-1.5 rounded-full bg-bazooka-lime" /><span className="size-1.5 rounded-full bg-bazooka-border-strong" /><span className="size-1.5 rounded-full bg-bazooka-border-strong" /><span className="size-1.5 rounded-full bg-bazooka-border-strong" /></div>
      </div>
    </section>
  );
}
