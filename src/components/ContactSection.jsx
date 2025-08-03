import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Mail, Phone, MapPin, Send, Rocket, Calendar } from 'lucide-react';

export default function ContactSection() {
  const sectionRef = useRef();
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@scramblelabs.com",
      description: "Get in touch for project inquiries"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) SCRAMBLE",
      description: "Call us for immediate assistance"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "San Francisco, CA",
      description: "Innovation District"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-6 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Ready to</span>
            <br />
            <span className="gradient-text">Transform Your Vision?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's discuss how we can accelerate your startup's journey from concept to market dominance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Card className="glass-morphism border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold gradient-text flex items-center">
                  <Rocket className="mr-3 h-6 w-6" />
                  Start Your Transformation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-background/50 border-primary/30 focus:border-primary text-white"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-background/50 border-primary/30 focus:border-primary text-white"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company / Startup
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="bg-background/50 border-primary/30 focus:border-primary text-white"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Project Details *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="bg-background/50 border-primary/30 focus:border-primary text-white resize-none"
                      placeholder="Tell us about your vision, goals, and how we can help accelerate your startup..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full magnetic-button bg-primary text-primary-foreground hover:bg-primary/90 py-3 text-lg font-semibold group"
                  >
                    <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7 + (index * 0.1), duration: 0.6 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="glass-morphism p-6 rounded-lg border border-primary/20 hover:border-primary/40 transition-all cursor-pointer"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-purple-500 rounded-lg flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">{info.title}</h3>
                        <p className="text-primary font-medium mb-1">{info.value}</p>
                        <p className="text-gray-400 text-sm">{info.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1, duration: 0.8 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
              
              <Button 
                variant="outline" 
                className="w-full magnetic-button border-primary text-primary hover:bg-primary hover:text-primary-foreground py-3 group justify-start"
              >
                <Calendar className="mr-3 h-5 w-5 group-hover:animate-pulse" />
                Schedule Strategy Call
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full magnetic-button border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white py-3 group justify-start"
              >
                <Mail className="mr-3 h-5 w-5 group-hover:animate-bounce" />
                Download Our Startup Guide
              </Button>
            </motion.div>

            {/* Response Time */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="glass-morphism p-6 rounded-lg border border-green-500/20"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <h4 className="text-lg font-semibold text-white">Fast Response Guarantee</h4>
              </div>
              <p className="text-gray-300">
                We respond to all inquiries within <span className="text-green-400 font-semibold">24 hours</span>. 
                For urgent projects, expect a response within <span className="text-green-400 font-semibold">2 hours</span> 
                during business hours.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="text-center mt-16 pt-16 border-t border-primary/20"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to join the next generation of market leaders?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Every day you wait is a day your competitors get ahead. 
            Let's transform your vision into reality and dominate your market together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="magnetic-button bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold group"
            >
              <Rocket className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Start Your Transformation Today
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

