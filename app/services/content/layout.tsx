import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Content Marketing | DMKV House of Marketing',
    description: 'Create content that drives authority and conversions. DMKV\'s content marketing services include blog writing, video scripts, email campaigns, and long-form content strategy.',
    alternates: {
        canonical: '/services/content',
    },
    openGraph: {
        title: 'Content Marketing | DMKV House of Marketing',
        description: 'Authoritative content that builds trust and drives organic traffic.',
        url: 'https://www.dmkvhouseofmarketing.com/services/content',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Content Marketing | DMKV House of Marketing',
        description: 'Authoritative content that builds trust and drives organic traffic.',
    },
}

export default function ContentLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
