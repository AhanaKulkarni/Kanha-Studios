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
      title: 'Cannister',
      description: 'Complete packaging design',
      image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
      tag: 'Branding',
      tagColor: 'bg-lotus-pink/20 text-lotus-pink',
      link: 'https://www.figma.com/design/rIaJLJCDolc8BW7nAvgdHs/cannister-project?node-id=0-1&t=SsFg3eqk7ynvEk2Y-1'
    },
    {
      id: 2,
      category: 'Web UI/UX',
      title: 'CooK-Keys',
      description: 'Complete Website Design',
      image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
      tag: 'Branding',
      tagColor: 'bg-lotus-pink/20 text-lotus-pink',
      link: 'https://www.figma.com/design/v0SszCC0z1R4wrgPHOhGIV/Proj-4?node-id=1-296&t=5DuTvtXFaEOXyhuu-1'
    },
    {
      id: 3,
      category: 'Web UI/UX',
      title: 'ChatApp',
      description: 'Complete Website Design',
      image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
      tag: 'Branding',
      tagColor: 'bg-lotus-pink/20 text-lotus-pink',
      link: 'https://www.figma.com/proto/VjAZmiGUlSkeCr99zOzD69/Practice--Chat-App-Homepage-Design--Copy-?page-id=107%3A2&node-id=8493-106&viewport=618%2C143%2C0.21&t=leFMiehBE4ll9Yhe-1&scaling=min-zoom&content-scaling=fixed'
    },
    {
      id: 4,
      category: 'web',
      title: 'Aetheron AI Website',
      description: 'Futuristic, modular site with clean UX',
      image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
      tag: 'Branding',
      tagColor: 'bg-lotus-pink/20 text-lotus-pink',
      link: 'https://www.aetheronai.online/'
    },
    {
      id: 5,
      category: 'Graphics',
      title: 'Graphic Designs',
      description: 'Various Creative Graphic Designs',
      image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
      tag: 'Branding',
      tagColor: 'bg-lotus-pink/20 text-lotus-pink',
      link: 'https://drive.google.com/drive/folders/1Jq-ltSzQSXwfN7vA-7Z4bUZk_tKO9rg5?usp=sharing'
    },
    {
      id: 6,
      category: 'Graphics',
      title: 'Magazine Graphics',
      description: 'Visioneers Entrepreneurship Magazine',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
      tag: 'Graphic Design',
      tagColor: 'bg-lotus-pink/20 text-lotus-pink',
      link: 'https://www.canva.com/design/DAGaOFgJkXU/ZEZi5p6uk3TkzVrY0XsONg/edit?utm_content=DAGaOFgJkXU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
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
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-item bg-white/60 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 block"
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
            </a>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/contact">
            <button className="bg-peacock-green text-white px-8 py-4 rounded-full hover:bg-peacock-green/90 transition-colors shadow-lg">
              Start Your Project
            </button>
          </Link>
        </div>
    </section>
  );
};

export default Portfolio;
