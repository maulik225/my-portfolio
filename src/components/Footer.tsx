import { Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <a href="#" className="text-2xl font-bold text-gradient">
              MS
            </a>
          </div>

          <div className="flex items-center gap-1 text-muted-foreground text-sm">
         
            <span>by Maulik Sompura</span>
          </div>

          <p className="text-sm text-muted-foreground">
            © {currentYear} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
