import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NewsProvider } from "@/context/NewsContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SmartNews - Unbiased News Aggregation",
  description:
    "Get news from multiple sources without bias. Stay informed with SmartNews.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-800`}
      >
        <NewsProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </NewsProvider>
      </body>
    </html>
  );
}
