"use client"

interface SummaryLengthSelectorProps {
  value: "short" | "medium" | "long"
  onChange: (length: "short" | "medium" | "long") => void
  disabled?: boolean
}

export default function SummaryLengthSelector({ value, onChange, disabled }: SummaryLengthSelectorProps) {
  const options: Array<{ value: "short" | "medium" | "long"; label: string; description: string }> = [
    { value: "short", label: "Short", description: "Concise overview" },
    { value: "medium", label: "Medium", description: "Balanced summary" },
    { value: "long", label: "Long", description: "Detailed summary" },
  ]

  return (
    <fieldset className="space-y-3" disabled={disabled}>
      <label className="text-sm font-semibold text-foreground">Summary Length</label>
      <div className="flex gap-2 flex-wrap">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            disabled={disabled}
            className={`px-4 py-2 rounded-lg transition-all duration-200 text-sm font-medium ${
              value === option.value
                ? "bg-accent text-accent-foreground ring-2 ring-accent ring-offset-2 ring-offset-background"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border"
            } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
            title={option.description}
          >
            {option.label}
          </button>
        ))}
      </div>
    </fieldset>
  )
}
