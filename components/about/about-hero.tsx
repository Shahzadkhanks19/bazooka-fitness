"use client";

import Link from "next/link";
import { ArrowRight, Dumbbell, ShieldCheck, Star, Trophy, Users } from "lucide-react";
import { outlineButton, shell } from "./about-shared";

const stats = [[Users,"500+","MEMBERS"],[Dumbbell,"3+","TRAINING ZONES"],[ShieldCheck,"20+","EXPERT TRAINERS"],[Trophy,"100%","COMMITMENT"],[Star,"1","STRONGER JODHPUR"]] as const;

export default function AboutHero() {
  return (
    <section className="group relative overflow-hidden border-b border-bazooka-border/70 bg-bazooka-black">
      <div className="absolute inset-x-0 top-0 h-[320px] bg-[url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=2200&q=92')] bg-cover bg-[68%_center] transition-transform duration-700 group-hover:scale-[1.015] sm:inset-0 sm:h-auto sm:bg-[center_36%]" />
      <div className="absolute inset-x-0 top-0 h-[320px] bg-gradient-to-b from-black/5 via-black/18 to-bazooka-black sm:inset-0 sm:h-auto sm:bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,.97)_27%,rgba(5,5,5,.72)_47%,rgba(5,5,5,.15)_73%,rgba(5,5,5,.26)_100%),linear-gradient(0deg,#050505_0%,transparent_22%)]" />
      <div className={`${shell} relative flex min-h-[650px] flex-col pb-6 pt-[225px] sm:min-h-[610px] sm:pb-8 sm:pt-14`}>
        <div className="max-w-[540px] rounded-md border border-white/5 bg-black/72 p-4 backdrop-blur-[2px] sm:border-0 sm:bg-transparent sm:p-0 sm:backdrop-blur-none">
          <span className="text-[9px] font-black uppercase tracking-[.04em] text-bazooka-lime sm:text-[10px]">About Bazooka Fitness</span>
          <h1 className="font-display mt-3 text-[34px] font-black uppercase leading-[.92] tracking-[-.7px] min-[380px]:text-[38px] sm:mt-4 sm:text-[58px] lg:text-[72px]">
            <span className="block">Built On Passion.</span>
            <span className="block text-bazooka-lime">Driven By Purpose.</span>
          </h1>
          <span className="mt-4 block h-[2px] w-9 bg-bazooka-lime" />
          <p className="mt-4 max-w-[455px] text-[10px] leading-[1.75] text-bazooka-text-secondary sm:mt-6 sm:text-[12px]">Bazooka Fitness is more than a gym. It&apos;s a high-energy community built for real people with real goals. We combine world-class training, science-backed methods and a culture that pushes you to become your strongest self.</p>
          <Link href="#our-story" className={`${outlineButton} mt-5 w-full sm:mt-7 sm:w-fit`}>Discover Our Story <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></Link>
        </div>
        <div className="mt-5 grid grid-cols-2 overflow-hidden rounded-[5px] border border-bazooka-border-strong bg-black/88 backdrop-blur-sm sm:mt-auto md:grid-cols-5">
          {stats.map(([Icon,value,label],i)=><div key={label} className={`group/stat grid min-h-[76px] grid-cols-[28px_1fr] items-center gap-2 border-b border-r border-bazooka-border/50 px-3 transition-colors duration-300 hover:bg-white/[.035] sm:min-h-[90px] sm:grid-cols-[42px_1fr] sm:px-5 md:border-b-0 ${i===4?"col-span-2 border-b-0 md:col-span-1":""}`}><Icon className="size-4 text-bazooka-lime transition-transform duration-300 group-hover/stat:scale-110 sm:size-6"/><div className="min-w-0"><strong className="font-display block text-[18px] leading-none text-white sm:text-[24px]">{value}</strong><small className="mt-1 block text-[6px] leading-3 text-bazooka-text-secondary sm:text-[8px]">{label}</small></div></div>)}
        </div>
      </div>
    </section>
  );
}
