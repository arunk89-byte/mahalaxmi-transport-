"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const brandBlueBg = "bg-blue-700"

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    setStatus("loading")
    
    try {
      // Collect form data
      const name = formData.get("name") as string
      const email = formData.get("email") as string
      const phone = formData.get("phone") as string
      const message = formData.get("message") as string
      const serviceType = formData.get("serviceType") as string
      const pickupDate = formData.get("pickupDate") as string
      
      // Create WhatsApp message
      const whatsappMessage = `*New Contact Inquiry - Mahalaxmi Transport*

*Name:* ${name}
*Email:* ${email}
*Phone:* ${phone}
*Service Type:* ${serviceType}
*Preferred Pickup Date:* ${pickupDate}
*Message:* ${message}

_This inquiry was sent from the Mahalaxmi Transport website._`
      
      // Encode message for URL
      const encodedMessage = encodeURIComponent(whatsappMessage)
      
      // Open WhatsApp with the message
      const whatsappUrl = `https://wa.me/918618699559?text=${encodedMessage}`
      window.open(whatsappUrl, '_blank')
      
      setStatus("success")
      form.reset()
    } catch {
      setStatus("error")
    }
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h2 id="contact-title" className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4">
          Contact Us
        </h2>
        <p className="text-slate-600 leading-relaxed mb-6">
          Send an inquiry and our team will get back to you shortly.
        </p>
        <form onSubmit={onSubmit} className="space-y-4" aria-label="Contact form">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm text-slate-700 mb-1">
                Name
              </label>
              <Input id="name" name="name" placeholder="Your name" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-slate-700 mb-1">
                Email
              </label>
              <Input id="email" name="email" type="email" placeholder="you@example.com" required />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-sm text-slate-700 mb-1">
                Phone
              </label>
              <Input id="phone" name="phone" type="tel" placeholder="+91 9XXXXXXXXX" />
            </div>
            <div>
              <label htmlFor="serviceType" className="block text-sm text-slate-700 mb-1">
                Service Type
              </label>
              <Select name="serviceType">
                <SelectTrigger id="serviceType" aria-label="Select service type">
                  <SelectValue placeholder="Choose a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="door-to-door">Door-to-Door</SelectItem>
                  <SelectItem value="handling-only">Bale Handling Only</SelectItem>
                  <SelectItem value="long-haul">Long-haul</SelectItem>
                  <SelectItem value="express">Express</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label htmlFor="pickupDate" className="block text-sm text-slate-700 mb-1">
                Preferred Pickup Date
              </label>
              <Input id="pickupDate" name="pickupDate" type="date" />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm text-slate-700 mb-1">
              Message
            </label>
            <Textarea id="message" name="message" placeholder="How can we help?" rows={5} required />
          </div>
          <Button type="submit" disabled={status === "loading"} className={`${brandBlueBg} hover:bg-blue-800`}>
            {status === "loading" ? "Sending..." : "Submit"}
          </Button>
          {status === "success" && (
            <p aria-live="polite" className="text-emerald-600 text-sm pt-2">
              WhatsApp will open with your message. Please send it to complete your inquiry.
            </p>
          )}
          {status === "error" && (
            <p aria-live="polite" className="text-red-600 text-sm pt-2">
              Something went wrong. Please try again.
            </p>
          )}
        </form>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <a
            className="text-blue-700 font-medium"
            href="https://wa.me/918618699559"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact via WhatsApp"
          >
            WhatsApp
          </a>
          <a className="text-slate-700" href="tel:+918618699559">
            +91 8618699559
          </a>
          <a 
            className="text-blue-700 font-medium hover:text-blue-800 hover:underline transition-colors" 
            href="https://mahalaxmi-transport.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our website"
          >
            mahalaxmi-transport.vercel.app
          </a>
        </div>
      </div>

      <div className="rounded-lg overflow-hidden ring-1 ring-slate-200 h-[320px] md:h-auto">
        <iframe
          title="Company Location Map - Keshwapur, Hubli, Karnataka"
          aria-label="Company Location Map - Keshwapur, Hubli, Karnataka"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dOWWgUfXz8d8d8&q=Keshwapur,Hubli,Karnataka"
          className="w-full h-full"
          loading="lazy"
          allowFullScreen
        />
      </div>
    </div>
  )
}
