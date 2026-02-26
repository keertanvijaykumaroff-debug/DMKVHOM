export function StatsSection() {
    const stats = [
        {
            number: '50+',
            label: 'Projects Completed',
            color: '#F9C851', // Gold
            gradient: 'from-[#F9C851] to-[#F7B267]'
        },
        {
            number: '25+',
            label: 'Happy Clients',
            color: '#E14B61', // Red
            gradient: 'from-[#E14B61] to-[#FD763F]'
        },
        {
            number: '2024',
            label: 'Est. Year',
            color: '#FD763F', // Orange
            gradient: 'from-[#FD763F] to-[#E14B61]'
        },
        {
            number: '98%',
            label: 'Satisfaction Rate',
            color: '#F7B267', // Amber
            gradient: 'from-[#F7B267] to-[#F9C851]'
        },
    ]

    return (
        <section className="w-full py-20 px-6 relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="glass p-4 md:p-8 rounded-2xl text-center group hover:scale-[1.02] transition-all duration-500 flex flex-col justify-center min-h-[160px] md:min-h-[200px] relative overflow-hidden">
                            {/* Individual card glow */}
                            <div
                                className="absolute -bottom-10 -right-10 w-32 h-32 blur-[50px] opacity-20 transition-opacity duration-500 group-hover:opacity-40"
                                style={{ backgroundColor: stat.color }}
                            />

                            <div className={`text-4xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-br ${stat.gradient} mb-3`}>
                                {stat.number}
                            </div>
                            <div className="text-[10px] md:text-xs text-white/40 font-black uppercase tracking-[0.2em] group-hover:text-white transition-colors duration-500">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
