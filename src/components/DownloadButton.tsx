'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const APP_STORE_URL = process.env.NEXT_PUBLIC_APP_STORE_URL || 'https://apps.apple.com/us/app/smartrep-ai-fitness-trainer/id6756490101'

export default function DownloadButton() {
  return (
    <motion.a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="inline-block"
    >
      <Image
        src="/images/app-store-badge.svg"
        alt="Download on the App Store"
        width={240}
        height={80}
        className="h-16 w-auto"
        priority
      />
    </motion.a>
  )
}

