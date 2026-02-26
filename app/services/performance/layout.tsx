import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Performance Marketing | DMKV House of Marketing',
    description: 'Scale faster with DMKV\'s performance marketing services. Meta Ads, Google Ads, full-funnel advertising, and conversion rate optimization to maximize your ROAS.',
    alternates: {
        canonical: '/services/performance',
    },
    openGraph: {
        title: 'Performance Marketing | DMKV House of Marketing',
        description: 'Data-driven paid media campaigns that deliver rapid, measurable growth.',
        url: 'https://www.dmkvhouseofmarketing.com/services/performance',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Performance Marketing | DMKV House of Marketing',
        description: 'Data-driven paid media campaigns that deliver rapid, measurable growth.',
    },
}

export default function PerformanceLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
