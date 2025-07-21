import { useState } from 'react';
import { Menu, X, Facebook, Instagram, MessageSquare } from 'lucide-react';
import Chat from './ui/chat';
import logo from '../img/logo.jpeg'; // or './img/logo.jpeg' depending on path


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {/* Logo with image and text */}
              <div className="relative">
                <div className="flex items-center space-x-3">
                  {/* JPG Image Logo */}
                  <img
                    src={logo}
                    alt="CARS HUB Logo"
                    className="w-24 h-17 object-contain rounded-md"
                  />
                </div>
              </div>
            </div>


            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-white hover:text-yellow-400 transition-colors">Home</a>
              <a href="#" className="text-white hover:text-yellow-400 transition-colors">Cars</a>
              <a href="#" className="text-white hover:text-yellow-400 transition-colors">About</a>
              <a href="#" className="text-white hover:text-yellow-400 transition-colors">Contact</a>
              <button
                onClick={() => setIsChatOpen(true)}
                className="flex items-center space-x-1 text-white hover:text-yellow-400 transition-colors"
              >
                <MessageSquare size={18} />
                <span>Car AI Assistant</span>
              </button>
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
                <button
                  onClick={() => setIsChatOpen(true)}
                  className="flex items-center space-x-1 text-white hover:text-yellow-400 transition-colors"
                >
                  <MessageSquare size={18} />
                  <span>Car AI Assistant</span>
                </button>
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

      <Chat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
};

export default Header;
