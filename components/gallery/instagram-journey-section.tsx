"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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
    <section className="bg-bazooka-black py-4">
      <div className={shell}>
        <motion.div {...reveal} className="grid gap-4 rounded-[5px] border border-bazooka-border-strong bg-bazooka-surface p-4 lg:grid-cols-[250px_1fr] lg:items-stretch">
          <div className="flex flex-col justify-center px-3 py-3">
            <h2 className="font-display text-[28px] font-black uppercase leading-[.95] text-white">Follow Our Journey<br /><span className="text-bazooka-lime">On Instagram</span></h2>
            <p className="mt-3 max-w-[220px] text-[9px] leading-4 text-bazooka-text-secondary">Live updates, workout tips, behind the scenes and much more.</p>
            <Link href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-[9px] font-black text-white transition hover:text-bazooka-lime"><FaInstagram className="size-4" /> @bazooka.fitness</Link>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
            {instagramImages.map((image, index) => (
              <div key={image} className="relative min-h-[140px] overflow-hidden rounded-[4px] border border-bazooka-border-strong bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
                <div className="absolute right-2 top-2 grid size-6 place-items-center rounded-full bg-black/60 text-white"><FaInstagram className="size-3.5" /></div>
                {index === 1 && <div className="font-display absolute inset-0 grid place-items-center bg-black/35 text-[38px] font-black text-bazooka-lime">B</div>}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
