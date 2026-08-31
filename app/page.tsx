"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
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
  UserRound,
  Users,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const nav = [
  ["Home", "/"],
  ["About", "/about"],
  ["Programs", "/programs"],
  ["Memberships", "/memberships"],
  ["Facilities", "/facilities"],
  ["Trainers", "/trainers"],
  ["More", "/gallery"],
] as const;

const programs = [
  { title: "Strength Training", text: "Build real strength and a powerful physique.", icon: Dumbbell, image: "bg-[url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=90')]" },
  { title: "Functional Training", text: "Move better, perform better in everyday life.", icon: Zap, image: "bg-[url('https://images.unsplash.com/photo-1534368420009-621bfab424a8?auto=format&fit=crop&w=1200&q=90')]" },
  { title: "Personal Training", text: "Guided by experts. Built around you.", icon: HeartPulse, image: "bg-[url('https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=90')]" },
];

const facilities = [
  { title: "Strength Floor", icon: Dumbbell, image: "bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=90')]" },
  { title: "Cardio Zone", icon: HeartPulse, image: "bg-[url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1000&q=90')]" },
  { title: "Steam & Shower", icon: Flame, image: "bg-[url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=90')]" },
];

const reviews = [
  {
    name: "Rishabh",
    meta: "Local Guide · 46 reviews",
    text: "This is a fantastic gym!! By far the best facility around. Bazooka Fitness is an amazing state-of-the-art facility and the staff is super helpful, encouraging, and friendly.",
  },
  {
    name: "Lovejeet Verma",
    meta: "Google reviewer",
    text: "Spacious, well-maintained, clean and motivating atmosphere. Most importantly, trainers are incredibly helpful, friendly and motivating.",
  },
  {
    name: "Ashok Pareek",
    meta: "Google reviewer",
    text: "A team that transformed my life from a sedentary person to a marathon runner in my 60s. Every aspect of this club is consumer centric.",
  },
];

const footerCols = [
  { title: "Quick Links", links: ["Home", "About Us", "Memberships", "Facilities", "Trainers", "Transformations", "Gallery", "Contact"] },
  { title: "Programs", links: ["Strength Training", "Functional Training", "Cardio & Endurance", "Personal Training", "Transformation Program", "Recovery", "Nutrition Guidance"] },
  { title: "Membership", links: ["Plans & Pricing", "Join Bazooka", "Book Free Trial", "Personal Training"] },
  { title: "Help", links: ["FAQ", "Contact Us", "Membership Terms", "Cancellation Policy", "Refund Policy"] },
  { title: "Legal", links: ["Privacy Policy", "Terms & Conditions", "Cookie Policy", "Disclaimer"] },
];

const shell = "mx-auto w-[min(calc(100%-40px),1180px)] md:w-[min(calc(100%-64px),1180px)]";
const btn = "group inline-flex h-11 items-center justify-center gap-4 rounded-[4px] border px-6 text-[10px] font-black uppercase tracking-[0.01em] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0";
const primaryBtn = `${btn} border-bazooka-lime bg-bazooka-lime text-bazooka-black hover:bg-bazooka-lime-hover hover:shadow-[0_0_26px_rgba(182,240,0,.22)]`;
const outlineBtn = `${btn} border-bazooka-border-strong bg-black/25 text-white hover:border-bazooka-lime hover:text-bazooka-lime`;
const reveal = { initial: { opacity: 0, y: 22 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.14 }, transition: { duration: 0.55, ease: "easeOut" as const } };

function Logo() {
  return (
    <span className="inline-flex min-w-[150px] flex-col leading-none">
      <span className="text-[28px] font-black tracking-[-1.6px] text-bazooka-lime">BAZOOKA</span>
      <span className="mt-1 text-[5px] tracking-[.55px] text-bazooka-text-secondary">FITNESS • PERFORMANCE • COMMUNITY</span>
    </span>
  );
}

