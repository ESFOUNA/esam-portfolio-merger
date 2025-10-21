import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Users, X, ExternalLink, CheckCircle, Code, Target, Lightbulb, Award } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  role: string;
  teamType: string;
  shortDescription: string;
  fullDescription: {
    overview: string;
    keyFeatures: string[];
    myRole: string[];
    techStack: string[];
    achievements: string[];
    impact: string;
  };
  logo: string;
  projectColor: string;
  status: 'in-progress' | 'completed' | 'planning';
  category: 'AI/ML' | 'Web Development' | 'Mobile' | 'Full-Stack';
}

const projects: Project[] = [
  {
    id: 'tickefy',
    title: 'Tickefy',
    subtitle: '2nd Prize Winner - Deep Emersion Challenge at Private University of Fez',
    period: 'February 2025',
    role: 'Project Lead | AI Developer | Full-Stack Developer',
    teamType: 'Team Collaboration',
    shortDescription: 'Conception d\'un système de billetterie basé sur la reconnaissance faciale en temps réel et ouverture automatisée des portails. Winner of the 2nd prize at the Deep Emersion Challenge competition at the Private University of Fez.',
    fullDescription: {
      overview: 'Winner of the 2nd prize at the Deep Emersion Challenge at the Private University of Fez. This project involved designing a biometric ticketing system based on real-time facial recognition with automated gate opening. As project leader, AI developer, and DevOps responsible, I orchestrated the entire infrastructure and coordinated agile development with the team.',
      keyFeatures: [
        'Real-time facial recognition system with automated gate opening',
        'Docker infrastructure orchestration for backend (Spring Boot/MySQL), frontend (React/Android), and AI engine (Python/FastAPI)',
        'AI engine development with MTCNN, InceptionResNetV1, and FAISS for real-time facial recognition',
        'Biometric registration and verification system',
        'Automated access control with physical gate integration',
        'Scalable microservices architecture for large-scale events'
      ],
      myRole: [
        'Project Leader: Coordinated agile development and team management',
        'AI Developer: Developed facial recognition engine using MTCNN, InceptionResNetV1, and FAISS',
        'DevOps Responsible: Orchestrated Docker infrastructure for all system components',
        'System Architect: Designed microservices architecture and integration patterns',
        'Full-Stack Developer: Contributed to React frontend and Spring Boot backend',
        'Competition Presenter: Led the team presentation that won 2nd prize',
        'Technical Documentation: Created comprehensive system documentation and deployment guides'
      ],
      techStack: ['Python', 'FastAPI', 'MTCNN', 'InceptionResNetV1', 'FAISS', 'React.js', 'Android', 'Spring Boot', 'MySQL', 'Docker', 'OpenCV'],
      achievements: [
        '🏆 Won 2nd Prize at Deep Emersion Challenge competition',
        'Successfully implemented real-time facial recognition with 95%+ accuracy',
        'Orchestrated complete Docker infrastructure for microservices deployment',
        'Led cross-functional team of 4 developers in agile methodology',
        'Integrated advanced AI models (MTCNN, InceptionResNetV1, FAISS) for production use',
        'Delivered fully functional biometric ticketing system with automated gate control',
        'Created scalable architecture supporting thousands of concurrent users'
      ],
      impact: 'This award-winning project demonstrated our team\'s ability to deliver innovative solutions under competitive pressure. The recognition at the Deep Emersion Challenge validates our technical expertise and project management skills. The system showcases advanced AI integration in real-world applications and contributes to Morocco\'s reputation in technological innovation.'
    },
    logo: '/images/projects/tickefy-logo.png',
    projectColor: 'from-green-500 to-emerald-600',
    status: 'completed',
    category: 'AI/ML'
  }
];

const techIcons: { [key: string]: string } = {
  'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'OpenCV': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg',
  'React.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Spring Boot': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
  'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  'TensorFlow': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
  'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  'REST APIs': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg'
};

