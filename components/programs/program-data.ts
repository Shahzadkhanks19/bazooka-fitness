export type ProgramDetail = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  description: string;
  heroImage: string;
  duration: string;
  level: string;
  coaching: string;
  benefits: string[];
  steps: { title: string; text: string }[];
};

export const programDetails: ProgramDetail[] = [
  {
    slug: "strength-training",
    title: "Strength Training",
    eyebrow: "Build Power. Build Confidence.",
    summary: "Progressive strength programming designed to make you stronger, more capable and more resilient.",
    description: "A structured strength program built around progressive overload, quality movement and consistent coaching. We focus on technique first, then steadily increase challenge so you can build measurable strength safely.",
    heroImage: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1800&q=90",
    duration: "45–75 min",
    level: "All Levels",
    coaching: "Coach Guided",
    benefits: ["Build total-body strength", "Improve lifting technique", "Increase power and stability", "Track measurable progress"],
    steps: [
      { title: "Assess", text: "We evaluate your movement, current strength and goals." },
      { title: "Build", text: "Your coach creates a progressive strength plan around your level." },
      { title: "Progress", text: "Loads, reps and exercise difficulty evolve as you get stronger." },
    ],
  },
  {
    slug: "functional-training",
    title: "Functional Training",
    eyebrow: "Move Better. Perform Better.",
    summary: "Athletic, practical training that improves mobility, stability, coordination and everyday performance.",
    description: "Functional training combines strength, mobility, balance and conditioning so your body performs better beyond the gym. Sessions are varied, coach-led and built around movement quality.",
    heroImage: "https://images.unsplash.com/photo-1534368420009-621bfab424a8?auto=format&fit=crop&w=1800&q=90",
    duration: "45–60 min",
    level: "All Levels",
    coaching: "Coach Guided",
    benefits: ["Improve mobility and balance", "Build usable strength", "Enhance coordination", "Train full-body movement patterns"],
    steps: [
      { title: "Screen", text: "We understand how you move and where you can improve." },
      { title: "Train", text: "You work through purposeful movement patterns and strength drills." },
      { title: "Perform", text: "Progressions improve control, confidence and real-world performance." },
    ],
  },
  {
    slug: "cardio-endurance",
    title: "Cardio & Endurance",
    eyebrow: "Go Longer. Recover Faster.",
    summary: "Structured conditioning that builds stamina, cardiovascular fitness and work capacity.",
    description: "Our cardio and endurance program blends intervals, steady-state work and progressive conditioning. The goal is better stamina without mindless cardio—every session has a clear purpose.",
    heroImage: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1800&q=90",
    duration: "30–60 min",
    level: "All Levels",
    coaching: "Structured Plan",
    benefits: ["Improve cardiovascular fitness", "Increase stamina", "Support fat loss", "Build better recovery capacity"],
    steps: [
      { title: "Baseline", text: "We establish your current conditioning and training tolerance." },
      { title: "Condition", text: "Intervals and endurance work are scaled to your fitness level." },
      { title: "Advance", text: "Volume and intensity progress as your capacity improves." },
    ],
  },
  {
    slug: "personal-training",
    title: "Personal Training",
    eyebrow: "Your Goal. Your Coach. Your Plan.",
    summary: "One-to-one coaching built completely around your body, schedule and goals.",
    description: "Personal training gives you focused attention, accountability and a plan that adapts with you. Your coach manages exercise selection, technique, progression and session structure from start to finish.",
    heroImage: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=1800&q=90",
    duration: "45–60 min",
    level: "Personalized",
    coaching: "1-on-1",
    benefits: ["Fully personalized programming", "Hands-on technique coaching", "Higher accountability", "Faster goal-focused progression"],
    steps: [
      { title: "Consult", text: "We discuss your goals, schedule, history and preferences." },
      { title: "Personalize", text: "Your trainer builds a plan specifically for you." },
      { title: "Coach", text: "Every session is guided, tracked and adjusted around your progress." },
    ],
  },
  {
    slug: "transformation-program",
    title: "Transformation Program",
    eyebrow: "Change More Than Your Body.",
    summary: "A complete training and lifestyle system for members ready to make a serious change.",
    description: "This program brings training, consistency, progress tracking and lifestyle habits together in one structured journey. It is designed for members who want visible, sustainable change rather than short-term fixes.",
    heroImage: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1800&q=90",
    duration: "Goal Based",
    level: "All Levels",
    coaching: "High Support",
    benefits: ["Goal-specific training", "Progress tracking", "Lifestyle accountability", "Sustainable long-term habits"],
    steps: [
      { title: "Define", text: "We establish your goal, starting point and realistic milestones." },
      { title: "Execute", text: "You follow structured training with ongoing coach support." },
      { title: "Transform", text: "Progress is reviewed and the plan evolves as your body changes." },
    ],
  },
  {
    slug: "recovery-wellness",
    title: "Recovery & Wellness",
    eyebrow: "Recover Better. Come Back Stronger.",
    summary: "Mobility, recovery and wellness-focused work that helps your body perform at its best.",
    description: "Recovery is part of training. This program focuses on mobility, movement quality and restorative work so you can train consistently, manage fatigue and feel better between hard sessions.",
    heroImage: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1800&q=90",
    duration: "30–45 min",
    level: "All Levels",
    coaching: "Guided Recovery",
    benefits: ["Improve mobility", "Reduce training stiffness", "Support recovery", "Maintain better movement quality"],
    steps: [
      { title: "Identify", text: "We identify mobility restrictions and areas that need recovery." },
      { title: "Restore", text: "Mobility and restorative work target the areas that need attention." },
      { title: "Return", text: "You return to training moving and recovering more effectively." },
    ],
  },
  {
    slug: "fat-loss",
    title: "Fat Loss Program",
    eyebrow: "Lose Fat. Keep Strength.",
    summary: "A structured transformation program focused on sustainable fat loss and better fitness.",
    description: "Fat loss should not mean random workouts. We combine resistance training, conditioning and consistency so you can reduce body fat while protecting strength and building habits you can maintain.",
    heroImage: "https://images.unsplash.com/photo-1581009137042-c552e485697a?auto=format&fit=crop&w=1800&q=90",
    duration: "Goal Based",
    level: "All Levels",
    coaching: "Progress Tracked",
    benefits: ["Reduce body fat", "Maintain lean muscle", "Improve conditioning", "Build sustainable habits"],
    steps: [
      { title: "Assess", text: "We define your starting point and realistic fat-loss target." },
      { title: "Train", text: "Strength and conditioning are combined in a structured weekly plan." },
      { title: "Refine", text: "Progress is tracked and training is adjusted as you improve." },
    ],
  },
  {
    slug: "muscle-gain",
    title: "Muscle Gain Program",
    eyebrow: "Build Size. Build Strength.",
    summary: "Progressive hypertrophy and strength training built for members who want more muscle and power.",
    description: "This program uses structured volume, progressive overload and consistent exercise execution to help you build muscle efficiently while continuing to improve strength.",
    heroImage: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1800&q=90",
    duration: "60–75 min",
    level: "All Levels",
    coaching: "Progressive Plan",
    benefits: ["Build lean muscle", "Increase strength", "Improve training technique", "Track progressive overload"],
    steps: [
      { title: "Baseline", text: "We identify your current training level and muscle-building goal." },
      { title: "Overload", text: "Volume, reps and load progress in a structured way." },
      { title: "Grow", text: "The plan evolves as strength and training capacity improve." },
    ],
  },
  {
    slug: "lean-fit",
    title: "Lean & Fit Program",
    eyebrow: "Stronger. Fitter. Sharper.",
    summary: "A balanced program for members who want a leaner physique, better fitness and everyday energy.",
    description: "Lean & Fit combines resistance training, conditioning and athletic movement for a balanced approach to body composition and fitness. It is practical, progressive and sustainable.",
    heroImage: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=1800&q=90",
    duration: "45–60 min",
    level: "All Levels",
    coaching: "Balanced Plan",
    benefits: ["Improve body composition", "Build lean strength", "Increase fitness", "Feel more energetic"],
    steps: [
      { title: "Set", text: "We establish the body-composition and fitness outcomes you want." },
      { title: "Balance", text: "Strength and conditioning are combined across the week." },
      { title: "Refine", text: "Training progresses as fitness, strength and consistency improve." },
    ],
  },
];

export function getProgramBySlug(slug: string) {
  return programDetails.find((program) => program.slug === slug);
}
