import Link from "next/link";
import { Clock3, Mail, MapPinned, Phone, UtensilsCrossed } from "lucide-react";

const shell = "mx-auto w-[min(calc(100%-32px),1180px)] sm:w-[min(calc(100%-40px),1180px)] md:w-[min(calc(100%-64px),1180px)]";

const footerCols = [
  { title: "Quick Links", links: [["Home", "/"], ["About Us", "/about"], ["Memberships", "/memberships"], ["Facilities", "/facilities"], ["Cafe Bazooka", "/cafe-bazooka"], ["Trainers", "/trainers"], ["Transformations", "/transformations"], ["Gallery", "/gallery"], ["Contact", "/contact"]] },
  { title: "Programs", links: [["Strength Training", "/programs/strength-training"], ["Functional Training", "/programs/functional-training"], ["Cardio & Endurance", "/programs/cardio-endurance"], ["Personal Training", "/programs/personal-training"], ["Transformation Program", "/programs/transformation-program"], ["Recovery", "/programs/recovery-wellness"], ["Nutrition Guidance", "/cafe-bazooka"]] },
  { title: "Membership", links: [["Plans & Pricing", "/memberships"], ["Join Bazooka", "/book-free-trial"], ["Book Free Trial", "/book-free-trial"], ["Personal Training", "/programs/personal-training"]] },
  { title: "Help", links: [["FAQ", "/faq"], ["Contact Us", "/contact"], ["Membership Terms", "/membership-terms"], ["Cancellation Policy", "/cancellation-policy"], ["Refund Policy", "/refund-policy"]] },
  { title: "Legal", links: [["Privacy Policy", "/privacy-policy"], ["Terms & Conditions", "/terms-and-conditions"], ["Cookie Policy", "/cookie-policy"], ["Disclaimer", "/disclaimer"]] },
] as const;

function FooterLogo() {
  return (
    <span className="inline-flex min-w-0 flex-col leading-none">
      <span className="text-[27px] font-black tracking-[-1.6px] text-bazooka-lime sm:text-[30px] sm:tracking-[-1.8px]">BAZOOKA</span>
      <span className="mt-1 whitespace-nowrap text-[4px] tracking-[0.45px] text-bazooka-text-secondary sm:text-[5px] sm:tracking-[0.6px]">FITNESS • PERFORMANCE • COMMUNITY</span>
    </span>
  );
}

export default function SiteFooter() {
  return (
    <footer id="site-footer" className="bg-bazooka-soft-black">
      <div className={`${shell} grid gap-9 py-12 pr-[62px] sm:grid-cols-2 sm:gap-10 sm:py-16 sm:pr-[76px] lg:grid-cols-[1.4fr_repeat(5,1fr)_1.25fr] lg:pr-24 xl:pr-28`}>
        <div>
          <Link href="/" className="inline-block max-w-full transition-transform hover:scale-[1.025]"><FooterLogo /></Link>
          <p className="mt-5 text-[12px] leading-6 text-bazooka-text-secondary sm:mt-6">Stronger People.<br />A Healthier Jodhpur.</p>
          <Link href="/cafe-bazooka" className="mt-4 flex w-fit max-w-full items-start gap-2 text-[10px] text-bazooka-text-secondary transition hover:text-bazooka-lime"><UtensilsCrossed className="mt-0.5 size-4 shrink-0 text-bazooka-lime" /><span><b className="text-white">Cafe Bazooka</b><br />Healthy meals &amp; refreshments</span></Link>
          <div className="mt-6 flex flex-wrap gap-2">
            <a href="tel:+919116405151" className="inline-flex items-center gap-2 rounded-full border border-bazooka-border px-3 py-2 text-[9px] text-bazooka-text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:border-bazooka-lime hover:text-bazooka-lime"><Phone className="size-3.5" />Call</a>
            <a href="mailto:info@bazooka.fit" className="inline-flex items-center gap-2 rounded-full border border-bazooka-border px-3 py-2 text-[9px] text-bazooka-text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:border-bazooka-lime hover:text-bazooka-lime"><Mail className="size-3.5" />Email</a>
          </div>
        </div>

        {footerCols.map((column) => (
          <div key={column.title} className="min-w-0">
            <h3 className="mb-4 text-[11px] font-black uppercase text-bazooka-text sm:mb-5">{column.title}</h3>
            <div className="space-y-3">
              {column.links.map(([label, href]) => <Link key={label} href={href} className="group flex w-fit max-w-full items-center gap-1 text-[10px] text-bazooka-text-secondary transition-all duration-300 hover:translate-x-1 hover:text-bazooka-lime"><span className="h-px w-0 shrink-0 bg-bazooka-lime transition-all duration-300 group-hover:w-2" />{label}</Link>)}
            </div>
          </div>
        ))}

        <div className="min-w-0 space-y-5 text-[10px] leading-5 text-bazooka-text-secondary sm:space-y-6">
          <a href="https://maps.app.goo.gl/ArEb2YaGdZq5qF8x7" target="_blank" rel="noreferrer" className="flex min-w-0 gap-3 transition hover:text-bazooka-lime"><MapPinned className="size-4 shrink-0 text-bazooka-lime" /><span className="min-w-0">Floor 6, Shanti One, Plot No. 39,<br />11th A Rd, Sardarpura, Jodhpur,<br />Rajasthan 342001</span></a>
          <a href="tel:+919116405151" className="flex gap-3 transition hover:text-bazooka-lime"><Phone className="size-4 shrink-0 text-bazooka-lime" /><span>+91 91164 05151</span></a>
          <a href="mailto:info@bazooka.fit" className="flex gap-3 transition hover:text-bazooka-lime"><Mail className="size-4 shrink-0 text-bazooka-lime" /><span>info@bazooka.fit</span></a>
          <div className="flex gap-3"><Clock3 className="size-4 shrink-0 text-bazooka-lime" /><span>Mon – Sat: 5:30 AM – 10:00 PM<br />Sunday: Closed</span></div>
        </div>
      </div>

      <div className="border-t border-bazooka-border">
        <div className={`${shell} flex flex-col gap-2 py-5 pr-[62px] text-[9px] leading-4 text-bazooka-muted sm:pr-[76px] md:flex-row md:items-center md:justify-between lg:pr-24 xl:pr-28`}>
          <span>© 2026 Bazooka Fitness. All rights reserved.</span>
          <a href="https://builtbyshahzad.vercel.app" target="_blank" rel="noreferrer" className="group w-fit max-w-full transition-all duration-300 hover:text-white">Designed &amp; Developed by <span className="font-black text-bazooka-lime transition-all duration-300 group-hover:text-bazooka-lime-hover group-hover:drop-shadow-[0_0_8px_rgba(255,181,46,.55)]">Shahzad Khan</span> <b className="text-bazooka-lime">♥</b></a>
        </div>
      </div>
    </footer>
  );
}
