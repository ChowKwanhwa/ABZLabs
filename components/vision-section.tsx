"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

interface VisionSectionProps {
  visionTransform: number
}

export default function VisionSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [typewriterText1, setTypewriterText1] = useState("")
  const [typewriterText2, setTypewriterText2] = useState("")
  const sectionRef = useRef<HTMLElement>(null)

  const text1 = "Fueling the best protocols"
  const text2 = "Connecting the best minds"

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible) {
      // Start first typewriter effect
      let i = 0
      const timer1 = setInterval(() => {
        if (i < text1.length) {
          setTypewriterText1(text1.slice(0, i + 1))
          i++
        } else {
          clearInterval(timer1)
          // Start second typewriter effect after a delay
          setTimeout(() => {
            let j = 0
            const timer2 = setInterval(() => {
              if (j < text2.length) {
                setTypewriterText2(text2.slice(0, j + 1))
                j++
              } else {
                clearInterval(timer2)
              }
            }, 100)
          }, 500)
        }
      }, 100)
    }
  }, [isVisible])

  return (
    <section
      ref={sectionRef}
      className="px-6 py-16 bg-cover bg-center bg-no-repeat relative z-20"
      style={{
        backgroundImage: "url('/images/bg.png')",
      }}
    >
      {/* Blue overlay */}
      <div className="absolute inset-0 bg-blue-600/70"></div>
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className={`scroll-reveal ${isVisible ? "revealed" : ""}`}>
            <h2 className="text-4xl font-bold text-white mb-8 animate-fade-in-left">Our Vision</h2>
            <p className="text-white/90 mb-8 leading-relaxed animate-fade-in-left animation-delay-200">
              At ABZ Labs, we are dedicated to identifying, investing in, and accelerating the most promising
              early-stage Web3 protocols and founding teams. Leveraging decades of collective expertise in advising,
              investing, and building within the decentralized ecosystem, we provide strategic capital, hands-on venture
              building support, and unparalleled network access. Our mission is to actively foster robust, scalable Web3
              ecosystems and drive breakthrough innovation from inception to global impact.
            </p>
            <div className="space-y-4 animate-fade-in-left animation-delay-400">
              <p
                className="text-white text-2xl min-h-[2rem]"
                style={{ fontFamily: "'Dancing Script', 'Brush Script MT', cursive", fontWeight: "400" }}
              >
                {typewriterText1}
                {typewriterText1.length < text1.length && <span className="animate-blink">|</span>}
              </p>
              <p
                className="text-white text-2xl ml-16 min-h-[2rem]"
                style={{ fontFamily: "'Dancing Script', 'Brush Script MT', cursive", fontWeight: "400" }}
              >
                {typewriterText2}
                {typewriterText2.length < text2.length && typewriterText1.length === text1.length && (
                  <span className="animate-blink">|</span>
                )}
              </p>
            </div>
          </div>

          <div className={`flex justify-center items-center scroll-reveal ${isVisible ? "revealed" : ""}`}>
            <div className="w-[400px] h-[400px] relative animate-float animation-delay-600">
              <Image
                src="/images/vault.png"
                alt="Vault with Golden Coins"
                width={400}
                height={400}
                className="object-contain hover-scale"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
