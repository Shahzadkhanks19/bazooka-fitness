import type { Metadata } from "next";
import LegalPage from "@/components/legal/legal-page";
export const metadata:Metadata={title:"Disclaimer | Bazooka Fitness",description:"Disclaimer for Bazooka Fitness website and services."};
export default function DisclaimerPage(){return <LegalPage kind="disclaimer"/>}
