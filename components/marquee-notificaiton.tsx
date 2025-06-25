"use client"

import { useEffect, useRef, useState } from "react"
import { AlertCircle } from "lucide-react"

interface NotificationBannerProps {
  text: string
  speed?: "slow" | "medium" | "fast"
  backgroundColor?: string
  textColor?: string
}

export default function NotificationBanner({
  text = "*Admission Open for Academic Year - 2025*",
  speed = "fast",
  backgroundColor = "bg-red-600 text-white",
  textColor = "text-primary-foreground",
}: NotificationBannerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const [animationDuration, setAnimationDuration] = useState(15)

  // Set animation speed
  useEffect(() => {
    switch (speed) {
      case "slow":
        setAnimationDuration(25)
        break
      case "fast":
        setAnimationDuration(10)
        break
      default:
        setAnimationDuration(15)
    }
  }, [speed])

  // Reset animation when it completes
  useEffect(() => {
    const textElement = textRef.current

    if (!textElement) return

    const handleAnimationEnd = () => {
      textElement.style.animation = "none"
      // Trigger reflow
      void textElement.offsetWidth
      textElement.style.animation = `scrollRight ${animationDuration}s linear infinite`
    }

    textElement.addEventListener("animationend", handleAnimationEnd)

    return () => {
      textElement.removeEventListener("animationend", handleAnimationEnd)
    }
  }, [animationDuration])

  return (
    <div ref={containerRef} className={`w-full overflow-hidden ${backgroundColor} py-2 relative`}>
      <style jsx>{`
        @keyframes scrollRight {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>

      <div className="flex items-center justify-center">
        <a href="/admission">
        <div
          ref={textRef}
          className={`whitespace-nowrap font-medium ${textColor} flex items-center underline underline-offset-3`}
          style={{ animation: `scrollRight ${animationDuration}s linear infinite` }}
        >
          <AlertCircle className="mr-2 h-4 w-4 inline-block" />
          <span>{text}</span>
        </div>
        </a>
      </div>
    </div>
  )
}

