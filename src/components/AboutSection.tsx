
import React, { useEffect } from 'react';

export function AboutSection() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold font-serif text-center mb-12 animate-on-scroll">
          About Me
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="glass rounded-xl p-8 shadow-lg animate-on-scroll">
            <h3 className="text-xl font-bold mb-4">Overview</h3>
            <p className="text-muted-foreground mb-6">
              I am a software engineering student at the Private University of Fez, specializing in problem-solving through technology. My academic journey has equipped me with a diverse set of skills in software development, allowing me to approach challenges with innovative solutions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="animate-on-scroll">
                <h3 className="text-lg font-semibold mb-2">Languages</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-primary"></span>
                    <span>English</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-primary"></span>
                    <span>French</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-primary"></span>
                    <span>Arabic</span>
                  </li>
                </ul>
              </div>
              
              <div className="animate-on-scroll">
                <h3 className="text-lg font-semibold mb-2">Strengths</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 h-6 w-6 text-primary">✓</div>
                    <div>
                      <p className="font-medium">Programming problem solving</p>
                      <p className="text-sm text-muted-foreground">Debugging complex issues through code. Translates existing solutions into effective and maintainable pieces of programmatic language.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 h-6 w-6 text-primary">✓</div>
                    <div>
                      <p className="font-medium">Graphic Design</p>
                      <p className="text-sm text-muted-foreground">Proficient in graphic design software to translate concepts into visual form and implement user interface design specifications.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 h-6 w-6 text-primary">✓</div>
                    <div>
                      <p className="font-medium">Teamwork</p>
                      <p className="text-sm text-muted-foreground">Collaboration is a strength for me. I am fully committed to work closely with team players, collaborating on shared projects and initiatives.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
