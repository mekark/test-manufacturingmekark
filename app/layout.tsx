import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import FloatingActions from "./components/FloatingActions";
import DeferredGoogleTagManager from "./components/DeferredGoogleTagManager";
import "./globals.css";

// Same GTM container used by the other Mekark landing pages.
const GTM_ID = "GTM-5SBMM86H";

// Single variable font (one latin file) covers every weight used in the design.
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Turnkey Manufacturing Plant Construction Company – EPC manufacturing plant contractor",
  description:
    "Leading Turnkey Manufacturing Plant construction EPC & Turnkey manufacturing facility construction Company – manufacturing unit construction Turnkey EPC expertise in In House PEB Manufacturing, Civil, PEB, MEP and Seamless Execution servicing the needs of Turnkey manufacturing building contractor & Turnkey manufacturing plant construction, manufacturing plant epc contractor, manufacturing building contractor, manufacturing unit construction Company",
};

export const viewport: Viewport = {
  themeColor: "#060606",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} antialiased`}>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <FloatingActions />
        <DeferredGoogleTagManager gtmId={GTM_ID} />
      </body>
    </html>
  );
}
