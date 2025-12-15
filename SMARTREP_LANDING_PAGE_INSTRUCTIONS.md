# SmartRep Landing Page - Cursor AI Build Instructions

**Project:** SmartRep Marketing Landing Page
**Stack:** Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS
**Goal:** High-converting landing page for SmartRep iOS fitness app

---

## 📋 Project Overview

Build a modern, responsive landing page for SmartRep - an AI-powered fitness app that provides workout analysis, meal planning, and personalized coaching. The landing page should convert visitors into app downloads with clear value propositions, social proof, and seamless CTAs.

**Target Audience:** Fitness enthusiasts aged 20-35 who workout regularly but struggle with tracking progress and optimizing their training.

**Key Conversion Goals:**
1. App Store downloads
2. Email list signups (waitlist/early access)
3. Social media follows

---

## 🎨 Design System

### **Brand Colors:**
```typescript
// tailwind.config.ts colors
colors: {
  primary: {
    DEFAULT: '#8B5CF6', // Purple (your AccentColor)
    light: '#A78BFA',   // Lighter purple
    dark: '#7C3AED',    // Darker purple
  },
  accent: {
    DEFAULT: '#8B5CF6', // Same as primary - your main brand color
    light: '#A78BFA',
    dark: '#7C3AED',
  },
  background: {
    DEFAULT: '#1A1A1A', // Dark background (Any Appearance)
    dark: '#0A0A0A',    // Even darker (Dark mode)
    light: '#FFFFFF',   // Light mode option
    card: '#2A2A2A',    // Slightly lighter for cards
  },
  text: {
    primary: '#F1F5F9',   // White/light text
    secondary: '#CBD5E1', // Gray text
    muted: '#94A3B8',     // Muted gray
  },
  success: '#10B981',     // Green for success states
  warning: '#F59E0B',     // Orange for warnings
  error: '#EF4444',       // Red for errors
}
```

**Brand Color Usage:**
- **Primary/Accent Purple (#8B5CF6):** CTAs, links, highlights, brand elements
- **Dark Background (#1A1A1A):** Main page background
- **Card Background (#2A2A2A):** Cards, sections, elevated elements

### **Typography:**
```typescript
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  display: ['Inter', 'system-ui', 'sans-serif'], // Bold weights for headings
}

// Usage
H1: text-5xl md:text-6xl lg:text-7xl font-bold
H2: text-4xl md:text-5xl font-bold
H3: text-3xl md:text-4xl font-bold
Body: text-base md:text-lg
Small: text-sm
```

### **Spacing & Layout:**
- Max width: `max-w-7xl` (1280px)
- Section padding: `py-20 md:py-32`
- Component spacing: `space-y-8 md:space-y-12`

---

## 🏗️ Project Structure

```
smartrep-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   └── fonts/
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── Pricing.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── FAQ.tsx
│   │   │   └── CTA.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   └── Input.tsx
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── lib/
│   │   ├── utils.ts
│   │   └── analytics.ts
│   └── types/
│       └── index.ts
├── public/
│   ├── images/
│   ├── icons/
│   └── videos/
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
└── package.json
```

---

## 📄 Page Structure

### **Main Landing Page (Single 100vh Hero)**

The landing page is a single full-viewport hero section with two main areas:

**Left Side (40-50% width):**
- Logo/App name
- Headline
- Subheadline
- QR code for quick mobile download
- Download button (App Store)
- Optional: Social media links

**Right Side (50-60% width):**
- iPhone mockup with auto-cycling screenshots
- Screenshots rotate every 3-4 seconds
- Smooth transitions between screens

**Additional Pages:**
- `/privacy` - Privacy Policy
- `/terms` - Terms of Service

---

## 🏗️ Simplified Project Structure

```
smartrep-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx              # Main hero landing
│   │   ├── privacy/
│   │   │   └── page.tsx          # Privacy Policy
│   │   ├── terms/
│   │   │   └── page.tsx          # Terms of Service
│   │   └── globals.css
│   ├── components/
│   │   ├── Hero.tsx              # Main hero section
│   │   ├── PhoneMockup.tsx       # iPhone with cycling screenshots
│   │   ├── QRCode.tsx            # QR code component
│   │   ├── DownloadButton.tsx    # App Store button
│   │   ├── Header.tsx            # Simple header with logo + legal links
│   │   └── Footer.tsx            # Minimal footer
│   ├── lib/
│   │   └── utils.ts
│   └── types/
│       └── index.ts
├── public/
│   ├── images/
│   │   ├── logo.png
│   │   ├── app-icon.png
│   │   └── screenshots/
│   │       ├── screenshot-1.png
│   │       ├── screenshot-2.png
│   │       ├── screenshot-3.png
│   │       └── screenshot-4.png
│   └── qr-code.png
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🎯 Main Landing Page (/) - Hero Section

### **Full Component Structure:**

```tsx
// src/app/page.tsx
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1A1A1A] via-[#0A0A0A] to-[#1A1A1A]">
      <Hero />
    </main>
  )
}
```

### **Hero Component:**

```tsx
// src/components/Hero.tsx
'use client'

import { useState, useEffect } from 'react'
import PhoneMockup from './PhoneMockup'
import QRCode from './QRCode'
import DownloadButton from './DownloadButton'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Simple header with legal links */}
        <div className="absolute top-4 right-4 flex gap-4 text-sm">
          <a href="/privacy" className="text-gray-400 hover:text-white transition">
            Privacy
          </a>
          <a href="/terms" className="text-gray-400 hover:text-white transition">
            Terms
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">
          {/* Left Side: Content + CTAs */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Logo/App Icon */}
            <div className="flex justify-center lg:justify-start">
              <img 
                src="/images/app-icon.png" 
                alt="SmartRep" 
                className="w-20 h-20 rounded-2xl shadow-2xl"
              />
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Your AI Fitness
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
                  Coach
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
                Stop guessing at the gym. Get instant AI analysis, personalized meal plans, 
                and 24/7 coaching.
              </p>
            </div>

            {/* QR Code */}
            <div className="flex justify-center lg:justify-start">
              <QRCode />
            </div>

            {/* Download Button */}
            <div className="flex justify-center lg:justify-start">
              <DownloadButton />
            </div>

            {/* Optional: Social proof */}
            <p className="text-sm text-gray-400">
              Join 10,000+ users getting stronger smarter
            </p>
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
```

---

## 📱 Phone Mockup Component (Auto-Cycling Screenshots)

```tsx
// src/components/PhoneMockup.tsx
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const screenshots = [
  '/images/screenshots/screenshot-1.png',
  '/images/screenshots/screenshot-2.png',
  '/images/screenshots/screenshot-3.png',
  '/images/screenshots/screenshot-4.png',
]

