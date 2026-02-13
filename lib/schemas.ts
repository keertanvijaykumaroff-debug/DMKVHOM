// Schema.org structured data utilities for SEO

export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DMKV House of Marketing",
    "alternateName": "DMKV",
    "url": "https://www.dmkvhouseofmarketing.com",
    "logo": "https://www.dmkvhouseofmarketing.com/logo.png",
    "description": "Leading digital marketing agency offering SEO, performance marketing, and brand strategy. Transform your business with data-driven digital marketing solutions.",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bangalore",
        "addressRegion": "Karnataka",
        "addressCountry": "IN"
    },
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-8861771361",
        "contactType": "customer service",
        "availableLanguage": ["en", "hi"]
    },
    "founder": {
        "@type": "Person",
        "name": "Keertan Vijaykumar"
    }
}

export const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "DMKV House of Marketing",
    "image": "https://www.dmkvhouseofmarketing.com/logo.png",
    "@id": "https://www.dmkvhouseofmarketing.com",
    "url": "https://www.dmkvhouseofmarketing.com",
    "telephone": "+91-8861771361",
    "priceRange": "$$",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bangalore",
        "addressLocality": "Bangalore",
        "addressRegion": "Karnataka",
        "postalCode": "560001",
        "addressCountry": "IN"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": 12.9716,
        "longitude": 77.5946
    },
    "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
    }
}

export const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "DMKV House of Marketing",
    "url": "https://www.dmkvhouseofmarketing.com",
    "potentialAction": {
        "@type": "SearchAction",
        "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://www.dmkvhouseofmarketing.com/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
    }
}

export const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Digital Marketing Services",
    "provider": {
        "@type": "Organization",
        "name": "DMKV House of Marketing",
        "url": "https://www.dmkvhouseofmarketing.com"
    },
    "areaServed": {
        "@type": "Country",
        "name": "India"
    },
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Digital Marketing Services",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Search Engine Optimization (SEO)",
                    "description": "Structured organic growth for long-term authority and sustainable digital visibility."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Performance Marketing",
                    "description": "Measurable growth through structured campaigns and strategic execution."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Content Marketing",
                    "description": "Engage your audience with compelling storytelling that builds trust and authority."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Social Media Management",
                    "description": "Build a loyal community and maintain an active, engaging presence on all major platforms."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Brand Strategy",
                    "description": "Define your unique voice and position your brand for long-term success in the market."
                }
            }
        ]
    }
}

export const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Keertan Vijaykumar",
    "jobTitle": "Founder & CEO",
    "worksFor": {
        "@type": "Organization",
        "name": "DMKV House of Marketing"
    },
    "url": "https://www.dmkvhouseofmarketing.com/about-keertan-vijaykumar",
    "image": "https://www.dmkvhouseofmarketing.com/images/clients/keertan.jpeg",
    "description": "Founder of DMKV House of Marketing, a visionary leader passionate about digital innovation and transforming brands through strategic marketing."
}

export function createBreadcrumbSchema(items: { name: string; url: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
        }))
    }
}

export function createBlogPostingSchema(post: {
    title: string
    excerpt: string
    date: string
    slug: string
    content: string
}) {
    return {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "datePublished": post.date,
        "dateModified": post.date,
        "author": {
            "@type": "Organization",
            "name": "DMKV House of Marketing"
        },
        "publisher": {
            "@type": "Organization",
            "name": "DMKV House of Marketing",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.dmkvhouseofmarketing.com/logo.png"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://www.dmkvhouseofmarketing.com/blog/${post.slug}`
        }
    }
}

export function createFAQSchema(faqs: { question: string; answer: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    }
}
