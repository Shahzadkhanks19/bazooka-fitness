"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Check,
  ChevronLeft,
  ChevronRight,
  Dumbbell,
  Flame,
  HeartPulse,
  MapPin,
  Menu,
  MessageCircleMore,
  MoveHorizontal,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Trophy,
  Users,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

const nav = [
  ["Home", "/"],
  ["About", "/about"],
  ["Programs", "/programs"],
  ["Memberships", "/memberships"],
  ["Transformations", "/transformations"],
  ["Facilities", "/facilities"],
  ["Gallery", "/gallery"],
  ["Trainers", "/trainers"],
  ["Contact", "/contact"],
];

const programs = [
  {
    title: "Strength Training",
    text: "Build real strength and a powerful physique.",
    icon: Dumbbell,
    image: "bg-[url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=90')]",
  },
  {
    title: "Functional Training",
    text: "Move better, perform better in everyday life.",
    icon: Zap,
    image: "bg-[url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=90')]",
  },
  {
    title: "Personal Training",
    text: "Guided by experts. Built around you.",
    icon: HeartPulse,
    image: "bg-[url('https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=90')]",
  },
];

const facilities = [
  {
    title: "Strength Floor",
    icon: Dumbbell,
    image: "bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=90')]",
  },
  {
    title: "Cardio Zone",
    icon: HeartPulse,
    image: "bg-[url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=900&q=90')]",
  },
  {
    title: "Steam & Shower",
    icon: Flame,
    image: "bg-[url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=90')]",
  },
];

const footerCols = [
  { title: "Quick Links", links: ["Home", "About Us", "Memberships", "Facilities", "Trainers", "Transformations", "Gallery", "Contact"] },
  { title: "Programs", links: ["Strength Training", "Functional Training", "Cardio & Endurance", "Personal Training", "Transformation Program", "Recovery", "Nutrition Guidance"] },
  { title: "Membership", links: ["Plans & Pricing", "Join Bazooka", "Book Free Trial", "Personal Training"] },
  { title: "Help", links: ["FAQ", "Contact Us", "Membership Terms", "Cancellation Policy", "Refund Policy"] },
  { title: "Legal", links: ["Privacy Policy", "Terms & Conditions", "Cookie Policy", "Disclaimer"] },
];

const btnBase = "group inline-flex h-[31px] items-center justify-center gap-4 rounded-[4px] border px-4 text-[7px] font-black uppercase tracking-[0.02em] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0";
const primaryBtn = `${btnBase} border-bazooka-lime bg-bazooka-lime text-bazooka-black shadow-[0_0_20px_rgba(182,240,0,0.12)] hover:border-bazooka-lime-hover hover:bg-bazooka-lime-hover hover:shadow-[0_0_26px_rgba(182,240,0,0.30)] active:bg-bazooka-lime-pressed`;
const outlineBtn = `${btnBase} border-bazooka-border-strong bg-bazooka-black/50 text-bazooka-text hover:border-bazooka-lime hover:text-bazooka-lime hover:shadow-[0_0_18px_rgba(182,240,0,0.13)]`;

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.55, ease: "easeOut" as const },
};

function Logo() {
  return (
    <span className="inline-flex min-w-[152px] flex-col leading-none">
      <span className="text-[22px] font-black tracking-[-1.4px] text-bazooka-lime">BAZOOKA</span>
      <span className="mt-1 text-[4.7px] tracking-[0.55px] text-bazooka-text-secondary">FITNESS • PERFORMANCE • COMMUNITY</span>
    </span>
  );
}

