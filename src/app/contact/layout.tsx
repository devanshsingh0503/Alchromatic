import type { Metadata } from "next";
import { siteConfig } from "@/data/config";

export const metadata: Metadata = {
  title: `Contact Us | ${siteConfig.brand.name}`,
  description: `Get in touch with ${siteConfig.brand.name}. Book a free trial, enquire about membership, or find our locations. Two branches: Downtown Plaza & Westside Center.`,
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
