const bullets = [
  "Specialized in cotton bale transport",
  "Reliability & trust",
  "Cost-effectiveness",
  "Timely delivery",
  "Safety-first approach",
]

export function WhyChooseUs() {
  return (
    <div>
      <h2 id="why-choose-us-title" className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6">
        Why Choose Us
      </h2>
      <ul className="grid md:grid-cols-2 gap-4">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-3 rounded-lg border p-4">
            <span aria-hidden className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-500" />
            <span className="text-slate-700">{b}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
