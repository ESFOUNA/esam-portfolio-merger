import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Skills', href: '/skills' },
  { label: 'Education', href: '/education' },
  { label: 'Experience', href: '/experience' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const logoContainerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };



  return (
    <>
      <div className="w-full h-6 flex items-center justify-center px-4 bg-gray-50 dark:bg-gray-900">
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
      
      <div className="relative">
        <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 py-3 px-4 sm:px-6 mobile-safe-navbar shadow-lg transition-all duration-300 ease-in-out rounded-2xl"
        style={{ width: 'clamp(300px, 85vw, 900px)' }}
      >


        <div className="flex items-center justify-between relative z-10 w-full">
          {/* Left: Logo */}
          <Link to="/" className="flex items-center group">
            <motion.div
              variants={logoContainerVariants}
              initial="visible"
              animate="visible"
              whileHover="hover"
              className="relative"
            >
              <div className="relative flex items-center">
                <div className="mobile-logo">
                  ESAM
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Center: Navigation */}
          <nav className="hidden md:flex items-center space-x-4 absolute left-1/2 transform -translate-x-1/2 whitespace-nowrap">
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              >
                <Link
                  to={item.href}
                  className={cn(
                    "text-gray-700 dark:text-gray-200 hover:text-primary text-sm font-medium transition-all duration-300 relative px-2 py-2 rounded-lg group whitespace-nowrap",
                    "hover:bg-white/20 dark:hover:bg-gray-800/30 backdrop-blur-sm glass-button",
                    location.pathname === item.href 
                      ? "text-primary bg-primary/10 backdrop-blur-sm after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:w-1 after:h-1 after:bg-primary after:rounded-full" 
                      : ""
                  )}
                >
                  <span className="relative z-10">{item.label}</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-lg opacity-0 group-hover:opacity-100"
                    initial={false}
                    animate={{ scale: location.pathname === item.href ? 1 : 0.8 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Right: Theme Toggle */}
          <div className="hidden md:block">
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="text-gray-700 dark:text-gray-200 hover:bg-white/20 dark:hover:bg-gray-800/30 transition-colors glass-button"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>

        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[55] md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Professional Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -15, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -15, scale: 0.9 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="fixed top-16 left-1/2 transform -translate-x-1/2 professional-mobile-menu md:hidden z-[60]"
          style={{ width: 'clamp(250px, 80vw, 320px)' }}
        >
          <nav className="flex flex-col space-y-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05, duration: 0.2 }}
              >
                <Link
                  to={item.href}
                  className={cn(
                    "text-gray-700 dark:text-gray-200 hover:text-primary text-sm font-medium transition-all duration-200 block py-2.5 px-4 rounded-lg hover:bg-primary/10",
                    location.pathname === item.href ? "text-primary bg-primary/15 font-semibold" : ""
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>
      )}
      </div>
    </>
  );
}

export default Navbar;