export default function PhoneMockup() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-cycle every 3.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length)
    }, 3500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      {/* iPhone Frame */}
      <div className="relative w-[300px] md:w-[350px] mx-auto">
        {/* Phone bezel/frame */}
        <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl border border-gray-700">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10" />
          
          {/* Screen */}
          <div className="relative bg-black rounded-[2.5rem] overflow-hidden aspect-[9/19.5]">
            {/* Screenshot cycling with animation */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={screenshots[currentIndex]}
                  alt={`SmartRep screenshot ${currentIndex + 1}`}
                  fill
                  className="object-cover"
                  priority={currentIndex === 0}
                />
              </motion.div>
            </AnimatePresence>

            {/* Progress indicators */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-primary w-6'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to screenshot ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Floating animation */}
        <motion.div
          className="absolute inset-0"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Glow effect */}
        <div className="absolute -inset-8 bg-primary/20 blur-3xl rounded-full opacity-50" />
      </div>
    </div>
  )
}
```

---

## 📲 QR Code Component

```tsx
// src/components/QRCode.tsx
'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function QRCode() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-white p-4 rounded-2xl shadow-lg transition-transform hover:scale-105">
        {/* QR Code Image */}
        <div className="w-40 h-40 bg-white rounded-lg relative">
          <Image
            src="/qr-code.png"
            alt="Download SmartRep QR Code"
            fill
            className="object-contain p-2"
          />
        </div>
        
        {/* Instruction text */}
        <p className="text-center text-sm text-gray-800 mt-2 font-medium">
          Scan to Download
        </p>
      </div>

      {/* Tooltip on hover */}
      {isHovered && (
        <p className="text-xs text-gray-400 text-center mt-2">
          Open camera app and scan
        </p>
      )}
    </div>
  )
}
```

---

## 🍎 Download Button Component

```tsx
// src/components/DownloadButton.tsx
'use client'

import { motion } from 'framer-motion'

const APP_STORE_URL = 'https://apps.apple.com/app/smartrep/id[YOUR_APP_ID]'

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
      {/* App Store Badge */}
      <img
        src="/images/app-store-badge.svg"
        alt="Download on the App Store"
        className="h-14 w-auto"
      />
    </motion.a>
  )
}

// Alternative: Custom styled button instead of official badge
export function CustomDownloadButton() {
  return (
    <motion.a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-semibold text-lg transition shadow-lg shadow-primary/50"
    >
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
      </svg>
      Download for iOS
    </motion.a>
  )
}
```

---

## 📜 Privacy Policy Page

```tsx
// src/app/privacy/page.tsx
import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy - SmartRep',
  description: 'SmartRep privacy policy and data handling practices',
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white">
      {/* Header */}
      <header className="border-b border-gray-800">
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
              <a href="mailto:privacy@smartrep.app" className="text-primary hover:underline">
                privacy@smartrep.app
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
              <p>Email: <a href="mailto:privacy@smartrep.app" className="text-primary hover:underline">privacy@smartrep.app</a></p>
              <p>Support: <a href="mailto:support@smartrep.app" className="text-primary hover:underline">support@smartrep.app</a></p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-20">
        <div className="max-w-4xl mx-auto px-4 py-6 text-center text-sm text-gray-400">
          <p>© 2024 SmartRep. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
