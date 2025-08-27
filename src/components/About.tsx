const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="portfolio-card p-8 rounded-xl">
                <h3 className="text-2xl font-semibold mb-4 gradient-text-accent">
                  My Journey
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I am a passionate Computer Science student with interests in Artificial Intelligence, 
                  Machine Learning, and Web Development. I love creating scalable solutions that merge 
                  creativity with technology.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  My long-term goal is to become an AI/LLM Engineer while leveraging my web skills 
                  to deliver impactful applications that solve real-world problems.
                </p>

                {/* Resume Button */}
                <a
                  href="https://drive.google.com/file/d/1WEm5lSBhrHcgYAdQM2Ad9kKYgBysubVD/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                >
                  Download Resume
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <div className="portfolio-card p-6 rounded-xl">
                <h4 className="font-semibold mb-3 text-primary">Education</h4>
                <p className="text-muted-foreground">
                  BTech Computer Science Engineering (AI & ML)
                </p>
              </div>

              <div className="portfolio-card p-6 rounded-xl">
                <h4 className="font-semibold mb-3 text-primary">Focus Areas</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Artificial Intelligence & Machine Learning</li>
                  <li>• Full-Stack Web Development</li>
                  <li>• Data Science & Analytics</li>
                  <li>• Modern Frontend Frameworks</li>
                </ul>
              </div>

              <div className="portfolio-card p-6 rounded-xl">
                <h4 className="font-semibold mb-3 text-primary">Interests</h4>
                <p className="text-muted-foreground">
                  Creating innovative AI solutions, building responsive web applications, 
                  and exploring the intersection of technology and user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

