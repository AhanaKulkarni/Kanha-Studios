import { useEffect } from 'react';

const Services = () => {
  useEffect(() => {
    document.title = "Services - Kanha Studio";
  }, []);

  const services = [
    {
      icon: '🎨',
      title: 'Brand Identity',
      description: 'Creating powerful brand identities that capture your unique vision and connect with your audience.',
      features: ['Logo Design', 'Brand Guidelines', 'Visual Identity Systems', 'Brand Strategy'],
      bgColor: 'bg-peacock-green/20'
    },
    {
      icon: '💻',
      title: 'UI/UX Design',
      description: 'Creating intuitive digital experiences that guide users seamlessly through your product.',
      features: ['User Interface Design', 'User Experience Research', 'Prototyping', 'Design Systems'],
      bgColor: 'bg-lotus-pink/20'
    },
    {
      icon: '🌐',
      title: 'Web Design',
      description: 'Building beautiful, functional websites that showcase your offerings with purpose and elegance.',
      features: ['Responsive Websites', 'E-commerce Design', 'Landing Pages', 'CMS Integration'],
      bgColor: 'bg-soft-gold/20'
    },
    {
      icon: '🖨️',
      title: 'Print Design',
      description: 'Creating impactful print materials that effectively communicate your message with elegance.',
      features: ['Brochures & Flyers', 'Business Cards', 'Packaging Design', 'Marketing Materials'],
      bgColor: 'bg-peacock-green/20'
    },
    {
      icon: '📱',
      title: 'Mobile Design',
      description: 'Designing mobile experiences that engage users and deliver seamless functionality.',
      features: ['iOS App Design', 'Android App Design', 'Mobile Prototyping', 'App Store Assets'],
      bgColor: 'bg-lotus-pink/20'
    },
    {
      icon: '📊',
      title: 'Digital Strategy',
      description: 'Strategic planning and consultation to guide your digital transformation and growth.',
      features: ['Digital Consultation', 'Creative Direction', 'Brand Positioning', 'Growth Strategy'],
      bgColor: 'bg-soft-gold/20'
    }
  ];

  return (
    <section className="min-h-screen py-20 relative pt-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="sanskrit-quote text-sm mb-4">"Excellence in every creation"</p>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold gradient-text mb-6">Our Services</h2>
          <p className="text-lg midnight-blue/70 max-w-2xl mx-auto">
            We offer comprehensive creative solutions that transform visions into beautiful realities.
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
