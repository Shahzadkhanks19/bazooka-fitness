"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Building2, CreditCard, Dumbbell, HelpCircle, IdCard, Minus, Plus } from "lucide-react";
import { faqItems, topicCounts, type FaqTopic } from "./faq-data";
import { shell } from "./faq-shared";

const topics = [
  [IdCard, "Membership"],
  [Dumbbell, "Training"],
  [Building2, "Facilities"],
  [CreditCard, "Payments"],
  [HelpCircle, "General"],
] as const;

export default function FaqContentSection({ search, topic, onTopic }: { search: string; topic: FaqTopic | "All"; onTopic: (topic: FaqTopic | "All") => void }) {
  const [openQuestion, setOpenQuestion] = useState<string>(faqItems[0].question);
  const filtered = useMemo(() => faqItems.filter((item) => {
    const matchesTopic = topic === "All" || item.topic === topic;
    const term = search.trim().toLowerCase();
    const matchesSearch = !term || item.question.toLowerCase().includes(term) || item.answer.toLowerCase().includes(term);
    return matchesTopic && matchesSearch;
  }), [search, topic]);
  const leftColumn = filtered.filter((_, index) => index % 2 === 0);
  const rightColumn = filtered.filter((_, index) => index % 2 === 1);

  const renderFaq = (item: (typeof faqItems)[number]) => {
    const open = openQuestion === item.question;
    return <article key={item.question} className={`overflow-hidden rounded-[5px] border bg-bazooka-black transition-all duration-300 ${open ? "border-bazooka-lime/70 shadow-[0_0_24px_rgba(255,181,46,.08)]" : "border-bazooka-border-strong hover:border-bazooka-lime/50"}`}>
      <button type="button" aria-expanded={open} onClick={()=>setOpenQuestion(open?"":item.question)} className={`flex min-h-[58px] w-full items-center justify-between gap-4 px-4 py-4 text-left text-[10px] font-bold transition-all duration-200 active:scale-[.99] ${open?"text-bazooka-lime":"text-white hover:text-bazooka-lime"}`}><span>{item.question}</span><span className={`grid size-8 shrink-0 place-items-center rounded-full border transition-all ${open ? "border-bazooka-lime bg-bazooka-lime text-black" : "border-bazooka-border-strong text-bazooka-lime"}`}>{open?<Minus className="size-4"/>:<Plus className="size-4"/>}</span></button>
      <AnimatePresence initial={false}>{open&&<motion.div initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}} transition={{duration:.24,ease:"easeOut"}}><div className="border-t border-bazooka-border px-4 py-4 text-[9px] leading-5 text-bazooka-text-secondary">{item.answer}</div></motion.div>}</AnimatePresence>
    </article>;
  };

  return <section className="border-b border-bazooka-border/70 bg-bazooka-black py-10 md:py-12"><div className={shell}>
    <h2 className="font-display text-[28px] font-black uppercase">Browse By <span className="text-bazooka-lime">Topic</span></h2>
    <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{topics.map(([Icon,name])=>{const active=topic===name;return <button type="button" key={name} onClick={()=>onTopic(active?"All":name)} className={`group flex min-h-[100px] items-center gap-4 rounded-[5px] border p-5 text-left transition-all duration-300 hover:-translate-y-0.5 active:scale-[.98] ${active?"border-bazooka-lime bg-bazooka-lime/8 shadow-[0_0_22px_rgba(255,181,46,.08)]":"border-bazooka-border-strong bg-bazooka-surface hover:border-bazooka-lime/70 hover:bg-bazooka-card"}`}><span className={`grid size-11 shrink-0 place-items-center rounded-full border transition-all ${active ? "border-bazooka-lime bg-bazooka-lime text-black" : "border-bazooka-lime/30 bg-bazooka-lime/5 text-bazooka-lime group-hover:border-bazooka-lime/70"}`}><Icon className="size-5"/></span><div><strong className="font-display block text-[16px] uppercase">{name}</strong><span className="mt-1 block text-[8px] text-bazooka-text-secondary">{topicCounts[name]} Questions</span></div></button>})}</div>

    <div className="mt-6 rounded-[6px] border border-bazooka-border-strong bg-bazooka-surface p-5 sm:p-6"><h2 className="font-display text-[30px] font-black uppercase">Frequently Asked <span className="text-bazooka-lime">Questions</span></h2>{filtered.length>0?<div className="mt-5 grid items-start gap-3 lg:grid-cols-2"><div className="space-y-3">{leftColumn.map(renderFaq)}</div><div className="space-y-3">{rightColumn.map(renderFaq)}</div></div>:<p className="py-10 text-center text-[10px] text-bazooka-text-secondary">No matching questions found. Try another search or topic.</p>}</div>
  </div></section>;
}
