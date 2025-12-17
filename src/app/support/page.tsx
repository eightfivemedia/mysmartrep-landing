'use client'

import { useState } from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'How long does it take to process a data deletion request?',
    answer: 'We process all data deletion requests within 30 days of receipt, as required by applicable data protection regulations.',
  },
  {
    question: 'What data will be deleted?',
    answer: 'All personal data associated with your account will be permanently deleted, including your profile information, workout data, meal plans, and any other personal information stored in our systems.',
  },
  {
    question: 'Can I recover my data after deletion?',
    answer: 'No, once your data has been deleted, it cannot be recovered. Please ensure you have backed up any important information before submitting your deletion request.',
  },
]

export default function SupportPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }
  return (
    <div className="min-h-screen flex flex-col bg-[#1A1A1A]">
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Support
            </h1>
            <p className="text-lg text-gray-300">
              We're here to help. Contact us for assistance or to manage your data.
            </p>
          </div>

          {/* Contact Section */}
          <section className="bg-[#A78BFA]/10 rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
            <p className="text-gray-300 mb-6">
              For general support, questions, or feedback, please reach out to us:
            </p>
            <div className="space-y-2">
              <p className="text-gray-300">
                <span className="font-medium text-white">Email:</span>{' '}
                <a
                  href="mailto:support@mysmartrep.com"
                  className="text-primary hover:text-primary-light transition underline"
                >
                  support@mysmartrep.com
                </a>
              </p>
            </div>
          </section>

          {/* Data Deletion Request Section */}
          <section className="bg-[#A78BFA]/10 rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Request Data Deletion
            </h2>
            <p className="text-gray-300 mb-6">
              Under data protection regulations, you have the right to request deletion of your personal data.
              To submit a data deletion request, please contact us with the following information:
            </p>

            <div className="rounded-lg p-6 mb-6">
              <h3 className="text-lg font-medium text-white mb-4">Required Information:</h3>
              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                <li>Your full name</li>
                <li>Email address associated with your account</li>
                <li>User ID or account identifier (if available)</li>
                <li>Confirmation that you want to delete your data</li>
              </ul>
            </div>

            <div className="space-y-4">
              <p className="text-gray-300">
                Please send your data deletion request to:
              </p>
              <div className="rounded-lg p-4">
                <p className="text-white font-medium mb-2">Email:</p>
                <a
                  href="mailto:privacy@mysmartrep.com?subject=Data Deletion Request"
                  className="text-primary hover:text-primary-light transition underline text-lg"
                >
                  privacy@mysmartrep.com
                </a>
              </div>
              <p className="text-sm text-gray-400">
                Subject line: <span className="text-gray-300">Data Deletion Request</span>
              </p>
            </div>

            <div className="mt-6 p-4 bg-blue-900/20 border border-blue-800/30 rounded-lg">
              <p className="text-sm text-gray-300">
                <span className="font-medium text-white">Note:</span> We will process your request within 30 days
                as required by applicable data protection laws. Once your data is deleted, it cannot be recovered.
                Please ensure you have backed up any important information before submitting your request.
              </p>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="bg-[#A78BFA]/10 rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-white/10 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-white/5 transition-colors"
                  >
                    <h3 className="text-lg font-medium text-white pr-4">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`flex-shrink-0 w-5 h-5 text-gray-400 transition-transform duration-200 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 pt-0">
                          <p className="text-gray-300">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </section>

          {/* Back to Home */}
          <div className="text-center pt-4">
            <Link
              href="/"
              className="text-primary hover:text-primary-light transition underline"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

