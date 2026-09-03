"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaInstagram } from "react-icons/fa6";
import { reveal, shell } from "./gallery-shared";

const instagramImages = [
  "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=700&q=90",
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=700&q=90",
  "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=700&q=90",
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=700&q=90",
  "https://images.unsplash.com/photo-1534368420009-621bfab424a8?auto=format&fit=crop&w=700&q=90",
] as const;

export default function GalleryInstagramJourneySection() {
  return (
    <section className="bg-bazooka-black py-5 sm:py-6">
      <div className={shell}>
        <motion.div {...reveal} className="grid gap-5 rounded-[6px] border border-bazooka-border-strong bg-bazooka-surface p-5 sm:p-6 lg:grid-cols-[280px_1fr] lg:items-stretch">
          <div className="flex min-w-0 flex-col justify-center py-2 lg:pr-3">
            <span className="text-[10px] font-black uppercase text-bazooka-lime">Bazooka On Instagram</span>
            <h2 className="font-display mt-2 max-w-full text-[30px] font-black uppercase leading-[.94] min-[380px]:text-[34px] sm:text-[38px]">Follow The <span className="text-bazooka-lime">Journey.</span></h2>
            <p className="mt-4 max-w-[240px] text-[9px] leading-5 text-bazooka-text-secondary">For current gym updates, training content and community moments, follow Bazooka Fitness on Instagram.</p>
            <Link href="https://www.instagram.com/bazookafitnessjodhpur/" target="_blank" rel="noreferrer" className="mt-5 inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-[4px] border border-bazooka-lime px-4 text-[9px] font-black uppercase text-bazooka-lime transition-all duration-200 hover:bg-bazooka-lime hover:text-black active:scale-[.98] sm:w-fit"><FaInstagram className="size-4" /> Open Instagram <ArrowRight className="size-3.5" /></Link>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
            {instagramImages.map((image, index) => (
              <div key={image} className="group relative min-h-[150px] overflow-hidden rounded-[5px] border border-bazooka-border-strong bg-cover bg-center transition-all duration-300 hover:-translate-y-1 hover:border-bazooka-lime sm:min-h-[165px]" style={{ backgroundImage: `url(${image})` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                <span className="absolute right-2.5 top-2.5 grid size-7 place-items-center rounded-full border border-white/15 bg-black/55 text-white backdrop-blur-sm"><FaInstagram className="size-3.5" /></span>
                <span className="absolute bottom-3 left-3 text-[7px] font-black uppercase text-white/80">Bazooka Fitness</span>
                {index === 1 && <div className="font-display absolute inset-0 grid place-items-center bg-black/25 text-[42px] font-black text-bazooka-lime">B</div>}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
