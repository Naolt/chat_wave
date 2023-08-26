"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ReduxProvider from "@/lib/redux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chat Wave",
  description: "Realtime Social Media App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`h-screen w-screen flex overflow-hidden bg-white ${inter.className}`}
      >
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
