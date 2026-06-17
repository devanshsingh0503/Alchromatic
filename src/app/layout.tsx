import type { Metadata } from "next";
import "./globals.css";
import SiteLayout from "@/components/SiteLayout";

export const metadata: Metadata = {
  title: "Apex Fitness | Premium Gym — Downtown & Westside",
  description:
    "Apex Fitness is the city's most premium gym with internationally-qualified trainers, world-class equipment, and exclusive Steam, Sauna & Ice Bath facilities. Two locations: Downtown Plaza & Westside Center. Book your free trial today.",
  keywords:
    "premium gym, best gym, personal training, Olympic lifting, bodybuilding, Steam Sauna Ice Bath, Apex Fitness, weight loss program, fitness center",
  openGraph: {
    title: "Apex Fitness | Premium Gym",
    description:
      "Most premium gym. Internationally-qualified trainers, world-class equipment, Steam, Sauna & Ice Bath recovery. Two locations. Book your free trial today.",
    siteName: "Apex Fitness",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apex Fitness | Premium Gym",
    description:
      "Most premium gym — internationally-qualified trainers, world-class equipment, Steam, Sauna & Ice Bath.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
