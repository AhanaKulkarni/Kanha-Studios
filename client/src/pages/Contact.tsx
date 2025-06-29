import { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    document.title = "Contact - Kanha Studios";
  }, []);

  return (
    <section className="min-h-screen py-20 relative pt-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="sanskrit-quote text-sm mb-4">"Creating excellence together"</p>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold gradient-text mb-6">Connect with Us</h2>
          <p className="text-lg midnight-blue/70 max-w-2xl mx-auto">
            Ready to start your creative project? Let's create something beautiful together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h3 className="font-['Playfair_Display'] text-2xl font-semibold midnight-blue mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-peacock-green/20 rounded-full flex items-center justify-center flex-shrink-0">
                    📍
                  </div>
                  <div>
                    <h4 className="font-medium midnight-blue mb-1">Studio Location</h4>
                    <p className="midnight-blue/70">Vrindavan, Mathura<br />Uttar Pradesh, India 281121</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-lotus-pink/20 rounded-full flex items-center justify-center flex-shrink-0">
                    ✉️
                  </div>
                  <div>
                    <h4 className="font-medium midnight-blue mb-1">Email</h4>
                    <p className="midnight-blue/70">hello@kanhastudio.com<br />projects@kanhastudio.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-soft-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    📞
                  </div>
                  <div>
                    <h4 className="font-medium midnight-blue mb-1">Phone</h4>
                    <p className="midnight-blue/70">
                      <a href="tel:+918928352406" className="hover:text-peacock-green transition-colors">
                        +91 89283 52406
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {/* Social Links */}
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                <h4 className="font-medium midnight-blue mb-4">Connect With Us</h4>
                <div className="flex space-x-4 mb-4">
                  <a 
                    href="https://www.instagram.com/kanha.studios/?hl=en" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                    title="Follow us on Instagram"
                  >
                    📷
                  </a>
                  <a 
                    href="https://wa.me/918928352406" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                    title="Message us on WhatsApp"
                  >
                    💬
                  </a>
                  <span 
                    className="w-12 h-12 bg-gray-300 text-gray-500 rounded-full flex items-center justify-center cursor-not-allowed opacity-50"
                    title="LinkedIn - Coming Soon"
                  >
                    💼
                  </span>
                </div>
                <div className="text-sm text-gray-600">
                  <p>LinkedIn - Coming Soon</p>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-2 shadow-lg">
                <div className="w-full h-64 bg-gradient-to-br from-peacock-green/20 to-lotus-pink/20 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl midnight-blue/40 mb-2">🗺️</div>
                    <p className="midnight-blue/60 font-medium">Interactive Map</p>
                    <p className="text-sm midnight-blue/40">Vrindavan, Mathura</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
