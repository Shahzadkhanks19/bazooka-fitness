"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, Clock3, IndianRupee, Sparkles } from "lucide-react";
import { reveal, shell } from "./memberships-shared";

const plans = [
  { name: "12 Months", price: "₹15,990", duration: "12 Months", bestValue: true },
  { name: "6 Months", price: "₹12,990", duration: "6 Months", bestValue: false },
  { name: "3 Months", price: "₹7,990", duration: "3 Months", bestValue: false },
] as const;

const comparisonRows = [
  "Cardio",
  "Weight Training",
  "Steam",
  "Shower",
] as const;

export default function PlanComparisonSection() {
  return (
    <section className="border-b border-bazooka-border/70 bg-bazooka-soft-black py-12 md:py-16">
      <div className={shell}>
        <motion.div {...reveal} className="grid gap-5 lg:grid-cols-[360px_1fr] lg:items-end">
          <div className="min-w-0">
            <span className="text-[9px] font-black uppercase tracking-[.08em] text-bazooka-lime sm:text-[10px]">Compare Memberships</span>
            <h2 className="font-display mt-2 max-w-full text-[32px] font-black uppercase leading-[.95] min-[380px]:text-[35px] sm:text-[46px]">Same Core Access.<br /><span className="text-bazooka-lime">Choose Your Duration.</span></h2>
          </div>
          <p className="max-w-[560px] text-[10px] leading-5 text-bazooka-text-secondary sm:text-[11px] lg:justify-self-end">All three listed fitness plans include the same core facilities. The main difference is the membership duration and total price.</p>
        </motion.div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.article key={plan.name} {...reveal} transition={{ duration: .45, delay: index * .05 }} className={`group relative overflow-hidden rounded-[7px] border bg-bazooka-surface transition-all duration-300 hover:-translate-y-1 ${plan.bestValue ? "border-bazooka-lime shadow-[0_0_24px_rgba(255,181,46,.08)]" : "border-bazooka-border-strong hover:border-bazooka-lime"}`}>
              <div className={`p-5 sm:p-6 ${plan.bestValue ? "bg-bazooka-lime/[0.035]" : ""}`}>
                <div className="flex min-w-0 items-start justify-between gap-3">
                  <div className="min-w-0">
                    {plan.bestValue && <span className="mb-2 inline-flex items-center gap-1 rounded-full border border-bazooka-lime/50 bg-bazooka-lime/10 px-2 py-1 text-[7px] font-black uppercase text-bazooka-lime"><Sparkles className="size-3" /> Best Value</span>}
                    <h3 className="font-display text-[23px] font-black uppercase sm:text-[25px]">{plan.name}</h3>
                  </div>
                  <Clock3 className="size-5 shrink-0 text-bazooka-lime" />
                </div>

                <div className="mt-5 flex items-end justify-between gap-3 border-y border-bazooka-border/70 py-4">
                  <span className="inline-flex items-center gap-1.5 text-[8px] font-black uppercase text-bazooka-text-secondary"><IndianRupee className="size-3.5 text-bazooka-lime" /> Total</span>
                  <strong className="font-display text-[26px] font-black text-bazooka-lime">{plan.price}</strong>
                </div>

                <ul className="mt-5 space-y-3">
                  {comparisonRows.map((label) => (
                    <li key={label} className="flex items-center justify-between gap-3 text-[9px] text-bazooka-text-secondary">
                      <span>{label}</span>
                      <span className="grid size-6 shrink-0 place-items-center rounded-full border border-bazooka-lime/50 bg-bazooka-lime/10 text-bazooka-lime"><Check className="size-3.5 stroke-[3]" /></span>
                    </li>
                  ))}
                </ul>

                <Link href="/book-free-trial" className={`mt-6 inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-[4px] border px-4 text-[8px] font-black uppercase transition-all duration-300 hover:-translate-y-0.5 active:scale-[.97] ${plan.bestValue ? "border-bazooka-lime bg-bazooka-lime text-black hover:bg-bazooka-lime-hover" : "border-bazooka-border-strong text-white hover:border-bazooka-lime hover:bg-bazooka-lime/10 hover:text-bazooka-lime"}`}>Book Free Trial <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" /></Link>
              </div>
            </motion.article>
          ))}
        </div>

        <p className="mx-auto mt-4 max-w-[680px] text-center text-[9px] leading-4 text-bazooka-muted">Membership pricing and inclusions shown here are based on the current listed plans and are subject to final confirmation by the Bazooka Fitness team.</p>
      </div>
    </section>
  );
}
