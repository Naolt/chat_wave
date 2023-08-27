//'use client';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut } from '@clerk/nextjs';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Chat Wave',
  description: 'Realtime Social Media App',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body className={`h-screen w-screen flex overflow-hidden bg-white ${inter.className}`}>
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
