
import React from 'react';
import { Calendar, GraduationCap, MapPin, Award } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description?: string;
  status: 'completed' | 'in-progress';
  gpa?: string;
  honors?: string;
}

const educationData: Education[] = [
  {
    degree: 'Scientific Baccalaureate with Mathematics option',
    institution: 'Ben Tachfine High School',
    location: 'Fez, Morocco',
    period: '2021',
    status: 'completed',
    description: 'Specialized in Mathematics with strong foundation in analytical thinking and problem-solving',
    honors: 'Graduated with honors'
  },
  {
    degree: 'Bachelor of Software Engineering',
    institution: 'Private University of Fez',
    location: 'Fez, Morocco',
    period: '2021 - Present',
    status: 'in-progress',
    description: 'Comprehensive program covering software development, algorithms, data structures, and modern programming practices'
  }
];

export function EducationSection() {
  return (
    <section className="h-full flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 animate-on-scroll">
          <h2 className="text-4xl font-bold font-serif mb-4 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-300 dark:to-white bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic journey and continuous learning in software engineering
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-on-scroll">
          {educationData.map((edu, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl border-2 border-indigo-500/20 hover:border-indigo-500/40 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-blue-500/5 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1"
            >
              {/* Animated background overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative p-6">
                {/* Header with icon and status */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-white/80 dark:bg-gray-800/80 shadow-lg text-indigo-500">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium ${
                      edu.status === 'completed' 
                        ? 'bg-green-500/10 text-green-600 border border-green-500/20' 
                        : 'bg-blue-500/10 text-blue-600 border border-blue-500/20'
                    }`}>
                      <div className={`w-2 h-2 rounded-full ${
                        edu.status === 'completed' ? 'bg-green-500' : 'bg-blue-500'
                      }`}></div>
                      {edu.status === 'completed' ? 'Completed' : 'In Progress'}
                    </div>
                  </div>
                  
                  {edu.honors && (
                    <Badge className="bg-yellow-500/10 text-yellow-600 border-yellow-500/20 font-medium">
                      <Award className="h-3 w-3 mr-1" />
                      {edu.honors}
                    </Badge>
                  )}
                </div>

                {/* Degree and Institution */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {edu.degree}
                  </h3>
                  <div className="flex flex-col gap-2 text-muted-foreground">
                    <div className="flex items-center gap-2 font-semibold">
                      <GraduationCap className="h-4 w-4" />
                      <span>{edu.institution}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
                
                {/* Period */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground bg-white/50 dark:bg-gray-800/50 px-3 py-2 rounded-lg inline-flex">
                    <Calendar className="h-4 w-4" />
                    <span className="font-medium">{edu.period}</span>
                  </div>
                </div>
                
                {/* Description */}
                {edu.description && (
                  <div className="mb-4">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                      {edu.description}
                    </p>
                  </div>
                )}

                {/* GPA if available */}
                {edu.gpa && (
                  <div className="mt-4 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-medium text-muted-foreground">GPA:</span>
                      <Badge variant="secondary" className="bg-indigo-500/10 text-indigo-600 border-indigo-500/20">
                        {edu.gpa}
                      </Badge>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center animate-on-scroll">
          <div className="group relative overflow-hidden rounded-2xl border-2 border-gray-200/50 dark:border-gray-700/50 bg-gradient-to-br from-gray-50/50 via-white/50 to-gray-50/50 dark:from-gray-800/50 dark:via-gray-900/50 dark:to-gray-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 inline-block">
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative px-6 py-4">
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <GraduationCap className="h-4 w-4" />
                </div>
                <span className="font-semibold text-gray-900 dark:text-white">Continuous Learning</span>
              </div>
              <p className="text-muted-foreground max-w-md text-sm">
                Continuously pursuing knowledge and improving skills through courses, certifications, and hands-on projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EducationSection;
