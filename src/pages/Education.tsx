import React, { useEffect } from 'react';
import EducationSection from '@/components/EducationSection';
import PageTransition from '@/components/PageTransition';
import FixedViewportLayout from '@/components/FixedViewportLayout';

const Education = () => {
  useEffect(() => {
    document.title = 'Education | ESAM';
    
    // Trigger animations immediately since we're not scrolling
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((element) => {
      element.classList.add('show');
    });
  }, []);

  return (
    <PageTransition>
      <FixedViewportLayout>
        <EducationSection />
      </FixedViewportLayout>
    </PageTransition>
  );
};

export default Education;