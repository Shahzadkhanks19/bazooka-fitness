import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
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

const shell = "mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-12";
const gymImage = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=90";
const buttonBase = "group inline-flex min-h-11 items-center justify-center gap-3 rounded-[4px] border px-6 text-center text-[9px] font-black uppercase transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.97]";
const primaryButton = `${buttonBase} border-bazooka-lime bg-bazooka-lime text-black hover:bg-bazooka-lime-hover`;
const outlineButton = `${buttonBase} border-bazooka-border-strong bg-black/45 text-white backdrop-blur-sm hover:border-bazooka-lime hover:text-bazooka-lime`;

const membershipCards: Card[] = [
  { icon: UserRound, title: "Eligibility", text: "Membership eligibility can depend on age, training needs and the plan selected. Younger members should confirm any guardian or supervision requirements with the club before joining." },
  { icon: CalendarDays, title: "Plan Duration", text: "The website currently lists 3-month, 6-month and 12-month membership options. Confirm the activation date and validity period before payment." },
  { icon: CreditCard, title: "Payments", text: "Membership pricing and any additional applicable charges should be confirmed before completing payment. Keep your invoice or payment proof for future reference." },
  { icon: Snowflake, title: "Freeze / Pause", text: "Membership freeze or pause is not guaranteed for every plan. Requests are subject to the terms applicable to the active membership and approval by the club." },
  { icon: XCircle, title: "Cancellation", text: "Cancellation rights and any financial adjustment depend on the membership terms agreed at the time of purchase. Contact Bazooka Fitness with your plan details before cancelling." },
  { icon: CheckCircle2, title: "Attendance & Access", text: "Members should use only their own authorised access and follow the club’s check-in and entry procedures." },
  { icon: Dumbbell, title: "Gym Etiquette", text: "Members are expected to maintain hygiene, respect other members and staff, and follow instructions displayed or communicated inside the club." },
  { icon: Package, title: "Personal Belongings", text: "Keep personal belongings secure while using the club. Locker availability and usage rules should be confirmed at the facility." },
  { icon: UserRound, title: "Coach Guidance", text: "Ask a coach for guidance when you need help with equipment, form or a training program. Dedicated coaching sessions may require separate scheduling." },
  { icon: ShieldCheck, title: "Health & Safety", text: "Members should disclose relevant health limitations to the appropriate professional and avoid training beyond their safe capability. Fitness guidance on the website is not medical advice." },
  { icon: Dumbbell, title: "Facilities & Equipment", text: "Use equipment responsibly, follow safety instructions and report damaged or unsafe equipment to the team." },
  { icon: Handshake, title: "Code of Conduct", text: "Harassment, abusive behaviour, unsafe conduct or repeated rule violations may lead to restricted access or other action by the club." },
];

const cancellationCards: Card[] = [
  { icon: CalendarDays, title: "Membership Cancellation", text: "To discuss cancelling an active membership, contact Bazooka Fitness with your membership details. The applicable terms depend on the plan and agreement in force when you joined." },
  { icon: Clock3, title: "Notice Requirements", text: "The website does not currently publish a universal cancellation notice period. Confirm any notice requirement directly with the club before relying on a specific date." },
  { icon: CreditCard, title: "Unused Period", text: "A refund or credit for unused membership time is not automatically guaranteed. Eligibility depends on the applicable membership and refund terms." },
  { icon: Snowflake, title: "Freeze Instead Of Cancellation", text: "Where available, a freeze or pause may be an alternative to cancellation. Duration, eligibility and supporting documents can vary by plan." },
  { icon: Clock3, title: "Coach / Add-on Sessions", text: "Rescheduling or cancelling coach-led sessions or add-on services is subject to the service terms and confirmed availability. Contact the team as early as possible." },
  { icon: AlertCircle, title: "Outstanding Payments", text: "Any outstanding amount or payment issue should be resolved with the club before closure of an account or membership request." },
];

