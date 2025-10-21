import React, { useEffect } from 'react';
import ProjectsSection from '@/components/ProjectsSection';
import PageTransition from '@/components/PageTransition';
import FixedViewportLayout from '@/components/FixedViewportLayout';

const Projects = () => {
  useEffect(() => {
    document.title = 'Projects | ESAM';
    
    // Trigger animations immediately since we're not scrolling
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((element) => {
      element.classList.add('show');
    });
  }, []);

  return (
    <PageTransition>
      <FixedViewportLayout>
        <ProjectsSection />
      </FixedViewportLayout>
    </PageTransition>
  );
};

export default Projects;