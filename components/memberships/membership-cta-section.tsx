"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { outlineButton, primaryButton, reveal, shell } from "./memberships-shared";

export default function MembershipCtaSection() {
  return (
    <section className="border-b border-bazooka-border/70 bg-bazooka-black py-12">
      <div className={shell}>
        <motion.div {...reveal} className="relative overflow-hidden rounded-[5px] border border-bazooka-border-strong">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1600&q=90')] bg-cover bg-center grayscale" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/88 to-black/25" />
          <div className="relative z-10 grid min-h-[210px] gap-6 px-7 py-8 md:px-9 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="font-display text-[34px] font-black uppercase leading-[.92] sm:text-[42px]">Ready To Unlock<br /><span className="text-bazooka-lime">Your Strongest Self?</span></h2>
              <p className="mt-3 text-[10px] text-bazooka-text-secondary">Your transformation starts with the first step.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/book-free-trial" className={primaryButton}>Book Free Trial <ArrowRight className="size-4" /></Link>
              <Link href="/contact" className={outlineButton}>Talk To Our Expert <ArrowRight className="size-4" /></Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
