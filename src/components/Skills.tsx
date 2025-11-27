const skillCategories = [
  {
    title: 'AI & Machine Learning',
    skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'RLHF', 'Segmentation', 'Object Detection', 'Reinforcement Learning'],
    bgClass: 'bg-primary/10',
    textClass: 'text-primary',
    borderClass: 'border-primary/20',
  },
  {
    title: 'Computer Vision',
    skills: ['OpenCV', 'Basler Pylon SDK', 'Image Processing', 'Real-time Pipelines', 'Industrial Vision'],
    bgClass: 'bg-secondary/10',
    textClass: 'text-secondary',
    borderClass: 'border-secondary/20',
  },
  {
    title: 'Programming Languages',
    skills: ['C++', 'Python', 'TypeScript', 'JavaScript', 'C#', 'Java'],
    bgClass: 'bg-accent/10',
    textClass: 'text-accent',
    borderClass: 'border-accent/20',
  },
  {
    title: 'Frameworks & Tools',
    skills: ['React', 'Flask', 'FastAPI', '.NET', 'Avalonia', 'Firebase', 'Node.js'],
    bgClass: 'bg-primary/10',
    textClass: 'text-primary',
    borderClass: 'border-primary/20',
  },
  {
    title: 'Systems & Performance',
    skills: ['Multithreading', 'Low-latency Systems', 'Real-time Processing', 'Performance Optimization'],
    bgClass: 'bg-secondary/10',
    textClass: 'text-secondary',
    borderClass: 'border-secondary/20',
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git', 'Docker', 'Linux', 'PostgreSQL', 'MongoDB', 'REST APIs'],
    bgClass: 'bg-accent/10',
    textClass: 'text-accent',
    borderClass: 'border-accent/20',
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent, high-performance systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass rounded-2xl p-6 hover:glow-sm transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className={`text-lg font-bold mb-4 ${category.textClass}`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 text-sm font-mono rounded-lg ${category.bgClass} ${category.textClass} border ${category.borderClass} hover:opacity-80 transition-opacity cursor-default`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
