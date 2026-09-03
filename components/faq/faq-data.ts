export type FaqTopic = "Membership" | "Training" | "Facilities" | "Payments" | "General";

export type FaqItem = {
  question: string;
  answer: string;
  topic: FaqTopic;
};

export const faqItems: readonly FaqItem[] = [
  { question: "What are the gym timings?", answer: "Bazooka Fitness is open Monday to Saturday from 5:30 AM to 10:00 PM. Sunday is closed.", topic: "General" },
  { question: "Do I need to book a slot to work out?", answer: "Regular members can train during operating hours without booking a workout slot. If you want a dedicated coaching session, contact the team in advance so the preferred date and time can be confirmed.", topic: "Training" },
  { question: "What is included in my membership?", answer: "The membership plans currently shown on the website include cardio, weight training, steam and shower access. Confirm the final inclusions for your selected plan with the Bazooka team before joining.", topic: "Membership" },
  { question: "Can I freeze or pause my membership?", answer: "Freeze or pause requests depend on the applicable membership terms and your active plan. Contact the team with your membership details before making plans around a pause or extension.", topic: "Membership" },
  { question: "Do you offer personal training?", answer: "Bazooka offers coach-led training options. You can explore the coach profiles on the website and submit a preferred session request, then confirm the appointment directly with the team.", topic: "Training" },
  { question: "Is there a registration fee?", answer: "The website does not currently publish a separate registration fee. Any additional joining charge, if applicable, should be confirmed with the team before payment.", topic: "Payments" },
  { question: "Do you provide diet plans?", answer: "The website does not currently publish a guaranteed diet-plan inclusion for every membership. Ask the Bazooka team what nutrition guidance or related services are available with the option you are considering.", topic: "Training" },
  { question: "Can I bring a guest?", answer: "Guest access is subject to the gym’s current policy and availability. Contact the front desk before bringing a guest so access can be confirmed for that visit.", topic: "Membership" },
  { question: "Is parking available?", answer: "Parking availability around the Sardarpura location can vary by time of day. Contact the club if you need guidance before your visit.", topic: "Facilities" },
  { question: "Are there any age restrictions?", answer: "Age eligibility can depend on the membership and type of training. Contact the team before enrolling a younger member so any supervision or guardian requirements can be confirmed.", topic: "General" },
  { question: "Do you have showers and lockers?", answer: "Steam and shower access are included in the membership information currently published on the website. Locker availability and usage rules should be confirmed with the club when you visit.", topic: "Facilities" },
  { question: "How can I cancel my membership?", answer: "Cancellation requests are handled according to the applicable membership and cancellation policies. Contact Bazooka Fitness with your membership details to understand the process for your plan.", topic: "Membership" },
  { question: "What payment methods do you accept?", answer: "The website does not currently publish a complete list of accepted payment methods. Confirm your preferred payment option with the team before completing a membership payment.", topic: "Payments" },
  { question: "Can I change my membership duration later?", answer: "Plan changes or upgrades are not guaranteed. The team can confirm whether a change is available for your active membership and whether any price difference applies.", topic: "Payments" },
  { question: "Do you have a cardio zone?", answer: "Yes. Cardio access is listed as part of the membership offering, alongside weight training and the other facilities shown on the website.", topic: "Facilities" },
  { question: "How do I arrange a session with a coach?", answer: "Choose a coach profile and use the Book Session page to select a preferred date and time. The website does not currently show live coach availability, so the session is only confirmed after you speak with the Bazooka team.", topic: "Training" },
] as const;

export const topicCounts: Record<FaqTopic, number> = {
  Membership: faqItems.filter((item) => item.topic === "Membership").length,
  Training: faqItems.filter((item) => item.topic === "Training").length,
  Facilities: faqItems.filter((item) => item.topic === "Facilities").length,
  Payments: faqItems.filter((item) => item.topic === "Payments").length,
  General: faqItems.filter((item) => item.topic === "General").length,
};
