"use client"

import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="pt-6 flex-shrink-0 animate-fade-in-up">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-between bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-sm hover-lift">
          <div className="flex items-center gap-3 animate-scale-in">
            <img src="/images/logo.png" alt="ABZ Labs" className="h-8 w-auto hover-scale" />
          </div>

          <nav className="hidden md:flex items-center gap-8 animate-fade-in-up animation-delay-200">
            <a href="#" className="text-[#666666] hover:text-[#333333] transition-all duration-300 hover:scale-105">
              About
            </a>
            <a href="#" className="text-[#666666] hover:text-[#333333] transition-all duration-300 hover:scale-105">
              Services
            </a>
            <a href="#" className="text-[#666666] hover:text-[#333333] transition-all duration-300 hover:scale-105">
              Vision
            </a>
            <a href="#" className="text-[#666666] hover:text-[#333333] transition-all duration-300 hover:scale-105">
              Deck
            </a>
            <a href="#" className="text-[#666666] hover:text-[#333333] transition-all duration-300 hover:scale-105">
              Contact
            </a>
          </nav>

          <div className="w-10 h-10 bg-[#3632ff] rounded-full flex items-center justify-center animate-glow hover-scale cursor-pointer animate-scale-in animation-delay-300">
            <span className="text-white font-bold">B</span>
          </div>
        </div>
      </div>
    </header>
  )
}
