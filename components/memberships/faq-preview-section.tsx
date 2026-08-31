"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Headphones, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { reveal, shell } from "./memberships-shared";

const faqs = [
  ["Can I upgrade or downgrade my membership later?", "Yes. Our team can help you move to a plan that better fits your goals, subject to the current membership terms."],
  ["Is there any joining fee?", "Any joining or administrative charges, if applicable, will be clearly communicated before you confirm your membership."],
  ["Can I freeze my membership?", "Membership freeze requests are handled according to the active membership terms and eligibility rules."],
] as const;

export default function MembershipFaqPreview() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="border-b border-bazooka-border/70 bg-bazooka-soft-black py-14">
      <div className={shell}>
        <motion.div {...reveal} className="flex items-center justify-center gap-4">
          <span className="h-px w-24 bg-bazooka-border-strong" />
          <h2 className="font-display text-center text-[30px] font-black uppercase">Common <span className="text-bazooka-lime">Questions</span></h2>
          <span className="h-px w-24 bg-bazooka-border-strong" />
        </motion.div>

        <div className="mt-7 grid gap-4 lg:grid-cols-[1.45fr_.85fr]">
          <div className="space-y-3">
            {faqs.map(([question, answer], index) => {
              const isOpen = open === index;
              return (
                <motion.div key={question} {...reveal} transition={{ duration: .45, delay: index * .04 }} className="overflow-hidden rounded-[5px] border border-bazooka-border-strong bg-bazooka-surface">
                  <button type="button" onClick={() => setOpen(isOpen ? null : index)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-[10px] font-bold text-white transition hover:text-bazooka-lime" aria-expanded={isOpen}>
                    {question}{isOpen ? <Minus className="size-4 shrink-0" /> : <Plus className="size-4 shrink-0" />}
                  </button>
                  <AnimatePresence initial={false}>{isOpen && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden"><p className="border-t border-bazooka-border px-5 py-4 text-[9px] leading-5 text-bazooka-text-secondary">{answer}</p></motion.div>}</AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          <motion.aside {...reveal} className="flex min-h-[205px] items-center gap-5 rounded-[5px] border border-bazooka-border-strong bg-bazooka-surface px-6 py-6">
            <span className="grid size-16 shrink-0 place-items-center rounded-full border border-bazooka-lime text-bazooka-lime"><Headphones className="size-8" /></span>
            <div>
              <h3 className="font-display text-[20px] font-black uppercase">Still Have Questions?</h3>
              <p className="mt-2 text-[9px] leading-4 text-bazooka-text-secondary">Our team is here to help you choose the right plan for your goals.</p>
              <Link href="/contact" className="mt-4 inline-flex items-center gap-2 text-[9px] font-black uppercase text-bazooka-lime">Contact Us <ArrowRight className="size-3.5" /></Link>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
