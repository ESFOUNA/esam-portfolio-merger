import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { motion } from 'framer-motion';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const letterVariants = {
    hidden: { 
      y: -100,
      opacity: 0
    },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }
    })
  };

  const name = "ESAM";

  return (
    <>
      <div className="w-full h-6 flex items-center justify-center px-4 bg-white dark:bg-gray-900">
        <div className="flex items-center">
          <div className="relative h-5 w-12 mr-2">
            <div className="absolute w-full h-1/3 top-0 bg-black"></div>
            <div className="absolute w-full h-1/3 top-1/3 bg-white"></div>
            <div className="absolute w-full h-1/3 top-2/3 bg-green-700"></div>
            <div 
              className="absolute left-0 h-full w-1/3"
              style={{
                clipPath: 'polygon(0 0, 0% 100%, 100% 50%)',
                backgroundColor: '#e4312b'
              }}
            ></div>
          </div>
          <span className="text-sm font-semibold text-gray-900 dark:text-white">Free Palestine</span>
        </div>
      </div>
      
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
          scrolled 
            ? 'py-2 glass' 
            : 'py-4 bg-transparent'
        )}
        style={{ top: '24px' }}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <a href="#" className="flex items-center">
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex overflow-hidden">
                {name.split('').map((letter, i) => (
                  <motion.span 
                    key={i}
                    custom={i}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    style={{ fontFamily: 'Arial Black, sans-serif' }}
                    className="text-2xl font-bold"
                    whileHover={{
                      y: -5,
                      color: "hsl(var(--primary))",
                      transition: { duration: 0.2 }
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>

          {mobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 glass p-4 md:hidden animate-fade-in">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-sm font-medium transition-colors hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}

export default Navbar;
