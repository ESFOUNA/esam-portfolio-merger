import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Code, Globe, Server, Monitor, Layers } from 'lucide-react';

interface Skill {
  name: string;
  category: 'languages' | 'frameworks' | 'web' | 'distributed' | 'desktop';
  image: string;
  description: string;
}

const skills: Skill[] = [
  { name: 'Java', category: 'languages', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', description: 'Object-oriented programming language' },
  { name: 'JavaScript', category: 'languages', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', description: 'Dynamic web programming language' },
  { name: 'C++', category: 'languages', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', description: 'High-performance system programming' },
  { name: 'C', category: 'languages', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg', description: 'Low-level system programming' },
  { name: 'Python', category: 'languages', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', description: 'Versatile scripting and data science' },
  { name: 'Rust', category: 'languages', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg', description: 'Memory-safe systems programming' },
  
  { name: 'HTML5', category: 'web', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', description: 'Modern web markup language' },
  { name: 'CSS3', category: 'web', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', description: 'Advanced styling and animations' },
  { name: 'Angular', category: 'web', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', description: 'Full-featured web framework' },
  { name: 'React', category: 'web', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', description: 'Component-based UI library' },
  { name: 'PHP', category: 'web', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', description: 'Server-side web development' },
  
  { name: 'Spring Boot', category: 'frameworks', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', description: 'Java enterprise framework' },
  { name: 'Java EE', category: 'frameworks', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-plain-wordmark.svg', description: 'Enterprise Java platform' },
  
  { name: 'Linux', category: 'distributed', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', description: 'Unix-like operating system' },
  { name: 'MySQL', category: 'distributed', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', description: 'Relational database management' },
  { name: 'Kubernetes', category: 'distributed', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', description: 'Container orchestration platform' },
  { name: 'Docker', category: 'distributed', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', description: 'Containerization platform' },
  { name: 'Oracle', category: 'distributed', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg', description: 'Enterprise database system' },
  
  { name: 'Tauri', category: 'desktop', image: 'https://tauri.app/meta/favicon-96x96.png', description: 'Rust-based desktop app framework' },
];

const categories = [
  {
    id: 'languages',
    title: 'Programming Languages',
    description: 'Core programming languages I use for development',
    icon: Code,
    gradient: 'from-blue-500 to-purple-600',
    count: skills.filter(s => s.category === 'languages').length
  },
  {
    id: 'web',
    title: 'Web Technologies',
    description: 'Frontend and web development technologies',
    icon: Globe,
    gradient: 'from-green-500 to-teal-600',
    count: skills.filter(s => s.category === 'web').length
  },
  {
    id: 'frameworks',
    title: 'Frameworks & Libraries',
    description: 'Development frameworks and libraries',
    icon: Layers,
    gradient: 'from-orange-500 to-red-600',
    count: skills.filter(s => s.category === 'frameworks').length
  },
  {
    id: 'distributed',
    title: 'Cloud & DevOps',
    description: 'Cloud computing and DevOps tools',
    icon: Server,
    gradient: 'from-cyan-500 to-blue-600',
    count: skills.filter(s => s.category === 'distributed').length
  },
  {
    id: 'desktop',
    title: 'Desktop Development',
    description: 'Desktop application development',
    icon: Monitor,
    gradient: 'from-purple-500 to-pink-600',
    count: skills.filter(s => s.category === 'desktop').length
  }
];



export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categorySkills = selectedCategory 
    ? skills.filter(skill => skill.category === selectedCategory)
    : [];

  const selectedCategoryData = categories.find(cat => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold font-serif mb-6 bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Click on any category to explore my technical expertise in detail
          </p>
        </motion.div>
        
        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
                onClick={() => setSelectedCategory(category.id)}
              >
                <div className="relative glass rounded-3xl p-8 h-full border border-white/20 dark:border-gray-700/30 overflow-hidden group-hover:shadow-2xl transition-all duration-500">
                  {/* Unified Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 group-hover:from-primary/10 group-hover:to-purple-500/10 transition-all duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 text-center">
                    {/* Icon */}
                    <motion.div
                      className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${category.gradient} p-4 shadow-lg`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.8 }}
                    >
                      <IconComponent className="w-full h-full text-white" />
                    </motion.div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200 group-hover:text-primary transition-colors duration-300">
                      {category.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {category.description}
                    </p>
                    
                    {/* Count Badge */}
                    <div className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${category.gradient} text-white text-sm font-semibold`}>
                      {category.count} Skills
                    </div>
                  </div>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Skills Modal */}
      <AnimatePresence>
        {selectedCategory && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCategory(null)}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className={`relative p-8 bg-gradient-to-r ${selectedCategoryData?.gradient} text-white`}>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                
                <div className="flex items-center gap-4">
                  {selectedCategoryData && (
                    <div className="w-16 h-16 rounded-2xl bg-white/20 p-4">
                      <selectedCategoryData.icon className="w-full h-full" />
                    </div>
                  )}
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{selectedCategoryData?.title}</h3>
                    <p className="text-white/90">{selectedCategoryData?.description}</p>
                  </div>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="p-8 overflow-y-auto max-h-96">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categorySkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -8, scale: 1.05 }}
                    >
                      <div className="glass rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 group-hover:shadow-xl transition-all duration-300">
                        {/* Skill Icon */}
                        <div className="flex items-center gap-4 mb-4">
                          <motion.div 
                            className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/30 to-white/10 dark:from-gray-700/40 dark:to-gray-800/20 p-2 shadow-lg"
                            whileHover={{ 
                              scale: 1.2,
                              rotate: [0, -5, 5, 0],
                              transition: { duration: 0.6 }
                            }}
                          >
                            <img 
                              src={skill.image} 
                              alt={`${skill.name} logo`} 
                              className="w-full h-full object-contain"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${skill.name}&background=3b82f6&color=fff&size=48&bold=true`;
                              }}
                            />
                          </motion.div>
                          <div>
                            <h4 className="font-bold text-lg text-gray-800 dark:text-gray-200 group-hover:text-primary transition-colors duration-300">{skill.name}</h4>
                          </div>
                        </div>
                        
                        {/* Description */}
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


    </section>
  );
}

export default SkillsSection;