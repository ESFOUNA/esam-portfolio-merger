import React, { useEffect } from 'react';
import ContactSection from '@/components/ContactSection';
import PageTransition from '@/components/PageTransition';
import FixedViewportLayout from '@/components/FixedViewportLayout';

const Contact = () => {
  useEffect(() => {
    document.title = 'Contact | ESAM';
    
    // Trigger animations immediately since we're not scrolling
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((element) => {
      element.classList.add('show');
    });
  }, []);

  return (
    <PageTransition>
      <FixedViewportLayout>
        <ContactSection />
      </FixedViewportLayout>
    </PageTransition>
  );
};

export default Contact;