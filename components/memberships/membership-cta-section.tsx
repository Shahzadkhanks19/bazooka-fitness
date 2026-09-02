"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { outlineButton, primaryButton, reveal, shell } from "./memberships-shared";

export default function MembershipCtaSection() {
  return (
    <section className="border-b border-bazooka-border/70 bg-bazooka-black py-12">
      <div className={shell}>
        <motion.div {...reveal} className="group relative overflow-hidden rounded-[6px] border border-bazooka-border-strong transition-all duration-300 hover:border-bazooka-lime/70">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1600&q=90')] bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.02]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/86 to-black/30" />
          <div className="relative z-10 grid min-h-[220px] gap-7 px-5 py-8 sm:px-7 md:px-9 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="min-w-0">
              <h2 className="font-display max-w-full text-[31px] font-black uppercase leading-[.92] sm:text-[42px]">
                <span className="block">Ready To Unlock</span>
                <span className="block text-bazooka-lime">Your Strongest Self?</span>
              </h2>
              <p className="mt-3 max-w-[520px] text-[10px] leading-5 text-bazooka-text-secondary">Your transformation starts with the first step. Experience Bazooka before choosing your membership.</p>
            </div>
            <div className="grid w-full gap-3 sm:flex sm:flex-wrap lg:w-auto lg:flex-col">
              <Link href="/book-free-trial" className={`${primaryButton} w-full sm:w-auto lg:min-w-[190px]`}>Book Free Trial <ArrowRight className="size-4" /></Link>
              <Link href="/contact" className={`${outlineButton} w-full sm:w-auto lg:min-w-[190px]`}>Talk To Our Expert <ArrowRight className="size-4" /></Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
