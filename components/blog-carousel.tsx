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
                            <div className="relative glass rounded-3xl overflow-hidden h-full flex flex-col p-8 md:p-10 border border-white/10 hover:border-white/30 transition-all duration-500 group shadow-2xl">
                                {/* Theme Background Glow — strong and visible */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${post.theme || 'from-white/5 to-transparent'} opacity-80 transition-opacity duration-500 group-hover:opacity-100`} />
                                {/* Colored top border accent */}
                                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${post.theme || 'from-white/20 to-transparent'} opacity-90`} />

                                <div className="relative space-y-6">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${post.theme || 'from-white/60 to-white/20'} animate-pulse`} />
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50">
                                            {post.date}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight group-hover:text-primary transition-colors">
                                        {post.title}
                                    </h3>

                                    <p className="text-gray-300 text-base leading-relaxed font-light line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                </div>

                                <div className="relative mt-12 flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-white/40 group-hover:text-white transition-colors">
                                    Read Full Insight <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </div>
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
