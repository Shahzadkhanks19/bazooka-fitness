"use client";

import { useMemo, useState, type ReactNode } from "react";
import { ArrowRight, Award, CalendarDays, CheckCircle2, ChevronLeft, ChevronRight, Clock3, Dumbbell, Mail, Phone, ShieldCheck, Star, Target, TrendingUp, UserRound } from "lucide-react";
import CustomSelect from "@/components/ui/custom-select";
import type { TrainerProfile } from "@/components/trainers/trainer-data";
import { fieldClass, primaryButton, shell, textareaClass } from "./booking-shared";

const OPEN_MINUTES = 5 * 60 + 30;
const CLOSE_MINUTES = 22 * 60;
const SLOT_INTERVAL = 30;
const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as const;
const heroFeatures = [[CalendarDays, "Personalized", "Training Plan"], [TrendingUp, "Track Your", "Progress"], [UserRound, "Expert", "Guidance"], [Target, "Better", "Results"]] as const;
const whyItems = ["Customized workout plans based on your goals", "Focus on proper form & injury prevention", "Motivation and accountability", "Real progress with measurable results"] as const;
const ages = Array.from({ length: 43 }, (_, i) => ({ label: String(i + 18), value: String(i + 18) }));
const genders = [{ label: "Male", value: "Male" }, { label: "Female", value: "Female" }, { label: "Prefer not to say", value: "Prefer not to say" }] as const;
const goals = [{ label: "Fat Loss", value: "Fat Loss" }, { label: "Muscle Gain", value: "Muscle Gain" }, { label: "Strength", value: "Strength" }, { label: "General Fitness", value: "General Fitness" }] as const;

function formatTime(minutes: number) {
  const hour24 = Math.floor(minutes / 60);
  const minute = minutes % 60;
  const period = hour24 >= 12 ? "PM" : "AM";
  const hour12 = hour24 % 12 || 12;
  return `${String(hour12).padStart(2, "0")}:${String(minute).padStart(2, "0")} ${period}`;
}

const timeSlots = Array.from({ length: Math.floor((CLOSE_MINUTES - OPEN_MINUTES) / SLOT_INTERVAL) }, (_, index) => {
  const minutes = OPEN_MINUTES + index * SLOT_INTERVAL;
  return { label: formatTime(minutes), minutes };
});

function startOfDay(date: Date) { return new Date(date.getFullYear(), date.getMonth(), date.getDate()); }
function startOfMonth(date: Date) { return new Date(date.getFullYear(), date.getMonth(), 1); }
function addDays(date: Date, amount: number) { const next = new Date(date); next.setDate(next.getDate() + amount); return next; }
function addMonths(date: Date, amount: number) { return new Date(date.getFullYear(), date.getMonth() + amount, 1); }
function sameDay(a: Date, b: Date) { return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate(); }
function buildCalendarDays(month: Date) { const first = startOfMonth(month); const gridStart = addDays(first, -first.getDay()); return Array.from({ length: 42 }, (_, index) => addDays(gridStart, index)); }
function formatSelectedDate(date: Date) { return new Intl.DateTimeFormat("en-IN", { weekday: "short", day: "2-digit", month: "short", year: "numeric" }).format(date); }
function isSunday(date: Date) { return date.getDay() === 0; }

function nextBookableDate(today: Date) {
  let candidate = addDays(today, 1);
  while (isSunday(candidate)) candidate = addDays(candidate, 1);
  return candidate;
}

