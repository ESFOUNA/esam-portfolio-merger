
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import TiltCard from './TiltCard';

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden"
      ref={sectionRef}
    >
      <div className="absolute inset-0 z-0 bg-gray-50 dark:bg-gray-900"></div>
      
      {/* Moving shapes for background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className="absolute rounded-full bg-primary/5 dark:bg-primary/10"
            initial={{ 
              x: Math.random() * 100 - 50 + "%", 
              y: Math.random() * 100 - 50 + "%",
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{ 
              x: [
                Math.random() * 100 - 50 + "%", 
                Math.random() * 100 - 50 + "%", 
                Math.random() * 100 - 50 + "%"
              ],
              y: [
                Math.random() * 100 - 50 + "%", 
                Math.random() * 100 - 50 + "%", 
                Math.random() * 100 - 50 + "%"
              ],
            }}
            transition={{ 
              duration: Math.random() * 30 + 20,
              repeat: Infinity,
              ease: "linear" 
            }}
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              filter: "blur(50px)",
              opacity: Math.random() * 0.3 + 0.1
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <TiltCard className="mb-8">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="text-center"
            >
              <motion.h1 variants={item} className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif tracking-tight mb-6">
                Mohammed Amine ESFOUNA
              </motion.h1>
              <motion.h2 variants={item} className="text-xl md:text-2xl font-medium text-muted-foreground mb-8">
                Software Engineering Student
              </motion.h2>
              <motion.p variants={item} className="text-lg text-muted-foreground mb-10">
                I possess a keen talent for identifying and solving technological problems.
                With a strong work ethic and a natural ability to learn, I'm dedicated to creating
                innovative solutions through technology.
              </motion.p>
              <motion.div variants={item}>
                <Button
                  onClick={scrollToAbout}
                  className="group"
                  size="lg"
                >
                  Learn More
                  <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                </Button>
              </motion.div>
            </motion.div>
          </TiltCard>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: { 
            delay: 1.5,
            duration: 0.5 
          } 
        }}
      >
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={scrollToAbout} 
          aria-label="Scroll down"
          className="animate-bounce"
        >
          <ArrowDown className="h-6 w-6" />
        </Button>
      </motion.div>
    </section>
  );
}

export default HeroSection;
