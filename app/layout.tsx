import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.dmkvhouseofmarketing.com'),
  title: {
    default: 'DMKV | House of Marketing',
    template: '%s | DMKV House of Marketing',
  },
  description: 'Leading digital marketing agency offering SEO, performance marketing, and brand strategy. Transform your business with data-driven digital marketing solutions.',
  keywords: ['digital marketing', 'digital marketing agency', 'SEO services', 'performance marketing', 'brand strategy', 'marketing agency', 'digital marketing services', 'DMKV', 'House of Marketing'],
  authors: [{ name: 'DMKV House of Marketing', url: 'https://www.dmkvhouseofmarketing.com' }],
  creator: 'DMKV House of Marketing',
  publisher: 'DMKV House of Marketing',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'DMKV | House of Marketing',
    description: 'Transform your brand with strategic digital marketing. SEO, performance marketing, social media & more.',
    url: 'https://www.dmkvhouseofmarketing.com',
    siteName: 'DMKV House of Marketing',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DMKV House of Marketing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DMKV | House of Marketing',
    description: 'Transform your brand with strategic digital marketing',
    images: ['/og-image.png'],
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
      <head>
        {/* Preconnect to Google Fonts for faster font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`} suppressHydrationWarning>
        <Navigation />
        <Breadcrumbs />
        {children}
        <Footer />
      </body>
    </html>
  )
}
