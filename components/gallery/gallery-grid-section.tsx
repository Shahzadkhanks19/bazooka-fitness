"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { CalendarDays, Dumbbell, Grid2X2, Play, UsersRound } from "lucide-react";
import { reveal, shell } from "./gallery-shared";

const categories = ["All", "Gym Interior", "Workouts", "Group Training", "Events", "Members", "Equipment"] as const;
type GalleryCategory = (typeof categories)[number];

type GalleryItem = {
  title: string;
  category: Exclude<GalleryCategory, "All">;
  image: string;
  video?: boolean;
  className: string;
};

const items: readonly GalleryItem[] = [
  { title: "Our Premium Training Floor", category: "Gym Interior", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=90", className: "lg:col-span-4 lg:row-span-2" },
  { title: "Strength Is Built Here", category: "Workouts", image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=90", video: true, className: "lg:col-span-4 lg:row-span-2" },
  { title: "High Energy Group Classes", category: "Group Training", image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=90", video: true, className: "lg:col-span-4 lg:row-span-2" },
  { title: "Power In Motion", category: "Workouts", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=90", video: true, className: "lg:col-span-3" },
  { title: "Discipline Builds Success", category: "Equipment", image: "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?auto=format&fit=crop&w=900&q=90", className: "lg:col-span-2" },
  { title: "Train With Purpose", category: "Members", image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1100&q=90", video: true, className: "lg:col-span-4" },
  { title: "Cardio Zone — Stay Active", category: "Gym Interior", image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=90", className: "lg:col-span-3" },
  { title: "Stronger Together — The Bazooka Community", category: "Members", image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=1100&q=90", video: true, className: "lg:col-span-4" },
  { title: "Performance Zone — Train. Perform. Repeat.", category: "Gym Interior", image: "https://images.unsplash.com/photo-1534368420009-621bfab424a8?auto=format&fit=crop&w=1200&q=90", video: true, className: "lg:col-span-5" },
  { title: "Premium Equipment", category: "Equipment", image: "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?auto=format&fit=crop&w=900&q=90", className: "lg:col-span-3" },
  { title: "Member Challenge Day", category: "Events", image: "https://images.unsplash.com/photo-1517964603305-11c0f6f66012?auto=format&fit=crop&w=900&q=90", className: "lg:col-span-3" },
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
    <section className="border-b border-bazooka-border/70 bg-bazooka-black py-7 md:py-8">
      <div className={shell}>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-7">
          {categories.map((category) => {
            const Icon = categoryIcon[category];
            return (
              <button key={category} type="button" onClick={() => { setActive(category); setExpanded(false); }} className={`flex h-12 items-center justify-center gap-2 rounded-[4px] border px-3 text-[8px] font-black uppercase transition ${active === category ? "border-bazooka-lime bg-bazooka-lime/[0.06] text-bazooka-lime" : "border-bazooka-border-strong bg-bazooka-surface text-white hover:border-bazooka-lime hover:text-bazooka-lime"}`}>
                <Icon className="size-4" /> {category}
              </button>
            );
          })}
        </div>

        <motion.div layout className="mt-4 grid auto-rows-[165px] gap-3 sm:grid-cols-2 lg:grid-cols-12">
          {visibleItems.map((item, index) => (
            <motion.article layout key={`${item.category}-${item.title}`} {...reveal} transition={{ duration: .42, delay: index * .025 }} className={`group relative min-h-[165px] overflow-hidden rounded-[5px] border border-bazooka-border-strong bg-cover bg-center ${item.className}`} style={{ backgroundImage: `url(${item.image})` }}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-transparent" />
              {item.video && <span className="absolute bottom-4 right-4 grid size-8 place-items-center rounded-full border border-bazooka-lime bg-black/65 text-bazooka-lime"><Play className="size-3.5 fill-current" /></span>}
              <h3 className="font-display absolute bottom-4 left-4 max-w-[210px] text-[16px] font-black uppercase leading-[1.05] text-white">{item.title}</h3>
            </motion.article>
          ))}
        </motion.div>

        {active === "All" && filtered.length > 9 && (
          <div className="mt-4 flex justify-center">
            <button type="button" onClick={() => setExpanded((value) => !value)} className="inline-flex h-9 items-center justify-center rounded-[4px] border border-bazooka-lime px-6 text-[8px] font-black uppercase text-bazooka-lime transition hover:bg-bazooka-lime hover:text-black">
              {expanded ? "Show Less" : "Load More Photos"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
