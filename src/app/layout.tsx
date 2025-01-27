import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import { SelectionProvider } from "./context/SelectionContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "love",
  description: " i love you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link href="https://api.fontshare.com/v2/css?f[]=gambetta@401&f[]=dancing-script@400,700,1&display=swap" rel="stylesheet"/>
        <link href="https://api.fontshare.com/v2/css?f[]=telma@400&f[]=boska@501&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SelectionProvider>{children}</SelectionProvider>
      </body>
    </html>
  );
}
