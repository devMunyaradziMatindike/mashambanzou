import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ContentProvider } from "@/components/ContentProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const comingSoon = process.env.COMING_SOON === "true";

export const metadata: Metadata = {
  title: comingSoon
    ? "Coming Soon | Mashambanzou Care Trust"
    : "Mashambanzou Care Trust | HIV Services, OVC Support & Community Strengthening",
  description: comingSoon
    ? "Mashambanzou Care Trust website launching soon."
    : "Realising healthy, socially inclusive communities free of AIDS through comprehensive HIV services, Orphans and Vulnerable Children support, human rights promotion and community strengthening in Harare and beyond.",
  keywords: comingSoon
    ? undefined
    : "Mashambanzou Care Trust, HIV NGOs Zimbabwe, charities in Harare, palliative care Harare, OVC support, Houses of safety, donate to HIV charity",
  openGraph: {
    title: comingSoon ? "Coming Soon | Mashambanzou Care Trust" : "Mashambanzou Care Trust",
    description: comingSoon ? "Website launching soon." : "AIDS free, resilient and empowered communities.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="min-h-screen flex flex-col font-body antialiased selection:bg-brand-sunlight/40 selection:text-white">
        {comingSoon ? (
          children
        ) : (
          <ContentProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </ContentProvider>
        )}
      </body>
    </html>
  );
}
