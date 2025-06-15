
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            CARS HUB
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-white hover:text-yellow-400 transition-colors">Home</a>
            <a href="#" className="text-white hover:text-yellow-400 transition-colors">Cars</a>
            <a href="#" className="text-white hover:text-yellow-400 transition-colors">About</a>
            <a href="#" className="text-white hover:text-yellow-400 transition-colors">Contact</a>
          </nav>

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
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
