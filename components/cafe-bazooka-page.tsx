"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Beef,
  Clock3,
  Coffee,
  Dumbbell,
  GlassWater,
  Leaf,
  MapPin,
  Salad,
  Sparkles,
  UtensilsCrossed,
} from "lucide-react";

const shell = "mx-auto w-[min(calc(100%-40px),1180px)] md:w-[min(calc(100%-64px),1180px)]";

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.08 },
  transition: { duration: 0.55, ease: "easeOut" as const },
};

const categories = [
  [Beef, "Protein Meals", "High-protein meals built to support recovery, muscle gain and everyday training."],
  [GlassWater, "Shakes & Smoothies", "Refreshing protein shakes, smoothies and quick post-workout refuel options."],
  [Salad, "Fresh & Light", "Balanced bowls, salads and lighter choices for members who want to stay on track."],
  [Coffee, "Coffee & Refreshments", "Coffee, hydration and convenient refreshments before, during or after training."],
] as const;

const benefits = [
  [Dumbbell, "Built Around Training", "Food and drinks selected for people who actually train — not just another generic cafe menu."],
  [Leaf, "Smarter Everyday Choices", "Fresh, practical options that make eating better easier without making it complicated."],
  [Sparkles, "One Complete Experience", "Train, cool down, refuel and catch up without leaving Bazooka Fitness."],
] as const;

const gallery = [
  "https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=1200&q=88",
  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=88",
  "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?auto=format&fit=crop&w=1200&q=88",
];

