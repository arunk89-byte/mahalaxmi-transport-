"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone } from "lucide-react"

export function OurLocation() {
  const handleWhatsApp = (number: string) => {
    window.open(`https://wa.me/91${number}`, '_blank')
  }

  const handleCall = (number: string) => {
    window.open(`tel:${number}`, '_self')
  }


  return (
    <div>
      <h2 id="our-location-title" className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6 text-center">
        📍 Our Location
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        {/* Address Card */}
        <Card className="p-6 hover:shadow-xl hover:scale-105 hover:border-blue-600 transition-all duration-300 border-l-4 border-blue-500 h-full flex flex-col">
          <CardHeader className="pb-4">
            <CardTitle className="text-slate-900 text-xl flex items-center gap-2">
              <MapPin className="h-6 w-6 text-blue-600" />
              Visit Us
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 flex-1 flex flex-col justify-center">
            <div className="bg-blue-50 p-8 rounded-lg hover:bg-blue-100 transition-colors duration-300">
              <p className="text-slate-700 font-medium leading-relaxed text-xl">
                Plot no 46, Nehru Nagar<br />
                Gokul Road, Hubli<br />
                Karnataka, India
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Contact Card */}
        <Card className="p-6 hover:shadow-xl hover:scale-105 hover:border-green-600 transition-all duration-300 border-l-4 border-green-500 h-full flex flex-col">
          <CardHeader className="pb-4">
            <CardTitle className="text-slate-900 text-xl flex items-center gap-2">
              📞 Contact Us
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 flex-1 flex flex-col justify-center">
            <div className="space-y-3">
              {/* Primary Contact */}
              <div className="bg-green-50 p-4 rounded-lg border border-green-200 hover:bg-green-100 hover:border-green-300 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-slate-900">Primary Contact</p>
                    <p className="text-slate-700">8217563933</p>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      onClick={() => handleCall('8217563933')}
                      className="bg-blue-600 hover:bg-blue-700 hover:scale-110 text-white transition-all duration-300"
                    >
                      <Phone className="h-3 w-3 mr-1" />
                      Call
                    </Button>
                    <Button 
                      size="sm" 
                      onClick={() => handleWhatsApp('8217563933')}
                      className="bg-green-600 hover:bg-green-700 hover:scale-110 text-white transition-all duration-300"
                    >
                      WhatsApp
                    </Button>
                  </div>
                </div>
              </div>

              {/* Secondary Contact */}
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 hover:bg-slate-100 hover:border-slate-300 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-slate-900">Secondary Contact</p>
                    <p className="text-slate-700">8073627241</p>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      onClick={() => handleCall('8073627241')}
                      className="bg-blue-600 hover:bg-blue-700 hover:scale-110 text-white transition-all duration-300"
                    >
                      <Phone className="h-3 w-3 mr-1" />
                      Call
                    </Button>
                    <Button 
                      size="sm" 
                      onClick={() => handleWhatsApp('8073627241')}
                      className="bg-slate-600 hover:bg-slate-700 hover:scale-110 text-white transition-all duration-300"
                    >
                      WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>


    </div>
  )
}
