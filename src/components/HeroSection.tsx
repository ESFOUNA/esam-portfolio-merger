
import React, { useEffect, useRef } from 'react';
import { ArrowDown, Download } from 'lucide-react';
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

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/images/CV/CV - Mohammed Amine ESFOUNA.pdf';
    link.download = 'CV - Mohammed Amine ESFOUNA.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
      className="relative min-h-screen flex items-start justify-center pt-24 pb-20 overflow-hidden"
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
              <motion.p variants={item} className="text-lg text-muted-foreground mb-8">
                I possess a keen talent for identifying and solving technological problems.
                With a strong work ethic and a natural ability to learn, I'm dedicated to creating
                innovative solutions through technology.
              </motion.p>
              
              {/* CV Download Button */}
              <motion.div variants={item} className="flex justify-center">
                <button className="uiverse" onClick={downloadCV}>
                  <div className="wrapper">
                    <span>Download CV</span>
                    <div className="circle circle-12"></div>
                    <div className="circle circle-11"></div>
                    <div className="circle circle-10"></div>
                    <div className="circle circle-9"></div>
                    <div className="circle circle-8"></div>
                    <div className="circle circle-7"></div>
                    <div className="circle circle-6"></div>
                    <div className="circle circle-5"></div>
                    <div className="circle circle-4"></div>
                    <div className="circle circle-3"></div>
                    <div className="circle circle-2"></div>
                    <div className="circle circle-1"></div>
                  </div>
                </button>
              </motion.div>
            </motion.div>
          </TiltCard>
        </div>
      </div>

    </section>
  );
}

export default HeroSection;
