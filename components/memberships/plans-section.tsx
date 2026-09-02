"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock3, Info, Sparkles } from "lucide-react";
import { reveal, shell } from "./memberships-shared";

type MembershipPlan = {
  name: string;
  subtitle: string;
  price: string;
  duration: string;
  popular: boolean;
  features: readonly string[];
};

const plans: readonly MembershipPlan[] = [
  {
    name: "Fitness Plan",
    subtitle: "Best Value",
    price: "₹15,990",
    duration: "12 Months",
    popular: true,
    features: ["Cardio", "Weight Training", "Steam", "Shower"],
  },
  {
    name: "Fitness Plan",
    subtitle: "Stay Consistent",
    price: "₹12,990",
    duration: "6 Months",
    popular: false,
    features: ["Cardio", "Weight Training", "Steam", "Shower"],
  },
  {
    name: "Fitness Plan",
    subtitle: "Build Momentum",
    price: "₹7,990",
    duration: "3 Months",
    popular: false,
    features: ["Cardio", "Weight Training", "Steam", "Shower"],
  },
] as const;

export default function MembershipPlansSection() {
  return (
    <section id="membership-plans" className="scroll-mt-24 border-b border-bazooka-border/70 bg-bazooka-black py-14 md:py-16">
      <div className={shell}>
        <motion.div {...reveal} className="mx-auto max-w-[680px] text-center">
          <span className="text-[9px] font-black uppercase tracking-[.08em] text-bazooka-lime sm:text-[10px]">Simple Membership Options</span>
          <h2 className="font-display mt-3 text-[31px] font-black uppercase leading-[.94] min-[380px]:text-[34px] sm:text-[40px]">Choose Your <span className="text-bazooka-lime">Plan</span></h2>
          <p className="mx-auto mt-3 max-w-[520px] text-[10px] leading-5 text-bazooka-text-secondary sm:text-[11px]">Pick the duration that suits your routine. Every listed fitness plan includes the same core gym facilities shown below.</p>
        </motion.div>

        <div className="mx-auto mt-8 grid max-w-[980px] gap-4 md:grid-cols-3 md:items-stretch">
          {plans.map((plan, index) => (
            <motion.article
              key={plan.duration}
              {...reveal}
              transition={{ duration: .5, delay: index * .05 }}
              className={`group relative flex min-h-[400px] flex-col overflow-hidden rounded-[7px] border bg-bazooka-surface p-5 transition-all duration-300 hover:-translate-y-1 sm:p-6 ${plan.popular ? "border-bazooka-lime shadow-[0_0_30px_rgba(255,181,46,.10)]" : "border-bazooka-border-strong hover:border-bazooka-lime hover:shadow-[0_0_22px_rgba(255,181,46,.08)]"}`}
            >
              {plan.popular && <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-bazooka-lime/60 bg-bazooka-lime/10 px-2.5 py-1 text-[7px] font-black uppercase text-bazooka-lime"><Sparkles className="size-3" /> Best Value</span>}

              <div className="min-w-0">
                <p className="text-[8px] font-black uppercase tracking-[.08em] text-bazooka-text-secondary">{plan.subtitle}</p>
                <h3 className="font-display mt-2 text-[21px] font-black uppercase sm:text-[22px]">{plan.name}</h3>
                <div className="mt-6 border-y border-bazooka-border/70 py-5">
                  <strong className="font-display block text-[35px] font-black leading-none text-bazooka-lime sm:text-[38px]">{plan.price}</strong>
                  <span className="mt-3 inline-flex items-center gap-2 text-[9px] font-bold uppercase text-white"><Clock3 className="size-3.5 text-bazooka-lime" />{plan.duration}</span>
                </div>

                <p className="mt-5 text-[8px] font-black uppercase tracking-[.07em] text-bazooka-text-secondary">Included</p>
                <ul className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-1">
                  {plan.features.map((feature) => <li key={feature} className="flex min-w-0 items-start gap-2.5 text-[9px] leading-4 text-bazooka-text-secondary"><CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-bazooka-lime" /><span className="min-w-0">{feature}</span></li>)}
                </ul>
              </div>

              <Link href="/book-free-trial" className={`mt-7 inline-flex min-h-11 w-full items-center justify-center gap-3 rounded-[4px] border px-4 text-[9px] font-black uppercase transition-all duration-300 hover:-translate-y-0.5 active:scale-[.97] md:mt-auto ${plan.popular ? "border-bazooka-lime bg-bazooka-lime text-black hover:bg-bazooka-lime-hover" : "border-bazooka-lime text-white hover:bg-bazooka-lime/10 hover:text-bazooka-lime"}`}>Try Bazooka First <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" /></Link>
            </motion.article>
          ))}
        </div>

        <p className="mx-auto mt-5 flex max-w-[720px] items-start justify-center gap-2 text-center text-[9px] leading-4 text-bazooka-text-secondary"><Info className="mt-0.5 size-3.5 shrink-0 text-bazooka-lime" /><span>Membership validity follows the selected plan duration. Taxes or applicable charges, if any, are confirmed before purchase.</span></p>
      </div>
    </section>
  );
}
