import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mashambanzou Care Trust | HIV Services, OVC Support & Community Strengthening",
  description:
    "Realising healthy, socially inclusive communities free of AIDS through comprehensive HIV services, Orphans and Vulnerable Children support, human rights promotion and community strengthening in Harare and beyond.",
  keywords:
    "Mashambanzou Care Trust, HIV NGOs Zimbabwe, charities in Harare, palliative care Harare, OVC support, Houses of safety, donate to HIV charity",
  openGraph: {
    title: "Mashambanzou Care Trust",
    description: "AIDS free, resilient and empowered communities.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="min-h-screen flex flex-col font-body text-slate-900 antialiased selection:bg-brand-sunlight/30 selection:text-brand-dark">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
