import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ChevronRight, Search } from "lucide-react"
import { faqs } from "@/lib/faq-data"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { createFAQSchema, createBreadcrumbSchema } from '@/lib/schemas'

export const metadata: Metadata = {
    title: "Frequently Asked Questions | DMKV House of Marketing",
    description: "Get answers about our digital marketing services, SEO strategies, performance marketing, and how our digital marketing agency helps businesses grow online.",
    alternates: {
        canonical: '/digital-marketing-faq',
    },
}

const breadcrumbs = createBreadcrumbSchema([
    { name: 'Home', url: 'https://www.dmkvhouseofmarketing.com' },
    { name: 'FAQ', url: 'https://www.dmkvhouseofmarketing.com/digital-marketing-faq' }
])

export default function FAQPage() {
    const faqSchema = createFAQSchema(faqs)

    const categories = Array.from(new Set(faqs.map(f => f.category)))

    return (
        <div className="relative min-h-screen bg-black text-white selection:bg-white/20">
            {/* Schema.org JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
            />

            <Navigation />

            <main className="relative z-10 pt-40 pb-20 px-6">
                <div className="max-w-6xl mx-auto space-y-24">
                    {/* Header */}
                    <div className="max-w-3xl mx-auto text-center space-y-8 animate-fadeInUp">
                        <nav className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-8">
                            <Link href="/" className="hover:text-white transition-colors">Home</Link>
                            <ChevronRight size={14} />
                            <span className="text-gray-300">FAQ</span>
                        </nav>

                        <h1 className="text-6xl md:text-8xl font-bold font-serif text-white tracking-tighter">
                            DMKV FAQ
                        </h1>
                        <p className="text-xl text-gray-400 font-light leading-relaxed">
                            Structured answers for strategic growth. Browse our complete knowledge base to understand our methodology.
                        </p>

                        <div className="h-px w-24 bg-white/20 mx-auto" />
                    </div>

                    {/* FAQ Categories Section */}
                    {categories.map((category) => (
                        <section key={category} className="space-y-10 animate-fadeInUp">
                            <div className="flex items-center gap-4">
                                <h2 className="text-2xl font-bold uppercase tracking-[0.2em] text-white/40">
                                    {category}
                                </h2>
                                <div className="h-px flex-1 bg-white/5" />
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                {faqs.filter(f => f.category === category).map((faq, index) => (
                                    <Link
                                        key={index}
                                        href={`/digital-marketing-faq/${faq.slug}`}
                                        className="group block"
                                    >
                                        <div className="glass p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-white/20">
                                            <div className="flex justify-between items-start gap-4">
                                                <h3 className="text-xl font-semibold text-white group-hover:text-white/80 transition-colors">
                                                    {faq.question}
                                                </h3>
                                                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors flex-shrink-0">
                                                    <ArrowRight size={16} className="text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                                                </div>
                                            </div>
                                            <p className="mt-4 text-gray-500 line-clamp-2 text-sm leading-relaxed font-light">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    ))}

                    {/* Support CTA */}
                    <section className="text-center py-20 border-t border-white/5">
                        <div className="max-w-2xl mx-auto space-y-8">
                            <h2 className="text-3xl font-bold text-white">Couldn't find what you're looking for?</h2>
                            <p className="text-gray-400">Our strategic growth experts are always ready to help with your unique brand challenges.</p>
                            <Link
                                href="/contact"
                                className="inline-block px-12 py-4 rounded-full glass border border-white/10 text-white font-medium hover:bg-white/10 transition-all duration-300"
                            >
                                Get Personal Consultation
                            </Link>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    )
}
