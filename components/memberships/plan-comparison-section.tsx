"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, Clock3, IndianRupee, Minus, Sparkles } from "lucide-react";
import { reveal, shell } from "./memberships-shared";

const plans = [
  { name: "12 Months", price: "₹15,990", duration: "12 Months", bestValue: true },
  { name: "6 Months", price: "₹12,990", duration: "6 Months", bestValue: false },
  { name: "3 Months", price: "₹7,990", duration: "3 Months", bestValue: false },
] as const;

const comparisonRows = [
  { label: "Gym Access", values: [true, true, true] },
  { label: "Cardio Training", values: [true, true, true] },
  { label: "Weight Training", values: [true, true, true] },
  { label: "Steam & Shower", values: [true, true, true] },
  { label: "Free Fitness Assessment", values: [true, true, true] },
  { label: "Locker Facility", values: [true, true, true] },
  { label: "Body Composition Analysis", values: [true, true, false] },
  { label: "Group Classes", values: [true, true, false] },
  { label: "Basic Nutrition Guidance", values: [true, true, false] },
  { label: "Advanced Nutrition Guidance", values: [true, false, false] },
  { label: "Monthly Progress Review", values: [true, true, false] },
  { label: "Priority Trainer Consultation", values: [true, false, false] },
  { label: "Complimentary PT Sessions", values: ["2 Sessions", "1 Session", false] },
  { label: "Member Events", values: [true, true, true] },
  { label: "Parking Available", values: [true, true, true] },
  { label: "Wi-Fi Access", values: [true, true, true] },
] as const;

function ValueCell({ value }: { value: boolean | string }) {
  if (typeof value === "string") return <span className="text-[9px] font-black uppercase text-bazooka-lime">{value}</span>;
  if (value) return <span className="mx-auto grid size-6 place-items-center rounded-full border border-bazooka-lime/50 bg-bazooka-lime/10 text-bazooka-lime"><Check className="size-3.5 stroke-[3]" /></span>;
  return <span className="mx-auto grid size-6 place-items-center rounded-full border border-bazooka-border-strong bg-black/20 text-bazooka-muted"><Minus className="size-3.5" /></span>;
}

