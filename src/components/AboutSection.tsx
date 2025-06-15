
const AboutSection = () => {
  return (
    <section className="bg-gray-800 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
            About US
          </h2>
          
          <div className="bg-gray-700 rounded-2xl p-8 md:p-12">
            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              At Cars Hub, we've revolutionized the way people buy and sell cars. Founded with a mission to make 
              quality vehicles affordable and accessible, we've built a platform that brings together buyers and 
              sellers across the nation. Our dedicated team works tirelessly to ensure every transaction is smooth, 
              transparent, and satisfying.
            </p>
            
            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              With over a decade of experience in the automotive industry, we understand what matters most to our 
              customers: reliability, affordability, and trust. Our rigorous inspection process, competitive pricing, 
              and comprehensive warranty options give you the confidence to make the right choice.
            </p>
            
            <p className="text-gray-300 leading-relaxed text-lg mb-8">
              Whether you're a first-time buyer or an experienced car enthusiast, our expert team is here to guide 
              you through every step of the process. From initial consultation to final delivery, we're committed 
              to exceeding your expectations and delivering an unmatched car buying experience.
            </p>

            <div className="text-center">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
