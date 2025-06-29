import { Link } from 'wouter';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    document.title = "Kanha Studio - Creative Design Studio";
  }, []);

  return (
    <div className="min-h-screen">
      {/* Cover Image Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img 
          src="/assets/kanha-cover.png" 
          alt="Kanha Studio - Creative Design Studio" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </section>

      {/* Content Section Below Image */}
      <section className="bg-gradient-to-br from-vrindavan-beige via-lotus-pink/20 to-soft-gold/30 py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl midnight-blue/80 mb-12 font-light leading-relaxed">
              Where creativity meets excellence. We craft thoughtful designs that elevate your brand.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/portfolio">
                <button className="bg-peacock-green text-white px-8 py-4 rounded-full font-medium hover:bg-peacock-green/90 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  View Our Work
                </button>
              </Link>
              <Link href="/contact">
                <button className="border-2 border-midnight-blue text-midnight-blue px-8 py-4 rounded-full font-medium hover:bg-midnight-blue hover:text-white transition-all duration-300 hover:scale-105">
                  Start a Project
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
