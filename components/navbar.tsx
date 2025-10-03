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
      <div className="w-full pl-4 pr-4 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="/mahalaxmi-logo.jpg"
            alt="Mahalaxmi Transport Logo"
            className="w-16 h-16 rounded-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
        </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#who-we-are" className={`hover:${brandBlue} ${neutralText} transition-colors duration-200`} onClick={(e) => {
                e.preventDefault();
                document.getElementById('who-we-are')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                Who We Are
              </a>
              <a href="#services" className={`hover:${brandBlue} ${neutralText} transition-colors duration-200`} onClick={(e) => {
                e.preventDefault();
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                Services
              </a>
              <a href="#why-choose-us" className={`hover:${brandBlue} ${neutralText} transition-colors duration-200`} onClick={(e) => {
                e.preventDefault();
                document.getElementById('why-choose-us')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                Why Us
              </a>
              <a href="#gallery" className={`hover:${brandBlue} ${neutralText} transition-colors duration-200`} onClick={(e) => {
                e.preventDefault();
                document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                Gallery
              </a>
              <a href="/contact" className={`hover:${brandBlue} ${neutralText} transition-colors duration-200`}>
                Contact
              </a>
              <a
                href="https://mahalaxmi-transport.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className={`${brandBlue} font-medium hover:text-blue-800 hover:underline transition-colors`}
              >
                Connect
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
                <a onClick={() => {
                  setOpen(false);
                  document.getElementById('who-we-are')?.scrollIntoView({ behavior: 'smooth' });
                }} href="#who-we-are" className="text-slate-900 hover:text-blue-700 transition-colors">
                  Who We Are
                </a>
                <a onClick={() => {
                  setOpen(false);
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }} href="#services" className="text-slate-900 hover:text-blue-700 transition-colors">
                  Services
                </a>
                <a onClick={() => {
                  setOpen(false);
                  document.getElementById('why-choose-us')?.scrollIntoView({ behavior: 'smooth' });
                }} href="#why-choose-us" className="text-slate-900 hover:text-blue-700 transition-colors">
                  Why Us
                </a>
                <a onClick={() => {
                  setOpen(false);
                  document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
                }} href="#gallery" className="text-slate-900 hover:text-blue-700 transition-colors">
                  Gallery
                </a>
                <a onClick={() => setOpen(false)} href="/contact" className="text-slate-900 hover:text-blue-700 transition-colors">
                  Contact
                </a>
                <a
                  onClick={() => setOpen(false)}
                  href="https://mahalaxmi-transport.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 font-medium hover:text-blue-800 hover:underline transition-colors"
                >
                  Connect
                </a>
              </div>
            </div>
          )}
    </header>
  )
}
