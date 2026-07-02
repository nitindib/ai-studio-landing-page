const brands = ["Northwind", "Lumina", "Vertex", "Quantica", "Nova Labs", "Helios"]

export function LogoCloud() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
      <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
        Trusted by teams at world-class companies
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
        {brands.map((brand) => (
          <span
            key={brand}
            className="text-lg font-semibold text-muted-foreground/70 transition-colors hover:text-foreground"
          >
            {brand}
          </span>
        ))}
      </div>
    </section>
  )
}
