"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Award, BadgeCheck, BookOpen, CheckCircle2, Dumbbell, Target, TimerReset, TrendingUp, type LucideIcon } from "lucide-react";
import type { TrainerProfile } from "./trainer-data";
import { outlineButton, primaryButton, reveal, shell } from "./trainers-shared";

const approach = [
  [Target, "Assess", "Understand your current fitness level, goals and training needs."],
  [BookOpen, "Plan", "Build a focused training approach around those goals."],
  [Dumbbell, "Train", "Follow structured sessions with progressive challenges and strong technique."],
  [TrendingUp, "Progress", "Review progress, stay consistent and adjust the approach when needed."],
] as const;

export default function TrainerDetailPage({ trainer }: { trainer: TrainerProfile }) {
  const firstName = trainer.name.split(" ")[0];
  const bookingHref = `/book-session?trainer=${encodeURIComponent(trainer.slug)}`;
  const snapshots: Array<[LucideIcon, string, string]> = [
    [TimerReset, trainer.experience, "Experience"],
    [Target, trainer.category, "Coaching Focus"],
    [Dumbbell, trainer.specialties[0], "Primary Specialty"],
    [Award, trainer.certification, "Profile Credential"],
  ];

  return <>
    <section className="relative min-h-[640px] overflow-hidden border-b border-bazooka-border/70 bg-cover bg-[58%_center] sm:bg-center" style={{ backgroundImage: `url(${trainer.image})` }}>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/76 to-black/18" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/18" />
      <div className={`${shell} relative z-10 flex min-h-[640px] items-center py-12 sm:py-14`}>
        <motion.div {...reveal} className="max-w-[620px] min-w-0">
          <Link href="/trainers" className="mb-7 inline-flex items-center gap-2 text-[9px] font-black uppercase text-bazooka-text-secondary transition-all hover:-translate-x-0.5 hover:text-bazooka-lime"><ArrowLeft className="size-3.5" />Back To Trainers</Link>
          <span className="block text-[10px] font-black uppercase text-bazooka-lime">{trainer.role}</span>
          <h1 className="font-display mt-3 max-w-full text-[42px] font-black uppercase leading-[.88] min-[380px]:text-[48px] sm:text-[68px] lg:text-[82px]">{trainer.name}</h1>
          <p className="mt-5 max-w-[500px] text-[11px] leading-6 text-bazooka-text-secondary sm:text-[12px]">{trainer.summary}</p>
          <div className="mt-6 grid max-w-[500px] gap-3 text-[9px] text-bazooka-text-secondary sm:grid-cols-2">
            <span className="flex items-center gap-2"><TimerReset className="size-4 shrink-0 text-bazooka-lime" />{trainer.experience} experience</span>
            <span className="flex items-center gap-2"><Award className="size-4 shrink-0 text-bazooka-lime" />{trainer.certification}</span>
            <span className="flex items-center gap-2"><Dumbbell className="size-4 shrink-0 text-bazooka-lime" />{trainer.specialties[0]}</span>
            <span className="flex items-center gap-2"><Target className="size-4 shrink-0 text-bazooka-lime" />{trainer.category}</span>
          </div>
          <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap">
            <Link href={bookingHref} className={`${primaryButton} w-full sm:w-auto`}>Book A Session <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></Link>
            <Link href="/trainers" className={`${outlineButton} w-full sm:w-auto`}>View All Trainers <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></Link>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-8 right-[6%] hidden max-w-[290px] rounded-[6px] border border-white/10 bg-black/58 p-5 backdrop-blur-sm xl:block">
        <span className="font-display text-[42px] leading-none text-bazooka-lime">“</span>
        <p className="mt-2 text-[11px] leading-5 text-white">{trainer.quote}</p>
        <span className="font-display mt-4 block text-[13px] italic text-bazooka-lime">— {trainer.name}</span>
      </div>
    </section>

    <section className="border-b border-bazooka-border/70 bg-bazooka-black py-7">
      <div className={`${shell} grid gap-3 sm:grid-cols-2 lg:grid-cols-4`}>
        {snapshots.map(([Icon, value, label]) => (
          <div key={label} className="group flex min-h-[104px] min-w-0 items-center gap-4 rounded-[6px] border border-bazooka-border-strong bg-bazooka-surface px-5 py-4 transition-all duration-300 hover:border-bazooka-lime/70">
            <span className="grid size-10 shrink-0 place-items-center rounded-full border border-bazooka-lime/40 bg-bazooka-lime/10 text-bazooka-lime"><Icon className="size-5" /></span>
            <div className="min-w-0"><strong className="font-display block text-[15px] font-black uppercase leading-tight text-white">{value}</strong><span className="mt-1 block text-[8px] uppercase text-bazooka-text-secondary">{label}</span></div>
          </div>
        ))}
      </div>
    </section>

    <section className="border-b border-bazooka-border/70 bg-bazooka-soft-black py-14 md:py-16">
      <div className={`${shell} grid gap-4 lg:grid-cols-[.9fr_.9fr_.7fr]`}>
        <motion.article {...reveal} className="rounded-[6px] border border-bazooka-border-strong bg-bazooka-surface p-6">
          <h2 className="font-display text-[28px] font-black uppercase">About <span className="text-bazooka-lime">{firstName}</span></h2>
          <p className="mt-4 text-[10px] leading-5 text-bazooka-text-secondary">With {trainer.experience.toLowerCase()} of experience, {firstName}&apos;s profile is focused on {trainer.specialties[0].toLowerCase()} and {trainer.specialties[1].toLowerCase()}.</p>
          <p className="mt-4 text-[10px] leading-5 text-bazooka-text-secondary">The coaching approach centres on technique, structure, consistency and steady progression toward your individual training goals.</p>
        </motion.article>
        <motion.div {...reveal} className="group min-h-[320px] overflow-hidden rounded-[6px] border border-bazooka-border-strong bg-cover bg-center transition-all duration-500 hover:border-bazooka-lime" style={{ backgroundImage: `url(${trainer.secondaryImage})` }} />
        <motion.article {...reveal} className="rounded-[6px] border border-bazooka-border-strong bg-bazooka-surface p-6">
          <h3 className="font-display text-[25px] font-black uppercase text-bazooka-lime">Expertise</h3>
          <div className="mt-5 space-y-3">{trainer.expertise.map(item => <p key={item} className="flex items-center gap-3 text-[10px] text-bazooka-text-secondary"><CheckCircle2 className="size-4 shrink-0 text-bazooka-lime" />{item}</p>)}</div>
        </motion.article>
      </div>
    </section>

    <section className="border-b border-bazooka-border/70 bg-bazooka-black py-14 md:py-16">
      <div className={`${shell} grid gap-4 lg:grid-cols-[1fr_1fr_.9fr]`}>
        <motion.article {...reveal} className="rounded-[6px] border border-bazooka-border-strong bg-bazooka-surface p-6"><h3 className="font-display text-[24px] font-black uppercase text-bazooka-lime">Certifications</h3><div className="mt-5 space-y-3">{trainer.certifications.map(item => <p key={item} className="flex items-start gap-3 text-[10px] text-bazooka-text-secondary"><BadgeCheck className="mt-0.5 size-4 shrink-0 text-bazooka-lime" />{item}</p>)}</div></motion.article>
        <motion.article {...reveal} className="rounded-[6px] border border-bazooka-border-strong bg-bazooka-surface p-6"><h3 className="font-display text-[24px] font-black uppercase text-bazooka-lime">Education</h3><div className="mt-5 space-y-3">{trainer.education.map(item => <p key={item} className="flex items-start gap-3 text-[10px] text-bazooka-text-secondary"><Award className="mt-0.5 size-4 shrink-0 text-bazooka-lime" />{item}</p>)}</div></motion.article>
        <motion.div {...reveal} className="relative min-h-[310px] overflow-hidden rounded-[6px] border border-bazooka-border-strong bg-cover bg-center" style={{ backgroundImage: `url(${trainer.image})` }}><div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" /><div className="absolute inset-x-0 bottom-0 p-6"><span className="text-[9px] font-black uppercase text-bazooka-lime">Coach Profile</span><p className="font-display mt-1 text-[22px] font-black uppercase text-white">Train With {firstName}</p></div></motion.div>
      </div>
    </section>

    <section className="border-b border-bazooka-border/70 bg-bazooka-soft-black py-14 md:py-16">
      <div className={shell}>
        <motion.div {...reveal} className="overflow-hidden rounded-[6px] border border-bazooka-border-strong bg-bazooka-surface">
          <div className="p-6 sm:p-7"><span className="text-[9px] font-black uppercase text-bazooka-lime">Coaching Process</span><h2 className="font-display mt-2 text-[30px] font-black uppercase">{firstName}’s Training Approach</h2></div>
          <div className="grid md:grid-cols-2 xl:grid-cols-4">{approach.map(([Icon, title, text], index) => <div key={title} className="group border-t border-bazooka-border p-6 transition-colors duration-300 hover:bg-bazooka-lime/5 xl:border-r"><div className="flex items-center justify-between gap-3"><Icon className="size-6 text-bazooka-lime transition-transform duration-300 group-hover:scale-110" /><span className="font-display text-[20px] font-black text-bazooka-border-strong">0{index + 1}</span></div><h3 className="font-display mt-4 text-[18px] font-black uppercase">{title}</h3><p className="mt-2 text-[9px] leading-4 text-bazooka-text-secondary">{text}</p></div>)}</div>
        </motion.div>
      </div>
    </section>

    <section className="border-b border-bazooka-border/70 bg-bazooka-black py-10">
      <div className={shell}>
        <motion.div {...reveal} className="group relative overflow-hidden rounded-[6px] border border-bazooka-border-strong bg-cover bg-center px-5 py-9 transition-all duration-500 hover:border-bazooka-lime/60 sm:px-9 sm:py-10" style={{ backgroundImage: `url(${trainer.secondaryImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/84 to-black/22" />
          <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="min-w-0"><span className="text-[9px] font-black uppercase text-bazooka-lime">Ready To Get Started?</span><h2 className="font-display mt-2 max-w-full text-[30px] font-black uppercase leading-[.95] min-[380px]:text-[34px] sm:text-[40px]">Train With {firstName} <span className="text-bazooka-lime">At Bazooka.</span></h2><p className="mt-3 max-w-[520px] text-[10px] leading-5 text-bazooka-text-secondary">Book a session to discuss your goals and see whether this coaching style is the right fit for you.</p></div>
            <div className="grid gap-3 sm:flex sm:flex-wrap lg:shrink-0"><Link href={bookingHref} className={`${primaryButton} w-full sm:w-auto`}>Book A Session <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></Link><Link href="/memberships" className={`${outlineButton} w-full sm:w-auto`}>View Memberships <ArrowRight className="size-4" /></Link></div>
          </div>
        </motion.div>
      </div>
    </section>
  </>;
}
