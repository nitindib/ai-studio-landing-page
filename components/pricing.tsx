import { Check, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/mo",
    description: "For exploring what AI Studio can do.",
    features: [
      "50 image generations / mo",
      "5 video generations / mo",
      "Standard resolution",
      "Community support",
    ],
    cta: "Start for free",
    featured: false,
  },
  {
    name: "Pro",
    price: "$24",
    period: "/mo",
    description: "For creators shipping content every day.",
    features: [
      "Unlimited images",
      "500 video generations / mo",
      "4K resolution & priority queue",
      "AI music, voice & logos",
      "Commercial license",
    ],
    cta: "Upgrade to Pro",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For teams and studios at scale.",
    features: [
      "Everything in Pro",
      "Dedicated GPU capacity",
      "Team workspaces & SSO",
      "Custom model fine-tuning",
      "Dedicated success manager",
    ],
    cta: "Contact sales",
    featured: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-primary">Pricing</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Simple plans that scale with you
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Start free and upgrade anytime. No hidden fees, cancel whenever you
            like.
          </p>
        </div>

        <div className="mt-14 grid items-start gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-3xl p-7 ${
                plan.featured
                  ? "glass glow-primary lg:-mt-4 lg:pb-11 lg:pt-11"
                  : "glass"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-gradient-to-r from-primary to-accent px-3 py-1 text-xs font-medium text-primary-foreground">
                  <Sparkles className="size-3.5" />
                  Most popular
                </div>
              )}
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {plan.description}
              </p>
              <div className="mt-5 flex items-end gap-1">
                <span className="text-4xl font-semibold tracking-tight">
                  {plan.price}
                </span>
                <span className="mb-1 text-sm text-muted-foreground">
                  {plan.period}
                </span>
              </div>

              <Button
                className={`mt-6 w-full ${plan.featured ? "glow-primary" : ""}`}
                variant={plan.featured ? "default" : "secondary"}
              >
                {plan.cta}
              </Button>

              <ul className="mt-7 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15">
                      <Check className="size-3 text-primary" />
                    </span>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
