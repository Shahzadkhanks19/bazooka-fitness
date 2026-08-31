"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Info } from "lucide-react";
import { reveal, shell } from "./memberships-shared";

const plans = [
  { name: "Basic", subtitle: "Start Your Journey", price: "₹1,499", features: ["Gym Access (Day Time)", "Standard Equipment", "Locker Facility", "1 Group Class / Week"] },
  { name: "Standard", subtitle: "Stay Consistent", price: "₹2,499", popular: true, features: ["Gym Access (All Time)", "Group Classes", "Locker Facility", "Body Composition Check", "Diet Guidance (Basic)"] },
  { name: "Premium", subtitle: "Perform Better", price: "₹3,999", features: ["All Standard Benefits", "Personal Training (2 Sessions/Month)", "Advanced Group Classes", "Body Composition Check", "Diet Guidance (Advanced)"] },
  { name: "Transformation", subtitle: "Complete Transformation", price: "₹5,999", features: ["All Premium Benefits", "Personal Training (Unlimited)", "Custom Diet Plan", "Weekly Progress Tracking", "Priority Support"] },
] as const;

export default function MembershipPlansSection() {
  return (
    <section id="membership-plans" className="border-b border-bazooka-border/70 bg-bazooka-black py-14 md:py-16">
      <div className={shell}>
        <motion.div {...reveal} className="flex items-center justify-center gap-4">
          <span className="h-px w-20 bg-bazooka-border-strong" />
          <h2 className="font-display text-center text-[30px] font-black uppercase sm:text-[36px]">Choose Your <span className="text-bazooka-lime">Plan</span></h2>
          <span className="h-px w-20 bg-bazooka-border-strong" />
        </motion.div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan, index) => (
            <motion.article
              key={plan.name}
              {...reveal}
              transition={{ duration: .5, delay: index * .05 }}
              className={`relative flex min-h-[430px] flex-col rounded-[5px] border bg-bazooka-surface p-6 transition-all duration-300 hover:-translate-y-1 ${plan.popular ? "border-bazooka-lime shadow-[0_0_30px_rgba(182,240,0,.08)]" : "border-bazooka-border-strong hover:border-bazooka-lime"}`}
            >
              {plan.popular && <span className="absolute inset-x-0 top-0 rounded-t-[4px] bg-bazooka-lime py-1.5 text-center text-[8px] font-black uppercase text-black">Most Popular</span>}
              <div className={plan.popular ? "pt-5" : ""}>
                <h3 className="font-display text-[22px] font-black uppercase">{plan.name}</h3>
                <p className="mt-1 text-[9px] font-bold uppercase text-bazooka-text-secondary">{plan.subtitle}</p>
                <div className="mt-6 flex items-end gap-1.5"><strong className="font-display text-[34px] font-black leading-none text-bazooka-lime">{plan.price}</strong><span className="mb-1 text-[9px] uppercase text-bazooka-text-secondary">/Month</span></div>
                <ul className="mt-7 space-y-3">
                  {plan.features.map((feature) => <li key={feature} className="flex items-start gap-2.5 text-[9px] leading-4 text-bazooka-text-secondary"><CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-bazooka-lime" />{feature}</li>)}
                </ul>
              </div>
              <Link href="/book-free-trial" className={`mt-auto inline-flex h-10 items-center justify-center gap-3 rounded-[4px] border text-[9px] font-black uppercase transition-all duration-300 ${plan.popular ? "border-bazooka-lime bg-bazooka-lime text-black hover:bg-bazooka-lime-hover" : "border-bazooka-lime text-white hover:bg-bazooka-lime hover:text-black"}`}>Choose Plan <ArrowRight className="size-3.5" /></Link>
            </motion.article>
          ))}
        </div>

        <p className="mt-5 flex items-center justify-center gap-2 text-center text-[9px] text-bazooka-text-secondary"><Info className="size-3.5 text-bazooka-lime" /> All memberships are valid for 1 month. GST extra as applicable.</p>
      </div>
    </section>
  );
}
