
import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies?: string[];
}

const experiences: Experience[] = [
  {
    title: "Intern",
    company: "Randez",
    location: "Remote",
    period: "07/2023 - 08/2023",
    description: [
      "Developed the front-end interface for a messaging application using CSS/HTML and JavaScript.",
      "Created a responsive and user-friendly interface that prioritizes the user experience.",
      "Worked on application logic using PHP Core and SQL for database management.",
      "Implemented the strategy of objects in PHP."
    ],
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "SQL"]
  },
  {
    title: "Founder",
    company: "ACE Full-Stack Developer",
    location: "Online",
    period: "In Progress",
    description: [
      "Founded and developed a full-stack web development project.",
      "Applied comprehensive software engineering principles to create robust applications.",
      "Implemented best practices in both front-end and back-end development."
    ],
    technologies: ["Full Stack", "Web Development"]
  },
  {
    title: "Foundation C# with Microsoft",
    company: "FreeCodeCamp",
    location: "Online",
    period: "Completed",
    description: [
      "Completed an intensive training program focused on C# development.",
      "Gained expertise in Microsoft technologies and frameworks.",
      "Applied knowledge to practical programming challenges and projects."
    ],
    technologies: ["C#", "Microsoft", ".NET"]
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold font-serif text-center mb-12 animate-on-scroll">
          Experience
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-border"></div>
            
            {/* Experience items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={index} 
                  className={`relative flex flex-col md:flex-row animate-on-scroll ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-6 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-10' : 'md:pl-10'
                  }`}>
                    <div className="glass rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                        <p className="text-muted-foreground">{exp.company}</p>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      
                      <ul className="list-disc pl-5 space-y-2 mb-4">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-sm">{item}</li>
                        ))}
                      </ul>
                      
                      {exp.technologies && (
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
