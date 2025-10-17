
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-8 sm:py-12 md:py-20 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-center mb-8 sm:mb-12 animate-on-scroll">
          Contact Me
        </h2>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <div className="animate-on-scroll">
            <div className="glass rounded-xl p-4 sm:p-6 shadow-lg h-full">
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Get In Touch</h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <a 
                      href="mailto:esfounaa@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      esfounaa@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Phone</p>
                    <a 
                      href="tel:+212698397601"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +212 698397601
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">LinkedIn</p>
                    <a 
                      href="https://www.linkedin.com/in/mohammed-amine-esfouna/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Mohammed Amine Esfouna
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Github className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">GitHub</p>
                    <a 
                      href="https://github.com/Esfouna"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Esfouna
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-on-scroll">
            <div className="glass rounded-xl p-4 sm:p-6 shadow-lg">
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Send Me a Message</h3>
              
              <form className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input id="name" placeholder="Your name" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea id="message" placeholder="Your message" rows={5} />
                </div>
                
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
