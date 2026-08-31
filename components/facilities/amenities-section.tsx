"use client";

import { motion } from "framer-motion";
import { AirVent, BriefcaseMedical, Coffee, Droplets, ParkingCircle, ShowerHead, Sparkles, ThermometerSun, Waves, Wifi } from "lucide-react";
import { reveal, shell } from "./facilities-shared";

const amenities = [
  [Waves, "Steam Room"],
  [ShowerHead, "Showers"],
  [Sparkles, "Towels"],
  [Droplets, "Water Station"],
  [ParkingCircle, "Parking Space"],
  [Wifi, "Wi-Fi Access"],
  [AirVent, "Air Conditioned"],
  [ThermometerSun, "Clean & Hygienic"],
  [BriefcaseMedical, "First Aid"],
  [Coffee, "Cafe Bazooka"],
] as const;

export default function AmenitiesSection() {
  return (
    <section className="border-b border-bazooka-border/70 bg-bazooka-soft-black py-14">
      <div className={shell}>
        <motion.div {...reveal} className="grid gap-5 lg:grid-cols-[360px_1fr] lg:items-end">
          <div>
            <span className="text-[10px] font-black uppercase text-bazooka-lime">Premium Amenities</span>
            <h2 className="font-display mt-2 text-[38px] font-black uppercase leading-[.94] sm:text-[46px]">More Than <br /><span className="text-bazooka-lime">Just Equipment.</span></h2>
          </div>
          <p className="max-w-[470px] text-[11px] leading-5 text-bazooka-text-secondary lg:justify-self-end">We’ve thought of every detail so you can focus on what matters — your progress, recovery and better everyday nutrition.</p>
        </motion.div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-10">
          {amenities.map(([Icon, label], index) => (
            <motion.div key={label} {...reveal} transition={{ duration: .45, delay: index * .035 }} className="group flex min-h-[102px] flex-col items-center justify-center rounded-[5px] border border-bazooka-border-strong bg-bazooka-surface px-3 py-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-bazooka-lime">
              <Icon className="size-6 text-bazooka-lime transition-transform duration-300 group-hover:scale-110" />
              <span className="font-display mt-3 text-[9px] font-black uppercase leading-3.5 text-white">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
