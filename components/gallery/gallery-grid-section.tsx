"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Play } from "lucide-react";
import { reveal, shell } from "./gallery-shared";

const categories = ["All", "Workouts", "Members", "Events", "Transformations", "Facilities", "Community"] as const;

type GalleryCategory = (typeof categories)[number];

type GalleryItem = {
  title: string;
  category: Exclude<GalleryCategory, "All">;
  image: string;
  video?: boolean;
  size: string;
};

const items: readonly GalleryItem[] = [
  { title: "Strength Is Built Here", category: "Workouts", image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=90", video: true, size: "lg:col-span-4 lg:row-span-2" },
  { title: "The Bazooka Floor", category: "Facilities", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=90", size: "lg:col-span-5 lg:row-span-2" },
  { title: "Power In Motion", category: "Workouts", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=90", video: true, size: "lg:col-span-3 lg:row-span-2" },
  { title: "Bazooka Community", category: "Community", image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=90", size: "lg:col-span-4" },
  { title: "Cardio Zone", category: "Facilities", image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=90", size: "lg:col-span-4" },
  { title: "Premium Equipment", category: "Facilities", image: "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?auto=format&fit=crop&w=1200&q=90", size: "lg:col-span-4" },
  { title: "Group Energy", category: "Events", image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=1200&q=90", video: true, size: "lg:col-span-4" },
  { title: "Locker & Changing", category: "Facilities", image: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=1200&q=90", size: "lg:col-span-4" },
  { title: "Train Together", category: "Members", image: "https://images.unsplash.com/photo-1517964603305-11c0f6f66012?auto=format&fit=crop&w=1200&q=90", size: "lg:col-span-4" },
  { title: "Transformation Mindset", category: "Transformations", image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=90", size: "lg:col-span-6" },
  { title: "Inside Bazooka", category: "Community", image: "https://images.unsplash.com/photo-1534368420009-621bfab424a8?auto=format&fit=crop&w=1200&q=90", size: "lg:col-span-6" },
] as const;

export default function GalleryGridSection() {
  const [active, setActive] = useState<GalleryCategory>("All");

  const visibleItems = useMemo(() => active === "All" ? items : items.filter((item) => item.category === active), [active]);

  return (
    <section className="border-b border-bazooka-border/70 bg-bazooka-black py-10 md:py-12">
      <div className={shell}>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              className={`h-10 rounded-[4px] border px-5 text-[9px] font-black uppercase transition-all duration-300 ${active === category ? "border-bazooka-lime bg-bazooka-lime text-black" : "border-bazooka-border-strong bg-bazooka-surface text-white hover:border-bazooka-lime hover:text-bazooka-lime"}`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-6 grid auto-rows-[185px] gap-3 sm:grid-cols-2 lg:grid-cols-12">
          {visibleItems.map((item, index) => (
            <motion.article
              layout
              key={`${item.category}-${item.title}`}
              {...reveal}
              transition={{ duration: .45, delay: index * .03 }}
              className={`group relative min-h-[185px] overflow-hidden rounded-[5px] border border-bazooka-border-strong bg-cover bg-center ${item.size}`}
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent transition group-hover:bg-black/20" />
              {item.video && (
                <span className="absolute right-4 top-4 grid size-9 place-items-center rounded-full border border-bazooka-lime bg-black/60 text-bazooka-lime">
                  <Play className="size-4 fill-current" />
                </span>
              )}
              <div className="absolute inset-x-0 bottom-0 p-4">
                <span className="text-[8px] font-black uppercase text-bazooka-lime">{item.category}</span>
                <h3 className="font-display mt-1 text-[18px] font-black uppercase leading-none text-white">{item.title}</h3>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
