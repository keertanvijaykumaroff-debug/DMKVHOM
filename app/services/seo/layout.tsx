import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'SEO Services | DMKV House of Marketing',
    description: 'Dominate search results with DMKV\'s expert SEO services. Technical audits, keyword research, content clusters, and on-page optimization for sustainable organic growth.',
    alternates: {
        canonical: '/services/seo',
    },
    openGraph: {
        title: 'SEO Services | DMKV House of Marketing',
        description: 'Sustainable organic growth through technical precision and strategic authority building.',
        url: 'https://www.dmkvhouseofmarketing.com/services/seo',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'SEO Services | DMKV House of Marketing',
        description: 'Sustainable organic growth through technical precision and strategic authority building.',
    },
}

export default function SEOLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
