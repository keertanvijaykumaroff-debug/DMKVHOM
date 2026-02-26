import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Our Core Values | DMKV',
    description: 'Explore the values that drive DMKV House of Marketing: Innovation, Excellence, Integrity, and Growth.',
    alternates: {
        canonical: '/about/values',
    },
    robots: {
        index: true,
        follow: true,
    },
}

export default function ValuesPage() {
    const values = [
        {
            title: 'Innovation',
            description: 'We stay ahead of trends and push creative boundaries to deliver future-proof solutions.',
        },
        {
            title: 'Excellence',
            description: 'Every project receives our full dedication, precision, and multi-layered expertise.',
        },
        {
            title: 'Integrity',
            description: 'We build lasting relationships based on absolute trust, transparency, and fair pricing.',
        },
        {
            title: 'Growth',
            description: 'Your success is our success. We focus relentlessly on measurable, scalable results.',
        },
    ]

    return (
        <div className="min-h-screen pt-40 pb-20 px-6">
            <div className="max-w-4xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h1 className="text-6xl md:text-7xl font-bold font-serif gradient-text">Core Values</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        The principles that guide every decision and action at DMKV.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {values.map((value, idx) => (
                        <div key={idx} className="glass p-8 rounded-3xl space-y-4 hover:bg-white/5 transition-colors border border-white/5">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-2xl font-bold text-white mb-2">
                                {idx + 1}
                            </div>
                            <h2 className="text-2xl font-bold text-white">{value.title}</h2>
                            <p className="text-gray-400 leading-relaxed">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
