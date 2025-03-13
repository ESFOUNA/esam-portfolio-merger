
import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  backgroundClass?: string;
  rotationFactor?: number;
}

export function TiltCard({ 
  children, 
  className = "", 
  backgroundClass = "bg-white bg-opacity-5 backdrop-blur-sm", 
  rotationFactor = 5 
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);

  // Motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Smooth motion with springs
  const springConfig = { damping: 20, stiffness: 300 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);
  
  // Transform values for rotation and scale
  const rotateX = useTransform(ySpring, [-0.5, 0.5], [rotationFactor, -rotationFactor]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], [-rotationFactor, rotationFactor]);
  const scale = useSpring(hovering ? 1.03 : 1, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    
    // Get mouse position relative to card (0-1)
    const xPos = (e.clientX - rect.left) / rect.width - 0.5;
    const yPos = (e.clientY - rect.top) / rect.height - 0.5;
    
    x.set(xPos);
    y.set(yPos);
  };

  return (
    <motion.div 
      ref={ref}
      className={`relative rounded-xl overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => {
        setHovering(false);
        x.set(0);
        y.set(0);
      }}
      style={{
        rotateX,
        rotateY,
        scale,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
    >
      <div 
        className={`relative z-10 p-6 ${backgroundClass}`}
        style={{ transform: "translateZ(40px)" }}
      >
        {children}
      </div>
      
      {/* Glow effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-primary/40 to-accent/40 opacity-0 rounded-xl pointer-events-none"
        style={{
          opacity: useTransform(xSpring, [-0.5, 0, 0.5], [0.2, 0, 0.2]),
          filter: "blur(20px)",
          transform: "translateZ(30px)",
        }}
      />
    </motion.div>
  );
}

export default TiltCard;
