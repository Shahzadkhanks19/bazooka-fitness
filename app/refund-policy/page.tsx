import type { Metadata } from "next";
import PolicyPage from "@/components/policies/policy-page";
export const metadata: Metadata={title:"Refund Policy | Bazooka Fitness",description:"Refund policy for Bazooka Fitness memberships and services."};
export default function RefundPolicyPage(){return <PolicyPage kind="refund"/>}
