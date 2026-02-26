'use client'

import { Navigation } from '@/components/navigation'
import { ServiceFlow } from '@/components/service-flow'
import { motion } from 'framer-motion'
import Link from 'next/link'

const flowSteps = [
    {
        title: "Persona & Voice",
        description: "Defining your social identity and tone of voice to resonate with specific platform dynamics."
    },
    {
        title: "Content Calendar",
        description: "Strategic planning of posts, reels, and stories to maintain a consistent and engaging presence."
    },
    {
        title: "Community Management",
        description: "Active engagement with your followers to build trust, loyalty, and brand advocacy."
    },
    {
        title: "Growth Analytics",
        description: "Measuring virality, engagement rates, and follower growth to refine the ongoing strategy."
    }
]

export default function SocialMediaPage() {
    return (
        <div className="relative min-h-screen bg-black overflow-hidden">
            <Navigation />

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 px-6">
                <div className="max-w-4xl mx-auto text-center space-y-8 animate-fadeInUp">
                    <h1 className="text-5xl md:text-8xl font-bold font-serif text-white tracking-tighter">
                        Social
                    </h1>
                    <p className="text-xl md:text-2xl font-light text-white/60 uppercase tracking-[0.3em]">
                        Community & Connection
                    </p>
                    <div className="h-px w-24 bg-white/20 mx-auto" />
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
                        Build a brand that people love to follow. We turn passive followers into active advocates through strategic social media management.
                    </p>
                </div>
            </section>

            {/* Process Flow */}
            <ServiceFlow steps={flowSteps} />

            {/* Detailed content section */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                    <div className="glass p-10 rounded-3xl space-y-6">
                        <h3 className="text-2xl font-semibold text-white">Platform Strategy</h3>
                        <p className="text-gray-400 leading-relaxed">
                            We optimize your presence across Instagram, LinkedIn, TikTok, and Twitter, tailoring content formats for maximum impact on each platform.
                        </p>
                        <ul className="space-y-3">
                            {['Profile Optimization', 'Platform-Specific Strategy', 'Hashtag & Keyword Mapping', 'Competitive Benchmarking'].map((item) => (
                                <li key={item} className="flex items-center gap-3 text-white/80">
                                    <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="glass p-10 rounded-3xl space-y-6">
                        <h3 className="text-2xl font-semibold text-white">Engagement-First Content</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Our creative team produces native-platform content that stops the scroll and starts conversations.
                        </p>
                        <ul className="space-y-3">
                            {['Short-Form Video (Reels/TikTok)', 'Visual Content Creation', 'Caption & Storytelling Copy', 'Interactive Stories & Polls'].map((item) => (
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
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to grow your community?</h2>
                    <Link
                        href="/contact"
                        className="inline-block px-12 py-4 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-sm bg-white/5"
                    >
                        Enhance Your Socials
                    </Link>
                </div>
            </section>
        </div>
    )
}
