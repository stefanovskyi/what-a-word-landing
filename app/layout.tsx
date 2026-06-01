import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-display",
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const SITE_URL = "https://what-a-word.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "What a Word — Speak any language, hear Polish. Instantly.",
    template: "%s · What a Word",
  },
  description:
    "Real-time voice interpreter that turns any spoken language into spoken and written Polish with near-zero latency. Hold the mic, speak, release.",
  applicationName: "What a Word",
  keywords: [
    "voice translator to Polish",
    "real-time interpreter",
    "Gemini Live",
    "PWA",
    "multilingual translation",
  ],
  openGraph: {
    title: "What a Word — Speak any language, hear Polish.",
    description:
      "One button between you and a conversation. Hold the mic, speak — hear fluent Polish back.",
    type: "website",
    url: SITE_URL,
    siteName: "What a Word",
  },
  twitter: {
    card: "summary_large_image",
    title: "What a Word",
    description: "Speak any language, hear Polish. Instantly.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F4F1EA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${interTight.variable} h-full antialiased`}
    >
      <body className="relative min-h-full flex flex-col overflow-x-hidden">
        <div className="mesh-bg" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
