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
      <section 
        className="px-6 py-24 max-w-7xl mx-auto min-h-screen flex flex-col transition-all duration-500"
        style={{
          height: servicesTransform < -100 ? '60vh' : '100vh',
          padding: servicesTransform < -100 ? '1rem 1.5rem' : '2rem 1.5rem',
        }}
      >
        <h2 
          className="font-bold text-center text-[#333333] scroll-reveal animate-fade-in-up transition-all duration-500"
          style={{
            fontSize: servicesTransform < -100 ? '1.5rem' : '1.875rem',
            marginBottom: servicesTransform < -100 ? '1rem' : '1.5rem',
          }}
        >
          Our Services
        </h2>

        <div className="grid md:grid-cols-2 gap-8 flex-1">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`bg-white border border-[#e1e1e5] shadow-lg rounded-lg hover-lift scroll-reveal animate-scale-in transition-all duration-500 ${service.delay}`}
              style={{
                padding: servicesTransform < -100 ? '1.5rem' : '2.5rem',
              }}
            >
              <CardContent className="p-0 text-center">
                <div
                  className="mx-auto flex items-center justify-center bg-cover bg-center bg-no-repeat rounded-full shadow-md animate-float icon-bounce transition-all duration-500"
                  style={{
                    width: servicesTransform < -100 ? '4rem' : '8rem',
                    height: servicesTransform < -100 ? '4rem' : '8rem',
                    marginBottom: servicesTransform < -100 ? '1rem' : '1.5rem',
                    backgroundImage: "url('/images/icon-bg.png')",
                    animationDelay: `${index * 0.5}s`,
                  }}
                >
                  <img
                    src={service.icon || "/placeholder.svg"}
                    alt={service.title}
                    className="object-contain transition-all duration-500"
                    style={{
                      width: servicesTransform < -100 ? '2.75rem' : '5.5rem',
                      height: servicesTransform < -100 ? '2.75rem' : '5.5rem',
                    }}
                  />
                </div>
                <h3 
                  className="font-bold text-[#333333] transition-all duration-500" 
                  style={{ 
                    fontSize: servicesTransform < -100 ? '1rem' : '1.5rem',
                    marginBottom: servicesTransform < -100 ? '0.75rem' : '1rem',
                  }}
                >
                  {service.title}
                </h3>
                <p 
                  className="text-[#666666] leading-relaxed transition-all duration-500"
                  style={{ 
                    fontSize: servicesTransform < -100 ? '0.875rem' : '1rem',
                    WebkitLineClamp: servicesTransform < -100 ? 2 : 4,
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
