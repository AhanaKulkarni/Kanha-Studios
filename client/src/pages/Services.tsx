import { useEffect } from 'react';

const Services = () => {
  useEffect(() => {
    document.title = "Services - Kanha Studio";
  }, []);

  const services = [
    {
      icon: '🎨',
      title: 'Brand Identity',
      description: 'Crafting divine brand identities that resonate with souls and capture the essence of your vision.',
      features: ['Logo Design', 'Brand Guidelines', 'Visual Identity Systems', 'Brand Strategy'],
      bgColor: 'bg-peacock-green/20'
    },
    {
      icon: '💻',
      title: 'UI/UX Design',
      description: 'Creating intuitive digital experiences that flow like a sacred river, guiding users with grace.',
      features: ['User Interface Design', 'User Experience Research', 'Prototyping', 'Design Systems'],
      bgColor: 'bg-lotus-pink/20'
    },
    {
      icon: '🌐',
      title: 'Web Design',
      description: 'Building digital temples that showcase your offerings with beauty, functionality, and divine purpose.',
      features: ['Responsive Websites', 'E-commerce Design', 'Landing Pages', 'CMS Integration'],
      bgColor: 'bg-soft-gold/20'
    },
    {
      icon: '🖨️',
      title: 'Print Design',
      description: 'Transforming physical materials into works of art that carry your message with elegance and impact.',
      features: ['Brochures & Flyers', 'Business Cards', 'Packaging Design', 'Marketing Materials'],
      bgColor: 'bg-peacock-green/20'
    },
    {
      icon: '📱',
      title: 'Mobile Design',
      description: 'Crafting mobile experiences that fit perfectly in your users\' hands and hearts.',
      features: ['iOS App Design', 'Android App Design', 'Mobile Prototyping', 'App Store Assets'],
      bgColor: 'bg-lotus-pink/20'
    },
    {
      icon: '📊',
      title: 'Digital Strategy',
      description: 'Guiding your digital journey with wisdom and strategic thinking for lasting success.',
      features: ['Digital Consultation', 'Creative Direction', 'Brand Positioning', 'Growth Strategy'],
      bgColor: 'bg-soft-gold/20'
    }
  ];

  return (
    <section className="min-h-screen py-20 relative pt-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="sanskrit-quote text-sm mb-4">"कर्मण्येवाधिकारस्ते" - Excellence in Service</p>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold gradient-text mb-6">Our Sacred Services</h2>
          <p className="text-lg midnight-blue/70 max-w-2xl mx-auto">
            We offer divine creative solutions that transform visions into beautiful realities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className={`w-16 h-16 ${service.bgColor} rounded-full flex items-center justify-center mb-6 text-2xl`}>
                {service.icon}
              </div>
              <h3 className="font-['Playfair_Display'] text-2xl font-semibold midnight-blue mb-4">{service.title}</h3>
              <p className="midnight-blue/70 mb-6">{service.description}</p>
              <ul className="text-sm midnight-blue/60 space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx}>• {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
