import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, Sphere, Box } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight, Zap, Rocket } from 'lucide-react';
import gsap from 'gsap';

function FloatingElements() {
  const groupRef = useRef();
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <Box position={[-3, 2, 0]} args={[0.5, 0.5, 0.5]}>
          <meshStandardMaterial color="#6366F1" transparent opacity={0.7} />
        </Box>
      </Float>
      
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.8}>
        <Sphere position={[3, -1, 0]} args={[0.3, 16, 16]}>
          <meshStandardMaterial color="#8B5CF6" transparent opacity={0.6} />
        </Sphere>
      </Float>
      
      <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.6}>
        <Box position={[0, 3, -2]} args={[0.3, 0.3, 0.3]}>
          <meshStandardMaterial color="#00D4FF" transparent opacity={0.8} />
        </Box>
      </Float>
      
      <Float speed={1.2} rotationIntensity={0.6} floatIntensity={0.4}>
        <Sphere position={[-2, -2, 1]} args={[0.2, 12, 12]}>
          <meshStandardMaterial color="#10B981" transparent opacity={0.7} />
        </Sphere>
      </Float>
    </group>
  );
}

function CodeParticles() {
  const particlesRef = useRef();
  const particleCount = 200;
  
  const positions = React.useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 5;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3 + 1] += Math.sin(state.clock.elapsedTime + i) * 0.01;
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#00D4FF"
        size={0.05}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export default function HeroSection() {
  const heroRef = useRef();
  const titleRef = useRef();
  const subtitleRef = useRef();
  const ctaRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(titleRef.current, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )
    .fromTo(subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      "-=0.5"
    )
    .fromTo(ctaRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
      "-=0.3"
    );
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={0.5} />
          <pointLight position={[-10, -10, -10]} intensity={0.3} color="#6366F1" />
          <FloatingElements />
          <CodeParticles />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          {/* Main Headline */}
          <h1 
            ref={titleRef}
            className="text-6xl md:text-8xl font-bold leading-tight"
          >
            <span className="gradient-text">Transform</span>
            <br />
            <span className="text-white">Your Startup</span>
            <br />
            <span className="gradient-text">Vision</span>
          </h1>

          {/* Subtitle */}
          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            The strategic development partner that accelerates ambitious startups from concept to market dominance through 
            <span className="text-primary font-semibold"> intelligent design</span>, 
            <span className="text-primary font-semibold"> precision engineering</span>, and 
            <span className="text-primary font-semibold"> growth-focused management</span>.
          </p>

          {/* Call to Action */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="magnetic-button bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold group"
            >
              <Rocket className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Accelerate Your Vision
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="magnetic-button border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold group"
            >
              <Zap className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              Explore Our Process
            </Button>
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="pt-12"
          >
            <p className="text-sm text-gray-400 mb-6">Trusted by ambitious startups worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="glass-morphism px-6 py-3 rounded-lg">
                <span className="text-primary font-bold text-lg">50+</span>
                <span className="text-gray-300 ml-2">Startups Accelerated</span>
              </div>
              <div className="glass-morphism px-6 py-3 rounded-lg">
                <span className="text-primary font-bold text-lg">$10M+</span>
                <span className="text-gray-300 ml-2">Funding Raised</span>
              </div>
              <div className="glass-morphism px-6 py-3 rounded-lg">
                <span className="text-primary font-bold text-lg">99%</span>
                <span className="text-gray-300 ml-2">Client Satisfaction</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

