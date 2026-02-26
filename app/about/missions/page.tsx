import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Our Mission | DMKV',
    description: 'Our mission is to empower brands with innovative and honest digital marketing solutions.',
    alternates: {
        canonical: '/about/missions',
    },
    robots: {
        index: true,
        follow: true,
    },
}

export default function MissionPage() {
    return (
        <div className="min-h-screen pt-40 pb-20 px-6">
            <div className="max-w-4xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h1 className="text-6xl md:text-7xl font-bold font-serif gradient-text">Our Mission</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Driving growth through transparency, innovation, and unwavering commitment.
                    </p>
                </div>

                <div className="glass p-8 md:p-12 rounded-3xl space-y-8 text-gray-300">
                    <section className="space-y-4">
                        <h2 className="text-3xl font-bold text-white">The DMKV Promise</h2>
                        <p className="text-lg leading-relaxed">
                            Established in 2024, DMKV House of Marketing was built on the foundation of fair pricing and honest work. We believe that exceptional digital marketing should be accessible to businesses that are ready to dream bigger.
                        </p>
                    </section>

                    <section className="space-y-4 border-l-4 border-white/10 pl-6">
                        <h2 className="text-2xl font-bold text-white">Innovation First</h2>
                        <p>
                            Our mission is to stay at the forefront of digital trends, ensuring our clients always have a competitive edge. We don't just follow the industry—we aim to lead it with creative strategies and data-driven execution.
                        </p>
                    </section>

                    <section className="space-y-4 border-l-4 border-white/10 pl-6">
                        <h2 className="text-2xl font-bold text-white">Measurable Impact</h2>
                        <p>
                            We are committed to delivering results that matter. Every campaign we run and every strategy we develop is focused on one thing: your growth. We measure our success by the success of the brands we partner with.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}
