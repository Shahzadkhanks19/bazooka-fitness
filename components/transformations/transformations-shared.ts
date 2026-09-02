export const shell = "mx-auto w-[min(calc(100%-32px),1180px)] sm:w-[min(calc(100%-40px),1180px)] md:w-[min(calc(100%-64px),1180px)]";

export const buttonBase = "group inline-flex h-11 items-center justify-center gap-3 rounded-[4px] border px-5 sm:px-6 text-[10px] font-black uppercase transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.97] active:translate-y-0";
export const primaryButton = `${buttonBase} border-bazooka-lime bg-bazooka-lime text-black hover:bg-bazooka-lime-hover hover:shadow-[0_0_26px_rgba(255,181,46,.22)] active:bg-bazooka-lime-pressed`;
export const outlineButton = `${buttonBase} border-bazooka-border-strong bg-black/45 text-white backdrop-blur-sm hover:border-bazooka-lime hover:bg-bazooka-lime/10 hover:text-bazooka-lime hover:shadow-[0_0_22px_rgba(255,181,46,.14)] active:border-bazooka-lime active:bg-bazooka-lime/10 active:text-bazooka-lime`;
export const reveal = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.08 }, transition: { duration: 0.55, ease: "easeOut" as const } };
