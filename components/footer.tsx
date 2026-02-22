'use client'

import Link from 'next/link'
import { MessageCircle, Heart, Linkedin, Mail } from 'lucide-react'

export function Footer() {
    const links = [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Services', href: '/services' },
        { label: 'Blog', href: '/blog' },
        { label: 'Contact Us', href: '/contact' },
    ]

    const legal = [
        { label: 'Privacy Policy', href: '/privacy-policy' },
        { label: 'Terms & Conditions', href: '/terms-conditions' },
        { label: 'Refund Policy', href: '/refund-cancellation' },
    ]

    const social = [
        { icon: Mail, href: 'mailto:sales@dmkvhouseofmarketing.com' },
        { icon: MessageCircle, href: 'https://wa.me/918861771361' },
        { icon: Linkedin, href: 'https://www.linkedin.com/company/104788746/admin/dashboard/' },
    ]

    return (
        <footer className="w-full bg-black/50 border-t border-white/10 pt-16 pb-8">
            <div className="max-w-6xl mx-auto px-6">
                {/* Trust Badges Section - Between Content and Footer Grid */}
                <div className="flex flex-row flex-wrap justify-center md:justify-start gap-6 mb-16 pb-12 border-b border-white/5">
                    <div className="flex items-center gap-3 glass px-5 py-3 rounded-2xl border-white/10 hover:bg-white/5 transition-colors group">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-400">
                            <path d="M12 2L14.85 5.5H18.5V9.15L22 12L18.5 14.85V18.5H14.85L12 22L9.15 18.5H5.5V14.85L2 12L5.5 9.15V5.5H9.15L12 2Z" fill="currentColor" />
                            <path d="M9 12L11 14L15 10" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-xs font-bold text-white uppercase tracking-[0.2em]">Meta Verified</span>
                    </div>
                    <div className="flex items-center gap-3 glass px-5 py-3 rounded-2xl border-white/10 hover:bg-white/5 transition-colors group">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="#EA4335" />
                        </svg>
                        <div className="flex flex-col">
                            <span className="text-xs font-bold text-white uppercase tracking-[0.2em]">Google Ads</span>
                            <span className="text-[9px] text-white/50 uppercase tracking-widest -mt-0.5">Verified Merchant</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <span className="text-2xl font-serif font-bold text-white">DMKV | House of Marketing</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Transforming brands through strategic digital marketing and creative excellence.
                        </p>
                        <div className="flex gap-4">
                            {social.map((item, idx) => (
                                <Link
                                    key={idx}
                                    href={item.href}
                                    className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
                                >
                                    <item.icon size={18} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Explore</h4>
                        <ul className="space-y-4">
                            {links.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal/Support */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Support</h4>
                        <ul className="space-y-4">
                            {legal.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CTA / Location */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Get Started</h4>
                        <p className="text-gray-400 text-sm mb-6">
                            Ready to elevate your brand? Let's create something extraordinary together.
                        </p>
                        <Link
                            href="/services"
                            className="inline-block px-6 py-3 rounded-full border border-white/20 text-white text-sm font-medium hover:bg-white/10 transition-colors"
                        >
                            Explore Services
                        </Link>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-xs">
                        &copy; 2026 DMKV House of Marketing. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2 text-gray-500 text-xs font-medium tracking-wide whitespace-nowrap">
                        <span>MADE IN INDIA</span>
                        <Heart size={12} className="text-red-500 fill-red-500" />
                    </div>
                </div>
            </div>
        </footer>
    )
}
