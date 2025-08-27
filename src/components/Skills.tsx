import { Code, Database, Brain, Layers } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="w-8 h-8" />,
      skills: ['C', 'C++', 'Java', 'Python', 'JavaScript'],
      color: 'text-blue-400'
    },
    {
      title: 'Web Technologies',
      icon: <Layers className="w-8 h-8" />,
      skills: ['HTML', 'CSS', 'Tailwind CSS', 'React'],
      color: 'text-green-400'
    },
    {
      title: 'AI/ML Tools',
      icon: <Brain className="w-8 h-8" />,
      skills: ['NumPy', 'Pandas', 'TensorFlow'],
      color: 'text-purple-400'
    },
    {
      title: 'Databases & Tools',
      icon: <Database className="w-8 h-8" />,
      skills: ['Git', 'GitHub', 'VS Code', 'Figma'],
      color: 'text-orange-400'
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="portfolio-card p-6 rounded-xl text-center group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`${category.color} mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300`}>
                {category.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="px-3 py-2 bg-secondary/50 rounded-lg text-sm border border-border/50 hover:border-primary/30 transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="portfolio-card p-8 rounded-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 gradient-text-accent">
              Always Learning
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
              tools, and methodologies to stay at the forefront of AI/ML and web development. 
              Currently diving deeper into advanced machine learning algorithms and modern React patterns.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;