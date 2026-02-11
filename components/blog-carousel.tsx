'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { blogPosts } from '@/lib/blog-data'

export function BlogCarousel() {
    return (
        <section className="w-full py-24 px-6 relative overflow-hidden">
            <div className="max-w-6xl mx-auto mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Latest Insights</h2>
                    <p className="text-gray-400 max-w-xl">
                        Stay ahead of the curve with our expert analysis and industry updates.
                    </p>
                </div>
                <Link href="/blog" className="text-white flex items-center gap-2 hover:text-gray-300 transition-colors group">
                    View All Articles <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>

            <div className="relative w-full">
                <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar">
                    {blogPosts.map((post, idx) => (
                        <Link
                            href={`/blog/${post.slug}`}
                            key={idx}
                            className="min-w-[300px] md:min-w-[350px] snap-center group"
                        >
                            <div className="glass rounded-2xl overflow-hidden h-full hover:bg-white/10 transition-colors duration-300 flex flex-col p-8 border border-white/10">
                                <div className="text-xs font-semibold text-primary mb-4 uppercase tracking-wider">
                                    {post.date}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gray-200 transition-colors leading-tight">
                                    {post.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-6 flex-1 line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <span className="text-sm font-medium text-white flex items-center gap-2 mt-auto group-hover:underline decoration-white/30 underline-offset-4">
                                    Read Article <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </section>
    )
}
