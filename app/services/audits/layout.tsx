import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Digital Marketing Audits | DMKV House of Marketing',
    description: 'Uncover growth opportunities with a comprehensive digital marketing audit from DMKV. We review your SEO, paid media, social channels, and website to identify quick wins and long-term improvements.',
    alternates: {
        canonical: '/services/audits',
    },
    openGraph: {
        title: 'Digital Marketing Audits | DMKV House of Marketing',
        description: 'A complete health check for your digital presence to unlock hidden growth potential.',
        url: 'https://www.dmkvhouseofmarketing.com/services/audits',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Digital Marketing Audits | DMKV House of Marketing',
        description: 'A complete health check for your digital presence.',
    },
}

export default function AuditsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
