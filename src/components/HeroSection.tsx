import logo from '../img/logo1.jpeg'; 


const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10"></div>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${logo})`
        }}
      ></div>

      <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Now own your dream car for even less.
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in">
          Discover best quotes, expert advice, and exclusive offers from the dealers.
        </p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 animate-fade-in">
          Explore More
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
