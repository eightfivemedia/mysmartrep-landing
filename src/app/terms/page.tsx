import Link from 'next/link'
import type { Metadata } from 'next'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Terms of Service - SmartRep',
  description: 'SmartRep terms of service and user agreement',
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link
            href="/"
            className="text-primary hover:text-primary-light transition inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
        <p className="text-gray-400 mb-8">Last updated: December 15, 2024</p>

        <div className="prose prose-invert prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-300">
              By downloading, installing, or using the SmartRep mobile application
              ("App"), you agree to be bound by these Terms of Service ("Terms").
              If you do not agree to these Terms, do not use the App.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Description of Service</h2>
            <p className="text-gray-300 mb-4">
              SmartRep provides:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>AI-powered workout analysis and feedback</li>
              <li>Personalized meal planning</li>
              <li>AI fitness coaching via chat</li>
              <li>Progress tracking and analytics</li>
              <li>Workout logging and history</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. User Accounts</h2>

            <h3 className="text-xl font-semibold mb-3 text-primary">3.1 Account Creation</h3>
            <p className="text-gray-300 mb-4">
              You must create an account to use SmartRep. You agree to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of unauthorized access</li>
              <li>Be responsible for all activity under your account</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-primary">3.2 Account Termination</h3>
            <p className="text-gray-300">
              We reserve the right to suspend or terminate accounts that violate these
              Terms or engage in fraudulent, abusive, or illegal activity.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Subscription and Payment</h2>

            <h3 className="text-xl font-semibold mb-3 text-primary">4.1 Free Tier</h3>
            <p className="text-gray-300 mb-4">
              SmartRep offers a free tier with limited features. Free tier usage is
              subject to monthly limits on AI analysis and features.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-primary">4.2 Premium Subscriptions</h3>
            <p className="text-gray-300 mb-4">
              Premium subscriptions are available:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li><strong>Monthly Premium:</strong> $9.99/month, billed monthly</li>
              <li><strong>Yearly Premium:</strong> $89.99/year, billed annually</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-primary">4.3 Billing</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>All payments processed through Apple App Store</li>
              <li>Subscriptions auto-renew unless canceled 24 hours before renewal</li>
              <li>No refunds for partial subscription periods</li>
              <li>Manage subscriptions in iPhone Settings → App Store</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-primary">4.4 Free Trial</h3>
            <p className="text-gray-300">
              New users may receive a 7-day free trial. You will be charged automatically
              after the trial unless you cancel before it ends.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Acceptable Use</h2>
            <p className="text-gray-300 mb-4">You agree NOT to:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Use the App for any illegal purpose</li>
              <li>Attempt to reverse engineer or hack the App</li>
              <li>Share your account with others</li>
              <li>Abuse or overload our AI systems</li>
              <li>Upload harmful, offensive, or inappropriate content</li>
              <li>Scrape or collect data from the App</li>
              <li>Violate others' privacy or intellectual property rights</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Medical Disclaimer</h2>
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6 mb-4">
              <p className="text-yellow-200 font-semibold mb-2">⚠️ Important Health Notice</p>
              <p className="text-gray-300">
                SmartRep is NOT a medical device and does not provide medical advice.
                The AI-generated workout analysis, meal plans, and coaching are for
                informational and educational purposes only.
              </p>
            </div>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Always consult a physician before starting any fitness program</li>
              <li>Stop exercising if you experience pain, dizziness, or discomfort</li>
              <li>We are not liable for injuries or health issues resulting from App use</li>
              <li>Individual results may vary</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Intellectual Property</h2>
            <p className="text-gray-300 mb-4">
              All App content, features, and functionality (including but not limited to
              software, AI models, text, graphics, logos) are owned by SmartRep and
              protected by copyright, trademark, and other laws.
            </p>
            <p className="text-gray-300">
              <strong>Your Data:</strong> You retain ownership of your workout data and
              personal information. By using the App, you grant us a license to use your
              data to provide and improve our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-300 mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, SMARTREP SHALL NOT BE LIABLE FOR:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Any indirect, incidental, or consequential damages</li>
              <li>Loss of profits, data, or business opportunities</li>
              <li>Injuries or health issues from following App recommendations</li>
              <li>Service interruptions or technical issues</li>
              <li>Third-party actions or content</li>
            </ul>
            <p className="text-gray-300 mt-4">
              Our total liability shall not exceed the amount you paid for the subscription
              in the past 12 months.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">9. Warranty Disclaimer</h2>
            <p className="text-gray-300">
              THE APP IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. WE DO NOT
              GUARANTEE:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mt-4">
              <li>Uninterrupted or error-free service</li>
              <li>Accuracy of AI-generated analysis or recommendations</li>
              <li>Specific fitness or health outcomes</li>
              <li>Compatibility with all devices</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">10. Changes to Service</h2>
            <p className="text-gray-300">
              We reserve the right to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mt-4">
              <li>Modify or discontinue features at any time</li>
              <li>Change subscription pricing with 30 days notice</li>
              <li>Update these Terms (changes effective immediately upon posting)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">11. Governing Law</h2>
            <p className="text-gray-300">
              These Terms are governed by the laws of [Your State/Country], without
              regard to conflict of law provisions. Any disputes shall be resolved
              through binding arbitration or in courts located in [Your Jurisdiction].
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">12. Contact Information</h2>
            <p className="text-gray-300 mb-2">
              For questions about these Terms, contact us:
            </p>
            <div className="text-gray-300 space-y-1">
              <p>Email: <a href="mailto:legal@mysmartrep.com" className="text-primary hover:underline">legal@mysmartrep.com</a></p>
              <p>Support: <a href="mailto:support@mysmartrep.com" className="text-primary hover:underline">support@mysmartrep.com</a></p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}

