import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-sm text-gray-400">
            <p>
              © {currentYear} SmartRep.{' '}
              <a
                href="https://eightfivemedia.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition hover:underline"
              >
                EightFive Media
              </a>
              {' '}All rights reserved.
            </p>
          </div>

          <div className="flex gap-6 text-sm">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-white transition"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-white transition"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

