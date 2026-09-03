export type TransformationStory = {
  slug: string;
  name: string;
  category: "Weight Loss" | "Muscle Gain" | "Body Transformation" | "Strength" | "Fat Loss" | "General Fitness";
  result: string;
  duration: string;
  metric: string;
  metricLabel: string;
  beforeImage: string;
  afterImage: string;
  heroQuote: string;
  focus: string;
  approach: string;
  stats: { value: string; label: string }[];
  story: string[];
  details: { label: string; value: string }[];
  workoutPlan: string[];
  nutritionPlan: string[];
  takeaways: string[];
  progress: { label: string; image: string }[];
};

const strengthImage = "https://images.unsplash.com/photo-1581009137042-c552e485697a?auto=format&fit=crop&w=1000&q=90";
const trainingImage = "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1000&q=90";
const conditioningImage = "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=1000&q=90";
const movementImage = "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=90";

export const transformationStories: TransformationStory[] = [
  {
    slug: "fat-loss-focus",
    name: "Fat Loss Focus",
    category: "Fat Loss",
    result: "Build a sustainable routine around training, movement and nutrition habits.",
    duration: "Flexible Timeline",
    metric: "Habit Based",
    metricLabel: "Approach",
    beforeImage: conditioningImage,
    afterImage: strengthImage,
    heroQuote: "Progress is built through repeatable habits, not shortcuts.",
    focus: "Fat Loss",
    approach: "Strength + Conditioning",
    stats: [
      { value: "Goal", label: "Fat Loss" },
      { value: "Train", label: "Strength" },
      { value: "Move", label: "Conditioning" },
      { value: "Build", label: "Habits" },
      { value: "Review", label: "Progress" },
    ],
    story: [
      "This goal guide is designed around a practical fat-loss approach rather than a promised number on the scale.",
      "Training can combine resistance work, conditioning and regular movement while nutrition habits are adjusted to the individual.",
      "Progress should be reviewed over time and the plan adapted based on consistency, recovery and how the member responds.",
    ],
    details: [
      { label: "Primary Goal", value: "Fat Loss" },
      { label: "Training Focus", value: "Strength + Conditioning" },
      { label: "Progress Style", value: "Habit & Performance Tracking" },
      { label: "Plan Type", value: "Coach-Guided" },
    ],
    workoutPlan: ["Full-body or split resistance training", "Conditioning based on current fitness", "Daily movement targets", "Mobility and recovery work"],
    nutritionPlan: ["Practical portion awareness", "Protein-focused meal planning where appropriate", "Hydration habits", "Adjustments based on individual needs"],
    takeaways: ["Avoid chasing unrealistic weekly numbers.", "Consistency matters more than perfect sessions.", "Review progress and adjust the plan when needed."],
    progress: [
      { label: "Assess", image: conditioningImage },
      { label: "Build", image: strengthImage },
      { label: "Train", image: trainingImage },
      { label: "Review", image: movementImage },
      { label: "Progress", image: strengthImage },
    ],
  },
  {
    slug: "muscle-gain-focus",
    name: "Muscle Gain Focus",
    category: "Muscle Gain",
    result: "Train progressively with enough recovery and nutrition support.",
    duration: "Flexible Timeline",
    metric: "Progressive",
    metricLabel: "Training Style",
    beforeImage: strengthImage,
    afterImage: trainingImage,
    heroQuote: "Muscle is built through progressive training, patience and recovery.",
    focus: "Muscle Gain",
    approach: "Progressive Resistance",
    stats: [{ value: "Goal", label: "Muscle Gain" },{ value: "Lift", label: "Resistance" },{ value: "Track", label: "Progress" },{ value: "Recover", label: "Rest" },{ value: "Fuel", label: "Nutrition" }],
    story: ["This guide focuses on structured resistance training rather than a guaranteed amount of muscle gain.","Progressive overload, technique, recovery and adequate nutrition all play a role.","The exact training split and pace should match the member’s experience and recovery capacity."],
    details: [{ label: "Primary Goal", value: "Muscle Gain" },{ label: "Training Focus", value: "Progressive Resistance" },{ label: "Progress Style", value: "Performance Tracking" },{ label: "Plan Type", value: "Coach-Guided" }],
    workoutPlan: ["Compound and accessory lifts", "Progressive loading", "Technique-focused sessions", "Planned recovery"],
    nutritionPlan: ["Adequate daily energy intake", "Protein-focused meals where appropriate", "Hydration", "Recovery nutrition habits"],
    takeaways: ["Progress gradually.", "Technique comes before load.", "Recovery is part of the program."],
    progress: [{ label: "Assess", image: strengthImage },{ label: "Build", image: trainingImage },{ label: "Train", image: strengthImage },{ label: "Review", image: movementImage },{ label: "Progress", image: trainingImage }],
  },
  {
    slug: "strength-focus",
    name: "Strength Focus",
    category: "Strength",
    result: "Improve technique, confidence and performance through structured strength work.",
    duration: "Flexible Timeline",
    metric: "Performance",
    metricLabel: "Focus",
    beforeImage: trainingImage,
    afterImage: strengthImage,
    heroQuote: "Strong training starts with good movement and consistent practice.",
    focus: "Strength",
    approach: "Technique + Progression",
    stats: [{ value: "Goal", label: "Strength" },{ value: "Learn", label: "Technique" },{ value: "Load", label: "Progressively" },{ value: "Track", label: "Performance" },{ value: "Recover", label: "Between Sessions" }],
    story: ["This guide centres on movement quality, progressive loading and measurable training performance.","Exercise selection can be adapted to experience level, mobility and equipment availability.","There is no fixed percentage increase promised; progress is individual."],
    details: [{ label: "Primary Goal", value: "Strength" },{ label: "Training Focus", value: "Technique + Progression" },{ label: "Progress Style", value: "Performance Tracking" },{ label: "Plan Type", value: "Coach-Guided" }],
    workoutPlan: ["Main strength movements", "Accessory work", "Technique practice", "Mobility and recovery"],
    nutritionPlan: ["Balanced nutrition", "Adequate protein where appropriate", "Hydration", "Recovery-supportive eating habits"],
    takeaways: ["Technique first.", "Add load only when movement quality allows.", "Track performance over time."],
    progress: [{ label: "Assess", image: trainingImage },{ label: "Learn", image: movementImage },{ label: "Train", image: strengthImage },{ label: "Review", image: trainingImage },{ label: "Progress", image: strengthImage }],
  },
  {
    slug: "body-recomposition-focus",
    name: "Body Recomposition Focus",
    category: "Body Transformation",
    result: "Combine resistance training, nutrition habits and consistent recovery.",
    duration: "Flexible Timeline",
    metric: "Balanced",
    metricLabel: "Approach",
    beforeImage: movementImage,
    afterImage: conditioningImage,
    heroQuote: "A better routine can matter more than chasing a dramatic short-term change.",
    focus: "Body Recomposition",
    approach: "Strength + Habits",
    stats: [{ value: "Goal", label: "Recomposition" },{ value: "Train", label: "Strength" },{ value: "Build", label: "Nutrition Habits" },{ value: "Track", label: "Progress" },{ value: "Recover", label: "Consistently" }],
    story: ["This guide is for members who want to improve overall body composition without relying on a dramatic before-and-after promise.","Resistance training, nutrition habits and recovery can be adjusted together over time.","Progress may show up in performance, measurements, habits and how training feels."],
    details: [{ label: "Primary Goal", value: "Body Recomposition" },{ label: "Training Focus", value: "Strength + Conditioning" },{ label: "Progress Style", value: "Multi-Factor Tracking" },{ label: "Plan Type", value: "Coach-Guided" }],
    workoutPlan: ["Resistance training", "Conditioning as appropriate", "Core and mobility", "Progressive exercise selection"],
    nutritionPlan: ["Balanced meals", "Protein awareness", "Portion awareness", "Hydration habits"],
    takeaways: ["Use more than one progress marker.", "Build repeatable routines.", "Adjust gradually rather than using extreme methods."],
    progress: [{ label: "Assess", image: movementImage },{ label: "Build", image: conditioningImage },{ label: "Train", image: strengthImage },{ label: "Review", image: trainingImage },{ label: "Progress", image: conditioningImage }],
  },
  {
    slug: "weight-management-focus",
    name: "Weight Management Focus",
    category: "Weight Loss",
    result: "Create a realistic training and lifestyle structure for long-term weight management.",
    duration: "Flexible Timeline",
    metric: "Sustainable",
    metricLabel: "Approach",
    beforeImage: conditioningImage,
    afterImage: movementImage,
    heroQuote: "A plan works best when it can fit real life.",
    focus: "Weight Management",
    approach: "Training + Lifestyle",
    stats: [{ value: "Goal", label: "Weight Management" },{ value: "Train", label: "Regularly" },{ value: "Move", label: "More Often" },{ value: "Review", label: "Habits" },{ value: "Adjust", label: "As Needed" }],
    story: ["This guide focuses on a realistic routine instead of a fixed kilograms-lost promise.","Strength work, conditioning, everyday movement and practical nutrition habits can all contribute.","The pace should remain appropriate for the individual and be reviewed over time."],
    details: [{ label: "Primary Goal", value: "Weight Management" },{ label: "Training Focus", value: "Strength + Movement" },{ label: "Progress Style", value: "Habit Tracking" },{ label: "Plan Type", value: "Coach-Guided" }],
    workoutPlan: ["Resistance training", "Low- or moderate-impact conditioning", "Daily movement", "Mobility and recovery"],
    nutritionPlan: ["Practical meal structure", "Portion awareness", "Protein and fibre awareness", "Hydration"],
    takeaways: ["Avoid extreme timelines.", "Make the routine practical.", "Use progress reviews to guide changes."],
    progress: [{ label: "Assess", image: conditioningImage },{ label: "Build", image: movementImage },{ label: "Train", image: strengthImage },{ label: "Review", image: trainingImage },{ label: "Progress", image: movementImage }],
  },
  {
    slug: "general-fitness-focus",
    name: "General Fitness Focus",
    category: "General Fitness",
    result: "Build strength, conditioning, mobility and confidence for everyday fitness.",
    duration: "Flexible Timeline",
    metric: "All-Round",
    metricLabel: "Fitness",
    beforeImage: movementImage,
    afterImage: trainingImage,
    heroQuote: "Fitness should support the way you want to move and live.",
    focus: "General Fitness",
    approach: "All-Round Training",
    stats: [{ value: "Goal", label: "General Fitness" },{ value: "Build", label: "Strength" },{ value: "Improve", label: "Conditioning" },{ value: "Move", label: "Better" },{ value: "Stay", label: "Consistent" }],
    story: ["This guide is for members who want a balanced training routine rather than one narrow outcome.","Sessions can combine strength, conditioning, mobility and core work.","The plan can evolve as fitness, confidence and training experience improve."],
    details: [{ label: "Primary Goal", value: "General Fitness" },{ label: "Training Focus", value: "All-Round Training" },{ label: "Progress Style", value: "Performance + Habit Tracking" },{ label: "Plan Type", value: "Coach-Guided" }],
    workoutPlan: ["Full-body strength", "Conditioning", "Mobility", "Core and movement quality"],
    nutritionPlan: ["Balanced everyday meals", "Protein awareness", "Hydration", "Consistent meal habits"],
    takeaways: ["Train for everyday capability.", "Use a balanced routine.", "Progress at a pace you can sustain."],
    progress: [{ label: "Assess", image: movementImage },{ label: "Build", image: trainingImage },{ label: "Train", image: conditioningImage },{ label: "Review", image: strengthImage },{ label: "Progress", image: trainingImage }],
  },
];

export function getTransformationBySlug(slug: string) {
  return transformationStories.find((story) => story.slug === slug);
}
