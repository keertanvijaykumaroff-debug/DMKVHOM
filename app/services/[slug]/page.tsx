import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getServiceBySlug, getRecommendedServices, services } from '@/lib/services-data'
import { RecommendedServices } from '@/components/recommended-services'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const service = getServiceBySlug(params.slug)

    if (!service) {
        return {
            title: 'Service Not Found | DMKV',
        }
    }

    return {
        title: `${service.title} | DMKV`,
        description: service.description,
    }
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
    const service = getServiceBySlug(params.slug)

    if (!service) {
        notFound()
    }

    const recommendedServices = getRecommendedServices(service.recommendedServices)

    return (
        <div className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto space-y-16">
                {/* Hero Section */}
                <section className="text-center space-y-6">
                    <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-sm font-medium text-gray-300">
                        {service.category}
                    </span>
                    <h1 className="text-5xl md:text-6xl font-bold font-serif gradient-text">
                        {service.title}
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        {service.description}
                    </p>
                    <Link
                        href={`/contact?service=${encodeURIComponent(service.title)}`}
                        className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
                    >
                        Enquire Now
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </section>

                {/* Overview */}
                <section className="glass p-8 md:p-12 rounded-3xl space-y-4">
                    <h2 className="text-3xl font-bold text-white">Overview</h2>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        {service.fullDescription}
                    </p>
                </section>

                {/* Key Benefits */}
                <section className="glass p-8 md:p-12 rounded-3xl space-y-6">
                    <h2 className="text-3xl font-bold text-white">Key Benefits</h2>
                    <ul className="space-y-4">
                        {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                                <span className="text-gray-300 text-lg">{benefit}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* What's Included */}
                <section className="glass p-8 md:p-12 rounded-3xl space-y-6">
                    <h2 className="text-3xl font-bold text-white">What's Included</h2>
                    <ul className="grid md:grid-cols-2 gap-4">
                        {service.deliverables.map((deliverable, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                                <span className="text-gray-300">{deliverable}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Our Process */}
                <section className="glass p-8 md:p-12 rounded-3xl space-y-8">
                    <h2 className="text-3xl font-bold text-white">Our Process</h2>
                    <div className="space-y-6">
                        {service.process.map((item, idx) => (
                            <div key={idx} className="flex gap-6">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white font-bold">
                                        {idx + 1}
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-semibold text-white">{item.step}</h3>
                                    <p className="text-gray-400">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="text-center space-y-6 pt-8">
                    <h2 className="text-3xl font-semibold text-white">
                        Ready to get started?
                    </h2>
                    <p className="text-gray-400">
                        Let's discuss how {service.title.toLowerCase()} can help your business grow.
                    </p>
                    <Link
                        href={`/contact?service=${encodeURIComponent(service.title)}`}
                        className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
                    >
                        Get in Touch
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </section>
            </div>

            {/* Recommended Services */}
            {recommendedServices.length > 0 && (
                <RecommendedServices services={recommendedServices} />
            )}
        </div>
    )
}