```

---

## 📜 Terms of Service Page

```tsx
// src/app/terms/page.tsx
import Link from 'next/link'

export const metadata = {
  title: 'Terms of Service - SmartRep',
  description: 'SmartRep terms of service and user agreement',
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white">
      {/* Header */}
      <header className="border-b border-gray-800">
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
              <p>Email: <a href="mailto:legal@smartrep.app" className="text-primary hover:underline">legal@smartrep.app</a></p>
              <p>Support: <a href="mailto:support@smartrep.app" className="text-primary hover:underline">support@smartrep.app</a></p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-20">
        <div className="max-w-4xl mx-auto px-4 py-6 text-center text-sm text-gray-400">
          <p>© 2024 SmartRep. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
```

---

## 🚀 Quick Start Instructions for Cursor

### **Step 1: Initialize Project**
```bash
npx create-next-app@latest smartrep-landing --typescript --tailwind --app
cd smartrep-landing
npm install framer-motion
```

### **Step 2: Configure Tailwind**
Update `tailwind.config.ts` with the purple brand colors defined above.

### **Step 3: Build Components in Order**
1. Create Hero component with left/right layout
2. Create PhoneMockup component with auto-cycling screenshots
3. Create QRCode component
4. Create DownloadButton component
5. Create Privacy page
6. Create Terms page

### **Step 4: Add Assets**
Place these in `/public`:
- App icon (`app-icon.png`)
- App screenshots (4+ images in `/screenshots/`)
- QR code image (`qr-code.png`)
- App Store badge (`app-store-badge.svg`)

### **Step 5: Test Responsiveness**
- Mobile: Single column, stack content vertically
- Desktop: Side-by-side layout with 50/50 split

---

## 📦 Required Dependencies

```json
{
  "dependencies": {
    "next": "14.x",
    "react": "18.x",
    "typescript": "5.x",
    "tailwindcss": "3.x",
    "framer-motion": "^11.x"
  }
}
```

---

## 🎨 Screenshot Slider Behavior

- **Auto-cycle:** Every 3.5 seconds
- **Smooth transition:** Fade + scale animation
- **Manual control:** Clickable dots at bottom
- **Progress indicators:** Show which screenshot is active
- **Infinite loop:** Cycles back to first after last

---

## 📱 QR Code Generation

To generate your QR code:
1. Go to [https://www.qr-code-generator.com/](https://www.qr-code-generator.com/)
2. Enter your App Store URL
3. Download as PNG (minimum 500x500px)
4. Save as `/public/qr-code.png`

---

## 🍎 App Store Assets

Download official App Store badge:
- [Apple Marketing Resources](https://developer.apple.com/app-store/marketing/guidelines/)
- Use "Download on the App Store" badge
- Save as `/public/images/app-store-badge.svg`

---

## ✅ Final Checklist

### **Before Launch:**
- [ ] Replace `[YOUR_APP_ID]` with actual App Store ID
- [ ] Add real app screenshots (4+ images)
- [ ] Generate and add QR code
- [ ] Add app icon image
- [ ] Update contact emails in legal pages
- [ ] Add jurisdiction info in Terms
- [ ] Test on mobile devices (iOS Safari critical)
- [ ] Test QR code scanning
- [ ] Verify App Store link works
- [ ] Check all legal page links
- [ ] Test screenshot cycling animation
- [ ] Optimize images (WebP format)
- [ ] Add favicon
- [ ] Set up analytics (optional)
- [ ] Configure custom domain
- [ ] Deploy to Vercel

---

## 🚀 Deployment

**Recommended: Vercel**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

**Environment Variables:**
```env
NEXT_PUBLIC_APP_STORE_URL=https://apps.apple.com/app/smartrep/id[YOUR_ID]
```

---

**END OF SIMPLIFIED INSTRUCTIONS**

This streamlined landing page focuses on the essential: getting users to download your app!
**Goal:** Immediately communicate value and drive app downloads

**Content:**
- **Headline:** "Your AI Fitness Coach in Your Pocket"
- **Subheadline:** "Stop guessing at the gym. Get instant AI analysis of your workouts, personalized meal plans, and coaching that adapts to you."
- **Primary CTA:** "Download for iOS" (App Store badge + link)
- **Secondary CTA:** "Watch Demo" (opens video modal)
- **Visual:** iPhone mockup showing app interface (workout analysis screen)
- **Social Proof:** "Join 10,000+ users getting stronger smarter"

**Design Notes:**
- Full viewport height with gradient background
- Animated iPhone mockup with rotating screens
- Subtle particle/gradient effects
- Mobile-first responsive layout

**Component Structure:**
```tsx
<section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1A1A1A] via-[#0A0A0A] to-[#1A1A1A]">
  {/* Background effects */}
  <div className="absolute inset-0 bg-grid-pattern opacity-10" />
  
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Left: Copy + CTAs */}
      <div className="space-y-8">
        <h1>{headline}</h1>
        <p>{subheadline}</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button>{primaryCTA}</Button>
          <Button variant="outline">{secondaryCTA}</Button>
        </div>
        <p className="text-sm text-slate-400">{socialProof}</p>
      </div>
      
      {/* Right: iPhone mockup */}
      <div className="relative">
        <PhoneMockup />
      </div>
    </div>
  </div>
