import React from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-[#0B0B10] sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-white text-xl font-bold">Calibri</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'Features', 'Resources', 'Testimonials', 'Contact Us'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-gray-300 px-3 py-2 text-sm font-light"
              >
                {item}
              </a>
            ))}
            <button className="bg-gradient-to-r from-white to-[#7B7B7B] text-[#0B0B10] px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity">
              Get Started
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['Home', 'Features', 'Resources', 'Testimonials', 'Contact Us'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white block px-3 py-2 text-base font-light"
                >
                  {item}
                </a>
              ))}
              <button className="w-full bg-gradient-to-r from-white to-[#7B7B7B] text-[#0B0B10] px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity mt-4">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}