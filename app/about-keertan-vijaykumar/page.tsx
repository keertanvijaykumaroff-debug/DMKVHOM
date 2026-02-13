import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, BookOpen, ExternalLink, Target, Layers, Zap } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Keertan Vijaykumar | Founder of DMKV',
    description: 'Learn about Keertan Vijaykumar, the visionary founder of DMKV House of Marketing, and his philosophy on structured growth and strategic marketing.',
}

export default function FounderPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto space-y-20">

                {/* Back Link */}
                <Link href="/about" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span>Back to About</span>
                </Link>

                {/* Hero Section */}
                <section className="flex flex-col md:flex-row items-center gap-12 animate-fadeInUp">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0 animate-float">
                        <div className="absolute inset-0 rounded-full border-2 border-white/10 scale-110 animate-pulse" />
                        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20">
                            <Image
                                src="/images/clients/keertan.jpeg"
                                alt="Keertan Vijaykumar"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="text-center md:text-left space-y-6">
                        <div>
                            <h2 className="text-gray-400 font-medium tracking-wide text-sm uppercase mb-2">Founder</h2>
                            <h1 className="text-5xl md:text-6xl font-bold font-serif mb-4">Keertan Vijaykumar</h1>
                            <p className="text-xl text-gray-300 max-w-xl">
                                A visionary leader passionate about digital innovation, transforming brands through strategic marketing and creative excellence.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Bio Section */}
                <section className="glass p-8 md:p-12 rounded-3xl animate-slideIn space-y-8">
                    <h3 className="text-3xl font-serif font-bold">The Vision</h3>
                    <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                        <p>
                            Keertan Vijaykumar is the Founder of <span className="text-white font-medium">DMKV – House of Marketing</span>, established in 2023 with a vision to build structured, performance-driven marketing systems for modern brands.
                        </p>
                        <p>
                            What began as a focused marketing initiative evolved into a refined marketing house built around clarity, authority, and scalable growth. Keertan leads DMKV with an emphasis on strategic execution, measurable performance, and long-term brand positioning.
                        </p>
                        <p>
                            With experience across SEO, performance marketing, brand positioning, and growth structuring, he works closely with businesses to transform fragmented digital efforts into structured marketing architecture.
                        </p>
                    </div>
                </section>

                {/* Philosophy Section */}
                <section className="grid md:grid-cols-3 gap-6">
                    {[
                        {
                            icon: Target,
                            title: "Strategy before execution",
                            desc: "Planning defines outcome. We don't guess; we strategize."
                        },
                        {
                            icon: Layers,
                            title: "Systems before scale",
                            desc: "Scalability relies on a solid foundation of repeatable systems."
                        },
                        {
                            icon: Zap,
                            title: "Authority before attention",
                            desc: "Building trust is more valuable than fleeing viral moments."
                        }
                    ].map((item, idx) => (
                        <div key={idx} className="glass p-8 rounded-2xl text-center space-y-4 hover:bg-white/5 transition-colors group">
                            <div className="w-12 h-12 mx-auto bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                <item.icon className="w-6 h-6 text-white" />
                            </div>
                            <h4 className="text-xl font-bold text-white">{item.title}</h4>
                            <p className="text-gray-400 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </section>

                {/* Published Works */}
                <section className="space-y-10">
                    <div className="text-center space-y-4">
                        <h3 className="text-4xl font-serif font-bold">Published Works</h3>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Beyond marketing, Keertan is also an author, having written two books that reflect his perspectives on growth, strategy, and structured thinking.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Book 1 */}
                        <div className="glass p-8 rounded-3xl space-y-6 flex flex-col h-full hover:border-white/20 transition-colors">
                            <div className="flex-1 space-y-4">
                                <div className="flex items-start justify-between">
                                    <div className="p-3 bg-white/10 rounded-xl">
                                        <BookOpen size={24} className="text-white" />
                                    </div>
                                    <span className="text-xs font-mono text-gray-500 border border-gray-800 px-2 py-1 rounded">BOOK 01</span>
                                </div>
                                <h4 className="text-2xl font-bold text-white">Two faces of becoming you</h4>
                                <p className="text-gray-400 leading-relaxed">
                                    This book explores foundational principles around structured growth, decision-making, and long-term value creation. It focuses on clarity of thinking, disciplined execution, and building systems that compound over time.
                                </p>
                            </div>
                            <a
                                href="https://www.amazon.in/Two-Faces-Becoming-Keertan-Vijaykumar-ebook/dp/B0F9KJBXT4?ref_=ast_author_dp&psc=1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-white font-medium hover:gap-3 transition-all group/link"
                            >
                                <span>Read on Amazon</span>
                                <ExternalLink size={16} />
                            </a>
                        </div>

                        {/* Book 2 */}
                        <div className="glass p-8 rounded-3xl space-y-6 flex flex-col h-full hover:border-white/20 transition-colors">
                            <div className="flex-1 space-y-4">
                                <div className="flex items-start justify-between">
                                    <div className="p-3 bg-white/10 rounded-xl">
                                        <BookOpen size={24} className="text-white" />
                                    </div>
                                    <span className="text-xs font-mono text-gray-500 border border-gray-800 px-2 py-1 rounded">BOOK 02</span>
                                </div>
                                <h4 className="text-2xl font-bold text-white">Earned Not Explained</h4>
                                <p className="text-gray-400 leading-relaxed">
                                    The second work expands on strategic frameworks and mindset required for navigating modern business environments. It emphasizes structured action, resilience, and the importance of intentional growth.
                                </p>
                            </div>
                            <a
                                href="https://www.amazon.in/Earned-Not-Explained-Keertan-Vijaykumar-ebook/dp/B0F9KSPGF5?ref_=ast_author_dp&psc=1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-white font-medium hover:gap-3 transition-all group/link"
                            >
                                <span>Read on Amazon</span>
                                <ExternalLink size={16} />
                            </a>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}
