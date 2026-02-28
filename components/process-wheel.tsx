'use client'

import { m, LazyMotion, domAnimation } from 'framer-motion'
import { Search, Target, Settings, BarChart3 } from 'lucide-react'

const stages = [
    {
        icon: Search,
        title: 'Discovery',
        description: 'We dive deep into your business goals, target audience, and market landscape to uncover opportunities.',
        color: '#F9C851', // Yellow
        quadrant: 'top-right',
        angleRange: [0, 90], // Top to Right
        radius: 140,
        innerRadiusOffset: 20,
        pointer: { mx: 280, my: 120, ex: 320, ey: 120 }
    },
    {
        icon: Target,
        title: 'Strategy',
        description: 'We craft a tailored roadmap that aligns with your vision, focusing on high-impact channels and creative direction.',
        color: '#E14B61', // Red
        quadrant: 'bottom-right',
        angleRange: [90, 180], // Right to Bottom
        radius: 120,
        innerRadiusOffset: 15,
        pointer: { mx: 280, my: 280, ex: 320, ey: 280 }
    },
    {
        icon: Settings,
        title: 'Execution',
        description: 'Our team brings the strategy to life with precision, launching campaigns and optimizing in real-time.',
        color: '#FD763F', // Orange
        quadrant: 'bottom-left',
        angleRange: [180, 270], // Bottom to Left
        radius: 130,
        innerRadiusOffset: 18,
        pointer: { mx: 120, my: 280, ex: 80, ey: 280 }
    },
    {
        icon: BarChart3,
        title: 'Growth',
        description: 'We analyze performance data to scale what works, ensuring sustainable long-term growth for your brand.',
        color: '#F7B267', // Amber
        quadrant: 'top-left',
        angleRange: [270, 360], // Left to Top
        radius: 110,
        innerRadiusOffset: 12,
        pointer: { mx: 120, my: 120, ex: 80, ey: 120 }
    },
]

function Segment({ stage, index }: { stage: any, index: number }) {
    const innerRadius = 70;
    const center = 200;

    const [startAngle, endAngle] = stage.angleRange;
    const startRad = (startAngle - 90) * (Math.PI / 180);
    const endRad = (endAngle - 90) * (Math.PI / 180);

    // Midpoint for label and pointer start
    const midAngle = (startAngle + endAngle) / 2;
    const midRad = (midAngle - 90) * (Math.PI / 180);

    const sx = center + Math.cos(midRad) * (stage.radius - 10);
    const sy = center + Math.sin(midRad) * (stage.radius - 10);
    const { mx, my, ex, ey } = stage.pointer;

    const outerPath = `
        M ${center + Math.cos(startRad) * stage.radius} ${center + Math.sin(startRad) * stage.radius}
        A ${stage.radius} ${stage.radius} 0 0 1 ${center + Math.cos(endRad) * stage.radius} ${center + Math.sin(endRad) * stage.radius}
        L ${center + Math.cos(endRad) * innerRadius} ${center + Math.sin(endRad) * innerRadius}
        A ${innerRadius} ${innerRadius} 0 0 0 ${center + Math.cos(startRad) * innerRadius} ${center + Math.sin(startRad) * innerRadius}
        Z
    `;

    const innerPathRadius = innerRadius + stage.innerRadiusOffset;
    const innerPath = `
        M ${center + Math.cos(startRad) * innerPathRadius} ${center + Math.sin(startRad) * innerPathRadius}
        A ${innerPathRadius} ${innerPathRadius} 0 0 1 ${center + Math.cos(endRad) * innerPathRadius} ${center + Math.sin(endRad) * innerPathRadius}
        L ${center + Math.cos(endRad) * innerRadius} ${center + Math.sin(endRad) * innerRadius}
        A ${innerRadius} ${innerRadius} 0 0 0 ${center + Math.cos(startRad) * innerRadius} ${center + Math.sin(startRad) * innerRadius}
        Z
    `;

    return (
        <m.g
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            className="origin-center"
        >
            {/* Outer Segment */}
            <m.path d={outerPath} fill={stage.color} opacity="0.4" />

            {/* Inner "Focus" Part */}
            <m.path d={innerPath} fill={stage.color} />

            {/* Label inside */}
            <text
                x={center + Math.cos(midRad) * (innerRadius + (stage.radius - innerRadius) / 2)}
                y={center + Math.sin(midRad) * (innerRadius + (stage.radius - innerRadius) / 2)}
                fill="white"
                textAnchor="middle"
                fontSize="9"
                fontWeight="bold"
                className="pointer-events-none select-none"
            >
                {stage.title}
            </text>

            {/* Pointer Line */}
            <m.path
                d={`M ${sx} ${sy} L ${mx} ${my} L ${ex} ${ey}`}
                stroke={stage.color}
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
            />

            {/* Pointer Dot */}
            <m.circle
                cx={sx}
                cy={sy}
                r="4"
                fill={stage.color}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
            />
        </m.g>
    )
}

