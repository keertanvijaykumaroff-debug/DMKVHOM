import React from "react"
import type { Metadata, Viewport } from 'next'
import { Geist } from 'next/font/google'

import './globals.css'

const geist = Geist({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.dmkvhouseofmarketing.com'),
  title: {
    default: 'DMKV | House of Marketing',
    template: '%s | DMKV House of Marketing',
  },
  description: 'Leading digital marketing agency offering SEO, performance marketing, and brand strategy. Transform your business with data-driven digital marketing solutions.',
  keywords: ['digital marketing', 'digital marketing agency', 'SEO services', 'performance marketing', 'brand strategy', 'marketing agency', 'digital marketing services'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'DMKV | House of Marketing',
    description: 'Transform your brand with strategic digital marketing',
    url: 'https://www.dmkvhouseofmarketing.com',
    siteName: 'DMKV',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DMKV | House of Marketing',
    description: 'Transform your brand with strategic digital marketing',
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
}

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Breadcrumbs } from '@/components/breadcrumbs'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.className} font-sans antialiased`} suppressHydrationWarning>
        <Navigation />
        <Breadcrumbs />
        {children}
        <Footer />
      </body>
    </html>
  )
}
