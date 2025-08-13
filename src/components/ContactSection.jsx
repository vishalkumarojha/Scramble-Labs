"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Mail, Phone, MapPin, Send, Rocket, Calendar, Clock, Users, ArrowRight } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@scramblelabs.com",
      description: "Get in touch for project inquiries",
      color: "from-cyan-500 to-blue-600",
      bgColor: "from-cyan-50 to-blue-50",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) SCRAMBLE",
      description: "Call us for immediate assistance",
      color: "from-blue-500 to-purple-600",
      bgColor: "from-blue-50 to-purple-50",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "San Francisco, CA",
      description: "Innovation District",
      color: "from-purple-500 to-pink-600",
      bgColor: "from-purple-50 to-pink-50",
    },
  ]

  const quickActions = [
    {
      icon: Calendar,
      title: "Schedule Strategy Call",
      description: "Book a free 30-minute consultation",
      color: "from-emerald-500 to-teal-600",
      bgColor: "from-emerald-50 to-teal-50",
    },
    {
      icon: Rocket,
      title: "Download Startup Guide",
      description: "Free guide to accelerate your startup",
      color: "from-orange-500 to-red-600",
      bgColor: "from-orange-50 to-red-50",
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-cyan-100/30 to-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-r from-purple-100/30 to-pink-100/30 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,212,255,0.03),transparent_70%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="heading-lg mb-6">
            <span className="text-slate-900">Ready to</span>
            <br />
            <span className="gradient-text">Transform Your Vision?</span>
          </h2>
          <p className="text-enhanced max-w-3xl mx-auto">
            Let's discuss how we can accelerate your startup's journey from concept to market dominance. Get started
            with a free consultation today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Enhanced Contact Form */}
          <div className="animate-slide-up">
            <Card className="enhanced-card overflow-hidden">
              <CardHeader className="bg-gradient-to-br from-cyan-50 to-blue-50 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
                  <CardTitle className="text-3xl font-bold text-slate-900 flex items-center mb-2">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                      <Rocket className="h-6 w-6 text-white" />
                    </div>
                    Start Your Transformation
                  </CardTitle>
                  <p className="text-slate-600 text-lg">Tell us about your vision and let's make it reality</p>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="h-12 border-slate-200 focus:border-cyan-400 focus:ring-cyan-400/20 rounded-xl"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="h-12 border-slate-200 focus:border-cyan-400 focus:ring-cyan-400/20 rounded-xl"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-2">
                      Company / Startup
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="h-12 border-slate-200 focus:border-cyan-400 focus:ring-cyan-400/20 rounded-xl"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                      Project Details *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="border-slate-200 focus:border-cyan-400 focus:ring-cyan-400/20 rounded-xl resize-none"
                      placeholder="Tell us about your vision, goals, and how we can help accelerate your startup..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full magnetic-button bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 py-4 text-lg font-semibold group rounded-xl shadow-lg"
                  >
                    <Send className="mr-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    Send Message
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Contact Information */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <div
                    key={index}
                    className="enhanced-card overflow-hidden hover-lift"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`bg-gradient-to-br ${info.bgColor} p-6 relative`}>
                      <div className="absolute top-0 right-0 w-24 h-24 bg-white/20 rounded-full -translate-y-12 translate-x-12"></div>
                      <div className="flex items-start space-x-4 relative z-10">
                        <div
                          className={`w-14 h-14 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center shadow-lg`}
                        >
                          <IconComponent className="h-7 w-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-slate-900 mb-1">{info.title}</h3>
                          <p className="text-lg font-semibold text-cyan-600 mb-1">{info.value}</p>
                          <p className="text-slate-600">{info.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Quick Actions */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">Quick Actions</h3>

              {quickActions.map((action, index) => {
                const IconComponent = action.icon
                return (
                  <div key={index} className="enhanced-card overflow-hidden hover-lift cursor-pointer group">
                    <div className={`bg-gradient-to-br ${action.bgColor} p-6 relative`}>
                      <div className="absolute top-0 right-0 w-24 h-24 bg-white/20 rounded-full -translate-y-12 translate-x-12"></div>
                      <div className="flex items-center space-x-4 relative z-10">
                        <div
                          className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-xl flex items-center justify-center shadow-lg group-hover:animate-pulse`}
                        >
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-cyan-600 transition-colors">
                            {action.title}
                          </h4>
                          <p className="text-slate-600">{action.description}</p>
                        </div>
                        <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-cyan-600 group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Response Time Guarantee */}
            <div className="enhanced-card overflow-hidden">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/20 rounded-full -translate-y-12 translate-x-12"></div>
                <div className="flex items-start space-x-4 relative z-10">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <Clock className="h-5 w-5 text-green-600" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">Fast Response Guarantee</h4>
                <p className="text-slate-600 leading-relaxed">
                  We respond to all inquiries within <span className="text-green-600 font-semibold">24 hours</span>. For
                  urgent projects, expect a response within{" "}
                  <span className="text-green-600 font-semibold">2 hours</span>
                  during business hours.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="text-center mt-24 pt-16 border-t border-slate-200 animate-slide-up">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Ready to join the next generation of market leaders?
            </h3>
            <p className="text-enhanced mb-8">
              Every day you wait is a day your competitors get ahead. Let's transform your vision into reality and
              dominate your market together.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="magnetic-button bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 px-10 py-4 text-lg font-semibold group rounded-xl shadow-lg"
              >
                <Rocket className="mr-3 h-6 w-6 group-hover:animate-bounce" />
                Start Your Transformation Today
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="magnetic-button border-2 border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-cyan-400 px-10 py-4 text-lg font-semibold group bg-white/80 backdrop-blur-sm rounded-xl shadow-lg"
              >
                <Users className="mr-3 h-6 w-6 group-hover:animate-pulse" />
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
