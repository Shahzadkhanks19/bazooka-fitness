"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { outlineButton, primaryButton, reveal, shell } from "./programs-shared";

export default function LevelUpCta() {
  return (
    <section className="bg-bazooka-soft-black pb-12">
      <div className={shell}>
        <motion.div {...reveal} className="relative overflow-hidden rounded-[5px] border border-bazooka-border-strong bg-[linear-gradient(90deg,#111214_0%,#101112_45%,#0a0a0a_100%)] px-7 py-7 md:flex md:items-center md:justify-between">
          <div className="pointer-events-none absolute inset-y-0 right-0 w-[46%] bg-[radial-gradient(circle_at_center,rgba(182,240,0,.08),transparent_60%)]" />
          <div className="relative">
            <h2 className="font-display text-[34px] font-black uppercase italic leading-none">Ready To <span className="text-bazooka-lime">Level Up?</span></h2>
            <p className="mt-2 text-[10px] font-bold text-bazooka-text-secondary">Our programs. Your commitment. Unstoppable results.</p>
          </div>
          <div className="relative mt-5 flex flex-wrap gap-3 md:mt-0">
            <Link href="/book-free-trial" className={primaryButton}>Book Free Trial <ArrowRight className="size-4" /></Link>
            <Link href="/memberships" className={outlineButton}>Join Bazooka <ArrowRight className="size-4" /></Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
