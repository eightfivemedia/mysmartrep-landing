import Link from 'next/link'
import type { Metadata } from 'next'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Delete Your Account - SmartRep',
  description: 'Request deletion of your SmartRep account and associated data.',
}

export default function DeleteAccount() {
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
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Delete Your Account</h1>
        <p className="text-gray-400 mb-8">
          You can permanently delete your SmartRep account and all associated data at any time.
        </p>

        <div className="prose prose-invert prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Delete in the app (fastest)</h2>
            <ol className="list-decimal list-inside text-gray-300 space-y-2 mb-4">
              <li>Open SmartRep and sign in.</li>
              <li>Go to <strong>Settings</strong> &rarr; <strong>Delete Account</strong>.</li>
              <li>Confirm. For your security, you may be asked to re-enter your password.</li>
            </ol>
            <p className="text-gray-300">
              This permanently deletes your account and all associated data. This action cannot be undone.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Can&apos;t access the app?</h2>
            <p className="text-gray-300 mb-4">
              Email us from the email address associated with your account and request deletion.
              We will verify your identity and permanently delete your account and all associated
              data within 30 days.
            </p>
            <p className="text-gray-300">
              Email:{' '}
              <a href="mailto:support@mysmartrep.com?subject=Delete%20My%20Account" className="text-primary hover:underline">
                support@mysmartrep.com
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">What gets deleted</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Your account and login credentials</li>
              <li>Profile details (name, body metrics, goals, preferences)</li>
              <li>Workouts and workout plans</li>
              <li>Meal plans</li>
              <li>AI coach chat history</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Data retention</h2>
            <p className="text-gray-300">
              No personal data is retained after your account is deleted, except where retention
              is required to comply with legal obligations. For more information, see our{' '}
              <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Questions?</h2>
            <p className="text-gray-300">
              Contact us at{' '}
              <a href="mailto:support@mysmartrep.com" className="text-primary hover:underline">
                support@mysmartrep.com
              </a>
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
