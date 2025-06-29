import { Link } from 'wouter';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    document.title = "Kanha Studio - Creative Design Studio";
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Logo and Content */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-vrindavan-beige via-lotus-pink/20 to-soft-gold/30"></div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="text-9xl absolute top-16 left-16 text-peacock-green">🕉️</div>
          <div className="text-6xl absolute top-32 right-32 text-midnight-blue">🪷</div>
          <div className="text-4xl absolute bottom-32 left-32 text-lotus-pink">🦚</div>
          <div className="text-7xl absolute bottom-16 right-16 text-soft-gold">🌸</div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Centered Logo */}
            <div className="mb-12">
              <img 
                src="/assets/kanha-cover.png" 
                alt="Kanha Studio - Creative Design Studio" 
                className="mx-auto w-96 md:w-[500px] h-auto object-contain"
              />
            </div>
            
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
