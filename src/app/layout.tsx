import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Placeholder metadata — replace once the site's name/description/OG image
// are decided. See v1's layout.tsx (in the old repo) for the fuller pattern
// this should grow into: metadataBase, OpenGraph/Twitter cards, JSON-LD.
export const metadata: Metadata = {
  title: "Portfolio",
  description: "[PLACEHOLDER]",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
