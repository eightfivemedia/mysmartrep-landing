import Link from 'next/link'
import type { Metadata } from 'next'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy - SmartRep',
  description: 'SmartRep privacy policy and data handling practices',
}

export default function PrivacyPolicy() {
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
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-400 mb-8">Last updated: December 15, 2024</p>

        <div className="prose prose-invert prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="text-gray-300 mb-4">
              Welcome to SmartRep ("we," "our," or "us"). We respect your privacy and are
              committed to protecting your personal data. This privacy policy explains how
              we collect, use, and safeguard your information when you use our mobile application.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>

            <h3 className="text-xl font-semibold mb-3 text-primary">2.1 Information You Provide</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>Account information (email, name)</li>
              <li>Workout data (exercises, sets, reps, weight)</li>
              <li>Body metrics (optional: weight, height, age)</li>
              <li>Dietary preferences and meal plans</li>
              <li>Chat messages with AI coach</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-primary">2.2 Automatically Collected Information</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>Device information (iOS version, device model)</li>
              <li>Usage data (features used, session duration)</li>
              <li>Analytics data (app performance, crashes)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Provide AI-powered workout analysis and coaching</li>
              <li>Generate personalized meal plans</li>
              <li>Track your fitness progress over time</li>
              <li>Improve our AI models and app features</li>
              <li>Send important updates about your account</li>
              <li>Provide customer support</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Data Storage and Security</h2>
            <p className="text-gray-300 mb-4">
              Your data is encrypted in transit and at rest. We use industry-standard security
              measures including:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>SSL/TLS encryption for data transmission</li>
              <li>Encrypted cloud storage (Firebase)</li>
              <li>Regular security audits and updates</li>
              <li>Limited employee access to user data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Data Sharing</h2>
            <p className="text-gray-300 mb-4">
              We do NOT sell your personal data. We only share data with:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li><strong>AI Service Providers:</strong> To generate workout analysis and coaching responses</li>
              <li><strong>Cloud Infrastructure:</strong> Firebase/Google Cloud for secure data storage</li>
              <li><strong>Analytics Services:</strong> Anonymized usage data to improve the app</li>
              <li><strong>Payment Processors:</strong> Apple for in-app purchases (we don't see your payment info)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
            <p className="text-gray-300 mb-4">You have the right to:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li><strong>Access:</strong> Request a copy of your data</li>
              <li><strong>Delete:</strong> Request deletion of your account and data</li>
              <li><strong>Export:</strong> Download your workout data (CSV/PDF)</li>
              <li><strong>Correct:</strong> Update incorrect information</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing emails</li>
            </ul>
            <p className="text-gray-300 mt-4">
              To exercise these rights, contact us at{' '}
              <a href="mailto:privacy@mysmartrep.com" className="text-primary hover:underline">
                privacy@mysmartrep.com
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Children's Privacy</h2>
            <p className="text-gray-300">
              SmartRep is not intended for users under 13 years old. We do not knowingly
              collect data from children under 13. If you believe a child has provided us
              with personal information, please contact us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Changes to This Policy</h2>
            <p className="text-gray-300">
              We may update this privacy policy from time to time. We will notify you of
              any changes by posting the new policy on this page and updating the "Last
              updated" date. Continued use of the app after changes constitutes acceptance.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">9. Contact Us</h2>
            <p className="text-gray-300 mb-2">
              If you have questions about this privacy policy, contact us at:
            </p>
            <div className="text-gray-300 space-y-1">
              <p>Email: <a href="mailto:privacy@mysmartrep.com" className="text-primary hover:underline">privacy@mysmartrep.com</a></p>
              <p>Support: <a href="mailto:support@mysmartrep.com" className="text-primary hover:underline">support@mysmartrep.com</a></p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}

