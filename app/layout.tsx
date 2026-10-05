import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

// Single variable font (one latin file) covers every weight used in the design.
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Turnkey Factory Construction in India | Mekark",
  description:
    "One contract for your entire plant. End-to-end turnkey factory construction with integrated design, fabrication and construction. Request your project blueprint.",
};

export const viewport: Viewport = {
  themeColor: "#060606",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
