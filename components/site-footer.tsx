import Link from "next/link"
import { Globe, MessageCircle, Play, Rss, Sparkles } from "lucide-react"

const columns = [
  {
    title: "Product",
    links: ["AI Images", "AI Videos", "AI Thumbnails", "AI Logos", "AI Music"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Blog", "Press", "Contact"],
  },
  {
    title: "Resources",
    links: ["Documentation", "API", "Community", "Tutorials", "Changelog"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Security", "Licenses", "Cookies"],
  },
]

const socials = [
  { icon: MessageCircle, label: "Twitter" },
  { icon: Globe, label: "Website" },
  { icon: Play, label: "YouTube" },
  { icon: Rss, label: "Blog" },
]

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border pt-16 pb-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_repeat(4,1fr)]">
          <div>
            <Link href="#" className="flex items-center gap-2">
              <span className="flex size-8 items-center justify-center rounded-lg bg-primary glow-primary">
                <Sparkles className="size-4 text-primary-foreground" />
              </span>
              <span className="text-lg font-semibold tracking-tight">
                AI Studio
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              The all-in-one generative platform for images, video, audio, and
              design.
            </p>
            <div className="mt-5 flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  <s.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} AI Studio. All rights reserved.</p>
          <p>Crafted for creators, everywhere.</p>
        </div>
      </div>
    </footer>
  )
}
