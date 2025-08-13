"use client"

import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import { Menu, X, Zap } from "lucide-react"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "glass-morphism-strong backdrop-blur-xl border-b border-white/20 shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Enhanced logo */}
            <div
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:animate-pulse shadow-lg">
                <Zap className="h-7 w-7 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold gradient-text">Scramble Labs</h1>
                <p className="text-xs text-slate-500 font-medium">Where Vision Meets Velocity</p>
              </div>
            </div>

            {/* Enhanced desktop navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-slate-700 hover:text-cyan-600 transition-all font-medium relative group py-2"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 transition-all group-hover:w-full rounded-full"></span>
                </button>
              ))}

              <Button
                onClick={() => scrollToSection("#contact")}
                className="magnetic-button bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 font-semibold px-6 py-2 rounded-xl shadow-lg"
              >
                Get Started
              </Button>
            </div>

            {/* Enhanced mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-slate-700 hover:text-cyan-600 transition-colors rounded-lg hover:bg-slate-100"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Enhanced mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass-morphism-strong border-t border-white/20 animate-slide-up">
            <div className="px-6 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-slate-700 hover:text-cyan-600 transition-colors font-medium py-3 px-4 rounded-lg hover:bg-slate-50"
                >
                  {item.name}
                </button>
              ))}

              <div className="pt-4">
                <Button
                  onClick={() => scrollToSection("#contact")}
                  className="w-full magnetic-button bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 font-semibold py-3 rounded-xl shadow-lg"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
