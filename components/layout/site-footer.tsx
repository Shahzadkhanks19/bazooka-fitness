import Link from "next/link";
import { Clock3, MapPinned, Phone, UtensilsCrossed } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const shell = "mx-auto w-[min(calc(100%-40px),1180px)] md:w-[min(calc(100%-64px),1180px)]";

const footerCols = [
  { title: "Quick Links", links: [["Home", "/"], ["About Us", "/about"], ["Memberships", "/memberships"], ["Facilities", "/facilities"], ["Cafe Bazooka", "/facilities/nutrition-bar"], ["Trainers", "/trainers"], ["Transformations", "/transformations"], ["Gallery", "/gallery"], ["Contact", "/contact"]] },
  { title: "Programs", links: [["Strength Training", "/programs"], ["Functional Training", "/programs"], ["Cardio & Endurance", "/programs"], ["Personal Training", "/programs"], ["Transformation Program", "/programs"], ["Recovery", "/programs"], ["Nutrition Guidance", "/programs"]] },
  { title: "Membership", links: [["Plans & Pricing", "/memberships"], ["Join Bazooka", "/memberships"], ["Book Free Trial", "/book-free-trial"], ["Personal Training", "/programs"]] },
  { title: "Help", links: [["FAQ", "/faq"], ["Contact Us", "/contact"], ["Membership Terms", "/membership-terms"], ["Cancellation Policy", "/cancellation-policy"], ["Refund Policy", "/refund-policy"]] },
  { title: "Legal", links: [["Privacy Policy", "/privacy-policy"], ["Terms & Conditions", "/terms-and-conditions"], ["Cookie Policy", "/cookie-policy"], ["Disclaimer", "/disclaimer"]] },
] as const;

function FooterLogo() {
  return (
    <span className="inline-flex min-w-[170px] flex-col leading-none">
      <span className="text-[30px] font-black tracking-[-1.8px] text-bazooka-lime">BAZOOKA</span>
      <span className="mt-1 text-[5px] tracking-[0.6px] text-bazooka-text-secondary">FITNESS • PERFORMANCE • COMMUNITY</span>
    </span>
  );
}

export default function SiteFooter() {
  return (
    <footer id="site-footer" className="bg-bazooka-soft-black">
      <div className={`${shell} grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(5,1fr)_1.25fr]`}>
        <div>
          <Link href="/" className="inline-block transition-transform hover:scale-[1.025]"><FooterLogo /></Link>
          <p className="mt-6 text-[12px] leading-6 text-bazooka-text-secondary">Stronger People.<br />A Healthier Jodhpur.</p>
          <Link href="/facilities/nutrition-bar" className="mt-4 flex w-fit items-center gap-2 text-[10px] text-bazooka-text-secondary transition hover:text-bazooka-lime"><UtensilsCrossed className="size-4 text-bazooka-lime" /><span><b className="text-white">Cafe Bazooka</b><br />Healthy meals &amp; refreshments</span></Link>
          <div className="mt-6 flex gap-3">
            {[[FaInstagram, "Instagram"], [FaFacebookF, "Facebook"], [FaYoutube, "YouTube"]].map(([Icon, label], index) => {
              const SocialIcon = Icon as typeof FaInstagram;
              return <a key={index} href="#" aria-label={String(label)} className="grid size-10 place-items-center rounded-full border border-bazooka-border text-bazooka-text-secondary transition-all duration-300 hover:-translate-y-1 hover:border-bazooka-lime hover:bg-bazooka-lime hover:text-bazooka-black"><SocialIcon className="size-4" /></a>;
            })}
          </div>
        </div>

        {footerCols.map((column) => (
          <div key={column.title}>
            <h3 className="mb-5 text-[11px] font-black uppercase text-bazooka-text">{column.title}</h3>
            <div className="space-y-3">
              {column.links.map(([label, href]) => <Link key={label} href={href} className="group flex w-fit items-center gap-1 text-[10px] text-bazooka-text-secondary transition-all duration-300 hover:translate-x-1 hover:text-bazooka-lime"><span className="h-px w-0 bg-bazooka-lime transition-all duration-300 group-hover:w-2" />{label}</Link>)}
            </div>
          </div>
        ))}

        <div className="space-y-6 text-[10px] leading-5 text-bazooka-text-secondary">
          <a href="https://maps.app.goo.gl/ArEb2YaGdZq5qF8x7" target="_blank" rel="noreferrer" className="flex gap-3 transition hover:text-bazooka-lime"><MapPinned className="size-4 shrink-0 text-bazooka-lime" /><span>Floor 6, Shanti One, Plot No. 39,<br />11th A Rd, Sardarpura, Jodhpur,<br />Rajasthan 342001</span></a>
          <a href="tel:+919116405151" className="flex gap-3 transition hover:text-bazooka-lime"><Phone className="size-4 shrink-0 text-bazooka-lime" /><span>+91 91164 05151</span></a>
          <div className="flex gap-3"><Clock3 className="size-4 shrink-0 text-bazooka-lime" /><span>Mon – Sat: 5:30 AM – 10:00 PM<br />Sunday: Closed</span></div>
        </div>
      </div>

      <div className="border-t border-bazooka-border">
        <div className={`${shell} flex flex-col gap-2 py-5 text-[9px] text-bazooka-muted sm:flex-row sm:justify-between`}>
          <span>© 2026 Bazooka Fitness. All rights reserved.</span>
          <a href="https://builtbyshahzad.vercel.app" target="_blank" rel="noreferrer" className="transition hover:text-bazooka-lime">Designed &amp; Developed by Shahzad Khan <b className="text-bazooka-lime">♥</b></a>
        </div>
      </div>
    </footer>
  );
}
