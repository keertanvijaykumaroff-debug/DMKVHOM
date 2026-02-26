'use client'

import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

interface FlowStep {
    title: string
    description: string
}

interface ServiceFlowProps {
    steps: FlowStep[]
    title?: string
}

export function ServiceFlow({ steps, title = "Our Process" }: ServiceFlowProps) {
    return (
        <section className="py-20">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 text-center">
                    {title}
                </h2>

                <div className="relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-[60px] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="relative group"
                            >
                                {/* Step Number Circle */}
                                <div className="relative z-10 w-16 h-16 rounded-full bg-black border border-white/20 flex items-center justify-center mb-6 mx-auto group-hover:border-white/50 transition-colors duration-500 shadow-xl shadow-white/5">
                                    <span className="text-xl font-serif text-white">{idx + 1}</span>

                                    {/* Glowing Pulse Effect */}
                                    <div className="absolute inset-0 rounded-full bg-white/5 animate-pulse" />
                                </div>

                                <div className="text-center space-y-3">
                                    <h3 className="text-xl font-semibold text-white tracking-tight">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Arrow (Desktop) */}
                                {idx < steps.length - 1 && (
                                    <div className="hidden md:flex absolute top-[14px] -right-4 z-20 items-center justify-center">
                                        <ChevronRight size={24} className="text-white/20 group-hover:text-white/40 transition-colors" />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
