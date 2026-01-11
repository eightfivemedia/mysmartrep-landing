'use client'

import { motion } from 'framer-motion'
import PhoneMockup from './PhoneMockup'
import QRCode from './QRCode'
import DownloadButton from './DownloadButton'
import Image from 'next/image'

// Floating element configuration
const floatingElements = [
  { size: 120, x: '10%', y: '15%', duration: 20, delay: 0, opacity: 0.08 },
  { size: 80, x: '85%', y: '20%', duration: 25, delay: 2, opacity: 0.06 },
  { size: 60, x: '75%', y: '70%', duration: 18, delay: 1, opacity: 0.07 },
  { size: 100, x: '5%', y: '75%', duration: 22, delay: 3, opacity: 0.05 },
  { size: 40, x: '50%', y: '10%', duration: 15, delay: 0.5, opacity: 0.08 },
  { size: 70, x: '30%', y: '85%', duration: 28, delay: 4, opacity: 0.06 },
  { size: 50, x: '90%', y: '50%', duration: 19, delay: 1.5, opacity: 0.07 },
  { size: 90, x: '20%', y: '45%', duration: 24, delay: 2.5, opacity: 0.05 },
]

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-6rem)] lg:h-full flex items-center justify-center overflow-visible lg:overflow-hidden min-h-0 bg-[#1A1A1A] py-8 lg:py-0">
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full"
            style={{
              width: element.size,
              height: element.size,
              left: element.x,
              top: element.y,
              background: `radial-gradient(circle, rgba(167, 139, 250, ${element.opacity}) 0%, transparent 70%)`,
            }}
            animate={{
              y: [0, -30, 0, 30, 0],
              x: [0, 15, 0, -15, 0],
              scale: [1, 1.1, 1, 0.9, 1],
            }}
            transition={{
              duration: element.duration,
              delay: element.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
        
        {/* Subtle gradient orbs */}
        <motion.div
          className="absolute w-96 h-96 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
            left: '-10%',
            top: '20%',
            filter: 'blur(60px)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute w-80 h-80 rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(167, 139, 250, 0.25) 0%, transparent 70%)',
            right: '-5%',
            bottom: '10%',
            filter: 'blur(50px)',
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            delay: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full h-full z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center h-full">
          {/* Left Side: Content + CTAs */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Logo/App Icon and Headline */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 justify-center lg:justify-start">
              <div className="w-20 h-20 rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden flex-shrink-0">
                <Image
                  src="/images/icon/smartrep_icon.png"
                  alt="SmartRep"
                  width={80}
                  height={80}
                  className="object-contain"
                  priority
                />
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
                  SmartRep
                </span>
                : Your AI Fitness Coach
              </h1>
            </div>

            {/* Subheadline */}
            <div className="space-y-4">
              <p className="text-base sm:text-lg md:text-xl lg:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 text-center">
                Stop guessing at the gym. Get instant AI analysis, personalized meal plans,
                and 24/7 coaching.
              </p>
            </div>

            {/* QR Code */}
            <div className="flex justify-center">
              <QRCode />
            </div>

            {/* Download Button */}
            <div className="flex justify-center">
              <DownloadButton />
            </div>
          </div>

          {/* Right Side: Phone Mockup with Cycling Screenshots */}
          <div className="relative flex items-center justify-center">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  )
}

