import Link from 'next/link'
import dynamic from 'next/dynamic'
import type { Metadata } from 'next'
import { StatsSection } from '@/components/stats-section'
import { organizationSchema, localBusinessSchema, websiteSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Digital Marketing Agency in Bangalore | DMKV House of Marketing',
  description: 'DMKV is a leading digital marketing agency in Bangalore offering SEO, performance marketing, social media management, content strategy, and brand building for businesses across India.',
  keywords: [
    'digital marketing agency in Bangalore',
    'digital marketing company Bangalore',
    'SEO agency Bangalore',
    'performance marketing Bangalore',
    'social media marketing Bangalore',
    'content marketing agency India',
    'brand strategy agency',
    'DMKV',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Digital Marketing Agency in Bangalore | DMKV',
    description: 'Transform your brand with DMKV — Bangalore\'s premier digital marketing agency. SEO, performance ads, social media & more.',
    url: 'https://www.dmkvhouseofmarketing.com',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'DMKV House of Marketing' }],
  },
  robots: {
    index: true,
    follow: true,
  },
}

const ClientsCarousel = dynamic(() => import('@/components/clients-carousel').then(mod => mod.ClientsCarousel))
const ProcessWheel = dynamic(() => import('@/components/process-wheel').then(mod => mod.ProcessWheel))
const BlogCarousel = dynamic(() => import('@/components/blog-carousel').then(mod => mod.BlogCarousel))
const VideoCarousel = dynamic(() => import('@/components/video-carousel').then(mod => mod.VideoCarousel))
const CTASection = dynamic(() => import('@/components/cta-section').then(mod => mod.CTASection))

import { preload } from 'react-dom'

export default function Home() {
  preload('/videos/Logo_Merging_Video_Generation.mp4', { as: 'video', fetchPriority: 'high' })

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-background via-background to-background overflow-hidden">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <main className="relative z-10 flex flex-col min-h-screen pt-24 md:pt-32 pb-20">
        {/* Video Banner Hero Section */}
        <section className="relative h-[35vh] md:h-[80vh] flex flex-col items-center justify-end pb-8 md:pb-24 overflow-hidden bg-black">
          {/* Background Video */}
          <video
            src="/videos/Logo_Merging_Video_Generation.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover md:scale-125 scale-100 z-0"
          />

          {/* Subtle Overlay for legibility */}
          <div className="absolute inset-0 bg-black/40 z-[1]" />

          {/* Desktop-only overlay button */}
          <div className="absolute inset-x-0 bottom-12 z-10 hidden md:flex justify-center animate-fadeInUp">
            <Link
              href="/contact"
              className="px-12 py-4 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-sm bg-white/5"
            >
              Get Started
            </Link>
          </div>
        </section>

        {/* Mobile-only CTA Area below video */}
        <div className="relative z-10 flex md:hidden justify-center py-8 -mt-4">
          <Link
            href="/contact"
            className="px-12 py-4 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-sm bg-white/5 animate-fadeInUp"
          >
            Get Started
          </Link>
        </div>

        {/* Brand Identity Section */}
        <section className="bg-black py-24 md:py-32 px-6 border-b border-white/5">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fadeInUp">
            {/* H1 targets the primary search keyword for organic traffic */}
            <h1 className="sr-only">Digital Marketing Agency in Bangalore | DMKV House of Marketing</h1>
            <p aria-hidden="true" className="text-6xl md:text-9xl font-bold font-serif text-white tracking-tighter">
              DMKV
            </p>
            <h2 className="text-xl md:text-3xl font-light text-white/80 uppercase tracking-[0.3em] mb-4">
              House of Marketing
            </h2>
            <p className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light italic">
              &quot;We transform brands through strategic <Link href="/services" className="text-white hover:underline transition-colors not-italic">digital marketing</Link>, creative excellence, and data-driven insights.&quot;
            </p>
          </div>
        </section>

        {/* Clients Carousel Section */}
        {/* Clients Carousel Section */}
        <StatsSection />

        {/* Clients Carousel Section */}
        <section className="w-full py-10">
          <div className="max-w-5xl mx-auto space-y-4 text-center px-6 mb-12 animate-slideIn">
            <h2 className="text-3xl font-semibold text-white">
              Trusted by Industry Leaders
            </h2>
            <p className="text-gray-500">
              Our clients span across diverse industries
            </p>
          </div>
          <ClientsCarousel />
        </section>

        <ProcessWheel />

        <VideoCarousel />

        <BlogCarousel />

        <CTASection />
      </main>
    </div>
  )
}
