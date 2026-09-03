"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Coffee, GlassWater, UtensilsCrossed } from "lucide-react";

const highlights = [
  [UtensilsCrossed, "Cafe Food", "Ask the cafe team about the food options available during your visit."],
  [GlassWater, "Drinks & Refreshments", "Choose from the drinks and refreshments currently available at the cafe."],
  [Coffee, "Inside The Club", "Stop by Cafe Bazooka without leaving the fitness club."],
] as const;

export default function CafeBazookaHighlight({ compact = false }: { compact?: boolean }) {
  return (
    <section className="border-b border-bazooka-border/70 bg-bazooka-soft-black py-12 md:py-14">
      <div className="mx-auto w-[min(calc(100%-32px),1180px)] sm:w-[min(calc(100%-40px),1180px)] md:w-[min(calc(100%-64px),1180px)]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.08 }}
          transition={{ duration: 0.55 }}
          className={`grid overflow-hidden rounded-[7px] border border-bazooka-border-strong bg-bazooka-surface shadow-[0_18px_55px_rgba(0,0,0,.18)] ${compact ? "lg:grid-cols-[1fr_390px]" : "lg:grid-cols-[1.05fr_.95fr]"}`}
        >
          <div className="flex min-w-0 flex-col justify-center p-5 sm:p-8 lg:p-10">
            <span className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[.08em] text-bazooka-lime sm:text-[10px]"><UtensilsCrossed className="size-4 shrink-0" /> In-House Cafe</span>
            <h2 className="font-display mt-3 text-[32px] font-black uppercase leading-[.92] sm:text-[46px]">Train. Recharge.<br /><span className="text-bazooka-lime">Stop By The Cafe.</span></h2>
            <p className="mt-4 max-w-[560px] text-[10px] leading-5 text-bazooka-text-secondary">Cafe Bazooka adds food, drinks and refreshments to the club experience. Exact menu items and availability may vary.</p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {highlights.map(([Icon, title, text]) => (
                <div key={title} className="group min-w-0 rounded-[5px] border border-bazooka-border bg-bazooka-black p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-bazooka-lime hover:bg-bazooka-lime/[.035] active:scale-[.985]">
                  <Icon className="size-5 text-bazooka-lime transition-transform duration-300 group-hover:scale-110" />
                  <strong className="font-display mt-3 block text-[12px] font-black uppercase">{title}</strong>
                  <p className="mt-2 text-[8px] leading-4 text-bazooka-text-secondary">{text}</p>
                </div>
              ))}
            </div>

            <Link href="/cafe-bazooka" className="group mt-6 inline-flex min-h-11 w-full items-center justify-center gap-3 rounded-[4px] border border-bazooka-lime bg-bazooka-lime px-5 text-[9px] font-black uppercase text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-bazooka-lime-hover hover:shadow-[0_0_24px_rgba(255,181,46,.18)] active:scale-[.97] sm:w-fit">Explore Cafe Bazooka <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></Link>
          </div>

          <div className="group relative min-h-[300px] overflow-hidden bg-[url('https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=1400&q=90')] bg-cover bg-center transition-transform duration-700 lg:min-h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-bazooka-surface/72 via-black/8 to-transparent lg:from-bazooka-surface/48" />
            <div className="absolute bottom-5 left-5 right-5 rounded-[5px] border border-white/15 bg-black/62 px-4 py-3 backdrop-blur-sm sm:bottom-6 sm:left-6 sm:right-auto">
              <span className="font-display block text-[18px] font-black uppercase text-white">Cafe <span className="text-bazooka-lime">Bazooka</span></span>
              <span className="mt-1 block text-[8px] uppercase tracking-[.1em] text-bazooka-text-secondary">Food • Drinks • Refreshments</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
