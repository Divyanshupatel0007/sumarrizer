export default function Header() {
  return (
    <header className="w-full border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 py-6 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            AI Text Summarizer
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base mt-2">
            Transform lengthy text into concise, meaningful summaries
          </p>
        </div>
      </div>
    </header>
  )
}

