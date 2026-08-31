import FloatingActions from "@/components/layout/floating-actions";
import SiteFooter from "@/components/layout/site-footer";
import SiteHeader from "@/components/layout/site-header";

export default function GlobalChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      {children}
      <SiteFooter />
      <FloatingActions />
    </>
  );
}
