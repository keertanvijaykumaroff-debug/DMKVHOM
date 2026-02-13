import { Navigation } from '@/components/navigation'
import { blogPosts } from '@/lib/blog-data'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Calendar, User } from 'lucide-react'

// Correctly typing params as a Promise for Next.js 15+ (if applicable) or standard object
// Adjusting for compatibility with typical Next.js dynamic routes
type Props = {
    params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }))
}

export async function generateMetadata({ params }: Props) {
    const { slug } = await params
    const post = blogPosts.find((p) => p.slug === slug)

    if (!post) {
        return {}
    }

    return {
        title: `${post.title} | DMKV Blog`,
        description: post.excerpt,
        alternates: {
            canonical: `/blog/${slug}`,
        },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            publishedTime: post.date,
        },
    }
}

export default async function BlogPost({ params }: Props) {
    const { slug } = await params
    const post = blogPosts.find((p) => p.slug === slug)

    if (!post) {
        notFound()
    }

    return (
        <div className="relative min-h-screen bg-black text-white selection:bg-white/20">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
            </div>

            <Navigation />

            <main className="relative z-10 pt-32 pb-20 px-6">
                <article className="max-w-3xl mx-auto">
                    {/* Back Link */}
                    <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group">
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>

                    {/* Header */}
                    <header className="mb-12 text-center space-y-6">
                        <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
                            <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                            <span className="w-1 h-1 rounded-full bg-gray-600" />
                            <span className="flex items-center gap-1"><User size={14} /> DMKV Team</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                            {post.title}
                        </h1>
                        <p className="text-xl text-gray-400 italic">
                            {post.excerpt}
                        </p>
                    </header>

                    {/* Divider */}
                    <hr className="border-white/10 mb-12" />

                    {/* Content */}
                    <div
                        className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-gray-300 prose-a:text-white prose-strong:text-white"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* Footer CTA */}
                    <div className="mt-16 p-8 glass rounded-2xl text-center border border-white/10">
                        <h3 className="text-2xl font-bold mb-4">Enjoyed this article?</h3>
                        <p className="text-gray-400 mb-6">Subscribe to our newsletter for more insights delivered to your inbox.</p>
                        <div className="flex gap-2 max-w-md mx-auto">
                            <input type="email" placeholder="Enter your email" className="flex-1 bg-white/5 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-white/40" />
                            <button className="bg-white text-black px-6 py-2 rounded-lg font-bold hover:bg-gray-200 transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </article>
            </main>
        </div>
    )
}