</section>
```

---

### **2. Social Proof Bar**
**Goal:** Build credibility immediately

**Content:**
- "As featured in:" + logos (optional, if you have any)
- OR Stats bar: "10K+ Users | 50K+ Workouts Analyzed | 4.8★ Rating"

**Component:**
```tsx
<section className="py-12 bg-[#2A2A2A]">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
      <Stat number="10K+" label="Active Users" />
      <Stat number="50K+" label="Workouts Analyzed" />
      <Stat number="4.8★" label="App Store Rating" />
    </div>
  </div>
</section>
```

---

### **3. Problem-Solution Section**
**Goal:** Identify with user pain points before introducing features

**Content:**
**Problem Statement:**
"Working out without data is like driving blindfolded"

**Pain Points (3 cards):**
1. **"Am I Even Making Progress?"**
   - Icon: 📊
   - "You train hard but have no idea if you're improving or just spinning your wheels."

2. **"Is My Form Correct?"**
   - Icon: 🤔
   - "Bad form leads to injuries and wasted effort. You need real-time feedback."

3. **"What Should I Eat?"**
   - Icon: 🍽️
   - "Generic meal plans don't work. You need nutrition tailored to YOUR goals."

**Transition:** "SmartRep solves all of this with AI."

**Component:**
```tsx
<section className="py-20 md:py-32">
  <div className="max-w-7xl mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Working Out Without Data Is Like Driving Blindfolded
      </h2>
      <p className="text-xl text-slate-300">
        You're working hard. But are you working smart?
      </p>
    </div>
    
    <div className="grid md:grid-cols-3 gap-8">
      {painPoints.map(point => (
        <PainPointCard key={point.title} {...point} />
      ))}
    </div>
  </div>
</section>
```

---

### **4. Features Section**
**Goal:** Showcase core AI features with visual examples

**Content (3-4 key features):**

**Feature 1: AI Workout Analysis**
- Icon/Image: Brain icon + screenshot of analysis
- Headline: "Instant AI Analysis of Every Workout"
- Description: "Log your workout and get detailed feedback on volume, intensity, balance, and progress - all powered by advanced AI."
- Bullets:
  - ✓ Volume & intensity tracking
  - ✓ Muscle balance analysis
  - ✓ Form improvement suggestions
  - ✓ Progress indicators

**Feature 2: Personalized Meal Plans**
- Icon/Image: Fork/knife + meal plan screenshot
- Headline: "AI-Generated Meal Plans Tailored to You"
- Description: "Get custom meal plans based on your goals, dietary preferences, and training schedule. Updated automatically as you progress."
- Bullets:
  - ✓ Macro-optimized recipes
  - ✓ Shopping lists included
  - ✓ Dietary restrictions supported
  - ✓ 3, 7, or 30-day plans

**Feature 3: AI Coaching Chat**
- Icon/Image: Chat bubble + chat screenshot
- Headline: "Your 24/7 AI Fitness Coach"
- Description: "Ask anything about your training, nutrition, or recovery. Get instant, personalized answers from your AI coach."
- Bullets:
  - ✓ Unlimited questions
  - ✓ Context-aware responses
  - ✓ Form technique help
  - ✓ Motivation & accountability

**Feature 4: Progress Tracking**
- Icon/Image: Chart + progress dashboard
- Headline: "See Your Progress in Real-Time"
- Description: "Beautiful dashboards showing your strength gains, consistency, and improvements over time."
- Bullets:
  - ✓ Visual progress charts
  - ✓ PR tracking
  - ✓ Volume analytics
  - ✓ Export your data

**Component (alternating layout):**
```tsx
<section className="py-20 md:py-32 bg-slate-800/30">
  <div className="max-w-7xl mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Everything You Need to Train Smarter
      </h2>
      <p className="text-xl text-slate-300">
        AI-powered features that actually help you get stronger
      </p>
    </div>
    
    <div className="space-y-24">
      {features.map((feature, index) => (
        <FeatureRow 
          key={feature.id}
          {...feature}
          imageOnRight={index % 2 === 0}
        />
      ))}
    </div>
  </div>
