import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function KeyHighlights() {
  return (
    <section aria-labelledby="highlights-title">
      <h2 id="highlights-title" className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6">
        Key Highlights
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="grid sm:grid-cols-2 gap-4">
          <Card className="bg-blue-50">
            <CardHeader>
              <CardTitle className="text-slate-900">On-time Delivery</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700">
              <p className="text-3xl font-bold text-blue-700">98%</p>
              <p className="leading-relaxed">Consistent on-time performance across routes.</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50">
            <CardHeader>
              <CardTitle className="text-slate-900">Bales Moved</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700">
              <p className="text-3xl font-bold text-blue-700">5,000+</p>
              <p className="leading-relaxed">Handled with care and proper protocols.</p>
            </CardContent>
          </Card>
              <Card className="bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-slate-900">Coverage</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-700">
                  <p className="text-3xl font-bold text-blue-700">Karnataka</p>
                  <p className="leading-relaxed">State-wide pickup and delivery network.</p>
                </CardContent>
              </Card>
          <Card className="bg-blue-50">
            <CardHeader>
              <CardTitle className="text-slate-900">Safety-first</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700">
              <p className="text-3xl font-bold text-blue-700">SOPs</p>
              <p className="leading-relaxed">Standardized loading/unloading & lashing.</p>
            </CardContent>
          </Card>
        </div>
        <div className="rounded-lg overflow-hidden ring-1 ring-slate-200">
          <img
            src="/cotton-transport-truck.jpg"
            alt="Cotton transport truck with yellow-wrapped cotton bales"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
