'use client'

import { Navigation } from '@/components/navigation'
import { ServiceFlow } from '@/components/service-flow'
import { motion } from 'framer-motion'
import Link from 'next/link'

const flowSteps = [
    {
        title: "Insight & Research",
        description: "Understanding your audience's needs, pain points, and natural search behavior."
    },
    {
        title: "Strategy & Clusters",
        description: "Mapping out content pillars and clusters to establish topical authority and SEO strength."
    },
    {
        title: "Creative Production",
        description: "Crafting high-value articles, whitepapers, and assets that resonate with your target audience."
    },
    {
        title: "Distribution & Promotion",
        description: "Multi-channel amplification to ensure your content reaches the right people at the right time."
    }
]

export default function ContentMarketingPage() {
    return (
        <div className="relative min-h-screen bg-black overflow-hidden">
            <Navigation />

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 px-6">
                <div className="max-w-4xl mx-auto text-center space-y-8 animate-fadeInUp">
                    <h1 className="text-5xl md:text-8xl font-bold font-serif text-white tracking-tighter">
                        Content
                    </h1>
                    <p className="text-xl md:text-2xl font-light text-white/60 uppercase tracking-[0.3em]">
                        Strategic Storytelling
                    </p>
                    <div className="h-px w-24 bg-white/20 mx-auto" />
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
                        Content is the currency of trust. We create strategic assets that engage your audience and build lasting brand authority.
                    </p>
                </div>
            </section>

            {/* Process Flow */}
            <ServiceFlow steps={flowSteps} />

            {/* Detailed content section */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                    <div className="glass p-10 rounded-3xl space-y-6">
                        <h3 className="text-2xl font-semibold text-white">Topical Authority</h3>
                        <p className="text-gray-400 leading-relaxed">
                            We don't just write blog posts. We build comprehensive content ecosystems that answer user intent and satisfy search engine algorithms.
                        </p>
                        <ul className="space-y-3">
                            {['Content Strategy Development', 'SEO-Optimized Copywriting', 'Whitepaper & Guide Creation', 'Case Study Production'].map((item) => (
                                <li key={item} className="flex items-center gap-3 text-white/80">
                                    <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="glass p-10 rounded-3xl space-y-6">
                        <h3 className="text-2xl font-semibold text-white">Full-Cycle Production</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Our team manages every aspect of content creation, from initial ideation and research to editorial review and publication.
                        </p>
                        <ul className="space-y-3">
                            {['Editorial Calendar Management', 'Expert Lead Research', 'Visual Asset Design', 'CMS Integration & Management'].map((item) => (
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
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to tell your story?</h2>
                    <Link
                        href="/contact"
                        className="inline-block px-12 py-4 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-sm bg-white/5"
                    >
                        Start Creating
                    </Link>
                </div>
            </section>
        </div>
    )
}