</section>
```

---

### **5. How It Works Section**
**Goal:** Show simplicity of getting started

**Content (3 steps):**
1. **"Log Your Workout"**
   - Icon: 💪 or number "1"
   - "Track sets, reps, and weight in seconds. Or use voice logging."

2. **"Get AI Analysis"**
   - Icon: 🧠 or number "2"
   - "Instant feedback on your performance, form, and progress."

3. **"Follow Recommendations"**
   - Icon: 🚀 or number "3"
   - "Implement AI suggestions and watch your gains accelerate."

**Visual:** Simple 3-step diagram or animated flow

**Component:**
```tsx
<section className="py-20 md:py-32">
  <div className="max-w-7xl mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Get Started in 3 Simple Steps
      </h2>
    </div>
    
    <div className="grid md:grid-cols-3 gap-12">
      {steps.map((step, index) => (
        <StepCard 
          key={step.id}
          number={index + 1}
          {...step}
        />
      ))}
    </div>
    
    {/* Optional: Animated flow diagram */}
    <div className="mt-16">
      <FlowDiagram />
    </div>
  </div>
</section>
```

---

### **6. Pricing Section**
**Goal:** Present clear, compelling pricing with strong yearly incentive

**Content:**

**Free Tier:**
- **"Try SmartRep Free"**
- Price: $0
- Features:
  - 200K AI chat tokens (~165 messages/month)
  - 5 Workout analyses/month
  - 1 Active workout plan
  - 1 Meal plan/month
  - Basic progress tracking
  - Ads included
- CTA: "Start Free"

**Monthly Premium:**
- **"Premium"** (no special badge)
- Price: $9.99/month
- Features:
  - 1M chat tokens (~830 messages/month)
  - Unlimited workout analyses
  - 5 Active workout plans
  - Unlimited meal plans (7 days)
  - Advanced analytics
  - No ads
  - Priority email support
- CTA: "Start Premium"

**Yearly Premium:**
- **"Best Value"** badge
- Price: $89.99/year
- Display: "$7.50/month" (billed annually)
- Savings: "Save $30/year"
- Features:
  - 1.5M chat tokens (~1,250 messages/month)
  - Unlimited workout analyses
  - **Unlimited active workout plans** ⭐
  - **Unlimited meal plans (30 days)** ⭐
  - Advanced analytics
  - No ads
  - **Priority support (<24hr)** ⭐
- CTA: "Get Best Value"

**Component:**
```tsx
<section className="py-20 md:py-32 bg-slate-800/30">
  <div className="max-w-7xl mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Simple, Transparent Pricing
      </h2>
      <p className="text-xl text-slate-300">
        Start free, upgrade when you're ready
      </p>
    </div>
    
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <PricingCard tier="free" {...freeTier} />
      <PricingCard tier="monthly" {...monthlyTier} />
      <PricingCard 
        tier="yearly" 
        featured={true}
        badge="Best Value"
        {...yearlyTier} 
      />
    </div>
    
    <p className="text-center text-sm text-slate-400 mt-12">
      All plans include 7-day free trial. Cancel anytime.
    </p>
  </div>
</section>
```

---

### **7. Testimonials Section**
**Goal:** Social proof from real users

**Content (3-6 testimonials):**

**Testimonial 1:**
- Name: "Mike T."
- Avatar: Placeholder or initials
- Rating: 5 stars
- Quote: "I've tried every fitness app out there. SmartRep is the first one that actually made me stronger. The AI analysis is crazy accurate."

**Testimonial 2:**
- Name: "Sarah K."
- Quote: "The meal plans are a game changer. I finally understand what to eat for my goals without overthinking it."

**Testimonial 3:**
- Name: "David R."
- Quote: "Best $10/month I spend. It's like having a personal trainer and nutritionist in my pocket."

**Testimonial 4:**
- Name: "Jessica M."
- Quote: "I was stuck at the same lifts for months. SmartRep showed me exactly what I was doing wrong. PR'd within 2 weeks."

**Testimonial 5:**
- Name: "Alex P."
- Quote: "The AI chat is incredible. I can ask it anything about form, nutrition, supplements - instant expert answers."

**Testimonial 6:**
- Name: "Chris L."
- Quote: "Finally, an app that doesn't just track but actually HELPS. The analysis after each workout is so motivating."

**Component:**
```tsx
<section className="py-20 md:py-32">
  <div className="max-w-7xl mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Loved by Thousands of Athletes
      </h2>
      <p className="text-xl text-slate-300">
        See what our users are saying
      </p>
    </div>
    
    {/* Masonry grid or slider */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map(testimonial => (
        <TestimonialCard key={testimonial.name} {...testimonial} />
      ))}
    </div>
  </div>
