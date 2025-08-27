import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm{' '}
              <span className="gradient-text">
                Subharthi Dutta
              </span>
            </h1>
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Aspiring AI/ML & Web Engineer | BTech CSE (AI & ML) Student
            </p>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Passionate about creating innovative solutions that merge artificial intelligence 
              with modern web technologies to build impactful applications.
            </p>
          </div>

          <div className="animate-fade-in-up flex flex-col sm:flex-row gap-4 justify-center mb-12" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="glow-primary"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('contact')}
            >
              Let's Connect
            </Button>
          </div>

          <div className="animate-fade-in-up flex justify-center space-x-6" style={{ animationDelay: '0.8s' }}>
            <a
              href="https://github.com/subhaiml"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 p-3 rounded-full hover:bg-primary/10"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/subharthi-dutta-aiml/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 p-3 rounded-full hover:bg-primary/10"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:subharthi2006@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 p-3 rounded-full hover:bg-primary/10"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;