"use client"

import type React from "react"

interface InputSectionProps {
  value: string
  onChange: (value: string) => void
  charCount: number
  onKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void
}

export default function InputSection({ value, onChange, charCount, onKeyDown }: InputSectionProps) {
  const maxChars = 10000

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label htmlFor="text-input" className="text-sm font-semibold text-foreground">
          Enter Text to Summarize
        </label>
        <span className={`text-xs ${charCount > maxChars * 0.9 ? "text-accent" : "text-muted-foreground"}`}>
          {charCount} / {maxChars}
        </span>
      </div>
      <textarea
        id="text-input"
        value={value}
        onChange={(e) => onChange(e.target.value.slice(0, maxChars))}
        onKeyDown={onKeyDown}
        placeholder="Paste your text here... Articles, documents, emails, or any long-form content (Cmd/Ctrl + Enter to summarize)"
        className="w-full h-48 p-4 bg-input border border-border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background transition-all duration-200 text-foreground placeholder-muted-foreground"
      />
      <p className="text-xs text-muted-foreground">
        Maximum {maxChars} characters. Tip: Use Cmd/Ctrl + Enter to quickly summarize.
      </p>
    </div>
  )
}
