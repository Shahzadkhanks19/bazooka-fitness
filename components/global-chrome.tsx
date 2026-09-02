import FloatingActions from "@/components/layout/floating-actions";
import SiteFooter from "@/components/layout/site-footer";
import SiteHeader from "@/components/layout/site-header";

export default function GlobalChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <span id="site-top" aria-hidden="true" className="block h-px w-full" />
      <SiteHeader />
      {children}
      <SiteFooter />
      <FloatingActions />
    </>
  );
}
