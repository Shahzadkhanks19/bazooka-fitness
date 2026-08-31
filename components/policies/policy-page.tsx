import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  Banknote,
  CalendarDays,
  CheckCircle2,
  Clock3,
  CreditCard,
  Dumbbell,
  Handshake,
  Headphones,
  Mail,
  MapPin,
  Package,
  Phone,
  ShieldCheck,
  Snowflake,
  UserRound,
  UsersRound,
  XCircle,
} from "lucide-react";

export type PolicyKind = "membership" | "cancellation" | "refund";
type IconType = typeof UserRound;
type Card = { title: string; text: string; bullets?: string[]; icon: IconType };

const shell = "mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12";
const gymImage = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=90";
const plateImage = "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1000&q=90";

const membershipCards: Card[] = [
  { icon: UserRound, title: "Membership Eligibility", text: "Membership is open to individuals above 16 years of age. Members below 18 must have a parent or guardian’s consent." },
  { icon: CalendarDays, title: "Membership Types & Duration", text: "Bazooka offers various membership plans with different durations. The duration begins from the date of activation." },
  { icon: CreditCard, title: "Payment Policy", text: "Full payment must be completed to activate the membership. All fees are non-refundable and non-transferable." },
  { icon: Snowflake, title: "Membership Freeze", text: "Membership can be frozen for genuine medical or personal reasons for a maximum of 15 days in a year with valid proof." },
  { icon: XCircle, title: "Cancellation Policy", text: "Membership once purchased cannot be cancelled or refunded. In case of genuine issues, management’s decision is final." },
  { icon: CheckCircle2, title: "Attendance & Access", text: "Members must check-in using their authorized access. Tailgating or sharing access is strictly prohibited." },
  { icon: Dumbbell, title: "Gym Etiquette", text: "Members must maintain hygiene, respect others, and follow gym rules. Appropriate workout attire and clean shoes are mandatory." },
  { icon: Package, title: "Personal Belongings", text: "Bazooka is not responsible for the loss or damage of personal belongings. Use lockers provided during your workout." },
  { icon: UserRound, title: "Trainer Guidance", text: "Always consult with trainers before starting any new program. Follow instructions to avoid injuries and ensure safety." },
  { icon: ShieldCheck, title: "Health & Liability", text: "Members must disclose any relevant medical conditions. Bazooka is not liable for injury due to negligence or misconduct." },
  { icon: Dumbbell, title: "Facilities & Equipment", text: "Use all equipment and facilities at the member’s own risk. Please handle equipment with care." },
  { icon: Handshake, title: "Code of Conduct", text: "Any misconduct, harassment, or violation of rules may result in suspension or termination of membership." },
];

const cancellationCards: Card[] = [
  { icon: CalendarDays, title: "Membership Cancellation", text: "Members may cancel their membership by submitting a written request at the front desk or via email.", bullets: ["Cancellation will be effective from the end of the current billing cycle."] },
  { icon: Clock3, title: "Notice Period", text: "A minimum notice period of 30 days is required before cancellation.", bullets: ["Membership will remain active until the end of the notice period."] },
  { icon: CreditCard, title: "Refund Policy", text: "Membership fees are non-refundable under ordinary circumstances.", bullets: ["No refunds for partial months or unused days."] },
  { icon: Snowflake, title: "Membership Freeze", text: "Instead of cancellation, you may freeze your membership.", bullets: ["Minimum freeze duration: 15 days", "Maximum freeze duration: 60 days in a year"] },
  { icon: Clock3, title: "Package / Service Cancellation", text: "For PT sessions, nutrition plans, or other add-on services:", bullets: ["24 hours notice is required for any cancellation or rescheduling."] },
  { icon: AlertCircle, title: "Late Payments", text: "If membership payments are not made on time, Bazooka Fitness reserves the right to:", bullets: ["Suspend access until the payment is cleared."] },
];

