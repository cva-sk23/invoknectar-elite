import type { Metadata } from 'next'
import { Outfit, Inter } from 'next/font/google'
import { Navbar } from '@/lib/components/common/Navbar'
import { Footer } from '@/lib/components/common/Footer'
import '@/styles/globals.css'

const outfit = Outfit({ variable: '--font-outfit', subsets: ['latin'] })
const inter = Inter({ variable: '--font-inter', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Invok Nectar - Enterprise SaaS Solutions',
  description: 'Intelligent platforms for fintech, collections, and data intelligence. Enterprise-grade SaaS solutions built for scale.',
  keywords: 'SaaS, fintech, collections, AI, data intelligence, enterprise software',
  authors: [{ name: 'Invok Nectar' }],
  creator: 'Invok Nectar',
  publisher: 'Invok Nectar',
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://invoknectar.com',
    siteName: 'Invok Nectar',
    title: 'Invok Nectar - Enterprise SaaS Solutions',
    description: 'Intelligent platforms for fintech, collections, and data intelligence.',
    images: [
      {
        url: 'https://invoknectar.com/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@invoknectar',
    creator: '@invoknectar',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  alternates: {
    canonical: 'https://invoknectar.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0a0e27" />
      </head>
      <body className={`${outfit.variable} ${inter.variable}`}>
        <Navbar />
        <main className="pt-16 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
