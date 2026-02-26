'use client'

import { Navigation } from '@/components/navigation'
import { ServiceFlow } from '@/components/service-flow'
import { motion } from 'framer-motion'
import Link from 'next/link'

const flowSteps = [
    {
        title: "Strategy & Funnel",
        description: "Defining your customer journey and mapping high-conversion touchpoints across the funnel."
    },
    {
        title: "Campaign Setup",
        description: "Building structured ad sets, precise targeting, and creative testing frameworks."
    },
    {
        title: "Optimized Execution",
        description: "Real-time monitoring and data-driven adjustments to maximize ROAS and minimize CAC."
    },
    {
        title: "Scaling & Insights",
        description: "Expanding successful campaigns into new territories and refining long-term growth models."
    }
]

export default function PerformancePage() {
    return (
        <div className="relative min-h-screen bg-black overflow-hidden">
            <Navigation />

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 px-6">
                <div className="max-w-4xl mx-auto text-center space-y-8 animate-fadeInUp">
                    <h1 className="text-5xl md:text-8xl font-bold font-serif text-white tracking-tighter">
                        Performance
                    </h1>
                    <p className="text-xl md:text-2xl font-light text-white/60 uppercase tracking-[0.3em]">
                        Data-Driven Scaling
                    </p>
                    <div className="h-px w-24 bg-white/20 mx-auto" />
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
                        Measure what matters. We deliver rapid growth through structured paid media campaigns and relentless funnel optimization.
                    </p>
                </div>
            </section>

            {/* Process Flow */}
            <ServiceFlow steps={flowSteps} />

            {/* Detailed content section */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                    <div className="glass p-10 rounded-3xl space-y-6">
                        <h3 className="text-2xl font-semibold text-white">Full-Funnel Advertising</h3>
                        <p className="text-gray-400 leading-relaxed">
                            We manage campaigns across todas's major platforms, ensuring consistent messaging and optimal budget allocation throughout the buyer's journey.
                        </p>
                        <ul className="space-y-3">
                            {['Meta Ads Management', 'Google Search & Display', 'LinkedIn B2B Advertising', 'Retargeting Strategies'].map((item) => (
                                <li key={item} className="flex items-center gap-3 text-white/80">
                                    <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="glass p-10 rounded-3xl space-y-6">
                        <h3 className="text-2xl font-semibold text-white">Advanced Optimization</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Performance marketing is a science. We use rigorous A/B testing and algorithmic bidding to ensure your budget is invested for maximum return.
                        </p>
                        <ul className="space-y-3">
                            {['Creative A/B Testing', 'Landing Page Optimization', 'Conversion Rate (CRO)', 'Predictive LTV Modeling'].map((item) => (
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
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to scale faster?</h2>
                    <Link
                        href="/contact"
                        className="inline-block px-12 py-4 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-sm bg-white/5"
                    >
                        Scale Your Brand
                    </Link>
                </div>
            </section>
        </div>
    )
}
