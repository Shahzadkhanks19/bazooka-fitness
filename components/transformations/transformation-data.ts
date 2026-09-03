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
  age: number;
  location: string;
  stats: { value: string; label: string }[];
  story: string[];
  details: { label: string; value: string }[];
  workoutPlan: string[];
  nutritionPlan: string[];
  takeaways: string[];
  progress: { label: string; image: string }[];
};

const maleBefore = "https://images.unsplash.com/photo-1581009137042-c552e485697a?auto=format&fit=crop&w=900&q=90";
const maleAfter = "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=900&q=90";
const femaleBefore = "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=900&q=90";
const femaleAfter = "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=90";

export const transformationStories: TransformationStory[] = [
  {
    slug: "ravi-s",
    name: "Ravi S.",
    category: "Weight Loss",
    result: "Lost 18 KG in 16 Weeks",
    duration: "16 Weeks",
    metric: "18 KG",
    metricLabel: "Weight Lost",
    beforeImage: maleBefore,
    afterImage: maleAfter,
    heroQuote: "Bazooka didn’t just change my body, it changed my mindset and my life.",
    age: 28,
    location: "Jodhpur, Rajasthan",
    stats: [
      { value: "-18 KG", label: "Weight Lost" },
      { value: "-12%", label: "Body Fat" },
      { value: "+6 KG", label: "Muscle Gained" },
      { value: "16", label: "Weeks" },
      { value: "90%", label: "Consistency" },
    ],
    story: [
      "When I joined Bazooka, I was overweight, tired all the time and had zero confidence.",
      "The trainers assessed me completely and created a plan that was perfect for me.",
      "It wasn’t easy, but the support, motivation and environment kept me going every day.",
      "Today, I’m stronger, fitter and more confident than ever before.",
    ],
    details: [
      { label: "Starting Weight", value: "86 KG" },
      { label: "Ending Weight", value: "68 KG" },
      { label: "Height", value: "178 CM" },
      { label: "Body Fat (Before)", value: "26%" },
      { label: "Body Fat (After)", value: "14%" },
      { label: "Workouts Per Week", value: "5–6 Days" },
      { label: "Diet Plan", value: "High Protein" },
      { label: "Goal", value: "Fat Loss & Muscle Gain" },
    ],
    workoutPlan: ["Weight Training – 5 Days / Week", "Strength & Hypertrophy Focus", "Compound Movements", "Progressive Overload", "Cardio – 2 Days / Week", "Mobility & Stretching"],
    nutritionPlan: ["High Protein Diet", "Balanced Carbs & Healthy Fats", "5–6 Meals Per Day", "Calorie Deficit with Clean Eating", "Hydration – 4+ Liters / Day", "Supplements – Whey, Creatine, Multivitamin"],
    takeaways: ["Consistency is everything. Small daily actions lead to big results.", "Listen to your trainers and trust the process.", "Your body can do more than you think — never give up!"],
    progress: [
      { label: "Week 1", image: maleBefore },
      { label: "Week 4", image: maleBefore },
      { label: "Week 8", image: maleAfter },
      { label: "Week 12", image: maleAfter },
      { label: "Week 16", image: maleAfter },
    ],
  },
  { slug: "vikas-m", name: "Vikas M.", category: "Muscle Gain", result: "Gained 9 KG Muscle in 20 Weeks", duration: "20 Weeks", metric: "9 KG", metricLabel: "Muscle Gained", beforeImage: maleBefore, afterImage: maleAfter, heroQuote: "Strength came when I learned to train with patience and purpose.", age: 26, location: "Jodhpur, Rajasthan", stats: [{value:"+9 KG",label:"Muscle Gained"},{value:"+32%",label:"Strength"},{value:"20",label:"Weeks"},{value:"5",label:"Days / Week"},{value:"94%",label:"Consistency"}], story:["I wanted to add muscle without losing mobility or energy.","Bazooka gave me structure, accountability and the confidence to push harder.","The biggest change was learning how to train progressively instead of randomly."], details:[{label:"Starting Weight",value:"64 KG"},{label:"Ending Weight",value:"73 KG"},{label:"Height",value:"176 CM"},{label:"Goal",value:"Lean Muscle Gain"}], workoutPlan:["Hypertrophy Split","Progressive Overload","Compound Lifts","Accessory Work","Mobility Sessions"], nutritionPlan:["Calorie Surplus","High Protein Intake","Balanced Carbs","Hydration","Recovery Nutrition"], takeaways:["Track your lifts.","Recovery matters.","Consistency beats intensity spikes."], progress:[{label:"Week 1",image:maleBefore},{label:"Week 6",image:maleBefore},{label:"Week 12",image:maleAfter},{label:"Week 16",image:maleAfter},{label:"Week 20",image:maleAfter}] },
  { slug: "neha-p", name: "Neha P.", category: "Body Transformation", result: "Lost 14 KG in 14 Weeks", duration: "14 Weeks", metric: "14 KG", metricLabel: "Weight Lost", beforeImage: femaleBefore, afterImage: femaleAfter, heroQuote: "I became fitter, stronger and far more confident than I expected.", age: 30, location: "Jodhpur, Rajasthan", stats:[{value:"-14 KG",label:"Weight Lost"},{value:"-10%",label:"Body Fat"},{value:"14",label:"Weeks"},{value:"4",label:"Days / Week"},{value:"92%",label:"Consistency"}], story:["I joined with a simple goal: feel comfortable in my own body again.","Structured strength work and nutrition support changed everything.","The coaches made the process realistic and sustainable."], details:[{label:"Goal",value:"Body Recomposition"},{label:"Workouts Per Week",value:"4 Days"},{label:"Diet Plan",value:"Balanced High Protein"}], workoutPlan:["Full Body Strength","Conditioning","Mobility","Progressive Overload"], nutritionPlan:["Protein Focus","Portion Control","Balanced Meals","Hydration"], takeaways:["Progress is not linear.","Strength training changed my mindset.","Small habits matter."], progress:[{label:"Week 1",image:femaleBefore},{label:"Week 4",image:femaleBefore},{label:"Week 8",image:femaleAfter},{label:"Week 12",image:femaleAfter},{label:"Week 14",image:femaleAfter}] },
  { slug: "arjun-k", name: "Arjun K.", category: "Strength", result: "Increased Strength by 70%", duration: "24 Weeks", metric: "70%", metricLabel: "Strength Increase", beforeImage: maleBefore, afterImage: maleAfter, heroQuote: "The numbers went up, but the confidence went up even more.", age: 31, location: "Jodhpur, Rajasthan", stats:[{value:"+70%",label:"Strength"},{value:"24",label:"Weeks"},{value:"5",label:"Days / Week"},{value:"+8 KG",label:"Lean Mass"},{value:"95%",label:"Consistency"}], story:["My goal was performance, not just appearance.","The program focused on technique, progression and recovery.","Every month I could see objective improvement."], details:[{label:"Goal",value:"Strength & Performance"},{label:"Workouts Per Week",value:"5 Days"},{label:"Program",value:"Strength Focused"}], workoutPlan:["Squat / Bench / Deadlift","Accessory Strength","Technique Work","Mobility","Recovery Days"], nutritionPlan:["Performance Nutrition","High Protein","Carb Timing","Hydration"], takeaways:["Technique first.","Track progress.","Recovery drives performance."], progress:[{label:"Week 1",image:maleBefore},{label:"Week 6",image:maleBefore},{label:"Week 12",image:maleAfter},{label:"Week 18",image:maleAfter},{label:"Week 24",image:maleAfter}] },
  { slug: "pooja-t", name: "Pooja T.", category: "Fat Loss", result: "Lost 11 KG in 12 Weeks", duration: "12 Weeks", metric: "11 KG", metricLabel: "Weight Lost", beforeImage: femaleBefore, afterImage: femaleAfter, heroQuote: "I learned that sustainable progress feels better than shortcuts.", age: 27, location: "Jodhpur, Rajasthan", stats:[{value:"-11 KG",label:"Weight Lost"},{value:"12",label:"Weeks"},{value:"4",label:"Days / Week"},{value:"-8%",label:"Body Fat"},{value:"91%",label:"Consistency"}], story:["I wanted fat loss without extreme dieting.","The plan balanced strength, conditioning and practical nutrition.","That made the result easier to maintain."], details:[{label:"Goal",value:"Fat Loss"},{label:"Workouts Per Week",value:"4 Days"}], workoutPlan:["Strength Training","Intervals","Walking","Mobility"], nutritionPlan:["Calorie Deficit","Protein Focus","Whole Foods","Hydration"], takeaways:["No crash diets.","Train consistently.","Build habits you can keep."], progress:[{label:"Week 1",image:femaleBefore},{label:"Week 3",image:femaleBefore},{label:"Week 6",image:femaleAfter},{label:"Week 9",image:femaleAfter},{label:"Week 12",image:femaleAfter}] },
  { slug: "siddharth-r", name: "Siddharth R.", category: "Muscle Gain", result: "Gained 6 KG Muscle in 18 Weeks", duration: "18 Weeks", metric: "6 KG", metricLabel: "Muscle Gained", beforeImage: maleBefore, afterImage: maleAfter, heroQuote: "The structure made all the difference.", age: 25, location: "Jodhpur, Rajasthan", stats:[{value:"+6 KG",label:"Muscle Gained"},{value:"18",label:"Weeks"},{value:"5",label:"Days / Week"},{value:"+24%",label:"Strength"},{value:"93%",label:"Consistency"}], story:["I had trained before but never consistently.","Bazooka helped me structure every week around progressive overload and recovery."], details:[{label:"Goal",value:"Muscle Gain"},{label:"Workouts Per Week",value:"5 Days"}], workoutPlan:["Push / Pull / Legs","Progressive Overload","Accessory Work","Mobility"], nutritionPlan:["Calorie Surplus","Protein Focus","Carb Timing","Hydration"], takeaways:["Follow the plan.","Eat enough.","Sleep matters."], progress:[{label:"Week 1",image:maleBefore},{label:"Week 5",image:maleBefore},{label:"Week 9",image:maleAfter},{label:"Week 14",image:maleAfter},{label:"Week 18",image:maleAfter}] },
  { slug: "megha-d", name: "Megha D.", category: "Body Transformation", result: "Lost 12 KG in 16 Weeks", duration: "16 Weeks", metric: "12 KG", metricLabel: "Weight Lost", beforeImage: femaleBefore, afterImage: femaleAfter, heroQuote: "The best result was becoming consistent.", age: 29, location: "Jodhpur, Rajasthan", stats:[{value:"-12 KG",label:"Weight Lost"},{value:"16",label:"Weeks"},{value:"4",label:"Days / Week"},{value:"-9%",label:"Body Fat"},{value:"94%",label:"Consistency"}], story:["I wanted a sustainable transformation and better energy.","Training became a part of my routine instead of something I forced myself to do."], details:[{label:"Goal",value:"Body Transformation"},{label:"Workouts Per Week",value:"4 Days"}], workoutPlan:["Strength","Conditioning","Mobility","Core"], nutritionPlan:["Balanced Diet","High Protein","Portion Control","Hydration"], takeaways:["Routine wins.","Ask for help.","Celebrate progress."], progress:[{label:"Week 1",image:femaleBefore},{label:"Week 4",image:femaleBefore},{label:"Week 8",image:femaleAfter},{label:"Week 12",image:femaleAfter},{label:"Week 16",image:femaleAfter}] },
  { slug: "rohit-p", name: "Rohit P.", category: "General Fitness", result: "Improved Overall Fitness & Stamina", duration: "20 Weeks", metric: "Fit", metricLabel: "Overall Fitness", beforeImage: maleBefore, afterImage: maleAfter, heroQuote: "I feel more capable in everyday life now.", age: 34, location: "Jodhpur, Rajasthan", stats:[{value:"20",label:"Weeks"},{value:"+45%",label:"Stamina"},{value:"4",label:"Days / Week"},{value:"-6 KG",label:"Weight"},{value:"90%",label:"Consistency"}], story:["My goal was simple: feel fit again.","A mix of strength, conditioning and mobility improved everything from energy to confidence."], details:[{label:"Goal",value:"General Fitness"},{label:"Workouts Per Week",value:"4 Days"}], workoutPlan:["Full Body Strength","Cardio","Mobility","Core"], nutritionPlan:["Balanced Meals","Protein","Hydration","Moderation"], takeaways:["Fitness should support life.","Consistency beats perfection.","Keep moving."], progress:[{label:"Week 1",image:maleBefore},{label:"Week 5",image:maleBefore},{label:"Week 10",image:maleAfter},{label:"Week 15",image:maleAfter},{label:"Week 20",image:maleAfter}] },
];

export function getTransformationBySlug(slug: string) {
  return transformationStories.find((story) => story.slug === slug);
}
