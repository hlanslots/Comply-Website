import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { SiteChrome } from "@/components/marketing/site-chrome";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { keywordDescription } from "@/lib/site-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mycomply.ai"),
  title: {
    default: "COMPLY | Security Compliance, GRC, Risk Management, and Audit Readiness",
    template: "%s | COMPLY",
  },
  description:
    "COMPLY helps organizations achieve and demonstrate security compliance while reducing audit effort, improving governance, and creating defensible compliance outcomes.",
  keywords: keywordDescription.split(", "),
  openGraph: {
    title: "COMPLY | Achieve Compliance. Demonstrate Compliance. Leverage Your Edge.",
    description:
      "Evidence-driven compliance management, risk governance, audit readiness, and continuous compliance oversight.",
    url: "https://mycomply.ai",
    siteName: "COMPLY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "COMPLY | Security Compliance and Audit Readiness",
    description:
      "Governance, evidence management, traceability, and continuous compliance oversight.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider>
          <SiteChrome>{children}</SiteChrome>
        </ThemeProvider>
      </body>
    </html>
  );
}
