'use client'

import { useEffect, useState, useRef } from 'react'

function useIntersectionObserver(ref: React.RefObject<Element | null>, options: IntersectionObserverInit = {}) {
    const [isIntersecting, setIsIntersecting] = useState(false)

    useEffect(() => {
        const element = ref.current
        if (!element) return

        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting)
        }, options)

        observer.observe(element)

        return () => {
            observer.disconnect()
        }
    }, [ref, options])

    return isIntersecting
}

function Counter({ end, duration = 2000, label, suffix = '' }: { end: number; duration?: number; label: string; suffix?: string }) {
    const [count, setCount] = useState(0)
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useIntersectionObserver(ref, { threshold: 0.1 })
    const [hasAnimated, setHasAnimated] = useState(false)

    useEffect(() => {
        if (isInView && !hasAnimated) {
            setHasAnimated(true)
            let startTime: number
            let animationFrame: number

            const animate = (timestamp: number) => {
                if (!startTime) startTime = timestamp
                const progress = timestamp - startTime

                if (progress < duration) {
                    setCount(Math.min(end, Math.floor((progress / duration) * end)))
                    animationFrame = requestAnimationFrame(animate)
                } else {
                    setCount(end)
                }
            }

            animationFrame = requestAnimationFrame(animate)

            return () => cancelAnimationFrame(animationFrame)
        }
    }, [isInView, end, duration, hasAnimated])

    return (
        <div ref={ref} className="glass p-8 rounded-2xl text-center group hover:scale-105 transition-transform duration-300">
            <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-2">
                {count}{suffix}
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
                            end={stat.number}
                            label={stat.label}
                            suffix={stat.suffix}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
