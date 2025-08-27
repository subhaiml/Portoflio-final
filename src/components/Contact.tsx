import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Linkedin, Github, Download, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactLinks = [
    {
      title: 'Email',
      value: 'subharthi2006@gmail.com',
      href: 'mailto:subharthi2006@gmail.com',
      icon: <Mail className="w-6 h-6" />,
      color: 'text-blue-400'
    },
    {
      title: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://www.linkedin.com/in/subharthi-dutta-aiml/',
      icon: <Linkedin className="w-6 h-6" />,
      color: 'text-blue-600'
    },
    {
      title: 'GitHub',
      value: 'View my repositories',
      href: 'https://github.com/subhaiml',
      icon: <Github className="w-6 h-6" />,
      color: 'text-gray-400'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on exciting projects? Let's connect and discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="portfolio-card p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-6 gradient-text-accent">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-secondary/50 border-border/50 focus:border-primary"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-secondary/50 border-border/50 focus:border-primary"
                  />
                </div>
              </div>
              
              <Input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="bg-secondary/50 border-border/50 focus:border-primary"
              />
              
              <Textarea
                name="message"
                placeholder="Your message..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="bg-secondary/50 border-border/50 focus:border-primary resize-none"
              />
              
              <Button type="submit" className="w-full glow-primary">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info & Resume */}
          <div className="space-y-8">
            {/* Contact Links */}
            <div className="space-y-6">
              {contactLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-card p-6 rounded-xl flex items-center space-x-4 hover:scale-105 transition-all duration-300 group"
                >
                  <div className={`${link.color} group-hover:scale-110 transition-transform duration-300`}>
                    {link.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {link.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {link.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Resume Download */}
            <div className="portfolio-card p-8 rounded-xl text-center">
              <h3 className="text-xl font-semibold mb-4 gradient-text-accent">
                Download Resume
              </h3>
              <p className="text-muted-foreground mb-6">
                Get a detailed overview of my experience, education, and skills.
              </p>
              <Button 
                variant="outline" 
                className="glow-primary"
                asChild
              >
                <a 
                  href="https://drive.google.com/file/d/1q8C8AqnPqgN3aEa_h4E5m2LE1fQC5bUd/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;