
import React from 'react';
import { Calendar, MapPin, Building2, Award, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies?: string[];
  type: 'internship' | 'project' | 'certification';
  status?: 'completed' | 'in-progress';
  link?: string;
}

const experiences: Experience[] = [
  {
    title: "Frontend Developer Intern",
    company: "Randez",
    location: "Remote",
    period: "07/2023 - 08/2023",
    type: "internship",
    status: "completed",
    description: [
      "Developed the front-end interface for a messaging application using CSS/HTML and JavaScript.",
      "Created a responsive and user-friendly interface that prioritizes the user experience.",
      "Worked on application logic using PHP Core and SQL for database management.",
      "Implemented the strategy of objects in PHP."
    ],
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "SQL"]
  },
  {
    title: "Full-Stack Developer",
    company: "ACE Full-Stack Developer",
    location: "Online",
    period: "In Progress",
    type: "project",
    status: "in-progress",
    description: [
      "Founded and developed a full-stack web development project.",
      "Applied comprehensive software engineering principles to create robust applications.",
      "Implemented best practices in both front-end and back-end development."
    ],
    technologies: ["Full Stack", "Web Development", "React", "Node.js"]
  },
  {
    title: "Foundation C# with Microsoft",
    company: "FreeCodeCamp",
    location: "Online",
    period: "Completed",
    type: "certification",
    status: "completed",
    description: [
      "Completed an intensive training program focused on C# development.",
      "Gained expertise in Microsoft technologies and frameworks.",
      "Applied knowledge to practical programming challenges and projects."
    ],
    technologies: ["C#", "Microsoft", ".NET"]
  }
];

export function ExperienceSection() {
  const getCardStyles = (type: string) => {
    switch (type) {
      case 'internship':
        return {
          gradient: 'from-blue-500/10 via-purple-500/10 to-pink-500/10',
          border: 'border-blue-500/20 hover:border-blue-500/40',
          icon: Building2,
          iconColor: 'text-blue-500',
          badge: 'bg-blue-500/10 text-blue-600 border-blue-500/20'
        };
      case 'certification':
        return {
          gradient: 'from-emerald-500/10 via-teal-500/10 to-cyan-500/10',
          border: 'border-emerald-500/20 hover:border-emerald-500/40',
          icon: Award,
          iconColor: 'text-emerald-500',
          badge: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20'
        };
      case 'project':
        return {
          gradient: 'from-orange-500/10 via-red-500/10 to-pink-500/10',
          border: 'border-orange-500/20 hover:border-orange-500/40',
          icon: ExternalLink,
          iconColor: 'text-orange-500',
          badge: 'bg-orange-500/10 text-orange-600 border-orange-500/20'
        };
      default:
        return {
          gradient: 'from-gray-500/10 via-slate-500/10 to-gray-500/10',
          border: 'border-gray-500/20 hover:border-gray-500/40',
          icon: Building2,
          iconColor: 'text-gray-500',
          badge: 'bg-gray-500/10 text-gray-600 border-gray-500/20'
        };
    }
  };

  return (
    <section className="h-full flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 animate-on-scroll">
          <h2 className="text-4xl font-bold font-serif mb-4 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-300 dark:to-white bg-clip-text text-transparent">
            Experience & Achievements
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional experiences, projects, and certifications
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-on-scroll">
          {experiences.map((exp, index) => {
            const styles = getCardStyles(exp.type);
            const IconComponent = styles.icon;
            
            return (
              <div 
                key={index} 
                className={`group relative overflow-hidden rounded-2xl border-2 ${styles.border} bg-gradient-to-br ${styles.gradient} backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1`}
              >
                {/* Animated background overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative p-6">
                  {/* Header with icon and type badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-xl bg-white/80 dark:bg-gray-800/80 shadow-lg ${styles.iconColor}`}>
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div>
                        <Badge className={`${styles.badge} font-medium capitalize text-xs`}>
                          {exp.type}
                        </Badge>
                      </div>
                    </div>
                    {exp.status && (
                      <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                        exp.status === 'completed' 
                          ? 'bg-green-500/10 text-green-600 border border-green-500/20' 
                          : 'bg-yellow-500/10 text-yellow-600 border border-yellow-500/20'
                      }`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${
                          exp.status === 'completed' ? 'bg-green-500' : 'bg-yellow-500'
                        }`}></div>
                        {exp.status === 'completed' ? 'Completed' : 'In Progress'}
                      </div>
                    )}
                  </div>

                  {/* Title and Company */}
                  <div className="mb-4">
                    <h3 className="text-lg font-bold mb-1 text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-sm font-semibold text-muted-foreground">{exp.company}</p>
                  </div>
                  
                  {/* Meta information */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground bg-white/50 dark:bg-gray-800/50 px-2 py-1 rounded">
                      <Calendar className="h-3 w-3" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground bg-white/50 dark:bg-gray-800/50 px-2 py-1 rounded">
                      <MapPin className="h-3 w-3" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  {/* Description - Show only first 2 items */}
                  <div className="mb-4">
                    <ul className="space-y-2">
                      {exp.description.slice(0, 2).map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs leading-relaxed">
                          <div className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Technologies */}
                  {exp.technologies && (
                    <div className="flex flex-wrap gap-1">
                      {exp.technologies.slice(0, 4).map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary" 
                          className="text-xs font-medium bg-white/70 dark:bg-gray-800/70 hover:bg-white dark:hover:bg-gray-700 transition-colors border border-gray-200/50 dark:border-gray-700/50"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {exp.technologies.length > 4 && (
                        <Badge variant="secondary" className="text-xs">
                          +{exp.technologies.length - 4}
                        </Badge>
                      )}
                    </div>
                  )}

                  {/* Link if available */}
                  {exp.link && (
                    <div className="mt-4 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                      <a 
                        href={exp.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
                      >
                        View Project <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
