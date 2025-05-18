import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ABZ Labs | Fueling Crypto Startups",
  description:
    "ABZ Labs is a cutting-edge Web3 incubator dedicated to empowering visionary founders and exceptional crypto startups.",
  generator: 'v0.dev',
  icons: {
    icon: '/favicon.ico',
    // 您也可以添加其他尺寸的图标
    // apple: '/apple-icon.png',
    // shortcut: '/shortcut-icon.png'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
