"use client"

import { useEffect, useState, useRef } from "react"
import HeroSection from "./components/hero-section"
import VideoSection from "./components/video-section"
import ServicesSection from "./components/services-section"
import VisionSection from "./components/vision-section"
import Footer from "./components/footer"

export default function Component() {
  const [scrollY, setScrollY] = useState(0)
  const [videoShowTime, setVideoShowTime] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Page load animation
    setIsLoaded(true)

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)

      const windowHeight = window.innerHeight

      // Auto play video when it becomes visible
      if (currentScrollY > windowHeight * 0.3 && videoRef.current) {
        videoRef.current.play().catch(() => {
          // Handle autoplay restrictions
        })
      }

      // Track when video becomes fully visible
      if (currentScrollY >= windowHeight && currentScrollY < windowHeight * 1.2) {
        if (videoShowTime === 0) {
          setVideoShowTime(Date.now())
        }
      }

      // Pause video when it starts fading out
      if (currentScrollY > windowHeight * 1.2 && videoRef.current) {
        videoRef.current.pause()
      }

      // Scroll reveal animations
      const reveals = document.querySelectorAll(".scroll-reveal")
      reveals.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150

        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add("revealed")
        }
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    // Initial scroll check
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [videoShowTime])

  // Use state to track window height properly
  const [windowHeight, setWindowHeight] = useState(800)

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowHeight(window.innerHeight)

      const handleResize = () => {
        setWindowHeight(window.innerHeight)
      }

      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Calculate different scroll phases
  const phase1End = windowHeight // Hero disappears, Video appears
  const phase2Start = windowHeight // Video starts showing
  const phase2End = windowHeight * 1.2 // Video shows for only 20% of screen height (short duration)
  const phase3End = windowHeight * 3 // Services appear

  // Phase 1: Hero Section transform (0 to windowHeight scroll)
  const heroTransform = Math.min(scrollY * 0.8, windowHeight)
  const heroClipPath = Math.min((scrollY / windowHeight) * 100, 100)

  // Phase 1: Video Section slides up (0 to windowHeight scroll)
  const videoTransformPhase1 = Math.max(windowHeight - scrollY * 1.2, 0)

  // Video visibility logic - shows only for a very short scroll range
  const videoOpacity =
    scrollY >= phase1End && scrollY < phase2End
      ? 1 // Video is fully visible only in this short range
      : scrollY < phase1End
        ? Math.min(scrollY / phase1End, 1) // Sliding in
        : 0 // Immediately disappear after phase2End

  // Services appear immediately when video disappears
  const servicesOpacity = scrollY >= phase2End ? 1 : 0
  const servicesTransform = scrollY >= phase2End ? 0 : 50

  return (
    <div className={`relative transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
      {/* Hero Section - Fixed position with upward transform */}
      <HeroSection
        ref={heroRef}
        heroTransform={heroTransform}
        heroClipPath={heroClipPath}
        scrollY={scrollY}
        phase1End={phase1End}
      />

      {/* Video Section - Shows for a very short duration */}
      <VideoSection ref={videoRef} videoOpacity={videoOpacity} videoTransformPhase1={videoTransformPhase1} />

      {/* Our Services - Appears immediately when video disappears */}
      <ServicesSection servicesOpacity={servicesOpacity} servicesTransform={servicesTransform} />

      {/* Spacer to create scroll space for all phases */}
      <div className="h-[300vh]"></div>

      {/* Our Vision - Normal flow after all animations */}
      <VisionSection />

      {/* Footer */}
      <Footer />
    </div>
  )
}