</section>
```

---

### **8. FAQ Section**
**Goal:** Address common objections and questions

**Questions:**

1. **"How does the AI analysis work?"**
   - "SmartRep uses advanced machine learning models trained on millions of workouts to analyze your training volume, intensity, muscle balance, and progress patterns. It's like having a coach who's seen everything."

2. **"Do I need to upgrade from the free tier?"**
   - "The free tier is great for trying SmartRep. Most serious athletes upgrade within 2 weeks to get unlimited analyses and meal plans. You can always start free and upgrade later."

3. **"Can I cancel anytime?"**
   - "Yes! Cancel anytime with one tap in your iPhone settings. No questions asked, no hidden fees."

4. **"What if I have dietary restrictions?"**
   - "SmartRep supports all major dietary preferences: vegetarian, vegan, keto, paleo, gluten-free, dairy-free, and more. Just tell the AI your restrictions."

5. **"Does it work for beginners?"**
   - "Absolutely! SmartRep adapts to your experience level. Whether you're a complete beginner or advanced athlete, the AI personalizes recommendations for you."

6. **"Is my data private and secure?"**
   - "Yes. Your workout data is encrypted and stored securely. We never sell your data. You can export or delete your data anytime."

7. **"What makes SmartRep different from other fitness apps?"**
   - "Most apps just track. SmartRep actually ANALYZES and COACHES. The AI doesn't just log your reps - it tells you what you did well, what to improve, and how to get stronger."

8. **"Can I use it offline?"**
   - "You can log workouts offline and they'll sync when you're back online. AI analysis requires internet connection."

**Component:**
```tsx
<section className="py-20 md:py-32 bg-slate-800/30">
  <div className="max-w-4xl mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Frequently Asked Questions
      </h2>
    </div>
    
    <Accordion items={faqItems} />
  </div>
</section>
```

---

### **9. Final CTA Section**
**Goal:** Last chance conversion push

**Content:**
- **Headline:** "Ready to Train Smarter?"
- **Subheadline:** "Join 10,000+ users who stopped guessing and started progressing."
- **Primary CTA:** "Download for iOS"
- **Secondary CTA:** "Start Free Trial"
- **Trust badges:**
  - "7-day free trial"
  - "No credit card required"
  - "Cancel anytime"

**Component:**
```tsx
<section className="py-20 md:py-32 bg-gradient-to-br from-primary to-primary-dark">
  <div className="max-w-4xl mx-auto px-4 text-center">
    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
      Ready to Train Smarter?
    </h2>
    <p className="text-xl text-white/90 mb-8">
      Join 10,000+ users who stopped guessing and started progressing.
    </p>
    
    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
      <Button size="lg" variant="white">
        Download for iOS
      </Button>
      <Button size="lg" variant="outline-white">
        Start Free Trial
      </Button>
    </div>
    
    <div className="flex flex-wrap justify-center gap-6 text-white/80 text-sm">
      <span>✓ 7-day free trial</span>
      <span>✓ No credit card required</span>
      <span>✓ Cancel anytime</span>
    </div>
  </div>
</section>
```

---

### **10. Footer**
**Content:**

**Columns:**

**Product:**
- Features
- Pricing
- How It Works
- Download

**Company:**
- About
- Blog (optional)
- Contact
- Support

**Legal:**
- Privacy Policy
- Terms of Service
- Cookie Policy

**Social:**
- Instagram
- TikTok
- Twitter/X
- YouTube

**Newsletter Signup:**
- "Get fitness tips & updates"
- Email input + Subscribe button

**Component:**
```tsx
<footer className="bg-[#0A0A0A] border-t border-gray-800 py-12">
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid md:grid-cols-4 gap-8 mb-8">
      <div>
        <h3 className="font-bold text-lg mb-4">SmartRep</h3>
        <p className="text-sm text-slate-400">
          Your AI fitness coach in your pocket.
        </p>
      </div>
      
      {footerLinks.map(column => (
        <FooterColumn key={column.title} {...column} />
      ))}
    </div>
    
    <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-sm text-slate-400">
        © 2024 SmartRep. All rights reserved.
      </p>
      
      <div className="flex gap-4">
        <SocialIcon platform="instagram" />
        <SocialIcon platform="tiktok" />
        <SocialIcon platform="twitter" />
      </div>
    </div>
  </div>
</footer>
```

---

## 🎨 Key UI Components to Build

### **Button Component**
```tsx
// src/components/ui/Button.tsx
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  href?: string;
  className?: string;
}

