import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    title: "🚚 Dedicated Transportation of Cotton Bales",
    query: "cotton%20bales%20transportation%20truck",
    desc: "Secure and efficient movement to any destination.",
  },
  {
    title: "🕒 Timely Delivery",
    query: "timely%20delivery%20logistics",
    desc: "We value your time and ensure on-schedule transportation.",
  },
  {
    title: "🛡 Safe Handling",
    query: "safe%20handling%20cotton%20bales",
    desc: "Proper loading, stacking, and unloading to keep bales intact.",
  },
  {
    title: "📍 Karnataka Coverage",
    query: "karnataka%20transportation",
    desc: "Transportation services across Karnataka state.",
  },
  {
    title: "💰 Cost-Effective Solutions",
    query: "cost%20effective%20transportation",
    desc: "Affordable transport without compromising safety.",
  },
]

export function Services() {
  return (
    <div>
      <h2 id="services-title" className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6">
        Our Services
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <Card key={s.title} className="p-6 hover:ring-2 hover:ring-black hover:shadow-lg hover:-translate-y-1 hover:scale-102 transition-all duration-300 cursor-pointer">
            <CardHeader className="pb-4">
              <CardTitle className="text-slate-900 text-lg">{s.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-600 leading-relaxed">{s.desc}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
