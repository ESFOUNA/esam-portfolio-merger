import React, { useEffect } from 'react';
import SkillsSection from '@/components/SkillsSection';
import PageTransition from '@/components/PageTransition';
import FixedViewportLayout from '@/components/FixedViewportLayout';

const Skills = () => {
  useEffect(() => {
    document.title = 'Skills | ESAM';
    
    // Trigger animations immediately since we're not scrolling
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((element) => {
      element.classList.add('show');
    });
  }, []);

  return (
    <PageTransition>
      <FixedViewportLayout>
        <SkillsSection />
      </FixedViewportLayout>
    </PageTransition>
  );
};

export default Skills;