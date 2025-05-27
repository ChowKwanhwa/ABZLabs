import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ABZ Labs - Web3 Venture Building & Investment',
  description: 'ABZ Labs is dedicated to identifying, investing in, and accelerating the most promising early-stage Web3 protocols and founding teams.',
  generator: 'Next.js',
  keywords: ['Web3', 'Blockchain', 'Investment', 'Venture Building', 'DeFi', 'Cryptocurrency'],
  authors: [{ name: 'ABZ Labs' }],
  openGraph: {
    title: 'ABZ Labs - Web3 Venture Building & Investment',
    description: 'Accelerating Web3 Innovation',
    url: 'https://abz-labs.com',
    siteName: 'ABZ Labs',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ABZ Labs',
    description: 'Accelerating Web3 Innovation',
    creator: '@abzlabs',
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
