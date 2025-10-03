const items = [
  { alt: "Truck fleet ready for dispatch", src: "/truck-fleet-ready.jpg" },
  { alt: "Rural pickup route in India", src: "/rural-pickup-route.jpg" },
  { alt: "Loading cotton bales safely", src: "/loading-cotton-bales-safely.jpg" },
  { alt: "Cotton bale stacking in warehouse", src: "/cotton-bales-stack.jpg" },
  { alt: "Cotton godown storage", src: "/textile-mill-receiving-goods.jpg" },
]

export function Gallery() {
  return (
    <div>
      <h2 id="gallery-title" className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6">
        Photo Gallery
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((i, idx) => (
          <div key={idx} className="bg-white rounded-lg ring-1 ring-slate-200 overflow-hidden hover:ring-4 hover:ring-slate-400 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer">
            <img
              src={i.src || `/.jpg?key=egg9f&height=800&width=1200&query=${i.query}`}
              alt={i.alt}
              className="w-full h-96 object-cover hover:scale-110 transition-transform duration-500"
            />
            <div className="p-4 hover:bg-slate-100 transition-colors duration-500">
              <p className="text-lg font-semibold text-slate-900 text-center hover:text-slate-700 transition-colors duration-500">
                {i.alt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
