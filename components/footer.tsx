export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto max-w-6xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-600 text-sm">
          © {new Date().getFullYear()} Mahalaxmi Transport co. All rights reserved.
        </p>
        <nav className="flex items-center gap-4 text-sm">
          <a href="#who-we-are" className="text-slate-700">
            Who We Are
          </a>
          <a href="#services" className="text-slate-700">
            Services
          </a>
          <a href="#contact" className="text-slate-700">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  )
}
