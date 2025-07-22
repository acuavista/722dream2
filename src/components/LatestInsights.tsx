import { ArrowRight, Calendar, Clock } from 'lucide-react';

const LatestInsights = () => {
  const insights = [
    {
      id: 'market-trends',
      title: 'Cartagena Real Estate Market Trends 2024',
      excerpt: 'Discover the latest market insights and investment opportunities in Cartagena\'s booming property sector. Learn about appreciation rates and future projections.',
      image: '/lovable-uploads/b32d42c0-a8ef-42d6-87e1-a1647f54bb9a.png',
      date: 'December 15, 2024',
      readTime: '5 min read',
      category: 'Market Analysis',
      link: '/blog/cartagena-market-trends-2024'
    },
    {
      id: 'investment-guide',
      title: 'Foreign Investment Guide: Buying Property in Colombia',
      excerpt: 'A comprehensive guide for international buyers looking to invest in Colombian real estate. Navigate legal requirements, financing options, and tax implications.',
      image: '/lovable-uploads/b32d42c0-a8ef-42d6-87e1-a1647f54bb9a.png',
      date: 'December 10, 2024',
      readTime: '8 min read',
      category: 'Investment Guide',
      link: '/blog/foreign-investment-guide-colombia'
    },
    {
      id: 'lifestyle-benefits',
      title: 'Living the Caribbean Dream: Lifestyle Benefits of Cartagena',
      excerpt: 'Explore the incredible lifestyle advantages of owning property in Cartagena, from year-round tropical weather to rich cultural experiences and growing expat community.',
      image: '/lovable-uploads/b32d42c0-a8ef-42d6-87e1-a1647f54bb9a.png',
      date: 'December 5, 2024',
      readTime: '6 min read',
      category: 'Lifestyle',
      link: '/blog/caribbean-dream-lifestyle-cartagena'
    }
  ];

  return (
    <section id="insights" className="py-20 px-6 fade-in-on-scroll">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-foreground mb-6">Latest Insights</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Stay informed with the latest news, market trends, and expert insights about Cartagena real estate
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <article
              key={insight.id}
              className="bg-white rounded-3xl overflow-hidden group cursor-pointer fade-in-on-scroll shadow-lg border border-border/10"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-ocean/80 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full backdrop-blur-sm">
                    {insight.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center text-foreground/60 text-sm mb-3 space-x-4">
                  <div className="flex items-center">
                    <Calendar size={14} strokeWidth={1.5} className="mr-1" />
                    {insight.date}
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} strokeWidth={1.5} className="mr-1" />
                    {insight.readTime}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-foreground mb-3 group-hover:text-primary transition-colors duration-300 leading-tight">
                  {insight.title}
                </h3>

                {/* Excerpt */}
                <p className="text-foreground/80 text-sm leading-relaxed mb-4">
                  {insight.excerpt}
                </p>

                {/* CTA */}
                <div className="flex items-center text-primary group-hover:text-warm-gold transition-colors duration-300">
                  <span className="font-medium mr-2 text-sm">Continue Reading</span>
                  \<a
  href={insight.link}
  className="flex items-center text-primary group-hover:text-warm-gold transition-colors duration-300"
  style={{ textDecoration: 'none' }}
>
  <span className="font-medium mr-2 text-sm">Continue Reading</span>
  <ArrowRight size={14} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
</a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="btn-neumorphic px-8 py-3 text-primary-foreground font-medium rounded-2xl transition-all duration-300 hover:transform hover:-translate-y-1">
            View All Insights
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestInsights;