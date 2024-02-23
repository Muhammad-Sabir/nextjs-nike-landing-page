import React from "react";
import type { Metadata } from "next";
import { Palanquin, Montserrat } from "next/font/google";
import "./globals.css";

const palanquin = Palanquin({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-palanquin",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Nike Landing Page",
  description: "Nike landing page generated using Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${palanquin.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}
