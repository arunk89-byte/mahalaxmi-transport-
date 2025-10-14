export function Ending() {
  return (
    <div className="text-center py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Ready to Transport Your Cotton Bales?
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            Join hundreds of satisfied customers who trust Mahalaxmi Transport co. for their cotton bales logistics needs. 
            Experience reliable, safe, and timely transportation services pan India.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:ring-2 hover:ring-black hover:shadow-lg hover:-translate-y-1 hover:scale-102 transition-all duration-300 cursor-pointer">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚚</span>
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Reliable Service</h3>
            <p className="text-slate-600 text-sm">98% on-time delivery rate with professional handling</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:ring-2 hover:ring-black hover:shadow-lg hover:-translate-y-1 hover:scale-102 transition-all duration-300 cursor-pointer">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🛡️</span>
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Safe Handling</h3>
            <p className="text-slate-600 text-sm">Proper loading, stacking, and unloading protocols</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:ring-2 hover:ring-black hover:shadow-lg hover:-translate-y-1 hover:scale-102 transition-all duration-300 cursor-pointer">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📞</span>
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">24/7 Support</h3>
            <p className="text-slate-600 text-sm">Round-the-clock customer service and tracking</p>
          </div>
        </div>
        
        <div className="bg-blue-50 rounded-lg p-8 border-l-4 border-blue-700">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">Get Started Today</h3>
          <p className="text-blue-800 mb-6">
            Contact us now for a free quote and experience the difference that professional cotton bales transportation makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors duration-300"
            >
              Get Free Quote
            </a>
            <a
              href="https://wa.me/918073627241"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors duration-300"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-200">
          <p className="text-slate-500 text-sm">
            Thank you for choosing Mahalaxmi Transport co. - Your trusted partner in cotton bales logistics across Karnataka to pan India.
          </p>
        </div>
      </div>
    </div>
  )
}
