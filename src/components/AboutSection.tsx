
import React, { useEffect } from 'react';

export function AboutSection() {
  useEffect(() => {
    // Trigger animations immediately since we're not scrolling
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((element) => {
      element.classList.add('show');
    });
  }, []);

  return (
    <section className="h-full flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 md:px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-8 animate-on-scroll">
          <h2 className="text-4xl font-bold font-serif mb-4 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-300 dark:to-white bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Software engineering student passionate about creating innovative solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-on-scroll">
          {/* Overview Card */}
          <div className="lg:col-span-2 glass rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
            <h3 className="text-xl font-bold mb-4 text-primary">Overview</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Je suis Mohammed Amine Esfouna, un futur Ingénieur Logiciel étudiant à l'Université Privée de Fès, spécialisé dans la résolution de problèmes grâce à la technologie. Mon parcours académique m'a doté d'un ensemble diversifié de compétences en développement logiciel, me permettant d'aborder les défis avec des solutions innovantes.
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0 h-6 w-6 text-primary">✓</div>
                <div>
                  <p className="font-medium">Programming Problem Solving</p>
                  <p className="text-sm text-muted-foreground">Debugging complex issues and creating maintainable solutions</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 h-6 w-6 text-primary">✓</div>
                <div>
                  <p className="font-medium">Graphic Design</p>
                  <p className="text-sm text-muted-foreground">UI/UX design and visual concept implementation</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 h-6 w-6 text-primary">✓</div>
                <div>
                  <p className="font-medium">Team Collaboration</p>
                  <p className="text-sm text-muted-foreground">Strong teamwork and project collaboration skills</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Languages Card */}
          <div className="glass rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
            <h3 className="text-xl font-bold mb-4 text-primary">Languages</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-green-500"></span>
                  <span className="font-medium">English</span>
                </div>
                <span className="text-sm text-muted-foreground">Fluent</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-blue-500"></span>
                  <span className="font-medium">French</span>
                </div>
                <span className="text-sm text-muted-foreground">Fluent</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-red-500"></span>
                  <span className="font-medium">Arabic</span>
                </div>
                <span className="text-sm text-muted-foreground">Native</span>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200/50 dark:border-gray-700/50">
              <h4 className="font-semibold mb-3">Location</h4>
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary"></span>
                Fez, Morocco
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
