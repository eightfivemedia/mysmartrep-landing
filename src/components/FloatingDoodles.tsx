'use client'

import { motion } from 'framer-motion'

interface DoodleConfig {
  id: string
  Component: React.FC<React.SVGProps<SVGSVGElement>>
  position: {
    top?: string
    left?: string
    right?: string
    bottom?: string
  }
  animation: {
    type: 'float' | 'rotate' | 'bounce' | 'pulse'
    duration: number
    delay: number
  }
}

// Fitness SVG Doodle Components
const Dumbbell: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="80"
    height="40"
    viewBox="0 0 80 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 20 L70 20 M10 12 L10 28 M70 12 L70 28 M5 15 L5 25 M15 15 L15 25 M65 15 L65 25 M75 15 L75 25"
      stroke="#A78BFA"
      strokeWidth="2.5"
      strokeOpacity="0.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const Kettlebell: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="50"
    height="60"
    viewBox="0 0 50 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M25 8 C18 8, 15 12, 15 16 C15 20, 18 22, 25 22 C32 22, 35 20, 35 16 C35 12, 32 8, 25 8 Z M18 22 L15 35 C12 45, 15 52, 25 52 C35 52, 38 45, 35 35 L32 22"
      stroke="#A78BFA"
      strokeWidth="2.5"
      strokeOpacity="0.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const HeartPulse: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="60"
    height="55"
    viewBox="0 0 60 55"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M30 50 C10 35, 5 20, 15 12 C22 6, 30 12, 30 18 C30 12, 38 6, 45 12 C55 20, 50 35, 30 50 Z"
      stroke="#A78BFA"
      strokeWidth="2.5"
      strokeOpacity="0.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 28 L22 28 L25 22 L30 34 L35 28 L45 28"
      stroke="#A78BFA"
      strokeWidth="2"
      strokeOpacity="0.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const Lightning: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="40"
    height="60"
    viewBox="0 0 40 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M25 5 L10 30 L20 30 L15 55 L35 25 L22 25 Z"
      stroke="#A78BFA"
      strokeWidth="2.5"
      strokeOpacity="0.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const Stopwatch: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="50"
    height="60"
    viewBox="0 0 50 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle
      cx="25"
      cy="35"
      r="18"
      stroke="#A78BFA"
      strokeWidth="2.5"
      strokeOpacity="0.4"
    />
    <path
      d="M20 5 L30 5 M25 5 L25 17 M25 35 L25 25 M25 35 L32 30 M40 20 L45 15"
      stroke="#A78BFA"
      strokeWidth="2.5"
      strokeOpacity="0.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const FlexArm: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 45 C10 45, 15 40, 15 35 C15 30, 20 25, 25 25 C30 25, 35 22, 38 18 C41 14, 45 12, 50 15 C50 15, 48 20, 45 25 C42 30, 40 32, 35 32 C35 32, 38 35, 38 40 C38 45, 35 48, 30 50 L10 50"
      stroke="#A78BFA"
      strokeWidth="2.5"
      strokeOpacity="0.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const Target: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle
      cx="25"
      cy="25"
      r="20"
      stroke="#A78BFA"
      strokeWidth="2"
      strokeOpacity="0.3"
    />
    <circle
      cx="25"
      cy="25"
      r="12"
      stroke="#A78BFA"
      strokeWidth="2"
      strokeOpacity="0.4"
    />
    <circle
      cx="25"
      cy="25"
      r="4"
      fill="#A78BFA"
      fillOpacity="0.5"
    />
  </svg>
)

const GainsText: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="90"
    height="40"
    viewBox="0 0 90 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <text
      x="45"
      y="28"
      textAnchor="middle"
      fontSize="18"
      fontWeight="bold"
      fill="#A78BFA"
      fillOpacity="0.5"
      fontFamily="system-ui, sans-serif"
    >
      GAINS!
    </text>
  </svg>
)

