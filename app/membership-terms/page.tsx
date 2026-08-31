import type { Metadata } from "next";
import PolicyPage from "@/components/policies/policy-page";
export const metadata: Metadata={title:"Membership Terms | Bazooka Fitness",description:"Membership terms and conditions for Bazooka Fitness."};
export default function MembershipTermsPage(){return <PolicyPage kind="membership"/>}
