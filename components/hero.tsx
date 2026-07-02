"use client"

import Image from "next/image"
import { useState } from "react"
import {
  ArrowRight,
  ImageIcon,
  Play,
  Sparkles,
  Video,
  Wand2,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const modes = [
  { label: "Image", icon: ImageIcon },
  { label: "Video", icon: Video },
]

export function Hero() {
  const [prompt, setPrompt] = useState("")
  const [active, setActive] = useState("Video")

  return (
    <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44">
      {/* ambient glows */}
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="animate-pulse-glow pointer-events-none absolute -top-24 left-1/4 size-[36rem] -translate-x-1/2 rounded-full bg-primary/25 blur-[120px]" />
      <div className="animate-pulse-glow pointer-events-none absolute -top-10 right-0 size-[30rem] rounded-full bg-accent/20 blur-[120px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium text-muted-foreground">
            <Sparkles className="size-3.5 text-primary" />
            Powered by next-gen generative models
          </div>

          <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Create <span className="text-gradient">AI Images &amp; Videos</span>{" "}
            in Seconds
          </h1>

          <p className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Turn a single prompt into cinematic videos, stunning images, logos,
            music, and voiceovers. One studio for every creative idea.
          </p>

          {/* prompt box */}
          <div className="mt-8 rounded-2xl glass p-3 glow-primary">
            <div className="mb-3 flex items-center gap-2">
              {modes.map((mode) => (
                <button
                  key={mode.label}
                  type="button"
                  onClick={() => setActive(mode.label)}
                  className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                    active === mode.label
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-secondary"
                  }`}
                >
                  <mode.icon className="size-3.5" />
                  {mode.label}
                </button>
              ))}
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex flex-1 items-center gap-2 rounded-xl bg-secondary/60 px-3 py-2.5">
                <Wand2 className="size-4 shrink-0 text-primary" />
                <input
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="A neon city at night, cinematic drone shot..."
                  className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
                />
              </div>
              <Button size="lg" className="glow-primary sm:px-6">
                Generate
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span>No credit card required</span>
            <span className="hidden h-1 w-1 rounded-full bg-muted-foreground/50 sm:block" />
            <span>Free daily generations</span>
            <span className="hidden h-1 w-1 rounded-full bg-muted-foreground/50 sm:block" />
            <span>Commercial license</span>
          </div>
        </div>

        {/* video preview card */}
        <div className="relative">
          <div className="animate-floaty relative overflow-hidden rounded-3xl glass p-2 glow-primary">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl sm:aspect-square">
              <Image
                src="/ai-video-preview.png"
                alt="AI generated cinematic scene of an astronaut on a neon alien world"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

              {/* play button */}
              <button
                type="button"
                aria-label="Play preview"
                className="absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full glass glow-primary transition-transform hover:scale-105"
              >
                <Play className="size-6 translate-x-0.5 fill-foreground text-foreground" />
              </button>

              {/* prompt overlay */}
              <div className="absolute inset-x-3 bottom-3 rounded-xl glass px-3 py-2.5">
                <p className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Sparkles className="size-3.5 shrink-0 text-primary" />
                  <span className="truncate text-foreground">
                    Lone astronaut on a bioluminescent alien world
                  </span>
                </p>
                <div className="mt-2 flex items-center justify-between text-[11px] text-muted-foreground">
                  <span>Generating · 00:08</span>
                  <span>4K · 24fps</span>
                </div>
                <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-secondary">
                  <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-primary to-accent" />
                </div>
              </div>
            </div>
          </div>

          {/* floating stat chip */}
          <div className="absolute -left-4 top-6 hidden rounded-xl glass px-3 py-2 text-xs sm:block">
            <p className="font-semibold text-foreground">12M+</p>
            <p className="text-muted-foreground">creations</p>
          </div>
        </div>
      </div>
    </section>
  )
}