const refundCards: Card[] = [
  { icon: CreditCard, title: "Membership Payments", text: "A refund is not automatically available after a membership purchase. Eligibility depends on the terms attached to the transaction and any applicable consumer rights." },
  { icon: UserRound, title: "Free Trial", text: "The free trial page does not collect an online payment. If you decide not to continue after a trial, no paid membership is created through the website." },
  { icon: CalendarDays, title: "Before Activation", text: "If you request a refund before membership activation, contact the team immediately. Approval and processing depend on the applicable purchase terms and payment status." },
  { icon: Package, title: "Add-on Services", text: "Refund or rescheduling eligibility for personal training or other add-on services depends on the terms agreed for that service." },
  { icon: Snowflake, title: "Frozen Memberships", text: "A membership freeze does not automatically create a cash refund for unused days. Confirm how the frozen period is handled under your plan." },
  { icon: ShieldCheck, title: "Refund Processing", text: "If a refund is approved, the team will confirm the amount, method and expected processing timeline for that transaction." },
];

export default function PolicyPage({ kind }: { kind: PolicyKind }) {
  if (kind === "membership") return <MembershipTermsPage />;
  if (kind === "cancellation") return <CancellationPolicyPage />;
  return <RefundPolicyPage />;
}

function MembershipTermsPage() {
  return <main className="min-h-screen bg-bazooka-black text-bazooka-text">
    <Hero crumb="Membership Terms" title="Membership" accent="Terms" intro="A practical overview of membership use, club conduct and important points to confirm before joining." />
    <section className="bg-bazooka-black py-7 sm:py-9"><div className={shell}>
      <PolicyNotice text="These website terms are a general summary. Your final membership invoice, signed form or written agreement may contain plan-specific conditions that take precedence." />
      <div className="mt-4 overflow-hidden rounded-[6px] border border-bazooka-border-strong bg-bazooka-surface"><div className="grid md:grid-cols-2 xl:grid-cols-3">{membershipCards.map((card,index)=><MembershipTermCard key={card.title} card={card} index={index}/>)}</div></div>
      <NotesPanel title="Before You Join" notes={["Confirm the exact plan duration, price and included facilities before payment.","Ask the team about freeze, cancellation and refund conditions that apply to your selected plan.","Keep a copy of your invoice, membership form and any written commitments provided at joining."]}/>
      <div className="mt-4 grid items-center gap-5 rounded-[6px] border border-bazooka-lime/60 bg-bazooka-surface px-5 py-6 sm:px-6 lg:grid-cols-[1fr_auto_auto]"><div className="flex items-start gap-4"><span className="grid size-12 shrink-0 place-items-center rounded-[4px] border border-bazooka-lime bg-bazooka-lime/5 text-bazooka-lime"><CheckCircle2 className="size-6"/></span><div><h2 className="font-display text-[24px] font-black uppercase sm:text-[26px]">Review The Plan <span className="text-bazooka-lime">Before You Join.</span></h2><p className="mt-2 max-w-[620px] text-[9px] leading-5 text-bazooka-text-secondary">Compare the published membership options or visit the club before making a decision.</p></div></div><Link href="/book-free-trial" className={`${primaryButton} w-full lg:w-auto`}>Book Free Trial <ArrowRight className="size-4"/></Link><Link href="/memberships" className={`${outlineButton} w-full lg:w-auto`}>View Plans <ArrowRight className="size-4"/></Link></div>
    </div></section>
  </main>;
}

function CancellationPolicyPage() {
  return <main className="min-h-screen bg-bazooka-black text-bazooka-text">
    <Hero crumb="Cancellation Policy" title="Cancellation" accent="Policy" intro="Understand what to check before cancelling a membership, coach session or related service."/>
    <FeatureStrip items={[[ShieldCheck,"Plan Specific","Terms can vary by membership."],[Handshake,"Contact First","Discuss your active plan with the team."],[Clock3,"Check Timing","Confirm any notice requirement."],[UsersRound,"Keep Records","Retain invoices and written requests."]]}/>
    <PolicyCardsSection title="Cancellation" accent="Overview" subtitle="The website does not publish one universal cancellation rule for every plan. These points explain what should be confirmed." cards={cancellationCards}/>
    <section className="bg-bazooka-black pb-8"><div className={shell}><NotesPanel title="Important" notes={["Your signed membership form, invoice or written agreement may contain plan-specific cancellation conditions.","Do not assume a cancellation is effective until the team has acknowledged it.","Keep written proof of any cancellation request and response."]}/><HelpPanel copy="Contact the club with your membership details to discuss the applicable cancellation process."/></div></section>
  </main>;
}

