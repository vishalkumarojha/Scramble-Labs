import { Button } from "./ui/button"
import { ArrowRight, Rocket, Star, Play } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-cyan-50">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,212,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.06),transparent_70%)]"></div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-xl animate-float"></div>
        <div
          className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-40 left-1/4 w-24 h-24 bg-gradient-to-r from-emerald-400/20 to-teal-500/20 rounded-full blur-xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-7xl mx-auto px-6">
        <div className="space-y-10 animate-slide-up">
          {/* Enhanced badge */}
          <div className="inline-flex items-center gap-3 glass-morphism-strong px-6 py-3 rounded-full text-sm font-medium animate-scale-in">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-yellow-500 fill-current" />
              <span className="text-slate-700">Trusted by 50+ Startups Worldwide</span>
            </div>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </div>

          {/* Enhanced main headline */}
          <div className="space-y-4">
            <h1 className="heading-xl">
              <span className="gradient-text">Transform</span>
              <br />
              <span className="text-slate-900">Your Startup</span>
              <br />
              <span className="gradient-text">Vision</span>
            </h1>

            {/* Subtitle with better typography */}
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium">
              The strategic development partner that accelerates ambitious startups from concept to market dominance
              through
              <span className="text-cyan-600 font-semibold"> intelligent design</span>,
              <span className="text-blue-600 font-semibold"> precision engineering</span>, and
              <span className="text-purple-600 font-semibold"> growth-focused management</span>.
            </p>
          </div>

          {/* Enhanced call to action */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="magnetic-button bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 px-10 py-6 text-lg font-semibold group rounded-xl shadow-lg"
            >
              <Rocket className="mr-3 h-6 w-6 group-hover:animate-bounce" />
              Accelerate Your Vision
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="magnetic-button border-2 border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-cyan-400 px-10 py-6 text-lg font-semibold group bg-white/80 backdrop-blur-sm rounded-xl shadow-lg"
            >
              <Play className="mr-3 h-6 w-6 group-hover:animate-pulse" />
              Watch Demo
            </Button>
          </div>

          {/* Enhanced trust indicators */}
          <div className="pt-16">
            <p className="text-sm text-slate-500 mb-8 font-medium">Trusted by ambitious startups worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="enhanced-card px-8 py-4 hover-lift">
                <span className="text-cyan-600 font-bold text-2xl">50+</span>
                <span className="text-slate-600 ml-3 font-medium">Startups Accelerated</span>
              </div>
              <div className="enhanced-card px-8 py-4 hover-lift">
                <span className="text-blue-600 font-bold text-2xl">$10M+</span>
                <span className="text-slate-600 ml-3 font-medium">Funding Raised</span>
              </div>
              <div className="enhanced-card px-8 py-4 hover-lift">
                <span className="text-purple-600 font-bold text-2xl">99%</span>
                <span className="text-slate-600 ml-3 font-medium">Client Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full mt-2 animate-pulse"></div>
          </div>
          <span className="text-xs text-slate-500 font-medium">Scroll to explore</span>
        </div>
      </div>
    </section>
  )
}
