export type TrainerProfile = {
  slug: string;
  name: string;
  role: string;
  category: "Strength" | "Transformation" | "Nutrition" | "Yoga";
  experience: string;
  specialties: readonly string[];
  certification: string;
  summary: string;
  quote: string;
  image: string;
  secondaryImage: string;
  expertise: readonly string[];
  certifications: readonly string[];
  education: readonly string[];
};

export const trainers: readonly TrainerProfile[] = [
  {
    slug: "ankit-rathore",
    name: "Ankit Rathore",
    role: "Head Strength Coach",
    category: "Strength",
    experience: "12+ Years",
    specialties: ["Strength Training", "Powerlifting"],
    certification: "ACE Certified",
    summary: "Helping you build real strength, discipline and an unstoppable mindset.",
    quote: "Strength isn’t just about lifting weights, it’s about pushing your limits every single day and becoming better than yesterday.",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=90",
    secondaryImage: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=90",
    expertise: ["Strength Training", "Powerlifting", "Muscle Building", "Olympic Lifting", "Functional Training", "Body Recomposition"],
    certifications: ["ACE Certified Personal Trainer", "NSCA Strength & Conditioning Specialist", "Powerlifting Coach Level 1", "Sports Nutrition Certification"],
    education: ["B.Sc. in Health & Physical Education", "P.G. Diploma in Sports Nutrition", "Advanced Powerlifting Workshop", "Certified in Functional Movement"],
  },
  {
    slug: "priya-sharma",
    name: "Priya Sharma",
    role: "Transformation Coach",
    category: "Transformation",
    experience: "8+ Years",
    specialties: ["Weight Loss", "Functional Training"],
    certification: "ACE Certified",
    summary: "Structured coaching for sustainable fat loss, confidence and long-term lifestyle change.",
    quote: "Transformation is built through consistency, patience and the confidence to keep showing up.",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=1200&q=90",
    secondaryImage: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=90",
    expertise: ["Weight Loss", "Functional Training", "Body Recomposition", "Mobility", "Habit Coaching", "Strength Foundations"],
    certifications: ["ACE Certified Personal Trainer", "Functional Training Specialist", "Weight Management Coach", "Mobility Fundamentals"],
    education: ["B.Sc. Physical Education", "Diploma in Fitness Training", "Behaviour Change Workshop", "Functional Movement Training"],
  },
  {
    slug: "rohit-singh",
    name: "Rohit Singh",
    role: "Performance Coach",
    category: "Strength",
    experience: "10+ Years",
    specialties: ["Muscle Building", "Athletic Performance"],
    certification: "NSCA Certified",
    summary: "Performance-focused training for strength, speed, power and athletic confidence.",
    quote: "Train with intent, move with purpose and let performance become the proof of your work.",
    image: "https://images.unsplash.com/photo-1534368420009-621bfab424a8?auto=format&fit=crop&w=1200&q=90",
    secondaryImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=90",
    expertise: ["Athletic Performance", "Muscle Building", "Power Development", "Conditioning", "Strength Training", "Speed Work"],
    certifications: ["NSCA Strength Coach", "Performance Training Specialist", "Strength Programming", "Athletic Conditioning"],
    education: ["B.P.Ed.", "Sports Performance Diploma", "Strength Programming Workshop", "Movement Assessment Training"],
  },
  {
    slug: "neha-verma",
    name: "Neha Verma",
    role: "Nutrition Expert",
    category: "Nutrition",
    experience: "7+ Years",
    specialties: ["Nutrition Planning", "Diet Management"],
    certification: "Precision Nutrition",
    summary: "Practical nutrition guidance designed around your goals, routine and sustainable habits.",
    quote: "The best nutrition plan is the one that supports your goals and still fits your real life.",
    image: "https://images.unsplash.com/photo-1594737625785-c6683fc0f7d9?auto=format&fit=crop&w=1200&q=90",
    secondaryImage: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=90",
    expertise: ["Nutrition Planning", "Diet Management", "Fat Loss Nutrition", "Muscle Gain Nutrition", "Meal Structure", "Lifestyle Coaching"],
    certifications: ["Precision Nutrition Level 1", "Sports Nutrition Certification", "Weight Management Specialist", "Lifestyle Coaching"],
    education: ["M.Sc. Nutrition", "Diploma in Sports Nutrition", "Diet Planning Workshop", "Behaviour Change Training"],
  },
  {
    slug: "karan-malhotra",
    name: "Karan Malhotra",
    role: "Endurance Coach",
    category: "Yoga",
    experience: "6+ Years",
    specialties: ["Cardio & Conditioning", "HIIT Training"],
    certification: "ISSA Certified",
    summary: "High-energy coaching for stamina, conditioning, movement quality and better everyday fitness.",
    quote: "Endurance is built one hard session at a time — stay consistent and your capacity will follow.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=90",
    secondaryImage: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=1200&q=90",
    expertise: ["Cardio Conditioning", "HIIT", "Stamina", "Mobility", "Circuit Training", "Recovery Planning"],
    certifications: ["ISSA Certified Trainer", "HIIT Specialist", "Conditioning Coach", "Mobility Fundamentals"],
    education: ["B.Sc. Sports Science", "Endurance Coaching Workshop", "Mobility Training", "Conditioning Programming"],
  },
] as const;

export function getTrainerBySlug(slug: string) {
  return trainers.find((trainer) => trainer.slug === slug);
}
