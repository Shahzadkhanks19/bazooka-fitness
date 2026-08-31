export const shell = "mx-auto w-[min(calc(100%-32px),1180px)] sm:w-[min(calc(100%-40px),1180px)] md:w-[min(calc(100%-64px),1180px)]";

export const reveal = {
  initial: false as const,
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.16 },
  transition: { duration: 0.55, ease: "easeOut" as const },
};

export const outlineButton = "group inline-flex min-h-11 items-center justify-center gap-3 rounded-[4px] border border-bazooka-lime/80 bg-black/25 px-5 text-center text-[10px] font-black uppercase tracking-[0.02em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-bazooka-lime hover:text-black sm:gap-4 sm:px-6";
export const primaryButton = "group inline-flex min-h-11 items-center justify-center gap-3 rounded-[4px] border border-bazooka-lime bg-bazooka-lime px-5 text-center text-[10px] font-black uppercase tracking-[0.02em] text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-bazooka-lime-hover hover:shadow-[0_0_28px_rgba(182,240,0,.22)] sm:gap-4 sm:px-6";
