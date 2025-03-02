
import React from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-10 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex items-center justify-center">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full animate-pulse"
              onClick={scrollToTop}
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold" style={{ fontFamily: 'Arial Black, sans-serif' }}>ESAM</span>
          </div>
          
          <p className="text-sm text-muted-foreground text-center max-w-md">
            Software engineering student passionate about solving technological problems.
            Always learning, always building.
          </p>
          
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mohammed Amine ESFOUNA. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