// Variants:
// primary: bg-primary hover:bg-primary-dark (purple #8B5CF6)
// secondary: bg-slate-700 hover:bg-slate-600
// outline: border-2 border-primary text-primary hover:bg-primary hover:text-white
// ghost: text-primary hover:bg-primary/10
```

### **Card Component**
```tsx
// src/components/ui/Card.tsx
// Dark glassmorphism style matching your app
className="bg-[#2A2A2A] backdrop-blur-sm border border-gray-800 rounded-2xl p-8"
```

### **Phone Mockup Component**
```tsx
// src/components/ui/PhoneMockup.tsx
// iPhone frame with rotating screenshots
// Use framer-motion for animations
```

### **Stat Component**
```tsx
// For social proof bar
interface StatProps {
  number: string;
  label: string;
}
```

---

## 🎭 Animations & Interactions

### **Use Framer Motion for:**
1. **Scroll animations:** Fade in as sections come into view
2. **Hero animations:** Phone mockup floating/rotating
3. **Hover effects:** Card lift on hover
4. **Number counters:** Animate stats counting up
5. **Accordion:** Smooth expand/collapse

### **Example animations:**
```tsx
// Fade in on scroll
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  {content}
</motion.div>

// Hover lift
<motion.div
  whileHover={{ y: -8, scale: 1.02 }}
  transition={{ duration: 0.2 }}
>
  {card}
</motion.div>
```

---

## 📱 Responsive Design Requirements

### **Breakpoints:**
- Mobile: Default (< 640px)
- Tablet: sm (640px)
- Laptop: md (768px)
- Desktop: lg (1024px)
- Wide: xl (1280px)

### **Mobile-first considerations:**
1. Stack all grid layouts vertically on mobile
2. Reduce padding/margins on mobile (py-12 instead of py-20)
3. Smaller text sizes on mobile
4. Single column for features on mobile
5. Hamburger menu for navigation (if adding header nav)

---

## 🚀 Performance Optimization

### **Image Optimization:**
```tsx
// Use Next.js Image component
import Image from 'next/image'

<Image
  src="/images/phone-mockup.png"
  alt="SmartRep app interface"
  width={400}
  height={800}
  priority // For hero images
  quality={90}
/>
```

### **Code Splitting:**
- Lazy load below-the-fold sections
- Dynamic import for heavy components (video player, modals)

### **Font Loading:**
```tsx
// app/layout.tsx
import { Inter } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})
```

---

## 🔧 Technical Implementation Notes

### **1. Setup Project:**
```bash
npx create-next-app@latest smartrep-landing --typescript --tailwind --app
cd smartrep-landing
npm install framer-motion lucide-react clsx tailwind-merge
```

### **2. Key Dependencies:**
```json
{
  "dependencies": {
    "next": "14.x",
    "react": "18.x",
    "react-dom": "18.x",
    "typescript": "5.x",
    "tailwindcss": "3.x",
    "framer-motion": "^11.x",
    "lucide-react": "^0.x" // For icons
  }
}
```

### **3. Utils Setup:**
```typescript
// src/lib/utils.ts
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### **4. Type Definitions:**
```typescript
// src/types/index.ts
export interface Feature {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  bullets: string[];
  image: string;
}

export interface Testimonial {
  name: string;
  avatar?: string;
  rating: number;
  quote: string;
}

export interface PricingTier {
  name: string;
  price: string;
  period?: string;
  features: string[];
  cta: string;
  featured?: boolean;
}
```

---

## 📊 Analytics & Tracking

### **Events to Track:**
1. **Page views:** Hero, Features, Pricing sections
2. **CTA clicks:** Download button, Start Free Trial
3. **Scroll depth:** 25%, 50%, 75%, 100%
4. **Time on page:** Average engagement
5. **Form submissions:** Email signup

### **Implementation:**
```typescript
// src/lib/analytics.ts
export const trackEvent = (eventName: string, properties?: object) => {
  // Google Analytics 4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, properties)
  }
  
  // Or other analytics (Mixpanel, Amplitude, etc.)
}

// Usage in components
<Button 
  onClick={() => {
    trackEvent('cta_click', { location: 'hero', cta: 'download' })
    window.open('https://apps.apple.com/...', '_blank')
  }}
>
  Download for iOS
</Button>
```

---

## 🎯 SEO Requirements

### **Meta Tags:**
```tsx
// app/layout.tsx or app/page.tsx
export const metadata = {
  title: 'SmartRep - AI Fitness Coach & Workout Analysis App',
  description: 'Get instant AI analysis of your workouts, personalized meal plans, and 24/7 coaching. Stop guessing at the gym. Train smarter with SmartRep.',
  keywords: 'fitness app, AI workout analysis, meal planning, personal trainer app, workout tracker',
  openGraph: {
    title: 'SmartRep - Your AI Fitness Coach',
    description: 'AI-powered workout analysis and personalized coaching',
    images: ['/og-image.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SmartRep - AI Fitness Coach',
    description: 'Stop guessing at the gym. Train smarter.',
    images: ['/twitter-image.jpg'],
  }
}
```

