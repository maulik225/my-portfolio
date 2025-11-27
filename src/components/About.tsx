import { GraduationCap, MapPin, Cpu, Camera, Code2, Layers } from 'lucide-react';

const highlights = [
  { icon: Cpu, label: 'AI & Deep Learning', description: 'Segmentation, detection, RLHF' },
  { icon: Camera, label: 'Computer Vision', description: 'Industrial imaging systems' },
  { icon: Code2, label: 'High-Performance', description: 'C++, real-time processing' },
  { icon: Layers, label: 'Full-Stack', description: 'React, Firebase, .NET' },
];

export const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate about building intelligent systems that bridge the gap between hardware and software
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <div className="space-y-6">
            <div className="glass rounded-2xl p-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am an AI, Computer Vision, and C++ engineer with strong expertise in building 
                high-performance, real-time imaging and automation systems. I specialize in 
                low-latency camera pipelines using Basler Pylon SDK, industrial vision solutions, 
                and deep learning models such as segmentation, detection, and reinforcement learning.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                With experience in C++, Python, .NET, Avalonia, and multithreaded architectures, 
                I create fast, efficient, and reliable applications capable of processing data 
                within 1–3 ms constraints. I bring precision, speed, and clean engineering to 
                every project I take on.
              </p>
            </div>

            {/* Education */}
            <div className="glass rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/20">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Master's in Computer Engineering</h3>
                  <p className="text-muted-foreground">AI and Robotics</p>
                  <p className="text-sm text-primary mt-1">University of Padova, Italy</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                    <MapPin size={14} />
                    Padova, Italy • Graduated Oct 2025
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.label}
                className="glass rounded-2xl p-6 hover:glow-sm transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-3 rounded-lg bg-primary/20 w-fit mb-4 group-hover:bg-primary/30 transition-colors">
                  <item.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold mb-1">{item.label}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
