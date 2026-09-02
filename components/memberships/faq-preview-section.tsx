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
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="border-b border-bazooka-border/70 bg-bazooka-soft-black py-14">
      <div className={shell}>
        <motion.div {...reveal} className="flex min-w-0 items-center justify-center gap-3 sm:gap-4">
          <span className="h-px min-w-0 flex-1 bg-bazooka-border-strong sm:max-w-24" />
          <h2 className="font-display min-w-0 text-center text-[28px] font-black uppercase sm:text-[30px]">Common <span className="text-bazooka-lime">Questions</span></h2>
          <span className="h-px min-w-0 flex-1 bg-bazooka-border-strong sm:max-w-24" />
        </motion.div>

        <div className="mt-7 grid gap-4 lg:grid-cols-[1.45fr_.85fr]">
          <div className="min-w-0 space-y-3">
            {faqs.map(([question, answer], index) => {
              const isOpen = open === index;
              const triggerId = `membership-faq-trigger-${index}`;
              const panelId = `membership-faq-panel-${index}`;
              return (
                <motion.div key={question} {...reveal} transition={{ duration: .45, delay: index * .04 }} className={`overflow-hidden rounded-[5px] border bg-bazooka-surface transition-colors ${isOpen ? "border-bazooka-lime/70" : "border-bazooka-border-strong"}`}>
                  <button
                    id={triggerId}
                    type="button"
                    onClick={() => setOpen(isOpen ? null : index)}
                    className="flex min-h-12 w-full min-w-0 items-center justify-between gap-4 px-4 py-4 text-left text-[10px] font-bold leading-4 text-white transition hover:text-bazooka-lime sm:px-5"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    <span className="min-w-0">{question}</span>
                    {isOpen ? <Minus className="size-4 shrink-0 text-bazooka-lime" /> : <Plus className="size-4 shrink-0" />}
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={triggerId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="border-t border-bazooka-border px-4 py-4 text-[9px] leading-5 text-bazooka-text-secondary sm:px-5">{answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          <motion.aside {...reveal} className="flex min-h-[205px] min-w-0 flex-col items-start gap-5 rounded-[5px] border border-bazooka-border-strong bg-bazooka-surface px-5 py-6 sm:flex-row sm:items-center sm:px-6">
            <span className="grid size-14 shrink-0 place-items-center rounded-full border border-bazooka-lime text-bazooka-lime sm:size-16"><Headphones className="size-7 sm:size-8" /></span>
            <div className="min-w-0">
              <h3 className="font-display text-[20px] font-black uppercase">Still Have Questions?</h3>
              <p className="mt-2 text-[9px] leading-4 text-bazooka-text-secondary">Our team is here to help you choose the right plan for your goals.</p>
              <Link href="/contact" className="group mt-4 inline-flex min-h-10 items-center gap-2 rounded-[4px] border border-bazooka-border-strong px-4 text-[9px] font-black uppercase text-bazooka-lime transition-all hover:border-bazooka-lime hover:bg-bazooka-lime/10 active:scale-[.98]">Contact Us <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" /></Link>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
