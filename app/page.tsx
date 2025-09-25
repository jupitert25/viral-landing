"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export default function ViralLandingPage() {
  const [countdown, setCountdown] = useState(5)
  const [isCountdownActive, setIsCountdownActive] = useState(false)
  const [showRedirect, setShowRedirect] = useState(false)

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isCountdownActive && countdown > 0) {
      interval = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            setShowRedirect(true)
            // Auto redirect after countdown
            setTimeout(() => {
              window.open("https://example.com", "_blank")
            }, 1000)
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [isCountdownActive, countdown])

  const handlePlayClick = () => {
    setIsCountdownActive(true)
  }

  const handleWatchNow = () => {
    window.open("https://example.com", "_blank")
  }

  return (
    <div className="min-h-screen bg-viral-dark flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02)_0%,transparent_50%)]" />

      {/* Main content container */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto">
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 text-balance leading-tight">
          {"Exclusive Content"} <br />
          <span className="text-glow" style={{ color: "var(--viral-red)" }}>
            {"Unlocked"}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-300 mb-12 text-pretty max-w-2xl leading-relaxed">
          {"Get instant access to premium content that millions are talking about. Limited time exclusive access."}
        </p>

        {/* Video thumbnail container */}
        <div className="relative mb-8 group">
          <div className="relative w-80 h-48 md:w-96 md:h-56 lg:w-[500px] lg:h-[300px] rounded-2xl overflow-hidden bg-viral-gray border border-white/10">
            {/* Thumbnail image */}
            <img
              src="/sexy-mysterious-video-thumbnail-with-dark-aestheti.jpg"
              alt="Exclusive content preview"
              className="w-full h-full object-cover"
            />

            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={handlePlayClick}
                disabled={isCountdownActive}
                className={`w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isCountdownActive
                    ? "bg-viral-red/50 cursor-not-allowed"
                    : "bg-viral-red hover:bg-viral-red/90 glow-red pulse-glow hover:scale-110"
                }`}
              >
                <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" fill="currentColor" />
              </button>
            </div>

            {/* Countdown overlay */}
            {isCountdownActive && (
              <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl md:text-6xl font-bold text-white mb-2">{countdown}</div>
                  <div className="text-lg text-gray-300">
                    {showRedirect ? "Redirecting..." : "Video starting in..."}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Countdown text */}
        <div className="mb-8">
          {isCountdownActive ? (
            <p className="text-lg text-gray-300 animate-pulse">
              {showRedirect ? "Opening exclusive content..." : `Video starting in ${countdown} seconds...`}
            </p>
          ) : (
            <p className="text-lg text-gray-300">{"Click play to start your exclusive experience"}</p>
          )}
        </div>

        {/* CTA Button */}
        <Button
          onClick={handleWatchNow}
          size="lg"
          className="bg-viral-red hover:bg-viral-red/90 text-white font-semibold px-8 py-4 text-lg rounded-full glow-red pulse-glow transition-all duration-300 hover:scale-105"
        >
          {"Watch Now"}
        </Button>

        {/* Additional info */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-400 mb-2">{"🔥 Trending #1 • 2.3M views in 24 hours"}</p>
          <p className="text-xs text-gray-500">{"Limited time access • Premium content"}</p>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-viral-dark to-transparent" />
    </div>
  )
}
