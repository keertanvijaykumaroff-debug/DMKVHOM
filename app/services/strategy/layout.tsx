import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Brand Strategy | DMKV House of Marketing',
    description: 'Define your brand\'s identity and competitive positioning with DMKV. Strategic brand planning, market research, and roadmap development to align your brand with growth.',
    alternates: {
        canonical: '/services/strategy',
    },
    openGraph: {
        title: 'Brand Strategy | DMKV House of Marketing',
        description: 'Align your vision with a tailored strategy for lasting market authority.',
        url: 'https://www.dmkvhouseofmarketing.com/services/strategy',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Brand Strategy | DMKV House of Marketing',
        description: 'Align your vision with a tailored strategy for lasting market authority.',
    },
}

export default function StrategyLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
