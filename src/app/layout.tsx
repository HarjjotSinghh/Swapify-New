import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { describe } from 'node:test';
import { cookies } from 'next/headers';
import { ClientCookiesProvider } from '../../providers/CookiesProvider';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] })

export const websiteName = "Swapify";
export const websiteNameFont = "swApify";
export const websiteDescription = "...";

export const metadata: Metadata = {
  title: websiteName,
  description: websiteDescription,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClientCookiesProvider value={cookies().getAll()}>
      <html lang="en" data-theme="mainTheme">

        <body className={inter.className}>
          <Navbar></Navbar>

          {children}
        </body>
      </html>
    </ClientCookiesProvider>
  )
}
