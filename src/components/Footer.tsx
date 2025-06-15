
const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">CARS HUB</h3>
            <p className="text-gray-400">
              Your trusted partner in finding the perfect vehicle at the best price.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Cars</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Buy Cars</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Sell Cars</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Car Loans</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Insurance</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-400 mb-2">1-800-CARS-HUB</p>
            <p className="text-gray-400 mb-2">info@carshub.com</p>
            <p className="text-gray-400">24/7 Customer Support</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Cars Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
