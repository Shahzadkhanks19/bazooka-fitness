"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Coffee, Dumbbell, HeartPulse, LockKeyhole, PersonStanding, Shield, UsersRound, Waves } from "lucide-react";
import { outlineButton, reveal, shell } from "./facilities-shared";

const zones = [
  { slug: "strength-zone", title: "Strength Zone", text: "A dedicated floor for progressive strength work, power and muscle development.", icon: Dumbbell, image: "bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=90')]" },
  { slug: "functional-zone", title: "Functional Zone", text: "Open training space for mobility, agility, conditioning and functional movement.", icon: PersonStanding, image: "bg-[url('https://images.unsplash.com/photo-1534368420009-621bfab424a8?auto=format&fit=crop&w=1000&q=90')]" },
  { slug: "cardio-zone", title: "Cardio Zone", text: "Cardio stations for endurance work, intervals, warm-ups and conditioning.", icon: HeartPulse, image: "bg-[url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1000&q=90')]" },
  { slug: "recovery-zone", title: "Recovery Zone", text: "A calmer space to reset after training with recovery-focused amenities.", icon: Waves, image: "bg-[url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=90')]" },
  { slug: "group-class-studio", title: "Group Class Studio", text: "A high-energy studio for structured coach-led group sessions.", icon: UsersRound, image: "bg-[url('https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=90')]" },
  { slug: "boxing-zone", title: "Boxing Zone", text: "A focused area for boxing conditioning, coordination, speed and power work.", icon: Shield, image: "bg-[url('https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=1000&q=90')]" },
  { slug: "locker-changing", title: "Locker & Changing", text: "Clean, secure changing facilities designed for everyday convenience.", icon: LockKeyhole, image: "bg-[url('https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=1000&q=90')]" },
  { slug: "cafe-bazooka", title: "Cafe Bazooka", text: "In-house meals, protein-focused options and convenient post-workout refuelling.", icon: Coffee, image: "bg-[url('https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=1000&q=90')]", href: "/cafe-bazooka" },
] as const;

export default function FacilityZonesSection() {
  return (
    <section id="facility-zones" className="scroll-mt-24 border-b border-bazooka-border/70 bg-bazooka-black py-14 sm:py-16">
      <div className={shell}>
        <motion.div {...reveal} className="grid gap-5 lg:grid-cols-[390px_1fr_auto] lg:items-end">
          <div className="min-w-0">
            <span className="text-[10px] font-black uppercase text-bazooka-lime">Our Facilities</span>
            <h2 className="font-display mt-2 max-w-full text-[34px] font-black uppercase leading-[.94] min-[380px]:text-[38px] sm:text-[46px]">Every Zone, <span className="text-bazooka-lime">Every Goal.</span></h2>
            <span className="mt-3 block h-[2px] w-8 bg-bazooka-lime" />
          </div>
          <p className="max-w-[450px] text-[10px] leading-5 text-bazooka-text-secondary sm:text-[11px] lg:justify-self-end">Move through dedicated spaces for strength, cardio, functional work, recovery and more — each one built around a different part of your training day.</p>
          <Link href="/book-free-trial" className={`${outlineButton} h-10 w-full sm:w-auto`}>Visit The Gym <ArrowRight className="size-4" /></Link>
        </motion.div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {zones.map((zone, index) => {
            const Icon = zone.icon;
            const href = "href" in zone ? zone.href : `/facilities/${zone.slug}`;
            return (
              <motion.article key={zone.title} {...reveal} transition={{ duration: .5, delay: index * .04 }} className={`group relative min-h-[290px] min-w-0 overflow-hidden rounded-[6px] border border-bazooka-border-strong bg-cover bg-center ${zone.image} transition-all duration-500 hover:-translate-y-1 hover:border-bazooka-lime`}>
                <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/22 to-black/94" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="grid size-11 place-items-center rounded-full border border-bazooka-lime bg-black/45 text-bazooka-lime transition-all duration-300 group-hover:bg-bazooka-lime group-hover:text-black"><Icon className="size-5" /></span>
                  <h3 className="font-display mt-4 text-[19px] font-black uppercase leading-none text-white sm:text-[20px]">{zone.title}</h3>
                  <p className="mt-2 max-w-[260px] text-[9px] leading-4 text-bazooka-text-secondary">{zone.text}</p>
                  <Link href={href} className="mt-4 inline-flex items-center gap-2 text-[9px] font-black uppercase text-bazooka-lime transition hover:text-bazooka-lime-hover">{zone.title === "Cafe Bazooka" ? "Explore Cafe" : "View Zone"} <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" /></Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