const refundCards: Card[] = [
  { icon: CalendarDays, title: "Membership Fees", text: "Membership fees are non-refundable once the membership has been activated.", bullets: ["No refunds for change of mind.", "Membership can be frozen as per freeze policy."] },
  { icon: UserRound, title: "Free Trial", text: "If you are not satisfied with your free trial experience, please inform us during your trial period.", bullets: ["No charges will be applied if you do not continue with a paid plan."] },
  { icon: CalendarDays, title: "Cancellation Before Activation", text: "If you cancel your membership before activation, you are eligible for a full refund.", bullets: ["Refund will be processed within 7–10 working days."] },
  { icon: Package, title: "Package & Add-on Services", text: "Fees paid for add-on services, personal training, nutrition plans, or workshops are non-refundable.", bullets: ["You may reschedule the service subject to availability."] },
  { icon: Snowflake, title: "Membership Freeze", text: "We do not offer refunds for days not utilized before freezing.", bullets: ["You may freeze your membership as per the terms and conditions."] },
  { icon: Banknote, title: "Refund Process", text: "Eligible refunds will be initiated to the original mode of payment.", bullets: ["Refunds will be processed within 7–10 working days after approval."] },
];

export default function PolicyPage({ kind }: { kind: PolicyKind }) {
  if (kind === "membership") return <MembershipTermsPage />;
  if (kind === "cancellation") return <CancellationPolicyPage />;
  return <RefundPolicyPage />;
}

function MembershipTermsPage() {
  return <main className="min-h-screen bg-bazooka-black text-bazooka-text">
    <Hero crumb="Membership Terms" title="Membership" accent="Terms & Conditions" intro="Please read these terms carefully before becoming a part of the Bazooka Fitness community." />

    <section className="bg-bazooka-black py-7"><div className={shell}>
      <div className="overflow-hidden rounded-[5px] border border-bazooka-border-strong bg-bazooka-surface">
        <div className="grid md:grid-cols-2 xl:grid-cols-3">
          {membershipCards.map((card,index)=><MembershipTermCard key={card.title} card={card} index={index}/>) }
        </div>
      </div>

      <NotesPanel title="Important Notes" notes={[
        "Timings and facilities are subject to change without prior notice.",
        "Bazooka reserves the right to amend these terms and conditions at any time.",
        "By purchasing a membership, you agree to abide by all the terms and policies of Bazooka Fitness.",
      ]}/>

      <div className="mt-4 grid items-center gap-5 rounded-[5px] border border-bazooka-lime bg-bazooka-surface px-6 py-5 lg:grid-cols-[1fr_auto_auto]">
        <div className="flex items-center gap-4"><span className="grid size-12 shrink-0 place-items-center rounded-[4px] border border-bazooka-lime text-bazooka-lime"><CheckCircle2 className="size-6"/></span><div><h2 className="font-display text-[26px] font-black uppercase">Ready To Start <span className="text-bazooka-lime">Your Fitness Journey?</span></h2><p className="mt-1 max-w-[630px] text-[9px] leading-4 text-bazooka-text-secondary">Join Bazooka and experience world-class training, premium facilities and a supportive community.</p></div></div>
        <Link href="/book-free-trial" className="inline-flex h-11 items-center justify-center gap-3 rounded-[4px] bg-bazooka-lime px-7 text-[9px] font-black uppercase text-black transition hover:bg-bazooka-lime-hover">Book Free Trial <ArrowRight className="size-4"/></Link>
        <Link href="/memberships" className="inline-flex h-11 items-center justify-center gap-3 rounded-[4px] border border-bazooka-lime px-7 text-[9px] font-black uppercase text-white transition hover:bg-bazooka-lime hover:text-black">View Membership Plans <ArrowRight className="size-4"/></Link>
      </div>
    </div></section>
  </main>;
}

function CancellationPolicyPage() {
  return <main className="min-h-screen bg-bazooka-black text-bazooka-text">
    <Hero crumb="Cancellation Policy" title="Cancellation" accent="Policy" intro="We believe in transparency and fairness. Please read our cancellation policy carefully." />
    <FeatureStrip items={[[ShieldCheck,"Transparent","No hidden terms."],[Handshake,"Fair & Flexible","Policies made for you."],[Clock3,"Timely Support","We’re here to help."],[UsersRound,"Member First","Your fitness journey matters."]]}/>
    <PolicyCardsSection title="Our" accent="Cancellation Policy" subtitle="Please review the following terms before cancelling any membership or service." cards={cancellationCards}/>
    <section className="bg-bazooka-black pb-8"><div className={shell}><NotesPanel title="Important Note" notes={["Bazooka Fitness reserves the right to modify this cancellation policy at any time without prior notice.","Any changes will be updated on our website and at the gym."]}/><HelpPanel copy="Reach out to us for any cancellation or membership related queries."/></div></section>
  </main>;
}

