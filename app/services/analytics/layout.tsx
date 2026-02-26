import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Analytics & Reporting | DMKV House of Marketing',
    description: 'Make smarter decisions with DMKV\'s analytics services. Custom dashboards, data visualization, GA4 setup, and actionable reporting to track your marketing ROI.',
    alternates: {
        canonical: '/services/analytics',
    },
    openGraph: {
        title: 'Analytics & Reporting | DMKV House of Marketing',
        description: 'Turn raw data into actionable marketing insights and measurable growth.',
        url: 'https://www.dmkvhouseofmarketing.com/services/analytics',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Analytics & Reporting | DMKV House of Marketing',
        description: 'Turn raw data into actionable marketing insights and measurable growth.',
    },
}

export default function AnalyticsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
