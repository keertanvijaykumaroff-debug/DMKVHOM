import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Cookie Policy | DMKV',
    description: 'Learn about how DMKV House of Marketing uses cookies and similar technologies.',
    alternates: {
        canonical: '/cookie-policy',
    },
}

export default function CookiePolicy() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h1 className="text-5xl md:text-6xl font-bold font-serif">Cookie Policy</h1>
                    <p className="text-gray-400">Last Updated: February 2026</p>
                </div>

                <div className="glass p-8 md:p-12 rounded-3xl space-y-8 text-gray-300">
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">1. What Are Cookies?</h2>
                        <p>Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">2. How We Use Cookies</h2>
                        <p>DMKV House of Marketing uses cookies to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Understand how you use our website</li>
                            <li>Remember your preferences and settings</li>
                            <li>Analyze website traffic and user behavior</li>
                            <li>Improve website performance and user experience</li>
                            <li>Provide personalized content and recommendations</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">3. Types of Cookies We Use</h2>

                        <div className="space-y-4 mt-4">
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">Essential Cookies</h3>
                                <p>These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.</p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">Analytics Cookies</h3>
                                <p>We use analytics cookies to understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website and services.</p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">Functionality Cookies</h3>
                                <p>These cookies allow us to remember choices you make (such as your preferred language) and provide enhanced, more personalized features.</p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">Marketing Cookies</h3>
                                <p>We may use marketing cookies to track visitors across websites to display relevant and engaging advertisements.</p>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">4. Third-Party Cookies</h2>
                        <p>We may use third-party services that also set cookies on your device. These may include:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Google Analytics:</strong> To analyze website traffic and usage</li>
                            <li><strong>Social Media Platforms:</strong> To enable social sharing features</li>
                            <li><strong>Advertising Networks:</strong> To deliver targeted advertisements</li>
                        </ul>
                        <p className="mt-4">These third parties have their own privacy policies, which we encourage you to review.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">5. Managing Cookies</h2>
                        <p>You can control and manage cookies in various ways:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Browser Settings:</strong> Most browsers allow you to refuse or delete cookies</li>
                            <li><strong>Opt-Out Tools:</strong> Many advertising networks offer opt-out mechanisms</li>
                            <li><strong>Do Not Track:</strong> You can enable "Do Not Track" in your browser settings</li>
                        </ul>
                        <p className="mt-4"><strong>Note:</strong> Disabling cookies may affect the functionality and features of our website.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">6. Cookie Duration</h2>
                        <p>Cookies may be:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Session Cookies:</strong> Temporary cookies that expire when you close your browser</li>
                            <li><strong>Persistent Cookies:</strong> Cookies that remain on your device for a set period or until you delete them</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">7. Updates to This Policy</h2>
                        <p>We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business practices. We encourage you to review this policy periodically.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">8. Contact Us</h2>
                        <p>If you have questions about our use of cookies:</p>
                        <ul className="list-none space-y-2 mt-4">
                            <li><strong>Phone:</strong> +91 8861771361</li>
                            <li><strong>WhatsApp:</strong> +91 8861771361</li>
                            <li><strong>Website:</strong> <a href="/contact" className="text-white underline hover:text-gray-300">Contact Form</a></li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    )
}
