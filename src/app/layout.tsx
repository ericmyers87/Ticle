import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "TICLE · Micro-drama streaming",
  description: "Vertical micro-drama streaming with a cinematic, premium experience."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="ticle-gradient text-ticle-text">
        <main>{children}</main>
      </body>
    </html>
  );
}
