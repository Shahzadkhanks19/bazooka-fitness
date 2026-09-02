"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock3, Dumbbell, Headphones, HeartPulse, Send, ShieldCheck, Target, UserRound, UsersRound } from "lucide-react";
import { fieldClass, primaryButton, shell, textareaClass } from "./booking-shared";

const heroFeatures = [[CalendarDays,"1 Day","Free Trial"],[UsersRound,"Expert","Guidance"],[Dumbbell,"Full Access","To Facilities"],[HeartPulse,"No Hidden","Costs"]] as const;
const trustItems = [[ShieldCheck,"100% Free","No payment required"],[Clock3,"Quick Confirmation","We’ll confirm within 2 hours"],[Headphones,"Expert Support","Talk to our fitness experts"]] as const;
const expectItems = [[Dumbbell,"Gym Tour","Explore our premium facilities and equipment."],[UsersRound,"Fitness Consultation","Get a personal consultation with our expert trainers."],[Target,"Workout Experience","Experience a guided workout session."],[Headphones,"Q&A Session","Get all your fitness and membership questions answered."]] as const;
const steps = [["1","Fill The Form","Share your details in the form."],["2","We’ll Contact You","Our team will call you to confirm."],["3","Visit Bazooka","Come for your free trial session."],["4","Start Your Transformation","Begin your fitness journey with us!"]] as const;

const OPEN_MINUTES = 5 * 60 + 30;
const CLOSE_MINUTES = 22 * 60;
const SLOT_INTERVAL = 30;

function formatTime(minutes: number) {
  const hour24 = Math.floor(minutes / 60);
  const minute = minutes % 60;
  const period = hour24 >= 12 ? "PM" : "AM";
  const hour12 = hour24 % 12 || 12;
  return `${String(hour12).padStart(2, "0")}:${String(minute).padStart(2, "0")} ${period}`;
}

const trialTimes = Array.from(
  { length: Math.floor((CLOSE_MINUTES - OPEN_MINUTES) / SLOT_INTERVAL) },
  (_, index) => {
    const startMinutes = OPEN_MINUTES + index * SLOT_INTERVAL;
    const endMinutes = startMinutes + SLOT_INTERVAL;
    return {
      label: `${formatTime(startMinutes)} - ${formatTime(endMinutes)}`,
      startMinutes,
      endMinutes,
    };
  },
);

