import type { Metadata } from "next";
import LegalPage from "@/components/legal/legal-page";
export const metadata:Metadata={title:"Terms & Conditions | Bazooka Fitness",description:"Terms and Conditions for Bazooka Fitness."};
export default function TermsAndConditionsPage(){return <LegalPage kind="terms"/>}
