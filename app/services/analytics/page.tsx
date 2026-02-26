'use client'

import { Navigation } from '@/components/navigation'
import { ServiceFlow } from '@/components/service-flow'
import { motion } from 'framer-motion'
import Link from 'next/link'

const flowSteps = [
    {
        title: "Tracking Protocol",
        description: "Setting up a clean, reliable data foundation across all platforms and user touchpoints."
    },
    {
        title: "Data Attribution",
        description: "Identifying which channels and campaigns are truly driving growth and conversion."
    },
    {
        title: "Predictive Insights",
        description: "Using historical data to forecast trends and model potential future growth scenarios."
    },
    {
        title: "Executive Synthesis",
        description: "Transforming complex data sets into clear, actionable reporting for strategic decision making."
    }
]

export default function DataAnalyticsPage() {
    return (
        <div className="relative min-h-screen bg-black overflow-hidden">
            <Navigation />

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 px-6">
                <div className="max-w-4xl mx-auto text-center space-y-8 animate-fadeInUp">
                    <h1 className="text-5xl md:text-8xl font-bold font-serif text-white tracking-tighter">
                        Analytics
                    </h1>
                    <p className="text-xl md:text-2xl font-light text-white/60 uppercase tracking-[0.3em]">
                        Precision Growth Insights
                    </p>
                    <div className="h-px w-24 bg-white/20 mx-auto" />
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
                        Data is meaningless without direction. We provide the strategic insights that turn information into competitive advantage.
                    </p>
                </div>
            </section>

            {/* Process Flow */}
            <ServiceFlow steps={flowSteps} />

            {/* Detailed content section */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                    <div className="glass p-10 rounded-3xl space-y-6">
                        <h3 className="text-2xl font-semibold text-white">Full-Stack Analytics</h3>
                        <p className="text-gray-400 leading-relaxed">
                            We implement and manage your entire data stack, ensuring that every click and conversation is accurately tracked and analyzed.
                        </p>
                        <ul className="space-y-3">
                            {['GA4 Implementation & Audit', 'Custom Event Tracking', 'Multi-Touch Attribution', 'Server-Side Tagging'].map((item) => (
                                <li key={item} className="flex items-center gap-3 text-white/80">
                                    <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="glass p-10 rounded-3xl space-y-6">
                        <h3 className="text-2xl font-semibold text-white">Performance Visualization</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Stop digging through spreadsheets. We build automated dashboards that provide a real-time view of your marketing performance.
                        </p>
                        <ul className="space-y-3">
                            {['Looker Studio Reporting', 'KPI Dashboard Design', 'Real-Time ROI Tracking', 'Customer LTV Analysis'].map((item) => (
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
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Unlock the power of your data.</h2>
                    <Link
                        href="/contact"
                        className="inline-block px-12 py-4 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-sm bg-white/5"
                    >
                        Request Insight
                    </Link>
                </div>
            </section>
        </div>
    )
}
