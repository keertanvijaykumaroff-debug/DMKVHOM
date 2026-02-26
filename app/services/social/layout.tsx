import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Social Media Marketing | DMKV House of Marketing',
    description: 'Build a powerful social media presence with DMKV. Strategic content creation, community management, and paid social campaigns across Instagram, LinkedIn, and more.',
    alternates: {
        canonical: '/services/social',
    },
    openGraph: {
        title: 'Social Media Marketing | DMKV House of Marketing',
        description: 'Turn followers into customers with strategic social media marketing.',
        url: 'https://www.dmkvhouseofmarketing.com/services/social',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Social Media Marketing | DMKV House of Marketing',
        description: 'Turn followers into customers with strategic social media marketing.',
    },
}

export default function SocialLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
