"use client";

import { useState } from "react";
import type { FaqTopic } from "./faq-data";
import FaqHeroSection from "./hero-section";
import FaqContentSection from "./faq-content-section";
import FaqCtaSection from "./faq-cta-section";

export default function FaqPageClient(){
  const [search,setSearch]=useState("");
  const [topic,setTopic]=useState<FaqTopic|"All">("All");

  const handleSearch=(value:string)=>{
    setSearch(value);
    if(value.trim()) setTopic("All");
  };

  return <>
    <FaqHeroSection search={search} onSearch={handleSearch}/>
    <FaqContentSection search={search} topic={topic} onTopic={setTopic}/>
    <FaqCtaSection/>
  </>;
}
