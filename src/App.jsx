"use client"

import { useEffect } from "react"
import Navigation from "./components/Navigation"
import HeroSection from "./components/HeroSection"
import ServicesSection from "./components/ServicesSection"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"
import ScrollProgress from "./components/ScrollProgress"
import "./App.css"

function App() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e) => {
      const href = e.target.getAttribute("href")
      if (href && href.startsWith("#")) {
        e.preventDefault()
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)
    return () => document.removeEventListener("click", handleAnchorClick)
  }, [])

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      {/* Enhanced scroll progress indicator */}
      <ScrollProgress />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="hero">
          <HeroSection />
        </section>

        {/* Services Section */}
        <section id="services">
          <ServicesSection />
        </section>

        {/* Enhanced About Section */}
        <section
          id="about"
          className="section-padding bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden"
        >
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-r from-emerald-100/50 to-teal-100/50 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r from-indigo-100/50 to-purple-100/50 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
            <div className="animate-slide-up">
              <h2 className="heading-lg mb-6">
                <span className="text-slate-900">Why Choose</span>
                <br />
                <span className="gradient-text">Scramble Labs?</span>
              </h2>
              <p className="text-enhanced max-w-3xl mx-auto mb-16">
                We're not just another development agency. We're your strategic partner in building the future.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    title: "Startup DNA",
                    description:
                      "We understand the unique challenges, constraints, and opportunities that define the startup journey.",
                    icon: "🧬",
                    color: "from-cyan-500 to-blue-600",
                  },
                  {
                    title: "Velocity Without Compromise",
                    description:
                      "Rapid execution doesn't mean cutting corners. Our proven frameworks ensure speed without sacrificing quality.",
                    icon: "⚡",
                    color: "from-blue-500 to-purple-600",
                  },
                  {
                    title: "Strategic Partnership",
                    description:
                      "We're not just a service provider - we're your technical co-founder and growth catalyst.",
                    icon: "🤝",
                    color: "from-purple-500 to-pink-600",
                  },
                  {
                    title: "Future-Proof Solutions",
                    description:
                      "Every solution we build is designed to scale with your success, from MVP to market leader.",
                    icon: "🚀",
                    color: "from-emerald-500 to-teal-600",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="enhanced-card p-8 text-center animate-scale-in hover-lift"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="text-5xl mb-6">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                    <div className={`w-full h-1 bg-gradient-to-r ${feature.color} rounded-full mt-6`}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Process Section */}
        <section id="process" className="section-padding bg-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-rose-100/50 to-pink-100/50 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-violet-100/50 to-purple-100/50 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20 animate-slide-up">
              <h2 className="heading-lg mb-6">
                <span className="text-slate-900">Our</span>
                <br />
                <span className="gradient-text">Proven Process</span>
              </h2>
              <p className="text-enhanced max-w-3xl mx-auto">
                A battle-tested methodology that transforms startup visions into market-ready products
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  phase: "Phase 1",
                  title: "Vision Alignment",
                  duration: "Week 1",
                  description: "Deep dive into your vision, market, and technical requirements",
                  features: [
                    "Comprehensive discovery sessions",
                    "Market analysis and competitive research",
                    "Technical architecture planning",
                    "Project roadmap and milestone definition",
                  ],
                  color: "from-cyan-400 to-blue-500",
                  bgColor: "from-cyan-50 to-blue-50",
                },
                {
                  phase: "Phase 2",
                  title: "Rapid Development",
                  duration: "Weeks 2-8",
                  description: "Agile development with weekly progress reviews and continuous optimization",
                  features: [
                    "Sprint-based development cycles",
                    "Real-time collaboration and feedback",
                    "Continuous testing and quality assurance",
                    "Performance monitoring and optimization",
                  ],
                  color: "from-blue-500 to-purple-500",
                  bgColor: "from-blue-50 to-purple-50",
                },
                {
                  phase: "Phase 3",
                  title: "Market Launch",
                  duration: "Weeks 9-12",
                  description: "Strategic launch preparation and post-launch optimization",
                  features: [
                    "Launch strategy development",
                    "Performance monitoring setup",
                    "User feedback integration",
                    "Continuous improvement planning",
                  ],
                  color: "from-purple-500 to-pink-500",
                  bgColor: "from-purple-50 to-pink-50",
                },
              ].map((phase, index) => (
                <div
                  key={index}
                  className="enhanced-card overflow-hidden animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`bg-gradient-to-br ${phase.bgColor} p-6 relative`}>
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/20 rounded-full -translate-y-12 translate-x-12"></div>
                    <div className="relative z-10">
                      <div
                        className={`w-16 h-16 mb-4 bg-gradient-to-r ${phase.color} rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg`}
                      >
                        {index + 1}
                      </div>
                      <span className="text-cyan-600 font-semibold text-sm">{phase.phase}</span>
                      <h3 className="text-2xl font-bold text-slate-900 mt-2 mb-2">{phase.title}</h3>
                      <p className="text-purple-600 font-semibold">{phase.duration}</p>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-slate-600 mb-6 leading-relaxed">{phase.description}</p>

                    <ul className="space-y-3">
                      {phase.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-slate-600">
                          <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span className="font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <ContactSection />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
