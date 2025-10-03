"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const brandBlue = "text-blue-700"
const brandBlueBg = "bg-blue-700"
const neutralText = "text-slate-900"

export function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="container mx-auto max-w-6xl pl-0 pr-4 h-16 flex items-center justify-between">
        <Link href="#home" className="flex items-center gap-4" aria-label="Mahalaxmi Transport Home">
          <Image
            src="/mahalaxmi-logo.jpg"
            alt="Mahalaxmi Transport logo"
            width={70}
            height={70}
            className="rounded-sm"
          />
          <span className={`font-bold text-3xl ${neutralText}`}>Mahalaxmi Transport</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#who-we-are" className={`hover:${brandBlue} ${neutralText}`}>
            Who We Are
          </a>
          <a href="#services" className={`hover:${brandBlue} ${neutralText}`}>
            Services
          </a>
          <a href="#why-choose-us" className={`hover:${brandBlue} ${neutralText}`}>
            Why Us
          </a>
          <a href="#gallery" className={`hover:${brandBlue} ${neutralText}`}>
            Gallery
          </a>
          <a href="/contact" className={`hover:${brandBlue} ${neutralText}`}>
            Contact
          </a>
          <a 
            href="https://mahalaxmi-transport.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className={`${brandBlue} font-medium hover:text-blue-800 hover:underline transition-colors`}
          >
            mahalaxmi-transport.vercel.app
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded border"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle menu</span>
          <div className="space-y-1.5">
            <span className="block w-5 h-0.5 bg-slate-900" />
            <span className="block w-5 h-0.5 bg-slate-900" />
            <span className="block w-5 h-0.5 bg-slate-900" />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="container mx-auto max-w-6xl px-4 py-3 flex flex-col gap-3">
            <a onClick={() => setOpen(false)} href="#who-we-are" className="text-slate-900">
              Who We Are
            </a>
            <a onClick={() => setOpen(false)} href="#services" className="text-slate-900">
              Services
            </a>
            <a onClick={() => setOpen(false)} href="#why-choose-us" className="text-slate-900">
              Why Us
            </a>
            <a onClick={() => setOpen(false)} href="#gallery" className="text-slate-900">
              Gallery
            </a>
            <a onClick={() => setOpen(false)} href="/contact" className="text-slate-900">
              Contact
            </a>
            <a 
              onClick={() => setOpen(false)}
              href="https://mahalaxmi-transport.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 font-medium hover:text-blue-800 hover:underline transition-colors"
            >
              mahalaxmi-transport.vercel.app
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
