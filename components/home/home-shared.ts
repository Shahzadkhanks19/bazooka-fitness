export const shell = "mx-auto w-[min(calc(100%-32px),1180px)] sm:w-[min(calc(100%-40px),1180px)] md:w-[min(calc(100%-64px),1180px)]";

export const buttonBase = "group inline-flex min-h-11 items-center justify-center gap-3 rounded-[4px] border px-5 text-center text-[10px] font-black uppercase tracking-[0.01em] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 sm:gap-4 sm:px-6";

export const primaryButton = `${buttonBase} border-bazooka-lime bg-bazooka-lime text-bazooka-black hover:bg-bazooka-lime-hover hover:shadow-[0_0_26px_rgba(182,240,0,.22)]`;

export const outlineButton = `${buttonBase} border-bazooka-border-strong bg-black/25 text-white hover:border-bazooka-lime hover:text-bazooka-lime`;

export const reveal = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.14 },
  transition: { duration: 0.55, ease: "easeOut" as const },
};
