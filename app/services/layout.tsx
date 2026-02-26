import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Our Services | DMKV House of Marketing',
    description: 'Explore DMKV\'s full range of digital marketing services — SEO, performance marketing, social media, content strategy, analytics, influencer marketing, and brand audits.',
    alternates: {
        canonical: '/services',
    },
    openGraph: {
        title: 'Our Services | DMKV House of Marketing',
        description: 'Full-service digital marketing solutions designed to transform your brand and accelerate sustainable growth.',
        url: 'https://www.dmkvhouseofmarketing.com/services',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Our Services | DMKV House of Marketing',
        description: 'Full-service digital marketing solutions designed to transform your brand.',
    },
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
