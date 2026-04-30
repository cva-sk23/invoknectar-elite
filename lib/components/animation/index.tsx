'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '@/lib/hooks'
import * as React from 'react'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref)

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
      x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface AnimatedCounterProps {
  from?: number
  to: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
}

export function AnimatedCounter({
  from = 0,
  to,
  duration = 3,
  suffix = '',
  prefix = '',
  className = '',
}: AnimatedCounterProps) {
  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      className={className}
    >
      {isInView ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <CountingNumber from={from} to={to} duration={duration} prefix={prefix} suffix={suffix} />
        </motion.span>
      ) : (
        <span>{prefix}0{suffix}</span>
      )}
    </motion.div>
  )
}

function CountingNumber({
  from,
  to,
  duration,
  prefix,
  suffix,
}: {
  from: number
  to: number
  duration: number
  prefix: string
  suffix: string
}) {
  const { count } = useCountUp(from, to, duration)
  return (
    <>
      {prefix}
      {Math.round(count)}
      {suffix}
    </>
  )
}

function useCountUp(from: number, to: number, duration: number) {
  const [count, setCount] = React.useState(from)

  React.useEffect(() => {
    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = (currentTime - startTime) / (duration * 1000)

      if (progress < 1) {
        setCount(from + (to - from) * progress)
        requestAnimationFrame(animate)
      } else {
        setCount(to)
      }
    }

    requestAnimationFrame(animate)
  }, [from, to, duration])

  return { count }
}

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
}

export function FadeIn({ children, delay = 0, duration = 0.6, className = '' }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface ScaleInProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
}

export function ScaleIn({ children, delay = 0, duration = 0.6, className = '' }: ScaleInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}


