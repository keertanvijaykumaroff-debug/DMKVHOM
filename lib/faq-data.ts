export type FAQ = {
    question: string;
    answer: string;
    slug: string;
    category: 'General' | 'SEO' | 'Ads' | 'Strategy' | 'Content';
};

export const faqs: FAQ[] = [
    // General & Branding
    {
        question: "What does DMKV – House of Marketing specialize in?",
        answer: "DMKV is a digital marketing agency specializing in SEO services, performance marketing, brand strategy, and structured growth systems for businesses looking to scale sustainably.",
        slug: "dmkv-specialization",
        category: 'General'
    },
    {
        question: "Is DMKV a digital marketing agency in Bangalore?",
        answer: "Yes, DMKV operates from Bangalore and works with brands locally and across India, offering SEO, paid ads management, and strategic marketing consulting.",
        slug: "digital-marketing-agency-bangalore",
        category: 'General'
    },
    {
        question: "What makes DMKV different from other digital marketing agencies?",
        answer: "Unlike traditional agencies, we focus on marketing systems and long-term brand positioning rather than short-term campaign bursts.",
        slug: "dmkv-difference",
        category: 'General'
    },
    {
        question: "Why should I choose DMKV as my digital marketing partner?",
        answer: "Because we build structured marketing systems designed for sustainable growth, measurable performance, and long-term brand authority.",
        slug: "why-choose-dmkv",
        category: 'General'
    },
    {
        question: "Is DMKV suitable for small businesses?",
        answer: "Yes, we work with small and medium businesses looking to strengthen their digital presence and generate consistent leads.",
        slug: "suitable-for-small-businesses",
        category: 'General'
    },

    // Search Engine Optimization
    {
        question: "What SEO services do you provide?",
        answer: "We provide on-page SEO, keyword research, technical optimization, content structuring, and authority-building strategies designed to improve organic search rankings.",
        slug: "seo-services",
        category: 'SEO'
    },
    {
        question: "How long does SEO take to show results?",
        answer: "SEO is a long-term digital marketing strategy. Results typically build gradually as search engines recognize authority, content relevance, and technical improvements.",
        slug: "seo-results-timeframe",
        category: 'SEO'
    },
    {
        question: "Do you provide local SEO services in Bangalore?",
        answer: "Yes, we help businesses improve their visibility in local search results and Google Maps listings.",
        slug: "local-seo-bangalore",
        category: 'SEO'
    },
    {
        question: "Can you improve my Google rankings?",
        answer: "We implement structured SEO strategies designed to improve keyword rankings and online visibility over time.",
        slug: "improve-google-rankings",
        category: 'SEO'
    },
    {
        question: "Do you offer website optimization services?",
        answer: "Yes, we help improve website structure, content clarity, and SEO performance to enhance search rankings and conversions.",
        slug: "website-optimization-services",
        category: 'SEO'
    },

    // Performance & Ads
    {
        question: "Do you offer performance marketing services?",
        answer: "Yes, we manage performance marketing campaigns including Google Ads and social media advertising focused on lead generation and measurable ROI.",
        slug: "performance-marketing-services",
        category: 'Ads'
    },
    {
        question: "What platforms do you manage ads on?",
        answer: "We manage campaigns on Google Ads, Instagram, Facebook, and other relevant performance platforms depending on business goals.",
        slug: "ad-platforms-managed",
        category: 'Ads'
    },
    {
        question: "Can you scale campaigns as my business grows?",
        answer: "Yes, our systems are designed to scale alongside your business growth.",
        slug: "scaling-campaigns",
        category: 'Ads'
    },
    {
        question: "Do you provide monthly performance reports?",
        answer: "Yes, we provide structured reporting to track SEO performance, campaign results, and growth indicators.",
        slug: "performance-reports",
        category: 'Ads'
    },

    // Strategy & Business
    {
        question: "What industries do you work with?",
        answer: "We work with startups, service-based businesses, corporate brands, B2B companies, and e-commerce businesses seeking digital growth.",
        slug: "industries-we-serve",
        category: 'Strategy'
    },
    {
        question: "Do you offer digital marketing consulting?",
        answer: "Yes, we provide strategic consulting for brands that need marketing direction, restructuring, or growth planning.",
        slug: "digital-marketing-consulting",
        category: 'Strategy'
    },
    {
        question: "Do you help startups with digital growth?",
        answer: "Yes. We build foundational marketing systems for startups to improve visibility, conversions, and market positioning.",
        slug: "startup-digital-growth",
        category: 'Strategy'
    },
    {
        question: "Do you work with e-commerce brands?",
        answer: "Yes, we support e-commerce businesses with SEO, paid campaigns, and conversion-focused strategies.",
        slug: "ecommerce-marketing-support",
        category: 'Strategy'
    },
    {
        question: "Do you help with brand positioning?",
        answer: "Yes, we assist in refining brand messaging, clarity, and authority positioning within your industry.",
        slug: "brand-positioning-help",
        category: 'Strategy'
    },
    {
        question: "Do you work with B2B companies?",
        answer: "Yes, we build demand generation and authority strategies for B2B service providers and corporate brands.",
        slug: "b2b-marketing-services",
        category: 'Strategy'
    },
    {
        question: "Do you offer marketing audits?",
        answer: "Yes, we conduct digital marketing audits to identify gaps, weaknesses, and growth opportunities.",
        slug: "marketing-audits",
        category: 'Strategy'
    },

    // Content & Social
    {
        question: "Do you provide social media marketing services?",
        answer: "Yes, we offer social media strategy, content structuring, optimization, and paid promotion support for brand visibility and engagement.",
        slug: "social-media-marketing",
        category: 'Content'
    },
    {
        question: "Can you help generate leads for my business?",
        answer: "Yes. We design structured lead generation funnels using SEO, paid ads, and optimized content strategies.",
        slug: "lead-generation-help",
        category: 'Content'
    },
    {
        question: "How do you approach content marketing?",
        answer: "We align content creation with keyword intent, audience behavior, and conversion objectives.",
        slug: "content-marketing-approach",
        category: 'Content'
    },
    {
        question: "Do you help with online brand visibility?",
        answer: "Yes, we focus on increasing brand authority across search engines and social platforms.",
        slug: "brand-visibility-strategies",
        category: 'Content'
    }
];
