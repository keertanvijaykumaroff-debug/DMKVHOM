import React from "react"
import type { Metadata, Viewport } from 'next'
import { Geist } from 'next/font/google'

import './globals.css'

const geist = Geist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DMKV | House of Marketing',
  description: 'Transform your brand with strategic digital marketing, creative excellence, and data-driven insights.',
  keywords: 'digital marketing, branding, social media, marketing agency',
  generator: 'v0.app',
  openGraph: {
    title: 'DMKV | House of Marketing',
    description: 'Transform your brand with strategic digital marketing',
    url: 'https://dmkv.com',
    siteName: 'DMKV',
    type: 'website',
  },
  icons: {
    icon: '/favicon.png', // Fallback to favicon.ico if not found, but we'll ask user for png
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.className} font-sans antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
