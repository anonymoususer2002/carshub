
import { Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            {/* Logo section */}
            <div className="flex items-center mb-4">
              <div className="relative mr-3">
                <svg width="60" height="30" viewBox="0 0 60 30" className="text-white">
                  <path
                    d="M5 20 C5 20, 10 8, 25 8 C40 8, 50 12, 55 20 L50 20 C50 20, 45 15, 30 15 C15 15, 10 20, 5 20 Z"
                    fill="currentColor"
                    opacity="0.8"
                  />
                  <path
                    d="M8 22 C8 22, 12 18, 30 18 C48 18, 52 22, 52 22"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold">CARS HUB</h3>
                <p className="text-xs text-gray-400 -mt-1">
                  Cars hub, your car purchase assistant
                </p>
              </div>
            </div>
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
            <p className="text-gray-400 mb-4">info@carshub.com</p>
            <p className="text-gray-400 mb-4">24/7 Customer Support</p>
            
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-gray-400 text-sm">Contact Us On</span>
            </div>
            <div className="flex space-x-2">
              <a href="#" className="bg-blue-600 p-2 rounded hover:bg-blue-700 transition-colors">
                <Facebook size={20} className="text-white" />
              </a>
              <a href="#" className="bg-pink-600 p-2 rounded hover:bg-pink-700 transition-colors">
                <Instagram size={20} className="text-white" />
              </a>
            </div>
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
