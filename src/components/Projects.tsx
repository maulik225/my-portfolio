import { Github } from 'lucide-react';

const projects = [
  {
    title: 'Movie Recommendation System',
    description: 'Built a content-based Movie Recommendation System using Scikit-learn for ML, FastAPI for API, and React for frontend. Created an IMDb-like clone with personalized recommendations.',
    image: 'https://maulik225.github.io/my-portfolio/static/media/imdb.025cc41d0ed94019a488.png',
    skills: ['Python', 'FastAPI', 'Scikit-learn', 'React'],
    github: 'https://github.com/maulik225/ml_api',
    colorClasses: { text: 'text-primary', bg: 'bg-primary/10' },
  },
  {
    title: 'Flood Detection System',
    description: 'AI-powered flood detection system analyzing images to identify flood-affected areas. Helps authorities plan relief operations and rescue missions effectively.',
    image: 'https://maulik225.github.io/my-portfolio/static/media/flood_detect.a87ec2a3ab22d7584f0b.png',
    skills: ['Python', 'PyTorch', 'TensorFlow', 'Streamlit'],
    github: 'https://github.com/MojammelHossain/flood_detection',
    colorClasses: { text: 'text-secondary', bg: 'bg-secondary/10' },
  },
  {
    title: 'SageBot - NLP Chatbot',
    description: 'Developed SageBot, an intuitive chatbot leveraging NLP to enhance digital accessibility for individuals with limited computer proficiency.',
    image: 'https://maulik225.github.io/my-portfolio/static/media/sagebot.b8a642f4f68819b074b9.png',
    skills: ['React', 'Flask', 'Scikit-learn', 'Firebase'],
    github: 'https://github.com/maulik225/SageBot_backend',
    colorClasses: { text: 'text-accent', bg: 'bg-accent/10' },
  },
  {
    title: 'Multilingual Spellchecker API',
    description: 'Flask and Hunspell-based spellchecker API providing robust spell-checking capabilities in English, French, and Italian.',
    image: 'https://maulik225.github.io/my-portfolio/static/media/spellchecker.335c757121dd5a57c0bb.png',
    skills: ['Python', 'Flask', 'Hunspell'],
    github: 'https://github.com/maulik225/spellcheckerAPI-Using-Flask',
    colorClasses: { text: 'text-primary', bg: 'bg-primary/10' },
  },
  {
    title: 'Network Robustness Analysis',
    description: 'Explores and compares robustness metrics for road networks, analyzing behavior under random and targeted attacks across European countries.',
    image: 'https://maulik225.github.io/my-portfolio/static/media/robust_network.f0e73ac504d356ac99ed.png',
    skills: ['Python', 'NetworkX', 'Matplotlib', 'Graphs'],
    github: 'https://github.com/maulik225/Robustness-of-network',
    colorClasses: { text: 'text-secondary', bg: 'bg-secondary/10' },
  },
  {
    title: 'Recipe Sharing Platform',
    description: 'A platform enabling users to create, share, and save recipes, fostering an interactive community for culinary enthusiasts.',
    image: 'https://maulik225.github.io/my-portfolio/static/media/recipe.5970ea99bf9899f395f8.png',
    skills: ['Java', 'Servlets', 'PostgreSQL', 'Bootstrap'],
    github: 'https://github.com/maulik225',
    colorClasses: { text: 'text-accent', bg: 'bg-accent/10' },
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 hero-gradient opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in AI, machine learning, and full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group glass rounded-2xl overflow-hidden hover:glow-sm transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 group-hover:${project.colorClasses.text} transition-colors`}>
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.slice(0, 4).map((skill) => (
                    <span
                      key={skill}
                      className={`px-2 py-1 text-xs font-mono rounded ${project.colorClasses.bg} ${project.colorClasses.text}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
