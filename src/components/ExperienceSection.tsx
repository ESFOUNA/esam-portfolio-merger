import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Building2, X, ExternalLink, CheckCircle, Code, Database, Shield, Cog } from 'lucide-react';

interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  shortDescription: string;
  fullDescription: {
    overview: string;
    keyTasks: string[];
    detailedDescription?: {
      sections: {
        title: string;
        content: string[];
      }[];
    };
    technologies: string[];
    achievements: string[];
  };
  logo: string;
  companyColor: string;
  type: 'internship';
}

const experiences: Experience[] = [
  {
    id: 'atrebo',
    title: 'Backend Developer Intern',
    company: 'Atrebo',
    location: 'Morocco',
    period: '07/2024 - 08/2024',
    shortDescription: 'Backend Developer specialized in implementing dynamic messaging system for entity management application using ASP.NET Core and C#. Responsible for error handling and testing using Swagger UI DTOS and Postman.',
    fullDescription: {
      overview: 'During my internship, I worked on developing and enhancing a dynamic messaging system for a Business Intelligence application. The goal was to improve error management and multilingual support for better user experience.',
      keyTasks: [
        'Dynamic Messaging Development – Implementing a system for managing and displaying custom error messages',
        'ErrorTranslations.cs – Centralizing error messages and translations',
        'Automation – Linking messages dynamically to relevant classes',
        'Testing & Validation – Using Swagger UI and Postman to verify API responses',
        'Architecture Optimization – Applying SOLID principles for maintainable code',
        'UML Design – Modeling system components for a structured architecture'
      ],
      technologies: ['C#', 'ASP.NET Core', '.NET', 'Swagger UI', 'Postman', 'SQL Server', 'Entity Framework'],
      achievements: [
        'Strengthened backend development skills in C# and .NET',
        'Improved API testing expertise with Swagger and Postman',
        'Enhanced understanding of error handling and multilingual support',
        'Applied SOLID principles for maintainable architecture'
      ]
    },
    logo: '/images/companies/atrebo-logo.png',
    companyColor: 'from-green-500 to-emerald-600',
    type: 'internship'
  },
  {
    id: 'cgi',
    title: 'Full-Stack Developer Intern',
    company: 'CGI',
    location: 'Morocco',
    period: '23/06/2025 - 30/08/2025 (2 months - PFA)',
    shortDescription: "L'Analyseur SATIN est une application web full-stack conçue pour automatiser l'analyse des différentiels de catalogue dans un environnement Oracle complexe. Mon mandat était de prendre en charge le prototype existant, de le stabiliser, de le sécuriser et de développer les fonctionnalités manquantes pour en faire un outil de production fiable.",
    fullDescription: {
      overview: "Ma mission s'est articulée autour de trois piliers principaux pour transformer un prototype en outil de production fiable.",
      keyTasks: [],
      detailedDescription: {
        sections: [
          {
            title: '1. Fiabilisation et Sécurisation de la Plateforme',
            content: [
              "J'ai commencé par un audit complet de la base de code, ce qui m'a permis d'identifier et de résoudre plusieurs problèmes critiques qui empêchaient une utilisation stable.",
              "Sécurité Applicative : J'ai intégré Bandit dans le cycle de développement pour automatiser la détection de vulnérabilités. J'ai corrigé les failles identifiées (parsing XML non sécurisé, timeouts réseau) et validé les faux positifs pour assainir le code.",
              "Qualité Continue : J'ai mis en place un serveur SonarQube via Docker pour effectuer des analyses de qualité statique. Cela a permis d'améliorer la maintenabilité du code et d'assurer le respect des bonnes pratiques.",
              "Stabilité : J'ai résolu des problèmes complexes de conflits de dépendances Python, d'erreurs d'intégrité de la base de données (erreurs de cascade), et de gestion des fuseaux horaires (UTC vs Local) pour garantir la cohérence des données."
            ]
          },
          {
            title: '2. Développement de Fonctionnalités à Haute Valeur Ajoutée',
            content: [
              "Mon objectif était de rendre l'application non seulement stable, mais aussi puissante et intuitive pour ses utilisateurs.",
              "Gestion des Règles Métier : J'ai conçu et développé une interface d'administration complète en React qui permet aux utilisateurs autorisés de gérer dynamiquement les règles d'analyse stockées dans des fichiers de configuration. L'application est passée d'une logique statique à une logique entièrement configurable via l'interface, la rendant pérenne et autonome.",
              "Synchronisation du Référentiel : J'ai créé un outil permettant aux administrateurs de synchroniser en un clic le référentiel des tables de l'application avec l'état réel de la base de données Oracle.",
              "Robustesse de l'Expérience Utilisateur : J'ai implémenté un système de sauvegarde automatique qui enregistre la progression de l'analyste en temps réel, évitant toute perte de travail. J'ai également mis en place un système de \"fallback\" pour les notifications par email, garantissant que l'application reste fonctionnelle même en cas d'échec de l'API externe."
            ]
          },
          {
            title: '3. Préparation au Déploiement et Industrialisation',
            content: [
              "Pour finaliser le projet, je l'ai préparé pour une mise en production selon les standards de l'industrie.",
              "Conteneurisation : J'ai écrit les Dockerfile pour le frontend React (avec build multi-étapes et Nginx) et pour le backend FastAPI.",
              "Orchestration : J'ai créé un fichier docker-compose.yml qui permet de lancer l'intégralité de l'application avec une seule commande, simplifiant radicalement le déploiement et la portabilité.",
              "Documentation Technique : J'ai rédigé des guides de déploiement clairs et détaillés (DEPLOY.md, README.md) pour assurer une transmission de connaissance efficace et permettre à l'équipe de reprendre le projet facilement."
            ]
          }
        ]
      },
      technologies: ['React', 'TypeScript', 'FastAPI', 'Python', 'Docker', 'Nginx', 'SonarQube', 'Bandit', 'SQLAlchemy', 'Oracle DB'],
      achievements: [
        'Transformation complète d\'un prototype en outil de production',
        'Mise en place d\'une architecture sécurisée et maintenable',
        'Développement d\'interfaces d\'administration avancées',
        'Industrialisation complète avec Docker et documentation'
      ]
    },
    logo: '/images/companies/cgi-logo.png',
    companyColor: 'from-red-500 to-red-600',
    type: 'internship'
  }
];