export default function PlanComparisonSection() {
  return (
    <section className="border-b border-bazooka-border/70 bg-bazooka-black py-12 md:py-16">
      <div className={shell}>
        <motion.div {...reveal} className="grid gap-5 lg:grid-cols-[360px_1fr] lg:items-end">
          <div>
            <span className="text-[10px] font-black uppercase text-bazooka-lime">Compare Memberships</span>
            <h2 className="font-display mt-2 text-[34px] font-black uppercase leading-[.95] sm:text-[46px]">Find The Right<br /><span className="text-bazooka-lime">Membership.</span></h2>
          </div>
          <p className="max-w-[560px] text-[11px] leading-5 text-bazooka-text-secondary lg:justify-self-end">Compare access, coaching support and added benefits across all three membership durations, then book a free trial before you decide.</p>
        </motion.div>

        <div className="mt-7 grid gap-4 md:hidden">
          {plans.map((plan, planIndex) => (
            <motion.article key={plan.name} {...reveal} className={`overflow-hidden rounded-[6px] border bg-bazooka-surface transition-all duration-300 hover:-translate-y-0.5 ${plan.bestValue ? "border-bazooka-lime" : "border-bazooka-border-strong hover:border-bazooka-lime"}`}>
              <div className={`p-5 ${plan.bestValue ? "bg-bazooka-lime/[0.045]" : ""}`}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    {plan.bestValue && <span className="mb-2 inline-flex items-center gap-1 rounded-full border border-bazooka-lime/50 bg-bazooka-lime/10 px-2 py-1 text-[7px] font-black uppercase text-bazooka-lime"><Sparkles className="size-3" /> Best Value</span>}
                    <h3 className="font-display text-[24px] font-black uppercase">{plan.name}</h3>
                    <p className="mt-1 flex items-center gap-2 text-[9px] text-bazooka-text-secondary"><Clock3 className="size-3.5 text-bazooka-lime" />{plan.duration}</p>
                  </div>
                  <div className="text-right"><span className="font-display block text-[25px] font-black text-bazooka-lime">{plan.price}</span><span className="text-[8px] uppercase text-bazooka-muted">Total Price</span></div>
                </div>
              </div>
              <div className="divide-y divide-bazooka-border/70 px-5">
                {comparisonRows.map((row) => (
                  <div key={row.label} className="flex min-w-0 items-center justify-between gap-4 py-3">
                    <span className="min-w-0 text-[9px] font-semibold leading-4 text-bazooka-text-secondary">{row.label}</span>
                    <span className="shrink-0"><ValueCell value={row.values[planIndex]} /></span>
                  </div>
                ))}
              </div>
              <div className="border-t border-bazooka-border-strong p-4">
                <Link href="/book-free-trial" className={`group inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-[4px] border px-4 text-[8px] font-black uppercase transition-all duration-300 hover:-translate-y-0.5 active:scale-[.97] ${plan.bestValue ? "border-bazooka-lime bg-bazooka-lime text-black hover:bg-bazooka-lime-hover" : "border-bazooka-border-strong text-white hover:border-bazooka-lime hover:bg-bazooka-lime/10 hover:text-bazooka-lime"}`}>Book Free Trial <ArrowRight className="size-3.5" /></Link>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div {...reveal} className="mt-8 hidden overflow-hidden rounded-[6px] border border-bazooka-border-strong bg-bazooka-surface md:block">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left">
              <thead><tr className="border-b border-bazooka-border-strong bg-bazooka-soft-black"><th className="w-[34%] px-5 py-5 text-[10px] font-black uppercase text-bazooka-text-secondary">Membership Benefit</th>{plans.map((plan)=><th key={plan.name} className={`relative px-5 py-5 text-center ${plan.bestValue?"bg-bazooka-lime/[0.055]":""}`}>{plan.bestValue&&<span className="mb-2 inline-flex items-center gap-1 rounded-full border border-bazooka-lime/50 bg-bazooka-lime/10 px-2 py-1 text-[7px] font-black uppercase text-bazooka-lime"><Sparkles className="size-3"/> Best Value</span>}<strong className="font-display block text-[18px] font-black uppercase text-white">{plan.name}</strong></th>)}</tr></thead>
              <tbody>
                <tr className="border-b border-bazooka-border/70 bg-black/15"><td className="px-5 py-4 text-[10px] font-bold text-white"><span className="inline-flex items-center gap-2"><Clock3 className="size-4 text-bazooka-lime"/> Duration</span></td>{plans.map((plan)=><td key={plan.name} className={`px-5 py-4 text-center text-[11px] font-black text-white ${plan.bestValue?"bg-bazooka-lime/[0.035]":""}`}>{plan.duration}</td>)}</tr>
                <tr className="border-b border-bazooka-border/70 bg-black/15"><td className="px-5 py-4 text-[10px] font-bold text-white"><span className="inline-flex items-center gap-2"><IndianRupee className="size-4 text-bazooka-lime"/> Total Price</span></td>{plans.map((plan)=><td key={plan.name} className={`font-display px-5 py-4 text-center text-[19px] font-black text-bazooka-lime ${plan.bestValue?"bg-bazooka-lime/[0.035]":""}`}>{plan.price}</td>)}</tr>
                {comparisonRows.map((row,index)=><tr key={row.label} className={index<comparisonRows.length-1?"border-b border-bazooka-border/60":""}><td className="px-5 py-4 text-[10px] font-semibold text-bazooka-text-secondary">{row.label}</td>{plans.map((plan,planIndex)=><td key={plan.name} className={`px-5 py-4 text-center ${plan.bestValue?"bg-bazooka-lime/[0.025]":""}`}><ValueCell value={row.values[planIndex]}/></td>)}</tr>)}
                <tr className="border-t border-bazooka-border-strong bg-bazooka-soft-black"><td className="px-5 py-5 text-[10px] font-black uppercase text-white">Experience Bazooka First</td>{plans.map((plan)=><td key={plan.name} className={`px-4 py-4 text-center ${plan.bestValue?"bg-bazooka-lime/[0.055]":""}`}><Link href="/book-free-trial" className={`group inline-flex h-9 items-center justify-center gap-2 rounded-[4px] border px-4 text-[8px] font-black uppercase transition-all duration-300 hover:-translate-y-0.5 active:scale-[.97] ${plan.bestValue?"border-bazooka-lime bg-bazooka-lime text-black hover:bg-bazooka-lime-hover":"border-bazooka-border-strong text-white hover:border-bazooka-lime hover:bg-bazooka-lime/10 hover:text-bazooka-lime"}`}>Book Free Trial <ArrowRight className="size-3"/></Link></td>)}</tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        <p className="mt-4 text-center text-[9px] leading-4 text-bazooka-muted">Membership benefits and pricing are subject to confirmation by the Bazooka Fitness team at the time of joining.</p>
      </div>
    </section>
  );
}
