'use client'

import React from 'react'
import Link from 'next/link'
import { Mail, Phone, MessageCircle, ShieldCheck, Zap, LifeBuoy } from 'lucide-react'
import { motion } from 'framer-motion'
import { Navigation } from '@/components/navigation'

export default function SupportPage() {
    const supportChannels = [
        {
            title: 'Email Support',
            description: 'Direct access to our expert team for complex queries.',
            value: 'hello@dmkvhouseofmarketing.com',
            href: 'mailto:hello@dmkvhouseofmarketing.com',
            icon: Mail,
            color: 'from-blue-500/20 to-cyan-500/20'
        },
        {
            title: 'Phone Consultation',
            description: 'Speak directly with our strategy consultants.',
            value: '+91 8861771361',
            href: 'tel:+918861771361',
            icon: Phone,
            color: 'from-purple-500/20 to-pink-500/20'
        },
        {
            title: 'Instant Message',
            description: 'Quick answers via our dedicated WhatsApp channel.',
            value: 'Message on WhatsApp',
            href: 'https://wa.me/918861771361',
            icon: MessageCircle,
            color: 'from-emerald-500/20 to-teal-500/20'
        }
    ]

    return (
        <div className="relative min-h-screen bg-black overflow-hidden selection:bg-white/10 selection:text-white">
            {/* Ambient Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 -left-1/4 w-[1000px] h-[1000px] bg-white/[0.02] rounded-full blur-[120px] animate-pulse" />
                <div className="absolute -bottom-1/4 -right-1/4 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[120px] transition-opacity duration-1000" />
            </div>

            <Navigation />

            <main className="relative z-10 pt-40 pb-20 px-6 container mx-auto">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <header className="mb-20 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border-white/10 text-xs font-black uppercase tracking-[0.2em] text-white/40 mb-4"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Active Support
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-6xl md:text-8xl font-bold text-white tracking-tighter"
                        >
                            Global <span className="text-white/20">Support</span> Center
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-gray-400 max-w-2xl leading-relaxed"
                        >
                            We're here to ensure your brand's journey is seamless. Connect with us through our dedicated channels for premium strategic assistance.
                        </motion.p>
                    </header>

                    {/* Support Cards Grid */}
                    <div className="grid md:grid-cols-3 gap-6 mb-24">
                        {supportChannels.map((channel, idx) => (
                            <motion.a
                                key={channel.title}
                                href={channel.href}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + idx * 0.1 }}
                                className="group glass p-8 rounded-[2rem] border-white/5 hover:border-white/10 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${channel.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                <div className="relative z-10 space-y-6">
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/60 group-hover:text-white transition-colors">
                                        <channel.icon size={24} />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="font-bold text-white text-lg tracking-tight">{channel.title}</h3>
                                        <p className="text-sm text-gray-500 leading-relaxed">{channel.description}</p>
                                    </div>
                                    <div className="pt-2 text-sm font-medium text-white/40 group-hover:text-white transition-colors break-all">
                                        {channel.value}
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    {/* Secondary Info */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 gap-12 pt-20 border-t border-white/5"
                    >
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-3 px-3 py-1 bg-white/5 rounded-lg border border-white/5">
                                <ShieldCheck size={16} className="text-emerald-500" />
                                <span className="text-[10px] font-bold uppercase tracking-widest text-white">Trust & Security</span>
                            </div>
                            <h4 className="text-2xl font-bold text-white">Secure Communications</h4>
                            <p className="text-gray-400 leading-relaxed">
                                All strategic discussions and data shares through our support channels are encrypted and handled with the highest level of brand confidentiality.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-3 px-3 py-1 bg-white/5 rounded-lg border border-white/5">
                                <Zap size={16} className="text-purple-500" />
                                <span className="text-[10px] font-bold uppercase tracking-widest text-white">Response Priority</span>
                            </div>
                            <h4 className="text-2xl font-bold text-white">Rapid Resolution</h4>
                            <p className="text-gray-400 leading-relaxed">
                                Our support team operates globally to provide response times within 12-24 hours for all qualified strategic brand inquiries.
                            </p>
                        </div>
                    </motion.div>

                    {/* CTA Footer */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-32 glass p-12 rounded-[3rem] border-white/5 text-center space-y-8 relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5" />
                        <LifeBuoy size={48} className="mx-auto text-white/10" />
                        <div className="space-y-4 relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Need a customized solution?</h2>
                            <p className="text-gray-400 max-w-lg mx-auto">
                                For deep-dive strategic partnerships, it's best to book a formal consultation directly with our management.
                            </p>
                        </div>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 relative z-10">
                            <Link
                                href="/contact"
                                className="px-10 py-4 bg-white text-black font-bold rounded-2xl hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
                            >
                                Book Consultation
                            </Link>
                            <Link
                                href="/"
                                className="px-10 py-4 bg-white/5 text-white font-bold rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                            >
                                Back to Home
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </main>
        </div>
    )
}
