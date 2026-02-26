import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Our Story | DMKV',
    description: 'The story behind DMKV House of Marketing - from a small agency to a digital marketing powerhouse.',
    alternates: {
        canonical: '/about/story',
    },
    robots: {
        index: true,
        follow: true,
    },
}

export default function StoryPage() {
    return (
        <div className="min-h-screen pt-40 pb-20 px-6">
            <div className="max-w-4xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h1 className="text-6xl md:text-7xl font-bold font-serif gradient-text">Our Story</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        A legacy built on excellence and the drive to transform the digital landscape.
                    </p>
                </div>

                <div className="glass p-8 md:p-12 rounded-3xl space-y-8 text-gray-300">
                    <section className="space-y-4">
                        <h2 className="text-3xl font-bold text-white">The Beginning</h2>
                        <p className="text-lg leading-relaxed">
                            DMKV House of Marketing started as a vision to create a different kind of agency—one that puts value and honesty above everything else. Founded in 2024, we recognized a gap in the market for high-quality digital marketing that was both effective and transparently priced.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">Evolution</h2>
                        <p>
                            What began as a small team of dedicated creative minds has rapidly evolved into a powerhouse of strategic planning and innovative execution. We've weathered the changing tides of digital trends, always adapting and staying ahead of the curve to ensure our clients receive only the best.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">Where We Are Now</h2>
                        <p>
                            Today, DMKV is a name synonymous with excellence in the marketing industry. We partner with brands that are ready to challenge the status quo, helping them carve out their own space in the digital world through bespoke solutions that drive real, measurable growth.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}
