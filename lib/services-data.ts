export interface Service {
    id: number
    slug: string
    title: string
    category: string
    description: string
    tags: string[]
    fullDescription: string
    benefits: string[]
    deliverables: string[]
    process: { step: string; description: string }[]
    recommendedServices: string[]
}

export const services: Service[] = [
    {
        id: 1,
        slug: 'seo',
        title: 'Search Engine Optimization (SEO)',
        category: 'Growth',
        description: 'Boost your visibility and climb the rankings with data-driven SEO strategies that drive organic traffic.',
        tags: ['On-Page', 'Off-Page', 'Technical SEO'],
        fullDescription: 'Our comprehensive SEO services help you dominate search engine results and attract high-quality organic traffic. We combine technical expertise, content optimization, and strategic link building to improve your website\'s visibility and rankings. From keyword research to ongoing performance tracking, we ensure your brand gets found by the right audience at the right time.',
        benefits: [
            'Increased organic traffic and qualified leads',
            'Higher search engine rankings for target keywords',
            'Improved website authority and credibility',
            'Better user experience and site performance',
            'Long-term sustainable growth',
        ],
        deliverables: [
            'Comprehensive SEO audit and competitor analysis',
            'Keyword research and content strategy',
            'On-page optimization (meta tags, headers, content)',
            'Technical SEO fixes and improvements',
            'Quality backlink building campaign',
            'Monthly performance reports and insights',
        ],
        process: [
            { step: 'Audit & Analysis', description: 'Comprehensive review of your current SEO performance and opportunities' },
            { step: 'Strategy Development', description: 'Custom SEO roadmap tailored to your business goals' },
            { step: 'Implementation', description: 'Execute on-page, off-page, and technical optimizations' },
            { step: 'Monitoring & Optimization', description: 'Continuous tracking and refinement for maximum results' },
        ],
        recommendedServices: ['digital-audits', 'content-marketing', 'data-analytics'],
    },
    {
        id: 2,
        slug: 'performance-marketing',
        title: 'Performance Marketing',
        category: 'Advertising',
        description: 'Maximize ROI with targeted paid campaigns across Google, Meta, and LinkedIn.',
        tags: ['PPC', 'Social Ads', 'Retargeting'],
        fullDescription: 'Drive measurable results with our performance marketing services. We create, manage, and optimize paid advertising campaigns across Google Ads, Meta (Facebook & Instagram), LinkedIn, and other platforms. Our data-driven approach ensures every rupee spent delivers maximum return on investment through precise targeting, compelling ad creative, and continuous optimization.',
        benefits: [
            'Measurable ROI and performance tracking',
            'Precise audience targeting and segmentation',
            'Quick results and scalable growth',
            'Lower customer acquisition costs',
            'Full campaign transparency and control',
        ],
        deliverables: [
            'Campaign strategy and planning',
            'Ad creative development and testing',
            'Platform setup and configuration',
            'Bid management and optimization',
            'A/B testing and conversion tracking',
            'Detailed performance dashboards and reports',
        ],
        process: [
            { step: 'Goal Setting', description: 'Define KPIs, budget, and campaign objectives' },
            { step: 'Campaign Setup', description: 'Create ads, targeting, and tracking infrastructure' },
            { step: 'Launch & Monitor', description: 'Deploy campaigns and monitor initial performance' },
            { step: 'Optimize & Scale', description: 'Continuous testing and scaling of winning campaigns' },
        ],
        recommendedServices: ['data-analytics', 'content-marketing', 'seo'],
    },
    {
        id: 3,
        slug: 'influencer-collaboration',
        title: 'Influencer Collaboration',
        category: 'PR',
        description: 'Connect with authentic voices to amplify your brand message and reach new audiences.',
        tags: ['Outreach', 'Management', 'Campaigns'],
        fullDescription: 'Leverage the power of influencer marketing to build trust, expand reach, and drive conversions. We identify, vet, and manage relationships with influencers who align with your brand values and speak directly to your target audience. From micro-influencers to industry leaders, we orchestrate authentic partnerships that deliver real business results.',
        benefits: [
            'Access to engaged, relevant audiences',
            'Enhanced brand credibility and trust',
            'Authentic content creation and storytelling',
            'Increased brand awareness and reach',
            'Higher engagement and conversion rates',
        ],
        deliverables: [
            'Influencer research and vetting',
            'Campaign strategy and creative briefs',
            'Contract negotiation and management',
            'Content approval and quality control',
            'Campaign execution and coordination',
            'Performance tracking and ROI reporting',
        ],
        process: [
            { step: 'Discovery', description: 'Identify ideal influencers aligned with your brand' },
            { step: 'Outreach & Negotiation', description: 'Connect with influencers and finalize partnerships' },
            { step: 'Campaign Execution', description: 'Coordinate content creation and publication' },
            { step: 'Measure & Report', description: 'Track performance and calculate campaign ROI' },
        ],
        recommendedServices: ['social-media-management', 'content-marketing', 'brand-strategy'],
    },
    {
        id: 4,
        slug: 'content-marketing',
        title: 'Content Marketing',
        category: 'Content',
        description: 'Engage your audience with compelling storytelling that builds trust and authority.',
        tags: ['Strategy', 'Copywriting', 'Distribution'],
        fullDescription: 'Transform your brand into a trusted thought leader with strategic content marketing. We create high-quality, valuable content that educates, engages, and converts your target audience. From blog posts and whitepapers to video scripts and email campaigns, our content speaks directly to your customers\' needs and positions your brand as the go-to solution.',
        benefits: [
            'Build brand authority and thought leadership',
            'Nurture leads through the buyer journey',
            'Improve SEO with quality content',
            'Increase engagement across channels',
            'Generate qualified leads organically',
        ],
        deliverables: [
            'Content strategy and editorial calendar',
            'Blog posts, articles, and long-form content',
            'Social media content and captions',
            'Email newsletters and campaigns',
            'Video scripts and multimedia content',
            'Content performance analytics',
        ],
        process: [
            { step: 'Strategy Development', description: 'Define content pillars, topics, and distribution channels' },
            { step: 'Content Creation', description: 'Research, write, and design compelling content' },
            { step: 'Distribution', description: 'Publish and promote across relevant platforms' },
            { step: 'Analysis & Iteration', description: 'Measure performance and refine strategy' },
        ],
        recommendedServices: ['seo', 'social-media-management', 'data-analytics'],
    },
    {
        id: 5,
        slug: 'social-media-management',
        title: 'Social Media Management',
        category: 'Social',
        description: 'Build a loyal community and maintain an active, engaging presence on all major platforms.',
        tags: ['Community', 'Scheduling', 'Analytics'],
        fullDescription: 'Dominate social media with consistent, engaging content that builds community and drives business results. We manage your presence across Instagram, Facebook, LinkedIn, Twitter, and more—creating content, engaging with your audience, and growing your follower base. From strategy to execution, we handle everything so you can focus on running your business.',
        benefits: [
            'Consistent brand presence across platforms',
            'Increased engagement and follower growth',
            'Stronger community and customer relationships',
            'Real-time reputation management',
            'Higher brand awareness and recall',
        ],
        deliverables: [
            'Social media strategy and content calendar',
            'Daily content creation and posting',
            'Community management and engagement',
            'Social listening and monitoring',
            'Influencer and partnership coordination',
            'Monthly performance reports and insights',
        ],
        process: [
            { step: 'Audit & Strategy', description: 'Review current presence and define social media goals' },
            { step: 'Content Planning', description: 'Create content calendar aligned with brand voice' },
            { step: 'Execution', description: 'Post content, engage with audience, grow community' },
            { step: 'Monitor & Optimize', description: 'Track metrics and refine content strategy' },
        ],
        recommendedServices: ['content-marketing', 'influencer-collaboration', 'brand-strategy'],
    },
    {
        id: 6,
        slug: 'brand-strategy',
        title: 'Brand Strategy',
        category: 'Strategy',
        description: 'Define your unique voice and position your brand for long-term success in the market.',
        tags: ['Identity', 'Positioning', 'Consulting'],
        fullDescription: 'Build a powerful brand that stands out in a crowded market. We help you define your brand identity, positioning, and messaging to create a cohesive, compelling brand experience. From visual identity to brand voice, we ensure every touchpoint reinforces your unique value proposition and resonates with your target audience.',
        benefits: [
            'Clear brand differentiation and positioning',
            'Consistent brand experience across touchpoints',
            'Stronger emotional connection with customers',
            'Improved brand recognition and recall',
            'Strategic foundation for all marketing efforts',
        ],
        deliverables: [
            'Brand audit and competitive analysis',
            'Brand positioning and messaging framework',
            'Visual identity guidelines (logo, colors, typography)',
            'Brand voice and tone guidelines',
            'Brand storytelling and narrative',
            'Implementation roadmap and support',
        ],
        process: [
            { step: 'Discovery', description: 'Understand your business, audience, and competitive landscape' },
            { step: 'Strategy Development', description: 'Define positioning, messaging, and brand architecture' },
            { step: 'Identity Creation', description: 'Develop visual and verbal brand identity' },
            { step: 'Implementation', description: 'Roll out brand across all touchpoints' },
        ],
        recommendedServices: ['content-marketing', 'social-media-management', 'digital-audits'],
    },
    {
        id: 7,
        slug: 'digital-audits',
        title: 'Digital Audits',
        category: 'Analysis',
        description: 'Comprehensive analysis of your digital presence to identify opportunities and optimize performance.',
        tags: ['Site Audit', 'UX Review', 'Competitor Analysis'],
        fullDescription: 'Gain clarity on your digital marketing performance with our comprehensive audits. We analyze your website, SEO, content, social media, and paid campaigns to identify strengths, weaknesses, and untapped opportunities. Our detailed reports provide actionable recommendations to improve performance and maximize ROI across all digital channels.',
        benefits: [
            'Clear understanding of current performance',
            'Identification of quick wins and opportunities',
            'Data-backed recommendations for improvement',
            'Competitive insights and benchmarking',
            'Strategic roadmap for optimization',
        ],
        deliverables: [
            'Website technical and UX audit',
            'SEO performance analysis',
            'Content audit and gap analysis',
            'Social media performance review',
            'Competitor benchmarking report',
            'Prioritized action plan with recommendations',
        ],
        process: [
            { step: 'Data Collection', description: 'Gather analytics, tools data, and competitive intel' },
            { step: 'Analysis', description: 'Deep dive into performance across all digital channels' },
            { step: 'Reporting', description: 'Create comprehensive audit report with findings' },
            { step: 'Recommendations', description: 'Present actionable roadmap for improvement' },
        ],
        recommendedServices: ['seo', 'data-analytics', 'performance-marketing'],
    },
    {
        id: 8,
        slug: 'data-analytics',
        title: 'Data Analytics',
        category: 'Insights',
        description: 'Transform raw data into actionable insights to guide your marketing decisions and growth.',
        tags: ['Reporting', 'Tracking', 'Visualization'],
        fullDescription: 'Make smarter marketing decisions with comprehensive data analytics. We set up tracking, create custom dashboards, and deliver insights that drive strategy. From Google Analytics to custom reporting, we turn complex data into clear, actionable recommendations that help you understand what\'s working, what\'s not, and where to invest for maximum impact.',
        benefits: [
            'Data-driven decision making',
            'Clear visibility into marketing performance',
            'Improved campaign ROI and efficiency',
            'Early identification of trends and opportunities',
            'Unified view of performance across channels',
        ],
        deliverables: [
            'Analytics setup and configuration',
            'Custom dashboard creation',
            'Conversion tracking and goal setup',
            'Regular performance reports',
            'Data visualization and insights',
            'Strategic recommendations based on data',
        ],
        process: [
            { step: 'Setup & Integration', description: 'Implement tracking across platforms and tools' },
            { step: 'Dashboard Creation', description: 'Build custom dashboards for key metrics' },
            { step: 'Monitoring', description: 'Track performance and identify trends' },
            { step: 'Insights & Action', description: 'Deliver insights and optimization recommendations' },
        ],
        recommendedServices: ['digital-audits', 'performance-marketing', 'seo'],
    },
]

export function getServiceBySlug(slug: string): Service | undefined {
    return services.find(service => service.slug === slug)
}

export function getRecommendedServices(slugs: string[]): Service[] {
    return services.filter(service => slugs.includes(service.slug))
}
