import {
  AudioLines,
  ImageIcon,
  LayoutTemplate,
  Mic,
  PenTool,
  Video,
} from "lucide-react"

const features = [
  {
    icon: ImageIcon,
    title: "AI Images",
    description:
      "Generate photorealistic images and art in any style from a simple text prompt.",
  },
  {
    icon: Video,
    title: "AI Videos",
    description:
      "Create cinematic, high-resolution video clips with smooth motion and sound.",
  },
  {
    icon: LayoutTemplate,
    title: "AI Thumbnails",
    description:
      "Design scroll-stopping thumbnails optimized for clicks across every platform.",
  },
  {
    icon: PenTool,
    title: "AI Logos",
    description:
      "Craft unique, brand-ready logos and marks with instant vector exports.",
  },
  {
    icon: AudioLines,
    title: "AI Music",
    description:
      "Compose royalty-free soundtracks and beats tailored to your mood and genre.",
  },
  {
    icon: Mic,
    title: "AI Voice",
    description:
      "Produce natural, expressive voiceovers in 50+ languages and lifelike tones.",
  },
]

export function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-primary">Everything you need</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            One studio for every kind of creation
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Six powerful generative tools, unified in a single seamless
            workflow — no switching apps, no learning curve.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-2xl glass p-6 transition-all hover:-translate-y-1 hover:glow-primary"
            >
              <div className="pointer-events-none absolute -right-8 -top-8 size-24 rounded-full bg-primary/20 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent glow-primary">
                <feature.icon className="size-6 text-primary-foreground" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
