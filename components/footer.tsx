'use client'

import Link from 'next/link'
import { MessageCircle, Heart, Linkedin } from 'lucide-react'

export function Footer() {
    const links = [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Services', href: '/services' },
        { label: 'Blog', href: '/blog' },
        { label: 'Contact Us', href: '/contact' },
    ]

    const legal = [
        { label: 'FAQ', href: '/digital-marketing-faq' },
        { label: 'Sitemap', href: '/sitemap.xml' },
        { label: 'Policies', href: '/privacy-policy' },
    ]

    const social = [
        { icon: MessageCircle, href: 'https://wa.me/918861771361' },
        { icon: Linkedin, href: 'https://www.linkedin.com/company/104788746/admin/dashboard/' },
    ]

    return (
        <footer className="w-full bg-black/50 border-t border-white/10 pt-16 pb-8">
            <div className="max-w-6xl mx-auto px-6">
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
