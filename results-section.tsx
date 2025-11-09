"use client"

import { useState } from "react"

interface ResultsSectionProps {
  summary: string
}

export default function ResultsSection({ summary }: ResultsSectionProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(summary)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  return (
    <div className="mt-8 p-6 bg-card border border-border rounded-lg animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-foreground">Summary</h2>
        <button
          onClick={handleCopy}
          className="px-3 py-1 text-sm bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-md transition-all duration-200 border border-border"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <p className="text-foreground leading-relaxed whitespace-pre-wrap">{summary}</p>
    </div>
  )
}