function localDateValue(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function isSunday(dateValue: string) {
  if (!dateValue) return false;
  const [year, month, day] = dateValue.split("-").map(Number);
  return new Date(year, month - 1, day).getDay() === 0;
}

export default function FreeTrialPage(){
  const today = useMemo(() => new Date(), []);
  const minDate = useMemo(() => localDateValue(today), [today]);
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [dateError, setDateError] = useState("");
  const [submitted,setSubmitted]=useState(false);
  const isToday = preferredDate === minDate;
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const handleDateChange = (value: string) => {
    setSubmitted(false);
    setDateError("");

    if (!value) {
      setPreferredDate("");
      setPreferredTime("");
      return;
    }

    if (value < minDate) {
      setPreferredDate("");
      setPreferredTime("");
      setDateError("Past dates are not available. Please choose today or a future date.");
      return;
    }

    if (isSunday(value)) {
      setPreferredDate("");
      setPreferredTime("");
      setDateError("Bazooka Fitness is closed on Sundays. Please choose Monday to Saturday.");
      return;
    }

    setPreferredDate(value);
    if (value === minDate) {
      const selected = trialTimes.find((item) => item.label === preferredTime);
      if (selected && selected.startMinutes <= currentMinutes) setPreferredTime("");
    }
  };

  const hasAvailableSlotsToday = trialTimes.some((item) => item.startMinutes > currentMinutes);

  return <>
    <section className="relative min-h-[560px] overflow-hidden border-b border-bazooka-border/70 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=90')] bg-cover bg-center"><div className="absolute inset-0 bg-gradient-to-r from-black via-black/78 to-black/20"/><div className={`${shell} relative z-10 flex min-h-[560px] items-center py-14`}><div className="max-w-[610px]"><p className="text-[9px] uppercase text-bazooka-text-secondary">Home <span className="mx-2 text-bazooka-lime">›</span> Book Free Trial</p><h1 className="font-display mt-7 text-[50px] font-black uppercase leading-[.9] sm:text-[66px]">Experience Bazooka<br/><span className="text-bazooka-lime">Before You Commit.</span></h1><span className="mt-5 block h-0.5 w-10 bg-bazooka-lime"/><p className="mt-5 max-w-[530px] text-[12px] leading-6 text-bazooka-text-secondary">Book your free trial and experience world-class equipment, expert guidance and an unmatched fitness culture.</p><div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-4">{heroFeatures.map(([Icon,a,b])=><div key={a} className="flex items-start gap-2"><Icon className="size-5 text-bazooka-lime"/><span className="text-[9px] uppercase leading-4">{a}<br/><span className="text-bazooka-text-secondary">{b}</span></span></div>)}</div></div></div></section>

    <section className="bg-bazooka-soft-black py-12"><div className={shell}><div className="text-center"><h2 className="font-display text-[38px] font-black uppercase">Book Your <span className="text-bazooka-lime">Free Trial</span></h2><p className="mt-2 text-[10px] text-bazooka-text-secondary">Fill in your details and we’ll get in touch with you to confirm your trial.</p></div><form onSubmit={(e)=>{e.preventDefault();if(!preferredDate||!preferredTime||isSunday(preferredDate)||preferredDate<minDate)return;setSubmitted(true)}} className="mt-7 rounded-[6px] border border-bazooka-border-strong bg-bazooka-surface p-5 sm:p-7"><div className="grid gap-7 lg:grid-cols-2"><div><h3 className="font-display flex items-center gap-2 text-[20px] font-black uppercase"><UserRound className="size-5 text-bazooka-lime"/>Personal <span className="text-bazooka-lime">Information</span></h3><div className="mt-5 space-y-3"><input required className={fieldClass} placeholder="Full Name *"/><input required className={fieldClass} placeholder="Phone Number *" inputMode="tel"/><input required type="email" className={fieldClass} placeholder="Email Address *"/><div className="grid gap-3 sm:grid-cols-2"><input className={fieldClass} placeholder="Age" inputMode="numeric"/><select className={fieldClass} defaultValue=""><option value="" disabled>Gender</option><option>Male</option><option>Female</option><option>Prefer not to say</option></select></div><select required className={fieldClass} defaultValue=""><option value="" disabled>Fitness Goal *</option><option>Fat Loss</option><option>Muscle Gain</option><option>Strength</option><option>General Fitness</option></select><select className={fieldClass} defaultValue=""><option value="" disabled>How did you hear about us?</option><option>Google</option><option>Instagram</option><option>Friend / Family</option><option>Walk-in</option><option>Other</option></select></div></div><div><h3 className="font-display flex items-center gap-2 text-[20px] font-black uppercase"><Target className="size-5 text-bazooka-lime"/>Preferred Trial <span className="text-bazooka-lime">Details</span></h3><div className="mt-5 grid gap-3 sm:grid-cols-2"><input required type="date" min={minDate} value={preferredDate} onChange={(e)=>handleDateChange(e.target.value)} className={fieldClass} aria-describedby="trial-date-help"/><select required className={fieldClass} value={preferredTime} onChange={(e)=>{setSubmitted(false);setPreferredTime(e.target.value)}} disabled={!preferredDate}><option value="" disabled>{preferredDate ? "Preferred Time *" : "Choose a date first"}</option>{trialTimes.map((item)=><option key={item.label} value={item.label} disabled={isToday && item.startMinutes <= currentMinutes}>{item.label}</option>)}</select></div><p id="trial-date-help" className="mt-2 text-[8px] leading-4 text-bazooka-muted">Open Monday–Saturday, 5:30 AM–10:00 PM. Sunday closed. Time slots are every 30 minutes.</p>{dateError&&<p className="mt-3 rounded-[4px] border border-bazooka-warning/40 bg-bazooka-warning/5 p-3 text-[9px] text-bazooka-warning">{dateError}</p>}{isToday && !hasAvailableSlotsToday && <p className="mt-3 rounded-[4px] border border-bazooka-warning/40 bg-bazooka-warning/5 p-3 text-[9px] text-bazooka-warning">Today’s trial slots have ended. Please choose a future date.</p>}<textarea className={`${textareaClass} mt-3`} placeholder="Any specific goals or areas you’d like us to focus on?"/><label className="mt-4 flex items-start gap-3 text-[9px] text-bazooka-text-secondary"><input required type="checkbox" className="mt-0.5 accent-[#FFB52E]"/><span>I agree to the <Link href="/terms-and-conditions" className="text-bazooka-lime">Terms & Conditions</Link> and <Link href="/privacy-policy" className="text-bazooka-lime">Privacy Policy</Link>.</span></label><button type="submit" className={`${primaryButton} mt-5 w-full`} disabled={!preferredDate || !preferredTime}>Book My Free Trial <ArrowRight className="size-4"/><Send className="size-4"/></button>{submitted&&<p className="mt-3 rounded-[4px] border border-bazooka-lime/40 bg-bazooka-lime/5 p-3 text-center text-[9px] text-bazooka-lime">Thanks — your free trial request has been captured. Our team will confirm it with you.</p>}</div></div><div className="mt-7 grid gap-4 border-t border-bazooka-border pt-6 sm:grid-cols-3">{trustItems.map(([Icon,a,b])=><div key={a} className="flex items-center justify-center gap-3"><Icon className="size-6 text-bazooka-lime"/><div><strong className="font-display block text-[15px] uppercase">{a}</strong><span className="text-[8px] text-bazooka-text-secondary">{b}</span></div></div>)}</div></form></div></section>

    <section className="border-y border-bazooka-border/70 bg-bazooka-black py-12"><div className={`${shell} grid gap-6 lg:grid-cols-2`}><div className="rounded-[6px] border border-bazooka-border-strong bg-bazooka-surface p-6"><h2 className="font-display text-[30px] font-black uppercase">What To Expect In Your <span className="text-bazooka-lime">Free Trial</span></h2><div className="mt-6 space-y-5">{expectItems.map(([Icon,a,b])=><div key={a} className="flex gap-4"><span className="grid size-10 shrink-0 place-items-center rounded-full border border-bazooka-lime text-bazooka-lime"><Icon className="size-5"/></span><div><h3 className="font-display text-[17px] font-black uppercase">{a}</h3><p className="text-[9px] text-bazooka-text-secondary">{b}</p></div></div>)}</div></div><div className="rounded-[6px] border border-bazooka-border-strong bg-bazooka-surface p-6"><h2 className="font-display text-[30px] font-black uppercase">Simple Steps To <span className="text-bazooka-lime">Get Started</span></h2><div className="mt-7 grid gap-3 sm:grid-cols-2">{steps.map(([n,a,b])=><div key={n} className="relative rounded-[5px] border border-bazooka-border bg-bazooka-black p-5 pt-7"><span className="absolute -top-3 left-4 grid size-7 place-items-center rounded-full bg-bazooka-lime text-[10px] font-black text-black">{n}</span><h3 className="font-display text-[16px] font-black uppercase">{a}</h3><p className="mt-2 text-[9px] leading-4 text-bazooka-text-secondary">{b}</p></div>)}</div></div></div></section>

    <section className="bg-bazooka-soft-black py-8"><div className={shell}><div className="flex flex-col gap-5 rounded-[6px] border border-bazooka-border-strong bg-bazooka-surface px-6 py-6 md:flex-row md:items-center md:justify-between"><div className="flex max-w-[700px] gap-4"><span className="font-display text-[54px] leading-none text-bazooka-lime">“</span><p className="text-[12px] leading-6 text-bazooka-text-secondary">Best decision I made was joining Bazooka. The trainers, the environment, and the energy here are unmatched!</p></div><div className="shrink-0"><strong className="font-display text-[16px] text-bazooka-lime">Rohit Singh</strong><span className="block text-[8px] text-bazooka-text-secondary">Bazooka Member</span><span className="text-[13px] tracking-[.2em] text-bazooka-lime">★★★★★</span></div></div></div></section>
  </>;
}
