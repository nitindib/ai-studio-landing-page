import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    q: "What can I create with AI Studio?",
    a: "AI Studio lets you generate images, videos, thumbnails, logos, music, and voiceovers — all from text prompts inside a single unified workspace.",
  },
  {
    q: "Do I own the content I generate?",
    a: "Yes. On Pro and Enterprise plans you get a full commercial license to everything you create, so you can use it in client work, ads, and products.",
  },
  {
    q: "How fast are generations?",
    a: "Most images render in a few seconds and short videos in under a minute. Pro users get priority queue access for the fastest possible speeds.",
  },
  {
    q: "Can I fine-tune the models on my brand?",
    a: "Enterprise customers can fine-tune models on their own assets so every output stays consistent with their brand style and guidelines.",
  },
  {
    q: "Is there a free plan?",
    a: "Absolutely. The Free plan includes daily image and video generations with no credit card required, so you can try everything before upgrading.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes, plans are month-to-month and you can upgrade, downgrade, or cancel at any time directly from your account settings.",
  },
]

export function Faq() {
  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-primary">FAQ</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>

        <Accordion className="mt-12 space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-2xl glass px-5 border-b-0"
            >
              <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
