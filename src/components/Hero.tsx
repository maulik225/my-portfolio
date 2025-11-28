import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import avatar from '@/assets/avatar.jpeg';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 hero-gradient opacity-50" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-glow animation-delay-400" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse-glow animation-delay-800" />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="opacity-0 animate-fade-in-up">
              <span className="inline-block px-4 py-2 rounded-full glass text-sm font-mono text-primary mb-6">
                AI & Computer Vision Engineer
              </span>
            </div>
            
            <h1 className="opacity-0 animate-fade-in-up animation-delay-200 text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Hi, I'm{' '}
              <span className="text-gradient">Maulik Sompura</span>
            </h1>
            
            <p className="opacity-0 animate-fade-in-up animation-delay-400 text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
              Building high-performance, real-time imaging systems and AI solutions. 
              Specializing in computer vision, deep learning, and industrial automation 
              with expertise in C++, Python, and modern web technologies.
            </p>

            <div className="opacity-0 animate-fade-in-up animation-delay-600 flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#/contact"
                className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-medium hover:glow-primary transition-all duration-300 hover:scale-105"
              >
                Get in Touch
              </a>
              <a
                href="#/projects"
                className="px-8 py-4 rounded-lg glass text-foreground font-medium hover:bg-muted transition-all duration-300"
              >
                View Projects
              </a>
            </div>

            {/* Social Links */}
            <div className="opacity-0 animate-fade-in-up animation-delay-800 flex gap-4 mt-8 justify-center lg:justify-start">
              <a
                href="https://github.com/maulik225"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg glass text-muted-foreground hover:text-primary hover:glow-sm transition-all duration-300"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/maulik-sompura-15453418b/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg glass text-muted-foreground hover:text-secondary hover:glow-sm transition-all duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:mauliksompura225@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg glass text-muted-foreground hover:text-accent hover:glow-sm transition-all duration-300"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Avatar */}
          <div className="opacity-0 animate-fade-in-up animation-delay-400 relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-accent animate-gradient p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-background">
                  <img
                    src={avatar}
                    alt="Maulik Sompura"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#/about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};
