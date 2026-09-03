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
    summary: "A cardio training area for endurance work, warm-ups and conditioning sessions.",
    description: "Use the available cardio stations for warm-ups, steady-paced sessions, intervals and general conditioning at your own pace.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1800&q=90",
    highlights: ["Endurance training", "Interval workouts", "Cardio stations", "Flexible training pace"],
  },
  {
    slug: "recovery-zone",
    title: "Recovery Zone",
    eyebrow: "Reset After Training",
    summary: "A post-workout area centred around the steam and shower facilities available at the club.",
    description: "Use the available amenities to cool down and freshen up after training as part of your Bazooka Fitness visit.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1800&q=90",
    highlights: ["Steam access", "Shower access", "Post-workout freshen up", "Club amenities"],
  },
  {
    slug: "group-class-studio",
    title: "Group Class Studio",
    eyebrow: "Train Together",
    summary: "A studio-style training space suited to coached and group-based sessions.",
    description: "Use the space for structured sessions, movement work and group training formats depending on the current club schedule.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1800&q=90",
    highlights: ["Group training space", "Coach-led formats", "Movement sessions", "Schedule dependent"],
  },
  {
    slug: "boxing-zone",
    title: "Boxing Zone",
    eyebrow: "Power. Speed. Focus.",
    summary: "A boxing and conditioning area for striking practice, coordination and fitness work.",
    description: "Use the space for boxing-style drills and conditioning depending on the equipment and coaching available at the club.",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=1800&q=90",
    highlights: ["Boxing-style conditioning", "Coordination drills", "Fitness training", "Availability may vary"],
  },
  {
    slug: "locker-changing",
    title: "Locker & Changing",
    eyebrow: "Everyday Convenience",
    summary: "Changing facilities for getting ready before training and freshening up afterward.",
    description: "Use the changing area as part of your gym visit. Ask the Bazooka team about current locker or storage availability.",
    image: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=1800&q=90",
    highlights: ["Changing space", "Member convenience", "Storage availability on request", "Easy club access"],
  },
  {
    slug: "nutrition-bar",
    title: "Cafe Bazooka",
    eyebrow: "Inside The Club",
    summary: "Bazooka Fitness' in-house cafe for food, drinks and refreshments during your visit.",
    description: "Cafe Bazooka adds a convenient food and refreshment stop to the gym experience. Exact menu items and availability can vary, so check the cafe for the current selection.",
    image: "https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=1800&q=90",
    highlights: ["Cafe food options", "Drinks & refreshments", "In-house convenience", "Menu availability may vary"],
  },
];

export function getFacilityBySlug(slug: string) {
  return facilityDetails.find((facility) => facility.slug === slug);
}
