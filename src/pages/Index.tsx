
import React, { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import PageTransition from '@/components/PageTransition';
import FixedViewportLayout from '@/components/FixedViewportLayout';

const Index = () => {
  useEffect(() => {
    document.title = 'Mohammed Amine Esfouna - Full-Stack Software Engineer Portfolio';
    
    // Trigger animations immediately since we're not scrolling
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((element) => {
      element.classList.add('show');
    });
  }, []);

  return (
    <PageTransition>
      <FixedViewportLayout>
        <HeroSection />
      </FixedViewportLayout>
    </PageTransition>
  );
};

export default Index;
