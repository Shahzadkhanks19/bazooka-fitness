"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Dumbbell, Gauge, ShieldCheck, Sparkles, UsersRound } from "lucide-react";
import type { FacilityDetail } from "./facility-data";
import { facilityDetails } from "./facility-data";
import { outlineButton, primaryButton, reveal, shell } from "./facilities-shared";

const galleryImages = [
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=90",
  "https://images.unsplash.com/photo-1534368420009-621bfab424a8?auto=format&fit=crop&w=1400&q=90",
  "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1400&q=90",
  "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1400&q=90",
] as const;

const experienceItems = [
  [Dumbbell, "Purpose-Built Setup", "Equipment and layout selected to make each session feel focused and efficient."],
  [Gauge, "Performance Focus", "A training environment designed around progress, consistency and measurable improvement."],
  [ShieldCheck, "Clean & Maintained", "A premium space with strong emphasis on hygiene, upkeep and member comfort."],
  [UsersRound, "Coach-Friendly", "Plenty of room for guided sessions, movement correction and structured training."],
] as const;

export default function FacilityDetailPage({ facility }: { facility: FacilityDetail }) {
  const related = facilityDetails.filter((item) => item.slug !== facility.slug).slice(0, 3);

  return (
    <>
      <section
        className="relative min-h-[690px] overflow-hidden border-b border-bazooka-border/70 bg-cover bg-center"
        style={{ backgroundImage: `url(${facility.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/78 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
        <div className={`${shell} relative z-10 flex min-h-[690px] items-end py-14 md:items-center`}>
          <motion.div {...reveal} className="max-w-[640px]">
            <Link href="/facilities" className="mb-8 inline-flex items-center gap-2 text-[9px] font-black uppercase text-bazooka-text-secondary transition hover:text-bazooka-lime">
              <ArrowLeft className="size-3.5" /> Back to Facilities
            </Link>
            <span className="block text-[10px] font-black uppercase tracking-[.08em] text-bazooka-lime">{facility.eyebrow}</span>
            <h1 className="font-display mt-3 text-[56px] font-black uppercase leading-[.88] sm:text-[72px] lg:text-[84px]">{facility.title}</h1>
            <p className="mt-5 max-w-[560px] text-[12px] leading-6 text-bazooka-text-secondary">{facility.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/book-free-trial" className={primaryButton}>Book Free Trial <ArrowRight className="size-4" /></Link>
              <Link href="/contact" className={outlineButton}>Schedule A Tour <ArrowRight className="size-4" /></Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-bazooka-border/70 bg-bazooka-black py-14 md:py-18">
        <div className={`${shell} grid gap-8 lg:grid-cols-[.95fr_1.05fr] lg:items-center`}>
          <motion.div {...reveal} className="relative min-h-[420px] overflow-hidden rounded-[6px] border border-bazooka-border-strong bg-cover bg-center" style={{ backgroundImage: `url(${galleryImages[1]})` }}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
            <span className="font-display absolute bottom-5 left-5 text-[28px] font-black uppercase leading-none text-white">Built To <span className="text-bazooka-lime">Perform.</span></span>
          </motion.div>

          <motion.div {...reveal}>
            <span className="text-[10px] font-black uppercase text-bazooka-lime">Inside The Zone</span>
            <h2 className="font-display mt-2 text-[40px] font-black uppercase leading-[.95] sm:text-[50px]">More Than A Space. <span className="text-bazooka-lime">A Training Experience.</span></h2>
            <p className="mt-5 text-[11px] leading-6 text-bazooka-text-secondary">{facility.description}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {facility.highlights.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-[5px] border border-bazooka-border bg-bazooka-surface px-4 py-4 text-[10px] text-bazooka-text-secondary">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-bazooka-lime" /> {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-bazooka-border/70 bg-bazooka-soft-black py-14 md:py-16">
        <div className={shell}>
          <motion.div {...reveal} className="grid gap-5 lg:grid-cols-[360px_1fr] lg:items-end">
            <div>
              <span className="text-[10px] font-black uppercase text-bazooka-lime">The Experience</span>
              <h2 className="font-display mt-2 text-[38px] font-black uppercase leading-[.95] sm:text-[46px]">Everything Designed For <span className="text-bazooka-lime">Better Sessions.</span></h2>
            </div>
            <p className="max-w-[560px] text-[11px] leading-5 text-bazooka-text-secondary lg:justify-self-end">Every detail is designed to help members train with more confidence, less distraction and a clearer path toward progress.</p>
          </motion.div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {experienceItems.map(([Icon, title, text], index) => (
              <motion.article key={title} {...reveal} transition={{ duration: .45, delay: index * .05 }} className="group rounded-[6px] border border-bazooka-border-strong bg-bazooka-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-bazooka-lime">
                <span className="grid size-11 place-items-center rounded-full border border-bazooka-lime text-bazooka-lime transition group-hover:bg-bazooka-lime group-hover:text-black"><Icon className="size-5" /></span>
                <h3 className="font-display mt-5 text-[18px] font-black uppercase">{title}</h3>
                <p className="mt-2 text-[9px] leading-4 text-bazooka-text-secondary">{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-bazooka-border/70 bg-bazooka-black py-14 md:py-16">
        <div className={shell}>
          <motion.div {...reveal} className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-[10px] font-black uppercase text-bazooka-lime">See The Space</span>
              <h2 className="font-display mt-2 text-[38px] font-black uppercase leading-[.95] sm:text-[46px]">Inside <span className="text-bazooka-lime">{facility.title}</span></h2>
            </div>
            <p className="max-w-[430px] text-[10px] leading-5 text-bazooka-text-secondary">A closer look at the environment, equipment and atmosphere that make this zone part of the Bazooka experience.</p>
          </motion.div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[facility.image, ...galleryImages.slice(0, 3)].map((image, index) => (
              <motion.div key={`${image}-${index}`} {...reveal} transition={{ duration: .45, delay: index * .04 }} className={`relative overflow-hidden rounded-[6px] border border-bazooka-border-strong bg-cover bg-center ${index === 0 ? "min-h-[360px] md:col-span-2 xl:col-span-2" : "min-h-[260px]"}`} style={{ backgroundImage: `url(${image})` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-bazooka-border/70 bg-bazooka-soft-black py-14 md:py-16">
        <div className={shell}>
          <motion.div {...reveal} className="relative overflow-hidden rounded-[6px] border border-bazooka-border-strong bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=90')] bg-cover bg-center px-6 py-12 sm:px-10">
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/40" />
            <div className="relative z-10 grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <span className="text-[10px] font-black uppercase text-bazooka-lime">Experience It Yourself</span>
                <h2 className="font-display mt-2 text-[36px] font-black uppercase leading-[.94] sm:text-[46px]">Train Here. <span className="text-bazooka-lime">Feel The Difference.</span></h2>
                <p className="mt-3 max-w-[620px] text-[10px] leading-5 text-bazooka-text-secondary">Visit Bazooka, walk through the zone, meet the team and experience the environment before choosing your membership.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/book-free-trial" className={primaryButton}>Book Free Trial <ArrowRight className="size-4" /></Link>
                <Link href="/contact" className={outlineButton}>Talk To Our Team <ArrowRight className="size-4" /></Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-bazooka-border/70 bg-bazooka-black py-14 md:py-16">
        <div className={shell}>
          <motion.div {...reveal} className="flex items-end justify-between gap-6">
            <div>
              <span className="text-[10px] font-black uppercase text-bazooka-lime">Explore More</span>
              <h2 className="font-display mt-2 text-[36px] font-black uppercase leading-[.95] sm:text-[44px]">Other <span className="text-bazooka-lime">Training Zones</span></h2>
            </div>
            <Link href="/facilities" className={`${outlineButton} hidden sm:inline-flex`}>All Facilities <ArrowRight className="size-4" /></Link>
          </motion.div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {related.map((item, index) => (
              <motion.article key={item.slug} {...reveal} transition={{ duration: .45, delay: index * .05 }} className="group relative min-h-[290px] overflow-hidden rounded-[6px] border border-bazooka-border-strong bg-cover bg-center transition-all duration-300 hover:-translate-y-1 hover:border-bazooka-lime" style={{ backgroundImage: `url(${item.image})` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="text-[8px] font-black uppercase text-bazooka-lime">Facility Zone</span>
                  <h3 className="font-display mt-1 text-[22px] font-black uppercase">{item.title}</h3>
                  <Link href={`/facilities/${item.slug}`} className="mt-3 inline-flex items-center gap-2 text-[9px] font-black uppercase text-bazooka-lime">View Zone <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" /></Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
