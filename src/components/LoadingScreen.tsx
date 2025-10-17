import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const name = "ESAM";
  const subtitle = "Software Engineer";

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3500); // 3.5 seconds total

    return () => clearTimeout(timer);
  }, [onComplete]);

  const letterVariants = {
    hidden: { 
      opacity: 0,
      y: 200,
      scale: 0,
      rotateZ: -180
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      rotateZ: 0,
      transition: {
        delay: 0.3 + i * 0.15,
        duration: 1.2,
        type: "spring",
        stiffness: 80,
        damping: 15
      }
    }),
    float: (i: number) => ({
      y: [0, -20, 0],
      transition: {
        delay: 1.5 + i * 0.1,
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    })
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      scale: 1.2,
      filter: "blur(20px)",
      transition: { duration: 0.6, ease: "easeInOut" }
    }
  };

  const circleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: [0, 1.5, 1],
      opacity: [0, 0.5, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-50 dark:bg-gray-900 overflow-hidden"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 6 + 2,
              height: Math.random() * 6 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `hsl(${220 + Math.random() * 60}, ${60 + Math.random() * 20}%, ${50 + Math.random() * 30}%)`
            }}
            animate={{
              y: [0, -100 - Math.random() * 200],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      {/* Expanding circles */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`circle-${i}`}
            className="absolute rounded-full border-2 border-primary/20"
            style={{
              width: 100 + i * 100,
              height: 100 + i * 100
            }}
            variants={circleVariants}
            initial="hidden"
            animate="visible"
            transition={{
              delay: i * 0.4,
              duration: 2,
              repeat: Infinity
            }}
          />
        ))}
      </div>

      <div className="text-center z-10 relative">
        {/* Main Logo with floating animation */}
        <div className="mb-12">
          <div className="flex justify-center items-center mb-6 relative">
            {/* Glow effect behind letters */}
            <motion.div
              className="absolute inset-0 blur-3xl opacity-50"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="w-full h-full bg-gradient-to-r from-primary via-blue-500 to-purple-500"></div>
            </motion.div>

            {name.split('').map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate={["visible", "float"]}
                style={{ 
                  fontFamily: 'Arial Black, sans-serif',
                  transformStyle: 'preserve-3d'
                }}
                className="text-7xl md:text-9xl font-bold bg-gradient-to-br from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent mx-2 drop-shadow-2xl"
              >
                {letter}
              </motion.span>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 2, duration: 1, type: "spring" }}
            className="relative"
          >
            <motion.p
              className="text-2xl md:text-3xl font-light tracking-[0.3em] text-muted-foreground"
              animate={{
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {subtitle}
            </motion.p>
            
            {/* Animated underline */}
            <motion.div
              className="h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mt-4"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 2.5, duration: 1, ease: "easeOut" }}
            />
          </motion.div>
        </div>

        {/* Animated dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8, duration: 0.5 }}
          className="flex justify-center space-x-3"
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-purple-600"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;