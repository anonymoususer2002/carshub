
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
              At Cars Hub, we've revolutionized the way people purchase, get quotes, get insurances, take loans and sell cars. Founded with a mission to ensure your 
              dream ride delivered to your doorstep at the best price, we've built a platform that brings together buyers and 
              dealers across the nation. Our dedicated platform helps you get the best rates from all the dealers, compare, get advice on cars, taking insurances, loans and so on...
            </p>
            
            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              With curious eyes we have found the solution for ensureing best prices for our users, we have partnered with various dealers to generate competitive quotes for users and ensure the best price possible.
            </p>
            
            <p className="text-gray-300 leading-relaxed text-lg mb-8">
              Whether you're a first-time buyer or an experienced car enthusiast, our expert car advice team is here to guide 
              you through every step of the process. Enjoy our hassle free service to purchase loans, get insurances and sell/buy reliable and quality inspected used cars at best price.
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
