export type FaqTopic = "Membership" | "Training" | "Facilities" | "Payments" | "General";

export type FaqItem = {
  question: string;
  answer: string;
  topic: FaqTopic;
};

export const faqItems: readonly FaqItem[] = [
  { question: "What are the gym timings?", answer: "Bazooka Fitness is open Monday to Saturday from 5:30 AM to 10:00 PM. Sunday is closed.", topic: "General" },
  { question: "Do I need to book a slot to work out?", answer: "Regular members can train during operating hours without booking a workout slot. Personal training sessions should be booked in advance.", topic: "Training" },
  { question: "What is included in my membership?", answer: "Membership access includes the gym floor, cardio and weight training areas, steam and shower access. Final inclusions can vary by plan and will be confirmed by the Bazooka team.", topic: "Membership" },
  { question: "Can I freeze or pause my membership?", answer: "Membership freeze or pause requests are handled according to the applicable membership terms. Contact the team with your plan details for confirmation.", topic: "Membership" },
  { question: "Do you offer personal training?", answer: "Yes. One-on-one personal training is available with Bazooka coaches. You can view trainer profiles and book a session with your preferred coach.", topic: "Training" },
  { question: "Is there a registration fee?", answer: "Any joining or registration charge will be shown or confirmed before you complete your membership purchase. Contact us for the current applicable charges.", topic: "Payments" },
  { question: "Do you provide diet plans?", answer: "Nutrition guidance is available through the fitness team. The exact level of diet or nutrition support depends on the service or membership selected.", topic: "Training" },
  { question: "Can I bring a guest?", answer: "Guest access is subject to gym policy and availability. Contact the front desk before bringing a guest so the team can confirm access.", topic: "Membership" },
  { question: "Is parking available?", answer: "Parking availability can vary by time of day around the Sardarpura location. The team can guide you on the best available parking options when you visit.", topic: "Facilities" },
  { question: "Are there any age restrictions?", answer: "Age eligibility can depend on the training activity and membership type. Younger members may require guardian consent and trainer supervision.", topic: "General" },
  { question: "Do you have showers and lockers?", answer: "Yes. Locker, changing, steam and shower facilities are part of the gym amenities shown across the Bazooka facility experience.", topic: "Facilities" },
  { question: "How can I cancel my membership?", answer: "Membership cancellations are handled according to the membership and cancellation policies. Contact the Bazooka team with your membership details to start the process.", topic: "Membership" },
  { question: "What payment methods do you accept?", answer: "Available payment methods will be confirmed at the time of joining. Contact the team if you need a specific payment option.", topic: "Payments" },
  { question: "Can I change my membership duration later?", answer: "Plan changes or upgrades may be possible depending on your active membership. The team can confirm the available options and any price adjustment.", topic: "Payments" },
  { question: "Do you have a cardio zone?", answer: "Yes. Bazooka includes dedicated cardio and conditioning facilities alongside strength, functional and other training areas.", topic: "Facilities" },
  { question: "Are trainers available on the gym floor?", answer: "Bazooka has expert trainers and coaches available to guide members. Personal coaching and dedicated sessions can also be booked separately.", topic: "Training" },
] as const;

export const topicCounts: Record<FaqTopic, number> = {
  Membership: faqItems.filter((item) => item.topic === "Membership").length,
  Training: faqItems.filter((item) => item.topic === "Training").length,
  Facilities: faqItems.filter((item) => item.topic === "Facilities").length,
  Payments: faqItems.filter((item) => item.topic === "Payments").length,
  General: faqItems.filter((item) => item.topic === "General").length,
};
