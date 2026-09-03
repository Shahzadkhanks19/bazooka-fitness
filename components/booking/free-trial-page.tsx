"use client";

import Link from "next/link";
import { useMemo, useState, type FormEvent } from "react";
import {
  ArrowRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Dumbbell,
  Headphones,
  Send,
  ShieldCheck,
  Target,
  UserRound,
  UsersRound,
} from "lucide-react";
import CustomCheckbox from "@/components/ui/custom-checkbox";
import CustomSelect from "@/components/ui/custom-select";
import { fieldClass, primaryButton, shell, textareaClass } from "./booking-shared";

const heroFeatures = [
  [CalendarDays, "Choose", "Your Visit"],
  [UsersRound, "Meet", "The Team"],
  [Dumbbell, "Explore", "The Gym"],
  [ShieldCheck, "No Payment", "To Request"],
] as const;

const trustItems = [
  [ShieldCheck, "Free Request", "No payment required to submit"],
  [Clock3, "Flexible Slots", "Choose a preferred date and time"],
  [Headphones, "Talk To The Team", "Ask about training and memberships"],
] as const;

const expectItems = [
  [Dumbbell, "Explore The Gym", "See the training areas, equipment and club environment in person."],
  [UsersRound, "Meet The Team", "Speak with the Bazooka team about your goals and the way you like to train."],
  [Target, "Discuss Your Goals", "Tell us what you want from your training so we can point you in the right direction."],
  [Headphones, "Ask Your Questions", "Get clarity on memberships, facilities, programs and the club experience."],
] as const;

const steps = [
  ["1", "Share Your Details", "Tell us who you are and what you are looking for."],
  ["2", "Choose A Slot", "Pick a preferred visit date and time."],
  ["3", "Team Confirmation", "The Bazooka team can confirm your visit with you."],
  ["4", "Visit Bazooka", "Come in, explore the gym and decide what fits you."],
] as const;

const OPEN_MINUTES = 5 * 60 + 30;
const CLOSE_MINUTES = 22 * 60;
const SLOT_INTERVAL = 30;
const weekDays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"] as const;
const genderOptions = ["Male", "Female", "Prefer not to say"].map((value) => ({ label: value, value }));
const goalOptions = ["Fat Loss", "Muscle Gain", "Strength", "General Fitness"].map((value) => ({ label: value, value }));
const sourceOptions = ["Google", "Instagram", "Friend / Family", "Walk-in", "Other"].map((value) => ({ label: value, value }));

function formatTime(minutes: number) {
  const h24 = Math.floor(minutes / 60);
  const m = minutes % 60;
  const period = h24 >= 12 ? "PM" : "AM";
  const h = h24 % 12 || 12;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")} ${period}`;
}

const trialTimes = Array.from({ length: Math.floor((CLOSE_MINUTES - OPEN_MINUTES) / SLOT_INTERVAL) }, (_, i) => {
  const startMinutes = OPEN_MINUTES + i * SLOT_INTERVAL;
  return { label: `${formatTime(startMinutes)} - ${formatTime(startMinutes + SLOT_INTERVAL)}`, startMinutes };
});

