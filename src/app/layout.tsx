import type { Metadata } from "next";
import "./globals.css";
import SiteLayout from "@/components/SiteLayout";

export const metadata: Metadata = {
  title: "Alchromatic | Premier Art Supplies & Creative Atelier",
  description:
    "Alchromatic is the premier destination for fine art supplies, archival pigments, Belgian linen canvases, and Huion interactive digital pen displays. Explore our curated creative tools and ateliers in Downtown & Westside.",
  keywords:
    "fine art supplies, pigments, oil paints, Huion pen displays, digital art tablets, watercolor paper, archival framing, Belgian linen, drafting inks, artist atelier",
  openGraph: {
    title: "Alchromatic | Premier Art Supplies & Creative Atelier",
    description:
      "Museum-grade pigments, master-stretched canvases, and professional Huion digital pen displays for creators and visual artists.",
    siteName: "Alchromatic",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alchromatic | Premier Art Supplies & Creative Atelier",
    description:
      "Museum-grade pigments, master canvases, and professional digital drawing tools for creators.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-x-clip bg-black text-white selection:bg-white selection:text-black">
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}

