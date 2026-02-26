import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Our Journey | DMKV',
    description: 'The milestones and growth journey of DMKV House of Marketing since its inception.',
    alternates: {
        canonical: '/about/journey',
    },
    robots: {
        index: true,
        follow: true,
    },
}

export default function JourneyPage() {
    const milestones = [
        {
            year: 'Jan 2024',
            title: 'The Foundation',
            description: 'DMKV House of Marketing was established with a focus on transparency and fair pricing for digital solutions.',
        },
        {
            year: 'Jun 2024',
            title: 'Service Expansion',
            description: 'Launched comprehensive SEO and Performance Marketing wings to provide full-stack growth solutions.',
        },
        {
            year: 'Nov 2024',
            title: 'Tech Integration',
            description: 'Adopted cutting-edge AI and data analytics tools to enhance campaign precision and reporting.',
        },
        {
            year: 'Feb 2026',
            title: 'Modern Evolution',
            description: 'Redesigned our digital presence to reflect our growth into a premium "House of Marketing".',
        },
    ]

    return (
        <div className="min-h-screen pt-40 pb-20 px-6">
            <div className="max-w-4xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h1 className="text-6xl md:text-7xl font-bold font-serif gradient-text">Our Journey</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Following the path of innovation and client success since day one.
                    </p>
                </div>

                <div className="space-y-8 relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[31px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block" />

                    {milestones.map((milestone, idx) => (
                        <div key={idx} className={`relative flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                            {/* Dot */}
                            <div className="absolute left-[24px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-black z-10 hidden md:block" />

                            <div className="w-full md:w-1/2">
                                <div className="glass p-8 rounded-3xl space-y-3 hover:bg-white/5 transition-colors border border-white/5">
                                    <span className="text-sm font-bold text-white/40 tracking-widest uppercase">{milestone.year}</span>
                                    <h2 className="text-2xl font-bold text-white">{milestone.title}</h2>
                                    <p className="text-gray-400 leading-relaxed">{milestone.description}</p>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 md:block hidden" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
