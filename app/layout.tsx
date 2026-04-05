import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

import { Theme } from "./data/theme.js"
import Navbar from "@/components/navbar/Navbar";

import { RootMetaData } from "./data/meta/home.meta";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = RootMetaData;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${roboto.className} h-full antialiased`}
    >
      <body
        className="min-h-screen w-full flex flex-col"
        style={{ background: Theme.bgBase, color: Theme.textPrimary }}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}