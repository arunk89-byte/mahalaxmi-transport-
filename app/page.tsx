import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { WhoWeAre } from "@/components/section-who-we-are"
import { Purpose } from "@/components/section-purpose"
import { KeyHighlights } from "@/components/section-highlights"
import { Services } from "@/components/section-services"
import { WorkCulture } from "@/components/section-work-culture"
import { Vision } from "@/components/section-vision"
import { WhyChooseUs } from "@/components/section-why-choose-us"
import { FutureVision } from "@/components/section-future"
import { Gallery } from "@/components/section-gallery"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
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
      <section id="why-choose-us" aria-labelledby="why-choose-us-title" className="py-12 md:py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <WhyChooseUs />
        </div>
      </section>
      <section id="future-vision" aria-labelledby="future-vision-title" className="py-12 md:py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <FutureVision />
        </div>
      </section>
      <section id="gallery" aria-labelledby="gallery-title" className="py-12 md:py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <Gallery />
        </div>
      </section>
      <Footer />
    </main>
  )
}
