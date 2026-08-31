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

const inclusions = [
  "Gym Access",
  "Cardio Training",
  "Weight Training",
  "Steam & Shower",
  "Free Fitness Assessment",
  "Group Classes",
  "Locker Facility",
  "Nutrition Guidance",
  "Body Composition Analysis",
  "Clean & Hygienic Environment",
  "Parking Available",
  "Member Events",
  "Wi-Fi Access",
] as const;

export default function PlanComparisonSection() {
  return (
    <section className="border-b border-bazooka-border/70 bg-bazooka-black py-14 md:py-16">
      <div className={shell}>
        <motion.div {...reveal} className="grid gap-5 lg:grid-cols-[360px_1fr] lg:items-end">
          <div>
            <span className="text-[10px] font-black uppercase text-bazooka-lime">Compare Memberships</span>
            <h2 className="font-display mt-2 text-[38px] font-black uppercase leading-[.95] sm:text-[46px]">
              Same Access.
              <br />
              <span className="text-bazooka-lime">Choose Your Term.</span>
            </h2>
          </div>
          <p className="max-w-[560px] text-[11px] leading-5 text-bazooka-text-secondary lg:justify-self-end">
            Every membership gives you the same Bazooka experience. Compare the duration and total price, then choose the commitment that works best for you.
          </p>
        </motion.div>

        <motion.div {...reveal} className="mt-8 overflow-hidden rounded-[6px] border border-bazooka-border-strong bg-bazooka-surface">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left">
              <thead>
                <tr className="border-b border-bazooka-border-strong bg-bazooka-soft-black">
                  <th className="w-[34%] px-5 py-5 text-[10px] font-black uppercase text-bazooka-text-secondary">Membership Benefit</th>
                  {plans.map((plan) => (
                    <th key={plan.name} className={`relative px-5 py-5 text-center ${plan.bestValue ? "bg-bazooka-lime/[0.055]" : ""}`}>
                      {plan.bestValue && (
                        <span className="mb-2 inline-flex items-center gap-1 rounded-full border border-bazooka-lime/50 bg-bazooka-lime/10 px-2 py-1 text-[7px] font-black uppercase tracking-[.06em] text-bazooka-lime">
                          <Sparkles className="size-3" /> Best Value
                        </span>
                      )}
                      <strong className="font-display block text-[18px] font-black uppercase text-white">{plan.name}</strong>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-bazooka-border/70 bg-black/15">
                  <td className="px-5 py-4 text-[10px] font-bold text-white"><span className="inline-flex items-center gap-2"><Clock3 className="size-4 text-bazooka-lime" /> Duration</span></td>
                  {plans.map((plan) => <td key={plan.name} className={`px-5 py-4 text-center text-[11px] font-black text-white ${plan.bestValue ? "bg-bazooka-lime/[0.035]" : ""}`}>{plan.duration}</td>)}
                </tr>
                <tr className="border-b border-bazooka-border/70 bg-black/15">
                  <td className="px-5 py-4 text-[10px] font-bold text-white"><span className="inline-flex items-center gap-2"><IndianRupee className="size-4 text-bazooka-lime" /> Total Price</span></td>
                  {plans.map((plan) => <td key={plan.name} className={`font-display px-5 py-4 text-center text-[19px] font-black text-bazooka-lime ${plan.bestValue ? "bg-bazooka-lime/[0.035]" : ""}`}>{plan.price}</td>)}
                </tr>
                {inclusions.map((feature, index) => (
                  <tr key={feature} className={index < inclusions.length - 1 ? "border-b border-bazooka-border/60" : ""}>
                    <td className="px-5 py-4 text-[10px] font-semibold text-bazooka-text-secondary">{feature}</td>
                    {plans.map((plan) => (
                      <td key={plan.name} className={`px-5 py-4 text-center ${plan.bestValue ? "bg-bazooka-lime/[0.025]" : ""}`}>
                        <span className="mx-auto grid size-6 place-items-center rounded-full border border-bazooka-lime/50 bg-bazooka-lime/10 text-bazooka-lime">
                          <Check className="size-3.5 stroke-[3]" />
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="border-t border-bazooka-border-strong bg-bazooka-soft-black">
                  <td className="px-5 py-5 text-[10px] font-black uppercase text-white">Choose Your Membership</td>
                  {plans.map((plan) => (
                    <td key={plan.name} className={`px-4 py-4 text-center ${plan.bestValue ? "bg-bazooka-lime/[0.055]" : ""}`}>
                      <Link
                        href="/book-free-trial"
                        className={`group inline-flex h-9 items-center justify-center gap-2 rounded-[4px] border px-4 text-[8px] font-black uppercase transition-all duration-300 ${plan.bestValue ? "border-bazooka-lime bg-bazooka-lime text-black hover:bg-bazooka-lime-hover" : "border-bazooka-border-strong text-white hover:border-bazooka-lime hover:text-bazooka-lime"}`}
                      >
                        Choose Plan <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        <p className="mt-4 text-center text-[9px] leading-4 text-bazooka-text-muted">
          All three memberships include the same listed facilities and benefits. Only membership duration and total price differ.
        </p>
      </div>
    </section>
  );
}
