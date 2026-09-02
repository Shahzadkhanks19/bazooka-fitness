"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Coffee, Leaf, Salad, UtensilsCrossed } from "lucide-react";

const highlights = [
  [Salad, "Healthy Meals", "Balanced meal options built around an active lifestyle."],
  [Leaf, "Fresh Ingredients", "Fresh, lighter choices for everyday nutrition."],
  [Coffee, "Drinks & Refreshments", "Convenient drinks and refreshments before or after training."],
] as const;

export default function CafeBazookaHighlight({ compact = false }: { compact?: boolean }) {
  return (
    <section className="border-b border-bazooka-border/70 bg-bazooka-soft-black py-12 md:py-14">
      <div className="mx-auto w-[min(calc(100%-40px),1180px)] md:w-[min(calc(100%-64px),1180px)]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className={`grid overflow-hidden rounded-[7px] border border-bazooka-border-strong bg-bazooka-surface ${compact ? "lg:grid-cols-[1fr_390px]" : "lg:grid-cols-[1.05fr_.95fr]"}`}
        >
          <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
            <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[.08em] text-bazooka-lime"><UtensilsCrossed className="size-4" /> In-House Healthy Cafe</span>
            <h2 className="font-display mt-3 text-[36px] font-black uppercase leading-[.92] sm:text-[46px]">Train Strong.<br /><span className="text-bazooka-lime">Fuel Smarter.</span></h2>
            <p className="mt-4 max-w-[560px] text-[10px] leading-5 text-bazooka-text-secondary">Cafe Bazooka brings healthy meals, protein-focused food and refreshing options into the Bazooka experience, so members can train, recover and refuel in one place.</p>

            <div className={`mt-6 grid gap-3 ${compact ? "sm:grid-cols-3" : "sm:grid-cols-3"}`}>
              {highlights.map(([Icon, title, text]) => (
                <div key={title} className="rounded-[5px] border border-bazooka-border bg-bazooka-black p-4 transition hover:border-bazooka-lime">
                  <Icon className="size-5 text-bazooka-lime" />
                  <strong className="font-display mt-3 block text-[12px] font-black uppercase">{title}</strong>
                  <p className="mt-2 text-[8px] leading-4 text-bazooka-text-secondary">{text}</p>
                </div>
              ))}
            </div>

            <Link href="/cafe-bazooka" className="mt-6 inline-flex h-10 w-fit items-center gap-3 rounded-[4px] bg-bazooka-lime px-5 text-[9px] font-black uppercase text-black transition hover:bg-bazooka-lime-hover">Explore Cafe Bazooka <ArrowRight className="size-4" /></Link>
          </div>

          <div className="relative min-h-[300px] bg-[url('https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=1400&q=90')] bg-cover bg-center lg:min-h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-bazooka-surface/80 via-black/10 to-transparent lg:from-bazooka-surface/55" />
            <div className="absolute bottom-6 left-6 rounded-[5px] border border-white/15 bg-black/70 px-4 py-3 backdrop-blur-sm">
              <span className="font-display block text-[18px] font-black uppercase text-white">Cafe <span className="text-bazooka-lime">Bazooka</span></span>
              <span className="mt-1 block text-[8px] uppercase tracking-[.12em] text-bazooka-text-secondary">Eat Well • Recover Better • Perform Stronger</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
