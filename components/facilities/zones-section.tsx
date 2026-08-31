"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Apple, Dumbbell, HeartPulse, LockKeyhole, PersonStanding, Shield, UsersRound, Waves } from "lucide-react";
import { outlineButton, reveal, shell } from "./facilities-shared";

const zones = [
  { title: "Strength Zone", text: "Premium strength equipment for building raw power and muscle.", icon: Dumbbell, image: "bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=90')]" },
  { title: "Functional Zone", text: "Improve mobility, agility and overall performance with functional training.", icon: PersonStanding, image: "bg-[url('https://images.unsplash.com/photo-1534368420009-621bfab424a8?auto=format&fit=crop&w=1000&q=90')]" },
  { title: "Cardio Zone", text: "Boost endurance, burn calories and level up your stamina.", icon: HeartPulse, image: "bg-[url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1000&q=90')]" },
  { title: "Recovery Zone", text: "Relax, recover and come back stronger every day.", icon: Waves, image: "bg-[url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=90')]" },
  { title: "Group Class Studio", text: "High-energy group classes that keep you motivated.", icon: UsersRound, image: "bg-[url('https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=90')]" },
  { title: "Boxing Zone", text: "Unleash your power, speed and confidence.", icon: Shield, image: "bg-[url('https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=1000&q=90')]" },
  { title: "Locker & Changing", text: "Spacious, secure and comfortable lockers with modern amenities.", icon: LockKeyhole, image: "bg-[url('https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=1000&q=90')]" },
  { title: "Nutrition Bar", text: "Fuel your body with healthy drinks and protein snacks.", icon: Apple, image: "bg-[url('https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=1000&q=90')]" },
] as const;

export default function FacilityZonesSection() {
  return (
    <section id="facility-zones" className="border-b border-bazooka-border/70 bg-bazooka-black py-14 md:py-16">
      <div className={shell}>
        <motion.div {...reveal} className="grid gap-5 lg:grid-cols-[370px_1fr_auto] lg:items-end">
          <div>
            <span className="text-[10px] font-black uppercase text-bazooka-lime">Our Facilities</span>
            <h2 className="font-display mt-2 text-[38px] font-black uppercase leading-[.94] sm:text-[46px]">Every Zone, <span className="text-bazooka-lime">Every Goal.</span></h2>
          </div>
          <p className="max-w-[410px] text-[11px] leading-5 text-bazooka-text-secondary lg:justify-self-end">From strength to recovery, every zone is crafted to give you the best training experience.</p>
          <Link href="#facility-zones" className={`${outlineButton} h-10`}>Virtual Tour <ArrowRight className="size-4" /></Link>
        </motion.div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {zones.map((zone, index) => {
            const Icon = zone.icon;
            return (
              <motion.article key={zone.title} {...reveal} transition={{ duration: .5, delay: index * .04 }} className={`group relative min-h-[285px] overflow-hidden rounded-[5px] border border-bazooka-border-strong bg-cover bg-center ${zone.image} transition-all duration-500 hover:-translate-y-1 hover:border-bazooka-lime`}>
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/95" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="grid size-11 place-items-center rounded-full border border-bazooka-lime bg-black/45 text-bazooka-lime transition group-hover:bg-bazooka-lime group-hover:text-black"><Icon className="size-5" /></span>
                  <h3 className="font-display mt-4 text-[19px] font-black uppercase leading-none text-white">{zone.title}</h3>
                  <p className="mt-2 max-w-[250px] text-[9px] leading-4 text-bazooka-text-secondary">{zone.text}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-[9px] font-black uppercase text-bazooka-lime">View Zone <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" /></span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
