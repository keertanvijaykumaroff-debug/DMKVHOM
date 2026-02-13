import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Refund & Cancellation Policy | DMKV',
    description: 'Understand DMKV House of Marketing refund and cancellation policies for our services.',
}

export default function RefundCancellation() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h1 className="text-5xl md:text-6xl font-bold font-serif">Refund & Cancellation Policy</h1>
                    <p className="text-gray-400">Last Updated: February 2026</p>
                </div>

                <div className="glass p-8 md:p-12 rounded-3xl space-y-8 text-gray-300">
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">1. Service Cancellation</h2>
                        <p>Clients may cancel services under the following conditions:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Before Work Begins:</strong> Full refund of any advance payment</li>
                            <li><strong>During Active Engagement:</strong> 30 days written notice required</li>
                            <li><strong>Monthly Retainer Services:</strong> Cancellation effective at the end of the current billing cycle</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">2. Refund Policy</h2>
                        <p>Refunds are handled as follows:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Project-Based Work:</strong> Refunds calculated based on work completed at the time of cancellation</li>
                            <li><strong>Monthly Retainers:</strong> No refunds for the current month; services continue until the end of the billing period</li>
                            <li><strong>Advance Payments:</strong> Refunded within 15 business days if work has not commenced</li>
                            <li><strong>Service Dissatisfaction:</strong> Evaluated on a case-by-case basis within 7 days of deliverable submission</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">3. Non-Refundable Items</h2>
                        <p>The following are non-refundable:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Completed deliverables that have been approved by the client</li>
                            <li>Third-party costs incurred on behalf of the client (ad spend, tools, subscriptions)</li>
                            <li>Strategy sessions, consultations, and audits already conducted</li>
                            <li>Custom research and reports already delivered</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">4. Cancellation by DMKV</h2>
                        <p>DMKV reserves the right to cancel services if:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Payment is not received within agreed timeframes</li>
                            <li>Client fails to provide necessary information or access</li>
                            <li>Client engages in behavior that violates our terms or ethical standards</li>
                        </ul>
                        <p className="mt-4">In such cases, clients will be charged for all work completed up to the cancellation date.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">5. Refund Processing</h2>
                        <p>Approved refunds will be processed to the original payment method within 15-30 business days. Clients will receive email confirmation once the refund has been initiated.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">6. Dispute Resolution</h2>
                        <p>If you believe you are entitled to a refund and we have denied your request, please contact us to discuss the matter. We are committed to fair and transparent resolution of all disputes.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">7. Contact Us</h2>
                        <p>For cancellation requests or refund inquiries:</p>
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
