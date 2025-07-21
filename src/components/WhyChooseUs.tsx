import { Shield, DollarSign, Users, Wrench, Award, Clock } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      number: "01",
      title: "Get the best price for your dream car and save up to 8% on on-road rates"
    },
    {
      number: "02", 
      title: "Access the cheapest and best insurance deals from the dealers."
    },
    {
      number: "03",
      title: "Sell your car fast through our platform, get reasonable price with no hassle"
    },
    {
      number: "04",
      title: "Expert guidance to help you choose the perfect car."
    },
    {
      number: "05",
      title: "Redeem the quote request payment thtough partnering Ceramic/ PPF coating centres."
    },
    {
      number: "06",
      title: "Compare options, find the best insurance, loans and explore all services conveniently in one place."
    }
  ];

  return (
    <section className="bg-gray-900 py-20 relative overflow-hidden">
      {/* Background car silhouette */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div className="text-[600px] font-bold text-gray-700 select-none">
          Cars hub
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Why Choose Us?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature) => (
            <div 
              key={feature.number} 
              className="text-white"
            >
              <div className="mb-4">
                <span className="text-6xl font-bold text-white">
                  {feature.number}
                </span>
              </div>
              <p className="text-lg leading-relaxed">
                {feature.title}
              </p>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-gray-400 text-lg mb-6">
            Register your interest and get all services free.
          </p>
          <button className="bg-transparent border border-white text-white font-bold py-3 px-8 rounded text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 mb-8">
            Register Now
          </button>

          {/* Formspree Contact Form */}
          <form 
            action="https://formspree.io/f/mvgqzwqn" 
            method="POST" 
            className="max-w-xl mx-auto space-y-4 text-left"
          >
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              required 
              className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              required 
              className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <textarea 
              name="message" 
              placeholder="Your Message (Optional)" 
              className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button 
              type="submit" 
              className="w-full bg-white text-gray-900 font-bold py-3 px-6 rounded hover:bg-gray-200 transition-all duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

