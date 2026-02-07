import type { Metadata } from "next";
import { Syne, DM_Serif_Display, Manrope, Italiana } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { JsonLd } from "@/components/seo/JsonLd";
import { SoundController } from "@/components/ui/SoundController";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const italiana = Italiana({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-italiana",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anand Prakash | Hospitality Professional",
  description:
    "Event Sales & F&B Coordinator. Crafting premium hospitality experiences from Singrauli to Mumbai.",
  metadataBase: new URL("https://anandprakash.com"),
  openGraph: {
    title: "Anand Prakash | Hospitality Professional",
    description:
      "Event Sales & F&B Coordinator. Crafting premium hospitality experiences.",
    url: "https://anandprakash.com",
    siteName: "Anand Prakash Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anand Prakash | Hospitality Professional",
    description: "Event Sales & F&B Coordinator.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning={true}
      className={cn(
        syne.variable,
        dmSerif.variable,
        manrope.variable,
        italiana.variable,
        "scroll-smooth",
      )}
    >
      <body className='antialiased bg-off-white text-ink-black font-sans selection:bg-swiss-red/30'>
        <JsonLd />
        <SoundController />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
