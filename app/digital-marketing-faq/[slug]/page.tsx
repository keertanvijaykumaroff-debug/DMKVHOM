import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { faqs } from '@/lib/faq-data'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ChevronRight, MessageCircle } from 'lucide-react'
import { createBreadcrumbSchema } from '@/lib/schemas'

type Props = {
    params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
    return faqs.map((faq) => ({
        slug: faq.slug,
    }))
}

export async function generateMetadata({ params }: Props) {
    const { slug } = await params
    const faq = faqs.find((f) => f.slug === slug)

    if (!faq) {
        return {}
    }

    return {
        title: `${faq.question} | DMKV FAQ`,
        description: faq.answer.substring(0, 160),
        alternates: {
            canonical: `/digital-marketing-faq/${slug}`,
        },
    }
}

export default async function FAQPost({ params }: Props) {
    const { slug } = await params
    const faq = faqs.find((f) => f.slug === slug)

    if (!faq) {
        notFound()
    }

    const breadcrumbSchema = createBreadcrumbSchema([
        { name: 'Home', url: 'https://www.dmkvhouseofmarketing.com' },
        { name: 'FAQ', url: 'https://www.dmkvhouseofmarketing.com/digital-marketing-faq' },
        { name: faq.question, url: `https://www.dmkvhouseofmarketing.com/digital-marketing-faq/${faq.slug}` }
    ])

    return (
        <div className="relative min-h-screen bg-black text-white selection:bg-white/20">
            {/* Schema.org JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
            </div>

            <Navigation />

            <main className="relative z-10 pt-32 pb-20 px-6">
                <div className="max-w-3xl mx-auto">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8 overflow-x-auto whitespace-nowrap hide-scrollbar">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight size={14} className="flex-shrink-0" />
                        <Link href="/digital-marketing-faq" className="hover:text-white transition-colors">FAQ</Link>
                        <ChevronRight size={14} className="flex-shrink-0" />
                        <span className="text-gray-300 truncate">{faq.question}</span>
                    </nav>

                    {/* Back Link */}
                    <Link href="/digital-marketing-faq" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 group">
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        Back to all FAQs
                    </Link>

                    <article className="space-y-12">
                        <div className="space-y-6">
                            <h1 className="text-4xl md:text-5xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                                {faq.question}
                            </h1>
                            <div className="h-1 w-20 bg-white/20 rounded-full" />
                        </div>

                        <div className="glass p-8 md:p-12 rounded-3xl border border-white/10">
                            <p className="text-xl text-gray-300 leading-relaxed font-medium">
                                {faq.answer}
                            </p>
                        </div>

                        {/* CTA Section */}
                        <div className="mt-16 p-8 glass rounded-2xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="text-center md:text-left">
                                <h3 className="text-2xl font-bold mb-2">Have more questions?</h3>
                                <p className="text-gray-400">Our experts are happy to help you with your digital growth strategy.</p>
                            </div>
                            <Link
                                href="/contact"
                                className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-all flex items-center gap-2 whitespace-nowrap"
                            >
                                <MessageCircle size={18} />
                                Talk to Us
                            </Link>
                        </div>
                    </article>
                </div>
            </main>

            <Footer />
        </div>
    )
}