### **Structured Data:**
```tsx
// Add JSON-LD for rich snippets
const structuredData = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  "name": "SmartRep",
  "applicationCategory": "HealthApplication",
  "offers": {
    "@type": "Offer",
    "price": "9.99",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "1250"
  }
}
```

---

## ✅ Pre-Launch Checklist

### **Before going live:**
- [ ] Test on all breakpoints (mobile, tablet, desktop)
- [ ] Test on iOS Safari, Chrome, Firefox
- [ ] Optimize all images (WebP format, proper sizing)
- [ ] Add loading states for async operations
- [ ] Implement error boundaries
- [ ] Add 404 page
- [ ] Set up analytics tracking
- [ ] Configure sitemap.xml
- [ ] Add robots.txt
- [ ] Test all CTA links (App Store, email signup)
- [ ] Check accessibility (keyboard navigation, screen readers)
- [ ] Lighthouse score: 90+ on all metrics
- [ ] Add Open Graph images
- [ ] Test email signup flow
- [ ] Add privacy policy and terms links

---

## 🎨 Design Inspiration & References

**Similar landing pages to reference:**
- Superhuman (email app) - Great hero section
- Linear (project management) - Clean animations
- Vercel - Modern gradient effects
- Cal.com - Simple, effective layout

**Animation inspiration:**
- Apple product pages - Smooth scrolling effects
- Stripe - Subtle interactions
- Framer - Advanced animations

---

## 🔗 External Links Needed

### **App Store:**
- iOS App Store link: `https://apps.apple.com/app/smartrep/id[YOUR_APP_ID]`
- App Store badge image (download from Apple)

### **Social Media:**
- Instagram: `https://instagram.com/smartrep.app`
- TikTok: `https://tiktok.com/@smartrep`
- Twitter/X: `https://twitter.com/smartrepapp`

### **Legal Pages:**
- Privacy Policy URL
- Terms of Service URL
- Contact/Support email: `support@smartrep.app`

---

## 💡 Additional Features (Optional)

### **Phase 2 additions:**
1. **Video modal:** Demo video player
2. **Email capture:** Waitlist/early access form
3. **Blog section:** SEO content
4. **Press kit:** Media resources
5. **Comparison table:** SmartRep vs competitors
6. **Affiliate program:** Partner signup
7. **Live chat:** Customer support widget
8. **Dark/Light mode toggle:** Theme switcher

---

## 🎬 Final Notes for Cursor

**When building this landing page:**

1. **Start with the layout structure first** - Build the skeleton of all sections before adding detailed content

2. **Use semantic HTML** - Use proper section, article, header, footer tags

3. **Mobile-first CSS** - Write mobile styles first, then add responsive breakpoints

4. **Component reusability** - Extract common patterns (Card, Button, Section wrapper) early

5. **TypeScript strictly** - Define all prop types, no `any` types

6. **Accessibility** - Add proper ARIA labels, keyboard navigation, focus states

7. **Performance** - Lazy load images, code split heavy components, optimize fonts

8. **Comments** - Add brief comments explaining complex logic or component purposes

9. **Consistent naming** - Use descriptive component names (PricingCard, FeatureRow, etc.)

10. **Git commits** - Make logical, small commits as you build each section

**Build order suggestion:**
1. Project setup + Tailwind config
2. Layout structure (Header, Footer, basic sections)
3. UI components (Button, Card, etc.)
4. Hero section (most important)
5. Features section
6. Pricing section
7. Testimonials
8. FAQ
9. CTA sections
10. Animations & polish
11. Responsive testing
12. Performance optimization

---

## 📝 Content Placeholders

**Use these placeholders for missing content:**

- **Images:** Use placeholder services or solid color blocks with text labels
- **Icons:** Use Lucide React icon library
- **Avatar images:** Use initials in colored circles
- **Phone mockups:** Use CSS to create iPhone frame around screenshots
- **App Store badges:** Download official badges from Apple

**Placeholder text indicators:**
```tsx
{/* TODO: Replace with actual screenshot */}
{/* TODO: Get real testimonial */}
{/* TODO: Add analytics tracking */}
```

---

## 🚀 Deployment

**Recommended hosting:**
- **Vercel** (easiest, built for Next.js)
- **Netlify** (alternative)
- **Cloudflare Pages** (fast, cheap)

**Custom domain setup:**
- Point `smartrep.app` or `www.smartrep.app` to hosting
- Enable HTTPS (automatic on Vercel)
- Set up redirects (naked domain → www or vice versa)

**Environment variables:**
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_APP_STORE_URL=https://apps.apple.com/...
```

---

**END OF INSTRUCTIONS**

This document contains everything Cursor needs to build a high-converting, modern landing page for SmartRep. Follow the structure, implement the components, and deliver a production-ready website!
