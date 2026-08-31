"use client";

import { useMemo, useState } from "react";
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
  const [openIndex, setOpenIndex] = useState(0);
  const filtered = useMemo(() => faqItems.filter((item) => {
    const matchesTopic = topic === "All" || item.topic === topic;
    const term = search.trim().toLowerCase();
    const matchesSearch = !term || item.question.toLowerCase().includes(term) || item.answer.toLowerCase().includes(term);
    return matchesTopic && matchesSearch;
  }), [search, topic]);

  return <section className="border-b border-bazooka-border/70 bg-bazooka-black py-10 md:py-12"><div className={shell}>
    <h2 className="font-display text-[28px] font-black uppercase">Browse By <span className="text-bazooka-lime">Topic</span></h2>
    <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{topics.map(([Icon,name])=>{const active=topic===name;return <button type="button" key={name} onClick={()=>onTopic(active?"All":name)} className={`flex min-h-[100px] items-center gap-4 rounded-[5px] border p-5 text-left transition ${active?"border-bazooka-lime bg-bazooka-lime/5":"border-bazooka-border-strong bg-bazooka-surface hover:border-bazooka-lime"}`}><Icon className="size-8 text-bazooka-lime"/><div><strong className="font-display block text-[16px] uppercase">{name}</strong><span className="mt-1 block text-[8px] text-bazooka-text-secondary">{topicCounts[name]} Questions</span></div></button>})}</div>

    <div className="mt-6 rounded-[6px] border border-bazooka-border-strong bg-bazooka-surface p-5 sm:p-6"><h2 className="font-display text-[30px] font-black uppercase">Frequently Asked <span className="text-bazooka-lime">Questions</span></h2><div className="mt-5 grid gap-3 lg:grid-cols-2">{filtered.map((item,index)=>{const open=openIndex===index;return <article key={item.question} className="self-start overflow-hidden rounded-[4px] border border-bazooka-border-strong bg-bazooka-black"><button type="button" onClick={()=>setOpenIndex(open?-1:index)} className={`flex w-full items-center justify-between gap-4 px-4 py-4 text-left text-[10px] font-bold transition hover:text-bazooka-lime ${open?"text-bazooka-lime":"text-white"}`}><span>{item.question}</span>{open?<Minus className="size-4 shrink-0"/>:<Plus className="size-4 shrink-0 text-bazooka-lime"/>}</button>{open&&<div className="border-t border-bazooka-border px-4 py-4 text-[9px] leading-5 text-bazooka-text-secondary">{item.answer}</div>}</article>})}</div>{filtered.length===0&&<p className="py-10 text-center text-[10px] text-bazooka-text-secondary">No matching questions found. Try another search or topic.</p>}</div>
  </div></section>;
}
