
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

  return (
    <section
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden"
      ref={sectionRef}
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-blue-50 to-slate-50 dark:from-blue-950 dark:to-slate-950"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="opacity-0 text-4xl md:text-5xl lg:text-6xl font-bold font-serif tracking-tight mb-6 animate-fade-up animation-delay-200">
            Mohammed Amine ESFOUNA
          </h1>
          <h2 className="opacity-0 text-xl md:text-2xl font-medium text-muted-foreground mb-8 animate-fade-up animation-delay-400">
            Software Engineering Student
          </h2>
          <p className="opacity-0 text-lg text-muted-foreground mb-10 animate-fade-up animation-delay-600">
            I possess a keen talent for identifying and solving technological problems.
            With a strong work ethic and a natural ability to learn, I'm dedicated to creating
            innovative solutions through technology.
          </p>
          <Button
            onClick={scrollToAbout}
            className="opacity-0 group animate-fade-up animation-delay-600"
            size="lg"
          >
            Learn More
            <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button variant="ghost" size="icon" onClick={scrollToAbout} aria-label="Scroll down">
          <ArrowDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  );
}

export default HeroSection;