const statusConfig = {
  'in-progress': {
    color: 'from-blue-500 to-blue-600',
    textColor: 'text-blue-600',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    borderColor: 'border-blue-200 dark:border-blue-700',
    label: 'In Progress'
  },
  'completed': {
    color: 'from-green-500 to-green-600',
    textColor: 'text-green-600',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
    borderColor: 'border-green-200 dark:border-green-700',
    label: 'Completed'
  },
  'planning': {
    color: 'from-orange-500 to-orange-600',
    textColor: 'text-orange-600',
    bgColor: 'bg-orange-50 dark:bg-orange-900/20',
    borderColor: 'border-orange-200 dark:border-orange-700',
    label: 'Planning'
  }
};

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="pt-4 pb-16 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold font-serif mb-6 bg-gradient-to-r from-primary via-green-500 to-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions and cutting-edge technologies that showcase my passion for development
          </p>
        </motion.div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            const statusInfo = statusConfig[project.status];
            
            return (
              <motion.div
                key={project.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative glass rounded-3xl p-8 h-full border border-white/20 dark:border-gray-700/30 overflow-hidden group-hover:shadow-2xl transition-all duration-500">
                  {/* Project Color Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.projectColor} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Project Logo & Status */}
                    <div className="flex items-start justify-between mb-6">
                      <motion.img 
                        src={project.logo} 
                        alt={`${project.title} logo`} 
                        className="w-28 h-28 object-contain drop-shadow-lg"
                        style={{
                          filter: 'contrast(1.4) brightness(1.3) saturate(1.1)',
                          imageRendering: 'crisp-edges'
                        }}
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${project.title}&background=22c55e&color=fff&size=112&bold=true`;
                        }}
                      />
                      
                      <div className={`px-3 py-1 rounded-full ${statusInfo.bgColor} ${statusInfo.borderColor} border`}>
                        <span className={`text-xs font-semibold ${statusInfo.textColor}`}>
                          {statusInfo.label}
                        </span>
                      </div>
                    </div>
                    
                    {/* Project Info */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-200 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sm font-semibold text-muted-foreground mb-3">{project.subtitle}</p>
                      
                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{project.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          <span>{project.teamType}</span>
                        </div>
                        <div className="px-2 py-1 rounded-full bg-primary/10 text-primary">
                          {project.category}
                        </div>
                      </div>
                      
                      <p className="text-sm font-medium text-primary mb-4">{project.role}</p>
                    </div>
                    
                    {/* Short Description */}
                    <p className="text-muted-foreground leading-relaxed mb-6 text-sm line-clamp-4">
                      {project.shortDescription}
                    </p>
                    
                    {/* Tech Stack Preview */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.fullDescription.techStack.slice(0, 4).map((tech) => (
                        <div key={tech} className="flex items-center gap-2 px-2 py-1 rounded-full bg-white/50 dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50">
                          {techIcons[tech] && (
                            <img src={techIcons[tech]} alt={tech} className="w-3 h-3" />
                          )}
                          <span className="text-xs font-medium">{tech}</span>
                        </div>
                      ))}
                      {project.fullDescription.techStack.length > 4 && (
                        <div className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                          +{project.fullDescription.techStack.length - 4} more
                        </div>
                      )}
                    </div>
                    
                    {/* Click Indicator */}
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        View project details
                      </div>
                      <div className={`w-12 h-1 bg-gradient-to-r ${project.projectColor} rounded-full`}></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className={`relative p-8 bg-gradient-to-r ${selectedProject.projectColor} text-white`}>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                
                <div className="flex items-center gap-6">
                  <img 
                    src={selectedProject.logo} 
                    alt={`${selectedProject.title} logo`} 
                    className="w-32 h-32 object-contain drop-shadow-2xl"
                    style={{
                      filter: 'contrast(1.5) brightness(1.4) saturate(1.2)',
                      imageRendering: 'crisp-edges'
                    }}
                  />
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-2">{selectedProject.title}</h3>
                    <p className="text-xl text-white/90 mb-2">{selectedProject.subtitle}</p>
                    <div className="flex items-center gap-4 text-white/80 text-sm">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {selectedProject.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {selectedProject.teamType}
                      </span>
                      <span className="px-2 py-1 rounded-full bg-white/20">
                        {selectedProject.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8 overflow-y-auto max-h-[60vh]">
                {/* Overview */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <div className={`w-6 h-6 rounded-lg bg-gradient-to-r ${selectedProject.projectColor} flex items-center justify-center`}>
                      <Lightbulb className="w-4 h-4 text-white" />
                    </div>
                    Project Overview
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.fullDescription.overview}
                  </p>
                </div>

                {/* Key Features */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <div className={`w-6 h-6 rounded-lg bg-gradient-to-r ${selectedProject.projectColor} flex items-center justify-center`}>
                      <Target className="w-4 h-4 text-white" />
                    </div>
                    Key Features
                  </h4>
                  <div className="grid gap-3">
                    {selectedProject.fullDescription.keyFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                        <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${selectedProject.projectColor} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <CheckCircle className="w-3 h-3 text-white" />
                        </div>
                        <p className="text-sm leading-relaxed">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* My Role */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <div className={`w-6 h-6 rounded-lg bg-gradient-to-r ${selectedProject.projectColor} flex items-center justify-center`}>
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    My Role & Responsibilities
                  </h4>
                  <div className="grid gap-3">
                    {selectedProject.fullDescription.myRole.map((role, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200/50 dark:border-blue-700/50">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-3 h-3 text-white" />
                        </div>
                        <p className="text-sm leading-relaxed text-blue-800 dark:text-blue-200">{role}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <div className={`w-6 h-6 rounded-lg bg-gradient-to-r ${selectedProject.projectColor} flex items-center justify-center`}>
                      <Code className="w-4 h-4 text-white" />
                    </div>
                    Technology Stack
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {selectedProject.fullDescription.techStack.map((tech) => (
                      <div key={tech} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                        {techIcons[tech] && (
                          <img src={techIcons[tech]} alt={tech} className="w-6 h-6" />
                        )}
                        <span className="text-sm font-medium">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <div className={`w-6 h-6 rounded-lg bg-gradient-to-r ${selectedProject.projectColor} flex items-center justify-center`}>
                      <Award className="w-4 h-4 text-white" />
                    </div>
                    Key Achievements
                  </h4>
                  <div className="grid gap-3">
                    {selectedProject.fullDescription.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200/50 dark:border-green-700/50">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Award className="w-3 h-3 text-white" />
                        </div>
                        <p className="text-sm leading-relaxed text-green-800 dark:text-green-200">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Impact */}
                <div>
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <div className={`w-6 h-6 rounded-lg bg-gradient-to-r ${selectedProject.projectColor} flex items-center justify-center`}>
                      <Target className="w-4 h-4 text-white" />
                    </div>
                    Project Impact
                  </h4>
                  <div className="p-6 rounded-xl bg-gradient-to-r from-primary/5 to-green-500/5 border border-primary/20">
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProject.fullDescription.impact}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default ProjectsSection;