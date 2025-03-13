
import React from 'react';
import { motion } from 'framer-motion';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  backgroundClass?: string;
}

export function TiltCard({ 
  children, 
  className = "", 
  backgroundClass = "bg-white bg-opacity-5 backdrop-blur-sm", 
}: TiltCardProps) {
  
  return (
    <motion.div 
      className={`relative rounded-xl overflow-hidden ${className}`}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      <div className={`relative z-10 p-6 ${backgroundClass}`}>
        {children}
      </div>
      
      {/* Subtle pulse glow effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl pointer-events-none"
        animate={{
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          filter: "blur(20px)",
        }}
      />
    </motion.div>
  );
}

export default TiltCard;
