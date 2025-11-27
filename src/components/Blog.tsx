import { useState, useEffect } from 'react';
import { ExternalLink, Clock, Heart, MessageCircle, Bookmark } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  description: string;
  url: string;
  cover_image: string | null;
  published_at: string;
  reading_time_minutes: number;
  positive_reactions_count: number;
  comments_count: number;
  tag_list: string[];
}

const fallbackBlogs: BlogPost[] = [
  {
    id: 1,
    title: 'The Hidden Role of Probability in Large Language Models',
    description: 'Exploring how probability distributions drive every word LLMs generate, from creativity to hallucinations.',
    url: 'https://dev.to/maulik_sompura_22/the-hidden-role-of-probability-in-large-language-models-5f9g',
    cover_image: null,
    published_at: '2024-01-15',
    reading_time_minutes: 8,
    positive_reactions_count: 42,
    comments_count: 5,
    tag_list: ['ai', 'machinelearning', 'llm', 'probability'],
  },
];

export const Blog = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>(fallbackBlogs);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('https://dev.to/api/articles?username=maulik_sompura_22');
        if (response.ok) {
          const data = await response.json();
          if (data.length > 0) {
            setBlogs(data.slice(0, 6));
          }
        }
      } catch (error) {
        console.log('Using fallback blogs');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section id="blog" className="py-24 relative">
      <div className="absolute inset-0 hero-gradient opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Latest <span className="text-gradient">Blog Posts</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sharing insights on AI, machine learning, and software engineering
          </p>
        </div>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="glass rounded-2xl p-6 animate-pulse">
                <div className="h-40 bg-muted rounded-lg mb-4" />
                <div className="h-6 bg-muted rounded mb-2" />
                <div className="h-4 bg-muted rounded w-3/4" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog, index) => (
              <a
                key={blog.id}
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass rounded-2xl overflow-hidden hover:glow-sm transition-all duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Cover Image or Gradient */}
                <div className="relative h-40 overflow-hidden">
                  {blog.cover_image ? (
                    <img
                      src={blog.cover_image}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30 flex items-center justify-center">
                      <Bookmark size={48} className="text-primary/50" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {blog.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tag_list.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-mono rounded bg-primary/10 text-primary"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Metadata */}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      {blog.reading_time_minutes} min read
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart size={14} />
                      {blog.positive_reactions_count}
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle size={14} />
                      {blog.comments_count}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}

        {/* View All Link */}
        <div className="text-center mt-12">
          <a
            href="https://dev.to/maulik_sompura_22"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg glass text-foreground font-medium hover:bg-muted transition-all duration-300"
          >
            View All Posts on DEV.to
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};
