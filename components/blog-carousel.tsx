'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { blogPosts } from '@/lib/blog-data'

export function BlogCarousel() {
    return (
        <section className="w-full py-24 px-6 relative overflow-hidden">
            <div className="max-w-6xl mx-auto mb-10 md:mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <div className="animate-slideIn">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Latest Insights</h2>
                    <p className="text-gray-400 max-w-xl text-base md:text-lg leading-relaxed">
                        Stay ahead of the curve with our expert analysis and industry updates.
                    </p>
                </div>
                <Link href="/blog" className="text-white flex items-center gap-2 hover:text-gray-300 transition-colors group text-sm md:text-base font-medium">
                    View All Articles <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>

            <div className="relative w-full overflow-visible">
                <div className="flex gap-4 md:gap-8 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar -mx-6 px-6">
                    {blogPosts.map((post, idx) => (
                        <Link
                            href={`/blog/${post.slug}`}
                            key={idx}
                            className="min-w-[280px] md:min-w-[400px] snap-center group first:ml-0"
                        >
                            <div className="glass rounded-2xl overflow-hidden h-full hover:bg-white/10 transition-all duration-500 flex flex-col p-6 md:p-10 border border-white/10 group-hover:border-white/20">
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
