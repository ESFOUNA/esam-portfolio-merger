
import React from 'react';
import { Calendar } from 'lucide-react';

interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description?: string;
}

const educationData: Education[] = [
  {
    degree: 'Scientific Baccalaureate with Mathematics option',
    institution: 'Ben Tachfine',
    location: 'Fez',
    period: '2021',
    description: 'Graduated with honors'
  },
  {
    degree: 'Software Engineering Student',
    institution: 'Private University of Fez',
    location: 'Fez',
    period: '2021 - Today',
    description: 'Currently pursuing a degree in Software Engineering'
  }
];

export function EducationSection() {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold font-serif text-center mb-12 animate-on-scroll">
          Education
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div 
                key={index} 
                className="glass rounded-xl p-6 shadow-lg animate-on-scroll hover:shadow-xl transition-all"
              >
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                    <p className="text-muted-foreground">{edu.institution}, {edu.location}</p>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{edu.period}</span>
                  </div>
                </div>
                {edu.description && (
                  <p className="mt-2">{edu.description}</p>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center animate-on-scroll">
            <div className="glass inline-block rounded-xl px-6 py-3 shadow-lg">
              <p className="text-muted-foreground">
                Continuously pursuing knowledge and improving my skills in software engineering
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EducationSection;
