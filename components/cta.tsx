import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Cta() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl glass px-6 py-16 text-center glow-primary sm:px-12">
          <div className="animate-pulse-glow pointer-events-none absolute -top-20 left-1/2 size-[28rem] -translate-x-1/2 rounded-full bg-primary/30 blur-[120px]" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Start creating with AI Studio today
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
              Join over 2 million creators bringing their ideas to life. Your
              first generation is only a prompt away.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg" className="glow-primary">
                Get started free
                <ArrowRight className="size-4" />
              </Button>
              <Button size="lg" variant="secondary">
                Talk to sales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
