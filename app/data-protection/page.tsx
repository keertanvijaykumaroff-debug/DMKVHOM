import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Data Protection Policy | DMKV',
    description: 'Learn about DMKV House of Marketing data protection and security measures.',
    alternates: {
        canonical: '/data-protection',
    },
}

export default function DataProtection() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h1 className="text-5xl md:text-6xl font-bold font-serif">Data Protection Policy</h1>
                    <p className="text-gray-400">Last Updated: February 2026</p>
                </div>

                <div className="glass p-8 md:p-12 rounded-3xl space-y-8 text-gray-300">
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">1. Our Commitment</h2>
                        <p>DMKV House of Marketing is committed to protecting the personal data of our clients, website visitors, and business partners. This Data Protection Policy outlines our practices for collecting, using, storing, and safeguarding personal information in compliance with applicable data protection laws.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">2. Data Protection Principles</h2>
                        <p>We process personal data in accordance with the following principles:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Lawfulness, Fairness, and Transparency:</strong> We process data legally and transparently</li>
                            <li><strong>Purpose Limitation:</strong> Data is collected for specified, explicit, and legitimate purposes</li>
                            <li><strong>Data Minimization:</strong> We collect only what is necessary for our purposes</li>
                            <li><strong>Accuracy:</strong> We take steps to keep personal data accurate and up-to-date</li>
                            <li><strong>Storage Limitation:</strong> Data is retained only as long as necessary</li>
                            <li><strong>Integrity and Confidentiality:</strong> Data is processed securely to prevent unauthorized access</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">3. Types of Data We Collect</h2>
                        <p>We may collect and process the following types of personal data:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Contact Information:</strong> Name, email, phone number, company name</li>
                            <li><strong>Professional Information:</strong> Job title, industry, business requirements</li>
                            <li><strong>Technical Data:</strong> IP address, browser type, device information</li>
                            <li><strong>Usage Data:</strong> Website analytics and interaction patterns</li>
                            <li><strong>Marketing Data:</strong> Communication preferences and engagement history</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">4. Legal Basis for Processing</h2>
                        <p>We process personal data based on:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Consent:</strong> When you provide explicit consent</li>
                            <li><strong>Contract:</strong> When necessary to fulfill our service agreements</li>
                            <li><strong>Legal Obligation:</strong> When required by law</li>
                            <li><strong>Legitimate Interests:</strong> For business operations, provided it doesn't override your rights</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">5. Data Security Measures</h2>
                        <p>We implement appropriate technical and organizational measures to protect personal data:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Encryption of data in transit and at rest</li>
                            <li>Access controls and authentication mechanisms</li>
                            <li>Regular security assessments and audits</li>
                            <li>Employee training on data protection</li>
                            <li>Secure data backup and recovery procedures</li>
                            <li>Incident response and breach notification protocols</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">6. Data Retention</h2>
                        <p>We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, including:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Duration of our business relationship</li>
                            <li>Legal and regulatory requirements</li>
                            <li>Dispute resolution and legal defense</li>
                        </ul>
                        <p className="mt-4">When data is no longer required, we securely delete or anonymize it.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">7. Your Rights</h2>
                        <p>Under applicable data protection laws, you have the following rights:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Right to Access:</strong> Request copies of your personal data</li>
                            <li><strong>Right to Rectification:</strong> Request correction of inaccurate data</li>
                            <li><strong>Right to Erasure:</strong> Request deletion of your data</li>
                            <li><strong>Right to Restrict Processing:</strong> Limit how we use your data</li>
                            <li><strong>Right to Data Portability:</strong> Receive your data in a structured format</li>
                            <li><strong>Right to Object:</strong> Object to certain types of processing</li>
                            <li><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">8. International Data Transfers</h2>
                        <p>If we transfer personal data outside of India, we ensure appropriate safeguards are in place to protect your data in accordance with applicable laws.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">9. Data Breach Notification</h2>
                        <p>In the event of a data breach that poses a risk to your rights and freedoms, we will notify you and relevant authorities in accordance with applicable data protection laws.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">10. Contact Our Data Protection Officer</h2>
                        <p>For data protection inquiries or to exercise your rights:</p>
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
