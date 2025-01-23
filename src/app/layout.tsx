import './globals.css';

import { Geist } from 'next/font/google';
import type { Metadata } from 'next';
import { Toaster } from 'sonner';

const geistSans = Geist({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.className} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
