import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Terms & Conditions | DMKV',
    description: 'Read the terms and conditions for using DMKV House of Marketing services.',
    alternates: {
        canonical: '/terms-conditions',
    },
}

export default function TermsConditions() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h1 className="text-5xl md:text-6xl font-bold font-serif">Terms & Conditions</h1>
                    <p className="text-gray-400">Last Updated: February 2026</p>
                </div>

                <div className="glass p-8 md:p-12 rounded-3xl space-y-8 text-gray-300">
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">1. Agreement to Terms</h2>
                        <p>By accessing or using the services of DMKV House of Marketing, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">2. Services</h2>
                        <p>DMKV provides digital marketing services including but not limited to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Search Engine Optimization (SEO)</li>
                            <li>Performance Marketing</li>
                            <li>Content Marketing</li>
                            <li>Social Media Management</li>
                            <li>Brand Strategy</li>
                            <li>Influencer Collaboration</li>
                            <li>Digital Audits</li>
                            <li>Data Analytics</li>
                        </ul>
                        <p className="mt-4">The scope, deliverables, and pricing for services will be defined in individual service agreements or proposals.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">3. Client Responsibilities</h2>
                        <p>Clients agree to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Provide accurate and complete information required for service delivery</li>
                            <li>Respond to requests for information in a timely manner</li>
                            <li>Grant necessary access to accounts, platforms, and resources</li>
                            <li>Review and approve deliverables within agreed timeframes</li>
                            <li>Make payments according to agreed terms</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">4. Payment Terms</h2>
                        <p>Unless otherwise specified in your service agreement:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Payment terms will be outlined in individual proposals</li>
                            <li>Invoices are due within 15 days of receipt unless otherwise agreed</li>
                            <li>Late payments may incur additional fees</li>
                            <li>Services may be suspended for non-payment</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">5. Intellectual Property</h2>
                        <p>All content, materials, and deliverables created by DMKV remain our intellectual property until full payment is received. Upon full payment, clients receive a license to use the deliverables for their business purposes.</p>
                        <p className="mt-4">Clients retain ownership of their pre-existing brand materials, logos, and content provided to us.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">6. Confidentiality</h2>
                        <p>Both parties agree to maintain confidentiality of proprietary information shared during the course of our engagement. This includes business strategies, financial information, and technical data.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">7. Limitation of Liability</h2>
                        <p>DMKV's liability is limited to the amount paid for services. We are not liable for indirect, incidental, or consequential damages arising from our services.</p>
                        <p className="mt-4">We do not guarantee specific results from marketing campaigns, as outcomes depend on various external factors beyond our control.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">8. Termination</h2>
                        <p>Either party may terminate services with 30 days written notice. Clients are responsible for payment of all work completed up to the termination date.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">9. Governing Law</h2>
                        <p>These terms are governed by the laws of India. Any disputes will be subject to the exclusive jurisdiction of courts in India.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">10. Contact Information</h2>
                        <p>For questions about these Terms & Conditions:</p>
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
