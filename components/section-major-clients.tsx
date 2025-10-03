export function MajorClients() {
  return (
    <div>
      <h2 id="major-clients-title" className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6">
        Major Clients
      </h2>
      <p className="text-slate-600 leading-relaxed mb-8">
        We are proud to serve some of the most trusted names in the cotton and textile industry. Our reliable transportation services have earned the trust of leading corporations across Karnataka.
      </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center">
        <div className="bg-white p-6 rounded-lg ring-1 ring-slate-200 hover:ring-2 hover:ring-black hover:shadow-lg hover:-translate-y-1 hover:scale-102 transition-all duration-300 cursor-pointer group">
          <div className="aspect-[3/2] flex items-center justify-center">
            <img
              src="/ldc-logo.jpg"
              alt="Louis Dreyfus Company Logo"
              className="max-w-[90%] max-h-[90%] object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg ring-1 ring-slate-200 hover:ring-2 hover:ring-black hover:shadow-lg hover:-translate-y-1 hover:scale-102 transition-all duration-300 cursor-pointer group">
          <div className="aspect-[3/2] flex items-center justify-center">
            <img
              src="/cci-logo.jpg"
              alt="Cotton Corporation of India Logo"
              className="max-w-[90%] max-h-[90%] object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg ring-1 ring-slate-200 hover:ring-2 hover:ring-black hover:shadow-lg hover:-translate-y-1 hover:scale-102 transition-all duration-300 cursor-pointer group">
          <div className="aspect-[3/2] flex items-center justify-center">
            <div className="text-center group-hover:scale-105 transition-transform duration-300">
              <div className="text-lg font-bold text-slate-700 mb-2 group-hover:text-blue-700 transition-colors duration-300">More Clients</div>
              <div className="text-sm text-slate-600 group-hover:text-slate-800 transition-colors duration-300">Leading textile mills and cotton traders across Karnataka</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-700">
        <h3 className="font-semibold text-blue-900 mb-2">Trusted Partnership</h3>
        <p className="text-blue-800">
          Our commitment to timely delivery, safe handling, and transparent documentation has made us the preferred choice for major corporations in the cotton industry.
        </p>
      </div>
    </div>
  )
}
