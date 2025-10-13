import Image from "next/image"

export function WhoWeAre() {
  return (
    <div>
      <h2 id="who-we-are-title" className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4">
        About Us
      </h2>
      <p className="text-pretty text-slate-600 leading-relaxed mb-4">
        We are a dedicated cotton bale transportation company with years of experience in delivering trust and reliability across India. Our goal is not just to move cotton—it's to move it with care, precision, and on-time delivery.
      </p>
      <p className="text-pretty text-slate-600 leading-relaxed mb-4">
        Our values are built on honesty, teamwork, and customer-first service. We understand the importance of timely transport and transparent documentation in the textile industry, and we make sure our clients experience a stress-free process.
      </p>
      
      {/* Owners Section */}
      <div className="mt-16">
        <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-6 text-center">
          Meet Our Owners
        </h3>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* First Owner - Visioner */}
          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-blue-100 hover:ring-blue-300 transition-all duration-300">
              <Image
                src="/owner-1.jpg"
                alt="Company Visioner"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h4 className="text-lg font-semibold text-slate-900 mb-2">Visioner & Strategic Leader</h4>
            <p className="text-slate-600 leading-relaxed italic">
              "Leading with vision, growing with purpose"
            </p>
          </div>
          
          {/* Second Owner */}
          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-blue-100 hover:ring-blue-300 transition-all duration-300">
              <Image
                src="/owner-2.jpg"
                alt="Company Owner"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h4 className="text-lg font-semibold text-slate-900 mb-2">Owner & Managing Director</h4>
            <p className="text-slate-600 leading-relaxed italic">
              "Excellence in every delivery, trust in every mile"
            </p>
          </div>
        </div>
      </div>
      
      {/* Mission Statement */}
      <div className="mt-8 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-700">
        <h3 className="font-semibold text-blue-900 mb-2">Our Mission:</h3>
        <p className="text-blue-800">
          To provide smooth and efficient cotton bale logistics with full transparency and reliability.
        </p>
      </div>
    </div>
  )
}
