import type { Metadata } from "next";
import LegalPage from "@/components/legal/legal-page";
export const metadata:Metadata={title:"Cookie Policy | Bazooka Fitness",description:"Cookie Policy for Bazooka Fitness."};
export default function CookiePolicyPage(){return <LegalPage kind="cookie"/>}
