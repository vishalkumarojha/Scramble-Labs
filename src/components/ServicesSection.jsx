import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Code, Palette, TrendingUp, Zap, Rocket, Target } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
      "Performance Optimization & Scaling"
    ],
    color: "from-blue-500 to-cyan-500",
    delay: 0
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
      "Design System Development"
    ],
    color: "from-purple-500 to-pink-500",
    delay: 0.2
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
      "Investor-Ready Documentation"
    ],
    color: "from-green-500 to-emerald-500",
    delay: 0.4
  }
];

function ServiceCard({ service, index }) {
  const cardRef = useRef();
  const isInView = useInView(cardRef, { once: true, threshold: 0.3 });

  useEffect(() => {
    if (isInView && cardRef.current) {
      gsap.fromTo(cardRef.current,
        { 
          opacity: 0, 
          y: 50,
          rotationX: 15,
          scale: 0.9
        },
        { 
          opacity: 1, 
          y: 0,
          rotationX: 0,
          scale: 1,
          duration: 0.8,
          delay: service.delay,
          ease: "power3.out"
        }
      );
    }
  }, [isInView, service.delay]);

  const IconComponent = service.icon;

  return (
    <motion.div
      ref={cardRef}
      whileHover={{ 
        scale: 1.05,
        rotateY: 5,
        z: 50
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="perspective-1000"
    >
      <Card className="glass-morphism border-primary/20 hover:border-primary/40 transition-all duration-300 h-full group">
        <CardHeader className="text-center pb-4">
          <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:animate-pulse-glow`}>
            <IconComponent className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold gradient-text">
            {service.title}
          </CardTitle>
          <CardDescription className="text-gray-300 text-lg">
            {service.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {service.features.map((feature, featureIndex) => (
              <motion.li
                key={featureIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ 
                  delay: service.delay + (featureIndex * 0.1),
                  duration: 0.5
                }}
                className="flex items-center text-gray-300 group-hover:text-white transition-colors"
              >
                <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse"></div>
                {feature}
              </motion.li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function ProcessVisualization() {
  const processRef = useRef();
  const isInView = useInView(processRef, { once: true, threshold: 0.3 });

  const processSteps = [
    { icon: Target, title: "Vision Alignment", duration: "Week 1" },
    { icon: Code, title: "Rapid Development", duration: "Weeks 2-8" },
    { icon: Rocket, title: "Market Launch", duration: "Weeks 9-12" }
  ];

  return (
    <div ref={processRef} className="mt-20">
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold text-center mb-12 gradient-text"
      >
        The Scramble Labs Velocity Framework
      </motion.h3>
      
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {processSteps.map((step, index) => {
          const IconComponent = step.icon;
          return (
            <React.Fragment key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ 
                  delay: index * 0.3,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 200
                }}
                className="text-center group"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-purple-500 flex items-center justify-center group-hover:animate-pulse-glow">
                  <IconComponent className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">{step.title}</h4>
                <p className="text-primary font-medium">{step.duration}</p>
              </motion.div>
              
              {index < processSteps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
                  transition={{ delay: (index + 1) * 0.3, duration: 0.8 }}
                  className="hidden md:block w-16 h-1 bg-gradient-to-r from-primary to-purple-500 rounded-full"
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const sectionRef = useRef();
  const titleRef = useRef();
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  useEffect(() => {
    if (isInView && titleRef.current) {
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }
  }, [isInView]);

  return (
    <section ref={sectionRef} className="py-20 px-6 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div ref={titleRef} className="text-center mb-16">
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
          >
            <span className="gradient-text">Complete Startup</span>
            <br />
            <span className="text-white">Acceleration Suite</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Every strategy, every line of code, every design decision optimized for startup velocity and scale
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        <ProcessVisualization />

        {/* Technology Stack Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold mb-8 gradient-text">Powered by Tomorrow's Technology</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {['React', 'Next.js', 'Node.js', 'Python', 'AWS', 'TypeScript'].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.2 + (index * 0.1), duration: 0.5 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="glass-morphism px-6 py-3 rounded-full border border-primary/30 hover:border-primary/60 transition-all"
              >
                <span className="text-primary font-semibold">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

