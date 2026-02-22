import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ChevronRight } from "lucide-react"
import { faqs } from "@/lib/faq-data"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
    title: "Frequently Asked Questions | DMKV House of Marketing",
    description: "Get answers about our digital marketing services, SEO strategies, performance marketing, and how our digital marketing agency helps businesses grow online.",
    alternates: {
        canonical: '/digital-marketing-faq',
    },
}

import { createFAQSchema, createBreadcrumbSchema } from '@/lib/schemas'

const breadcrumbs = createBreadcrumbSchema([
    { name: 'Home', url: 'https://www.dmkvhouseofmarketing.com' },
    { name: 'FAQ', url: 'https://www.dmkvhouseofmarketing.com/digital-marketing-faq' }
])

export default function FAQPage() {
    const faqSchema = createFAQSchema(faqs)

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

            <main className="relative z-10 pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto space-y-12">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight size={14} />
                        <span className="text-gray-300">FAQ</span>
                    </nav>

                    <div className="text-center space-y-4">
                        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
                            Frequently Asked Questions
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Everything you need to know about our services, strategies, and how we help businesses grow.
                        </p>
                    </div>

                    <div className="grid gap-6">
                        {faqs.map((faq, index) => (
                            <Link
                                key={index}
                                href={`/digital-marketing-faq/${faq.slug}`}
                                className="group block"
                            >
                                <div className="glass p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 group-hover:-translate-y-1">
                                    <div className="flex justify-between items-center gap-4">
                                        <h2 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                                            {faq.question}
                                        </h2>
                                        <ArrowRight size={20} className="text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all flex-shrink-0" />
                                    </div>
                                    <p className="mt-4 text-gray-400 line-clamp-2 text-base leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
