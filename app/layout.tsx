import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header/Header';
import { Navigation } from '@/components/Navigation/Navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FullStack Dev Emil Szymczyk',
  description: 'Cv app of FullStack Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Navigation />
      </body>
    </html>
  );
}
