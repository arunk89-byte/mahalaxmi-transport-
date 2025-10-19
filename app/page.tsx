import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { WhoWeAre } from "@/components/section-who-we-are"
import { Purpose } from "@/components/section-purpose"
import { KeyHighlights } from "@/components/section-highlights"
import { Services } from "@/components/section-services"
import { WorkCulture } from "@/components/section-work-culture"
import { Vision } from "@/components/section-vision"
import { WhyChooseUs } from "@/components/section-why-choose-us"
import { FleetCapacity } from "@/components/section-fleet-capacity"
import { FutureVision } from "@/components/section-future"
import { Gallery } from "@/components/section-gallery"
import { MajorClients } from "@/components/section-major-clients"
import { OurLocation } from "@/components/section-our-location"
import { Ending } from "@/components/section-ending"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <section id="mission" aria-labelledby="mission-title" className="py-12 md:py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="bg-blue-100 rounded-lg p-6 border-l-4 border-blue-500">
            <h2 id="mission-title" className="text-xl md:text-2xl font-semibold text-blue-900 mb-3">
              Digital Transformation
            </h2>
            <p className="text-pretty text-blue-800 leading-relaxed">
              We are digitalizing Mahalaxmi Transport's bales transport operations with modern technology solutions for enhanced efficiency and transparency.
            </p>
          </div>
        </div>
      </section>
      <section id="who-we-are" aria-labelledby="who-we-are-title" className="py-12 md:py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <WhoWeAre />
        </div>
      </section>
      <section id="our-purpose" aria-labelledby="our-purpose-title" className="py-12 md:py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <Purpose />
        </div>
      </section>
      <section id="highlights" aria-labelledby="highlights-title" className="py-12 md:py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <KeyHighlights />
        </div>
      </section>
      <section id="services" aria-labelledby="services-title" className="py-12 md:py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <Services />
        </div>
      </section>
      <section id="work-culture" aria-labelledby="work-culture-title" className="py-12 md:py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <WorkCulture />
        </div>
      </section>
      <section id="vision" aria-labelledby="vision-title" className="py-12 md:py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <Vision />
        </div>
      </section>
      <section id="future-vision" aria-labelledby="future-vision-title" className="py-12 md:py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <FutureVision />
        </div>
      </section>
      <section id="why-choose-us" aria-labelledby="why-choose-us-title" className="py-12 md:py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <WhyChooseUs />
        </div>
      </section>
      <section id="fleet-capacity" aria-labelledby="fleet-capacity-title" className="py-12 md:py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <FleetCapacity />
        </div>
      </section>
          <section id="major-clients" aria-labelledby="major-clients-title" className="py-12 md:py-16">
            <div className="container mx-auto max-w-6xl px-4">
              <MajorClients />
            </div>
          </section>
          <section id="gallery" aria-labelledby="gallery-title" className="py-12 md:py-16 bg-white">
            <div className="container mx-auto max-w-6xl px-4">
              <Gallery />
            </div>
          </section>
          <section id="our-location" aria-labelledby="our-location-title" className="py-12 md:py-16">
            <div className="container mx-auto max-w-6xl px-4">
              <OurLocation />
            </div>
          </section>
          <Ending />
          <Footer />
    </main>
  )
}