export default function CafeBazookaPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-bazooka-black text-bazooka-text">
      <section className="relative min-h-[650px] overflow-hidden border-b border-bazooka-border/70 sm:min-h-[700px]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=1800&q=90')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-bazooka-black via-transparent to-black/20" />

        <div className={`${shell} relative z-10 flex min-h-[650px] items-end pb-16 pt-36 sm:min-h-[700px] sm:pb-20 lg:items-center lg:pb-0`}>
          <motion.div {...reveal} className="max-w-[760px]">
            <span className="inline-flex items-center gap-2 rounded-full border border-bazooka-lime/40 bg-bazooka-lime/10 px-4 py-2 text-[9px] font-black uppercase tracking-[.12em] text-bazooka-lime backdrop-blur-sm">
              <UtensilsCrossed className="size-4" /> Inside Bazooka Fitness
            </span>
            <h1 className="font-display mt-5 text-[54px] font-black uppercase leading-[.84] tracking-[-2px] sm:text-[74px] md:text-[88px]">
              Cafe <span className="text-bazooka-lime">Bazooka.</span>
            </h1>
            <p className="mt-5 max-w-[620px] text-[12px] leading-6 text-bazooka-text-secondary sm:text-[13px]">
              Train hard. Refuel smart. Cafe Bazooka brings healthy meals, protein-focused food, shakes and refreshing options into the same performance-first environment.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#menu" className="inline-flex h-11 items-center gap-3 rounded-[4px] bg-bazooka-lime px-6 text-[10px] font-black uppercase text-black transition hover:bg-bazooka-lime-hover active:scale-[.98]">
                Explore The Cafe <ArrowRight className="size-4" />
              </a>
              <Link href="/contact" className="inline-flex h-11 items-center gap-3 rounded-[4px] border border-white/20 bg-black/35 px-6 text-[10px] font-black uppercase text-white backdrop-blur-sm transition hover:border-bazooka-lime hover:text-bazooka-lime active:scale-[.98]">
                Ask About Nutrition
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-bazooka-border/70 bg-bazooka-soft-black py-16 md:py-20">
        <div className={`${shell} grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center`}>
          <motion.div {...reveal}>
            <span className="text-[9px] font-black uppercase tracking-[.14em] text-bazooka-lime">More Than A Gym Cafe</span>
            <h2 className="font-display mt-3 text-[40px] font-black uppercase leading-[.9] sm:text-[52px]">Fuel That Fits<br />Your Training.</h2>
            <p className="mt-5 max-w-[560px] text-[11px] leading-6 text-bazooka-text-secondary">
              Cafe Bazooka is designed around an active lifestyle. Whether you need something before training, protein after a heavy session, a lighter meal or simply a place to recharge, the cafe keeps everything conveniently under one roof.
            </p>
          </motion.div>

          <motion.div {...reveal} className="grid gap-3 sm:grid-cols-3">
            {benefits.map(([Icon, title, text]) => (
              <article key={title} className="rounded-[6px] border border-bazooka-border bg-bazooka-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-bazooka-lime">
                <div className="grid size-10 place-items-center rounded-full bg-bazooka-lime/10 text-bazooka-lime"><Icon className="size-5" /></div>
                <h3 className="font-display mt-4 text-[16px] font-black uppercase">{title}</h3>
                <p className="mt-3 text-[9px] leading-5 text-bazooka-text-secondary">{text}</p>
              </article>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="menu" className="border-b border-bazooka-border/70 bg-bazooka-black py-16 md:py-20">
        <div className={shell}>
          <motion.div {...reveal} className="max-w-[700px]">
            <span className="text-[9px] font-black uppercase tracking-[.14em] text-bazooka-lime">What You’ll Find</span>
            <h2 className="font-display mt-3 text-[40px] font-black uppercase leading-[.9] sm:text-[52px]">Built For Before.<br />During. After.</h2>
          </motion.div>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map(([Icon, title, text], index) => (
              <motion.article key={title} {...reveal} transition={{ duration: .5, delay: index * .05 }} className="group rounded-[6px] border border-bazooka-border bg-bazooka-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-bazooka-lime hover:bg-bazooka-card-hover">
                <Icon className="size-6 text-bazooka-lime transition-transform duration-300 group-hover:scale-110" />
                <h3 className="font-display mt-5 text-[19px] font-black uppercase">{title}</h3>
                <p className="mt-3 text-[9px] leading-5 text-bazooka-text-secondary">{text}</p>
              </motion.article>
            ))}
          </div>

          <p className="mt-5 text-[8px] uppercase tracking-[.08em] text-bazooka-muted">Menu availability may vary. Ask the Cafe Bazooka team for today’s options.</p>
        </div>
      </section>

      <section className="border-b border-bazooka-border/70 bg-bazooka-soft-black py-16 md:py-20">
        <div className={shell}>
          <motion.div {...reveal} className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-[9px] font-black uppercase tracking-[.14em] text-bazooka-lime">The Cafe Experience</span>
              <h2 className="font-display mt-3 text-[40px] font-black uppercase leading-[.9] sm:text-[52px]">Eat Well.<br />Recover Better.</h2>
            </div>
            <span className="max-w-[350px] text-[9px] leading-5 text-bazooka-text-secondary">A clean, convenient space designed to extend the Bazooka experience beyond your workout.</span>
          </motion.div>

          <div className="mt-9 grid gap-4 md:grid-cols-[1.2fr_.8fr_.8fr]">
            {gallery.map((image, index) => (
              <motion.div key={image} {...reveal} className={`overflow-hidden rounded-[6px] border border-bazooka-border bg-bazooka-card ${index === 0 ? "min-h-[360px]" : "min-h-[280px] md:min-h-[360px]"}`}>
                <div className="h-full min-h-[inherit] bg-cover bg-center transition-transform duration-700 hover:scale-[1.035]" style={{ backgroundImage: `url(${image})` }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-bazooka-border/70 bg-bazooka-black py-16 md:py-20">
        <div className={`${shell} grid gap-5 md:grid-cols-2`}>
          <motion.article {...reveal} className="rounded-[7px] border border-bazooka-border bg-bazooka-card p-6 sm:p-8">
            <Clock3 className="size-6 text-bazooka-lime" />
            <span className="mt-5 block text-[8px] font-black uppercase tracking-[.12em] text-bazooka-muted">Cafe Access</span>
            <h3 className="font-display mt-2 text-[27px] font-black uppercase">Visit During Your Workout.</h3>
            <p className="mt-3 text-[10px] leading-5 text-bazooka-text-secondary">Cafe availability follows the club environment. Ask reception for today’s operating hours and available items.</p>
          </motion.article>

          <motion.article {...reveal} className="rounded-[7px] border border-bazooka-border bg-bazooka-card p-6 sm:p-8">
            <MapPin className="size-6 text-bazooka-lime" />
            <span className="mt-5 block text-[8px] font-black uppercase tracking-[.12em] text-bazooka-muted">Location</span>
            <h3 className="font-display mt-2 text-[27px] font-black uppercase">Inside Bazooka Fitness.</h3>
            <p className="mt-3 text-[10px] leading-5 text-bazooka-text-secondary">Floor 6, Shanti One, Plot No. 39, 11th A Road, Sardarpura, Jodhpur, Rajasthan 342001.</p>
          </motion.article>
        </div>
      </section>

      <section className="bg-bazooka-lime py-12 text-bazooka-black md:py-14">
        <motion.div {...reveal} className={`${shell} flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between`}>
          <div>
            <span className="text-[9px] font-black uppercase tracking-[.14em]">Train • Refuel • Recover</span>
            <h2 className="font-display mt-2 text-[38px] font-black uppercase leading-[.9] sm:text-[48px]">Make Cafe Bazooka<br />Part Of Your Routine.</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/book-free-trial" className="inline-flex h-11 items-center gap-3 rounded-[4px] bg-black px-6 text-[10px] font-black uppercase text-white transition hover:bg-bazooka-surface active:scale-[.98]">Book Free Trial <ArrowRight className="size-4" /></Link>
            <Link href="/contact" className="inline-flex h-11 items-center rounded-[4px] border border-black/25 px-6 text-[10px] font-black uppercase transition hover:bg-black/10 active:scale-[.98]">Contact Bazooka</Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
