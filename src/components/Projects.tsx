import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "NutriTrack AI",
      description: "AI-powered nutrition tracker using Google Gemini 2.5 Flash. Features real-time food recognition (80% accuracy), dual-input via Web/Raspberry Pi, and detailed calorie analytics with Supabase backend.",
      tech: ["React", "TypeScript", "Supabase", "Gemini AI", "IoT"],
      liveUrl: "https://nutri-pro-v2.vercel.app/",
      icon: "🥗"
    },
    {
      title: 'Concert Ticket Generator',
      description: 'A dynamic web application for generating custom concert tickets with interactive design and real-time preview.',
      tech: ['React', 'CSS', 'JavaScript'],
      liveUrl: 'https://ticket-generator-dun-pi.vercel.app/',
      icon: '🎟'
    },
    {
      title: 'IP Address Tracker',
      description: 'Real-time IP geolocation tracker with interactive maps and detailed location information display.',
      tech: ['React', 'APIs', 'Geolocation'],
      liveUrl: 'https://ip-tracker-ten-olive.vercel.app/',
      icon: '🌐'
    },
    {
      title: 'E-Cart Login Page',
      description: 'Modern e-commerce authentication interface with responsive design and smooth user experience.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://ecart-rose-chi.vercel.app/',
      icon: '🛒'
    },
    {
      title: 'Finance Tracker',
      description: 'Personal finance management application with expense tracking, budgeting, and analytics features.',
      tech: ['React', 'Charts.js', 'Local Storage'],
      liveUrl: 'https://finance-tracker-7moc.vercel.app/',
      icon: '📊'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work in web development and AI/ML applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="portfolio-card p-8 rounded-xl group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{project.icon}</div>
              
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <Button 
                  variant="outline" 
                  size="sm"
                  asChild
                  className="flex-1"
                >
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;