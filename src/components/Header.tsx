
import { useState } from 'react';
import { Menu, X, Facebook, Instagram } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {/* Logo with car silhouette design */}
            <div className="relative">
              <div className="flex items-center">
                {/* Car silhouette logo */}
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
                  <div className="text-2xl font-bold text-white">
                    CARS HUB
                  </div>
                  <div className="text-xs text-gray-300 -mt-1">
                    Cars hub, your car purchase assistant
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-white hover:text-yellow-400 transition-colors">Home</a>
            <a href="#" className="text-white hover:text-yellow-400 transition-colors">Cars</a>
            <a href="#" className="text-white hover:text-yellow-400 transition-colors">About</a>
            <a href="#" className="text-white hover:text-yellow-400 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <span className="text-white text-sm">Contact Us On</span>
            <div className="flex space-x-2">
              <a href="#" className="bg-blue-600 p-2 rounded">
                <Facebook size={16} className="text-white" />
              </a>
              <a href="#" className="bg-pink-600 p-2 rounded">
                <Instagram size={16} className="text-white" />
              </a>
            </div>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-white hover:text-yellow-400 transition-colors">Home</a>
              <a href="#" className="text-white hover:text-yellow-400 transition-colors">Cars</a>
              <a href="#" className="text-white hover:text-yellow-400 transition-colors">About</a>
              <a href="#" className="text-white hover:text-yellow-400 transition-colors">Contact</a>
              <div className="flex items-center space-x-4 pt-4">
                <span className="text-white text-sm">Contact Us On</span>
                <div className="flex space-x-2">
                  <a href="#" className="bg-blue-600 p-2 rounded">
                    <Facebook size={16} className="text-white" />
                  </a>
                  <a href="#" className="bg-pink-600 p-2 rounded">
                    <Instagram size={16} className="text-white" />
                  </a>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
