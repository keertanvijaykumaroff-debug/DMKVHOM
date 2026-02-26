import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Influencer Marketing | DMKV House of Marketing',
    description: 'Amplify your brand through authentic influencer partnerships. DMKV connects you with the right creators to drive awareness, trust, and conversions for your target audience.',
    alternates: {
        canonical: '/services/influencers',
    },
    openGraph: {
        title: 'Influencer Marketing | DMKV House of Marketing',
        description: 'Authentic creator partnerships that build brand trust and drive real conversions.',
        url: 'https://www.dmkvhouseofmarketing.com/services/influencers',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Influencer Marketing | DMKV House of Marketing',
        description: 'Authentic creator partnerships that build brand trust and drive real conversions.',
    },
}

export default function InfluencersLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
