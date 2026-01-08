"use client"

import { useState, useEffect } from "react"

const bootMessages = [
  "Initializing system...",
  "Loading kernel modules...",
  "Establishing secure connection...",
  "Mounting filesystems...",
  "Starting services...",
  "Welcome, user.",
]

export function LoadingScreen() {
  const [loading, setLoading] = useState(true)
  const [currentLine, setCurrentLine] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    // Cursor blink
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)

    return () => clearInterval(cursorInterval)
  }, [])

  useEffect(() => {
    if (currentLine >= bootMessages.length) {
      setTimeout(() => setLoading(false), 500)
      return
    }

    const message = bootMessages[currentLine]
    let charIndex = 0

    const typeInterval = setInterval(() => {
      if (charIndex <= message.length) {
        setDisplayText(message.slice(0, charIndex))
        charIndex++
      } else {
        clearInterval(typeInterval)
        setTimeout(() => {
          setCurrentLine((prev) => prev + 1)
          setDisplayText("")
        }, 200)
      }
    }, 30)

    return () => clearInterval(typeInterval)
  }, [currentLine])

  if (!loading) return null

  return (
    <div className="fixed inset-0 z-50 bg-background flex items-center justify-center crt-overlay">
      {/* Scanline effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="w-full h-1 bg-primary/10 animate-scanline" />
      </div>

      <div className="relative max-w-2xl w-full mx-4">
        {/* Terminal window */}
        <div className="border border-primary/50 bg-card">
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-2 border-b border-primary/30 bg-primary/5">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-destructive/70" />
              <div className="w-3 h-3 rounded-full bg-accent/70" />
              <div className="w-3 h-3 rounded-full bg-primary/70" />
            </div>
            <span className="font-mono text-xs text-muted-foreground ml-2">joonas@portfolio:~</span>
          </div>

          {/* Terminal content */}
          <div className="p-6 font-mono text-sm min-h-[200px]">
            {bootMessages.slice(0, currentLine).map((msg, i) => (
              <div key={i} className="flex items-center gap-2 mb-1">
                <span className="text-primary">[OK]</span>
                <span className="text-muted-foreground">{msg}</span>
              </div>
            ))}

            {currentLine < bootMessages.length && (
              <div className="flex items-center gap-2">
                <span className="text-accent">[..]</span>
                <span className="text-foreground">
                  {displayText}
                  <span className={`${showCursor ? "opacity-100" : "opacity-0"} text-primary`}>█</span>
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