function RefundPolicyPage() {
  return <main className="min-h-screen bg-bazooka-black text-bazooka-text">
    <Hero crumb="Refund Policy" title="Refund" accent="Policy" intro="At Bazooka Fitness, we are committed to complete transparency and fairness in every transaction. Please read our refund policy carefully." />
    <FeatureStrip items={[[ShieldCheck,"Transparent","Clear policies with no hidden terms."],[Handshake,"Fair & Honest","We treat every member fairly."],[Clock3,"Timely Process","Refunds processed within the promised time."],[UsersRound,"Member First","Your satisfaction is our priority."]]}/>
    <PolicyCardsSection title="Our" accent="Refund Policy" cards={refundCards}/>
    <section className="bg-bazooka-black pb-8"><div className={shell}><NotesPanel title="Important Notes" notes={["Refunds will be considered only in cases that fall under our Refund Policy.","Bazooka Fitness reserves the right to approve or decline any refund request.","This policy is subject to change at any time without prior notice."]}/><HelpPanel copy="Our team is here to assist you with any queries related to refunds and policies."/></div></section>
  </main>;
}

function Hero({crumb,title,accent,intro}:{crumb:string;title:string;accent:string;intro:string}) {
  return <section className="relative min-h-[410px] overflow-hidden border-b border-bazooka-border/70 bg-cover bg-center" style={{backgroundImage:`url(${gymImage})`}}>
    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/88 to-black/20"/>
    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/20"/>
    <div className={`${shell} relative z-10 flex min-h-[410px] items-center py-11`}><div className="max-w-[620px]">
      <p className="text-[9px] text-bazooka-text-secondary">Home <span className="mx-2 text-bazooka-lime">›</span> {crumb}</p>
      <h1 className="font-display mt-7 text-[52px] font-black uppercase leading-[.9] sm:text-[68px]">{title}<br/><span className="text-bazooka-lime">{accent}</span></h1>
      <span className="mt-6 block h-[2px] w-10 bg-bazooka-lime"/>
      <p className="mt-5 max-w-[500px] text-[11px] leading-6 text-bazooka-text-secondary">{intro}</p>
    </div></div>
  </section>;
}

function MembershipTermCard({card,index}:{card:Card;index:number}) {
  const Icon=card.icon;
  return <article className="grid min-h-[170px] grid-cols-[58px_1fr] gap-4 border-b border-bazooka-border p-5 md:border-r xl:[&:nth-child(3n)]:border-r-0 xl:[&:nth-last-child(-n+3)]:border-b-0">
    <span className="grid size-12 place-items-center rounded-full border border-bazooka-border-strong text-bazooka-lime"><Icon className="size-6"/></span>
    <div><span className="font-display text-[18px] font-black text-bazooka-lime">{String(index+1).padStart(2,"0")}.</span><h2 className="font-display mt-1 text-[16px] font-black uppercase">{card.title}</h2><p className="mt-3 text-[9px] leading-5 text-bazooka-text-secondary">{card.text}</p></div>
  </article>;
}

function FeatureStrip({items}:{items:readonly (readonly [IconType,string,string])[]}) {
  return <section className="bg-bazooka-black py-6"><div className={shell}><div className="grid overflow-hidden rounded-[5px] border border-bazooka-border-strong bg-bazooka-surface sm:grid-cols-2 lg:grid-cols-4">{items.map(([Icon,title,text],index)=><div key={title} className={`flex min-h-[105px] items-center gap-4 p-5 ${index<items.length-1?"lg:border-r lg:border-bazooka-border":""} ${index<2?"border-b border-bazooka-border lg:border-b-0":""}`}><Icon className="size-8 shrink-0 text-bazooka-lime"/><div><h2 className="font-display text-[16px] font-black uppercase">{title}</h2><p className="mt-1 text-[9px] leading-4 text-bazooka-text-secondary">{text}</p></div></div>)}</div></div></section>;
}

