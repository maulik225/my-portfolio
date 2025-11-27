import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'AI & Computer Vision Engineer',
    company: 'Freelance / Contract',
    location: 'Remote',
    period: 'Present',
    description: 'Building high-performance, real-time imaging and automation systems. Developing low-latency camera pipelines using Basler Pylon SDK and industrial vision solutions with deep learning models.',
    skills: ['C++', 'Python', 'Computer Vision', 'Deep Learning', '.NET', 'Avalonia'],
  },
  {
    title: 'Full-Stack Web Developer',
    company: 'Alita Infotech',
    location: 'Surat, India',
    period: 'Nov 2021 - Aug 2022',
    description: 'Developed and maintained web applications using modern frameworks. Collaborated with cross-functional teams to deliver scalable solutions.',
    skills: ['React', 'Node.js', 'Firebase', 'TypeScript'],
  },
  {
    title: 'Full-Stack Web Developer',
    company: 'Melzo',
    location: 'Surat, India',
    period: 'Feb 2021 - Jun 2021',
    description: 'Built interactive web applications and implemented responsive user interfaces. Worked on backend services and database management.',
    skills: ['React', 'JavaScript', 'HTML/CSS', 'APIs'],
  },
  {
    title: 'Python Developer Intern',
    company: 'Logicwind',
    location: 'Surat, India',
    period: 'Jan 2020 - Apr 2020',
    description: 'Developed Python-based solutions and automated workflows. Gained hands-on experience with data processing and API development.',
    skills: ['Python', 'Flask', 'Data Processing', 'APIs'],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 hero-gradient opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A journey through my professional career in software development and AI engineering
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-0 md:pl-20 mb-8 last:mb-0"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-8 w-4 h-4 rounded-full bg-primary glow-sm hidden md:block" />

                <div className="glass rounded-2xl p-6 hover:glow-sm transition-all duration-300 group">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-primary mt-1">
                        <Briefcase size={16} />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <MapPin size={14} />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs font-mono rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
