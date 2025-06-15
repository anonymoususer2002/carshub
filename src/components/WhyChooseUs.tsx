
import { Shield, DollarSign, Users, Wrench, Award, Clock } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      number: "01",
      title: "Get the best price for your dream car and save up to 8% on ex-showroom rates"
    },
    {
      number: "02", 
      title: "Access custom insurance deals tailored for your ride."
    },
    {
      number: "03",
      title: "Sell your car fast through social media, get top price with no hassle"
    },
    {
      number: "04",
      title: "Expert guidance to help you choose the perfect car."
    },
    {
      number: "05",
      title: "Claim Rs 5000 off on Ceramic/ PPF coating for added value"
    },
    {
      number: "06",
      title: "Compare options, schedule test drives, and explore all services conveniently in one place."
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

        <div className="text-center mt-16">
          <p className="text-gray-400 text-lg mb-6">
            Cars hub, your car purchase assistant
          </p>
          <button className="bg-transparent border border-white text-white font-bold py-3 px-8 rounded text-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
            Register Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
