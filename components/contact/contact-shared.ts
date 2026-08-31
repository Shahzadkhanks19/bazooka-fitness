export const shell = "mx-auto w-[min(calc(100%-32px),1180px)] sm:w-[min(calc(100%-40px),1180px)] md:w-[min(calc(100%-64px),1180px)]";

export const reveal = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.14 },
  transition: { duration: 0.55, ease: "easeOut" as const },
};

export const fieldClass = "h-11 w-full min-w-0 rounded-[4px] border border-bazooka-border-strong bg-bazooka-black px-4 text-[10px] text-white outline-none transition placeholder:text-bazooka-text-muted focus:border-bazooka-lime";
export const textareaClass = "min-h-[120px] w-full min-w-0 resize-none rounded-[4px] border border-bazooka-border-strong bg-bazooka-black px-4 py-3 text-[10px] text-white outline-none transition placeholder:text-bazooka-text-muted focus:border-bazooka-lime";
export const buttonClass = "inline-flex h-11 items-center justify-center gap-3 rounded-[4px] border border-bazooka-lime bg-bazooka-lime px-5 sm:px-6 text-[9px] font-black uppercase text-black transition hover:bg-bazooka-lime-hover";