function localDateValue(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function dateFromValue(value: string) {
  const [y, m, d] = value.split("-").map(Number);
  return new Date(y, m - 1, d);
}

function prettyDate(value: string) {
  if (!value) return "Choose preferred date";
  return dateFromValue(value).toLocaleDateString("en-IN", { weekday: "short", day: "2-digit", month: "short", year: "numeric" });
}

function CustomDatePicker({ value, onChange, minDate }: { value: string; onChange: (value: string) => void; minDate: string }) {
  const initial = value ? dateFromValue(value) : dateFromValue(minDate);
  const [open, setOpen] = useState(false);
  const [view, setView] = useState(() => new Date(initial.getFullYear(), initial.getMonth(), 1));
  const firstDay = (view.getDay() + 6) % 7;
  const daysInMonth = new Date(view.getFullYear(), view.getMonth() + 1, 0).getDate();
  const cells = Array.from({ length: 42 }, (_, index) => {
    const day = index - firstDay + 1;
    if (day < 1 || day > daysInMonth) return null;
    return new Date(view.getFullYear(), view.getMonth(), day);
  });
  const minMonth = new Date(dateFromValue(minDate).getFullYear(), dateFromValue(minDate).getMonth(), 1);
  const canPrev = view > minMonth;

  return <div className="relative">
    <button type="button" onClick={() => setOpen((v) => !v)} aria-haspopup="dialog" aria-expanded={open} aria-label="Choose preferred trial date" className={`${fieldClass} flex items-center justify-between text-left ${value ? "text-white" : "text-bazooka-muted"}`}>
      <span>{prettyDate(value)}</span><CalendarDays className="size-4 text-bazooka-lime" />
    </button>
    {open && <div role="dialog" aria-label="Trial date calendar" className="absolute left-0 top-[calc(100%+6px)] z-50 w-[min(330px,calc(100vw-48px))] rounded-[7px] border border-bazooka-border-strong bg-bazooka-card p-4 shadow-2xl">
      <div className="flex items-center justify-between">
        <button type="button" aria-label="Previous month" disabled={!canPrev} onClick={() => canPrev && setView(new Date(view.getFullYear(), view.getMonth() - 1, 1))} className="grid size-9 place-items-center rounded-md border border-bazooka-border text-white transition hover:border-bazooka-lime hover:text-bazooka-lime disabled:cursor-not-allowed disabled:opacity-25"><ChevronLeft className="size-4" /></button>
        <strong className="font-display text-[15px] uppercase">{view.toLocaleDateString("en-IN", { month: "long", year: "numeric" })}</strong>
        <button type="button" aria-label="Next month" onClick={() => setView(new Date(view.getFullYear(), view.getMonth() + 1, 1))} className="grid size-9 place-items-center rounded-md border border-bazooka-border text-white transition hover:border-bazooka-lime hover:text-bazooka-lime"><ChevronRight className="size-4" /></button>
      </div>
      <div className="mt-4 grid grid-cols-7 gap-1">{weekDays.map((day) => <span key={day} className="py-1 text-center text-[7px] font-black text-bazooka-muted">{day}</span>)}{cells.map((date, index) => {
        if (!date) return <span key={`empty-${index}`} className="size-9" />;
        const dateValue = localDateValue(date);
        const blocked = dateValue < minDate || date.getDay() === 0;
        const selected = dateValue === value;
        return <button key={dateValue} type="button" aria-label={date.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })} aria-pressed={selected} disabled={blocked} onClick={() => { onChange(dateValue); setOpen(false); }} className={`grid size-9 place-items-center rounded-md text-[9px] font-bold transition ${selected ? "bg-bazooka-lime text-black" : "border border-transparent text-white hover:border-bazooka-lime hover:text-bazooka-lime"} disabled:cursor-not-allowed disabled:text-bazooka-disabled disabled:line-through`}>{date.getDate()}</button>;
      })}</div>
      <p className="mt-3 border-t border-bazooka-border pt-3 text-[8px] text-bazooka-muted">Sundays and past dates are unavailable.</p>
    </div>}
  </div>;
}

function TimePicker({ date, value, onChange, minDate, currentMinutes }: { date: string; value: string; onChange: (value: string) => void; minDate: string; currentMinutes: number }) {
  const [open, setOpen] = useState(false);
  const isToday = date === minDate;
  return <div className="relative">
    <button type="button" disabled={!date} onClick={() => date && setOpen((v) => !v)} aria-haspopup="listbox" aria-expanded={open} aria-label="Choose preferred trial time" className={`${fieldClass} flex items-center justify-between text-left ${!date ? "cursor-not-allowed opacity-50" : value ? "text-white" : "text-bazooka-muted"}`}>
      <span>{value || (!date ? "Choose a date first" : "Choose preferred time")}</span><Clock3 className="size-4 text-bazooka-lime" />
    </button>
    {open && <div role="listbox" aria-label="Available trial times" className="absolute left-0 right-0 top-[calc(100%+6px)] z-50 max-h-72 overflow-y-auto rounded-[6px] border border-bazooka-border-strong bg-bazooka-card p-2 shadow-2xl">
      <div className="grid gap-1 sm:grid-cols-2">{trialTimes.map((slot) => {
        const blocked = isToday && slot.startMinutes <= currentMinutes;
        return <button key={slot.label} type="button" role="option" aria-selected={value === slot.label} disabled={blocked} onClick={() => { onChange(slot.label); setOpen(false); }} className={`rounded-[4px] border px-3 py-3 text-left text-[9px] transition ${value === slot.label ? "border-bazooka-lime bg-bazooka-lime/10 text-bazooka-lime" : "border-bazooka-border bg-bazooka-black text-white hover:border-bazooka-lime hover:text-bazooka-lime"} disabled:cursor-not-allowed disabled:opacity-30 disabled:line-through`}>{slot.label}</button>;
      })}</div>
    </div>}
  </div>;
}

