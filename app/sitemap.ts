import { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blog-data'
import { faqs } from '@/lib/faq-data'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.dmkvhouseofmarketing.com'
    const now = new Date()

    // Core pages — highest priority
    const coreRoutes = [
        { route: '', priority: 1.0, changeFreq: 'weekly' as const },
        { route: '/about', priority: 0.9, changeFreq: 'monthly' as const },
        { route: '/services', priority: 0.9, changeFreq: 'monthly' as const },
        { route: '/blog', priority: 0.8, changeFreq: 'weekly' as const },
        { route: '/contact', priority: 0.8, changeFreq: 'monthly' as const },
        { route: '/digital-marketing-faq', priority: 0.7, changeFreq: 'monthly' as const },
        { route: '/about-keertan-vijaykumar', priority: 0.7, changeFreq: 'monthly' as const },
    ].map(({ route, priority, changeFreq }) => ({
        url: `${baseUrl}${route}`,
        lastModified: now,
        changeFrequency: changeFreq,
        priority,
    }))

    // About sub-pages
    const aboutRoutes = [
        '/about/story',
        '/about/missions',
        '/about/journey',
        '/about/values',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }))

    // Services sub-pages
    const serviceRoutes = [
        '/services/seo',
        '/services/performance',
        '/services/social',
        '/services/content',
        '/services/analytics',
        '/services/strategy',
        '/services/audits',
        '/services/influencers',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    // Legal pages — noindex, so excluded from sitemap to prevent conflicting signals
    // They are still linked from footer for users who need them

    // Blog posts
    const blogRoutes = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'weekly' as const,
        priority: 0.6,
    }))

    // FAQ pages
    const faqRoutes = faqs.map((faq) => ({
        url: `${baseUrl}/digital-marketing-faq/${faq.slug}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.5,
    }))

    return [...coreRoutes, ...aboutRoutes, ...serviceRoutes, ...blogRoutes, ...faqRoutes]
}
