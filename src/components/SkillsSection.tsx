
import React from 'react';
import { Badge } from '@/components/ui/badge';

interface Skill {
  name: string;
  level: number;
  category: 'languages' | 'frameworks' | 'tools' | 'web' | 'mobile' | 'distributed';
  image: string;
}

const skills: Skill[] = [
  { name: 'Java', level: 90, category: 'languages', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'JavaScript', level: 85, category: 'languages', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'HTML', level: 95, category: 'web', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', level: 85, category: 'web', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'C++', level: 80, category: 'languages', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'C', level: 80, category: 'languages', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
  { name: 'Python', level: 75, category: 'languages', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Linux', level: 70, category: 'distributed', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
  { name: 'Angular', level: 75, category: 'web', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
  { name: 'React.js', level: 70, category: 'web', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'PHP & MySQL', level: 80, category: 'web', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'SQL', level: 85, category: 'distributed', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Kubernetes', level: 65, category: 'distributed', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
  { name: 'Docker', level: 65, category: 'distributed', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Spring Boot', level: 75, category: 'frameworks', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
  { name: 'PL/SQL', level: 70, category: 'distributed', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg' },
  { name: 'JAVA EE', level: 75, category: 'frameworks', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-plain-wordmark.svg' },
  { name: 'Android', level: 80, category: 'mobile', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg' },
  { name: 'Swift', level: 70, category: 'mobile', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg' },
  { name: 'Flutter', level: 75, category: 'mobile', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
];

export function SkillsSection() {
  const languages = skills.filter(skill => skill.category === 'languages');
  const frameworks = skills.filter(skill => skill.category === 'frameworks');
  const web = skills.filter(skill => skill.category === 'web');
  const mobile = skills.filter(skill => skill.category === 'mobile');
  const distributed = skills.filter(skill => skill.category === 'distributed');

  const renderSkillCard = (title: string, skillsToRender: Skill[]) => (
    <div className="glass rounded-xl p-6 shadow-lg animate-on-scroll">
      <h3 className="text-xl font-bold mb-6 text-center">{title}</h3>
      <div className="space-y-6">
        {skillsToRender.map((skill) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 flex-shrink-0">
                  <img 
                    src={skill.image} 
                    alt={`${skill.name} logo`} 
                    className="w-full h-full object-contain"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://via.placeholder.com/30?text=' + skill.name.charAt(0);
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
  );

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold font-serif text-center mb-12 animate-on-scroll">
          Skills
        </h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Languages */}
            {renderSkillCard("Languages", languages)}
            
            {/* Frameworks */}
            {renderSkillCard("Frameworks", frameworks)}
            
            {/* Web Technologies */}
            {renderSkillCard("Web Technologies", web)}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Mobile */}
            {renderSkillCard("Mobile Development", mobile)}
            
            {/* Distributed Systems */}
            {renderSkillCard("Distributed Systems", distributed)}
          </div>

          <div className="mt-12 glass rounded-xl p-6 shadow-lg animate-on-scroll">
            <h3 className="text-xl font-bold mb-6 text-center">All Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill.name} variant="secondary" className="text-sm flex items-center gap-1 p-2">
                  <div className="w-4 h-4 flex-shrink-0">
                    <img 
                      src={skill.image} 
                      alt={`${skill.name} logo`} 
                      className="w-full h-full object-contain"
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/20?text=' + skill.name.charAt(0);
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
