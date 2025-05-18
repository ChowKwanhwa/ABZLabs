"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className="min-h-screen text-white overflow-hidden">
      {/* Hero Section with its own background - includes nav bar */}
      <section className="relative">
        {/* Hero Background */}
        <div className="absolute inset-0 z-0">
          <Image src="/Hero-BG.png" alt="Hero Background" fill priority className="object-cover" />
        </div>

        <div className="relative z-10">
          {/* Container for both nav and hero content */}
          <div className="max-w-6xl mx-auto px-4">
            {/* Navigation - now more compact and centered */}
            <div className="flex justify-center py-5">
              <nav
                className={`bg-[#1a1a2e]/50 rounded-full px-6 py-2 flex items-center justify-between w-auto ${
                  isLoaded ? "animate-fade-in" : "opacity-0"
                }`}
                style={{ animationDelay: "0.2s" }}
              >
                <div className="flex items-center mr-8">
                  <Image src="/abz-labs-logo.png" alt="ABZ Labs Logo" width={120} height={30} className="h-8 w-auto" />
                </div>
                <div className="flex items-center space-x-6">
                  <Link
                    href="#"
                    className="text-white/80 hover:text-white transition px-3 py-1 rounded-full bg-white/10"
                  >
                    About
                  </Link>
                  <Link href="#" className="text-white/80 hover:text-white transition">
                    Services
                  </Link>
                  <Link href="#" className="text-white/80 hover:text-white transition">
                    Vision
                  </Link>
                  <Link href="#" className="text-white/80 hover:text-white transition">
                    Deck
                  </Link>
                  <Link href="#" className="text-white/80 hover:text-white transition">
                    Contact
                  </Link>
                  <button className="bg-[#3632ff] text-white rounded-full w-8 h-8 flex items-center justify-center btn-hover ml-2">
                    <span>+</span>
                  </button>
                </div>
              </nav>
            </div>

            {/* Hero Content */}
            <div className="pt-20 pb-80">
              <div className="flex flex-col md:flex-row justify-between items-start">
                {/* Left column */}
                <div
                  className={`md:w-1/2 space-y-6 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
                  style={{ animationDelay: "0.4s" }}
                >
                  <h1 className="text-7xl font-bold">
                    <span className="text-[#a3cfff]">{"} "}</span>
                    <span className="animate-typing">ABZ Labs</span>
                  </h1>
                  <h2 className="text-4xl font-semibold leading-tight">
                    Fueling Crypto Startups
                    <br />
                    to Reach New Heights
                  </h2>
                  <p className="text-white/80 text-lg max-w-xl pb-4">
                    ABZ Labs is a cutting-edge Web3 incubator dedicated to empowering visionary founders and exceptional
                    crypto startups.
                  </p>
                  <button className="bg-white text-[#0d25cc] font-medium px-8 py-3 rounded-full hover:bg-white/90 transition btn-hover">
                    GET IN TOUCH
                  </button>
                </div>

                {/* Right column */}
                <div
                  className={`md:w-1/2 md:pl-16 mt-10 md:mt-32 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
                  style={{ animationDelay: "0.6s" }}
                >
                  <p className="text-white/90 text-lg">
                    Our mission is to accelerate the growth of Web3 innovations by providing tailored support,
                    resources, and a collaborative ecosystem. At ABZ Labs, we believe in the transformative power of
                    decentralization and technology to shape the future of Web3.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos Section - Now a continuous marquee with fixed spacing */}
      <section className="bg-black py-12 overflow-hidden">
        <div className="container mx-auto px-4 mb-8">
          <p
            className={`text-center text-white/60 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
            style={{ animationDelay: "0.8s" }}
          >
            Trusted by the world's most innovative teams
          </p>
        </div>

        <div className="marquee">
          <div className="marquee-content">
            <div className="flex items-center px-8">
              {/* Fixed spacing between logos */}
              <div className="grayscale hover:grayscale-0 transition mx-12">
                <Image src="/logo-ton.png" alt="TON logo" width={80} height={40} className="h-8 object-contain" />
              </div>
              <div className="grayscale hover:grayscale-0 transition mx-12">
                <Image src="/logo-circle.png" alt="CIRCLE logo" width={80} height={40} className="h-8 object-contain" />
              </div>
              <div className="grayscale hover:grayscale-0 transition mx-12">
                <Image
                  src="/logo-binance.png"
                  alt="BINANCE logo"
                  width={80}
                  height={40}
                  className="h-8 object-contain"
                />
              </div>
              <div className="grayscale hover:grayscale-0 transition mx-12">
                <Image src="/logo-jump.png" alt="JUMP logo" width={80} height={40} className="h-8 object-contain" />
              </div>
              <div className="grayscale hover:grayscale-0 transition mx-12">
                <Image
                  src="/logo-magic-eden.png"
                  alt="MAGIC EDEN logo"
                  width={80}
                  height={40}
                  className="h-8 object-contain"
                />
              </div>
              <div className="grayscale hover:grayscale-0 transition mx-12">
                <Image src="/logo-meta.png" alt="META logo" width={80} height={40} className="h-8 object-contain" />
              </div>
              <div className="grayscale hover:grayscale-0 transition mx-12">
                <Image src="/logo-stripe.png" alt="STRIPE logo" width={80} height={40} className="h-8 object-contain" />
              </div>
            </div>
          </div>
          <div className="marquee-content-duplicate">
            <div className="flex items-center px-8">
              {/* Fixed spacing between logos */}
              <div className="grayscale hover:grayscale-0 transition mx-12">
                <Image src="/logo-ton.png" alt="TON logo" width={80} height={40} className="h-8 object-contain" />
              </div>
              <div className="grayscale hover:grayscale-0 transition mx-12">
                <Image src="/logo-circle.png" alt="CIRCLE logo" width={80} height={40} className="h-8 object-contain" />
              </div>
              <div className="grayscale hover:grayscale-0 transition mx-12">
                <Image
                  src="/logo-binance.png"
                  alt="BINANCE logo"
                  width={80}
                  height={40}
                  className="h-8 object-contain"
                />
              </div>
              <div className="grayscale hover:grayscale-0 transition mx-12">
                <Image src="/logo-jump.png" alt="JUMP logo" width={80} height={40} className="h-8 object-contain" />
              </div>
              <div className="grayscale hover:grayscale-0 transition mx-12">
                <Image
                  src="/logo-magic-eden.png"
                  alt="MAGIC EDEN logo"
                  width={80}
                  height={40}
                  className="h-8 object-contain"
                />
              </div>
              <div className="grayscale hover:grayscale-0 transition mx-12">
                <Image src="/logo-meta.png" alt="META logo" width={80} height={40} className="h-8 object-contain" />
              </div>
              <div className="grayscale hover:grayscale-0 transition mx-12">
                <Image src="/logo-stripe.png" alt="STRIPE logo" width={80} height={40} className="h-8 object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-black py-20">
        <div className="container mx-auto px-4">
          <h2
            className={`text-4xl font-bold text-center mb-16 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
            style={{ animationDelay: "1s" }}
          >
            Our Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Service 1 */}
            <div
              className={`service-box bg-[#191919] p-8 rounded-lg flex flex-col items-center text-center h-[550px] max-w-[340px] mx-auto shadow-[0_0_20px_2px_rgba(59,130,246,0.2)] border border-blue-900/20 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
              style={{ animationDelay: "1.2s" }}
            >
              <div className="mb-8 relative">
                <div className="absolute inset-0 w-[250px] h-[250px] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                  <Image src="/cube-helix-8.png" alt="Icon Background" fill className="object-cover" />
                </div>
                <Image
                  src="/service-icon-1.png"
                  alt="Liquidity Management"
                  width={160}
                  height={160}
                  className="relative z-10 animate-float"
                />
              </div>
              <h3 className="text-xl font-bold mb-4">Liquidity Management</h3>
              <p className="text-white/70 text-sm">
                Navigate the crucial early funding stages with confidence. ABZ Labs provides strategic guidance and
                custom solutions for founders to fuel your early growth. We actively monitor the market landscape and
                leverage our network to connect you with key capital partners, ensuring your project has the runway it
                needs to take off.
              </p>
            </div>

            {/* Service 2 */}
            <div
              className={`service-box bg-[#191919] p-8 rounded-lg flex flex-col items-center text-center h-[550px] max-w-[340px] mx-auto shadow-[0_0_20px_2px_rgba(59,130,246,0.2)] border border-blue-900/20 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
              style={{ animationDelay: "1.4s" }}
            >
              <div className="mb-8 relative">
                <div className="absolute inset-0 w-[250px] h-[250px] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                  <Image src="/cube-helix-8.png" alt="Icon Background" fill className="object-cover" />
                </div>
                <Image
                  src="/service-icon-2.png"
                  alt="Master the Web3 Matrix"
                  width={160}
                  height={160}
                  className="relative z-10 animate-float"
                  style={{ animationDelay: "0.5s" }}
                />
              </div>
              <h3 className="text-xl font-bold mb-4">Master the Web3 Matrix</h3>
              <p className="text-white/70 text-sm">
                Forget guesswork. ABZ Labs harnesses deep data & analytics to identify hidden patterns, track
                competitors, and identify market niches in the Web3 landscape. Our custom strategies provide the
                actionable insights and tactical foresight you need to secure market fit and win.
              </p>
            </div>

            {/* Service 3 */}
            <div
              className={`service-box bg-[#191919] p-8 rounded-lg flex flex-col items-center text-center h-[550px] max-w-[340px] mx-auto shadow-[0_0_20px_2px_rgba(59,130,246,0.2)] border border-blue-900/20 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
              style={{ animationDelay: "1.6s" }}
            >
              <div className="mb-8 relative">
                <div className="absolute inset-0 w-[250px] h-[250px] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                  <Image src="/cube-helix-8.png" alt="Icon Background" fill className="object-cover" />
                </div>
                <Image
                  src="/service-icon-3.png"
                  alt="Forge Your Digital Soul"
                  width={160}
                  height={160}
                  className="relative z-10 animate-float"
                  style={{ animationDelay: "1s" }}
                />
              </div>
              <h3 className="text-xl font-bold mb-4">Forge Your Digital Soul</h3>
              <p className="text-white/70 text-sm">
                Your story is your superpower in a crowded Web3 market. ABZ Labs goes beyond design to forge your
                product's digital soul. Through sharp positioning and compelling packaging, we distill complex
                innovations into clear narratives. Targeted distribution via thought-decentralized channels, reaching
                the builders, users, and investors who will champion your vision.
              </p>
            </div>

            {/* Service 4 */}
            <div
              className={`service-box bg-[#191919] p-8 rounded-lg flex flex-col items-center text-center h-[550px] max-w-[340px] mx-auto shadow-[0_0_20px_2px_rgba(59,130,246,0.2)] border border-blue-900/20 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
              style={{ animationDelay: "1.8s" }}
            >
              <div className="mb-8 relative">
                <div className="absolute inset-0 w-[250px] h-[250px] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                  <Image src="/cube-helix-8.png" alt="Icon Background" fill className="object-cover" />
                </div>
                <Image
                  src="/service-icon-4.png"
                  alt="Ignite Your Growth Engine"
                  width={160}
                  height={160}
                  className="relative z-10 animate-float"
                  style={{ animationDelay: "1.5s" }}
                />
              </div>
              <h3 className="text-xl font-bold mb-4">Ignite Your Growth Engine</h3>
              <p className="text-white/70 text-sm">
                Growth is everything. ABZ Labs operationalizes strategic growth to turn cold adoption into flame. From
                high-impact event & DAO marketing and data-driven user acquisition to expert Web3 community building,
                our integrated approach provides the rocket fuel. Consider us your growth engineers, propelling your
                project into orbit and future-proofing against market shifts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Vision Background */}
        <div className="absolute inset-0 z-0">
          <Image src="/vision-bg.png" alt="Vision Background" fill className="object-cover" />
        </div>

        {/* Blue Overlay */}
        <div className="absolute inset-0 z-[1] bg-blue-900/30"></div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`space-y-6 ${isLoaded ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "2s" }}>
              <h2 className="text-4xl font-bold">Our Vision</h2>
              <p className="text-white/90">
                At ABZ Labs, we are dedicated to identifying, investing in, and accelerating the most promising
                early-stage Web3 protocols and founding teams. Leveraging decades of collective expertise in advising,
                investing, and building within the decentralized ecosystem, we provide strategic capital, hands-on
                venture building support, and unparalleled network access. Our mission is to actively foster robust,
                scalable Web3 ecosystems and drive breakthrough innovation from inception to global impact.
              </p>
              <div className="space-y-2 pt-6">
                <p className="text-2xl italic font-script text-[#a3cfff]">Fueling the best protocols</p>
                <p className="text-2xl italic font-script text-[#a3cfff]">Connecting the best minds</p>
              </div>
            </div>
            <div
              className={`flex justify-center ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
              style={{ animationDelay: "2.2s" }}
            >
              {/* Changed from continuous pulse to hover effect */}
              <div className="transition-transform duration-300 hover:scale-110">
                <Image
                  src="/vault-coins.png"
                  alt="ABZ Labs Vision - Vault with Gold Coins"
                  width={400}
                  height={400}
                  className="relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-6">
        <div
          className={`container mx-auto px-4 flex justify-between items-center ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
          style={{ animationDelay: "2.4s" }}
        >
          <p className="text-white/60 text-sm">Copyright © 2023 ABZ Labs. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link href="#" className="text-white/60 hover:text-white transition btn-hover">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4l11.5 11.5M4 20L15.5 8.5" />
              </svg>
            </Link>
            <Link href="#" className="text-white/60 hover:text-white transition btn-hover">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
