import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    title: "Cotton Bale Transportation",
    query: "cotton%20bales%20transportation%20truck",
    desc: "Safe and secure transportation of cotton bales across states and cities, ensuring your goods reach the destination on time.",
  },
  {
    title: "Sample Cutting for Customers",
    query: "cotton%20sample%20cutting%20quality%20check",
    desc: "We provide professional cotton sample cutting, helping buyers and sellers check the quality before making big decisions.",
  },
  {
    title: "Lorry Receipts (LRs)",
    query: "lorry%20receipt%20documentation%20logistics",
    desc: "Accurate and transparent LR documentation so you can track your goods with ease and stay worry-free.",
  },
  {
    title: "Additional Logistics Support",
    query: "warehouse%20handling%20packaging%20logistics",
    desc: "From warehouse handling to packaging, we assist you with the right support whenever required.",
  },
]

export function Services() {
  return (
    <div>
      <h2 id="services-title" className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6">
        Our Services
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s) => (
          <Card key={s.title} className="overflow-hidden">
            <div className="aspect-[16/9]">
              <img
                src={`/.jpg?key=6pr9m&height=720&width=1280&query=${s.query}`}
                alt={s.title}
                className="h-full w-full object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-slate-900">{s.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-600 leading-relaxed">{s.desc}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
