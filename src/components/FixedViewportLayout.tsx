import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface FixedViewportLayoutProps {
  children: React.ReactNode;
  showFooter?: boolean;
}

const FixedViewportLayout: React.FC<FixedViewportLayoutProps> = ({ 
  children, 
  showFooter = false 
}) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-all duration-500">
      <Navbar />
      
      <main className="pt-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </main>
      
      {showFooter && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Footer />
        </motion.div>
      )}
    </div>
  );
};

export default FixedViewportLayout;