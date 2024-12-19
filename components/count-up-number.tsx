'use client'

import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'

interface CountUpNumberProps {
  number: number
  suffix?: string
  title: string
}

export function CountUpNumber({ number, suffix = "+", title }: CountUpNumberProps) {
  const [hasAnimated, setHasAnimated] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [inView, hasAnimated])

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl font-bold mb-2">
        {hasAnimated && (
          <CountUp
            end={number}
            suffix={suffix}
            duration={2.5}
            enableScrollSpy
          />
        )}
      </div>
      <p className="text-lg">{title}</p>
    </div>
  )
}
