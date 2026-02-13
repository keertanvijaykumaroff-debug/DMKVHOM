'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function CTASection() {
    return (
        <section className="w-full py-24 px-6 relative overflow-hidden">
            {/* Dynamic Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 animate-pulse" />

            <div className="relative max-w-4xl mx-auto text-center glass-dark p-12 rounded-3xl border border-white/10">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Ready to Elevate Your Brand?
                </h2>
                <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
                    Let's create something extraordinary together. Join the market leaders who trust DMKV.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                        href="/contact"
                        className="group px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-200 transition-colors flex items-center gap-2"
                    >
                        Start Your Project
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        href="/services"
                        className="px-8 py-4 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition-colors"
                    >
                        Explore Services
                    </Link>
                </div>
            </div>
        </section>
    )
}
