import type { Metadata } from "next";
import PolicyPage from "@/components/policies/policy-page";
export const metadata: Metadata={title:"Cancellation Policy | Bazooka Fitness",description:"Cancellation policy for Bazooka Fitness memberships and services."};
export default function CancellationPolicyPage(){return <PolicyPage kind="cancellation"/>}