export default function FreeTrialPage() {
  const [today] = useState(() => new Date());
  const minDate = useMemo(() => localDateValue(today), [today]);
  const currentMinutes = today.getHours() * 60 + today.getMinutes();
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [gender, setGender] = useState("");
  const [goal, setGoal] = useState("");
  const [source, setSource] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState("");
  const hasAvailableSlotsToday = trialTimes.some((item) => item.startMinutes > currentMinutes);
  const chooseDate = (value: string) => { setSubmitted(false); setPreferredDate(value); setPreferredTime(""); setFormError(""); };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(false);
    setFormError("");
    const data = new FormData(event.currentTarget);
    const name = String(data.get("fullName") ?? "").trim();
    const phone = String(data.get("phone") ?? "").replace(/\D/g, "");
    const email = String(data.get("email") ?? "").trim();
    const age = String(data.get("age") ?? "").trim();
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const ageNumber = age ? Number(age) : null;
    if (name.length < 2 || phone.length !== 10 || !emailValid) { setFormError("Please enter a valid name, 10-digit phone number and email address."); return; }
    if (ageNumber !== null && (!Number.isInteger(ageNumber) || ageNumber < 16 || ageNumber > 80)) { setFormError("Please enter an age between 16 and 80, or leave age blank."); return; }
    if (!goal || !preferredDate || !preferredTime) { setFormError("Please choose your fitness goal, preferred trial date and time."); return; }
    if (!termsAccepted) { setFormError("Please accept the Terms & Conditions and Privacy Policy to continue."); return; }
    setSubmitted(true);
  };

  return <>
    <section className="relative min-h-[560px] overflow-hidden border-b border-bazooka-border/70 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=90')] bg-cover bg-[62%_center] sm:bg-center">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20" />
      <div className={`${shell} relative z-10 flex min-h-[560px] items-center py-12 sm:py-14`}>
        <div className="max-w-[650px] min-w-0">
          <p className="text-[8px] font-black uppercase text-bazooka-text-secondary sm:text-[9px]">Home <span className="mx-2 text-bazooka-lime">›</span> Book Free Trial</p>
          <h1 className="font-display mt-6 max-w-full text-[42px] font-black uppercase leading-[.9] min-[380px]:text-[48px] sm:text-[66px]">Experience Bazooka<br /><span className="text-bazooka-lime">Before You Commit.</span></h1>
          <span className="mt-5 block h-0.5 w-10 bg-bazooka-lime" />
          <p className="mt-5 max-w-[530px] text-[11px] leading-6 text-bazooka-text-secondary sm:text-[12px]">Request a free visit, explore the training environment, meet the team and decide whether Bazooka Fitness is the right fit for you.</p>
          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5">{heroFeatures.map(([Icon, a, b]) => <div key={a} className="rounded-[4px] border border-white/10 bg-black/30 p-3 backdrop-blur-[2px] sm:border-0 sm:bg-transparent sm:p-0"><Icon className="size-5 text-bazooka-lime" /><span className="mt-2 block text-[8px] font-black uppercase leading-4 sm:text-[9px]">{a}<br /><span className="font-normal text-bazooka-text-secondary">{b}</span></span></div>)}</div>
        </div>
      </div>
    </section>

    <section className="bg-bazooka-soft-black py-10 sm:py-12">
      <div className={shell}>
        <div className="mx-auto max-w-[720px] text-center"><span className="text-[9px] font-black uppercase text-bazooka-lime">Plan Your Visit</span><h2 className="font-display mt-2 text-[34px] font-black uppercase leading-[.95] sm:text-[42px]">Book Your <span className="text-bazooka-lime">Free Trial</span></h2><p className="mt-3 text-[9px] leading-5 text-bazooka-text-secondary sm:text-[10px]">Choose your preferred visit details. This form currently prepares the request locally; final confirmation is handled by the Bazooka team.</p></div>
        <form noValidate onSubmit={handleSubmit} className="mx-auto mt-7 max-w-[1080px] rounded-[7px] border border-bazooka-border-strong bg-bazooka-surface p-5 sm:p-7">
          <div className="grid gap-8 lg:grid-cols-2">
            <div><h3 className="font-display flex items-center gap-2 text-[19px] font-black uppercase sm:text-[20px]"><UserRound className="size-5 shrink-0 text-bazooka-lime" />Personal <span className="text-bazooka-lime">Information</span></h3><div className="mt-5 space-y-3"><input name="fullName" aria-label="Full name" autoComplete="name" className={fieldClass} placeholder="Full Name *" /><input name="phone" aria-label="Phone number" autoComplete="tel" className={fieldClass} placeholder="Phone Number *" inputMode="tel" maxLength={10} /><input name="email" aria-label="Email address" autoComplete="email" type="email" className={fieldClass} placeholder="Email Address *" /><div className="grid gap-3 sm:grid-cols-2"><input name="age" aria-label="Age" className={fieldClass} placeholder="Age" inputMode="numeric" maxLength={2} /><CustomSelect value={gender} onChange={setGender} options={genderOptions} placeholder="Gender" ariaLabel="Gender" /></div><CustomSelect value={goal} onChange={setGoal} options={goalOptions} placeholder="Fitness Goal *" ariaLabel="Fitness goal" required /><CustomSelect value={source} onChange={setSource} options={sourceOptions} placeholder="How did you hear about us?" ariaLabel="How did you hear about us" /></div></div>
            <div><h3 className="font-display flex items-center gap-2 text-[19px] font-black uppercase sm:text-[20px]"><Target className="size-5 shrink-0 text-bazooka-lime" />Preferred Trial <span className="text-bazooka-lime">Details</span></h3><div className="mt-5 grid gap-3 sm:grid-cols-2"><CustomDatePicker value={preferredDate} onChange={chooseDate} minDate={minDate} /><TimePicker date={preferredDate} value={preferredTime} onChange={(value) => { setSubmitted(false); setPreferredTime(value); }} minDate={minDate} currentMinutes={currentMinutes} /></div><p className="mt-2 text-[8px] leading-4 text-bazooka-muted">Monday–Saturday, 5:30 AM–10:00 PM. Sundays are unavailable. Preferred slots are shown in 30-minute intervals.</p>{preferredDate === minDate && !hasAvailableSlotsToday && <p role="status" className="mt-3 rounded-[4px] border border-bazooka-warning/40 bg-bazooka-warning/5 p-3 text-[9px] text-bazooka-warning">Today’s available visit slots have ended. Please choose a future date.</p>}<textarea name="notes" aria-label="Trial goals or focus areas" className={`${textareaClass} mt-3`} placeholder="Anything you would like the team to know before your visit?" /><div className="mt-4"><CustomCheckbox checked={termsAccepted} onChange={(value) => { setTermsAccepted(value); setSubmitted(false); }} required label={<span>I agree to the <Link href="/terms-and-conditions" className="text-bazooka-lime transition hover:text-bazooka-lime-hover">Terms & Conditions</Link> and <Link href="/privacy-policy" className="text-bazooka-lime transition hover:text-bazooka-lime-hover">Privacy Policy</Link>.</span>} /></div>{formError && <p role="alert" className="mt-4 rounded-[4px] border border-bazooka-error/40 bg-bazooka-error/5 p-3 text-center text-[9px] leading-4 text-bazooka-error">{formError}</p>}<button type="submit" className={`${primaryButton} mt-5 w-full`}>Prepare Trial Request <ArrowRight className="size-4" /><Send className="size-4" /></button>{submitted && <p role="status" aria-live="polite" className="mt-3 rounded-[4px] border border-bazooka-lime/40 bg-bazooka-lime/5 p-3 text-center text-[9px] leading-4 text-bazooka-lime">Your details are valid and the preferred visit is ready to be submitted once online trial requests are connected.</p>}</div>
          </div>
          <div className="mt-7 grid gap-3 border-t border-bazooka-border pt-6 sm:grid-cols-3">{trustItems.map(([Icon, a, b]) => <div key={a} className="flex items-center gap-3 rounded-[4px] border border-bazooka-border/70 bg-bazooka-black/40 p-4 sm:justify-center"><Icon className="size-5 shrink-0 text-bazooka-lime" /><div><strong className="font-display block text-[14px] uppercase">{a}</strong><span className="text-[8px] leading-4 text-bazooka-text-secondary">{b}</span></div></div>)}</div>
        </form>
      </div>
    </section>

    <section className="border-y border-bazooka-border/70 bg-bazooka-black py-10 sm:py-12">
      <div className={`${shell} grid gap-5 lg:grid-cols-2`}>
        <div className="rounded-[6px] border border-bazooka-border-strong bg-bazooka-surface p-5 sm:p-6"><span className="text-[8px] font-black uppercase text-bazooka-lime">Your Visit</span><h2 className="font-display mt-2 text-[28px] font-black uppercase leading-[.95] sm:text-[32px]">What To Expect At <span className="text-bazooka-lime">Bazooka</span></h2><div className="mt-6 space-y-5">{expectItems.map(([Icon, a, b]) => <div key={a} className="flex gap-4"><span className="grid size-10 shrink-0 place-items-center rounded-full border border-bazooka-lime text-bazooka-lime"><Icon className="size-5" /></span><div><h3 className="font-display text-[16px] font-black uppercase sm:text-[17px]">{a}</h3><p className="mt-1 text-[9px] leading-4 text-bazooka-text-secondary">{b}</p></div></div>)}</div></div>
        <div className="rounded-[6px] border border-bazooka-border-strong bg-bazooka-surface p-5 sm:p-6"><span className="text-[8px] font-black uppercase text-bazooka-lime">Simple Process</span><h2 className="font-display mt-2 text-[28px] font-black uppercase leading-[.95] sm:text-[32px]">Four Steps To <span className="text-bazooka-lime">Visit</span></h2><div className="mt-7 grid gap-4 sm:grid-cols-2">{steps.map(([n, a, b]) => <div key={n} className="relative rounded-[5px] border border-bazooka-border bg-bazooka-black p-5 pt-7"><span className="absolute -top-3 left-4 grid size-7 place-items-center rounded-full bg-bazooka-lime text-[10px] font-black text-black">{n}</span><h3 className="font-display text-[16px] font-black uppercase">{a}</h3><p className="mt-2 text-[9px] leading-4 text-bazooka-text-secondary">{b}</p></div>)}</div></div>
      </div>
    </section>

    <section className="bg-bazooka-soft-black py-8"><div className={shell}><div className="grid gap-4 rounded-[6px] border border-bazooka-border-strong bg-bazooka-surface p-5 sm:p-6 md:grid-cols-[1fr_auto] md:items-center"><div><span className="text-[8px] font-black uppercase text-bazooka-lime">Prefer To Talk First?</span><h2 className="font-display mt-2 text-[24px] font-black uppercase sm:text-[28px]">Speak With The Bazooka Team.</h2><p className="mt-2 max-w-[620px] text-[9px] leading-5 text-bazooka-text-secondary">If you want to ask about memberships, programs or your visit before choosing a slot, contact the team directly.</p></div><Link href="/contact" className="inline-flex h-11 w-full items-center justify-center gap-3 rounded-[4px] border border-bazooka-lime px-6 text-[9px] font-black uppercase text-white transition hover:bg-bazooka-lime hover:text-black sm:w-auto">Contact Bazooka <ArrowRight className="size-4" /></Link></div></div></section>
  </>;
}
