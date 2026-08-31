import type { Metadata } from "next";
import LegalPage from "@/components/legal/legal-page";
export const metadata:Metadata={title:"Privacy Policy | Bazooka Fitness",description:"Privacy Policy for Bazooka Fitness."};
export default function PrivacyPolicyPage(){return <LegalPage kind="privacy"/>}
