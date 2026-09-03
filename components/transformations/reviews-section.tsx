"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ShieldCheck, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { reveal, shell } from "./transformations-shared";

const reviews = [
  { name: "Karan Malhotra", meta: "Google reviewer", text: "The training environment helped me become much more consistent. The coaches keep sessions focused while still making the process feel achievable." },
  { name: "Deepak Sharma", meta: "Google reviewer", text: "I came in wanting a more structured routine and that is exactly what I found. The combination of coaching, equipment and atmosphere keeps me motivated." },
  { name: "Sneha Jain", meta: "Google reviewer", text: "What I value most is the supportive environment. Training feels purposeful, the facility is well organised and it is easier to stay committed to the routine." },
] as const;

export default function TransformationReviewsSection() {
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
      <div className={shell}>
        <motion.div {...reveal} className="mx-auto max-w-[720px] text-center">
          <span className="text-[9px] font-black uppercase text-bazooka-lime">Member Experiences</span>
          <h2 className="font-display mt-2 text-[32px] font-black uppercase leading-[.95] sm:text-[42px]">What Our <span className="text-bazooka-lime">Members</span> Say</h2>
          <p className="mx-auto mt-3 max-w-[540px] text-[9px] leading-5 text-bazooka-text-secondary sm:text-[10px]">Training is personal. These member comments focus on the coaching, environment and consistency that shape the Bazooka experience.</p>
        </motion.div>

        <div className="mx-auto mt-8 grid max-w-[1040px] gap-6 md:grid-cols-[310px_1fr] md:items-stretch">
          <motion.div {...reveal} className="flex min-h-[300px] flex-col justify-center rounded-[7px] border border-bazooka-border-strong bg-bazooka-black/45 p-7 sm:p-8 md:min-h-[330px]">
            <div className="flex items-center gap-3.5"><FcGoogle className="size-9 shrink-0"/><span className="text-[27px] font-medium">Google</span></div>
            <div className="mt-7 flex items-end gap-3"><strong className="font-display text-[64px] font-black leading-[.8] text-white">4.9</strong><span className="pb-1 text-[9px] text-bazooka-text-secondary">out of 5</span></div>
            <div className="mt-6 flex gap-2 text-[#fbbc04]">{Array.from({length:5}).map((_,i)=><Star key={i} className="size-5 fill-current"/>)}</div>
            <p className="mt-5 max-w-[210px] text-[9px] leading-4 text-bazooka-text-secondary">Member feedback shared through Google reviews.</p>
            <div className="mt-7 border-t border-bazooka-border/70 pt-5"><span className="inline-flex items-center gap-2.5 text-[8px] font-black uppercase text-bazooka-text-secondary"><ShieldCheck className="size-[18px] text-bazooka-lime"/> Google Reviews</span></div>
          </motion.div>

          <motion.article key={reviewIndex} initial={{opacity:0,x:24}} animate={{opacity:1,x:0}} transition={{duration:.35,ease:"easeOut"}} drag="x" dragConstraints={{left:0,right:0}} dragElastic={.18} onDragEnd={(_,info)=>{if(info.offset.x<=-45)nextReview();if(info.offset.x>=45)previousReview();}} className="relative flex min-h-[300px] touch-pan-y cursor-grab flex-col justify-center rounded-[7px] border border-bazooka-border-strong bg-bazooka-surface p-6 pb-16 sm:min-h-[330px] sm:p-8 sm:pb-16 active:cursor-grabbing">
            <div className="flex items-start justify-between gap-4"><FcGoogle className="size-8 shrink-0"/><div className="flex gap-1 text-[#fbbc04]">{Array.from({length:5}).map((_,i)=><Star key={i} className="size-3.5 fill-current"/>)}</div></div>
            <p className="mt-7 max-w-[620px] text-[12px] leading-6 text-bazooka-text-secondary sm:text-[13px] sm:leading-7">“{review.text}”</p>
            <div className="mt-7 flex items-center gap-3"><span className="grid size-11 shrink-0 place-items-center rounded-full bg-bazooka-black text-[12px] font-black text-bazooka-lime">{review.name.charAt(0)}</span><div><strong className="block text-[10px] text-white">{review.name}</strong><span className="text-[8px] text-bazooka-text-secondary">{review.meta}</span><span className="mt-1 flex items-center gap-1 text-[7px] text-bazooka-lime"><ShieldCheck className="size-3"/> Google Review</span></div></div>
            <div className="absolute bottom-5 left-6 flex gap-1.5 sm:left-8">{reviews.map((_,index)=><button key={index} type="button" aria-label={`Show review ${index+1}`} onClick={()=>setReviewIndex(index)} className={`h-1.5 rounded-full transition-all ${index===reviewIndex?"w-5 bg-bazooka-lime":"w-1.5 bg-bazooka-border-strong hover:bg-bazooka-muted"}`}/>)}</div>
            <div className="absolute bottom-4 right-4 flex gap-2"><button type="button" onClick={previousReview} aria-label="Previous review" className="grid size-9 place-items-center rounded border border-bazooka-border transition-all hover:border-bazooka-lime hover:text-bazooka-lime active:scale-90"><ChevronLeft className="size-4"/></button><button type="button" onClick={nextReview} aria-label="Next review" className="grid size-9 place-items-center rounded border border-bazooka-border transition-all hover:border-bazooka-lime hover:text-bazooka-lime active:scale-90"><ChevronRight className="size-4"/></button></div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