export default function BookSessionPage({ trainer }: { trainer: TrainerProfile }) {
  const today = useMemo(() => startOfDay(new Date()), []);
  const initialDate = useMemo(() => nextBookableDate(today), [today]);
  const [calendarMonth, setCalendarMonth] = useState(() => startOfMonth(initialDate));
  const [selectedDate, setSelectedDate] = useState(initialDate);
  const [slot, setSlot] = useState("08:00 AM");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [goal, setGoal] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState("");
  const firstName = trainer.name.split(" ")[0];
  const days = useMemo(() => buildCalendarDays(calendarMonth), [calendarMonth]);
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const previousMonthDisabled = addMonths(calendarMonth, -1) < startOfMonth(today);

  const isSlotDisabled = (minutes: number) => isSunday(selectedDate) || (sameDay(selectedDate, today) && minutes <= currentMinutes);

  const selectDate = (date: Date) => {
    const normalized = startOfDay(date);
    if (normalized < today || isSunday(normalized)) return;
    setSelectedDate(normalized);
    setCalendarMonth(startOfMonth(normalized));
    const nextAvailable = timeSlots.find((time) => !isSlotDisabledForDate(time.minutes, normalized));
    setSlot(nextAvailable?.label ?? "");
    setSubmitted(false);
  };

  const isSlotDisabledForDate = (minutes: number, date: Date) => isSunday(date) || (sameDay(date, today) && minutes <= currentMinutes);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(false);
    setFormError("");
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").replace(/\D/g, "");
    const email = String(data.get("email") ?? "").trim();
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (name.length < 2 || phone.length !== 10 || !validEmail || !goal) {
      setFormError("Please enter a valid name, 10-digit phone number, email and fitness goal.");
      return;
    }
    if (!slot || isSunday(selectedDate)) {
      setFormError("Please choose an available Monday–Saturday session slot.");
      return;
    }
    setSubmitted(true);
  };

  return <>
    <section className="relative min-h-[560px] overflow-hidden border-b border-bazooka-border/70 bg-cover bg-center" style={{ backgroundImage: `url(${trainer.image})` }}>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/82 to-black/28" />
      <div className={`${shell} relative z-10 grid min-h-[560px] items-center gap-8 py-12 lg:grid-cols-[1fr_.8fr]`}>
        <div><p className="text-[9px] uppercase text-bazooka-text-secondary">Home <span className="mx-2 text-bazooka-lime">›</span> Trainers <span className="mx-2 text-bazooka-lime">›</span> {trainer.name} <span className="mx-2 text-bazooka-lime">›</span> Book Session</p><h1 className="font-display mt-6 text-[48px] font-black uppercase leading-[.9] sm:text-[62px]">Book A Session With<br /><span className="text-bazooka-lime">{trainer.name}</span></h1><p className="mt-5 max-w-[470px] text-[12px] leading-6 text-bazooka-text-secondary">Get personalized training, expert guidance and real results with your dedicated coach.</p><div className="mt-8 grid max-w-[600px] grid-cols-2 gap-4 sm:grid-cols-4">{heroFeatures.map(([Icon, a, b]) => <div key={a} className="flex items-start gap-2"><Icon className="mt-0.5 size-5 text-bazooka-lime" /><span className="text-[9px] leading-4">{a}<br />{b}</span></div>)}</div></div>
        <div className="hidden border-l border-bazooka-border-strong pl-8 lg:block"><span className="inline-flex rounded-[3px] bg-bazooka-lime px-3 py-1 text-[8px] font-black uppercase text-black">Certified Trainer</span><h2 className="font-display mt-3 text-[30px] font-black uppercase">{trainer.name}</h2><p className="text-[11px] text-bazooka-text-secondary">{trainer.role}</p><div className="mt-5 space-y-3 border-y border-bazooka-border py-5 text-[10px] text-bazooka-text-secondary"><p className="flex gap-3"><Clock3 className="size-4 text-bazooka-lime" />{trainer.experience} Experience</p><p className="flex gap-3"><Dumbbell className="size-4 text-bazooka-lime" />Specializes in {trainer.specialties.join(" & ")}</p><p className="flex gap-3"><Award className="size-4 text-bazooka-lime" />{trainer.certification}</p><p className="flex gap-3"><TrendingUp className="size-4 text-bazooka-lime" />100+ Transformations</p></div><div className="mt-5 flex items-center gap-3"><div className="flex gap-1 text-bazooka-lime">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-current" />)}</div><span className="text-[9px]">4.9 (120+ Reviews)</span></div></div>
      </div>
    </section>

    <section className="bg-bazooka-soft-black py-12"><div className={`${shell} grid gap-5 lg:grid-cols-[1fr_320px]`}>
      <form noValidate onSubmit={handleSubmit} className="rounded-[6px] border border-bazooka-border-strong bg-bazooka-surface p-5 sm:p-6">
        <SectionNumber n="1" title="Personal Details" text="Tell us a little about yourself so we can get you the best experience." />
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          <IconField icon={UserRound}><input name="name" className={fieldClass} placeholder="Full Name *" /></IconField>
          <IconField icon={Phone}><input name="phone" className={fieldClass} placeholder="Phone Number *" inputMode="tel" maxLength={10} /></IconField>
          <IconField icon={Mail}><input name="email" type="email" className={fieldClass} placeholder="Email Address *" /></IconField>
          <CustomSelect value={age} onChange={setAge} options={ages} placeholder="Age" />
          <CustomSelect value={gender} onChange={setGender} options={genders} placeholder="Gender" />
          <CustomSelect value={goal} onChange={setGoal} options={goals} placeholder="Fitness Goal *" required />
        </div>
        <textarea className={`${textareaClass} mt-3`} placeholder="Any specific goals or concerns? (Optional)" />

        <div className="my-7 border-t border-bazooka-border" /><SectionNumber n="2" title="Select Date & Time" text="Choose a convenient Monday–Saturday date and an available time for your session." />
        <div className="mt-5 grid gap-5 xl:grid-cols-[300px_1fr]">
          <div className="rounded-[5px] border border-bazooka-border-strong bg-bazooka-black p-4"><div className="mb-4 flex items-center justify-between text-[10px] font-bold"><button type="button" aria-label="Previous month" disabled={previousMonthDisabled} onClick={() => setCalendarMonth(addMonths(calendarMonth, -1))} className="grid size-8 place-items-center rounded-full border border-transparent transition hover:border-bazooka-lime/50 hover:bg-bazooka-card-hover disabled:cursor-not-allowed disabled:opacity-25"><ChevronLeft className="size-4" /></button><span>{new Intl.DateTimeFormat("en-IN", { month: "long", year: "numeric" }).format(calendarMonth)}</span><button type="button" aria-label="Next month" onClick={() => setCalendarMonth(addMonths(calendarMonth, 1))} className="grid size-8 place-items-center rounded-full border border-transparent transition hover:border-bazooka-lime/50 hover:bg-bazooka-card-hover"><ChevronRight className="size-4" /></button></div><div className="grid grid-cols-7 gap-1 text-center text-[8px] text-bazooka-text-muted">{weekDays.map(d => <span key={d}>{d}</span>)}{days.map((date) => { const past = date < today; const sunday = isSunday(date); const outside = date.getMonth() !== calendarMonth.getMonth(); const selected = sameDay(date, selectedDate); const disabled = past || sunday; return <button type="button" key={date.toISOString()} disabled={disabled} onClick={() => selectDate(date)} className={`mx-auto mt-2 grid size-8 place-items-center rounded-full text-[9px] transition ${selected ? "bg-bazooka-lime font-black text-black" : disabled ? "cursor-not-allowed text-bazooka-disabled opacity-25" : outside ? "text-bazooka-text-muted hover:bg-bazooka-card-hover" : "text-bazooka-text-secondary hover:bg-bazooka-card-hover hover:text-bazooka-lime"}`}>{date.getDate()}</button>; })}</div></div>
          <div><h3 className="text-[11px] font-black uppercase">Available Time Slots</h3><p className="mt-2 text-[9px] text-bazooka-text-secondary"><span className="mr-2 text-bazooka-lime">●</span>{formatSelectedDate(selectedDate)}</p><div className="mt-4 grid max-h-[260px] grid-cols-2 gap-2 overflow-y-auto pr-1 sm:grid-cols-3">{timeSlots.map(({ label, minutes }) => { const disabled = isSlotDisabled(minutes); return <button type="button" key={label} disabled={disabled} onClick={() => { setSlot(label); setSubmitted(false); }} className={`min-h-10 rounded-[4px] border text-[9px] transition-all ${disabled ? "cursor-not-allowed border-bazooka-border text-bazooka-disabled opacity-30" : slot === label ? "border-bazooka-lime bg-bazooka-lime text-black" : "border-bazooka-border-strong text-bazooka-text-secondary hover:border-bazooka-lime hover:text-bazooka-lime"}`}>{label}</button>; })}</div><p className="mt-3 text-[8px] leading-4 text-bazooka-text-muted">Open Monday–Saturday, 5:30 AM–10:00 PM. Sunday closed. Past slots are automatically unavailable.</p></div>
        </div>

        <div className="my-7 border-t border-bazooka-border" /><SectionNumber n="3" title="Additional Information" text="Let us know anything else that will help us prepare for your session." />
        <textarea className={`${textareaClass} mt-5`} placeholder="e.g. Injuries, medical conditions, preferred training style, etc. (Optional)" />
        <button className={`${primaryButton} mt-4 w-full disabled:cursor-not-allowed disabled:opacity-40`} disabled={!slot} type="submit">Book Your Session <ArrowRight className="size-4" /></button>
        {formError && <p role="alert" className="mt-3 rounded-[4px] border border-bazooka-warning/40 bg-bazooka-warning/5 p-3 text-center text-[9px] leading-4 text-bazooka-warning">{formError}</p>}
        {submitted && <p className="mt-3 rounded-[4px] border border-bazooka-lime/40 bg-bazooka-lime/5 p-3 text-center text-[9px] text-bazooka-lime">Thanks — your session request has been captured. We’ll confirm the selected slot with you.</p>}
        <p className="mt-3 text-center text-[8px] text-bazooka-text-muted"><ShieldCheck className="mr-1 inline size-3 text-bazooka-lime" />Your information is safe with us.</p>
      </form>
      <aside className="space-y-4"><div className="rounded-[6px] border border-bazooka-border-strong bg-bazooka-surface p-5"><h2 className="font-display text-[22px] font-black uppercase">Why Train With {firstName}?</h2><div className="mt-5 space-y-4 text-[10px] text-bazooka-text-secondary">{whyItems.map(x => <p key={x} className="flex gap-3"><CheckCircle2 className="size-5 shrink-0 text-bazooka-lime" />{x}</p>)}</div></div><div className="rounded-[6px] border border-bazooka-border-strong bg-bazooka-surface p-5"><span className="font-display text-[48px] leading-none text-bazooka-lime">“</span><p className="text-[10px] leading-5 text-bazooka-text-secondary">{firstName}’s training style is focused, supportive and structured around measurable progress.</p><p className="mt-4 text-[9px] font-black">— Bazooka Member</p></div><div className="relative min-h-[300px] overflow-hidden rounded-[6px] border border-bazooka-border-strong bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=90')] bg-cover bg-center"><div className="absolute inset-0 bg-black/45" /><div className="font-display absolute bottom-6 left-6 text-[32px] font-black uppercase leading-[.9] text-bazooka-lime">Discipline<br />Builds<br />Freedom</div></div></aside>
      </div></section>
  </>;
}

function SectionNumber({ n, title, text }: { n: string; title: string; text: string }) { return <div className="flex gap-3"><span className="grid size-8 shrink-0 place-items-center rounded-full bg-bazooka-lime text-[12px] font-black text-black">{n}</span><div><h2 className="font-display text-[20px] font-black uppercase">{title}</h2><p className="text-[9px] text-bazooka-text-secondary">{text}</p></div></div>; }
function IconField({ icon: Icon, children }: { icon: typeof UserRound; children: ReactNode }) { return <div className="relative"><Icon className="pointer-events-none absolute left-3 top-1/2 z-10 size-4 -translate-y-1/2 text-bazooka-text-muted" /><div className="[&_input]:pl-10">{children}</div></div>; }
