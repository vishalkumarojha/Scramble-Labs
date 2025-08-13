import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
// import ParticleBackground from './components/ParticleBackground';
import ScrollProgress from './components/ScrollProgress';
import './App.css';

function App() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e) => {
      const href = e.target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Scroll Progress Indicator */}
      <ScrollProgress />
      
      {/* Particle Background
      <ParticleBackground /> */}
      
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
        
        {/* About Section */}
        <section id="about" className="py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8">
                <span className="text-white">Why Choose</span>
                <br />
                <span className="gradient-text">Scramble Labs?</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
                {[
                  {
                    title: "Startup DNA",
                    description: "We understand the unique challenges, constraints, and opportunities that define the startup journey.",
                    icon: "🧬"
                  },
                  {
                    title: "Velocity Without Compromise",
                    description: "Rapid execution doesn't mean cutting corners. Our proven frameworks ensure speed without sacrificing quality.",
                    icon: "⚡"
                  },
                  {
                    title: "Strategic Partnership",
                    description: "We're not just a service provider - we're your technical co-founder and growth catalyst.",
                    icon: "🤝"
                  },
                  {
                    title: "Future-Proof Solutions",
                    description: "Every solution we build is designed to scale with your success, from MVP to market leader.",
                    icon: "🚀"
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -10 }}
                    className="glass-morphism p-6 rounded-lg border border-primary/20 hover:border-primary/40 transition-all"
                  >
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Process Section */}
        <section id="process" className="py-20 px-6 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8">
                <span className="text-white">Our</span>
                <br />
                <span className="gradient-text">Proven Process</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A battle-tested methodology that transforms startup visions into market-ready products
              </p>
            </motion.div>
            
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
                    "Project roadmap and milestone definition"
                  ]
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
                    "Performance monitoring and optimization"
                  ]
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
                    "Continuous improvement planning"
                  ]
                }
              ].map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.3, duration: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="glass-morphism p-8 rounded-lg border border-primary/20 hover:border-primary/40 transition-all"
                >
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {index + 1}
                    </div>
                    <span className="text-primary font-semibold text-sm">{phase.phase}</span>
                    <h3 className="text-2xl font-bold text-white mt-2">{phase.title}</h3>
                    <p className="text-primary font-medium">{phase.duration}</p>
                  </div>
                  
                  <p className="text-gray-300 mb-6 text-center">{phase.description}</p>
                  
                  <ul className="space-y-2">
                    {phase.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-gray-300">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
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
  );
}

export default App;