const techIcons: { [key: string]: string } = {
  'C#': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
  'ASP.NET Core': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg',
  '.NET': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
  'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'FastAPI': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
  'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  'Nginx': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg',
  'Oracle DB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg',
  'SQL Server': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg'
};

export function ExperienceSection() {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
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
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Click on any internship to explore detailed information about my professional journey
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => setSelectedExperience(experience)}
            >
              <div className="relative glass rounded-3xl p-8 h-full border border-white/20 dark:border-gray-700/30 overflow-hidden group-hover:shadow-2xl transition-all duration-500">
                {/* Company Color Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${experience.companyColor} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Company Logo & Header */}
                  <div className="flex items-start gap-6 mb-6">
                    <motion.div
                      className="w-16 h-16 rounded-2xl bg-white dark:bg-gray-800 p-3 shadow-lg flex items-center justify-center"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={experience.logo}
                        alt={`${experience.company} logo`}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${experience.company}&background=3b82f6&color=fff&size=64&bold=true`;
                        }}
                      />
                    </motion.div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-200 group-hover:text-primary transition-colors duration-300">
                        {experience.title}
                      </h3>
                      <p className="text-lg font-semibold text-muted-foreground mb-2">{experience.company}</p>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{experience.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{experience.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Building2 className="w-4 h-4" />
                          <span className="capitalize">{experience.type}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Short Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-4">
                    {experience.shortDescription}
                  </p>

                  {/* Technologies Preview */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {experience.fullDescription.technologies.slice(0, 6).map((tech) => (
                      <div key={tech} className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50">
                        {techIcons[tech] && (
                          <img src={techIcons[tech]} alt={tech} className="w-4 h-4" />
                        )}
                        <span className="text-xs font-medium">{tech}</span>
                      </div>
                    ))}
                    {experience.fullDescription.technologies.length > 6 && (
                      <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        +{experience.fullDescription.technologies.length - 6} more
                      </div>
                    )}
                  </div>

                  {/* Click Indicator */}
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Click to view details
                    </div>
                    <div className={`w-12 h-1 bg-gradient-to-r ${experience.companyColor} rounded-full`}></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Experience Detail Modal */}
      <AnimatePresence>
        {selectedExperience && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedExperience(null)}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className={`relative p-8 bg-gradient-to-r ${selectedExperience.companyColor} text-white`}>
                <button
                  onClick={() => setSelectedExperience(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 rounded-2xl bg-white/20 p-4">
                    <img
                      src={selectedExperience.logo}
                      alt={`${selectedExperience.company} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{selectedExperience.title}</h3>
                    <p className="text-xl text-white/90 mb-2">{selectedExperience.company}</p>
                    <div className="flex items-center gap-4 text-white/80">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {selectedExperience.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {selectedExperience.location}
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
                    <div className={`w-6 h-6 rounded-lg bg-gradient-to-r ${selectedExperience.companyColor} flex items-center justify-center`}>
                      <Building2 className="w-4 h-4 text-white" />
                    </div>
                    Overview
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedExperience.fullDescription.overview}
                  </p>
                </div>

                {/* Key Tasks or Detailed Sections */}
                {selectedExperience.fullDescription.keyTasks.length > 0 ? (
                  <div className="mb-8">
                    <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <div className={`w-6 h-6 rounded-lg bg-gradient-to-r ${selectedExperience.companyColor} flex items-center justify-center`}>
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      Key Tasks
                    </h4>
                    <div className="grid gap-3">
                      {selectedExperience.fullDescription.keyTasks.map((task, index) => (
                        <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                          <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${selectedExperience.companyColor} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            <CheckCircle className="w-3 h-3 text-white" />
                          </div>
                          <p className="text-sm leading-relaxed">{task}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : selectedExperience.fullDescription.detailedDescription && (
                  <div className="mb-8">
                    {selectedExperience.fullDescription.detailedDescription.sections.map((section, index) => (
                      <div key={index} className="mb-6">
                        <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                          <div className={`w-6 h-6 rounded-lg bg-gradient-to-r ${selectedExperience.companyColor} flex items-center justify-center`}>
                            <span className="text-white text-sm font-bold">{index + 1}</span>
                          </div>
                          {section.title}
                        </h4>
                        <div className="space-y-3">
                          {section.content.map((paragraph, pIndex) => (
                            <p key={pIndex} className="text-muted-foreground leading-relaxed text-sm">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <div className={`w-6 h-6 rounded-lg bg-gradient-to-r ${selectedExperience.companyColor} flex items-center justify-center`}>
                      <Code className="w-4 h-4 text-white" />
                    </div>
                    Technologies Used
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {selectedExperience.fullDescription.technologies.map((tech) => (
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
                <div>
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <div className={`w-6 h-6 rounded-lg bg-gradient-to-r ${selectedExperience.companyColor} flex items-center justify-center`}>
                      <Shield className="w-4 h-4 text-white" />
                    </div>
                    Key Achievements
                  </h4>
                  <div className="grid gap-3">
                    {selectedExperience.fullDescription.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200/50 dark:border-green-700/50">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-3 h-3 text-white" />
                        </div>
                        <p className="text-sm leading-relaxed text-green-800 dark:text-green-200">{achievement}</p>
                      </div>
                    ))}
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

export default ExperienceSection;