import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    document.title = "Our Story - Kanha Studio";
  }, []);

  return (
    <section className="min-h-screen py-20 relative pt-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="sanskrit-quote text-sm mb-4">"Excellence in Action"</p>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold gradient-text mb-6">Our Journey</h2>
          <p className="text-lg midnight-blue/70 max-w-2xl mx-auto">
            Born from the sacred lands of Vrindavan, Kanha Studio embodies the perfect harmony between ancient wisdom and modern creativity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Creative workspace" 
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>
          <div>
            <h3 className="font-['Playfair_Display'] text-3xl font-semibold midnight-blue mb-6">The Sacred Beginning</h3>
            <p className="midnight-blue/80 mb-6 leading-relaxed">
              Founded in 2020, Kanha Studio emerged from a vision to blend the timeless aesthetics of Indian heritage with contemporary design principles. Our name draws inspiration from Lord Krishna, the divine artist who painted the universe with love and creativity.
            </p>
            <p className="midnight-blue/80 mb-6 leading-relaxed">
              We believe that every design is a form of devotion, every pixel a prayer, and every project an opportunity to create something truly divine.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-lotus-pink/20 rounded-full flex items-center justify-center">
                ❤️
              </div>
              <span className="midnight-blue font-medium">Crafted with Divine Love</span>
            </div>
          </div>
        </div>

        {/* Team Philosophy */}
        <div className="bg-white/50 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
          <h3 className="font-['Playfair_Display'] text-3xl font-semibold midnight-blue mb-8 text-center">Our Divine Philosophy</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-peacock-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                🪷
              </div>
              <h4 className="font-['Playfair_Display'] text-xl font-semibold midnight-blue mb-3">Purity</h4>
              <p className="midnight-blue/70">Clean, elegant designs that speak truth and authenticity.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-soft-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                ♾️
              </div>
              <h4 className="font-['Playfair_Display'] text-xl font-semibold midnight-blue mb-3">Harmony</h4>
              <p className="midnight-blue/70">Perfect balance between form, function, and spiritual essence.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-lotus-pink/20 rounded-full flex items-center justify-center mx-auto mb-4">
                ⭐
              </div>
              <h4 className="font-['Playfair_Display'] text-xl font-semibold midnight-blue mb-3">Excellence</h4>
              <p className="midnight-blue/70">Divine attention to detail in every creative endeavor.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