function PolicyCardsSection({title,accent,subtitle,cards}:{title:string;accent:string;subtitle?:string;cards:Card[]}) {
  return <section className="bg-bazooka-black pb-4"><div className={shell}><div className="rounded-[5px] border border-bazooka-border-strong bg-bazooka-surface p-5 sm:p-6"><h2 className="font-display text-[28px] font-black uppercase">{title} <span className="text-bazooka-lime">{accent}</span></h2>{subtitle&&<p className="mt-2 text-[9px] text-bazooka-text-secondary">{subtitle}</p>}<div className="mt-6 grid gap-4 lg:grid-cols-3">{cards.map((card,index)=><PolicyCard key={card.title} card={card} index={index}/>)}</div></div></div></section>;
}

function PolicyCard({card,index}:{card:Card;index:number}) {
  const Icon=card.icon;
  return <article className="min-h-[220px] rounded-[5px] border border-bazooka-border-strong bg-bazooka-black p-5"><div className="flex items-center gap-3"><Icon className="size-8 shrink-0 text-bazooka-lime"/><span className="font-display text-[18px] font-black text-bazooka-lime">{index+1}.</span><h3 className="font-display text-[16px] font-black uppercase">{card.title}</h3></div><p className="mt-4 text-[10px] leading-5 text-bazooka-text-secondary">{card.text}</p>{card.bullets?.map(item=><p key={item} className="mt-3 flex gap-2 text-[9px] leading-5 text-bazooka-text-secondary"><ArrowRight className="mt-1 size-3 shrink-0 text-bazooka-lime"/>{item}</p>)}</article>;
}

function NotesPanel({title,notes}:{title:string;notes:string[]}) {
  return <div className="relative mt-4 min-h-[120px] overflow-hidden rounded-[5px] border border-bazooka-border-strong bg-bazooka-surface p-6"><div className="absolute inset-y-0 right-0 hidden w-[270px] bg-cover bg-center opacity-25 grayscale md:block" style={{backgroundImage:`linear-gradient(to right,#101112,transparent),url(${plateImage})`}}/><div className="relative z-10 flex max-w-[900px] gap-5"><span className="grid size-12 shrink-0 place-items-center rounded-full border border-bazooka-lime text-bazooka-lime"><AlertCircle className="size-7"/></span><div><h2 className="font-display text-[18px] font-black uppercase text-bazooka-lime">{title}</h2>{notes.map(note=><p key={note} className="mt-2 text-[9px] leading-4 text-bazooka-text-secondary">• {note}</p>)}</div></div></div>;
}

function HelpPanel({copy}:{copy:string}) {
  return <div className="mt-4 grid items-center gap-5 rounded-[5px] border border-bazooka-border-strong bg-bazooka-surface p-6 lg:grid-cols-[1.15fr_.75fr_.65fr_.75fr_auto]">
    <div className="flex gap-4"><span className="grid size-14 shrink-0 place-items-center rounded-full border border-bazooka-lime text-bazooka-lime"><Headphones className="size-7"/></span><div><h2 className="font-display text-[24px] font-black uppercase">Need Help?</h2><p className="mt-1 max-w-[280px] text-[9px] leading-4 text-bazooka-text-secondary">{copy}</p></div></div>
    <Info icon={MapPin} title="Visit Us" text="Bazooka Fitness · Sardarpura, Jodhpur"/>
    <Info icon={Phone} title="Call Us" text="+91 91164 05151"/>
    <Info icon={Mail} title="Email Us" text="info@bazooka.fit"/>
    <Link href="/contact" className="inline-flex h-11 items-center justify-center gap-3 rounded-[4px] bg-bazooka-lime px-7 text-[9px] font-black uppercase text-black transition hover:bg-bazooka-lime-hover">Contact Us <ArrowRight className="size-4"/></Link>
  </div>;
}

function Info({icon:Icon,title,text}:{icon:IconType;title:string;text:string}) {
  return <div className="border-l border-bazooka-border pl-5 text-[9px]"><Icon className="size-4 text-bazooka-lime"/><strong className="font-display mt-2 block text-[13px] uppercase">{title}</strong><p className="mt-1 leading-4 text-bazooka-text-secondary">{text}</p></div>;
}
