"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { ArrowRight, Clock3, Coffee, Mail, MapPin, Phone, Send } from "lucide-react";
import CustomCheckbox from "@/components/ui/custom-checkbox";
import CustomSelect from "@/components/ui/custom-select";
import { buttonClass, fieldClass, shell, textareaClass } from "./contact-shared";

const contactInfo = [
  [MapPin, "Visit Our Gym", "Floor 6, Shanti One, Plot No. 39, 11th A Rd, Sardarpura, Jodhpur, Rajasthan 342001"],
  [Phone, "Call Us", "+91 91164 05151"],
  [Mail, "Email Us", "store@bazooka.fit"],
  [Clock3, "Working Hours", "Mon–Sat: 5:30 AM–10 PM · Sunday: Closed"],
] as const;

const contactTimes = [
  { label: "Morning", value: "Morning" },
  { label: "Afternoon", value: "Afternoon" },
  { label: "Evening", value: "Evening" },
] as const;

export default function ContactMainSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState("");
  const [preferredContactTime, setPreferredContactTime] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(false);
    setFormError("");

    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").replace(/\D/g, "");
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (name.length < 2 || phone.length !== 10 || !emailValid || subject.length < 2 || message.length < 10) {
      setFormError("Please enter a valid name, 10-digit phone number, email, subject and message of at least 10 characters.");
      return;
    }
    if (!agreed) {
      setFormError("Please accept the Terms & Conditions and Privacy Policy to continue.");
      return;
    }

    setSubmitted(true);
  };

  return (
    <section className="border-b border-bazooka-border/70 bg-bazooka-soft-black py-10 md:py-12">
      <div className={shell}>
        <div className="grid gap-3 rounded-[6px] border border-bazooka-border-strong bg-bazooka-surface p-5 sm:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map(([Icon, title, text], index) => <div key={title} className={`flex gap-3 px-2 py-2 ${index < contactInfo.length - 1 ? "lg:border-r lg:border-bazooka-border" : ""}`}><Icon className="size-6 shrink-0 text-bazooka-lime" /><div><h2 className="font-display text-[16px] font-black uppercase">{title}</h2><p className="mt-2 text-[9px] leading-4 text-bazooka-text-secondary">{text}</p></div></div>)}
        </div>

        <div className="mt-3 flex flex-col gap-3 rounded-[5px] border border-bazooka-lime/35 bg-bazooka-lime/[0.035] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3"><span className="grid size-9 place-items-center rounded-full border border-bazooka-lime text-bazooka-lime"><Coffee className="size-4" /></span><div><strong className="font-display text-[14px] uppercase">Cafe Bazooka</strong><p className="mt-1 text-[9px] text-bazooka-text-secondary">Our in-house cafe serves healthy meals, protein-focused options and refreshing post-workout fuel.</p></div></div>
          <Link href="/cafe-bazooka" className="inline-flex items-center gap-2 text-[9px] font-black uppercase text-bazooka-lime transition hover:text-bazooka-lime-hover">Explore Cafe Bazooka <ArrowRight className="size-3.5" /></Link>
        </div>

        <div className="mt-5 grid gap-5 rounded-[6px] border border-bazooka-border-strong bg-bazooka-surface p-5 sm:p-7 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-[32px] font-black uppercase">Send Us <span className="text-bazooka-lime">A Message</span></h2>
            <p className="mt-2 text-[9px] text-bazooka-text-secondary">Fill out the form below and our team will get back to you soon.</p>
            <form noValidate onSubmit={handleSubmit} className="mt-5 space-y-3">
              <div className="grid gap-3 sm:grid-cols-2"><input name="name" autoComplete="name" aria-label="Your name" className={fieldClass} placeholder="Your Name *" /><input name="phone" autoComplete="tel" aria-label="Phone number" className={fieldClass} placeholder="Phone Number *" inputMode="tel" maxLength={10} /></div>
              <div className="grid gap-3 sm:grid-cols-2"><input name="email" type="email" autoComplete="email" aria-label="Email address" className={fieldClass} placeholder="Email Address *" /><input name="subject" aria-label="Subject" className={fieldClass} placeholder="Subject *" /></div>
              <textarea name="message" aria-label="Message" className={textareaClass} placeholder="How can we help you? *" />
              <CustomSelect value={preferredContactTime} onChange={setPreferredContactTime} options={contactTimes} placeholder="Preferred Time to Contact" ariaLabel="Preferred time to contact" />
              <CustomCheckbox checked={agreed} onChange={setAgreed} required label={<span>I agree to the <Link href="/terms-and-conditions" className="text-bazooka-lime">Terms & Conditions</Link> and <Link href="/privacy-policy" className="text-bazooka-lime">Privacy Policy</Link>.</span>} />
              <button type="submit" className={`${buttonClass} w-full`}>Send Message <Send className="size-4" /></button>
              {formError && <p role="alert" className="rounded-[4px] border border-bazooka-warning/40 bg-bazooka-warning/5 p-3 text-center text-[9px] leading-4 text-bazooka-warning">{formError}</p>}
              {submitted && <p role="status" className="rounded-[4px] border border-bazooka-lime/40 bg-bazooka-lime/5 p-3 text-center text-[9px] text-bazooka-lime">Thanks — your message has been captured. Our team will get back to you soon.</p>}
            </form>
          </div>

          <div>
            <h2 className="font-display text-[32px] font-black uppercase">Find Us <span className="text-bazooka-lime">Here</span></h2>
            <div className="mt-5 overflow-hidden rounded-[6px] border border-bazooka-border-strong bg-bazooka-black">
              <iframe title="Bazooka Fitness location" src="https://www.google.com/maps?q=Floor%206%2C%20Shanti%20One%2C%20Plot%20No.%2039%2C%2011th%20A%20Rd%2C%20Sardarpura%2C%20Jodhpur%2C%20Rajasthan%20342001&output=embed" className="h-[330px] w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
            <div className="mt-3 flex flex-col gap-4 rounded-[5px] border border-bazooka-border bg-bazooka-black p-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex gap-3"><MapPin className="size-5 shrink-0 text-bazooka-lime" /><div><strong className="font-display text-[15px] uppercase">Bazooka Fitness</strong><p className="mt-1 text-[9px] leading-4 text-bazooka-text-secondary">Floor 6, Shanti One, Plot No. 39, 11th A Rd, Sardarpura, Jodhpur, Rajasthan 342001</p></div></div>
              <a href="https://maps.app.goo.gl/ArEb2YaGdZq5qF8x7" target="_blank" rel="noreferrer" className="inline-flex h-10 shrink-0 items-center justify-center gap-3 rounded-[4px] border border-bazooka-lime px-5 text-[8px] font-black uppercase text-white transition hover:bg-bazooka-lime hover:text-black">Get Directions <ArrowRight className="size-3.5" /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