export default function HomePage() {
  const [chatOpen, setChatOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [reviewIndex, setReviewIndex] = useState(0);
  const review = reviews[reviewIndex];

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-bazooka-black text-bazooka-text">
      <header className="sticky top-0 z-50 h-[76px] border-b border-white/10 bg-bazooka-black/95 backdrop-blur-xl">
        <div className={`${shell} flex h-full items-center gap-7`}>
          <Link href="/" className="shrink-0 transition-transform duration-300 hover:scale-[1.02]" aria-label="Bazooka Fitness home"><Logo /></Link>
          <nav className="hidden flex-1 items-center justify-center gap-7 xl:flex" aria-label="Primary navigation">
            {nav.map(([label, href], index) => (
              <Link key={label} href={href} className={`group relative grid h-[76px] place-items-center text-[12px] font-bold transition-colors duration-300 ${index === 0 ? "text-bazooka-lime" : "text-white hover:text-bazooka-lime"}`}>
                {label}
                <span className={`absolute bottom-4 h-[2px] bg-bazooka-lime transition-all duration-300 ${index === 0 ? "w-8" : "w-0 group-hover:w-8"}`} />
              </Link>
            ))}
          </nav>
          <Link href="/book-free-trial" className={`${primaryBtn} ml-auto hidden min-w-[174px] sm:inline-flex`}>Book Free Trial <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></Link>
          <button type="button" onClick={() => setMenuOpen((v) => !v)} className="ml-auto grid size-11 place-items-center rounded border border-bazooka-border xl:hidden" aria-label="Toggle navigation">{menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}</button>
        </div>
        {menuOpen && <motion.nav initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="absolute inset-x-0 top-[76px] border-b border-bazooka-border bg-bazooka-soft-black p-5 xl:hidden"><div className="mx-auto grid max-w-xl gap-1">{nav.map(([label, href]) => <Link key={label} href={href} onClick={() => setMenuOpen(false)} className="rounded px-4 py-3 text-sm font-bold hover:bg-bazooka-card hover:text-bazooka-lime">{label}</Link>)}</div></motion.nav>}
      </header>

      <section className="relative min-h-[720px] overflow-hidden border-b border-bazooka-border/70">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438097545-a2c22c57f2ad?auto=format&fit=crop&w=2200&q=90')] bg-cover bg-[center_34%] grayscale" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,.96)_26%,rgba(5,5,5,.60)_49%,rgba(5,5,5,.08)_73%,rgba(5,5,5,.22)_100%),linear-gradient(0deg,#050505_0%,transparent_20%)]" />
        <div className={`${shell} relative min-h-[720px] pt-20`}>
          <motion.div initial={{ opacity: 0, x: -28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .65 }} className="max-w-[440px]">
            <h1 className="font-display text-[68px] font-black uppercase leading-[.88] tracking-[-2px] sm:text-[78px] lg:text-[82px]">Build Your <span className="block italic text-bazooka-lime">Strongest</span> Self</h1>
            <h2 className="mt-5 text-[13px] font-black">STRONGER PEOPLE. A HEALTHIER JODHPUR.</h2>
            <p className="mt-3 max-w-[370px] text-[12px] leading-5 text-bazooka-text-secondary">Strength training, Cardio, Personal training,<br />Steam &amp; shower. More than a gym —<br />a community that pushes you forward.</p>
            <div className="mt-6 flex gap-4"><Link href="/book-free-trial" className={primaryBtn}>Book Free Trial <ArrowRight className="size-4" /></Link><Link href="/memberships" className={outlineBtn}>Join Bazooka <ArrowRight className="size-4" /></Link></div>
            <a href="https://maps.app.goo.gl/ArEb2YaGdZq5qF8x7" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-[11px] text-bazooka-text-secondary hover:text-bazooka-lime"><MapPin className="size-4 text-bazooka-lime" /> Sardarpura, Jodhpur</a>
          </motion.div>
          <div className="absolute bottom-7 left-0 right-0 grid grid-cols-2 overflow-hidden rounded-[6px] border border-bazooka-border-strong bg-black/78 backdrop-blur-sm md:grid-cols-4">
            {[[Users,"500+","MEMBERS"],[Dumbbell,"3+","TRAINING ZONES"],[ShieldCheck,"100%","COMMITMENT"],[Star,"1","STRONGER JODHPUR"]].map(([Icon,n,l],i)=>{const I=Icon as typeof Users;return <div key={String(l)} className="relative grid min-h-[98px] grid-cols-[48px_auto] items-center px-7"><I className="size-7 text-bazooka-lime"/><div><strong className="block text-[27px] leading-none">{String(n)}</strong><small className="mt-2 block text-[9px] text-bazooka-text-secondary">{String(l)}</small></div>{i<3&&<span className="absolute right-0 top-1/2 hidden h-12 w-px -translate-y-1/2 bg-bazooka-border md:block"/>}</div>})}
          </div>
        </div>
      </section>

      <section className="grid min-h-[430px] border-b border-bazooka-border/70 bg-bazooka-soft-black md:grid-cols-[49%_51%]">
        <motion.div {...reveal} className="flex items-center justify-end bg-[linear-gradient(90deg,#050505,#090909)]">
          <div className="w-full max-w-[590px] px-8 py-16 md:pr-24">
            <span className="text-[10px] font-black text-bazooka-lime">THE BAZOOKA EXPERIENCE</span>
            <h2 className="font-display mt-4 text-[40px] font-black uppercase leading-[.98]">It’s Not Just A Gym.<br /><span className="text-bazooka-lime">It’s A Movement.</span></h2>
            <p className="mt-5 max-w-[360px] text-[12px] leading-5 text-bazooka-text-secondary">We combine world-class equipment, expert coaches and a powerful community to help you become the best version of yourself.</p>
            <Link href="/about" className={`${outlineBtn} mt-7 border-bazooka-lime/70`}>Discover Bazooka <ArrowRight className="size-4" /></Link>
          </div>
        </motion.div>
        <motion.div {...reveal} className="relative min-h-[430px] bg-[url('https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1500&q=90')] bg-cover bg-center grayscale"><div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"/><div className="font-display relative z-10 flex h-full items-center px-14 text-[44px] font-black uppercase leading-[.92] text-black/90">BETTER<br/>PEOPLE.<br/>A STRONGER<br/>JODHPUR.</div></motion.div>
      </section>

      <section className="border-b border-bazooka-border/70 py-20">
        <div className={shell}>
          <motion.div {...reveal} className="text-center"><h2 className="font-display text-[34px] font-black uppercase">Our Programs</h2><p className="mt-1 text-[10px] font-extrabold text-bazooka-text-secondary"><span className="text-bazooka-lime">TRAIN SMART.</span> GO FURTHER.</p></motion.div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">{programs.map((p,i)=>{const I=p.icon;return <motion.article key={p.title} {...reveal} transition={{duration:.5,delay:i*.07}} className={`group relative min-h-[320px] overflow-hidden rounded-[6px] border border-bazooka-border-strong bg-cover bg-center ${p.image} transition-all duration-500 hover:-translate-y-1 hover:border-bazooka-lime`}><div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/15 to-black/95"/><div className="absolute bottom-5 left-5 right-5"><span className="grid size-12 place-items-center rounded-full border border-bazooka-lime bg-black/25 text-bazooka-lime transition group-hover:bg-bazooka-lime group-hover:text-black"><I className="size-5"/></span><h3 className="font-display mt-4 text-[22px] font-black uppercase">{p.title}</h3><p className="mt-1 max-w-[220px] text-[10px] leading-4 text-bazooka-text-secondary">{p.text}</p><Link href="/programs" className="mt-4 inline-flex items-center gap-2 text-[10px] font-black text-bazooka-lime">EXPLORE <ArrowRight className="size-3.5"/></Link></div></motion.article>})}</div>
          <div className="mt-7 text-center"><Link href="/programs" className={`${outlineBtn} h-10`}>Explore All Programs <ArrowRight className="size-4" /></Link></div>
        </div>
      </section>

      <section className="border-b border-bazooka-border/70 bg-bazooka-soft-black py-16">
        <div className={`${shell} grid gap-8 lg:grid-cols-[260px_1fr] lg:items-center`}>
          <motion.div {...reveal}><h2 className="font-display text-[38px] font-black uppercase leading-[.95]">World-Class<br/><span className="text-bazooka-lime">Facilities</span></h2><p className="mt-4 max-w-[230px] text-[11px] leading-5 text-bazooka-text-secondary">Premium equipment, dedicated zones and a clean, motivating environment to train your best.</p><Link href="/facilities" className={`${outlineBtn} mt-6 border-bazooka-lime/70`}>Explore Our Gym <ArrowRight className="size-4"/></Link></motion.div>
          <div className="grid gap-4 sm:grid-cols-3">{facilities.map((f,i)=>{const I=f.icon;return <motion.article key={f.title} {...reveal} transition={{duration:.5,delay:i*.07}} className={`group relative min-h-[220px] overflow-hidden rounded-[6px] border border-bazooka-border-strong bg-cover bg-center ${f.image} transition hover:border-bazooka-lime`}><div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90"/><div className="absolute bottom-5 left-5 flex items-center gap-3"><span className="grid size-11 place-items-center rounded-[5px] border border-bazooka-lime bg-black/30 text-bazooka-lime"><I className="size-5"/></span><h3 className="font-display text-[17px] font-black uppercase">{f.title}</h3></div></motion.article>})}</div>
        </div>
      </section>

      <section className="border-b border-bazooka-border/70 py-16">
        <div className={`${shell} grid gap-8 lg:grid-cols-[260px_1fr_170px] lg:items-center`}>
          <motion.div {...reveal}><h2 className="font-display text-[37px] font-black uppercase leading-[.95]">Real People.<br/><span className="text-bazooka-lime">Real Transformations.</span></h2><Link href="/transformations" className={`${outlineBtn} mt-6 border-bazooka-lime/70`}>See Transformation Stories <ArrowRight className="size-4"/></Link></motion.div>
          <motion.div {...reveal} className="relative grid min-h-[270px] grid-cols-2 overflow-hidden rounded-[6px] border border-bazooka-border-strong"><div className="relative bg-[url('https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=700&q=90')] bg-cover bg-center grayscale"><span className="absolute left-4 top-4 text-[10px] font-black">BEFORE</span></div><div className="relative bg-[url('https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=700&q=90')] bg-cover bg-[62%_center]"><span className="absolute right-4 top-4 text-[10px] font-black text-bazooka-lime">AFTER</span></div><span className="absolute left-1/2 top-1/2 grid size-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-black"><MoveHorizontal className="size-4"/></span></motion.div>
          <motion.div {...reveal} className="space-y-6"><div><strong className="font-display text-[28px]"><span className="text-bazooka-lime">-12</span> KG</strong><small className="block text-[8px] text-bazooka-text-secondary">WEIGHT LOSS</small></div><div className="font-display text-[19px] font-black">+ STRENGTH<br/>+ CONFIDENCE</div><div><strong className="font-display text-[28px] text-bazooka-lime">100%</strong><small className="block text-[8px] text-bazooka-text-secondary">BETTER ME</small></div></motion.div>
        </div>
      </section>

      <section className="border-b border-bazooka-border/70 bg-bazooka-soft-black py-12">
        <div className={`${shell} grid gap-8 md:grid-cols-[210px_340px_1fr] md:items-stretch`}>
          <motion.div {...reveal} className="flex flex-col justify-center border-bazooka-border md:border-r md:pr-8"><span className="text-[23px] font-medium">Google</span><strong className="font-display mt-1 text-[46px]">4.9</strong><div className="flex gap-1 text-[#fbbc04]">{Array.from({length:5}).map((_,i)=><Star key={i} className="size-4 fill-current"/>)}</div><p className="mt-2 text-[9px] text-bazooka-text-secondary">Based on 250+ reviews</p><small className="mt-4 inline-flex items-center gap-2 text-[8px] text-bazooka-text-secondary"><ShieldCheck className="size-4 text-bazooka-lime"/> VERIFIED REVIEWS</small></motion.div>
          <motion.div {...reveal} className="flex flex-col justify-center"><h2 className="font-display text-[28px] font-black uppercase">Meet Our Experts</h2><div className="mt-5 flex gap-5"><div className="flex items-center gap-3"><span className="size-12 rounded-full bg-[url('https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=300&q=90')] bg-cover bg-center"/><div><strong className="block text-[10px]">VIKRAM SINGH</strong><small className="text-[8px] text-bazooka-text-secondary">Strength Coach</small></div></div><div className="flex items-center gap-3"><span className="size-12 rounded-full bg-[url('https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=300&q=90')] bg-cover bg-center"/><div><strong className="block text-[10px]">PRIYA SHARMA</strong><small className="text-[8px] text-bazooka-text-secondary">Nutrition Coach</small></div></div></div><Link href="/trainers" className={`${outlineBtn} mt-5 h-9 w-fit border-bazooka-lime/70 px-5 text-[9px]`}>Meet All Trainers <ArrowRight className="size-3.5"/></Link></motion.div>
          <motion.article key={reviewIndex} initial={{opacity:0,x:10}} animate={{opacity:1,x:0}} className="relative rounded-[6px] border border-bazooka-border bg-[#111214] p-6"><div className="flex items-start justify-between"><FcGoogle className="size-7"/><div className="flex gap-0.5 text-[#fbbc04]">{Array.from({length:5}).map((_,i)=><Star key={i} className="size-3 fill-current"/>)}</div></div><p className="mt-5 min-h-[72px] text-[12px] leading-5 text-bazooka-text-secondary">“{review.text}”</p><div className="mt-5 flex items-center gap-3"><span className="grid size-10 place-items-center rounded-full bg-bazooka-surface text-sm font-black text-bazooka-lime">{review.name.charAt(0)}</span><div><strong className="block text-[10px]">{review.name}</strong><small className="text-[8px] text-bazooka-text-secondary">{review.meta}</small><span className="mt-1 flex items-center gap-1 text-[7px] text-bazooka-lime"><ShieldCheck className="size-3"/> Verified Google Review</span></div></div><div className="absolute bottom-5 right-5 flex gap-2"><button onClick={()=>setReviewIndex((reviewIndex-1+reviews.length)%reviews.length)} aria-label="Previous review" className="grid size-9 place-items-center rounded border border-bazooka-border hover:border-bazooka-lime"><ChevronLeft className="size-4"/></button><button onClick={()=>setReviewIndex((reviewIndex+1)%reviews.length)} aria-label="Next review" className="grid size-9 place-items-center rounded border border-bazooka-border hover:border-bazooka-lime"><ChevronRight className="size-4"/></button></div><div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">{reviews.map((_,i)=><span key={i} className={`size-1.5 rounded-full ${i===reviewIndex?"bg-bazooka-lime":"bg-bazooka-border-strong"}`}/>)}</div></motion.article>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-bazooka-border/70 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1900&q=90')] bg-cover bg-center py-16 grayscale"><div className="absolute inset-0 bg-black/72"/><motion.div {...reveal} className={`${shell} relative flex flex-col gap-10 md:flex-row md:items-center md:justify-between`}><div className="md:pl-[220px]"><h2 className="font-display text-[38px] font-black uppercase leading-[.96]">Your First<br/><span className="text-bazooka-lime">Workout Is On Us.</span></h2><div className="mt-6 grid grid-cols-2 gap-5 text-[9px] text-bazooka-text-secondary sm:grid-cols-4">{[[Check,"No commitments","Just show up"],[Dumbbell,"Expert guidance","From day one"],[Users,"Feel the community","Train together"],[Sparkles,"Start your","transformation"]].map(([Icon,title,sub])=>{const I=Icon as typeof Check;return <span key={String(title)} className="flex gap-2"><I className="size-4 shrink-0 text-bazooka-lime"/><span><b className="block text-white">{String(title)}</b><small>{String(sub)}</small></span></span>})}</div></div><div className="flex min-w-[205px] flex-col gap-3"><Link href="/book-free-trial" className={primaryBtn}>Book Free Trial <ArrowRight className="size-4"/></Link><Link href="/memberships" className={outlineBtn}>Join Bazooka <ArrowRight className="size-4"/></Link></div></motion.div></section>

      <footer className="bg-bazooka-soft-black">
        <div className={`${shell} grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_repeat(5,1fr)_1.2fr]`}>
          <div><Link href="/" className="inline-block"><Logo/></Link><p className="mt-4 text-[10px] leading-5 text-bazooka-text-secondary">Stronger People.<br/>A Healthier Jodhpur.</p><div className="mt-5 flex gap-2">{[FaInstagram,FaFacebookF,FaYoutube].map((Icon,index)=><a key={index} href="#" aria-label="Social media" className="grid size-8 place-items-center rounded-full border border-bazooka-border text-bazooka-text-secondary transition hover:border-bazooka-lime hover:bg-bazooka-lime hover:text-black"><Icon className="size-3.5"/></a>)}</div></div>
          {footerCols.map((col)=><div key={col.title}><h3 className="mb-4 text-[9px] font-black uppercase">{col.title}</h3><div className="space-y-2.5">{col.links.map((label)=><Link key={label} href="#" className="text-[8px] text-bazooka-text-secondary transition hover:text-bazooka-lime">{label}</Link>)}</div></div>)}
          <div className="space-y-4 text-[8px] leading-4 text-bazooka-text-secondary"><a href="https://maps.app.goo.gl/ArEb2YaGdZq5qF8x7" target="_blank" rel="noreferrer" className="flex gap-2 hover:text-bazooka-lime"><MapPin className="size-4 shrink-0 text-bazooka-lime"/>Sardarpura,<br/>Jodhpur, Rajasthan<br/>India — 342003</a><p className="flex gap-2"><MessageCircleMore className="size-4 shrink-0 text-bazooka-lime"/>+91 882 502 XXXX</p><p className="flex gap-2"><Flame className="size-4 shrink-0 text-bazooka-lime"/>Mon – Sun<br/>5:00 AM – 11:00 PM</p></div>
        </div>
        <div className="border-t border-bazooka-border"><div className={`${shell} flex flex-col gap-2 py-4 text-[8px] text-bazooka-muted sm:flex-row sm:justify-between`}><span>© 2026 Bazooka Fitness. All rights reserved.</span><a href="https://builtbyshahzad.vercel.app" target="_blank" rel="noreferrer" className="transition hover:text-bazooka-lime">Designed &amp; Developed by Shahzad Khan <b className="text-bazooka-lime">♥</b></a></div></div>
      </footer>

      <aside className="fixed bottom-5 right-5 z-40 flex flex-col gap-3" aria-label="Quick actions">
        <Link href="/memberships" className="group grid size-13 place-items-center rounded-full border border-bazooka-lime bg-bazooka-lime text-black shadow-[0_0_22px_rgba(182,240,0,.18)] transition hover:scale-110" aria-label="Join Bazooka"><UserRound className="size-5"/></Link>
        <Link href="/book-free-trial" className="group grid size-13 place-items-center rounded-full border border-bazooka-lime bg-bazooka-lime text-black transition hover:scale-110" aria-label="Book free trial"><CalendarDays className="size-5"/></Link>
        <a href="#" className="grid size-13 place-items-center rounded-full bg-bazooka-whatsapp text-white transition hover:scale-110" aria-label="WhatsApp"><FaWhatsapp className="size-6"/></a>
        <button type="button" onClick={()=>setChatOpen((v)=>!v)} className="grid size-13 place-items-center rounded-full border border-bazooka-border bg-bazooka-card text-bazooka-lime transition hover:scale-110 hover:border-bazooka-lime" aria-label="Ask Bazooka"><MessageCircleMore className="size-5"/></button>
        {showScrollTop&&<motion.button initial={{opacity:0,scale:.8,y:8}} animate={{opacity:1,scale:1,y:0}} type="button" onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} className="grid size-13 place-items-center rounded-full border border-bazooka-border bg-bazooka-card text-white hover:border-bazooka-lime hover:text-bazooka-lime" aria-label="Scroll to top">↑</motion.button>}
      </aside>

      {chatOpen&&<motion.section initial={{opacity:0,scale:.96,y:15}} animate={{opacity:1,scale:1,y:0}} className="fixed bottom-[92px] right-[82px] z-50 w-[min(calc(100%-32px),360px)] overflow-hidden rounded-lg border border-bazooka-border bg-bazooka-card shadow-2xl" aria-label="Bazooka chatbot"><div className="flex items-center justify-between border-b border-bazooka-border bg-bazooka-surface px-4 py-3"><div className="flex items-center gap-3"><span className="grid size-9 place-items-center rounded-full bg-bazooka-lime text-black"><MessageCircleMore className="size-4"/></span><div><strong className="block text-[11px] text-bazooka-lime">ASK BAZOOKA</strong><small className="text-[9px] text-bazooka-text-secondary">Fitness &amp; membership help</small></div></div><button onClick={()=>setChatOpen(false)} className="grid size-8 place-items-center rounded border border-bazooka-border hover:border-bazooka-lime"><X className="size-4"/></button></div><div className="p-4"><div className="rounded bg-bazooka-surface p-4 text-[11px] leading-5 text-bazooka-text-secondary">Hey! Ask me about memberships, programs, trainers or your free trial.</div></div><div className="flex gap-2 border-t border-bazooka-border p-3"><input aria-label="Message" placeholder="Type your question..." className="min-w-0 flex-1 rounded border border-bazooka-border bg-black px-3 py-2 text-[11px] outline-none focus:border-bazooka-lime"/><button className="grid size-10 place-items-center rounded bg-bazooka-lime text-black"><ArrowRight className="size-4"/></button></div></motion.section>}
    </main>
  );
}
