'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Target, Heart, BookOpen, Map, User, ArrowRight } from 'lucide-react'
import { Navigation } from '@/components/navigation'

export default function AboutHub() {
    const gateways = [
        {
            title: 'Our Missions',
            description: 'The driving force behind every strategic decision and digital innovation.',
            href: '/about/missions',
            icon: Target,
            color: 'from-blue-500/20 to-cyan-500/20'
        },
        {
            title: 'Core Values',
            description: 'The principles that define our culture and our client relationships.',
            href: '/about/values',
            icon: Heart,
            color: 'from-red-500/20 to-orange-500/20'
        },
        {
            title: 'Our Story',
            description: 'The evolution of DMKV from a vision to a digital hospitality leader.',
            href: '/about/story',
            icon: BookOpen,
            color: 'from-purple-500/20 to-pink-500/20'
        },
        {
            title: 'Our Journey',
            description: 'Milestones and transformations that shaped our current expertise.',
            href: '/about/journey',
            icon: Map,
            color: 'from-emerald-500/20 to-teal-500/20'
        },
        {
            title: 'The Founder',
            description: 'Meet Keertan Vijaykumar, the visionary behind DMKV House of Marketing.',
            href: '/about-keertan-vijaykumar',
            icon: User,
            color: 'from-amber-500/20 to-yellow-500/20'
        }
    ]

    return (
        <div className="relative min-h-screen bg-black overflow-hidden selection:bg-white/10 selection:text-white">
            {/* Ambient background elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-1/4 w-[1000px] h-[1000px] bg-white/[0.02] rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-0 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[120px]" />
            </div>

            <Navigation />

            <main className="relative z-10 pt-40 pb-20 px-6 container mx-auto">
                <div className="max-w-6xl mx-auto space-y-24">
                    {/* Hero Section */}
                    <header className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border-white/10 text-xs font-black uppercase tracking-[0.2em] text-white/40"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                            Our Identity
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-7xl md:text-9xl font-bold text-white tracking-tighter leading-none"
                        >
                            Discover <span className="text-white/20">DMKV</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed font-light"
                        >
                            More than a marketing house — we're a vision-driven force dedicated to rewriting the digital legacy of brands worldwide.
                        </motion.p>
                    </header>

                    {/* Gateway Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {gateways.map((gate, idx) => (
                            <motion.div
                                key={gate.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + idx * 0.1 }}
                            >
                                <Link
                                    href={gate.href}
                                    className="group block relative h-full glass p-10 rounded-[2.5rem] border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${gate.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                    <div className="relative z-10 flex flex-col h-full justify-between gap-12">
                                        <div className="space-y-6">
                                            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white/60 group-hover:text-white transition-colors border border-white/5">
                                                <gate.icon size={28} strokeWidth={1.5} />
                                            </div>
                                            <div className="space-y-3">
                                                <h3 className="text-3xl font-bold text-white tracking-tight">{gate.title}</h3>
                                                <p className="text-gray-400 leading-relaxed font-light">
                                                    {gate.description}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2 text-white/40 group-hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">
                                            Explore Section <ArrowRight size={16} />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Bottom Narrative */}
                    <motion.section
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="py-24 border-t border-white/5 grid md:grid-cols-2 gap-16 items-center"
                    >
                        <div className="space-y-8">
                            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">The Core Principles of the House.</h2>
                            <p className="text-lg text-gray-400 leading-relaxed font-light">
                                At DMKV House of Marketing, we don't just execute campaigns; we architect experiences. Our philosophy is rooted in technical precision, visual excellence, and a deep understanding of human connection in the digital age.
                            </p>
                            <div className="flex items-center gap-12 pt-4">
                                <div>
                                    <div className="text-3xl font-bold text-white">100%</div>
                                    <div className="text-xs text-white/40 uppercase tracking-widest mt-1">Transparency</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-white">Global</div>
                                    <div className="text-xs text-white/40 uppercase tracking-widest mt-1">Vision</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-white">Premium</div>
                                    <div className="text-xs text-white/40 uppercase tracking-widest mt-1">Execution</div>
                                </div>
                            </div>
                        </div>
                        <div className="glass p-1 rounded-[3rem] border-white/10 aspect-video relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent z-10" />
                            <div className="w-full h-full bg-neutral-900 rounded-[2.8rem] flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity duration-700">
                                    <h2 className="text-[12rem] font-black text-white whitespace-nowrap">DMKV</h2>
                                </div>
                                <div className="relative z-20 text-center space-y-4">
                                    <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto backdrop-blur-md border border-white/20">
                                        <div className="w-3 h-3 bg-white rounded-full animate-ping" />
                                    </div>
                                    <p className="text-xs font-black uppercase tracking-[0.4em] text-white">Live Strategy Room</p>
                                </div>
                            </div>
                        </div>
                    </motion.section>
                </div>
            </main>
        </div>
    )
}
