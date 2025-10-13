import { Button } from "@/components/ui/button"

const brandBlueText = "text-blue-700"
const brandBlueBg = "bg-blue-700"
const accentGreenText = "text-emerald-500"

export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div className="container mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 id="hero-title" className={`text-pretty text-3xl md:text-5xl font-bold text-slate-900`}>
            Trusted Cotton Bale Transportation & Logistics Services
          </h1>
          <p className="text-pretty text-slate-600 leading-relaxed">
            We provide safe and timely transportation of cotton bales, along with quality sample cutting and reliable LR documentation. With us, your business runs smoothly and without delays.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a href="#services" className={`${brandBlueText} font-medium`}>
              Explore Services →
            </a>
          </div>
              <div className="flex items-center gap-4 pt-2">
                <div className={`text-sm ${accentGreenText}`}>Timely Delivery</div>
                <div className="text-sm text-slate-600">Cost-Effective</div>
                <div className="text-sm text-slate-600">Karnataka</div>
              </div>
        </div>

        <div className="relative aspect-[4/3] rounded-lg overflow-hidden ring-1 ring-slate-200 hover:ring-2 hover:ring-black hover:shadow-lg hover:-translate-y-1 hover:scale-102 transition-all duration-300 cursor-pointer group">
          <img
            src="/mahalaxmi-logo.jpg"
            alt="Mahalaxmi Transport co. logo"
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  )
}