function RefundPolicyPage() {
  return <main className="min-h-screen bg-bazooka-black text-bazooka-text">
    <Hero crumb="Refund Policy" title="Refund" accent="Policy" intro="A clear overview of how refund requests should be handled and what you should confirm before payment."/>
    <FeatureStrip items={[[ShieldCheck,"Check Terms","Refund eligibility depends on the transaction."],[Handshake,"Keep Proof","Retain invoices and payment records."],[Clock3,"Ask Early","Raise payment issues promptly."],[UsersRound,"Contact Team","Request transaction-specific guidance."]]}/>
    <PolicyCardsSection title="Refund" accent="Overview" subtitle="No universal refund outcome is promised on this website. Eligibility must be checked against the applicable purchase terms." cards={refundCards}/>
    <section className="bg-bazooka-black pb-8"><div className={shell}><NotesPanel title="Important" notes={["Keep your invoice, payment reference and any written membership terms.","Refund approval, amount and timing can depend on the specific transaction and applicable terms.","Where statutory consumer rights apply, they are not excluded by this website summary."]}/><HelpPanel copy="Contact the team with your payment reference if you need help with a refund request."/></div></section>
  </main>;
}

function Hero({crumb,title,accent,intro}:{crumb:string;title:string;accent:string;intro:string}) {
  return <section className="relative min-h-[390px] overflow-hidden border-b border-bazooka-border/70 bg-cover bg-center sm:min-h-[410px]" style={{backgroundImage:`url(${gymImage})`}}><div className="absolute inset-0 bg-gradient-to-r from-black via-black/84 to-black/18"/><div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/18"/><div className={`${shell} relative z-10 flex min-h-[390px] items-center py-11 sm:min-h-[410px]`}><div className="max-w-[650px]"><p className="text-[8px] text-bazooka-text-secondary sm:text-[9px]"><Link href="/" className="transition hover:text-bazooka-lime">Home</Link><span className="mx-2 text-bazooka-lime">›</span>{crumb}</p><h1 className="font-display mt-6 max-w-full text-[40px] font-black uppercase leading-[.9] min-[380px]:text-[46px] sm:text-[66px]">{title}<br/><span className="text-bazooka-lime">{accent}</span></h1><span className="mt-6 block h-[2px] w-10 bg-bazooka-lime"/><p className="mt-5 max-w-[520px] text-[10px] leading-6 text-bazooka-text-secondary sm:text-[11px]">{intro}</p></div></div></section>;
}

function PolicyNotice({text}:{text:string}) {
  return <div className="flex gap-3 rounded-[6px] border border-bazooka-lime/40 bg-bazooka-lime/[.035] p-4 sm:p-5"><AlertCircle className="mt-0.5 size-5 shrink-0 text-bazooka-lime"/><p className="text-[9px] leading-5 text-bazooka-text-secondary">{text}</p></div>;
}

function MembershipTermCard({card,index}:{card:Card;index:number}) {
  const Icon=card.icon;
  return <article className="group grid min-h-[180px] grid-cols-[48px_1fr] gap-4 border-b border-bazooka-border p-5 transition-all duration-300 hover:bg-bazooka-lime/5 sm:grid-cols-[54px_1fr] md:border-r xl:[&:nth-child(3n)]:border-r-0"><span className="grid size-11 place-items-center rounded-full border border-bazooka-border-strong text-bazooka-lime transition-all duration-300 group-hover:border-bazooka-lime group-hover:bg-bazooka-lime group-hover:text-black sm:size-12"><Icon className="size-5 sm:size-6"/></span><div><span className="font-display text-[17px] font-black text-bazooka-lime">{String(index+1).padStart(2,"0")}.</span><h2 className="font-display mt-1 text-[15px] font-black uppercase sm:text-[16px]">{card.title}</h2><p className="mt-3 text-[9px] leading-5 text-bazooka-text-secondary">{card.text}</p></div></article>;
}

function FeatureStrip({items}:{items:readonly (readonly [IconType,string,string])[]}) {
  return <section className="bg-bazooka-black py-6"><div className={shell}><div className="grid overflow-hidden rounded-[6px] border border-bazooka-border-strong bg-bazooka-surface sm:grid-cols-2 lg:grid-cols-4">{items.map(([Icon,title,text])=><div key={title} className="group flex min-h-[105px] items-center gap-4 border-b border-bazooka-border p-5 transition-colors duration-300 hover:bg-bazooka-lime/5 sm:border-r lg:border-b-0"><Icon className="size-8 shrink-0 text-bazooka-lime transition-transform duration-300 group-hover:scale-110"/><div><h2 className="font-display text-[16px] font-black uppercase">{title}</h2><p className="mt-1 text-[9px] leading-4 text-bazooka-text-secondary">{text}</p></div></div>)}</div></div></section>;
}