const Star: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15 5 L17 12 L24 12 L18 17 L20 24 L15 19 L10 24 L12 17 L6 12 L13 12 Z"
      stroke="#A78BFA"
      strokeWidth="1.5"
      strokeOpacity="0.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const Flame: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="40"
    height="55"
    viewBox="0 0 40 55"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20 5 C20 5, 35 20, 35 35 C35 45, 28 50, 20 50 C12 50, 5 45, 5 35 C5 28, 10 22, 15 18 C15 18, 12 25, 15 30 C18 35, 25 32, 22 25 C22 25, 28 28, 28 35 C28 40, 24 45, 20 45 C16 45, 12 40, 12 35 C12 30, 20 20, 20 5 Z"
      stroke="#A78BFA"
      strokeWidth="2"
      strokeOpacity="0.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const doodles: DoodleConfig[] = [
  {
    id: 'dumbbell',
    Component: Dumbbell,
    position: { top: '12%', left: '5%' },
    animation: { type: 'float', duration: 4, delay: 0 },
  },
  {
    id: 'kettlebell',
    Component: Kettlebell,
    position: { top: '45%', left: '3%' },
    animation: { type: 'bounce', duration: 3, delay: 0.5 },
  },
  {
    id: 'heart-pulse',
    Component: HeartPulse,
    position: { top: '70%', left: '8%' },
    animation: { type: 'pulse', duration: 2, delay: 1 },
  },
  {
    id: 'lightning',
    Component: Lightning,
    position: { top: '25%', left: '12%' },
    animation: { type: 'pulse', duration: 2.5, delay: 0.3 },
  },
  {
    id: 'gains-text',
    Component: GainsText,
    position: { top: '8%', right: '5%' },
    animation: { type: 'pulse', duration: 2, delay: 0.2 },
  },
  {
    id: 'stopwatch',
    Component: Stopwatch,
    position: { top: '28%', right: '3%' },
    animation: { type: 'float', duration: 3.5, delay: 0.8 },
  },
  {
    id: 'flex-arm',
    Component: FlexArm,
    position: { top: '55%', right: '5%' },
    animation: { type: 'bounce', duration: 3, delay: 1.2 },
  },
  {
    id: 'target',
    Component: Target,
    position: { bottom: '15%', right: '10%' },
    animation: { type: 'pulse', duration: 2.5, delay: 0.5 },
  },
  {
    id: 'star-1',
    Component: Star,
    position: { top: '18%', right: '15%' },
    animation: { type: 'pulse', duration: 1.5, delay: 0.8 },
  },
  {
    id: 'star-2',
    Component: Star,
    position: { top: '38%', left: '15%' },
    animation: { type: 'pulse', duration: 2, delay: 1.5 },
  },
  {
    id: 'flame',
    Component: Flame,
    position: { bottom: '20%', left: '5%' },
    animation: { type: 'float', duration: 3, delay: 0.6 },
  },
]

const getAnimationProps = (animation: DoodleConfig['animation']) => {
  switch (animation.type) {
    case 'float':
      return {
        y: [0, -12, 0],
        transition: {
          duration: animation.duration,
          repeat: Infinity,
          delay: animation.delay,
          ease: 'easeInOut',
        },
      }
    case 'rotate':
      return {
        rotate: [0, 360],
        transition: {
          duration: animation.duration,
          repeat: Infinity,
          delay: animation.delay,
          ease: 'linear',
        },
      }
    case 'bounce':
      return {
        y: [0, -15, 0],
        transition: {
          duration: animation.duration,
          repeat: Infinity,
          delay: animation.delay,
          ease: 'easeInOut',
        },
      }
    case 'pulse':
      return {
        scale: [1, 1.15, 1],
        opacity: [0.4, 0.7, 0.4],
        transition: {
          duration: animation.duration,
          repeat: Infinity,
          delay: animation.delay,
          ease: 'easeInOut',
        },
      }
    default:
      return {}
  }
}

export default function FloatingDoodles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {doodles.map((doodle) => {
        const { Component, position, animation } = doodle
        return (
          <motion.div
            key={doodle.id}
            className="absolute hidden md:block"
            style={position}
            animate={getAnimationProps(animation)}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Component />
          </motion.div>
        )
      })}
    </div>
  )
}

