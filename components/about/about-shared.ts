export const shell = "mx-auto w-[min(calc(100%-32px),1180px)] sm:w-[min(calc(100%-40px),1180px)] md:w-[min(calc(100%-64px),1180px)]";

export const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.08 },
  transition: { duration: 0.55, ease: "easeOut" as const },
};

export const outlineButton = "group inline-flex min-h-11 items-center justify-center gap-3 rounded-[4px] border border-bazooka-border-strong bg-black/45 px-5 text-center text-[10px] font-black uppercase tracking-[0.02em] text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-bazooka-lime hover:bg-bazooka-lime/10 hover:text-bazooka-lime hover:shadow-[0_0_22px_rgba(255,181,46,.14)] active:scale-[0.97] active:border-bazooka-lime active:bg-bazooka-lime/10 active:text-bazooka-lime sm:gap-4 sm:px-6";
export const primaryButton = "group inline-flex min-h-11 items-center justify-center gap-3 rounded-[4px] border border-bazooka-lime bg-bazooka-lime px-5 text-center text-[10px] font-black uppercase tracking-[0.02em] text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-bazooka-lime-hover hover:shadow-[0_0_28px_rgba(255,181,46,.22)] active:scale-[0.97] active:bg-bazooka-lime-pressed sm:gap-4 sm:px-6";
