import { Link } from 'wouter';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    document.title = "Kanha Studio - Creative Design Studio";
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="flute-watermark">
        🎵
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="hero-animation">
          <p className="sanskrit-quote text-sm mb-4">"Where creativity meets excellence"</p>
          <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Kanha Studio</span>
          </h1>
          <p className="text-xl md:text-2xl midnight-blue/80 mb-8 max-w-3xl mx-auto">
            Where creativity meets excellence. We craft thoughtful designs that elevate your brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/portfolio">
              <button className="bg-peacock-green text-white px-8 py-4 rounded-full hover:bg-peacock-green/90 transition-colors shadow-lg">
                View Our Work
              </button>
            </Link>
            <Link href="/contact">
              <button className="border-2 border-midnight-blue midnight-blue px-8 py-4 rounded-full hover:bg-midnight-blue hover:text-white transition-colors">
                Start a Project
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
