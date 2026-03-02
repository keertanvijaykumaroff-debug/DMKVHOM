'use client'

export function VideoCarousel() {
    const videos = ['1', '2', '3', '4', '5', '6', '7', '8']

    return (
        <section className="w-full py-24 px-6 relative overflow-hidden bg-black/20 border-t border-white/5">
            <div className="max-w-6xl mx-auto mb-10 md:mb-16 flex flex-col items-center text-center animate-slideIn">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Our Video Campaigns</h2>
                <p className="text-gray-400 max-w-xl text-base md:text-lg leading-relaxed">
                    Swipe through our high-performing vertical video creatives designed for modern social platforms.
                </p>
            </div>

            <div className="relative w-full overflow-visible">
                <div className="flex gap-4 md:gap-8 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar px-6 md:px-0 md:max-w-6xl md:mx-auto">
                    {videos.map((video, idx) => (
                        <div
                            key={idx}
                            className="min-w-[260px] md:min-w-[320px] lg:min-w-[360px] aspect-[9/16] snap-center relative rounded-3xl overflow-hidden glass border border-white/10 hover:border-white/30 transition-all duration-500 group shadow-2xl shrink-0"
                        >
                            {/* Ensure video fills space properly */}
                            <video
                                src={`/videos/${video}.mp4`}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            {/* Decorative overlay for better aesthetics */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />

                            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 mb-4 group-hover:scale-110 transition-transform">
                                    <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx global>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    )
}
