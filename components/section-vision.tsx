export function Vision() {
  return (
    <div>
      <h2 id="vision-title" className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6">
        ✨ Vision
      </h2>
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-blue-50 to-emerald-50 p-8 rounded-lg border-l-4 border-blue-700 hover:ring-2 hover:ring-black hover:shadow-lg hover:-translate-y-1 hover:scale-102 transition-all duration-300 cursor-pointer">
          <blockquote className="text-slate-700 leading-relaxed text-lg italic mb-4">
            "To set the benchmark in cotton logistics with innovation, reliability, and professionalism, driving India's cotton supply chain towards global standards."
          </blockquote>
        </div>
        
        <div className="bg-gradient-to-r from-emerald-50 to-orange-50 p-8 rounded-lg border-l-4 border-emerald-700 hover:ring-2 hover:ring-black hover:shadow-lg hover:-translate-y-1 hover:scale-102 transition-all duration-300 cursor-pointer">
          <blockquote className="text-slate-700 leading-relaxed text-lg italic mb-4">
            "Making cotton transportation simple, safe, and smart – for every bale, every client, every time."
          </blockquote>
        </div>
      </div>
    </div>
  )
}
