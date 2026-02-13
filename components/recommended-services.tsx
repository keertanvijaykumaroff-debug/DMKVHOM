'use client'

import Link from 'next/link'
import { Service } from '@/lib/services-data'

interface RecommendedServicesProps {
    services: Service[]
}

export function RecommendedServices({ services }: RecommendedServicesProps) {
    return (
        <section className="w-full py-16">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-white mb-8">Recommended Services</h2>

                <div className="overflow-x-auto hide-scrollbar">
                    <div className="flex gap-6 pb-4">
                        {services.map((service) => (
                            <Link
                                key={service.id}
                                href={`/services/${service.slug}`}
                                className="flex-shrink-0 w-80 glass p-6 rounded-2xl hover:bg-white/15 transition-all duration-300 group"
                            >
                                <div className="space-y-3">
                                    <span className="text-sm font-medium text-gray-400">
                                        {service.category}
                                    </span>

                                    <h3 className="text-xl font-semibold text-white group-hover:text-white transition-colors">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm line-clamp-2">
                                        {service.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {service.tags.slice(0, 3).map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-300"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .hide-scrollbar {
                    scrollbar-width: none;
                    -ms-overflow-style: none;
                }
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    )
}
