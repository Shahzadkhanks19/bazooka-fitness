export const shell = "mx-auto w-[min(calc(100%-40px),1180px)] md:w-[min(calc(100%-64px),1180px)]";

export const reveal = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.14 },
  transition: { duration: 0.55, ease: "easeOut" as const },
};
