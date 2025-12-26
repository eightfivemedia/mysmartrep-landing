'use client'

import PhoneMockup from './PhoneMockup'
import QRCode from './QRCode'
import DownloadButton from './DownloadButton'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-6rem)] lg:h-full flex items-center justify-center overflow-visible lg:overflow-hidden min-h-0 bg-[#1A1A1A] py-8 lg:py-0">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full h-full">
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

