'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Navigation } from '@/components/navigation'
import { ClientsCarousel } from '@/components/clients-carousel'
import { StatsSection } from '@/components/stats-section'
import { ProcessTimeline } from '@/components/process-timeline'
import { BlogCarousel } from '@/components/blog-carousel'
import { CTASection } from '@/components/cta-section'

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-background via-background to-background overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <Navigation />

      <main className="relative z-10 flex flex-col min-h-screen pt-32 pb-20">
        {/* Hero Section */}
        <section className="flex-1 flex flex-col items-center justify-center px-6 mb-20">
          <div className="text-center space-y-8 animate-fadeInUp max-w-4xl">
            <div className="flex justify-center mb-6">
              <img
                src="/images/dmkv-logo.png"
                alt="DMKV Logo"
                className="animate-float w-full max-w-2xl h-auto object-contain"
              />
            </div>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
              We transform brands through strategic digital marketing, creative excellence, and data-driven insights that drive real growth.
            </p>

            <div className="flex gap-4 justify-center pt-4">
              <Link
                href="/services"
                className="glass px-8 py-3 rounded-full text-white font-medium hover:bg-white/20 transition-all duration-300"
              >
                View Services
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>
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

        <ProcessTimeline />

        <BlogCarousel />

        <CTASection />

        <footer className="text-center text-gray-500 text-sm py-8">
          <p>&copy; 2026 DMKV House of Marketing</p>
        </footer>
      </main>
    </div>
  )
}