function StageCard({ stage, index }: { stage: any, index: number }) {
    const isRight = stage.quadrant.includes('right');
    const isTop = stage.quadrant.includes('top');

    return (
        <m.div
            initial={{ opacity: 0, x: isRight ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + index * 0.1 }}
            className={`absolute w-72 md:w-80 p-6 pointer-events-auto hidden md:block
                ${isTop ? 'top-10' : 'bottom-10'}
                ${isRight ? 'right-0 text-left' : 'left-0 text-right'}
            `}
        >
            <div className="space-y-4 group">
                <div className={`flex items-center gap-4 ${isRight ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className="transition-all duration-500 group-hover:scale-110">
                        <stage.icon size={32} color={stage.color} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-4xl font-bold tracking-tight" style={{ color: stage.color }}>
                        {stage.title}
                    </h3>
                </div>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">
                    {stage.description}
                </p>
            </div>
        </m.div>
    )
}

export function ProcessWheel() {
    return (
        <LazyMotion features={domAnimation}>
            <section className="relative py-16 md:py-32 bg-black overflow-hidden border-t border-white/5">
                {/* Background Ambient Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-white/[0.02] rounded-full blur-[150px] pointer-events-none" />

                <div className="max-w-7xl mx-auto w-full flex flex-col items-center px-6">
                    <header className="text-center space-y-6 mb-24 max-w-2xl">
                        <m.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] font-black uppercase tracking-[0.4em] text-white/40"
                        >
                            Our Methodology
                        </m.div>
                        <h2 className="text-5xl md:text-8xl font-bold text-white tracking-tighter leading-none">
                            How We <span className="text-white/50">Work.</span>
                        </h2>
                        {/* sr-only keyword text for H2 targeting */}
                        <p className="text-sm text-white/40 mt-4 font-light tracking-wide">Our digital marketing process — built for measurable results.</p>
                    </header>

                    <m.div
                        initial={{ y: 0 }}
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="relative w-full max-w-[1100px] h-[350px] md:h-[700px] flex items-center justify-center -mt-10 md:mt-0"
                    >
                        {/* The SVG Container */}
                        <svg viewBox="0 0 400 400" className="w-full max-w-[280px] md:max-w-[600px] h-auto relative z-10 drop-shadow-2xl">
                            {/* Center Layers */}
                            <circle cx="200" cy="200" r="55" fill="#2D2235" /> {/* Dark outer hub */}
                            <circle cx="200" cy="200" r="30" fill="white" /> {/* White inner hub */}

                            {stages.map((stage, idx) => (
                                <Segment key={idx} stage={stage} index={idx} />
                            ))}
                        </svg>

                        {/* Desktop-only absolute cards */}
                        <div className="absolute inset-0 pointer-events-none hidden md:block">
                            {stages.map((stage, idx) => (
                                <StageCard
                                    key={idx}
                                    stage={stage}
                                    index={idx}
                                />
                            ))}
                        </div>
                    </m.div>

                    {/* Mobile-only vertical list */}
                    <div className="w-full grid grid-cols-1 gap-8 mt-12 md:hidden">
                        {stages.map((stage, idx) => (
                            <m.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="space-y-4"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                                        <stage.icon size={24} color={stage.color} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-2xl font-bold tracking-tight" style={{ color: stage.color }}>
                                        {stage.title}
                                    </h3>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed font-light pl-12 border-l border-white/10">
                                    {stage.description}
                                </p>
                            </m.div>
                        ))}
                    </div>
                </div>
            </section>
        </LazyMotion>
    )
}
