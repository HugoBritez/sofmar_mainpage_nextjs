import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import {  } from "next/font/google";
import "./globals.css";

const inter = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "500", "700"],
});

export const metadata: Metadata = {
  title: "Sofmar Sistemas",
  description: "Landing page de Sofmar Sistemas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
