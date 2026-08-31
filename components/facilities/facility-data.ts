export type FacilityDetail = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  description: string;
  image: string;
  highlights: readonly string[];
};

export const facilityDetails: readonly FacilityDetail[] = [
  {
    slug: "strength-zone",
    title: "Strength Zone",
    eyebrow: "Build Raw Strength",
    summary: "A dedicated strength floor built for progressive training, power and muscle development.",
    description: "Train with a focused mix of free weights, benches, racks and selectorized strength equipment in a high-energy environment designed for serious progress.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=90",
    highlights: ["Free weights & dumbbells", "Benches & racks", "Strength machines", "Progressive overload friendly"],
  },
  {
    slug: "functional-zone",
    title: "Functional Zone",
    eyebrow: "Move Better",
    summary: "An open training zone for mobility, athletic conditioning and functional performance.",
    description: "Build coordination, agility, conditioning and real-world strength with versatile functional equipment and coach-led movement work.",
    image: "https://images.unsplash.com/photo-1534368420009-621bfab424a8?auto=format&fit=crop&w=1800&q=90",
    highlights: ["Mobility training", "Agility drills", "Functional equipment", "Athletic conditioning"],
  },
  {
    slug: "cardio-zone",
    title: "Cardio Zone",
    eyebrow: "Go Further",
    summary: "A modern cardio floor built to improve endurance, stamina and cardiovascular fitness.",
    description: "Choose from a variety of cardio stations for warm-ups, endurance sessions, intervals and calorie-burning workouts at your own pace.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1800&q=90",
    highlights: ["Endurance training", "Interval workouts", "Multiple cardio stations", "Beginner to advanced friendly"],
  },
  {
    slug: "recovery-zone",
    title: "Recovery Zone",
    eyebrow: "Recover Stronger",
    summary: "A dedicated recovery experience for slowing down, resetting and getting ready to train again.",
    description: "Recovery is part of performance. Use the space to decompress after demanding sessions and support a consistent training routine.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1800&q=90",
    highlights: ["Post-workout recovery", "Steam & shower access", "Relaxing environment", "Recovery-focused amenities"],
  },
  {
    slug: "group-class-studio",
    title: "Group Class Studio",
    eyebrow: "Train Together",
    summary: "An energetic studio for coached group sessions that keep training social, structured and motivating.",
    description: "Train alongside other members in high-energy sessions designed around consistency, variety and community-driven motivation.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1800&q=90",
    highlights: ["Coach-led sessions", "High-energy classes", "Community atmosphere", "Varied workout formats"],
  },
  {
    slug: "boxing-zone",
    title: "Boxing Zone",
    eyebrow: "Power. Speed. Focus.",
    summary: "A focused boxing and conditioning area for building power, speed, coordination and confidence.",
    description: "Mix striking work with conditioning to create challenging sessions that develop athleticism, endurance and mental focus.",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=1800&q=90",
    highlights: ["Boxing conditioning", "Speed & coordination", "Power development", "High-intensity training"],
  },
  {
    slug: "locker-changing",
    title: "Locker & Changing",
    eyebrow: "Comfort Matters",
    summary: "Clean, secure and comfortable changing facilities designed around a better gym experience.",
    description: "Store your belongings, get ready for training and freshen up afterward in a space built for convenience and everyday use.",
    image: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=1800&q=90",
    highlights: ["Secure lockers", "Changing space", "Clean environment", "Convenient member access"],
  },
  {
    slug: "nutrition-bar",
    title: "Cafe Bazooka",
    eyebrow: "Fuel Better",
    summary: "Bazooka Fitness' in-house cafe for healthy meals, protein-focused options, drinks and convenient post-workout refuelling.",
    description: "Cafe Bazooka brings nutrition into the gym experience with wholesome meals, lighter bites, protein-friendly choices and refreshing beverages designed for members who want convenient, better-for-you food before or after training.",
    image: "https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=1800&q=90",
    highlights: ["Healthy meals & bowls", "Protein-focused options", "Fresh drinks & refreshments", "Convenient in-house dining"],
  },
];

export function getFacilityBySlug(slug: string) {
  return facilityDetails.find((facility) => facility.slug === slug);
}
