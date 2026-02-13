'use client'

import { m, LazyMotion, domAnimation } from 'framer-motion'
import { Lightbulb, Search, Rocket, TrendingUp } from 'lucide-react'

export function ProcessTimeline() {
    const steps = [
        {
            icon: Search,
            title: 'Discovery',
            description: 'We dive deep into your business goals, target audience, and market landscape to uncover opportunities.',
        },
        {
            icon: Lightbulb,
            title: 'Strategy',
            description: 'We craft a tailored roadmap that aligns with your vision, focusing on high-impact channels and creative direction.',
        },
        {
            icon: Rocket,
            title: 'Execution',
            description: 'Our team brings the strategy to life with precision, launching campaigns and optimizing in real-time.',
        },
        {
            icon: TrendingUp,
            title: 'Growth',
            description: 'We analyze performance data to scale what works, ensuring sustainable long-term growth for your brand.',
        },
    ]

    return (
        <LazyMotion features={domAnimation}>
            <section className="w-full py-24 px-6 relative">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">How We Work</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Our proven process to deliver exceptional results.</p>
                    </div>

                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-white/20 to-transparent" />

                        <div className="space-y-12">
                            {steps.map((step, idx) => (
                                <m.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.2 }}
                                    className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                                        }`}
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute left-[20px] md:left-1/2 top-0 -translate-x-1/2 w-10 h-10 rounded-full glass flex items-center justify-center border border-white/20 z-10">
                                        <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 ml-16 md:ml-0 md:px-12">
                                        <div className={`glass p-8 rounded-2xl hover:bg-white/5 transition-colors duration-300 ${idx % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                                            }`}>
                                            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                                                <step.icon size={24} />
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                                            <p className="text-gray-400 leading-relaxed">{step.description}</p>
                                        </div>
                                    </div>

                                    <div className="flex-1 hidden md:block" />
                                </m.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </LazyMotion>
    )
}
