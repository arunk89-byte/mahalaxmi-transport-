import { Navbar } from "@/components/navbar"
import { Contact } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <Contact />
        </div>
      </section>
      <Footer />
    </main>
  )
}
