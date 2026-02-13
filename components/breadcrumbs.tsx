'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight, Home } from 'lucide-react'
import { Fragment } from 'react'

export function Breadcrumbs() {
    const pathname = usePathname()

    // Don't show on home page
    if (pathname === '/') return null

    const segments = pathname.split('/').filter(Boolean)

    const breadcrumbItems = segments.map((segment, index) => {
        const href = `/${segments.slice(0, index + 1).join('/')}`

        // Format label: "digital-marketing-faq" -> "Digital Marketing Faq"
        const label = segment
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')

        return { href, label }
    })

    // JSON-LD for SEO
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://www.dmkvhouseofmarketing.com',
            },
            ...breadcrumbItems.map((item, index) => ({
                '@type': 'ListItem',
                position: index + 2,
                name: item.label,
                item: `https://www.dmkvhouseofmarketing.com${item.href}`,
            })),
        ],
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <nav aria-label="Breadcrumb" className="w-full bg-black/50 border-b border-white/5 backdrop-blur-sm fixed top-[88px] z-40">
                <div className="max-w-6xl mx-auto px-6 py-2">
                    <ol className="flex items-center space-x-2 text-sm text-gray-400">
                        <li>
                            <Link href="/" className="hover:text-white transition-colors flex items-center">
                                <Home size={14} />
                                <span className="sr-only">Home</span>
                            </Link>
                        </li>
                        {breadcrumbItems.map((item, index) => {
                            const isLast = index === breadcrumbItems.length - 1

                            return (
                                <Fragment key={item.href}>
                                    <li>
                                        <ChevronRight size={14} className="text-gray-600" />
                                    </li>
                                    <li>
                                        {isLast ? (
                                            <span className="text-white font-medium" aria-current="page">
                                                {item.label}
                                            </span>
                                        ) : (
                                            <Link
                                                href={item.href}
                                                className="hover:text-white transition-colors"
                                            >
                                                {item.label}
                                            </Link>
                                        )}
                                    </li>
                                </Fragment>
                            )
                        })}
                    </ol>
                </div>
            </nav>
            {/* Spacer to prevent content overlap */}
            <div className="h-10 md:h-0" />
        </>
    )
}
