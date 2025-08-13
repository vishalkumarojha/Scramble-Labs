import React from "react"
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card"
import { Code, Palette, TrendingUp, Rocket, Target, CheckCircle, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Strategic Development",
    description: "Transform your vision into a scalable, market-ready digital product",
    features: [
      "MVP Development & Rapid Prototyping",
      "Full-Stack Web Applications",
      "Mobile-First Responsive Design",
      "API Development & Integration",
      "Performance Optimization & Scaling",
    ],
    color: "from-cyan-500 to-blue-600",
    accent: "cyan",
    bgColor: "from-cyan-50 to-blue-50",
  },
  {
    icon: Palette,
    title: "Intelligent Design",
    description: "Create experiences that convert visitors into customers and customers into advocates",
    features: [
      "User Experience (UX) Strategy",
      "User Interface (UI) Design",
      "Brand Identity & Visual Systems",
      "Conversion Rate Optimization",
      "Design System Development",
    ],
    color: "from-purple-500 to-pink-600",
    accent: "purple",
    bgColor: "from-purple-50 to-pink-50",
  },
  {
    icon: TrendingUp,
    title: "Growth Management",
    description: "Strategic guidance that accelerates your path to market leadership",
    features: [
      "Product Strategy & Roadmapping",
      "Technical Architecture Planning",
      "Growth Hacking & Analytics",
      "Team Building & Technical Hiring",
      "Investor-Ready Documentation",
    ],
    color: "from-emerald-500 to-teal-600",
    accent: "emerald",
    bgColor: "from-emerald-50 to-teal-50",
  },
]

function ServiceCard({ service, index }) {
  const IconComponent = service.icon
  const accentColors = {
    cyan: "text-cyan-600",
    purple: "text-purple-600",
    emerald: "text-emerald-600",
  }

  return (
    <div className="h-full animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
      <Card className="enhanced-card h-full group overflow-hidden">
        {/* Card header with gradient background */}
        <div className={`bg-gradient-to-br ${service.bgColor} p-6 relative overflow-hidden`}>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="relative z-10">
            <div
              className={`w-16 h-16 mb-4 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:animate-pulse shadow-lg`}
            >
              <IconComponent className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold text-slate-900 mb-2">{service.title}</CardTitle>
            <CardDescription className="text-slate-600 text-lg leading-relaxed">{service.description}</CardDescription>
          </div>
        </div>

        <CardContent className="p-6">
          <ul className="space-y-4">
            {service.features.map((feature, featureIndex) => (
              <li
                key={featureIndex}
                className="flex items-start text-slate-600 group-hover:text-slate-800 transition-colors"
              >
                <CheckCircle className={`h-5 w-5 mr-3 mt-0.5 ${accentColors[service.accent]} flex-shrink-0`} />
                <span className="font-medium">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 pt-6 border-t border-slate-100">
            <button
              className={`flex items-center text-sm font-semibold ${accentColors[service.accent]} hover:gap-3 transition-all group`}
            >
              Learn More
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function ProcessVisualization() {
  const processSteps = [
    {
      icon: Target,
      title: "Vision Alignment",
      duration: "Week 1",
      color: "from-cyan-400 to-blue-500",
      description: "Deep dive into your vision and requirements",
    },
    {
      icon: Code,
      title: "Rapid Development",
      duration: "Weeks 2-8",
      color: "from-blue-500 to-purple-500",
      description: "Agile development with weekly reviews",
    },
    {
      icon: Rocket,
      title: "Market Launch",
      duration: "Weeks 9-12",
      color: "from-purple-500 to-pink-500",
      description: "Strategic launch and optimization",
    },
  ]

  return (
    <div className="mt-24">
      <div className="text-center mb-16">
        <h3 className="heading-lg gradient-text mb-4">The Scramble Labs Velocity Framework</h3>
        <p className="text-enhanced max-w-2xl mx-auto">
          Our proven 12-week methodology that transforms startup visions into market-ready products
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-12">
        {processSteps.map((step, index) => {
          const IconComponent = step.icon
          return (
            <React.Fragment key={index}>
              <div
                className="text-center group max-w-xs animate-scale-in"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div
                  className={`w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center group-hover:animate-pulse shadow-xl`}
                >
                  <IconComponent className="h-12 w-12 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-2">{step.title}</h4>
                <p className="text-cyan-600 font-semibold mb-3">{step.duration}</p>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </div>

              {index < processSteps.length - 1 && (
                <div className="hidden lg:block">
                  <ArrowRight className="h-8 w-8 text-slate-300" />
                </div>
              )}
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}

export default function ServicesSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-cyan-100/50 to-blue-100/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-r from-purple-100/50 to-pink-100/50 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="heading-lg mb-6">
            <span className="gradient-text">Complete Startup</span>
            <br />
            <span className="text-slate-900">Acceleration Suite</span>
          </h2>
          <p className="text-enhanced max-w-3xl mx-auto">
            Every strategy, every line of code, every design decision optimized for startup velocity and scale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        <ProcessVisualization />

        {/* Enhanced technology stack */}
        <div className="mt-24 text-center">
          <h3 className="text-3xl font-bold mb-4 gradient-text">Powered by Tomorrow's Technology</h3>
          <p className="text-enhanced mb-12 max-w-2xl mx-auto">
            We use cutting-edge technologies to build scalable, future-proof solutions
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "React", color: "from-blue-500 to-cyan-500" },
              { name: "Next.js", color: "from-slate-700 to-slate-900" },
              { name: "Node.js", color: "from-green-500 to-emerald-500" },
              { name: "Python", color: "from-yellow-500 to-orange-500" },
              { name: "AWS", color: "from-orange-500 to-red-500" },
              { name: "TypeScript", color: "from-blue-600 to-indigo-600" },
            ].map((tech, index) => (
              <div
                key={tech.name}
                className="enhanced-card px-6 py-3 hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className={`font-semibold bg-gradient-to-r ${tech.color} bg-clip-text text-transparent`}>
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
