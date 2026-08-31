import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import AllProgramsGrid from "@/components/programs/all-programs-grid";
import { primaryButton, shell } from "@/components/programs/programs-shared";

export const metadata: Metadata = {
  title: "All Programs | Bazooka Fitness",
  description: "Explore every Bazooka Fitness training, transformation, recovery and personal coaching program.",
};

export default function AllProgramsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-bazooka-black text-bazooka-text">
      <section className="border-b border-bazooka-border/70 bg-bazooka-soft-black py-12 md:py-16">
        <div className={shell}>
          <Link href="/programs" className="inline-flex items-center gap-2 text-[9px] font-black uppercase text-bazooka-text-secondary transition hover:text-bazooka-lime"><ArrowLeft className="size-3.5" /> Back to Programs</Link>
          <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_420px] lg:items-end">
            <div>
              <span className="text-[10px] font-black uppercase text-bazooka-lime">All Bazooka Programs</span>
              <h1 className="font-display mt-3 max-w-[760px] text-[50px] font-black uppercase leading-[.9] md:text-[70px]">Choose Your <span className="text-bazooka-lime">Path.</span></h1>
            </div>
            <p className="text-[11px] leading-5 text-bazooka-text-secondary">From strength and conditioning to body transformation, personal coaching and recovery, browse the complete program lineup and choose the path that fits your goal.</p>
          </div>
        </div>
      </section>

      <AllProgramsGrid />

      <section className="py-12 md:py-14">
        <div className={`${shell} flex flex-col items-start justify-between gap-5 rounded-[5px] border border-bazooka-border-strong bg-bazooka-surface px-6 py-7 md:flex-row md:items-center md:px-8`}>
          <div>
            <span className="text-[9px] font-black uppercase text-bazooka-lime">Not sure which one?</span>
            <h2 className="font-display mt-2 text-[28px] font-black uppercase leading-none md:text-[34px]">Start With A Free Trial.</h2>
          </div>
          <Link href="/book-free-trial" className={primaryButton}>Book Free Trial <ArrowRight className="size-4" /></Link>
        </div>
      </section>
    </main>
  );
}
