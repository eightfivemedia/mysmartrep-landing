'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

// Screenshots from public/images/screenshots/
const sliderImages = [
  '/images/screenshots/Simulator Screenshot - iPhone 17 Pro - 1.png',
  '/images/screenshots/Simulator Screenshot - iPhone 17 Pro - 2.png',
  '/images/screenshots/Simulator Screenshot - iPhone 17 Pro - 3.png',
  '/images/screenshots/Simulator Screenshot - iPhone 17 Pro - 4.png',
]

export default function PhoneMockup() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-cycle every 2.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderImages.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="relative">
        <div className="relative w-full h-[650px] overflow-hidden">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 2.0,
                ease: [0.4, 0, 0.2, 1] // ease-in-out cubic-bezier
              }}
              className="absolute inset-0"
            >
              <Image
                src={sliderImages[currentIndex]}
                alt={`SmartRep screenshot ${currentIndex + 1}`}
                fill
                className="object-contain"
                priority={currentIndex === 0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress indicators - hidden */}
        <div className="absolute -bottom-4 left-0 right-0 flex justify-center gap-2 z-20 hidden">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-primary w-8'
                  : 'bg-white/30 hover:bg-white/50 w-2'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute -inset-8 bg-primary/20 blur-3xl rounded-full opacity-50 -z-10" />
    </div>
  )
}

