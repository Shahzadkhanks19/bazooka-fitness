"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { CalendarDays, Dumbbell, Grid2X2, UsersRound } from "lucide-react";
import { reveal, shell } from "./gallery-shared";

const categories = ["All", "Gym Interior", "Workouts", "Group Training", "Events", "Members", "Equipment"] as const;
type GalleryCategory = (typeof categories)[number];

type GalleryItem = {
  title: string;
  category: Exclude<GalleryCategory, "All">;
  image: string;
  className: string;
};

const items: readonly GalleryItem[] = [
  { title: "Our Premium Training Floor", category: "Gym Interior", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=90", className: "lg:col-span-4 lg:row-span-2" },
  { title: "Strength Is Built Here", category: "Workouts", image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=90", className: "lg:col-span-4 lg:row-span-2" },
  { title: "High Energy Group Training", category: "Group Training", image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=90", className: "lg:col-span-4 lg:row-span-2" },
  { title: "Power In Motion", category: "Workouts", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=90", className: "lg:col-span-3" },
  { title: "Built For Strength", category: "Equipment", image: "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?auto=format&fit=crop&w=900&q=90", className: "lg:col-span-2" },
  { title: "Train With Purpose", category: "Members", image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1100&q=90", className: "lg:col-span-4" },
  { title: "Cardio Zone", category: "Gym Interior", image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=90", className: "lg:col-span-3" },
  { title: "Stronger Together", category: "Members", image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=1100&q=90", className: "lg:col-span-4" },
  { title: "Performance Training", category: "Gym Interior", image: "https://images.unsplash.com/photo-1534368420009-621bfab424a8?auto=format&fit=crop&w=1200&q=90", className: "lg:col-span-5" },
  { title: "Premium Equipment", category: "Equipment", image: "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?auto=format&fit=crop&w=900&q=90", className: "lg:col-span-3" },
  { title: "Community Training Day", category: "Events", image: "https://images.unsplash.com/photo-1517964603305-11c0f6f66012?auto=format&fit=crop&w=900&q=90", className: "lg:col-span-3" },
] as const;

const categoryIcon = {
  All: Grid2X2,
  "Gym Interior": Grid2X2,
  Workouts: Dumbbell,
  "Group Training": UsersRound,
  Events: CalendarDays,
  Members: UsersRound,
  Equipment: Dumbbell,
} as const;

export default function GalleryGridSection() {
  const [active, setActive] = useState<GalleryCategory>("All");
  const [expanded, setExpanded] = useState(false);
  const filtered = useMemo(() => active === "All" ? items : items.filter((item) => item.category === active), [active]);
  const visibleItems = expanded || active !== "All" ? filtered : filtered.slice(0, 9);

  return (
    <section className="border-b border-bazooka-border/70 bg-bazooka-black py-10 sm:py-12">
      <div className={shell}>
        <motion.div {...reveal} className="mb-6 max-w-[620px]">
          <span className="text-[10px] font-black uppercase text-bazooka-lime">Inside Bazooka</span>
          <h2 className="font-display mt-2 text-[32px] font-black uppercase leading-[.94] min-[380px]:text-[36px] sm:text-[44px]">Explore The <span className="text-bazooka-lime">Experience.</span></h2>
          <p className="mt-3 text-[10px] leading-5 text-bazooka-text-secondary sm:text-[11px]">Browse training spaces, workouts, members and community moments across Bazooka Fitness.</p>
        </motion.div>

        <div className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:flex-wrap sm:overflow-visible sm:pb-0">
          {categories.map((category) => {
            const Icon = categoryIcon[category];
            return (
              <button key={category} type="button" aria-pressed={active === category} onClick={() => { setActive(category); setExpanded(false); }} className={`flex h-10 shrink-0 items-center justify-center gap-2 rounded-[4px] border px-4 text-[8px] font-black uppercase transition-all duration-200 active:scale-[.97] ${active === category ? "border-bazooka-lime bg-bazooka-lime text-black" : "border-bazooka-border-strong bg-bazooka-surface text-white hover:border-bazooka-lime hover:text-bazooka-lime"}`}>
                <Icon className="size-3.5" /> {category}
              </button>
            );
          })}
        </div>

        <motion.div layout className="mt-5 grid auto-rows-[175px] gap-3 sm:grid-cols-2 lg:grid-cols-12">
          {visibleItems.map((item, index) => (
            <motion.article layout key={`${item.category}-${item.title}`} {...reveal} transition={{ duration: .42, delay: index * .025 }} className={`group relative min-h-[175px] overflow-hidden rounded-[6px] border border-bazooka-border-strong bg-cover bg-center transition-all duration-300 hover:-translate-y-1 hover:border-bazooka-lime ${item.className}`} style={{ backgroundImage: `url(${item.image})` }}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/10 to-transparent" />
              <span className="absolute left-4 top-4 rounded-[3px] border border-white/15 bg-black/45 px-2.5 py-1.5 text-[7px] font-black uppercase text-white backdrop-blur-sm">{item.category}</span>
              <h3 className="font-display absolute bottom-4 left-4 max-w-[230px] text-[16px] font-black uppercase leading-[1.05] text-white sm:text-[17px]">{item.title}</h3>
            </motion.article>
          ))}
        </motion.div>

        {active === "All" && filtered.length > 9 && (
          <div className="mt-5 flex justify-center">
            <button type="button" onClick={() => setExpanded((value) => !value)} className="inline-flex min-h-10 w-full items-center justify-center rounded-[4px] border border-bazooka-lime px-6 text-[8px] font-black uppercase text-bazooka-lime transition-all duration-200 hover:bg-bazooka-lime hover:text-black active:scale-[.98] sm:w-auto">
              {expanded ? "Show Less" : "Load More Photos"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
