'use client'

import { Navigation } from '@/components/navigation'

const services = [
    {
        id: 1,
        title: 'Search Engine Optimization (SEO)',
        category: 'Growth',
        description: 'Boost your visibility and climb the rankings with data-driven SEO strategies that drive organic traffic.',
        tags: ['On-Page', 'Off-Page', 'Technical SEO'],
    },
    {
        id: 2,
        title: 'Performance Marketing',
        category: 'Advertising',
        description: 'Maximize ROI with targeted paid campaigns across Google, Meta, and LinkedIn.',
        tags: ['PPC', 'Social Ads', 'Retargeting'],
    },
    {
        id: 3,
        title: 'Influencer Collaboration',
        category: 'PR',
        description: 'Connect with authentic voices to amplify your brand message and reach new audiences.',
        tags: ['Outreach', 'Management', 'Campaigns'],
    },
    {
        id: 4,
        title: 'Content Marketing',
        category: 'Content',
        description: 'Engage your audience with compelling storytelling that builds trust and authority.',
        tags: ['Strategy', 'Copywriting', 'Distribution'],
    },
    {
        id: 5,
        title: 'Social Media Management',
        category: 'Social',
        description: 'Build a loyal community and maintain an active, engaging presence on all major platforms.',
        tags: ['Community', 'Scheduling', 'Analytics'],
    },
    {
        id: 6,
        title: 'Brand Strategy',
        category: 'Strategy',
        description: 'Define your unique voice and position your brand for long-term success in the market.',
        tags: ['Identity', 'Positioning', 'Consulting'],
    },
    {
        id: 7,
        title: 'Digital Audits',
        category: 'Analysis',
        description: 'Comprehensive analysis of your digital presence to identify opportunities and optimize performance.',
        tags: ['Site Audit', 'UX Review', 'Competitor Analysis'],
    },
    {
        id: 8,
        title: 'Data Analytics',
        category: 'Insights',
        description: 'Transform raw data into actionable insights to guide your marketing decisions and growth.',
        tags: ['Reporting', 'Tracking', 'Visualization'],
    },
]

export default function Services() {
    return (
        <div className="relative min-h-screen bg-gradient-to-b from-background via-background to-background overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
            </div>

            <Navigation />

            <main className="relative z-10 pt-40 pb-20 px-6">
                <div className="max-w-6xl mx-auto space-y-16">
                    {/* Header */}
                    <section className="text-center space-y-6 animate-fadeInUp">
                        <h1 className="text-6xl md:text-7xl font-bold gradient-text">
                            Our Services
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Comprehensive digital marketing solutions designed to elevate your brand and drive measurable results.
                        </p>
                    </section>

                    {/* Services Grid */}
                    <section className="space-y-8">
                        <div className="grid md:grid-cols-2 gap-8">
                            {services.map((service, idx) => (
                                <div
                                    key={service.id}
                                    className="glass p-8 rounded-3xl group hover:bg-white/15 transition-all duration-300 cursor-pointer animate-fadeInUp"
                                    style={{ animationDelay: `${idx * 50}ms` }}
                                >


                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-medium text-gray-400">
                                                {service.category}
                                            </span>
                                            <span className="text-white/50">→</span>
                                        </div>

                                        <h3 className="text-2xl font-semibold text-white group-hover:text-white transition-colors">
                                            {service.title}
                                        </h3>

                                        <p className="text-gray-400">
                                            {service.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 pt-2">
                                            {service.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-300"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="text-center space-y-6 pt-12 animate-slideIn">
                        <h2 className="text-3xl font-semibold text-white">
                            Ready to grow your business?
                        </h2>
                        <p className="text-gray-400">
                            Let's craft a strategy that Works for you.
                        </p>
                        <a
                            href="/contact"
                            className="inline-block glass px-8 py-3 rounded-full text-white font-medium hover:bg-white/20 transition-all duration-300"
                        >
                            Get Started
                        </a>
                    </section>
                </div>
            </main>
        </div>
    )
}
