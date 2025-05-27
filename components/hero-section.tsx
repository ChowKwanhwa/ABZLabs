import { forwardRef } from "react"
import { Button } from "@/components/ui/button"
import Header from "./header"

interface HeroSectionProps {
  heroTransform: number
  heroClipPath: number
  scrollY: number
  phase1End: number
}

const HeroSection = forwardRef<HTMLDivElement, HeroSectionProps>(
  ({ heroTransform, heroClipPath, scrollY, phase1End }, ref) => {
    return (
      <div
        ref={ref}
        className="fixed top-0 left-0 w-full h-screen bg-cover bg-center bg-no-repeat flex flex-col z-10"
        style={{
          backgroundImage: "url('/images/hero-bg.png')",
          transform: `translateY(-${heroTransform}px)`,
          clipPath: `inset(0 0 ${heroClipPath}% 0)`,
          opacity: scrollY > phase1End ? 0 : 1,
        }}
      >
        <Header />

        {/* Hero Content */}
        <section className="flex-1 px-6 py-8 max-w-7xl mx-auto flex flex-col justify-center">
          <div className="grid lg:grid-cols-2 gap-8 items-center w-full mb-8">
            <div>
              <h1 className="text-7xl lg:text-8xl font-bold text-[#333333] mb-4 flex items-center animate-fade-in-left">
                <span>{"}"} ABZ Labs</span>
                <span className="animate-pulse ml-2 animate-blink">|</span>
              </h1>
              <h2 className="text-4xl lg:text-5xl font-semibold text-[#666666] mb-6 leading-tight animate-fade-in-left animation-delay-200">
                Fueling Crypto Startups
                <br />
                to Reach New Heights
              </h2>
              <p className="text-[#666666] mb-6 max-w-md text-base lg:text-lg animate-fade-in-left animation-delay-400">
                ABZ Labs is a cutting-edge Web3 incubator dedicated to empowering visionary founders and exceptional
                crypto startups.
              </p>
            </div>

            <div className="text-[#666666] space-y-4 mt-16 lg:mt-20 animate-fade-in-right animation-delay-300">
              <p className="text-base lg:text-lg">
                Our mission is to accelerate the growth of Web3 innovations by providing tailored support, resources,
                and a collaborative ecosystem. At ABZ Labs, we believe in the transformative power of decentralization
                and technology to shape the future of Web3.
              </p>
            </div>
          </div>

          <div className="text-center animate-scale-in animation-delay-600">
            <Button className="bg-[#333333] hover:bg-[#191919] text-white px-16 py-6 rounded-lg text-xl font-semibold btn-pulse hover-glow transition-all duration-300">
              GET IN TOUCH
            </Button>
          </div>
        </section>

        {/* Logo Marquee */}
        <div className="flex-shrink-0 px-6 pb-8 animate-fade-in-up animation-delay-800">
          <div className="max-w-7xl mx-auto">
            <p className="text-center text-[#666666] mb-6 text-sm">Trusted by the world's most innovative teams</p>
            <div className="relative overflow-hidden">
              <div className="flex animate-marquee whitespace-nowrap">
                {/* First set of logos */}
                <div className="flex items-center gap-8 lg:gap-12 opacity-70 mx-8">
                  <img src="/images/logos/ton.png" alt="TON" className="h-8 w-auto flex-shrink-0 hover-scale" />
                  <img src="/images/logos/circle.png" alt="Circle" className="h-8 w-auto flex-shrink-0 hover-scale" />
                  <img src="/images/logos/binance.png" alt="Binance" className="h-8 w-auto flex-shrink-0 hover-scale" />
                  <img src="/images/logos/jump.png" alt="Jump" className="h-8 w-auto flex-shrink-0 hover-scale" />
                  <img
                    src="/images/logos/magic-eden.png"
                    alt="Magic Eden"
                    className="h-8 w-auto flex-shrink-0 hover-scale"
                  />
                  <img src="/images/logos/meta.png" alt="Meta" className="h-8 w-auto flex-shrink-0 hover-scale" />
                  <img src="/images/logos/stripe.png" alt="Stripe" className="h-8 w-auto flex-shrink-0 hover-scale" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
)

HeroSection.displayName = "HeroSection"

export default HeroSection
