'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Rocket, Target, Zap, Globe, BarChart, Shield, ArrowRight, Sparkles } from 'lucide-react'
import { Navigation } from '@/components/navigation'

export default function ExplorePage() {
    const innovations = [
        {
            icon: Rocket,
            title: 'Digital Acceleration',
            description: 'We fast-track your brand\'s growth using advanced algorithmic strategies and high-velocity performance marketing.',
            color: 'from-blue-600/20 to-cyan-400/20'
        },
        {
            icon: Target,
            title: 'Precision Targeting',
            description: 'Hyper-personalized audience mapping using behavioral intelligence to ensure zero-waste marketing spend.',
            color: 'from-purple-600/20 to-pink-400/20'
        },
        {
            icon: Zap,
            title: 'Creative Excellence',
            description: 'The intersection of artistic storytelling and strategic distribution, creating content that commands attention.',
            color: 'from-orange-600/20 to-amber-400/20'
        },
        {
            icon: Globe,
            title: 'Global Scale',
            description: 'Breaking regional barriers through decentralized marketing frameworks designed for international resonance.',
            color: 'from-emerald-600/20 to-teal-400/20'
        },
        {
            icon: BarChart,
            title: 'Data Intelligence',
            description: 'Turning complex data sets into predictive models that anticipate market shifts before they happen.',
            color: 'from-indigo-600/20 to-blue-400/20'
        },
        {
            icon: Shield,
            title: 'Brand Authority',
            description: 'Establishing untouchable industry leadership through ethical transparency and verified performance results.',
            color: 'from-neutral-600/20 to-neutral-400/20'
        }
    ]

    return (
        <div className="relative min-h-screen bg-black overflow-hidden selection:bg-white/10 selection:text-white">
            {/* Dynamic Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-[1200px] h-[1200px] bg-white/[0.01] rounded-full blur-[150px]" />
                <div className="absolute -bottom-1/4 -left-1/4 w-[900px] h-[900px] bg-white/[0.01] rounded-full blur-[150px]" />
            </div>

            <Navigation />

            <main className="relative z-10 pt-40 pb-20 px-6 container mx-auto">
                <div className="max-w-6xl mx-auto space-y-32">
                    {/* Innovation Header */}
                    <div className="text-center space-y-10 max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-6 py-2 glass rounded-full border-white/10 text-xs font-black uppercase tracking-[0.4em] text-white/60 mb-8"
                        >
                            <Sparkles size={14} className="text-blue-400" />
                            The Future of Marketing
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-7xl md:text-9xl font-bold text-white tracking-tighter leading-[0.8] mb-12"
                        >
                            Explore <br />
                            <span className="text-white/10">Innovation.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed"
                        >
                            Step into the laboratory where brand legacies are forged. At DMKV, we explore the outer limits of digital reach and strategic intelligence.
                        </motion.p>
                    </div>

                    {/* Labs Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {innovations.map((lab, idx) => (
                            <motion.div
                                key={lab.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group glass p-12 rounded-[3.5rem] border-white/5 hover:border-white/20 transition-all duration-700 relative overflow-hidden"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${lab.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                                <div className="relative z-10 space-y-10">
                                    <div className="w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center text-white/40 group-hover:text-white group-hover:bg-white/10 transition-all duration-500 border border-white/5">
                                        <lab.icon size={36} strokeWidth={1} />
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-3xl font-bold text-white tracking-tight">{lab.title}</h3>
                                        <p className="text-gray-500 leading-relaxed font-light group-hover:text-gray-300 transition-colors">
                                            {lab.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Experimental Section */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="glass p-16 md:p-24 rounded-[4rem] border-white/5 relative overflow-hidden text-center"
                    >
                        <div className="absolute inset-0 bg-white/[0.02] animate-pulse" />
                        <div className="relative z-10 space-y-12">
                            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">Beyond Conventional <br /> Strategy.</h2>
                            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
                                We are constantly testing, breaking, and rebuilding digital frameworks to find the next breakthrough for your brand.
                            </p>
                            <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
                                <Link
                                    href="/contact"
                                    className="px-12 py-5 bg-white text-black font-black rounded-3xl hover:bg-neutral-200 transition-all duration-300 group flex items-center gap-3"
                                >
                                    Start Your Acceleration <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                                </Link>
                                <Link
                                    href="/services"
                                    className="px-12 py-5 glass border-white/10 text-white font-bold rounded-3xl hover:bg-white/10 transition-all duration-300"
                                >
                                    See Our Frameworks
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </main>
        </div>
    )
}
