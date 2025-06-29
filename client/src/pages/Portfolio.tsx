import { useState, useEffect } from 'react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    document.title = "Portfolio - Kanha Studio";
  }, []);

  const portfolioItems = [
    {
      id: 1,
      category: 'branding',
      title: 'Sacred Lotus Spa',
      description: 'Complete brand identity and packaging design',
      image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
      tag: 'Branding',
      tagColor: 'bg-lotus-pink/20 text-lotus-pink'
    },
    {
      id: 2,
      category: 'web',
      title: 'Mindful Meditation',
      description: 'Responsive web design for wellness platform',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
      tag: 'Web Design',
      tagColor: 'bg-peacock-green/20 text-peacock-green'
    },
    {
      id: 3,
      category: 'mobile',
      title: 'Devotion Daily',
      description: 'Spiritual practice mobile application',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
      tag: 'Mobile',
      tagColor: 'bg-soft-gold/20 text-soft-gold'
    },
    {
      id: 4,
      category: 'print',
      title: 'Heritage Festival',
      description: 'Event branding and promotional materials',
      image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
      tag: 'Print',
      tagColor: 'bg-lotus-pink/20 text-lotus-pink'
    },
    {
      id: 5,
      category: 'branding',
      title: 'Pure Essence',
      description: 'Organic skincare brand identity',
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
      tag: 'Branding',
      tagColor: 'bg-lotus-pink/20 text-lotus-pink'
    },
    {
      id: 6,
      category: 'web',
      title: 'Artisan Marketplace',
      description: 'E-commerce platform for handcrafted goods',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
      tag: 'Web Design',
      tagColor: 'bg-peacock-green/20 text-peacock-green'
    }
  ];

  const filters = [
    { key: 'all', label: 'All Work' },
    { key: 'branding', label: 'Branding' },
    { key: 'web', label: 'Web Design' },
    { key: 'mobile', label: 'Mobile' },
    { key: 'print', label: 'Print' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section className="min-h-screen py-20 relative pt-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="sanskrit-quote text-sm mb-4">"Beautiful, thoughtful design"</p>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold gradient-text mb-6">Our Work</h2>
          <p className="text-lg midnight-blue/70 max-w-2xl mx-auto">
            A showcase of our creative portfolio featuring transformative designs that elevate brands and engage audiences.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter.key
                  ? 'bg-midnight-blue text-white'
                  : 'bg-white/60 midnight-blue hover:bg-peacock-green hover:text-white'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="portfolio-item bg-white/60 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-['Playfair_Display'] text-xl font-semibold midnight-blue mb-2">
                  {item.title}
                </h3>
                <p className="midnight-blue/70 text-sm mb-4">{item.description}</p>
                <span className={`text-xs px-3 py-1 rounded-full ${item.tagColor}`}>
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-peacock-green text-white px-8 py-4 rounded-full hover:bg-peacock-green/90 transition-colors shadow-lg">
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
