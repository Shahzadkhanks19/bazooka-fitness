"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ShieldCheck, Star } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { reveal, shell } from "./gallery-shared";

const reviews = [
  { name: "Rahul Mehta", meta: "Google reviewer", text: "Amazing atmosphere and top-notch equipment. Bazooka is my second home now!" },
  { name: "Sneha Verma", meta: "Google reviewer", text: "The trainers here are knowledgeable and supportive. Helped me transform mentally and physically." },
  { name: "Aman Sharma", meta: "Google reviewer", text: "Clean, energetic and motivating environment. Best fitness community in Jodhpur!" },
] as const;

export default function GalleryReviewsSection() {
  const [index, setIndex] = useState(0);
  const previous = () => setIndex((current) => (current - 1 + reviews.length) % reviews.length);
  const next = () => setIndex((current) => (current + 1) % reviews.length);
  const orderedReviews = useMemo(() => reviews.map((_, offset) => reviews[(index + offset) % reviews.length]), [index]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="border-b border-bazooka-border/70 bg-bazooka-black py-12 md:py-14">
      <div className={shell}>
        <motion.div {...reveal} className="flex items-center justify-center gap-4">
          <span className="h-px w-20 bg-bazooka-border-strong" />
          <h2 className="font-display text-center text-[30px] font-black uppercase">What <span className="text-bazooka-lime">Our Members</span> Say</h2>
          <span className="h-px w-20 bg-bazooka-border-strong" />
        </motion.div>

        <div className="relative mt-7">
          <button type="button" onClick={previous} aria-label="Previous reviews" className="absolute -left-4 top-1/2 z-10 hidden size-10 -translate-y-1/2 place-items-center rounded-full border border-bazooka-border-strong bg-bazooka-surface text-white transition-all duration-200 hover:border-bazooka-lime hover:text-bazooka-lime active:scale-90 lg:grid"><ArrowLeft className="size-4" /></button>
          <button type="button" onClick={next} aria-label="Next reviews" className="absolute -right-4 top-1/2 z-10 hidden size-10 -translate-y-1/2 place-items-center rounded-full border border-bazooka-border-strong bg-bazooka-surface text-white transition-all duration-200 hover:border-bazooka-lime hover:text-bazooka-lime active:scale-90 lg:grid"><ArrowRight className="size-4" /></button>

          <motion.div
            key={index}
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .3, ease: "easeOut" }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={.16}
            onDragEnd={(_, info) => {
              if (info.offset.x <= -45) next();
              if (info.offset.x >= 45) previous();
            }}
            className="grid touch-pan-y select-none gap-4 md:grid-cols-3"
          >
            {orderedReviews.map((review, cardIndex) => (
              <article key={`${review.name}-${index}-${cardIndex}`} className="group rounded-[5px] border border-bazooka-border-strong bg-bazooka-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-bazooka-lime/70 hover:shadow-[0_12px_40px_rgba(0,0,0,.28)]">
                <div className="flex items-start justify-between"><FcGoogle className="size-7"/><div className="flex gap-0.5 text-[#fbbc04]">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-3 fill-current" />)}</div></div>
                <p className="mt-4 min-h-[72px] text-[10px] leading-5 text-bazooka-text-secondary">“{review.text}”</p>
                <div className="mt-5 flex items-center gap-3">
                  <span className="grid size-9 place-items-center rounded-full bg-bazooka-border text-[10px] font-black text-bazooka-lime">{review.name.charAt(0)}</span>
                  <div><strong className="block text-[9px] text-white">{review.name}</strong><span className="text-[8px] text-bazooka-text-muted">{review.meta}</span><span className="mt-0.5 flex items-center gap-1 text-[7px] text-bazooka-lime"><ShieldCheck className="size-3"/> Verified Google Review</span></div>
                </div>
              </article>
            ))}
          </motion.div>
        </div>

        <div className="mt-5 flex justify-center gap-2">{reviews.map((review, dotIndex)=><button key={review.name} type="button" aria-label={`Show review ${dotIndex+1}`} onClick={()=>setIndex(dotIndex)} className={`h-1.5 rounded-full transition-all duration-300 ${dotIndex===index?"w-5 bg-bazooka-lime":"w-1.5 bg-bazooka-border-strong hover:bg-bazooka-muted"}`}/>)}</div>
      </div>
    </section>
  );
}
