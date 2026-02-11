'use client'

export function TestimonialsSection() {
    const testimonials = [
        {
            quote: "DMKV transformed our online presence. Their strategic approach to digital marketing yielded immediate results.",
            author: "Sarah Jenkins",
            role: "CEO, TechFlow",
            image: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        },
        {
            quote: "The team's creativity and data-driven insights are unmatched. We've seen a 200% growth in leads.",
            author: "Michael Chen",
            role: "Marketing Director, GrowthCo",
            image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
        },
        {
            quote: "Professional, responsive, and incredibly talented. DMKV is the partner you need for scaling your business.",
            author: "Emily Rodriguez",
            role: "Founder, Artistry",
            image: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        },
        {
            quote: "They understood our brand voice perfectly and amplified it across all channels. Highly recommended!",
            author: "David Kim",
            role: "COO, Innovate Inc.",
            image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
        },
    ]

    return (
        <section className="w-full py-24 overflow-hidden bg-white/5">
            <div className="max-w-5xl mx-auto px-6 mb-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
                <p className="text-gray-400">Trusted by innovative companies worldwide.</p>
            </div>

            <div className="relative w-full">
                {/* Gradients for fade effect */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

                <div className="flex gap-8 animate-scroll min-w-max hover:[animation-play-state:paused]">
                    {[...testimonials, ...testimonials, ...testimonials].map((testimonial, idx) => (
                        <div
                            key={idx}
                            className="w-[400px] glass p-8 rounded-2xl flex flex-col justify-between hover:bg-white/10 transition-colors duration-300"
                        >
                            <div className="mb-6">
                                <svg className="w-8 h-8 text-white/20 mb-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.01697 21L5.01697 18C5.01697 16.8954 5.9124 16 7.01697 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.01697C5.46468 8 5.01697 8.44772 5.01697 9V11C5.01697 11.5523 4.56925 12 4.01697 12H3.01697V5H13.017V15C13.017 18.3137 10.3307 21 7.01697 21H5.01697Z" />
                                </svg>
                                <p className="text-gray-300 text-lg leading-relaxed">{testimonial.quote}</p>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/10 overflow-hidden">
                                    <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <div className="text-white font-bold">{testimonial.author}</div>
                                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
