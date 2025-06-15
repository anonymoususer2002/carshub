
import { Shield, DollarSign, Users, Wrench, Award, Clock } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      number: "01",
      icon: Shield,
      title: "Trusted by millions",
      description: "Over 1 million cars bought through our platform with complete satisfaction"
    },
    {
      number: "02", 
      icon: DollarSign,
      title: "Best Price Guarantee",
      description: "We ensure competitive deals that save you money on every purchase"
    },
    {
      number: "03",
      icon: Users,
      title: "Expert Support Team",
      description: "Professional guidance through every step of your car buying journey"
    },
    {
      number: "04",
      icon: Wrench,
      title: "Quality Assurance",
      description: "Rigorous inspections ensure you get the best quality vehicles"
    },
    {
      number: "05",
      icon: Award,
      title: "Award Winning Service",
      description: "Recognized excellence in customer service and satisfaction"
    },
    {
      number: "06",
      icon: Clock,
      title: "Quick & Easy Process",
      description: "Streamlined procedures make car buying fast and hassle-free"
    }
  ];

  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Why Choose Us?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={feature.number} 
                className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl font-bold text-yellow-500 mr-4">
                    {feature.number}
                  </span>
                  <IconComponent className="text-yellow-500 group-hover:scale-110 transition-transform duration-300" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
            Register Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