function PolicyCardsSection({title,accent,subtitle,cards}:{title:string;accent:string;subtitle?:string;cards:Card[]}) {
  return <section className="bg-bazooka-black pb-4"><div className={shell}><div className="rounded-[6px] border border-bazooka-border-strong bg-bazooka-surface p-5 sm:p-6"><h2 className="font-display text-[28px] font-black uppercase">{title} <span className="text-bazooka-lime">{accent}</span></h2>{subtitle&&<p className="mt-2 max-w-[760px] text-[9px] leading-5 text-bazooka-text-secondary">{subtitle}</p>}<div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{cards.map((card,index)=><PolicyCard key={card.title} card={card} index={index}/>)}</div></div></div></section>;
}

function PolicyCard({card,index}:{card:Card;index:number}) {
  const Icon=card.icon;
  return <article className="group min-h-[210px] rounded-[5px] border border-bazooka-border-strong bg-bazooka-black p-5 transition-all duration-300 hover:-translate-y-1 hover:border-bazooka-lime/70"><div className="flex items-center gap-3"><Icon className="size-7 shrink-0 text-bazooka-lime"/><span className="font-display text-[17px] font-black text-bazooka-lime">{String(index+1).padStart(2,"0")}.</span><h3 className="font-display text-[15px] font-black uppercase sm:text-[16px]">{card.title}</h3></div><p className="mt-4 text-[9px] leading-5 text-bazooka-text-secondary sm:text-[10px]">{card.text}</p>{card.bullets?.map(item=><p key={item} className="mt-3 flex gap-2 text-[9px] leading-5 text-bazooka-text-secondary"><ArrowRight className="mt-1 size-3 shrink-0 text-bazooka-lime"/>{item}</p>)}</article>;
}

function NotesPanel({title,notes}:{title:string;notes:string[]}) {
  return <div className="mt-4 rounded-[6px] border border-bazooka-border-strong bg-bazooka-surface p-5 sm:p-6"><div className="flex gap-4"><span className="grid size-11 shrink-0 place-items-center rounded-full border border-bazooka-lime bg-bazooka-lime/5 text-bazooka-lime"><AlertCircle className="size-6"/></span><div><h2 className="font-display text-[18px] font-black uppercase text-bazooka-lime">{title}</h2>{notes.map(note=><p key={note} className="mt-2 text-[9px] leading-5 text-bazooka-text-secondary">• {note}</p>)}</div></div></div>;
}

function HelpPanel({copy}:{copy:string}) {
  return <div className="mt-4 grid gap-5 rounded-[6px] border border-bazooka-border-strong bg-bazooka-surface p-5 sm:p-6 lg:grid-cols-[1.1fr_.75fr_.65fr_.75fr_auto] lg:items-center"><div className="flex gap-4"><span className="grid size-12 shrink-0 place-items-center rounded-full border border-bazooka-lime bg-bazooka-lime/5 text-bazooka-lime"><Headphones className="size-6"/></span><div><h2 className="font-display text-[22px] font-black uppercase">Need Help?</h2><p className="mt-1 max-w-[300px] text-[9px] leading-5 text-bazooka-text-secondary">{copy}</p></div></div><Info icon={MapPin} title="Visit Us" text="Sardarpura, Jodhpur"/><Info icon={Phone} title="Call Us" text="+91 91164 05151"/><Info icon={Mail} title="Email Us" text="store@bazooka.fit"/><Link href="/contact" className={`${primaryButton} w-full lg:w-auto`}>Contact Us <ArrowRight className="size-4"/></Link></div>;
}

function Info({icon:Icon,title,text}:{icon:IconType;title:string;text:string}) {
  return <div className="border-t border-bazooka-border pt-4 text-[9px] lg:border-l lg:border-t-0 lg:pl-5 lg:pt-0"><Icon className="size-4 text-bazooka-lime"/><strong className="font-display mt-2 block text-[13px] uppercase">{title}</strong><p className="mt-1 leading-4 text-bazooka-text-secondary">{text}</p></div>;
}
