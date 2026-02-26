'use client'

import { Navigation } from '@/components/navigation'
import { ServiceFlow } from '@/components/service-flow'
import { motion } from 'framer-motion'
import Link from 'next/link'

const flowSteps = [
    {
        title: "Brand Discovery",
        description: "Uncovering your unique DNA, competitive advantages, and core brand purpose."
    },
    {
        title: "Identity Development",
        description: "Defining your verbal and visual identity to ensure a consistent and premium brand image."
    },
    {
        title: "Market Positioning",
        description: "Strategic placement within your industry to capture mindshare and stand out from competitors."
    },
    {
        title: "Rollout & Governance",
        description: "Implementation guidelines to maintain brand integrity across every touchpoint and team."
    }
]

export default function BrandStrategyPage() {
    return (
        <div className="relative min-h-screen bg-black overflow-hidden">
            <Navigation />

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 px-6">
                <div className="max-w-4xl mx-auto text-center space-y-8 animate-fadeInUp">
                    <h1 className="text-5xl md:text-8xl font-bold font-serif text-white tracking-tighter">
                        Strategy
                    </h1>
                    <p className="text-xl md:text-2xl font-light text-white/60 uppercase tracking-[0.3em]">
                        Foundation for Excellence
                    </p>
                    <div className="h-px w-24 bg-white/20 mx-auto" />
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
                        Strategy is the bridge between your vision and market reality. We define the clear path to your brand's long-term authority.
                    </p>
                </div>
            </section>

            {/* Process Flow */}
            <ServiceFlow steps={flowSteps} />

            {/* Detailed content section */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                    <div className="glass p-10 rounded-3xl space-y-6">
                        <h3 className="text-2xl font-semibold text-white">Visual Identity</h3>
                        <p className="text-gray-400 leading-relaxed">
                            We translate your brand's essence into a premium visual language that commands attention and communicates professionalism.
                        </p>
                        <ul className="space-y-3">
                            {['Logo & Mark Development', 'Color Palette & Typography', 'Visual Style Guides', 'Asset Libraries'].map((item) => (
                                <li key={item} className="flex items-center gap-3 text-white/80">
                                    <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="glass p-10 rounded-3xl space-y-6">
                        <h3 className="text-2xl font-semibold text-white">Verbal Identity</h3>
                        <p className="text-gray-400 leading-relaxed">
                            What you say is as important as how you look. We define your brand's voice, messaging pillars, and core narratives.
                        </p>
                        <ul className="space-y-3">
                            {['Tone of Voice Definition', 'Core Messaging Framework', 'Brand Narrative Development', 'Tagline & Slogan Creation'].map((item) => (
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
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to build your legacy?</h2>
                    <Link
                        href="/contact"
                        className="inline-block px-12 py-4 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-sm bg-white/5"
                    >
                        Start Strategy
                    </Link>
                </div>
            </section>
        </div>
    )
}
