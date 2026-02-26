'use client'

import { Navigation } from '@/components/navigation'
import { ServiceFlow } from '@/components/service-flow'
import { motion } from 'framer-motion'
import Link from 'next/link'

const flowSteps = [
    {
        title: "Audit & Analysis",
        description: "We begin with a deep dive into your technical health, current rankings, and competitor landscape."
    },
    {
        title: "Strategy & Architecture",
        description: "Crafting a roadmap for keyword authority and structured site hierarchy to maximize crawlability."
    },
    {
        title: "Execution & Optimization",
        description: "On-page fine-tuning, meta-data optimization, and strategic content cluster deployment."
    },
    {
        title: "Monitoring & Scaling",
        description: "Continuous data-driven adjustments and performance tracking for sustainable organic growth."
    }
]

export default function SEOPage() {
    return (
        <div className="relative min-h-screen bg-black overflow-hidden">
            <Navigation />

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 px-6">
                <div className="max-w-4xl mx-auto text-center space-y-8 animate-fadeInUp">
                    <h1 className="text-5xl md:text-8xl font-bold font-serif text-white tracking-tighter">
                        SEO
                    </h1>
                    <p className="text-xl md:text-2xl font-light text-white/60 uppercase tracking-[0.3em]">
                        Sustainable Organic Growth
                    </p>
                    <div className="h-px w-24 bg-white/20 mx-auto" />
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
                        Dominate search results through technical precision and strategic authority. We don't just chase traffic; we build lasting digital assets.
                    </p>
                </div>
            </section>

            {/* Process Flow */}
            <ServiceFlow steps={flowSteps} />

            {/* Detailed content section */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                    <div className="glass p-10 rounded-3xl space-y-6">
                        <h3 className="text-2xl font-semibold text-white">Technical Excellence</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Our technical SEO audits go beyond the basics. We optimize site speed, mobile responsiveness, and core web vitals to ensure search engines can discover and index your content effortlessly.
                        </p>
                        <ul className="space-y-3">
                            {['Schema Markup Implementation', 'Technical Site Audits', 'Mobile Optimization', 'Core Web Vitals Tuning'].map((item) => (
                                <li key={item} className="flex items-center gap-3 text-white/80">
                                    <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="glass p-10 rounded-3xl space-y-6">
                        <h3 className="text-2xl font-semibold text-white">Content Authority</h3>
                        <p className="text-gray-400 leading-relaxed">
                            We build content clusters that establish your brand as an industry leader. Every piece of content is strategically aligned with user intent and keyword opportunities.
                        </p>
                        <ul className="space-y-3">
                            {['Keyword Research & Mapping', 'Content Cluster Strategy', 'On-Page SEO Optimization', 'Performance Tracking'].map((item) => (
                                <li key={item} className="flex items-center gap-3 text-white/80">
                                    <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 text-center">
                <div className="max-w-2xl mx-auto px-6 space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to dominate search?</h2>
                    <Link
                        href="/contact"
                        className="inline-block px-12 py-4 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-sm bg-white/5"
                    >
                        Start Your SEO Journey
                    </Link>
                </div>
            </section>
        </div>
    )
}
