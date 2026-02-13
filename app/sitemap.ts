import { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blog-data'
import { services } from '@/lib/services-data'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.dmkvhouseofmarketing.com'

    const staticRoutes = [
        '',
        '/about',
        '/services',
        '/blog',
        '/contact',
        '/digital-marketing-faq',
        '/about-keertan-vijaykumar',
        '/privacy-policy',
        '/terms-conditions',
        '/refund-cancellation',
        '/disclaimer',
        '/cookie-policy',
        '/data-protection',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : route === '/privacy-policy' || route === '/terms-conditions' ? 0.5 : 0.8,
    }))

    const blogRoutes = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'weekly' as const,
        priority: 0.6,
    }))

    const serviceRoutes = services.map((service) => ({
        url: `${baseUrl}/services/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    return [...staticRoutes, ...blogRoutes, ...serviceRoutes]
}
