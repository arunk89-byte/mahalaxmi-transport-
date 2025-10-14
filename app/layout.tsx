import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import { StructuredData } from '@/components/structured-data'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mahalaxmi Transport co. - Cotton Bale Transportation Services in Karnataka',
  description: 'Professional cotton bale transportation services pan India. Safe handling, timely delivery, and reliable logistics for cotton bales traders and textile mills.',
  keywords: 'cotton bales transportation, cotton bales, logistics, Karnataka, textile transport, cotton bales logistics, Mahalaxmi Transport co.',
  authors: [{ name: 'Mahalaxmi Transport co.' }],
  creator: 'Mahalaxmi Transport co.',
  publisher: 'Mahalaxmi Transport co.',
  robots: 'index, follow',
  metadataBase: new URL('https://mahalaxmitransport.co'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Mahalaxmi Transport co. - Cotton Bale Transportation Services',
    description: 'Professional cotton bale transportation services pan India. Safe handling, timely delivery, and reliable logistics.',
    url: 'https://mahalaxmitransport.co',
    siteName: 'Mahalaxmi Transport co.',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mahalaxmi Transport co. - Cotton Bale Transportation Services',
    description: 'Professional cotton bale transportation services pan India.',
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual code from Search Console
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
