'use client'

import { Navigation } from '@/components/navigation'
import { ServiceFlow } from '@/components/service-flow'
import { motion } from 'framer-motion'
import Link from 'next/link'

const flowSteps = [
    {
        title: "Discovery & Fit",
        description: "Identifying creators whose audience aligns perfectly with your brand values and mission."
    },
    {
        title: "Strategic Outreach",
        description: "Managing relationships and negotiations to secure high-impact, authentic partnerships."
    },
    {
        title: "Content Calibration",
        description: "Briefing and collaborative planning to ensure storytelling resonates and drives action."
    },
    {
        title: "Impact Analysis",
        description: "Tracking engagement, conversions, and sentiment to measure the true reach of the campaign."
    }
]

export default function InfluencersPage() {
    return (
        <div className="relative min-h-screen bg-black overflow-hidden">
            <Navigation />

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 px-6">
                <div className="max-w-4xl mx-auto text-center space-y-8 animate-fadeInUp">
                    <h1 className="text-5xl md:text-8xl font-bold font-serif text-white tracking-tighter">
                        Influencers
                    </h1>
                    <p className="text-xl md:text-2xl font-light text-white/60 uppercase tracking-[0.3em]">
                        Authentic Voice Amplification
                    </p>
                    <div className="h-px w-24 bg-white/20 mx-auto" />
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
                        Humanize your brand through authentic storytelling. We connect you with voices that people trust, driving deeper engagement and loyalty.
                    </p>
                </div>
            </section>

            {/* Process Flow */}
            <ServiceFlow steps={flowSteps} />

            {/* Detailed content section */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                    <div className="glass p-10 rounded-3xl space-y-6">
                        <h3 className="text-2xl font-semibold text-white">Full-Service Management</h3>
                        <p className="text-gray-400 leading-relaxed">
                            We handle the end-to-end complexity of creator partnerships, from legal contracts to content approvals and payments.
                        </p>
                        <ul className="space-y-3">
                            {['Creator Identification', 'Contract Negotiation', 'Campaign Briefing', 'Content Approval Workflows'].map((item) => (
                                <li key={item} className="flex items-center gap-3 text-white/80">
                                    <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="glass p-10 rounded-3xl space-y-6">
                        <h3 className="text-2xl font-semibold text-white">Strategic Amplification</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Influencer content shouldn't end with a post. We whitelist top-performing content for paid social to maximize ROI and reach.
                        </p>
                        <ul className="space-y-3">
                            {['Influencer Whitelisting', 'Multi-Platform Activation', 'Engagement Monitoring', 'UGC Repurposing Strategy'].map((item) => (
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
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Partner with authentic voices.</h2>
                    <Link
                        href="/contact"
                        className="inline-block px-12 py-4 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-sm bg-white/5"
                    >
                        Start a Collaboration
                    </Link>
                </div>
            </section>
        </div>
    )
}
