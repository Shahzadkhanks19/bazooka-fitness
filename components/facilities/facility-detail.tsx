"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import type { FacilityDetail } from "./facility-data";
import { outlineButton, primaryButton, reveal, shell } from "./facilities-shared";

export default function FacilityDetailPage({ facility }: { facility: FacilityDetail }) {
  return (
    <>
      <section
        className="relative min-h-[610px] overflow-hidden border-b border-bazooka-border/70 bg-cover bg-center"
        style={{ backgroundImage: `url(${facility.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20" />
        <div className={`${shell} relative z-10 flex min-h-[610px] items-end py-14 md:items-center`}>
          <motion.div {...reveal} className="max-w-[610px]">
            <Link href="/facilities" className="mb-8 inline-flex items-center gap-2 text-[9px] font-black uppercase text-bazooka-text-secondary transition hover:text-bazooka-lime">
              <ArrowLeft className="size-3.5" /> Back to Facilities
            </Link>
            <span className="block text-[10px] font-black uppercase text-bazooka-lime">{facility.eyebrow}</span>
            <h1 className="font-display mt-3 text-[52px] font-black uppercase leading-[.9] sm:text-[66px] lg:text-[78px]">{facility.title}</h1>
            <p className="mt-5 max-w-[520px] text-[12px] leading-6 text-bazooka-text-secondary">{facility.summary}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/book-free-trial" className={primaryButton}>Book Free Trial <ArrowRight className="size-4" /></Link>
              <Link href="/contact" className={outlineButton}>Schedule A Tour <ArrowRight className="size-4" /></Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-bazooka-border/70 bg-bazooka-black py-14 md:py-16">
        <div className={`${shell} grid gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center`}>
          <motion.div {...reveal}>
            <span className="text-[10px] font-black uppercase text-bazooka-lime">Inside The Zone</span>
            <h2 className="font-display mt-2 text-[38px] font-black uppercase leading-[.95] sm:text-[46px]">Built For Better <span className="text-bazooka-lime">Training.</span></h2>
            <p className="mt-5 max-w-[620px] text-[11px] leading-6 text-bazooka-text-secondary">{facility.description}</p>
          </motion.div>

          <motion.div {...reveal} className="rounded-[6px] border border-bazooka-border-strong bg-bazooka-surface p-6">
            <span className="text-[9px] font-black uppercase text-bazooka-lime">Zone Highlights</span>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {facility.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-[4px] border border-bazooka-border bg-black/20 px-4 py-4 text-[10px] text-bazooka-text-secondary">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-bazooka-lime" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-bazooka-border/70 bg-bazooka-soft-black py-10">
        <div className={`${shell} relative overflow-hidden rounded-[6px] border border-bazooka-border-strong bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=90')] bg-cover bg-center px-6 py-10 sm:px-9`}>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/45" />
          <motion.div {...reveal} className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="font-display text-[34px] font-black uppercase leading-[.95]">Experience The <span className="text-bazooka-lime">Zone Yourself.</span></h2>
              <p className="mt-3 text-[10px] text-bazooka-text-secondary">Visit Bazooka, explore the facility and see how it fits your training goals.</p>
            </div>
            <Link href="/book-free-trial" className={primaryButton}>Book Free Trial <ArrowRight className="size-4" /></Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
