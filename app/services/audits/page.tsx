'use client'

import { Navigation } from '@/components/navigation'
import { ServiceFlow } from '@/components/service-flow'
import { motion } from 'framer-motion'
import Link from 'next/link'

const flowSteps = [
    {
        title: "Eco-System Mapping",
        description: "Creating a complete map of your digital touchpoints, from social profiles to ad accounts."
    },
    {
        title: "Deep Diagnostics",
        description: "Analyzing technical performance, UX bottlenecks, and conversion leakages."
    },
    {
        title: "Competitive Gap Analysis",
        description: "Benchmarking your digital presence against industry leaders to identify opportunities."
    },
    {
        title: "Strategic Resolution",
        description: "Developing a prioritized roadmap of fixes and optimizations to improve overall ROI."
    }
]

export default function DigitalAuditsPage() {
    return (
        <div className="relative min-h-screen bg-black overflow-hidden">
            <Navigation />

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 px-6">
                <div className="max-w-4xl mx-auto text-center space-y-8 animate-fadeInUp">
                    <h1 className="text-5xl md:text-8xl font-bold font-serif text-white tracking-tighter">
                        Audits
                    </h1>
                    <p className="text-xl md:text-2xl font-light text-white/60 uppercase tracking-[0.3em]">
                        Diagnostic Digital Clarity
                    </p>
                    <div className="h-px w-24 bg-white/20 mx-auto" />
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
                        Blind spots are expensive. We provide the clarity you need to optimize your digital ecosystem for maximum performance.
                    </p>
                </div>
            </section>

            {/* Process Flow */}
            <ServiceFlow steps={flowSteps} />

            {/* Detailed content section */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                    <div className="glass p-10 rounded-3xl space-y-6">
                        <h3 className="text-2xl font-semibold text-white">UX & Conversion Audit</h3>
                        <p className="text-gray-400 leading-relaxed">
                            We analyze how users interact with your site, identifying friction points that prevent them from taking action.
                        </p>
                        <ul className="space-y-3">
                            {['Heatmap & Session Analysis', 'Checkout Flow Optimization', 'Mobile UX Review', 'A/B Test Ideation'].map((item) => (
                                <li key={item} className="flex items-center gap-3 text-white/80">
                                    <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="glass p-10 rounded-3xl space-y-6">
                        <h3 className="text-2xl font-semibold text-white">Technical Infrastructure</h3>
                        <p className="text-gray-400 leading-relaxed">
                            A solid foundation is required for scale. We audit your tracking, security, and integration stability.
                        </p>
                        <ul className="space-y-3">
                            {['GTM & Pixel Verification', 'SSL & Security Review', 'API Integration Stability', 'Server Performance Analysis'].map((item) => (
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
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Find your digital blind spots.</h2>
                    <Link
                        href="/contact"
                        className="inline-block px-12 py-4 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-sm bg-white/5"
                    >
                        Request an Audit
                    </Link>
                </div>
            </section>
        </div>
    )
}
