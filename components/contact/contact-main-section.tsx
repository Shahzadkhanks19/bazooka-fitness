"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { ArrowRight, Clock3, Coffee, Mail, MapPin, Phone, Send } from "lucide-react";
import CustomCheckbox from "@/components/ui/custom-checkbox";
import CustomSelect from "@/components/ui/custom-select";
import { buttonClass, fieldClass, reveal, shell, textareaClass } from "./contact-shared";

const contactInfo = [
  [MapPin, "Visit The Club", "Floor 6, Shanti One, Plot No. 39, 11th A Rd, Sardarpura, Jodhpur, Rajasthan 342001"],
  [Phone, "Call Us", "+91 91164 05151"],
  [Mail, "Email Us", "store@bazooka.fit"],
  [Clock3, "Club Hours", "Mon–Sat: 5:30 AM–10 PM · Sunday: Closed"],
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
    <section className="border-b border-bazooka-border/70 bg-bazooka-soft-black py-10 sm:py-12 md:py-14">
      <div className={shell}>
        <motion.div {...reveal} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map(([Icon, title, text]) => (
            <article key={title} className="min-w-0 rounded-[6px] border border-bazooka-border-strong bg-bazooka-surface p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-bazooka-lime/70">
              <div className="grid size-10 place-items-center rounded-full bg-bazooka-lime/10 text-bazooka-lime"><Icon className="size-5" /></div>
              <h2 className="font-display mt-4 text-[17px] font-black uppercase">{title}</h2>
              <p className="mt-2 break-words text-[9px] leading-4 text-bazooka-text-secondary">{text}</p>
            </article>
          ))}
        </motion.div>

        <motion.div {...reveal} className="mt-4 flex flex-col gap-4 rounded-[6px] border border-bazooka-lime/30 bg-bazooka-lime/[0.035] px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="flex min-w-0 items-start gap-3"><span className="grid size-10 shrink-0 place-items-center rounded-full border border-bazooka-lime text-bazooka-lime"><Coffee className="size-4" /></span><div className="min-w-0"><strong className="font-display text-[15px] uppercase">Cafe Bazooka</strong><p className="mt-1 max-w-[650px] text-[9px] leading-4 text-bazooka-text-secondary">Explore food, shakes, lighter options, coffee and refreshments available as part of the Bazooka Fitness experience.</p></div></div>
          <Link href="/cafe-bazooka" className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-[4px] border border-bazooka-lime px-4 text-[8px] font-black uppercase text-bazooka-lime transition hover:bg-bazooka-lime hover:text-black">Explore Cafe <ArrowRight className="size-3.5" /></Link>
        </motion.div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_1fr]">
          <motion.div {...reveal} className="rounded-[7px] border border-bazooka-border-strong bg-bazooka-surface p-5 sm:p-7">
            <span className="text-[9px] font-black uppercase text-bazooka-lime">Get In Touch</span>
            <h2 className="font-display mt-2 text-[30px] font-black uppercase leading-[.95] min-[380px]:text-[34px] sm:text-[40px]">Send Us <span className="text-bazooka-lime">A Message</span></h2>
            <p className="mt-3 max-w-[520px] text-[9px] leading-5 text-bazooka-text-secondary sm:text-[10px]">Share your membership, training or visit enquiry below. You can also call or email the club directly using the contact details above.</p>
            <form noValidate onSubmit={handleSubmit} className="mt-6 space-y-3">
              <div className="grid gap-3 sm:grid-cols-2"><input name="name" autoComplete="name" aria-label="Your name" className={fieldClass} placeholder="Your Name *" /><input name="phone" autoComplete="tel" aria-label="Phone number" className={fieldClass} placeholder="Phone Number *" inputMode="numeric" maxLength={10} /></div>
              <div className="grid gap-3 sm:grid-cols-2"><input name="email" type="email" autoComplete="email" aria-label="Email address" className={fieldClass} placeholder="Email Address *" /><input name="subject" aria-label="Subject" className={fieldClass} placeholder="Subject *" /></div>
              <textarea name="message" aria-label="Message" className={textareaClass} placeholder="How can we help you? *" />
              <CustomSelect value={preferredContactTime} onChange={setPreferredContactTime} options={contactTimes} placeholder="Preferred Time to Contact" ariaLabel="Preferred time to contact" />
              <CustomCheckbox checked={agreed} onChange={setAgreed} required label={<span>I agree to the <Link href="/terms-and-conditions" className="text-bazooka-lime transition hover:text-bazooka-lime-hover">Terms & Conditions</Link> and <Link href="/privacy-policy" className="text-bazooka-lime transition hover:text-bazooka-lime-hover">Privacy Policy</Link>.</span>} />
              <button type="submit" className={`${buttonClass} w-full`}>Review Message <Send className="size-4" /></button>
              {formError && <p role="alert" className="rounded-[4px] border border-bazooka-warning/40 bg-bazooka-warning/5 p-3 text-center text-[9px] leading-4 text-bazooka-warning">{formError}</p>}
              {submitted && <div role="status" className="rounded-[5px] border border-bazooka-lime/40 bg-bazooka-lime/5 p-4 text-center"><p className="text-[9px] leading-4 text-bazooka-lime">Your details look valid. Online form delivery is not connected yet, so please use the direct email or phone contact above to send the enquiry.</p></div>}
            </form>
          </motion.div>

          <motion.div {...reveal} className="rounded-[7px] border border-bazooka-border-strong bg-bazooka-surface p-5 sm:p-7">
            <span className="text-[9px] font-black uppercase text-bazooka-lime">Sardarpura, Jodhpur</span>
            <h2 className="font-display mt-2 text-[30px] font-black uppercase leading-[.95] min-[380px]:text-[34px] sm:text-[40px]">Find Us <span className="text-bazooka-lime">Here</span></h2>
            <div className="mt-6 overflow-hidden rounded-[6px] border border-bazooka-border-strong bg-bazooka-black"><iframe title="Bazooka Fitness location" src="https://www.google.com/maps?q=Floor%206%2C%20Shanti%20One%2C%20Plot%20No.%2039%2C%2011th%20A%20Rd%2C%20Sardarpura%2C%20Jodhpur%2C%20Rajasthan%20342001&output=embed" className="h-[320px] w-full sm:h-[390px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
            <div className="mt-3 rounded-[5px] border border-bazooka-border bg-bazooka-black p-4 sm:p-5"><div className="flex gap-3"><MapPin className="mt-0.5 size-5 shrink-0 text-bazooka-lime" /><div className="min-w-0"><strong className="font-display text-[15px] uppercase">Bazooka Fitness</strong><p className="mt-1 text-[9px] leading-4 text-bazooka-text-secondary">Floor 6, Shanti One, Plot No. 39, 11th A Rd, Sardarpura, Jodhpur, Rajasthan 342001</p></div></div><a href="https://maps.app.goo.gl/ArEb2YaGdZq5qF8x7" target="_blank" rel="noreferrer" className="mt-4 inline-flex h-10 w-full items-center justify-center gap-3 rounded-[4px] border border-bazooka-lime px-5 text-[8px] font-black uppercase text-white transition hover:bg-bazooka-lime hover:text-black sm:w-auto">Get Directions <ArrowRight className="size-3.5" /></a></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