export default function HomePage() {
  const [chatOpen, setChatOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-bazooka-black text-bazooka-text">
      <header className="sticky top-0 z-50 h-14 border-b border-white/10 bg-bazooka-black/95 backdrop-blur-xl">
        <div className="mx-auto flex h-full w-[min(calc(100%-32px),1180px)] items-center gap-5 lg:w-[min(calc(100%-76px),1180px)]">
          <Link href="/" aria-label="Bazooka Fitness home" className="shrink-0 transition-transform duration-300 hover:scale-[1.025]">
            <Logo />
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-5 xl:flex" aria-label="Primary navigation">
            {nav.map(([label, href], index) => (
              <Link
                key={label}
                href={href}
                className={`group relative grid h-14 place-items-center text-[11px] font-bold transition-colors duration-300 ${index === 0 ? "text-bazooka-lime" : "text-bazooka-text hover:text-bazooka-lime"}`}
              >
                {label}
                <span className={`absolute bottom-3 h-px bg-bazooka-lime shadow-[0_0_10px_rgba(182,240,0,0.35)] transition-all duration-300 ${index === 0 ? "w-7" : "w-0 group-hover:w-7"}`} />
              </Link>
            ))}
          </nav>

          <Link href="/book-free-trial" className={`${primaryBtn} ml-auto hidden min-w-[145px] sm:inline-flex`}>
            Book Free Trial <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="ml-auto grid size-10 place-items-center rounded-md border border-bazooka-border text-bazooka-text transition hover:border-bazooka-lime hover:text-bazooka-lime xl:hidden"
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {menuOpen && (
          <motion.nav initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="absolute left-0 right-0 top-14 border-b border-bazooka-border bg-bazooka-soft-black p-5 xl:hidden">
            <div className="mx-auto grid max-w-xl gap-1">
              {nav.map(([label, href], index) => (
                <Link key={label} href={href} onClick={() => setMenuOpen(false)} className={`rounded-md px-4 py-3 text-sm font-bold transition ${index === 0 ? "bg-bazooka-lime/10 text-bazooka-lime" : "hover:bg-bazooka-card hover:text-bazooka-lime"}`}>
                  {label}
                </Link>
              ))}
              <Link href="/book-free-trial" onClick={() => setMenuOpen(false)} className={`${primaryBtn} mt-2 w-full sm:hidden`}>Book Free Trial <ArrowRight className="size-3" /></Link>
            </div>
          </motion.nav>
        )}
      </header>

      <section className="relative min-h-[503px] overflow-hidden border-b border-bazooka-border/70 bg-bazooka-black">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581009137042-c552e485697a?auto=format&fit=crop&w=2000&q=92')] bg-cover bg-[center_35%] grayscale" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,.96)_16%,rgba(5,5,5,.62)_43%,rgba(5,5,5,.10)_72%,rgba(5,5,5,.28)_100%),linear-gradient(0deg,#050505_0%,transparent_25%)]" />

        <div className="relative mx-auto min-h-[503px] w-[min(calc(100%-40px),770px)] pt-[51px]">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65 }} className="w-full max-w-[390px]">
            <h1 className="font-display max-w-[350px] text-[48px] font-black uppercase leading-[0.88] tracking-[-1.9px] sm:text-[57px]">
              Build Your <span className="block italic text-bazooka-lime">Strongest</span> Self
            </h1>
            <h2 className="mt-3 text-[10px] font-black tracking-[-0.2px]">STRONGER PEOPLE. A HEALTHIER JODHPUR.</h2>
            <p className="mt-2 text-[9px] leading-[1.55] text-bazooka-text-secondary">Strength training, Cardio, Personal training,<br />Steam & shower. More than a gym —<br />a community that pushes you forward.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/book-free-trial" className={primaryBtn}>Book Free Trial <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" /></Link>
              <Link href="/memberships" className={outlineBtn}>Join Bazooka <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" /></Link>
            </div>
            <a href="https://maps.app.goo.gl/ArEb2YaGdZq5qF8x7" target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-[8px] text-bazooka-text-secondary transition hover:text-bazooka-lime">
              <MapPin className="size-3.5 text-bazooka-lime" /> Sardarpura, Jodhpur
            </a>
          </motion.div>

          <div className="absolute bottom-6 left-0 right-0 grid grid-cols-2 rounded-md border border-bazooka-border-strong bg-bazooka-black/80 backdrop-blur-sm md:grid-cols-4">
            {[
              [Users, "500+", "MEMBERS"],
              [Dumbbell, "3+", "TRAINING ZONES"],
              [Target, "100%", "COMMITMENT"],
              [Trophy, "1", "STRONGER JODHPUR"],
            ].map(([Icon, number, label], index) => {
              const StatIcon = Icon as typeof Users;
              return (
                <motion.div key={String(label)} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + index * 0.08 }} className="group relative grid min-h-[66px] grid-cols-[34px_auto] grid-rows-[20px_17px] items-center px-4 py-3 transition hover:bg-bazooka-lime/[0.04]">
                  <StatIcon className="row-span-2 size-5 text-bazooka-lime transition-transform group-hover:scale-110" />
                  <strong className="text-[18px] leading-none">{String(number)}</strong>
                  <small className="text-[6.5px] text-bazooka-text-secondary">{String(label)}</small>
                  {index < 3 && <span className="absolute right-0 top-1/2 hidden h-7 w-px -translate-y-1/2 bg-bazooka-border md:block" />}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="grid min-h-[236px] border-b border-bazooka-border/70 bg-bazooka-soft-black md:grid-cols-[49%_51%]">
        <motion.div {...reveal} className="flex justify-end bg-[radial-gradient(circle_at_100%_40%,rgba(182,240,0,.035),transparent_32%),linear-gradient(90deg,#050505,#0A0A0A)]">
          <div className="w-full max-w-[430px] px-8 py-10 md:pr-12">
            <span className="text-[8px] font-extrabold text-bazooka-lime">THE BAZOOKA EXPERIENCE</span>
            <h2 className="font-display mt-2 text-[30px] font-black uppercase leading-none tracking-[-0.4px]">It’s Not Just A Gym.<br /><span className="italic text-bazooka-lime">It’s A Movement.</span></h2>
            <p className="mt-3 max-w-[290px] text-[9px] leading-[1.55] text-bazooka-text-secondary">We combine world-class equipment, expert coaches and a powerful community to help you become the best version of yourself.</p>
            <Link href="/about" className={`${outlineBtn} mt-4 border-bazooka-lime/80`}>Discover Bazooka <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" /></Link>
          </div>
        </motion.div>
        <motion.div {...reveal} className="relative min-h-[236px] overflow-hidden bg-[url('https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?auto=format&fit=crop&w=1400&q=90')] bg-cover bg-center grayscale">
          <div className="absolute inset-0 bg-gradient-to-r from-bazooka-black/30 to-transparent" />
          <div className="font-display relative z-10 flex h-full items-center px-10 text-[34px] font-black uppercase leading-[0.96] tracking-[-1px] text-black/90 md:px-12">BETTER<br />PEOPLE.<br />A STRONGER<br />JODHPUR.</div>
        </motion.div>
      </section>

      <section className="border-b border-bazooka-border/70 bg-bazooka-black py-8">
        <div className="mx-auto w-[min(calc(100%-40px),770px)]">
          <motion.div {...reveal} className="text-center">
            <h2 className="font-display text-[24px] font-black uppercase">Our Programs</h2>
            <p className="mt-1 text-[8px] font-extrabold text-bazooka-text-secondary"><span className="text-bazooka-lime">TRAIN SMART.</span> GO FURTHER.</p>
          </motion.div>

          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <motion.article key={program.title} {...reveal} transition={{ duration: 0.5, delay: index * 0.08 }} className={`group relative min-h-[220px] overflow-hidden rounded-md border border-bazooka-border-strong bg-cover bg-center ${program.image} transition-all duration-500 hover:-translate-y-1 hover:border-bazooka-lime hover:shadow-[0_18px_50px_rgba(0,0,0,.35),0_0_25px_rgba(182,240,0,.08)]`}>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/95 transition group-hover:to-black/90" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="grid size-10 place-items-center rounded-full border border-bazooka-lime text-bazooka-lime transition duration-300 group-hover:scale-110 group-hover:bg-bazooka-lime group-hover:text-bazooka-black"><Icon className="size-4" /></span>
                    <h3 className="font-display mt-3 text-[17px] font-black uppercase">{program.title}</h3>
                    <p className="mt-1 max-w-[180px] text-[8px] leading-snug text-bazooka-text-secondary">{program.text}</p>
                    <Link href="/programs" className="mt-3 inline-flex items-center gap-2 text-[8px] font-black text-bazooka-lime">EXPLORE <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" /></Link>
                  </div>
                </motion.article>
              );
            })}
          </div>
          <div className="mt-4 text-center"><Link href="/programs" className={outlineBtn}>Explore All Programs <ArrowRight className="size-3" /></Link></div>
        </div>
      </section>

      <section className="border-b border-bazooka-border/70 bg-bazooka-soft-black py-8">
        <div className="mx-auto grid w-[min(calc(100%-40px),770px)] gap-6 md:grid-cols-[180px_1fr] md:items-center">
          <motion.div {...reveal}>
            <h2 className="font-display text-[28px] font-black uppercase leading-none">World-Class<br /><span className="italic text-bazooka-lime">Facilities</span></h2>
            <p className="mt-3 text-[8px] leading-[1.45] text-bazooka-text-secondary">Premium equipment, dedicated zones and a clean, motivating environment to train your best.</p>
            <Link href="/facilities" className={`${outlineBtn} mt-4 border-bazooka-lime/80`}>Explore Our Gym <ArrowRight className="size-3" /></Link>
          </motion.div>
          <div className="grid gap-3 sm:grid-cols-3">
            {facilities.map((facility, index) => {
              const Icon = facility.icon;
              return (
                <motion.article key={facility.title} {...reveal} transition={{ duration: 0.5, delay: index * 0.08 }} className={`group relative min-h-[170px] overflow-hidden rounded-md border border-bazooka-border-strong bg-cover bg-center ${facility.image} transition-all duration-500 hover:-translate-y-1 hover:border-bazooka-lime`}>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/95" />
                  <div className="absolute bottom-4 left-4 flex items-end gap-2">
                    <span className="grid size-9 place-items-center rounded-md border border-bazooka-lime text-bazooka-lime transition group-hover:bg-bazooka-lime group-hover:text-bazooka-black"><Icon className="size-4" /></span>
                    <h3 className="font-display pb-2 text-[13px] font-black uppercase">{facility.title}</h3>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-bazooka-border/70 bg-bazooka-black py-8">
        <div className="mx-auto grid w-[min(calc(100%-40px),770px)] gap-5 lg:grid-cols-[245px_310px_1fr] lg:items-center">
          <motion.div {...reveal}>
            <h2 className="font-display text-[27px] font-black uppercase leading-none">Real People.<br /><span className="italic text-bazooka-lime">Real Transformations.</span></h2>
            <Link href="/transformations" className={`${outlineBtn} mt-5 border-bazooka-lime/80`}>See Transformation Stories <ArrowRight className="size-3" /></Link>
          </motion.div>

          <motion.div {...reveal} className="relative grid min-h-[180px] grid-cols-2 overflow-hidden rounded-md border border-bazooka-border-strong">
            <div className="relative bg-[url('https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=700&q=90')] bg-cover bg-[center_18%] grayscale"><span className="absolute left-3 top-3 text-[8px] font-black">BEFORE</span></div>
            <div className="relative bg-[url('https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=700&q=90')] bg-cover bg-[62%_18%]"><span className="absolute left-3 top-3 text-[8px] font-black text-bazooka-lime">AFTER</span></div>
            <span className="absolute left-1/2 top-1/2 grid size-8 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-bazooka-black shadow-lg"><MoveHorizontal className="size-4" /></span>
          </motion.div>

          <motion.div {...reveal} className="grid grid-cols-3 gap-4 lg:block">
            <div><strong className="font-display text-[22px]"><span className="text-bazooka-lime">-12</span> KG</strong><small className="block text-[6px] text-bazooka-text-secondary">WEIGHT LOSS</small></div>
            <div className="font-display text-[14px] font-black">+ STRENGTH<br />+ CONFIDENCE</div>
            <div><strong className="font-display text-[22px] text-bazooka-lime">100%</strong><small className="block text-[6px] text-bazooka-text-secondary">BETTER ME</small></div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-bazooka-border/70 bg-bazooka-soft-black py-8">
        <div className="mx-auto grid w-[min(calc(100%-40px),770px)] gap-5 md:grid-cols-[185px_265px_1fr]">
          <motion.div {...reveal} className="flex flex-col justify-center border-bazooka-border md:border-r md:pr-5">
            <span className="text-lg font-bold text-white">Google</span>
            <strong className="font-display mt-1 text-[34px]">4.9</strong>
            <div className="flex gap-0.5 text-bazooka-lime">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-3 fill-current" />)}</div>
            <p className="mt-1 text-[7px] text-bazooka-text-secondary">Based on 250+ reviews</p>
            <small className="mt-3 inline-flex items-center gap-1 text-[6px] text-bazooka-text-secondary"><ShieldCheck className="size-3 text-bazooka-lime" /> VERIFIED REVIEWS</small>
          </motion.div>

          <motion.div {...reveal}>
            <h2 className="font-display text-[20px] font-black uppercase">Meet Our Experts</h2>
            <div className="mt-3 space-y-3">
              {[["VIKRAM SINGH", "Strength Coach", "bg-[url('https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=300&q=90')]"], ["PRIYA SHARMA", "Nutrition Coach", "bg-[url('https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=300&q=90')]" ]].map(([name, role, image]) => (
                <div key={name} className="group flex items-center gap-3">
                  <span className={`size-10 rounded-full border border-bazooka-border bg-cover bg-center ${image} transition group-hover:border-bazooka-lime group-hover:scale-105`} />
                  <div><strong className="block text-[9px]">{name}</strong><small className="text-[7px] text-bazooka-text-secondary">{role}</small></div>
                </div>
              ))}
            </div>
            <Link href="/trainers" className={`${outlineBtn} mt-4 h-[27px] border-bazooka-lime/80`}>Meet All Trainers <ArrowRight className="size-3" /></Link>
          </motion.div>

          <motion.article {...reveal} className="relative rounded-md border border-bazooka-border bg-bazooka-card p-5 transition hover:border-bazooka-lime/60 hover:bg-bazooka-card-hover">
            <div className="font-display text-4xl leading-none text-bazooka-lime">“</div>
            <p className="mt-1 text-[10px] leading-relaxed text-bazooka-text-secondary">Bazooka changed my lifestyle. Stronger, fitter and more confident.</p>
            <div className="mt-5 flex items-center gap-3"><span className="size-8 rounded-full bg-[url('https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=90')] bg-cover bg-center" /><div><strong className="block text-[8px]">KARAN D.</strong><small className="text-[6px] text-bazooka-text-secondary">Bazooka Member</small></div></div>
            <div className="absolute bottom-4 right-4 flex gap-2"><button aria-label="Previous review" className="grid size-7 place-items-center rounded border border-bazooka-border transition hover:border-bazooka-lime hover:text-bazooka-lime"><ChevronLeft className="size-3" /></button><button aria-label="Next review" className="grid size-7 place-items-center rounded border border-bazooka-border transition hover:border-bazooka-lime hover:text-bazooka-lime"><ChevronRight className="size-3" /></button></div>
          </motion.article>
        </div>
      </section>

      <section className="border-b border-bazooka-border/70 bg-bazooka-black py-8">
        <motion.div {...reveal} className="mx-auto grid w-[min(calc(100%-40px),770px)] overflow-hidden rounded-md border border-bazooka-border bg-bazooka-surface md:grid-cols-[0.92fr_1.08fr]">
          <div className="p-7">
            <span className="text-[8px] font-black text-bazooka-lime">FIND US IN JODHPUR</span>
            <h2 className="font-display mt-2 text-[28px] font-black uppercase leading-none">Train Where<br /><span className="italic text-bazooka-lime">Energy Lives.</span></h2>
            <p className="mt-3 text-[8px] leading-relaxed text-bazooka-text-secondary">Visit Bazooka Fitness in Sardarpura, Jodhpur. Tap below for directions on Google Maps.</p>
            <a href="https://maps.app.goo.gl/ArEb2YaGdZq5qF8x7" target="_blank" rel="noreferrer" className={`${outlineBtn} mt-4 border-bazooka-lime/80`}>Open in Google Maps <MapPin className="size-3" /></a>
          </div>
          <iframe
            title="Bazooka Fitness location map"
            src="https://www.google.com/maps?q=Bazooka%20Fitness%20Jodhpur&output=embed"
            className="h-[250px] w-full border-0 grayscale transition duration-500 hover:grayscale-0 md:h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </section>

      <section className="relative overflow-hidden border-b border-bazooka-border/70 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=90')] bg-cover bg-center py-12 grayscale">
        <div className="absolute inset-0 bg-bazooka-black/78" />
        <motion.div {...reveal} className="relative mx-auto flex w-[min(calc(100%-40px),770px)] flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-[31px] font-black uppercase leading-none">Your First<br /><span className="italic text-bazooka-lime">Workout Is On Us.</span></h2>
            <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 text-[8px] text-bazooka-text-secondary sm:grid-cols-4">
              {[[Check, "No commitments", "Just show up"], [Dumbbell, "Expert guidance", "From day one"], [Users, "Feel the community", "Train together"], [Sparkles, "Start your", "transformation"]].map(([Icon, title, sub]) => {
                const BenefitIcon = Icon as typeof Check;
                return <span key={String(title)} className="flex gap-2"><BenefitIcon className="mt-0.5 size-4 shrink-0 text-bazooka-lime" /><span><b className="block text-bazooka-text">{String(title)}</b><small>{String(sub)}</small></span></span>;
              })}
            </div>
          </div>
          <div className="flex min-w-[165px] flex-col gap-3"><Link href="/book-free-trial" className={primaryBtn}>Book Free Trial <ArrowRight className="size-3" /></Link><Link href="/memberships" className={outlineBtn}>Join Bazooka <ArrowRight className="size-3" /></Link></div>
        </motion.div>
      </section>

      <footer className="bg-bazooka-soft-black">
        <div className="mx-auto grid w-[min(calc(100%-40px),1180px)] gap-8 py-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_repeat(5,1fr)_1.2fr]">
          <div>
            <Link href="/" className="inline-block transition-transform hover:scale-[1.025]"><Logo /></Link>
            <p className="mt-4 text-[9px] leading-relaxed text-bazooka-text-secondary">Stronger People.<br />A Healthier Jodhpur.</p>
            <div className="mt-5 flex gap-2">
              {[FaInstagram, FaFacebookF, FaYoutube].map((Icon, index) => <a key={index} href="#" aria-label="Social media" className="grid size-8 place-items-center rounded-full border border-bazooka-border text-bazooka-text-secondary transition-all duration-300 hover:-translate-y-1 hover:border-bazooka-lime hover:bg-bazooka-lime hover:text-bazooka-black"><Icon className="size-3.5" /></a>)}
            </div>
          </div>

          {footerCols.map((col) => (
            <div key={col.title}>
              <h3 className="mb-3 text-[8px] font-black uppercase text-bazooka-text">{col.title}</h3>
              <div className="space-y-2">{col.links.map((label) => <Link key={label} href="#" className="group flex w-fit items-center gap-1 text-[7px] text-bazooka-text-secondary transition-all duration-300 hover:translate-x-1 hover:text-bazooka-lime"><span className="h-px w-0 bg-bazooka-lime transition-all group-hover:w-2" />{label}</Link>)}</div>
            </div>
          ))}

          <div className="space-y-4 text-[7px] leading-relaxed text-bazooka-text-secondary">
            <a href="https://maps.app.goo.gl/ArEb2YaGdZq5qF8x7" target="_blank" rel="noreferrer" className="flex gap-2 transition hover:text-bazooka-lime"><MapPin className="size-3.5 shrink-0 text-bazooka-lime" />Sardarpura,<br />Jodhpur, Rajasthan<br />India — 342003</a>
            <p className="flex gap-2"><MessageCircleMore className="size-3.5 shrink-0 text-bazooka-lime" />+91 882 502 XXXX</p>
            <p className="flex gap-2"><Flame className="size-3.5 shrink-0 text-bazooka-lime" />Mon – Sun<br />5:00 AM – 11:00 PM</p>
          </div>
        </div>
        <div className="border-t border-bazooka-border">
          <div className="mx-auto flex w-[min(calc(100%-40px),1180px)] flex-col gap-2 py-4 text-[7px] text-bazooka-muted sm:flex-row sm:justify-between"><span>© 2026 Bazooka Fitness. All rights reserved.</span><span>Designed & Developed by Shahzad Khan <b className="text-bazooka-lime">♥</b></span></div>
        </div>
      </footer>

      <aside className="fixed bottom-4 right-4 z-40 flex flex-col gap-2" aria-label="Quick actions">
        <Link href="/book-free-trial" className="group grid size-11 place-items-center rounded-full border border-bazooka-lime bg-bazooka-lime text-bazooka-black shadow-[0_0_22px_rgba(182,240,0,.22)] transition-all duration-300 hover:scale-110 hover:bg-bazooka-lime-hover" aria-label="Book free trial"><Dumbbell className="size-4 transition-transform group-hover:rotate-12" /></Link>
        <a href="https://wa.me/91882502XXXX" className="group grid size-11 place-items-center rounded-full bg-bazooka-whatsapp text-white shadow-lg transition-all duration-300 hover:scale-110" aria-label="WhatsApp"><FaWhatsapp className="size-5 transition-transform group-hover:scale-110" /></a>
        <button type="button" onClick={() => setChatOpen((value) => !value)} className="group grid size-11 place-items-center rounded-full border border-bazooka-border bg-bazooka-card text-bazooka-lime shadow-lg transition-all duration-300 hover:scale-110 hover:border-bazooka-lime hover:bg-bazooka-card-hover" aria-label="Ask Bazooka"><Bot className="size-5 transition-transform group-hover:-rotate-6" /></button>
        <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="grid size-11 place-items-center rounded-full border border-bazooka-border bg-bazooka-card text-bazooka-text transition-all duration-300 hover:-translate-y-1 hover:border-bazooka-lime hover:text-bazooka-lime" aria-label="Scroll to top">↑</button>
      </aside>

      {chatOpen && (
        <motion.section initial={{ opacity: 0, scale: 0.96, y: 15 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0 }} className="fixed bottom-[76px] right-[68px] z-50 w-[min(calc(100%-32px),330px)] overflow-hidden rounded-xl border border-bazooka-border bg-bazooka-card shadow-2xl" aria-label="Bazooka chatbot">
          <div className="flex items-center justify-between border-b border-bazooka-border bg-bazooka-surface px-4 py-3"><div><strong className="block text-[10px] text-bazooka-lime">ASK BAZOOKA</strong><small className="text-[7px] text-bazooka-text-secondary">Fitness & membership help</small></div><button onClick={() => setChatOpen(false)} className="grid size-7 place-items-center rounded border border-bazooka-border transition hover:border-bazooka-lime hover:text-bazooka-lime"><X className="size-3.5" /></button></div>
          <div className="p-4"><div className="rounded-lg bg-bazooka-surface p-3 text-[9px] leading-relaxed text-bazooka-text-secondary">Hey! I’m the Bazooka assistant. Ask me about memberships, programs, trainers or your free trial.</div></div>
          <div className="flex gap-2 border-t border-bazooka-border p-3"><input aria-label="Message" placeholder="Type your question..." className="min-w-0 flex-1 rounded-md border border-bazooka-border bg-bazooka-black px-3 py-2 text-[9px] text-bazooka-text outline-none transition placeholder:text-bazooka-muted focus:border-bazooka-lime" /><button className="grid size-9 place-items-center rounded-md bg-bazooka-lime text-bazooka-black transition hover:bg-bazooka-lime-hover"><ArrowRight className="size-4" /></button></div>
        </motion.section>
      )}
    </main>
  );
}
