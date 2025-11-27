import { FileText, Download, ExternalLink, GraduationCap, User, Calendar } from 'lucide-react';

export const Research = () => {
  return (
    <section id="research" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Academic <span className="text-gradient">Research</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My thesis work exploring the intersection of reinforcement learning and computer vision
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-8 hover:glow-sm transition-all duration-300">
            {/* Header */}
            <div className="flex items-start gap-4 mb-6">
              <div className="p-4 rounded-xl bg-primary/20 shrink-0">
                <FileText className="text-primary" size={32} />
              </div>
              <div>
                <span className="text-sm font-mono text-primary">Master's Thesis</span>
                <h3 className="text-2xl font-bold mt-1">
                  Reinforcement Learning from Human Feedback to Fine-Tune Vision Models
                </h3>
              </div>
            </div>

            {/* Metadata */}
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center gap-3 text-muted-foreground">
                <GraduationCap size={18} className="text-primary" />
                <div>
                  <p className="text-xs">University</p>
                  <p className="text-sm font-medium text-foreground">University of Padova</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <User size={18} className="text-secondary" />
                <div>
                  <p className="text-xs">Supervisor</p>
                  <p className="text-sm font-medium text-foreground">Prof. Emanuele Menegatti</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Calendar size={18} className="text-accent" />
                <div>
                  <p className="text-xs">Academic Year</p>
                  <p className="text-sm font-medium text-foreground">2024/2025</p>
                </div>
              </div>
            </div>

            {/* Abstract */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-primary mb-2">Abstract</h4>
              <p className="text-muted-foreground leading-relaxed">
                This thesis explores the effectiveness of Reinforcement Learning from Human Feedback (RLHF) 
                in aligning and fine-tuning vision models. Building on recent advances in RLHF for large 
                language models, this research investigates how human-guided fine-tuning can improve the 
                performance and alignment of computer vision systems, bridging the gap between raw model 
                capabilities and human preferences.
              </p>
            </div>

            {/* Keywords */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-primary mb-2">Keywords</h4>
              <div className="flex flex-wrap gap-2">
                {['RLHF', 'Computer Vision', 'Deep Learning', 'Fine-tuning', 'Human Feedback', 'Vision Models'].map((keyword) => (
                  <span
                    key={keyword}
                    className="px-3 py-1 text-sm font-mono rounded-lg bg-muted text-muted-foreground"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://thesis.unipd.it/retrieve/5853b2d9-afb8-4a24-a78f-9caf71a52b39/Sompura_MaulikRupeshbhai.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:glow-primary transition-all duration-300"
              >
                <Download size={18} />
                Download PDF
              </a>
              <a
                href="https://thesis.unipd.it/handle/20.500.12608/93396"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-lg glass text-foreground font-medium hover:bg-muted transition-all duration-300"
              >
                <ExternalLink size={18} />
                View on UniPD
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
