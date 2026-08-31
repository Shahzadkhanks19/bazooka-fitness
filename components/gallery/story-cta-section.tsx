"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Camera } from "lucide-react";
import { FaInstagram } from "react-icons/fa6";
import { primaryButton, reveal, shell } from "./gallery-shared";

export default function GalleryStoryCtaSection() {
  return (
    <section className="border-b border-bazooka-border/70 bg-bazooka-soft-black py-8">
      <div className={shell}>
        <motion.div {...reveal} className="flex flex-col gap-6 rounded-[6px] border border-bazooka-border-strong bg-bazooka-surface px-6 py-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-5">
            <span className="grid size-16 shrink-0 place-items-center rounded-[5px] border border-dashed border-bazooka-lime text-bazooka-lime">
              <Camera className="size-8" />
            </span>
            <div>
              <h2 className="font-display text-[28px] font-black uppercase leading-none">Be Part Of <span className="text-bazooka-lime">Our Story</span></h2>
              <p className="mt-2 max-w-[520px] text-[10px] leading-5 text-bazooka-text-secondary">Tag us @bazooka.fitness on Instagram and your best moments might be featured on our page.</p>
            </div>
          </div>
          <Link href="https://www.instagram.com/" target="_blank" rel="noreferrer" className={primaryButton}>
            <FaInstagram className="size-4" /> Follow Us On Instagram <ArrowRight className="size-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
