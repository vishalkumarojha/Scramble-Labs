"use client"
import { Zap, Mail, Phone, MapPin, Twitter, Linkedin, Github, ArrowUp, Award, Users, Rocket } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Services: [
      "Strategic Development",
      "Intelligent Design",
      "Growth Management",
      "MVP Development",
      "Technical Consulting",
    ],
    Company: ["About Us", "Our Process", "Case Studies", "Careers", "Blog"],
    Resources: ["Startup Guide", "Technical Documentation", "API Reference", "Support Center", "Community"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Service Agreement", "GDPR Compliance"],
  }

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-blue-500" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-blue-600" },
    { icon: Github, href: "#", label: "GitHub", color: "hover:bg-slate-800" },
  ]

  const stats = [
    { icon: Users, value: "50+", label: "Startups Accelerated" },
    { icon: Award, value: "$10M+", label: "Funding Raised" },
    { icon: Rocket, value: "99%", label: "Client Satisfaction" },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-slate-50 to-white border-t border-slate-200">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-100/20 to-blue-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-100/20 to-pink-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Stats Section */}
        <div className="py-16 border-b border-slate-200">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold gradient-text mb-4">Trusted by Ambitious Startups</h3>
            <p className="text-enhanced max-w-2xl mx-auto">
              Join the growing community of successful startups that chose Scramble Labs as their development partner
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div
                  key={index}
                  className="enhanced-card p-8 text-center hover-lift animate-scale-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
            {/* Enhanced Brand Section */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold gradient-text">Scramble Labs</h3>
                    <p className="text-sm text-slate-500 font-medium">Where Vision Meets Velocity</p>
                  </div>
                </div>

                <p className="text-slate-600 leading-relaxed text-lg">
                  The strategic development partner that accelerates ambitious startups from concept to market dominance
                  through intelligent design, precision engineering, and growth-focused management.
                </p>

                {/* Enhanced Contact Info */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-slate-600 hover:text-cyan-600 transition-colors cursor-pointer group">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-lg flex items-center justify-center group-hover:from-cyan-500 group-hover:to-blue-600 transition-all">
                      <Mail className="h-5 w-5 text-cyan-600 group-hover:text-white" />
                    </div>
                    <span className="font-medium">hello@scramblelabs.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-600 hover:text-cyan-600 transition-colors cursor-pointer group">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center group-hover:from-blue-500 group-hover:to-purple-600 transition-all">
                      <Phone className="h-5 w-5 text-blue-600 group-hover:text-white" />
                    </div>
                    <span className="font-medium">+1 (555) SCRAMBLE</span>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-600 hover:text-cyan-600 transition-colors cursor-pointer group">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg flex items-center justify-center group-hover:from-purple-500 group-hover:to-pink-600 transition-all">
                      <MapPin className="h-5 w-5 text-purple-600 group-hover:text-white" />
                    </div>
                    <span className="font-medium">San Francisco, CA</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Footer Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-lg font-bold text-slate-900 mb-6">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="text-slate-600 hover:text-cyan-600 transition-colors font-medium hover:translate-x-1 transform inline-block"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Enhanced Newsletter Signup */}
          <div className="enhanced-card overflow-hidden mb-16">
            <div className="bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50 p-8 relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>

              <div className="text-center max-w-3xl mx-auto relative z-10">
                <h3 className="text-3xl font-bold gradient-text mb-4">Stay Ahead of the Curve</h3>
                <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                  Get exclusive insights, startup tips, and the latest trends in web development delivered to your
                  inbox. Join 1,000+ startup founders who trust our insights.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-4 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/20 shadow-sm"
                  />
                  <button className="magnetic-button px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-400 hover:to-blue-500 shadow-lg">
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-slate-500 mt-4">
                  No spam, unsubscribe at any time. We respect your privacy.
                </p>
              </div>
            </div>
          </div>

          {/* Enhanced Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-200">
            <div className="text-slate-600 text-sm mb-6 md:mb-0 text-center md:text-left">
              <p className="font-medium">© {currentYear} Scramble Labs. All rights reserved.</p>
              <p className="mt-1">Built with passion for innovation. Designed in San Francisco.</p>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-slate-500 font-medium mr-2">Follow us:</span>
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600 hover:text-white transition-all hover:scale-110 hover:shadow-lg ${social.color}`}
                    aria-label={social.label}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Enhanced Back to Top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white shadow-xl hover:shadow-2xl transition-all z-50 magnetic-button group"
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6 group-hover:animate-bounce" />
        </button>
      </div>
    </footer>
  )
}
