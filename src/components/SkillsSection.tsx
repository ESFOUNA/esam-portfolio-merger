
import React from 'react';
import { Badge } from '@/components/ui/badge';

interface Skill {
  name: string;
  level: number;
  category: 'languages' | 'frameworks' | 'tools';
  image: string;
}

const skills: Skill[] = [
  { name: 'Java', level: 90, category: 'languages', image: '/java-logo.png' },
  { name: 'JavaScript', level: 85, category: 'languages', image: '/javascript-logo.png' },
  { name: 'HTML', level: 95, category: 'languages', image: '/html-logo.png' },
  { name: 'CSS', level: 85, category: 'languages', image: '/css-logo.png' },
  { name: 'C++', level: 80, category: 'languages', image: '/cpp-logo.png' },
  { name: 'C', level: 80, category: 'languages', image: '/c-logo.png' },
  { name: 'Python', level: 75, category: 'languages', image: '/python-logo.png' },
  { name: 'Linux', level: 70, category: 'tools', image: '/linux-logo.png' },
  { name: 'Angular', level: 75, category: 'frameworks', image: '/angular-logo.png' },
  { name: 'React.js', level: 70, category: 'frameworks', image: '/react-logo.png' },
  { name: 'PHP & MySQL', level: 80, category: 'languages', image: '/php-mysql-logo.png' },
  { name: 'SQL', level: 85, category: 'languages', image: '/sql-logo.png' },
  { name: 'Kubernetes Docker', level: 65, category: 'tools', image: '/kubernetes-docker-logo.png' },
  { name: 'Spring Boot', level: 75, category: 'frameworks', image: '/spring-boot-logo.png' },
  { name: 'PL/SQL', level: 70, category: 'languages', image: '/plsql-logo.png' },
  { name: 'JAVA EE', level: 75, category: 'frameworks', image: '/java-ee-logo.png' },
];

export function SkillsSection() {
  const languages = skills.filter(skill => skill.category === 'languages');
  const frameworks = skills.filter(skill => skill.category === 'frameworks');
  const tools = skills.filter(skill => skill.category === 'tools');

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold font-serif text-center mb-12 animate-on-scroll">
          Skills
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Languages */}
            <div className="glass rounded-xl p-6 shadow-lg animate-on-scroll">
              <h3 className="text-xl font-bold mb-6 text-center">Languages</h3>
              <div className="space-y-6">
                {languages.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 flex-shrink-0">
                          <img 
                            src={skill.image} 
                            alt={`${skill.name} logo`} 
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = 'https://via.placeholder.com/30';
                            }}
                          />
                        </div>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                      <div 
                        className="bg-primary h-full rounded-full transition-all duration-1000 ease-out" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div className="glass rounded-xl p-6 shadow-lg animate-on-scroll">
              <h3 className="text-xl font-bold mb-6 text-center">Frameworks</h3>
              <div className="space-y-6">
                {frameworks.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 flex-shrink-0">
                          <img 
                            src={skill.image} 
                            alt={`${skill.name} logo`} 
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = 'https://via.placeholder.com/30';
                            }}
                          />
                        </div>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                      <div 
                        className="bg-primary h-full rounded-full transition-all duration-1000 ease-out" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="glass rounded-xl p-6 shadow-lg animate-on-scroll">
              <h3 className="text-xl font-bold mb-6 text-center">Tools</h3>
              <div className="space-y-6">
                {tools.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 flex-shrink-0">
                          <img 
                            src={skill.image} 
                            alt={`${skill.name} logo`} 
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = 'https://via.placeholder.com/30';
                            }}
                          />
                        </div>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                      <div 
                        className="bg-primary h-full rounded-full transition-all duration-1000 ease-out" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 glass rounded-xl p-6 shadow-lg animate-on-scroll">
            <h3 className="text-xl font-bold mb-6 text-center">All Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill.name} variant="secondary" className="text-sm flex items-center gap-1">
                  <div className="w-4 h-4 flex-shrink-0">
                    <img 
                      src={skill.image} 
                      alt={`${skill.name} logo`} 
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/20';
                      }}
                    />
                  </div>
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
