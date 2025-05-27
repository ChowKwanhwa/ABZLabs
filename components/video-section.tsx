import { forwardRef } from "react"

interface VideoSectionProps {
  videoOpacity: number
  videoTransformPhase1: number
}

const VideoSection = forwardRef<HTMLVideoElement, VideoSectionProps>(({ videoOpacity, videoTransformPhase1 }, ref) => {
  if (videoOpacity <= 0) return null

  return (
    <div
      className="fixed top-0 left-0 w-full h-screen bg-black z-5 transition-opacity duration-200"
      style={{
        transform: `translateY(${videoTransformPhase1}px)`,
        opacity: videoOpacity,
      }}
    >
      <div className="absolute inset-0">
        <video ref={ref} className="w-full h-full object-cover" muted loop playsInline>
          <source src="/BG-Video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-6">
        <div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">Innovation in Motion</h2>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
            Experience the future of Web3 technology through our cutting-edge solutions and visionary approach.
          </p>
        </div>
      </div>
    </div>
  )
})

VideoSection.displayName = "VideoSection"

export default VideoSection
