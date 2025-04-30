import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0B0B10] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold">Calibri</span>
          </div>
          
          <div className="flex space-x-6 text-sm text-gray-300">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Calibri. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}