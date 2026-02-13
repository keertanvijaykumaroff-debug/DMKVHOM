import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Disclaimer | DMKV',
    description: 'Important disclaimers about DMKV House of Marketing services and website content.',
}

export default function Disclaimer() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h1 className="text-5xl md:text-6xl font-bold font-serif">Disclaimer</h1>
                    <p className="text-gray-400">Last Updated: February 2026</p>
                </div>

                <div className="glass p-8 md:p-12 rounded-3xl space-y-8 text-gray-300">
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">1. General Information</h2>
                        <p>The information provided on this website is for general informational purposes only. While we strive to keep the information up-to-date and accurate, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the information contained herein.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">2. No Guaranteed Results</h2>
                        <p>DMKV House of Marketing provides professional digital marketing services. However, we cannot guarantee specific results from any marketing campaign, including but not limited to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Search engine rankings</li>
                            <li>Website traffic increases</li>
                            <li>Conversion rates</li>
                            <li>Social media engagement</li>
                            <li>Return on investment (ROI)</li>
                        </ul>
                        <p className="mt-4">Marketing outcomes depend on numerous factors beyond our control, including market conditions, competition, platform algorithm changes, and client implementation of recommendations.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">3. Third-Party Platforms</h2>
                        <p>Our services often involve working with third-party platforms (Google, Meta, LinkedIn, etc.). We are not responsible for:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Changes to platform policies or algorithms</li>
                            <li>Platform outages or technical issues</li>
                            <li>Account suspensions or penalties imposed by these platforms</li>
                            <li>Unexpected platform cost increases</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">4. External Links</h2>
                        <p>This website may contain links to external websites. We have no control over the content and nature of these sites and are not responsible for their availability or content. The inclusion of any links does not necessarily imply a recommendation or endorsement.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">5. Professional Advice</h2>
                        <p>Content on this website, including blog posts and resources, is provided for educational and informational purposes only. It should not be construed as professional advice tailored to your specific situation. Always seek professional consultation for your particular business needs.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">6. Changes and Updates</h2>
                        <p>We reserve the right to modify this disclaimer at any time without prior notice. Your continued use of our website and services constitutes acceptance of any changes.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">7. Limitation of Liability</h2>
                        <p>In no event shall DMKV House of Marketing be liable for any direct, indirect, incidental, special, or consequential damages arising from the use of our website or services, including but not limited to business losses, loss of profits, or data loss.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">8. Contact Us</h2>
                        <p>If you have questions about this disclaimer:</p>
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
