import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { FooterSection } from "@/components/footer-section/footer-section";
import { Navbar } from "@/components/navbar/navbar";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "OVision - Global IT Solution & Creative Studio",
  description:
    "Luxury digital agency and IT solution studio offering web design, mobile app development, eCommerce, and SEO services.",
  openGraph: {
    title: "OVision - Global IT Solution & Creative Studio",
    description:
      "Luxury digital agency and IT solution studio offering web design, mobile app development, eCommerce, and SEO services.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OVision - Global IT Solution & Creative Studio",
    description:
      "Luxury digital agency and IT solution studio offering web design, mobile app development, eCommerce, and SEO services.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body
        className="antialiased bg-[#EAECE6] text-[#111827] selection:bg-[#0084FF] selection:text-white"
        suppressHydrationWarning
      >
        <Navbar />

        {children}
        <FooterSection />
      </body>
    </html>
  );
}
