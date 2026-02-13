import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Frequently Asked Questions | DMKV House of Marketing",
    description: "Get answers about our digital marketing services, SEO strategies, performance marketing, and how our digital marketing agency helps businesses grow online.",
    alternates: {
        canonical: '/digital-marketing-faq',
    },
}

const faqs = [
    {
        question: "What does DMKV – House of Marketing specialize in?",
        answer: "DMKV is a digital marketing agency specializing in SEO services, performance marketing, brand strategy, and structured growth systems for businesses looking to scale sustainably."
    },
    {
        question: "Is DMKV a digital marketing agency in Bangalore?",
        answer: "Yes, DMKV operates from Bangalore and works with brands locally and across India, offering SEO, paid ads management, and strategic marketing consulting."
    },
    {
        question: "What SEO services do you provide?",
        answer: "We provide on-page SEO, keyword research, technical optimization, content structuring, and authority-building strategies designed to improve organic search rankings."
    },
    {
        question: "How long does SEO take to show results?",
        answer: "SEO is a long-term digital marketing strategy. Results typically build gradually as search engines recognize authority, content relevance, and technical improvements."
    },
    {
        question: "Do you offer performance marketing services?",
        answer: "Yes, we manage performance marketing campaigns including Google Ads and social media advertising focused on lead generation and measurable ROI."
    },
    {
        question: "What industries do you work with?",
        answer: "We work with startups, service-based businesses, corporate brands, B2B companies, and e-commerce businesses seeking digital growth."
    },
    {
        question: "Do you provide social media marketing services?",
        answer: "Yes, we offer social media strategy, content structuring, optimization, and paid promotion support for brand visibility and engagement."
    },
    {
        question: "Can you help generate leads for my business?",
        answer: "Yes. We design structured lead generation funnels using SEO, paid ads, and optimized content strategies."
    },
    {
        question: "What makes DMKV different from other digital marketing agencies?",
        answer: "Unlike traditional agencies, we focus on marketing systems and long-term brand positioning rather than short-term campaign bursts."
    },
    {
        question: "Do you offer digital marketing consulting?",
        answer: "Yes, we provide strategic consulting for brands that need marketing direction, restructuring, or growth planning."
    },
    {
        question: "Do you help startups with digital growth?",
        answer: "Yes. We build foundational marketing systems for startups to improve visibility, conversions, and market positioning."
    },
    {
        question: "Do you work with e-commerce brands?",
        answer: "Yes, we support e-commerce businesses with SEO, paid campaigns, and conversion-focused strategies."
    },
    {
        question: "Do you offer website optimization services?",
        answer: "Yes, we help improve website structure, content clarity, and SEO performance to enhance search rankings and conversions."
    },
    {
        question: "What platforms do you manage ads on?",
        answer: "We manage campaigns on Google Ads, Instagram, Facebook, and other relevant performance platforms depending on business goals."
    },
    {
        question: "Can you improve my Google rankings?",
        answer: "We implement structured SEO strategies designed to improve keyword rankings and online visibility over time."
    },
    {
        question: "Do you help with brand positioning?",
        answer: "Yes, we assist in refining brand messaging, clarity, and authority positioning within your industry."
    },
    {
        question: "Do you provide monthly performance reports?",
        answer: "Yes, we provide structured reporting to track SEO performance, campaign results, and growth indicators."
    },
    {
        question: "Is DMKV suitable for small businesses?",
        answer: "Yes, we work with small and medium businesses looking to strengthen their digital presence and generate consistent leads."
    },
    {
        question: "Do you work with B2B companies?",
        answer: "Yes, we build demand generation and authority strategies for B2B service providers and corporate brands."
    },
    {
        question: "Can you scale campaigns as my business grows?",
        answer: "Yes, our systems are designed to scale alongside your business growth."
    },
    {
        question: "Do you offer marketing audits?",
        answer: "Yes, we conduct digital marketing audits to identify gaps, weaknesses, and growth opportunities."
    },
    {
        question: "How do you approach content marketing?",
        answer: "We align content creation with keyword intent, audience behavior, and conversion objectives."
    },
    {
        question: "Do you provide local SEO services in Bangalore?",
        answer: "Yes, we help businesses improve their visibility in local search results and Google Maps listings."
    },
    {
        question: "Do you help with online brand visibility?",
        answer: "Yes, we focus on increasing brand authority across search engines and social platforms."
    },
    {
        question: "Why should I choose DMKV as my digital marketing partner?",
        answer: "Because we build structured marketing systems designed for sustainable growth, measurable performance, and long-term brand authority."
    }
]

export default function FAQPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold font-serif">Frequently Asked Questions</h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Everything you need to know about our services, strategies, and how we help businesses grow.
                    </p>
                </div>

                <div className="glass p-8 rounded-3xl">
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="border-b border-white/10 last:border-0">
                                <AccordionTrigger className="text-left text-lg font-medium hover:text-white hover:no-underline py-6">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-400 leading-relaxed pb-6 text-base">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </div>
    )
}
