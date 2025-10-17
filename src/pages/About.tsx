import React, { useEffect } from 'react';
import AboutSection from '@/components/AboutSection';
import PageTransition from '@/components/PageTransition';
import FixedViewportLayout from '@/components/FixedViewportLayout';

const About = () => {
  useEffect(() => {
    document.title = 'About | ESAM';
  }, []);

  return (
    <PageTransition>
      <FixedViewportLayout>
        <AboutSection />
      </FixedViewportLayout>
    </PageTransition>
  );
};

export default About;