export function WorkCulture() {
  return (
    <div>
      <h2 id="work-culture-title" className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6">
        Our Work Culture
      </h2>
      <p className="text-pretty text-slate-600 leading-relaxed mb-6">
        At our company, every member of our team believes in responsibility and teamwork. We treat every cotton bale as valuable, ensuring safety at every step.
      </p>
      <p className="text-pretty text-slate-600 leading-relaxed mb-6">
        We follow three simple rules in our work culture:
      </p>
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <div className="text-center p-6 bg-blue-50 rounded-lg border border-blue-200">
          <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-xl">T</span>
          </div>
          <h3 className="font-semibold text-blue-900 mb-2">Trust</h3>
          <p className="text-blue-800 text-sm">We keep our word with customers.</p>
        </div>
        <div className="text-center p-6 bg-emerald-50 rounded-lg border border-emerald-200">
          <div className="w-12 h-12 bg-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-xl">C</span>
          </div>
          <h3 className="font-semibold text-emerald-900 mb-2">Care</h3>
          <p className="text-emerald-800 text-sm">We handle your goods as if they are our own.</p>
        </div>
        <div className="text-center p-6 bg-orange-50 rounded-lg border border-orange-200">
          <div className="w-12 h-12 bg-orange-700 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-xl">C</span>
          </div>
          <h3 className="font-semibold text-orange-900 mb-2">Commitment</h3>
          <p className="text-orange-800 text-sm">We always aim for on-time delivery.</p>
        </div>
      </div>
      <div className="p-6 bg-slate-50 rounded-lg border-l-4 border-slate-400">
        <p className="text-slate-700 leading-relaxed">
          Our employees work together like a family, and our customers are an extended part of that family.
        </p>
      </div>
    </div>
  )
}
