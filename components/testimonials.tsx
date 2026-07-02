import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "AI Studio replaced three tools in our stack. We ship a week's worth of campaign visuals in an afternoon now.",
    name: "Maya Chen",
    role: "Creative Director, Lumina",
    initials: "MC",
  },
  {
    quote:
      "The video quality is genuinely cinematic. My clients can't believe it's generated from a text prompt.",
    name: "Diego Alvarez",
    role: "Freelance Filmmaker",
    initials: "DA",
  },
  {
    quote:
      "From logos to voiceovers, everything lives in one place. Our small team now punches way above its weight.",
    name: "Priya Nair",
    role: "Founder, Northwind",
    initials: "PN",
  },
  {
    quote:
      "The thumbnails alone doubled our click-through rate. This is the fastest content tool I've ever used.",
    name: "Sam Whitfield",
    role: "YouTuber, 1.2M subs",
    initials: "SW",
  },
  {
    quote:
      "Fine-tuning on our brand assets was seamless. Output feels on-brand every single time.",
    name: "Elena Rossi",
    role: "Head of Design, Vertex",
    initials: "ER",
  },
  {
    quote:
      "We onboarded the whole marketing team in a day. The interface is beautiful and just makes sense.",
    name: "Marcus Lee",
    role: "CMO, Quantica",
    initials: "ML",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-primary">Loved by creators</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Trusted by over 2 million creators
          </h2>
        </div>

        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="mb-5 break-inside-avoid rounded-2xl glass p-6"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 fill-primary text-primary"
                  />
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90">
                {`"${t.quote}"`}
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-semibold text-primary-foreground">
                  {t.initials}
                </span>
                <span>
                  <span className="block text-sm font-medium">{t.name}</span>
                  <span className="block text-xs text-muted-foreground">
                    {t.role}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
