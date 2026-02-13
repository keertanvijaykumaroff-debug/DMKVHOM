'use client'

import { useRef, useEffect } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'

function Counter({ value, suffix = '', label }: { value: number; suffix?: string; label: string }) {
    const ref = useRef<HTMLDivElement>(null)
    const inView = useInView(ref, { once: true, margin: "-100px" })

    // Motion value for the number
    const motionValue = useMotionValue(0)
    // Spring for smooth animation
    const springValue = useSpring(motionValue, { damping: 50, stiffness: 100 })

    useEffect(() => {
        if (inView) {
            motionValue.set(value)
        }
    }, [inView, value, motionValue])

    // Update text content directly for performance
    const textRef = useRef<HTMLSpanElement>(null)
    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (textRef.current) {
                textRef.current.textContent = String(Math.floor(latest))
            }
        })
    }, [springValue])

    return (
        <div ref={ref} className="glass p-8 rounded-2xl text-center group hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center items-center gap-1 text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-2">
                <span ref={textRef}>0</span>
                <span>{suffix}</span>
            </div>
            <div className="text-gray-400 font-medium tracking-wide group-hover:text-white transition-colors duration-300">
                {label}
            </div>
        </div>
    )
}

export function StatsSection() {
    const stats = [
        { number: 50, suffix: '+', label: 'Projects Completed' },
        { number: 25, suffix: '+', label: 'Happy Clients' },
        { number: 2024, suffix: '', label: 'Est. Year' },
        { number: 98, suffix: '%', label: 'Satisfaction Rate' },
    ]

    return (
        <section className="w-full py-20 px-6 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-primary/5 rounded-full blur-[100px] -z-10" />

            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    {stats.map((stat, idx) => (
                        <Counter
                            key={idx}
                            value={stat.number}
                            label={stat.label}
                            suffix={stat.suffix}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
