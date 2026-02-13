import { Navigation } from '@/components/navigation'
import { blogPosts } from '@/lib/blog-data'
import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Digital Marketing Blog | DMKV House of Marketing',
    description: 'Explore expert insights on digital marketing, SEO strategies, performance marketing, and brand growth from our digital marketing agency.',
    alternates: {
        canonical: '/blog',
    },
}

import { createBreadcrumbSchema } from '@/lib/schemas'

const breadcrumbs = createBreadcrumbSchema([
    { name: 'Home', url: 'https://www.dmkvhouseofmarketing.com' },
    { name: 'Blog', url: 'https://www.dmkvhouseofmarketing.com/blog' }
])

export default function BlogIndex() {
    return (
        <div className="relative min-h-screen bg-black text-white selection:bg-white/20">
            {/* Schema.org JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
            />
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
            </div>

            <Navigation />

            <main className="relative z-10 pt-32 pb-20 px-6">
                <section className="max-w-6xl mx-auto mb-20 text-center space-y-6">
                    <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
                        Our Insights
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Explore our latest thoughts on <Link href="/services" className="text-white hover:underline">digital marketing</Link>, technology, and brand strategy.
                    </p>
                </section>

                <section className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, idx) => (
                        <Link
                            href={`/blog/${post.slug}`}
                            key={idx}
                            className="group"
                        >
                            <div className="glass p-8 rounded-2xl h-full flex flex-col hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 hover:-translate-y-1">
                                <div className="flex justify-between items-start mb-6">
                                    <span className="text-xs font-semibold text-primary uppercase tracking-wider flex items-center gap-1">
                                        <Calendar size={12} /> {post.date}
                                    </span>
                                </div>

                                <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-gray-200 transition-colors leading-tight">
                                    {post.title}
                                </h2>

                                <p className="text-gray-400 text-sm mb-6 flex-1 line-clamp-3 leading-relaxed">
                                    {post.excerpt}
                                </p>

                                <span className="text-sm font-medium text-white flex items-center gap-2 mt-auto group-hover:underline decoration-white/30 underline-offset-4">
                                    Read Article <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                            </div>
                        </Link>
                    ))}
                </section>
            </main>
        </div>
    )
}
