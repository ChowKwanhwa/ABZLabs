"use client"

export default function Footer() {
  return (
    <footer className="bg-[#eaeaea] px-6 py-8 relative z-20">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <p className="text-[#666666] text-sm animate-fade-in-left">Copyright © 2025 ABZ Labs. All rights reserved</p>
        <div className="flex gap-4 animate-fade-in-right">
          <div className="w-8 h-8 bg-[#333333] rounded flex items-center justify-center hover-scale hover-glow cursor-pointer transition-all duration-300">
            <span className="text-white text-xs">X</span>
          </div>
          <div className="w-8 h-8 bg-[#333333] rounded flex items-center justify-center hover-scale hover-glow cursor-pointer transition-all duration-300">
            <span className="text-white text-xs">□</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
