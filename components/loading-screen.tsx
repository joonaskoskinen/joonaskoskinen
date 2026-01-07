"use client"

import { useState, useEffect } from "react"

export function LoadingScreen() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setLoading(false), 500)
          return 100
        }
        return prev + 2
      })
    }, 20)

    return () => clearInterval(interval)
  }, [])

  if (!loading) return null

  return (
    <div className="fixed inset-0 z-50 bg-background flex items-center justify-center">
      <div className="relative flex items-center justify-center">
        {/* Animated circles */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 border-4 border-primary/20 rounded-full animate-ping" />
          <div className="absolute w-24 h-24 border-4 border-accent/30 rounded-full animate-pulse" />
        </div>

        {/* Center content */}
        <div className="relative z-10 text-center flex flex-col items-center">
          <h2 className="text-6xl font-bold mb-4 animate-pulse">
            <span className="text-primary">JK</span>
          </h2>
          <div className="w-48 h-1 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-muted-foreground mt-4">{progress}%</p>
        </div>
      </div>
    </div>
  )
}
