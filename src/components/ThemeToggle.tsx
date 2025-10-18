

import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleTheme}
      className="rounded-full glass-button group relative"
      aria-label="Toggle theme"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        visibility: 'visible',
        opacity: '1'
      }}
    >
      <div className="relative z-10" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {theme === 'light' ? (
          <Moon className="h-5 w-5" style={{ color: '#111827', display: 'block' }} />
        ) : (
          <Sun className="h-5 w-5" style={{ color: '#ffffff', display: 'block' }} />
        )}
      </div>
    </Button>
  );
};

export default ThemeToggle;
