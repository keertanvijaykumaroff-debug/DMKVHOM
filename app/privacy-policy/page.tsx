import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Privacy Policy | DMKV',
    description: 'Learn how DMKV House of Marketing collects, uses, and protects your personal information.',
}

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h1 className="text-5xl md:text-6xl font-bold font-serif">Privacy Policy</h1>
                    <p className="text-gray-400">Last Updated: February 2026</p>
                </div>

                <div className="glass p-8 md:p-12 rounded-3xl space-y-8 text-gray-300">
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">1. Information We Collect</h2>
                        <p>DMKV House of Marketing ("we", "us", or "our") collects information that you provide directly to us when you:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Fill out our contact form</li>
                            <li>Subscribe to our newsletter</li>
                            <li>Engage with our services</li>
                            <li>Communicate with us via email, phone, or WhatsApp</li>
                        </ul>
                        <p>This information may include your name, email address, phone number, company name, and any other details you choose to provide.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">2. How We Use Your Information</h2>
                        <p>We use the information we collect to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Respond to your inquiries and provide customer support</li>
                            <li>Deliver our digital marketing services</li>
                            <li>Send you updates about our services and industry insights</li>
                            <li>Improve our website and service offerings</li>
                            <li>Comply with legal obligations</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">3. Information Sharing</h2>
                        <p>We do not sell, trade, or rent your personal information to third parties. We may share your information with:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Service Providers:</strong> Third-party vendors who assist in our operations (e.g., Formspree for form submissions)</li>
                            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                            <li><strong>Business Transfers:</strong> In connection with any merger, sale, or acquisition</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">4. Data Security</h2>
                        <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">5. Your Rights</h2>
                        <p>You have the right to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Access the personal information we hold about you</li>
                            <li>Request correction of inaccurate information</li>
                            <li>Request deletion of your information</li>
                            <li>Opt-out of marketing communications</li>
                            <li>Lodge a complaint with a data protection authority</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">6. Cookies and Tracking</h2>
                        <p>We use cookies and similar tracking technologies to enhance your browsing experience. For more details, please see our <a href="/cookie-policy" className="text-white underline hover:text-gray-300">Cookie Policy</a>.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">7. Contact Us</h2>
                        <p>If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:</p>
                        <ul className="list-none space-y-2 mt-4">
                            <li><strong>Phone:</strong> +91 8861771361</li>
                            <li><strong>WhatsApp:</strong> +91 8861771361</li>
                            <li><strong>Email:</strong> Through our <a href="/contact" className="text-white underline hover:text-gray-300">contact form</a></li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    )
}
