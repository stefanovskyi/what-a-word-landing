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
    default: "What a Word — Speak Ukrainian, hear Polish. Instantly.",
    template: "%s · What a Word",
  },
  description:
    "Real-time voice interpreter that turns spoken Ukrainian into spoken and written Polish with near-zero latency. Hold the mic, speak, release.",
  applicationName: "What a Word",
  keywords: [
    "Ukrainian Polish translator",
    "voice interpreter",
    "Gemini Live",
    "PWA",
    "real-time translation",
  ],
  openGraph: {
    title: "What a Word — Speak Ukrainian, hear Polish.",
    description:
      "One button between you and a conversation. Hold the mic, speak Ukrainian, hear fluent Polish.",
    type: "website",
    url: SITE_URL,
    siteName: "What a Word",
  },
  twitter: {
    card: "summary_large_image",
    title: "What a Word",
    description: "Speak Ukrainian, hear Polish. Instantly.",
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
