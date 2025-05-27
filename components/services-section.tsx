import { Card, CardContent } from "@/components/ui/card"

interface ServicesSectionProps {
  servicesOpacity: number
  servicesTransform: number
}

export default function ServicesSection({ servicesOpacity, servicesTransform }: ServicesSectionProps) {
  const services = [
    {
      icon: "/images/icons/flower.png",
      title: "Liquidity Management",
      description:
        "Navigate the crucial early funding stages with confidence. ABZ Labs provides strategic investment and robust liquidity management solutions. We help you secure funding, manage our LP contributions and leverage our network to connect you with key capital partners, ensuring your project has the runway it needs to take off.",
      delay: "animation-delay-100",
    },
    {
      icon: "/images/icons/cross.png",
      title: "Master the Web3 Matrix",
      description:
        "Forget guesswork. ABZ Labs harnesses deep data & intelligence to decode market dynamics, map competitive landscapes, and predict the next balanced economy. Our custom strategies provide the analytical blueprint and strategic foresight you need to secure market-fit for success.",
      delay: "animation-delay-200",
    },
    {
      icon: "/images/icons/cube.png",
      title: "Forge Your Digital Soul",
      description:
        "Your story is your superpower in a crowded Web3 landscape. ABZ Labs crafts compelling narratives and produces digital soul. Through sharp positioning and compelling packaging, we distill your vision into resonant value. Our content and targeted distribution cut through decentralized channels, ensuring your message doesn't just reach—it drives adoption.",
      delay: "animation-delay-300",
    },
    {
      icon: "/images/icons/star.png",
      title: "Ignite Your Growth Engine",
      description:
        "Growth is everything. ABZ Labs operationalizes expansion through systematic user acquisition. From high-impact event & KOL marketing and data-driven user acquisition to expert Web3 financial advisory and curated exchange listing, we provide the rocket fuel. Consider us your growth partners, committed to propelling your venture towards escape velocity.",
      delay: "animation-delay-400",
    },
  ]

  return (
    <div
      className="fixed top-0 left-0 w-full min-h-screen bg-white z-4 transition-all duration-300"
      style={{
        opacity: servicesOpacity,
        transform: `translateY(${servicesTransform}px)`,
      }}
    >
      <section className="px-6 py-24 max-w-7xl mx-auto min-h-screen">
        <h2 className="text-4xl font-bold text-center text-[#333333] mb-20 scroll-reveal animate-fade-in-up">
          Our Services
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`p-12 bg-white border border-[#e1e1e5] shadow-lg rounded-lg hover-lift scroll-reveal animate-scale-in ${service.delay}`}
            >
              <CardContent className="p-0 text-center">
                <div
                  className="w-48 h-48 mx-auto mb-8 flex items-center justify-center bg-cover bg-center bg-no-repeat rounded-full shadow-md animate-float icon-bounce"
                  style={{
                    backgroundImage: "url('/images/icon-bg.png')",
                    animationDelay: `${index * 0.5}s`,
                  }}
                >
                  <img
                    src={service.icon || "/placeholder.svg"}
                    alt={service.title}
                    className="w-36 h-36 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#333333] mb-4">{service.title}</h3>
                <p className="text-[#666666] text-sm leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
