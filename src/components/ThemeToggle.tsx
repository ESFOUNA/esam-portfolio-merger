

import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={toggleTheme}
        className="rounded-full glass-button hover:shadow-glass transition-all duration-300 group relative overflow-hidden"
        aria-label="Toggle theme"
      >
        <motion.div
          key={theme}
          initial={{ rotate: -180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 180, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="relative z-10"
        >
          {theme === 'light' ? (
            <Moon className="h-5 w-5 text-gray-900 dark:text-white transition-colors group-hover:text-primary" />
          ) : (
            <Sun className="h-5 w-5 text-gray-900 dark:text-white transition-colors group-hover:text-primary" />
          )}
        </motion.div>
        
        {/* Glass shimmer effect */}
        <div className="absolute inset-0 glass-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </Button>
    </motion.div>
  );
};

export default ThemeToggle;
