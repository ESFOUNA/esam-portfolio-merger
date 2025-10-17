import React, { useEffect } from 'react';
import ExperienceSection from '@/components/ExperienceSection';
import PageTransition from '@/components/PageTransition';
import FixedViewportLayout from '@/components/FixedViewportLayout';

const Experience = () => {
  useEffect(() => {
    document.title = 'Experience | ESAM';
    
    // Trigger animations immediately since we're not scrolling
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((element) => {
      element.classList.add('show');
    });
  }, []);

  return (
    <PageTransition>
      <FixedViewportLayout>
        <ExperienceSection />
      </FixedViewportLayout>
    </PageTransition>
  );
};

export default Experience;