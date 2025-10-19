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
      <div className="w-full h-6 flex items-center justify-center px-2 sm:px-4 bg-gray-50 dark:bg-gray-900">
        <div className="flex items-center">
          <div className="relative h-4 sm:h-5 w-10 sm:w-12 mr-1.5 sm:mr-2">
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
          <span className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">Free Palestine</span>
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
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 py-3 px-6 liquid-glass-navbar shadow-2xl transition-all duration-500 ease-in-out rounded-3xl animate-fluid-float"
        style={{ 
          width: 'clamp(280px, 90vw, 1000px)',
          willChange: 'transform'
        }}
      >


        {/* Animated Particles Effect - Like UIVERSE Button */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl navbar-particles-wrapper">
          <div className="navbar-particle particle-1"></div>
          <div className="navbar-particle particle-2"></div>
          <div className="navbar-particle particle-3"></div>
          <div className="navbar-particle particle-4"></div>
          <div className="navbar-particle particle-5"></div>
          <div className="navbar-particle particle-6"></div>
          <div className="navbar-particle particle-7"></div>
          <div className="navbar-particle particle-8"></div>
          <div className="navbar-particle particle-9"></div>
          <div className="navbar-particle particle-10"></div>
          <div className="navbar-particle particle-11"></div>
          <div className="navbar-particle particle-12"></div>
        </div>
        
        {/* Inset Shadow Overlay for Depth */}
        <div className="absolute inset-0 rounded-3xl pointer-events-none navbar-inset-shadow"></div>

        <div className="flex items-center justify-between relative z-20 w-full">
          {/* Left: Logo */}
          <Link to="/" className="flex items-center group">
            <motion.div
              variants={logoContainerVariants}
              initial="visible"
              animate="visible"
              whileHover="hover"
              className="relative"
            >
              <div className="relative flex items-center" style={{ minWidth: '80px' }}>
                <h1 
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black cursor-pointer tracking-wide"
                  style={{ 
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    fontWeight: '900',
                    color: 'inherit',
                    textShadow: 'none',
                    WebkitFontSmoothing: 'antialiased',
                    display: 'inline-block',
                    visibility: 'visible',
                    opacity: '1',
                    margin: '0',
                    padding: '0',
                    lineHeight: '1'
                  }}
                >
                  <span style={{ color: '#111827' }} className="dark:text-white">ESAM</span>
                </h1>
              </div>
            </motion.div>
          </Link>

          {/* Center: Navigation - Desktop & Tablet */}
          <nav className="hidden min-[641px]:flex items-center space-x-4 absolute left-1/2 transform -translate-x-1/2 whitespace-nowrap">
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

          {/* Right: Theme Toggle & Mobile Menu Button (PHONES ONLY) */}
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="hidden max-[640px]:inline-flex rounded-full glass-button"
              aria-label="Toggle menu"
              style={{
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" style={{ color: '#3b82f6' }} />
              ) : (
                <Menu className="h-5 w-5" style={{ color: '#3b82f6' }} />
              )}
            </Button>
          </div>

        </div>
      </motion.header>

      {/* Mobile Menu Overlay - PHONES ONLY */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-[45] min-[641px]:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Dropdown Menu - PHONES ONLY */}
      {mobileMenuOpen && (
        <div 
          className="fixed top-24 right-4 z-[60] min-[641px]:hidden mobile-dropdown-menu"
          style={{ 
            width: 'auto',
            minWidth: '140px',
            borderRadius: '12px',
            padding: '8px'
          }}
        >
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={cn(
                  "text-gray-700 dark:text-gray-200 hover:text-primary text-sm font-medium transition-all duration-200 block py-2 px-3 rounded-lg whitespace-nowrap",
                  location.pathname === item.href ? "text-primary font-semibold" : ""
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
      </div>
    </>
  );
}

export default Navbar;
