export function StatsSection() {
    const stats = [
        { number: '50+', label: 'Projects Completed' },
        { number: '25+', label: 'Happy Clients' },
        { number: '2024', label: 'Est. Year' },
        { number: '98%', label: 'Satisfaction Rate' },
    ]

    return (
        <section className="w-full py-20 px-6 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-primary/5 rounded-full blur-[100px] -z-10" />

            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="glass p-8 rounded-2xl text-center group hover:scale-105 transition-transform duration-300">
                            <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-2">
                                {stat.number}
                            </div>
                            <div className="text-gray-400 font-medium tracking-wide group-hover:text-white transition-colors duration-300">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
